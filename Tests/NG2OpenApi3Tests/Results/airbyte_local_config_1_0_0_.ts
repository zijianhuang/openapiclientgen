import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A source actor catalog with the timestamp it was mostly recently updated */
	export interface ActorCatalogWithUpdatedAt {
		catalog?: string | null;
		updatedAt?: number | null;
	}

	/** A source actor catalog with the timestamp it was mostly recently updated */
	export interface ActorCatalogWithUpdatedAtFormProperties {
		catalog: FormControl<string | null | undefined>,
		updatedAt: FormControl<number | null | undefined>,
	}
	export function CreateActorCatalogWithUpdatedAtFormGroup() {
		return new FormGroup<ActorCatalogWithUpdatedAtFormProperties>({
			catalog: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level. */
	export interface ActorDefinitionResourceRequirements {

		/** optional resource requirements to run workers (blank for unbounded allocations) */
		default?: ResourceRequirements;
		jobSpecific?: Array<JobTypeResourceLimit>;
	}

	/** actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level. */
	export interface ActorDefinitionResourceRequirementsFormProperties {
	}
	export function CreateActorDefinitionResourceRequirementsFormGroup() {
		return new FormGroup<ActorDefinitionResourceRequirementsFormProperties>({
		});

	}


	/** optional resource requirements to run workers (blank for unbounded allocations) */
	export interface ResourceRequirements {
		cpu_limit?: string | null;
		cpu_request?: string | null;
		memory_limit?: string | null;
		memory_request?: string | null;
	}

	/** optional resource requirements to run workers (blank for unbounded allocations) */
	export interface ResourceRequirementsFormProperties {
		cpu_limit: FormControl<string | null | undefined>,
		cpu_request: FormControl<string | null | undefined>,
		memory_limit: FormControl<string | null | undefined>,
		memory_request: FormControl<string | null | undefined>,
	}
	export function CreateResourceRequirementsFormGroup() {
		return new FormGroup<ResourceRequirementsFormProperties>({
			cpu_limit: new FormControl<string | null | undefined>(undefined),
			cpu_request: new FormControl<string | null | undefined>(undefined),
			memory_limit: new FormControl<string | null | undefined>(undefined),
			memory_request: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** sets resource requirements for a specific job type for an actor definition. these values override the default, if both are set. */
	export interface JobTypeResourceLimit {

		/**
		 * enum that describes the different types of jobs that the platform runs.
		 * Required
		 */
		jobType: JobTypeResourceLimitJobType;

		/**
		 * optional resource requirements to run workers (blank for unbounded allocations)
		 * Required
		 */
		resourceRequirements: ResourceRequirements;
	}

	/** sets resource requirements for a specific job type for an actor definition. these values override the default, if both are set. */
	export interface JobTypeResourceLimitFormProperties {

		/**
		 * enum that describes the different types of jobs that the platform runs.
		 * Required
		 */
		jobType: FormControl<JobTypeResourceLimitJobType | null | undefined>,
	}
	export function CreateJobTypeResourceLimitFormGroup() {
		return new FormGroup<JobTypeResourceLimitFormProperties>({
			jobType: new FormControl<JobTypeResourceLimitJobType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobTypeResourceLimitJobType { get_spec = 0, check_connection = 1, discover_schema = 2, sync = 3, reset_connection = 4, connection_updater = 5, replicate = 6 }

	export interface AdvancedAuth {
		authFlowType?: AdvancedAuthAuthFlowType | null;
		oauthConfigSpecification?: OAuthConfigSpecification;

		/** Json Path to a field in the connectorSpecification that should exist for the advanced auth to be applicable. */
		predicateKey?: Array<string>;

		/** Value of the predicate_key fields for the advanced auth to be applicable. */
		predicateValue?: string | null;
	}
	export interface AdvancedAuthFormProperties {
		authFlowType: FormControl<AdvancedAuthAuthFlowType | null | undefined>,

		/** Value of the predicate_key fields for the advanced auth to be applicable. */
		predicateValue: FormControl<string | null | undefined>,
	}
	export function CreateAdvancedAuthFormGroup() {
		return new FormGroup<AdvancedAuthFormProperties>({
			authFlowType: new FormControl<AdvancedAuthAuthFlowType | null | undefined>(undefined),
			predicateValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdvancedAuthAuthFlowType { 'oauth2.0' = 0, 'oauth1.0' = 1 }

	export interface OAuthConfigSpecification {

		/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
		completeOAuthOutputSpecification?: OAuthConfiguration;

		/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
		completeOAuthServerInputSpecification?: OAuthConfiguration;

		/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
		completeOAuthServerOutputSpecification?: OAuthConfiguration;

		/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
		oauthUserInputFromConnectorConfigSpecification?: OAuthConfiguration;
	}
	export interface OAuthConfigSpecificationFormProperties {
	}
	export function CreateOAuthConfigSpecificationFormGroup() {
		return new FormGroup<OAuthConfigSpecificationFormProperties>({
		});

	}


	/** describes the available schema (catalog). */
	export interface AirbyteCatalog {

		/** Required */
		streams: Array<AirbyteStreamAndConfiguration>;
	}

	/** describes the available schema (catalog). */
	export interface AirbyteCatalogFormProperties {
	}
	export function CreateAirbyteCatalogFormGroup() {
		return new FormGroup<AirbyteCatalogFormProperties>({
		});

	}


	/** each stream is split in two parts; the immutable schema from source and mutable configuration for destination */
	export interface AirbyteStreamAndConfiguration {

		/** the mutable part of the stream to configure the destination */
		config?: AirbyteStreamConfiguration;

		/** the immutable schema defined by the source */
		stream?: AirbyteStream;
	}

	/** each stream is split in two parts; the immutable schema from source and mutable configuration for destination */
	export interface AirbyteStreamAndConfigurationFormProperties {
	}
	export function CreateAirbyteStreamAndConfigurationFormGroup() {
		return new FormGroup<AirbyteStreamAndConfigurationFormProperties>({
		});

	}


	/** the mutable part of the stream to configure the destination */
	export interface AirbyteStreamConfiguration {

		/** Alias name to the stream to be used in the destination */
		aliasName?: string | null;

		/** Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if `sync_mode` is `incremental`. Otherwise it is ignored. */
		cursorField?: Array<string>;

		/** Required */
		destinationSyncMode: AirbyteStreamConfigurationDestinationSyncMode;

		/** Whether field selection should be enabled. If this is true, only the properties in `selectedFields` will be included. */
		fieldSelectionEnabled?: boolean | null;

		/** Paths to the fields that will be used as primary key. This field is REQUIRED if `destination_sync_mode` is `*_dedup`. Otherwise it is ignored. */
		primaryKey?: Array<string>;

		/** If this is true, the stream is selected with all of its properties. For new connections, this considers if the stream is suggested or not */
		selected?: boolean | null;

		/** Paths to the fields that will be included in the configured catalog. This must be set if `fieldSelectedEnabled` is set. An empty list indicates that no properties will be included. */
		selectedFields?: Array<SelectedFieldInfo>;

		/** Does the connector suggest that this stream be enabled by default? */
		suggested?: boolean | null;

		/** Required */
		syncMode: AirbyteStreamConfigurationSyncMode;
	}

	/** the mutable part of the stream to configure the destination */
	export interface AirbyteStreamConfigurationFormProperties {

		/** Alias name to the stream to be used in the destination */
		aliasName: FormControl<string | null | undefined>,

		/** Required */
		destinationSyncMode: FormControl<AirbyteStreamConfigurationDestinationSyncMode | null | undefined>,

		/** Whether field selection should be enabled. If this is true, only the properties in `selectedFields` will be included. */
		fieldSelectionEnabled: FormControl<boolean | null | undefined>,

		/** If this is true, the stream is selected with all of its properties. For new connections, this considers if the stream is suggested or not */
		selected: FormControl<boolean | null | undefined>,

		/** Does the connector suggest that this stream be enabled by default? */
		suggested: FormControl<boolean | null | undefined>,

		/** Required */
		syncMode: FormControl<AirbyteStreamConfigurationSyncMode | null | undefined>,
	}
	export function CreateAirbyteStreamConfigurationFormGroup() {
		return new FormGroup<AirbyteStreamConfigurationFormProperties>({
			aliasName: new FormControl<string | null | undefined>(undefined),
			destinationSyncMode: new FormControl<AirbyteStreamConfigurationDestinationSyncMode | null | undefined>(undefined, [Validators.required]),
			fieldSelectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			selected: new FormControl<boolean | null | undefined>(undefined),
			suggested: new FormControl<boolean | null | undefined>(undefined),
			syncMode: new FormControl<AirbyteStreamConfigurationSyncMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AirbyteStreamConfigurationDestinationSyncMode { append = 0, overwrite = 1, append_dedup = 2 }


	/** Path to a field/column/property in a stream to be selected. For example, if the field to be selected is a database column called "foo", this will be ["foo"]. Use multiple path elements for nested schemas. */
	export interface SelectedFieldInfo {
		fieldPath?: Array<string>;
	}

	/** Path to a field/column/property in a stream to be selected. For example, if the field to be selected is a database column called "foo", this will be ["foo"]. Use multiple path elements for nested schemas. */
	export interface SelectedFieldInfoFormProperties {
	}
	export function CreateSelectedFieldInfoFormGroup() {
		return new FormGroup<SelectedFieldInfoFormProperties>({
		});

	}

	export enum AirbyteStreamConfigurationSyncMode { full_refresh = 0, incremental = 1 }


	/** the immutable schema defined by the source */
	export interface AirbyteStream {

		/** Path to the field that will be used to determine if a record is new or modified since the last sync. If not provided by the source, the end user will have to specify the comparable themselves. */
		defaultCursorField?: Array<string>;

		/** Stream schema using Json Schema specs. */
		jsonSchema?: StreamJsonSchema;

		/**
		 * Stream's name.
		 * Required
		 */
		name: string;

		/** Optional Source-defined namespace. Airbyte streams from the same sources should have the same namespace. Currently only used by JDBC destinations to determine what schema to write to. */
		namespace?: string | null;

		/** If the source defines the cursor field, then any other cursor field inputs will be ignored. If it does not, either the user_provided one is used, or the default one is used as a backup. */
		sourceDefinedCursor?: boolean | null;

		/** If the source defines the primary key, paths to the fields that will be used as a primary key. If not provided by the source, the end user will have to specify the primary key themselves. */
		sourceDefinedPrimaryKey?: Array<string>;
		supportedSyncModes?: Array<SyncMode>;
	}

	/** the immutable schema defined by the source */
	export interface AirbyteStreamFormProperties {

		/**
		 * Stream's name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Optional Source-defined namespace. Airbyte streams from the same sources should have the same namespace. Currently only used by JDBC destinations to determine what schema to write to. */
		namespace: FormControl<string | null | undefined>,

		/** If the source defines the cursor field, then any other cursor field inputs will be ignored. If it does not, either the user_provided one is used, or the default one is used as a backup. */
		sourceDefinedCursor: FormControl<boolean | null | undefined>,
	}
	export function CreateAirbyteStreamFormGroup() {
		return new FormGroup<AirbyteStreamFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<string | null | undefined>(undefined),
			sourceDefinedCursor: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Stream schema using Json Schema specs. */
	export interface StreamJsonSchema {
	}

	/** Stream schema using Json Schema specs. */
	export interface StreamJsonSchemaFormProperties {
	}
	export function CreateStreamJsonSchemaFormGroup() {
		return new FormGroup<StreamJsonSchemaFormProperties>({
		});

	}

	export enum SyncMode { full_refresh = 0, incremental = 1 }


	/** Indicates where the error originated. If not set, the origin of error is not well known. */
	export enum AttemptFailureOrigin { source = 0, destination = 1, replication = 2, persistence = 3, normalization = 4, dbt = 5, airbyte_platform = 6, unknown = 7 }

	export interface AttemptFailureReason {
		externalMessage?: string | null;

		/** Indicates where the error originated. If not set, the origin of error is not well known. */
		failureOrigin?: AttemptFailureOrigin | null;

		/** Categorizes well known errors into types for programmatic handling. If not set, the type of error is not well known. */
		failureType?: AttemptFailureReasonFailureType | null;
		internalMessage?: string | null;

		/** True if it is known that retrying may succeed, e.g. for a transient failure. False if it is known that a retry will not succeed, e.g. for a configuration issue. If not set, retryable status is not well known. */
		retryable?: boolean | null;
		stacktrace?: string | null;

		/** Required */
		timestamp: number;
	}
	export interface AttemptFailureReasonFormProperties {
		externalMessage: FormControl<string | null | undefined>,

		/** Indicates where the error originated. If not set, the origin of error is not well known. */
		failureOrigin: FormControl<AttemptFailureOrigin | null | undefined>,

		/** Categorizes well known errors into types for programmatic handling. If not set, the type of error is not well known. */
		failureType: FormControl<AttemptFailureReasonFailureType | null | undefined>,
		internalMessage: FormControl<string | null | undefined>,

		/** True if it is known that retrying may succeed, e.g. for a transient failure. False if it is known that a retry will not succeed, e.g. for a configuration issue. If not set, retryable status is not well known. */
		retryable: FormControl<boolean | null | undefined>,
		stacktrace: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateAttemptFailureReasonFormGroup() {
		return new FormGroup<AttemptFailureReasonFormProperties>({
			externalMessage: new FormControl<string | null | undefined>(undefined),
			failureOrigin: new FormControl<AttemptFailureOrigin | null | undefined>(undefined),
			failureType: new FormControl<AttemptFailureReasonFailureType | null | undefined>(undefined),
			internalMessage: new FormControl<string | null | undefined>(undefined),
			retryable: new FormControl<boolean | null | undefined>(undefined),
			stacktrace: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AttemptFailureReasonFailureType { config_error = 0, system_error = 1, manual_cancellation = 2, refresh_schema = 3 }

	export interface AttemptFailureSummary {

		/** Required */
		failures: Array<AttemptFailureReason>;

		/** True if the number of committed records for this attempt was greater than 0. False if 0 records were committed. If not set, the number of committed records is unknown. */
		partialSuccess?: boolean | null;
	}
	export interface AttemptFailureSummaryFormProperties {

		/** True if the number of committed records for this attempt was greater than 0. False if 0 records were committed. If not set, the number of committed records is unknown. */
		partialSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateAttemptFailureSummaryFormGroup() {
		return new FormGroup<AttemptFailureSummaryFormProperties>({
			partialSuccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Categorizes well known errors into types for programmatic handling. If not set, the type of error is not well known. */
	export enum AttemptFailureType { config_error = 0, system_error = 1, manual_cancellation = 2, refresh_schema = 3 }

	export interface AttemptInfoRead {

		/** Required */
		attempt: AttemptRead;

		/** Required */
		logs: LogRead;
	}
	export interface AttemptInfoReadFormProperties {
	}
	export function CreateAttemptInfoReadFormGroup() {
		return new FormGroup<AttemptInfoReadFormProperties>({
		});

	}

	export interface AttemptRead {
		bytesSynced?: number | null;

		/** Required */
		createdAt: number;
		endedAt?: number | null;
		failureSummary?: AttemptFailureSummary;

		/** Required */
		id: number;
		recordsSynced?: number | null;

		/** Required */
		status: AttemptReadStatus;
		streamStats?: Array<AttemptStreamStats>;
		totalStats?: AttemptStats;

		/** Required */
		updatedAt: number;
	}
	export interface AttemptReadFormProperties {
		bytesSynced: FormControl<number | null | undefined>,

		/** Required */
		createdAt: FormControl<number | null | undefined>,
		endedAt: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,
		recordsSynced: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<AttemptReadStatus | null | undefined>,

		/** Required */
		updatedAt: FormControl<number | null | undefined>,
	}
	export function CreateAttemptReadFormGroup() {
		return new FormGroup<AttemptReadFormProperties>({
			bytesSynced: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endedAt: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			recordsSynced: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AttemptReadStatus | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AttemptReadStatus { running = 0, failed = 1, succeeded = 2 }

	export interface AttemptStreamStats {

		/** Required */
		stats: AttemptStats;

		/** Required */
		streamName: string;
		streamNamespace?: string | null;
	}
	export interface AttemptStreamStatsFormProperties {

		/** Required */
		streamName: FormControl<string | null | undefined>,
		streamNamespace: FormControl<string | null | undefined>,
	}
	export function CreateAttemptStreamStatsFormGroup() {
		return new FormGroup<AttemptStreamStatsFormProperties>({
			streamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streamNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttemptStats {
		bytesEmitted?: number | null;
		estimatedBytes?: number | null;
		estimatedRecords?: number | null;
		recordsCommitted?: number | null;
		recordsEmitted?: number | null;
		stateMessagesEmitted?: number | null;
	}
	export interface AttemptStatsFormProperties {
		bytesEmitted: FormControl<number | null | undefined>,
		estimatedBytes: FormControl<number | null | undefined>,
		estimatedRecords: FormControl<number | null | undefined>,
		recordsCommitted: FormControl<number | null | undefined>,
		recordsEmitted: FormControl<number | null | undefined>,
		stateMessagesEmitted: FormControl<number | null | undefined>,
	}
	export function CreateAttemptStatsFormGroup() {
		return new FormGroup<AttemptStatsFormProperties>({
			bytesEmitted: new FormControl<number | null | undefined>(undefined),
			estimatedBytes: new FormControl<number | null | undefined>(undefined),
			estimatedRecords: new FormControl<number | null | undefined>(undefined),
			recordsCommitted: new FormControl<number | null | undefined>(undefined),
			recordsEmitted: new FormControl<number | null | undefined>(undefined),
			stateMessagesEmitted: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LogRead {

		/** Required */
		logLines: Array<string>;
	}
	export interface LogReadFormProperties {
	}
	export function CreateLogReadFormGroup() {
		return new FormGroup<LogReadFormProperties>({
		});

	}

	export interface AttemptNormalizationStatusRead {
		attemptNumber?: number | null;
		hasNormalizationFailed?: boolean | null;
		hasRecordsCommitted?: boolean | null;
		recordsCommitted?: number | null;
	}
	export interface AttemptNormalizationStatusReadFormProperties {
		attemptNumber: FormControl<number | null | undefined>,
		hasNormalizationFailed: FormControl<boolean | null | undefined>,
		hasRecordsCommitted: FormControl<boolean | null | undefined>,
		recordsCommitted: FormControl<number | null | undefined>,
	}
	export function CreateAttemptNormalizationStatusReadFormGroup() {
		return new FormGroup<AttemptNormalizationStatusReadFormProperties>({
			attemptNumber: new FormControl<number | null | undefined>(undefined),
			hasNormalizationFailed: new FormControl<boolean | null | undefined>(undefined),
			hasRecordsCommitted: new FormControl<boolean | null | undefined>(undefined),
			recordsCommitted: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AttemptNormalizationStatusReadList {
		attemptNormalizationStatuses?: Array<AttemptNormalizationStatusRead>;
	}
	export interface AttemptNormalizationStatusReadListFormProperties {
	}
	export function CreateAttemptNormalizationStatusReadListFormGroup() {
		return new FormGroup<AttemptNormalizationStatusReadListFormProperties>({
		});

	}

	export enum AttemptStatus { running = 0, failed = 1, succeeded = 2 }

	export interface AttemptSyncConfig {

		/**
		 * The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.
		 * Required
		 */
		destinationConfiguration: DestinationConfiguration;

		/**
		 * The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.
		 * Required
		 */
		sourceConfiguration: SourceConfiguration;

		/** Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set. */
		state?: ConnectionState;
	}
	export interface AttemptSyncConfigFormProperties {
	}
	export function CreateAttemptSyncConfigFormGroup() {
		return new FormGroup<AttemptSyncConfigFormProperties>({
		});

	}


	/** Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set. */
	export interface ConnectionState {

		/** Required */
		connectionId: string;
		globalState?: GlobalState;
		state?: StateBlob;

		/** Required */
		stateType: ConnectionStateStateType;
		streamState?: Array<StreamState>;
	}

	/** Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set. */
	export interface ConnectionStateFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		stateType: FormControl<ConnectionStateStateType | null | undefined>,
	}
	export function CreateConnectionStateFormGroup() {
		return new FormGroup<ConnectionStateFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateType: new FormControl<ConnectionStateStateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GlobalState {
		shared_state?: StateBlob;

		/** Required */
		streamStates: Array<StreamState>;
	}
	export interface GlobalStateFormProperties {
	}
	export function CreateGlobalStateFormGroup() {
		return new FormGroup<GlobalStateFormProperties>({
		});

	}

	export interface StateBlob {
	}
	export interface StateBlobFormProperties {
	}
	export function CreateStateBlobFormGroup() {
		return new FormGroup<StateBlobFormProperties>({
		});

	}

	export interface StreamState {

		/** Required */
		streamDescriptor: StreamDescriptor;
		streamState?: StateBlob;
	}
	export interface StreamStateFormProperties {
	}
	export function CreateStreamStateFormGroup() {
		return new FormGroup<StreamStateFormProperties>({
		});

	}

	export interface StreamDescriptor {

		/** Required */
		name: string;
		namespace?: string | null;
	}
	export interface StreamDescriptorFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateStreamDescriptorFormGroup() {
		return new FormGroup<StreamDescriptorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectionStateStateType { global = 0, stream = 1, legacy = 2, not_set = 3 }

	export interface AuthSpecification {
		auth_type?: AuthSpecificationAuth_type | null;

		/** An object containing any metadata needed to describe this connector's Oauth flow */
		oauth2Specification?: OAuth2Specification;
	}
	export interface AuthSpecificationFormProperties {
		auth_type: FormControl<AuthSpecificationAuth_type | null | undefined>,
	}
	export function CreateAuthSpecificationFormGroup() {
		return new FormGroup<AuthSpecificationFormProperties>({
			auth_type: new FormControl<AuthSpecificationAuth_type | null | undefined>(undefined),
		});

	}

	export enum AuthSpecificationAuth_type { 'oauth2.0' = 0 }


	/** An object containing any metadata needed to describe this connector's Oauth flow */
	export interface OAuth2Specification {

		/**
		 * Pointers to the fields in the rootObject needed to obtain the initial refresh/access tokens for the OAuth flow. Each inner array represents the path in the rootObject of the referenced field. For example. Assume the rootObject contains params 'app_secret', 'app_id' which are needed to get the initial refresh token. If they are not nested in the rootObject, then the array would look like this [['app_secret'], ['app_id']] If they are nested inside an object called 'auth_params' then this array would be [['auth_params', 'app_secret'], ['auth_params', 'app_id']]
		 * Required
		 */
		oauthFlowInitParameters: Array<string>;

		/**
		 * Pointers to the fields in the rootObject which can be populated from successfully completing the oauth flow using the init parameters. This is typically a refresh/access token. Each inner array represents the path in the rootObject of the referenced field.
		 * Required
		 */
		oauthFlowOutputParameters: Array<string>;

		/**
		 * A list of strings representing a pointer to the root object which contains any oauth parameters in the ConnectorSpecification.
		 * Examples:
		 * if oauth parameters were contained inside the top level, rootObject=[] If they were nested inside another object {'credentials': {'app_id' etc...}, rootObject=['credentials'] If they were inside a oneOf {'switch': {oneOf: [{client_id...}, {non_oauth_param]}},  rootObject=['switch', 0]
		 * Required
		 */
		rootObject: Array<string>;
	}

	/** An object containing any metadata needed to describe this connector's Oauth flow */
	export interface OAuth2SpecificationFormProperties {
	}
	export function CreateOAuth2SpecificationFormGroup() {
		return new FormGroup<OAuth2SpecificationFormProperties>({
		});

	}


	/** Describes the difference between two Airbyte catalogs. */
	export interface CatalogDiff {

		/**
		 * list of stream transformations. order does not matter.
		 * Required
		 */
		transforms: Array<StreamTransform>;
	}

	/** Describes the difference between two Airbyte catalogs. */
	export interface CatalogDiffFormProperties {
	}
	export function CreateCatalogDiffFormGroup() {
		return new FormGroup<CatalogDiffFormProperties>({
		});

	}

	export interface StreamTransform {

		/** Required */
		streamDescriptor: StreamDescriptor;

		/** Required */
		transformType: StreamTransformTransformType;

		/** list of field transformations. order does not matter. */
		updateStream?: Array<FieldTransform>;
	}
	export interface StreamTransformFormProperties {

		/** Required */
		transformType: FormControl<StreamTransformTransformType | null | undefined>,
	}
	export function CreateStreamTransformFormGroup() {
		return new FormGroup<StreamTransformFormProperties>({
			transformType: new FormControl<StreamTransformTransformType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StreamTransformTransformType { add_stream = 0, remove_stream = 1, update_stream = 2 }


	/** Describes the difference between two Streams. */
	export interface FieldTransform {
		addField?: FieldAdd;

		/** Required */
		breaking: boolean;

		/**
		 * A field name is a list of strings that form the path to the field.
		 * Required
		 */
		fieldName: Array<string>;
		removeField?: FieldRemove;

		/** Required */
		transformType: FieldTransformTransformType;
		updateFieldSchema?: FieldSchemaUpdate;
	}

	/** Describes the difference between two Streams. */
	export interface FieldTransformFormProperties {

		/** Required */
		breaking: FormControl<boolean | null | undefined>,

		/** Required */
		transformType: FormControl<FieldTransformTransformType | null | undefined>,
	}
	export function CreateFieldTransformFormGroup() {
		return new FormGroup<FieldTransformFormProperties>({
			breaking: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			transformType: new FormControl<FieldTransformTransformType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FieldAdd {

		/** JSONSchema representation of the field */
		schema?: FieldSchema;
	}
	export interface FieldAddFormProperties {
	}
	export function CreateFieldAddFormGroup() {
		return new FormGroup<FieldAddFormProperties>({
		});

	}


	/** JSONSchema representation of the field */
	export interface FieldSchema {
	}

	/** JSONSchema representation of the field */
	export interface FieldSchemaFormProperties {
	}
	export function CreateFieldSchemaFormGroup() {
		return new FormGroup<FieldSchemaFormProperties>({
		});

	}

	export interface FieldRemove {

		/** JSONSchema representation of the field */
		schema?: FieldSchema;
	}
	export interface FieldRemoveFormProperties {
	}
	export function CreateFieldRemoveFormGroup() {
		return new FormGroup<FieldRemoveFormProperties>({
		});

	}

	export enum FieldTransformTransformType { add_field = 0, remove_field = 1, update_field_schema = 2 }

	export interface FieldSchemaUpdate {

		/**
		 * JSONSchema representation of the field
		 * Required
		 */
		newSchema: FieldSchema;

		/**
		 * JSONSchema representation of the field
		 * Required
		 */
		oldSchema: FieldSchema;
	}
	export interface FieldSchemaUpdateFormProperties {
	}
	export function CreateFieldSchemaUpdateFormGroup() {
		return new FormGroup<FieldSchemaUpdateFormProperties>({
		});

	}

	export interface CheckConnectionRead {

		/** Required */
		jobInfo: SynchronousJobRead;
		message?: string | null;

		/** Required */
		status: CheckConnectionReadStatus;
	}
	export interface CheckConnectionReadFormProperties {
		message: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<CheckConnectionReadStatus | null | undefined>,
	}
	export function CreateCheckConnectionReadFormGroup() {
		return new FormGroup<CheckConnectionReadFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CheckConnectionReadStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SynchronousJobRead {

		/** only present if a config id was provided. */
		configId?: string | null;

		/** Required */
		configType: SynchronousJobReadConfigType;
		connectorConfigurationUpdated?: boolean | null;

		/** Required */
		createdAt: number;

		/** Required */
		endedAt: number;

		/** Required */
		id: string;
		logs?: LogRead;

		/** Required */
		succeeded: boolean;
	}
	export interface SynchronousJobReadFormProperties {

		/** only present if a config id was provided. */
		configId: FormControl<string | null | undefined>,

		/** Required */
		configType: FormControl<SynchronousJobReadConfigType | null | undefined>,
		connectorConfigurationUpdated: FormControl<boolean | null | undefined>,

		/** Required */
		createdAt: FormControl<number | null | undefined>,

		/** Required */
		endedAt: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		succeeded: FormControl<boolean | null | undefined>,
	}
	export function CreateSynchronousJobReadFormGroup() {
		return new FormGroup<SynchronousJobReadFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined),
			configType: new FormControl<SynchronousJobReadConfigType | null | undefined>(undefined, [Validators.required]),
			connectorConfigurationUpdated: new FormControl<boolean | null | undefined>(undefined),
			createdAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endedAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			succeeded: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SynchronousJobReadConfigType { check_connection_source = 0, check_connection_destination = 1, discover_schema = 2, get_spec = 3, sync = 4, reset_connection = 5 }

	export enum CheckConnectionReadStatus { succeeded = 0, failed = 1 }

	export interface CheckOperationRead {
		message?: string | null;

		/** Required */
		status: CheckConnectionReadStatus;
	}
	export interface CheckOperationReadFormProperties {
		message: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<CheckConnectionReadStatus | null | undefined>,
	}
	export function CreateCheckOperationReadFormGroup() {
		return new FormGroup<CheckOperationReadFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CheckConnectionReadStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CompleteDestinationOAuthRequest {

		/** Required */
		destinationDefinitionId: string;
		destinationId?: string | null;

		/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
		oAuthInputConfiguration?: OAuthConfiguration;

		/** The query parameters present in the redirect URL after a user granted consent e.g auth code */
		queryParams?: string | null;

		/** When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given. */
		redirectUrl?: string | null;

		/** Required */
		workspaceId: string;
	}
	export interface CompleteDestinationOAuthRequestFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,
		destinationId: FormControl<string | null | undefined>,

		/** The query parameters present in the redirect URL after a user granted consent e.g auth code */
		queryParams: FormControl<string | null | undefined>,

		/** When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given. */
		redirectUrl: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateCompleteDestinationOAuthRequestFormGroup() {
		return new FormGroup<CompleteDestinationOAuthRequestFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationId: new FormControl<string | null | undefined>(undefined),
			queryParams: new FormControl<string | null | undefined>(undefined),
			redirectUrl: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CompleteOAuthResponse {
	}
	export interface CompleteOAuthResponseFormProperties {
	}
	export function CreateCompleteOAuthResponseFormGroup() {
		return new FormGroup<CompleteOAuthResponseFormProperties>({
		});

	}

	export interface CompleteSourceOauthRequest {

		/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
		oAuthInputConfiguration?: OAuthConfiguration;

		/** The query parameters present in the redirect URL after a user granted consent e.g auth code */
		queryParams?: string | null;

		/** When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given. */
		redirectUrl?: string | null;

		/** Required */
		sourceDefinitionId: string;
		sourceId?: string | null;

		/** Required */
		workspaceId: string;
	}
	export interface CompleteSourceOauthRequestFormProperties {

		/** The query parameters present in the redirect URL after a user granted consent e.g auth code */
		queryParams: FormControl<string | null | undefined>,

		/** When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given. */
		redirectUrl: FormControl<string | null | undefined>,

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateCompleteSourceOauthRequestFormGroup() {
		return new FormGroup<CompleteSourceOauthRequestFormProperties>({
			queryParams: new FormControl<string | null | undefined>(undefined),
			redirectUrl: new FormControl<string | null | undefined>(undefined),
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConnectionCreate {

		/** Required */
		destinationId: string;
		geography?: ConnectionCreateGeography | null;

		/** Optional name of the connection */
		name?: string | null;

		/** Method used for computing final namespace in destination */
		namespaceDefinition?: ConnectionCreateNamespaceDefinition | null;

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat?: string | null;
		nonBreakingChangesPreference?: ConnectionCreateNonBreakingChangesPreference | null;
		notifySchemaChanges?: boolean | null;
		operationIds?: Array<string>;

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix?: string | null;

		/** optional resource requirements to run workers (blank for unbounded allocations) */
		resourceRequirements?: ResourceRequirements;

		/** if null, then no schedule is set. */
		schedule?: ConnectionSchedule;

		/** schedule for when the the connection should run, per the schedule type */
		scheduleData?: ConnectionScheduleData;

		/** determine how the schedule data should be interpreted */
		scheduleType?: ConnectionCreateScheduleType | null;
		sourceCatalogId?: string | null;

		/** Required */
		sourceId: string;

		/**
		 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
		 * Required
		 */
		status: ConnectionCreateStatus;

		/** describes the available schema (catalog). */
		syncCatalog?: AirbyteCatalog;
	}
	export interface ConnectionCreateFormProperties {

		/** Required */
		destinationId: FormControl<string | null | undefined>,
		geography: FormControl<ConnectionCreateGeography | null | undefined>,

		/** Optional name of the connection */
		name: FormControl<string | null | undefined>,

		/** Method used for computing final namespace in destination */
		namespaceDefinition: FormControl<ConnectionCreateNamespaceDefinition | null | undefined>,

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat: FormControl<string | null | undefined>,
		nonBreakingChangesPreference: FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>,
		notifySchemaChanges: FormControl<boolean | null | undefined>,

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix: FormControl<string | null | undefined>,

		/** determine how the schedule data should be interpreted */
		scheduleType: FormControl<ConnectionCreateScheduleType | null | undefined>,
		sourceCatalogId: FormControl<string | null | undefined>,

		/** Required */
		sourceId: FormControl<string | null | undefined>,

		/**
		 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
		 * Required
		 */
		status: FormControl<ConnectionCreateStatus | null | undefined>,
	}
	export function CreateConnectionCreateFormGroup() {
		return new FormGroup<ConnectionCreateFormProperties>({
			destinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			geography: new FormControl<ConnectionCreateGeography | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespaceDefinition: new FormControl<ConnectionCreateNamespaceDefinition | null | undefined>(undefined),
			namespaceFormat: new FormControl<string | null | undefined>(undefined),
			nonBreakingChangesPreference: new FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>(undefined),
			notifySchemaChanges: new FormControl<boolean | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			scheduleType: new FormControl<ConnectionCreateScheduleType | null | undefined>(undefined),
			sourceCatalogId: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConnectionCreateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectionCreateGeography { auto = 0, us = 1, eu = 2 }

	export enum ConnectionCreateNamespaceDefinition { source = 0, destination = 1, customformat = 2 }

	export enum ConnectionCreateNonBreakingChangesPreference { ignore = 0, disable = 1 }


	/** if null, then no schedule is set. */
	export interface ConnectionSchedule {

		/** Required */
		timeUnit: ConnectionScheduleTimeUnit;

		/** Required */
		units: number;
	}

	/** if null, then no schedule is set. */
	export interface ConnectionScheduleFormProperties {

		/** Required */
		timeUnit: FormControl<ConnectionScheduleTimeUnit | null | undefined>,

		/** Required */
		units: FormControl<number | null | undefined>,
	}
	export function CreateConnectionScheduleFormGroup() {
		return new FormGroup<ConnectionScheduleFormProperties>({
			timeUnit: new FormControl<ConnectionScheduleTimeUnit | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectionScheduleTimeUnit { minutes = 0, hours = 1, days = 2, weeks = 3, months = 4 }


	/** schedule for when the the connection should run, per the schedule type */
	export interface ConnectionScheduleData {
		basicSchedule?: ConnectionScheduleDataBasicSchedule;
		cron?: ConnectionScheduleDataCron;
	}

	/** schedule for when the the connection should run, per the schedule type */
	export interface ConnectionScheduleDataFormProperties {
	}
	export function CreateConnectionScheduleDataFormGroup() {
		return new FormGroup<ConnectionScheduleDataFormProperties>({
		});

	}

	export interface ConnectionScheduleDataBasicSchedule {

		/** Required */
		timeUnit: ConnectionScheduleTimeUnit;

		/** Required */
		units: number;
	}
	export interface ConnectionScheduleDataBasicScheduleFormProperties {

		/** Required */
		timeUnit: FormControl<ConnectionScheduleTimeUnit | null | undefined>,

		/** Required */
		units: FormControl<number | null | undefined>,
	}
	export function CreateConnectionScheduleDataBasicScheduleFormGroup() {
		return new FormGroup<ConnectionScheduleDataBasicScheduleFormProperties>({
			timeUnit: new FormControl<ConnectionScheduleTimeUnit | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConnectionScheduleDataCron {

		/** Required */
		cronExpression: string;

		/** Required */
		cronTimeZone: string;
	}
	export interface ConnectionScheduleDataCronFormProperties {

		/** Required */
		cronExpression: FormControl<string | null | undefined>,

		/** Required */
		cronTimeZone: FormControl<string | null | undefined>,
	}
	export function CreateConnectionScheduleDataCronFormGroup() {
		return new FormGroup<ConnectionScheduleDataCronFormProperties>({
			cronExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cronTimeZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectionCreateScheduleType { manual = 0, basic = 1, cron = 2 }

	export enum ConnectionCreateStatus { active = 0, inactive = 1, deprecated = 2 }

	export interface ConnectionIdRequestBody {

		/** Required */
		connectionId: string;
	}
	export interface ConnectionIdRequestBodyFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateConnectionIdRequestBodyFormGroup() {
		return new FormGroup<ConnectionIdRequestBodyFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConnectionRead {

		/** Required */
		breakingChange: boolean;

		/** Required */
		connectionId: string;

		/** Required */
		destinationId: string;
		geography?: ConnectionCreateGeography | null;

		/** Required */
		name: string;

		/** Method used for computing final namespace in destination */
		namespaceDefinition?: ConnectionCreateNamespaceDefinition | null;

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat?: string | null;
		nonBreakingChangesPreference?: ConnectionCreateNonBreakingChangesPreference | null;
		notifySchemaChanges?: boolean | null;
		operationIds?: Array<string>;

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix?: string | null;

		/** optional resource requirements to run workers (blank for unbounded allocations) */
		resourceRequirements?: ResourceRequirements;

		/** if null, then no schedule is set. */
		schedule?: ConnectionSchedule;

		/** schedule for when the the connection should run, per the schedule type */
		scheduleData?: ConnectionScheduleData;

		/** determine how the schedule data should be interpreted */
		scheduleType?: ConnectionCreateScheduleType | null;
		sourceCatalogId?: string | null;

		/** Required */
		sourceId: string;

		/**
		 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
		 * Required
		 */
		status: ConnectionCreateStatus;

		/**
		 * describes the available schema (catalog).
		 * Required
		 */
		syncCatalog: AirbyteCatalog;
	}
	export interface ConnectionReadFormProperties {

		/** Required */
		breakingChange: FormControl<boolean | null | undefined>,

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		destinationId: FormControl<string | null | undefined>,
		geography: FormControl<ConnectionCreateGeography | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Method used for computing final namespace in destination */
		namespaceDefinition: FormControl<ConnectionCreateNamespaceDefinition | null | undefined>,

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat: FormControl<string | null | undefined>,
		nonBreakingChangesPreference: FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>,
		notifySchemaChanges: FormControl<boolean | null | undefined>,

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix: FormControl<string | null | undefined>,

		/** determine how the schedule data should be interpreted */
		scheduleType: FormControl<ConnectionCreateScheduleType | null | undefined>,
		sourceCatalogId: FormControl<string | null | undefined>,

		/** Required */
		sourceId: FormControl<string | null | undefined>,

		/**
		 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
		 * Required
		 */
		status: FormControl<ConnectionCreateStatus | null | undefined>,
	}
	export function CreateConnectionReadFormGroup() {
		return new FormGroup<ConnectionReadFormProperties>({
			breakingChange: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			geography: new FormControl<ConnectionCreateGeography | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespaceDefinition: new FormControl<ConnectionCreateNamespaceDefinition | null | undefined>(undefined),
			namespaceFormat: new FormControl<string | null | undefined>(undefined),
			nonBreakingChangesPreference: new FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>(undefined),
			notifySchemaChanges: new FormControl<boolean | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			scheduleType: new FormControl<ConnectionCreateScheduleType | null | undefined>(undefined),
			sourceCatalogId: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConnectionCreateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConnectionReadList {

		/** Required */
		connections: Array<ConnectionRead>;
	}
	export interface ConnectionReadListFormProperties {
	}
	export function CreateConnectionReadListFormGroup() {
		return new FormGroup<ConnectionReadListFormProperties>({
		});

	}


	/** determine how the schedule data should be interpreted */
	export enum ConnectionScheduleType { manual = 0, basic = 1, cron = 2 }

	export interface ConnectionSearch {
		connectionId?: string | null;
		destination?: DestinationSearch;
		destinationId?: string | null;
		name?: string | null;

		/** Method used for computing final namespace in destination */
		namespaceDefinition?: ConnectionCreateNamespaceDefinition | null;

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat?: string | null;

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix?: string | null;

		/** if null, then no schedule is set. */
		schedule?: ConnectionSchedule;

		/** schedule for when the the connection should run, per the schedule type */
		scheduleData?: ConnectionScheduleData;

		/** determine how the schedule data should be interpreted */
		scheduleType?: ConnectionCreateScheduleType | null;
		source?: SourceSearch;
		sourceId?: string | null;

		/** Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced. */
		status?: ConnectionCreateStatus | null;
	}
	export interface ConnectionSearchFormProperties {
		connectionId: FormControl<string | null | undefined>,
		destinationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Method used for computing final namespace in destination */
		namespaceDefinition: FormControl<ConnectionCreateNamespaceDefinition | null | undefined>,

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat: FormControl<string | null | undefined>,

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix: FormControl<string | null | undefined>,

		/** determine how the schedule data should be interpreted */
		scheduleType: FormControl<ConnectionCreateScheduleType | null | undefined>,
		sourceId: FormControl<string | null | undefined>,

		/** Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced. */
		status: FormControl<ConnectionCreateStatus | null | undefined>,
	}
	export function CreateConnectionSearchFormGroup() {
		return new FormGroup<ConnectionSearchFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined),
			destinationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespaceDefinition: new FormControl<ConnectionCreateNamespaceDefinition | null | undefined>(undefined),
			namespaceFormat: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			scheduleType: new FormControl<ConnectionCreateScheduleType | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ConnectionCreateStatus | null | undefined>(undefined),
		});

	}

	export interface DestinationSearch {

		/** The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. */
		connectionConfiguration?: DestinationConfiguration;
		destinationDefinitionId?: string | null;
		destinationId?: string | null;
		destinationName?: string | null;
		name?: string | null;
		workspaceId?: string | null;
	}
	export interface DestinationSearchFormProperties {
		destinationDefinitionId: FormControl<string | null | undefined>,
		destinationId: FormControl<string | null | undefined>,
		destinationName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationSearchFormGroup() {
		return new FormGroup<DestinationSearchFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined),
			destinationId: new FormControl<string | null | undefined>(undefined),
			destinationName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SourceSearch {

		/** The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source. */
		connectionConfiguration?: SourceConfiguration;
		name?: string | null;
		sourceDefinitionId?: string | null;
		sourceId?: string | null;
		sourceName?: string | null;
		workspaceId?: string | null;
	}
	export interface SourceSearchFormProperties {
		name: FormControl<string | null | undefined>,
		sourceDefinitionId: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,
		sourceName: FormControl<string | null | undefined>,
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateSourceSearchFormGroup() {
		return new FormGroup<SourceSearchFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			sourceName: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectionStateCreateOrUpdate {

		/** Required */
		connectionId: string;

		/**
		 * Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.
		 * Required
		 */
		connectionState: ConnectionState;
	}
	export interface ConnectionStateCreateOrUpdateFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateConnectionStateCreateOrUpdateFormGroup() {
		return new FormGroup<ConnectionStateCreateOrUpdateFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectionStateType { global = 0, stream = 1, legacy = 2, not_set = 3 }


	/** Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced. */
	export enum ConnectionStatus { active = 0, inactive = 1, deprecated = 2 }


	/** Used to apply a patch-style update to a connection, which means that null properties remain unchanged */
	export interface ConnectionUpdate {
		breakingChange?: boolean | null;

		/** Required */
		connectionId: string;
		geography?: ConnectionCreateGeography | null;

		/** Name that will be set to this connection */
		name?: string | null;

		/** Method used for computing final namespace in destination */
		namespaceDefinition?: ConnectionCreateNamespaceDefinition | null;

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat?: string | null;
		nonBreakingChangesPreference?: ConnectionCreateNonBreakingChangesPreference | null;
		notifySchemaChanges?: boolean | null;
		operationIds?: Array<string>;

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix?: string | null;

		/** optional resource requirements to run workers (blank for unbounded allocations) */
		resourceRequirements?: ResourceRequirements;

		/** if null, then no schedule is set. */
		schedule?: ConnectionSchedule;

		/** schedule for when the the connection should run, per the schedule type */
		scheduleData?: ConnectionScheduleData;

		/** determine how the schedule data should be interpreted */
		scheduleType?: ConnectionCreateScheduleType | null;
		sourceCatalogId?: string | null;

		/** Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced. */
		status?: ConnectionCreateStatus | null;

		/** describes the available schema (catalog). */
		syncCatalog?: AirbyteCatalog;
	}

	/** Used to apply a patch-style update to a connection, which means that null properties remain unchanged */
	export interface ConnectionUpdateFormProperties {
		breakingChange: FormControl<boolean | null | undefined>,

		/** Required */
		connectionId: FormControl<string | null | undefined>,
		geography: FormControl<ConnectionCreateGeography | null | undefined>,

		/** Name that will be set to this connection */
		name: FormControl<string | null | undefined>,

		/** Method used for computing final namespace in destination */
		namespaceDefinition: FormControl<ConnectionCreateNamespaceDefinition | null | undefined>,

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat: FormControl<string | null | undefined>,
		nonBreakingChangesPreference: FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>,
		notifySchemaChanges: FormControl<boolean | null | undefined>,

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix: FormControl<string | null | undefined>,

		/** determine how the schedule data should be interpreted */
		scheduleType: FormControl<ConnectionCreateScheduleType | null | undefined>,
		sourceCatalogId: FormControl<string | null | undefined>,

		/** Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced. */
		status: FormControl<ConnectionCreateStatus | null | undefined>,
	}
	export function CreateConnectionUpdateFormGroup() {
		return new FormGroup<ConnectionUpdateFormProperties>({
			breakingChange: new FormControl<boolean | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			geography: new FormControl<ConnectionCreateGeography | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespaceDefinition: new FormControl<ConnectionCreateNamespaceDefinition | null | undefined>(undefined),
			namespaceFormat: new FormControl<string | null | undefined>(undefined),
			nonBreakingChangesPreference: new FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>(undefined),
			notifySchemaChanges: new FormControl<boolean | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			scheduleType: new FormControl<ConnectionCreateScheduleType | null | undefined>(undefined),
			sourceCatalogId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ConnectionCreateStatus | null | undefined>(undefined),
		});

	}

	export interface CustomDestinationDefinitionCreate {

		/** Required */
		destinationDefinition: DestinationDefinitionCreate;

		/** Required */
		workspaceId: string;
	}
	export interface CustomDestinationDefinitionCreateFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateCustomDestinationDefinitionCreateFormGroup() {
		return new FormGroup<CustomDestinationDefinitionCreateFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DestinationDefinitionCreate {

		/** Required */
		dockerImageTag: string;

		/** Required */
		dockerRepository: string;

		/** Required */
		documentationUrl: string;
		icon?: string | null;

		/** Required */
		name: string;

		/** actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level. */
		resourceRequirements?: ActorDefinitionResourceRequirements;
	}
	export interface DestinationDefinitionCreateFormProperties {

		/** Required */
		dockerImageTag: FormControl<string | null | undefined>,

		/** Required */
		dockerRepository: FormControl<string | null | undefined>,

		/** Required */
		documentationUrl: FormControl<string | null | undefined>,
		icon: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDestinationDefinitionCreateFormGroup() {
		return new FormGroup<DestinationDefinitionCreateFormProperties>({
			dockerImageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockerRepository: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			icon: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomSourceDefinitionCreate {

		/** Required */
		sourceDefinition: SourceDefinitionCreate;

		/** Required */
		workspaceId: string;
	}
	export interface CustomSourceDefinitionCreateFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateCustomSourceDefinitionCreateFormGroup() {
		return new FormGroup<CustomSourceDefinitionCreateFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceDefinitionCreate {

		/** Required */
		dockerImageTag: string;

		/** Required */
		dockerRepository: string;

		/** Required */
		documentationUrl: string;
		icon?: string | null;

		/** Required */
		name: string;

		/** actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level. */
		resourceRequirements?: ActorDefinitionResourceRequirements;
	}
	export interface SourceDefinitionCreateFormProperties {

		/** Required */
		dockerImageTag: FormControl<string | null | undefined>,

		/** Required */
		dockerRepository: FormControl<string | null | undefined>,

		/** Required */
		documentationUrl: FormControl<string | null | undefined>,
		icon: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSourceDefinitionCreateFormGroup() {
		return new FormGroup<SourceDefinitionCreateFormProperties>({
			dockerImageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockerRepository: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			icon: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomerioNotificationConfiguration {
	}
	export interface CustomerioNotificationConfigurationFormProperties {
	}
	export function CreateCustomerioNotificationConfigurationFormGroup() {
		return new FormGroup<CustomerioNotificationConfigurationFormProperties>({
		});

	}

	export enum DataType { string = 0, number = 1, boolean = 2, object = 3, array = 4 }

	export interface DbMigrationExecutionRead {
		executedMigrations?: Array<DbMigrationRead>;
		initialVersion?: string | null;
		targetVersion?: string | null;
	}
	export interface DbMigrationExecutionReadFormProperties {
		initialVersion: FormControl<string | null | undefined>,
		targetVersion: FormControl<string | null | undefined>,
	}
	export function CreateDbMigrationExecutionReadFormGroup() {
		return new FormGroup<DbMigrationExecutionReadFormProperties>({
			initialVersion: new FormControl<string | null | undefined>(undefined),
			targetVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DbMigrationRead {
		migratedAt?: number | null;
		migratedBy?: string | null;

		/** Required */
		migrationDescription: string;
		migrationScript?: string | null;
		migrationState?: DbMigrationReadMigrationState | null;

		/** Required */
		migrationType: string;

		/** Required */
		migrationVersion: string;
	}
	export interface DbMigrationReadFormProperties {
		migratedAt: FormControl<number | null | undefined>,
		migratedBy: FormControl<string | null | undefined>,

		/** Required */
		migrationDescription: FormControl<string | null | undefined>,
		migrationScript: FormControl<string | null | undefined>,
		migrationState: FormControl<DbMigrationReadMigrationState | null | undefined>,

		/** Required */
		migrationType: FormControl<string | null | undefined>,

		/** Required */
		migrationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDbMigrationReadFormGroup() {
		return new FormGroup<DbMigrationReadFormProperties>({
			migratedAt: new FormControl<number | null | undefined>(undefined),
			migratedBy: new FormControl<string | null | undefined>(undefined),
			migrationDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			migrationScript: new FormControl<string | null | undefined>(undefined),
			migrationState: new FormControl<DbMigrationReadMigrationState | null | undefined>(undefined),
			migrationType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			migrationVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DbMigrationReadMigrationState { pending = 0, above_target = 1, below_baseline = 2, baseline = 3, ignored = 4, missing_success = 5, missing_failed = 6, success = 7, undone = 8, available = 9, failed = 10, out_of_order = 11, future_success = 12, future_failed = 13, outdated = 14, superseded = 15, deleted = 16 }

	export interface DbMigrationReadList {
		migrations?: Array<DbMigrationRead>;
	}
	export interface DbMigrationReadListFormProperties {
	}
	export function CreateDbMigrationReadListFormGroup() {
		return new FormGroup<DbMigrationReadListFormProperties>({
		});

	}

	export interface DbMigrationRequestBody {

		/** Required */
		database: string;
	}
	export interface DbMigrationRequestBodyFormProperties {

		/** Required */
		database: FormControl<string | null | undefined>,
	}
	export function CreateDbMigrationRequestBodyFormGroup() {
		return new FormGroup<DbMigrationRequestBodyFormProperties>({
			database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DbMigrationState { pending = 0, above_target = 1, below_baseline = 2, baseline = 3, ignored = 4, missing_success = 5, missing_failed = 6, success = 7, undone = 8, available = 9, failed = 10, out_of_order = 11, future_success = 12, future_failed = 13, outdated = 14, superseded = 15, deleted = 16 }

	export interface DestinationAuthSpecification {
		auth_type?: AuthSpecificationAuth_type | null;

		/** An object containing any metadata needed to describe this connector's Oauth flow */
		oauth2Specification?: OAuth2Specification;
	}
	export interface DestinationAuthSpecificationFormProperties {
		auth_type: FormControl<AuthSpecificationAuth_type | null | undefined>,
	}
	export function CreateDestinationAuthSpecificationFormGroup() {
		return new FormGroup<DestinationAuthSpecificationFormProperties>({
			auth_type: new FormControl<AuthSpecificationAuth_type | null | undefined>(undefined),
		});

	}

	export interface DestinationCloneConfiguration {

		/** The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. */
		connectionConfiguration?: DestinationConfiguration;
		name?: string | null;
	}
	export interface DestinationCloneConfigurationFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateDestinationCloneConfigurationFormGroup() {
		return new FormGroup<DestinationCloneConfigurationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The values required to configure the destination. The schema for this should have an id of the existing destination along with the configuration you want to change in case. */
	export interface DestinationCloneRequestBody {

		/** Required */
		destinationCloneId: string;
		destinationConfiguration?: DestinationCloneConfiguration;
	}

	/** The values required to configure the destination. The schema for this should have an id of the existing destination along with the configuration you want to change in case. */
	export interface DestinationCloneRequestBodyFormProperties {

		/** Required */
		destinationCloneId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationCloneRequestBodyFormGroup() {
		return new FormGroup<DestinationCloneRequestBodyFormProperties>({
			destinationCloneId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. */
	export interface DestinationConfiguration {
	}

	/** The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. */
	export interface DestinationConfigurationFormProperties {
	}
	export function CreateDestinationConfigurationFormGroup() {
		return new FormGroup<DestinationConfigurationFormProperties>({
		});

	}

	export interface DestinationCoreConfig {

		/**
		 * The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.
		 * Required
		 */
		connectionConfiguration: DestinationConfiguration;

		/** Required */
		destinationDefinitionId: string;
		destinationId?: string | null;

		/** Required */
		workspaceId: string;
	}
	export interface DestinationCoreConfigFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,
		destinationId: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationCoreConfigFormGroup() {
		return new FormGroup<DestinationCoreConfigFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationId: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DestinationCreate {

		/**
		 * The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.
		 * Required
		 */
		connectionConfiguration: DestinationConfiguration;

		/** Required */
		destinationDefinitionId: string;

		/** Required */
		name: string;

		/** Required */
		workspaceId: string;
	}
	export interface DestinationCreateFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationCreateFormGroup() {
		return new FormGroup<DestinationCreateFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DestinationDefinitionIdRequestBody {

		/** Required */
		destinationDefinitionId: string;
	}
	export interface DestinationDefinitionIdRequestBodyFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationDefinitionIdRequestBodyFormGroup() {
		return new FormGroup<DestinationDefinitionIdRequestBodyFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DestinationDefinitionIdWithWorkspaceId {

		/** Required */
		destinationDefinitionId: string;

		/** Required */
		workspaceId: string;
	}
	export interface DestinationDefinitionIdWithWorkspaceIdFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationDefinitionIdWithWorkspaceIdFormGroup() {
		return new FormGroup<DestinationDefinitionIdWithWorkspaceIdFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DestinationDefinitionRead {

		/** Required */
		destinationDefinitionId: string;

		/** Required */
		dockerImageTag: string;

		/** Required */
		dockerRepository: string;

		/** Required */
		documentationUrl: string;
		icon?: string | null;

		/** Required */
		name: string;

		/**
		 * describes a normalization config for destination definition
		 * Required
		 */
		normalizationConfig: NormalizationDestinationDefinitionConfig;

		/** The Airbyte Protocol version supported by the connector */
		protocolVersion?: string | null;

		/** The date when this connector was first released, in yyyy-mm-dd format. */
		releaseDate?: Date | null;
		releaseStage?: DestinationDefinitionReadReleaseStage | null;

		/** actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level. */
		resourceRequirements?: ActorDefinitionResourceRequirements;

		/**
		 * an optional flag indicating whether DBT is used in the normalization. If the flag value is NULL - DBT is not used.
		 * Required
		 */
		supportsDbt: boolean;
	}
	export interface DestinationDefinitionReadFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		dockerImageTag: FormControl<string | null | undefined>,

		/** Required */
		dockerRepository: FormControl<string | null | undefined>,

		/** Required */
		documentationUrl: FormControl<string | null | undefined>,
		icon: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** The Airbyte Protocol version supported by the connector */
		protocolVersion: FormControl<string | null | undefined>,

		/** The date when this connector was first released, in yyyy-mm-dd format. */
		releaseDate: FormControl<Date | null | undefined>,
		releaseStage: FormControl<DestinationDefinitionReadReleaseStage | null | undefined>,

		/**
		 * an optional flag indicating whether DBT is used in the normalization. If the flag value is NULL - DBT is not used.
		 * Required
		 */
		supportsDbt: FormControl<boolean | null | undefined>,
	}
	export function CreateDestinationDefinitionReadFormGroup() {
		return new FormGroup<DestinationDefinitionReadFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockerImageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockerRepository: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			icon: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocolVersion: new FormControl<string | null | undefined>(undefined),
			releaseDate: new FormControl<Date | null | undefined>(undefined),
			releaseStage: new FormControl<DestinationDefinitionReadReleaseStage | null | undefined>(undefined),
			supportsDbt: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** describes a normalization config for destination definition */
	export interface NormalizationDestinationDefinitionConfig {

		/** a field indicating the type of integration dialect to use for normalization. */
		normalizationIntegrationType?: string | null;

		/** a field indicating the name of the repository to be used for normalization. If the value of the flag is NULL - normalization is not used. */
		normalizationRepository?: string | null;

		/** a field indicating the tag of the docker repository to be used for normalization. */
		normalizationTag?: string | null;

		/**
		 * whether the destination definition supports normalization.
		 * Required
		 */
		supported: boolean;
	}

	/** describes a normalization config for destination definition */
	export interface NormalizationDestinationDefinitionConfigFormProperties {

		/** a field indicating the type of integration dialect to use for normalization. */
		normalizationIntegrationType: FormControl<string | null | undefined>,

		/** a field indicating the name of the repository to be used for normalization. If the value of the flag is NULL - normalization is not used. */
		normalizationRepository: FormControl<string | null | undefined>,

		/** a field indicating the tag of the docker repository to be used for normalization. */
		normalizationTag: FormControl<string | null | undefined>,

		/**
		 * whether the destination definition supports normalization.
		 * Required
		 */
		supported: FormControl<boolean | null | undefined>,
	}
	export function CreateNormalizationDestinationDefinitionConfigFormGroup() {
		return new FormGroup<NormalizationDestinationDefinitionConfigFormProperties>({
			normalizationIntegrationType: new FormControl<string | null | undefined>(undefined),
			normalizationRepository: new FormControl<string | null | undefined>(undefined),
			normalizationTag: new FormControl<string | null | undefined>(undefined),
			supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DestinationDefinitionReadReleaseStage { alpha = 0, beta = 1, generally_available = 2, custom = 3 }

	export interface DestinationDefinitionReadList {

		/** Required */
		destinationDefinitions: Array<DestinationDefinitionRead>;
	}
	export interface DestinationDefinitionReadListFormProperties {
	}
	export function CreateDestinationDefinitionReadListFormGroup() {
		return new FormGroup<DestinationDefinitionReadListFormProperties>({
		});

	}


	/** The specification for what values are required to configure the destinationDefinition. */
	export interface DestinationDefinitionSpecification {
	}

	/** The specification for what values are required to configure the destinationDefinition. */
	export interface DestinationDefinitionSpecificationFormProperties {
	}
	export function CreateDestinationDefinitionSpecificationFormGroup() {
		return new FormGroup<DestinationDefinitionSpecificationFormProperties>({
		});

	}

	export interface DestinationDefinitionSpecificationRead {
		advancedAuth?: AdvancedAuth;
		authSpecification?: AuthSpecification;

		/** The specification for what values are required to configure the destinationDefinition. */
		connectionSpecification?: DestinationDefinitionSpecification;

		/** Required */
		destinationDefinitionId: string;
		documentationUrl?: string | null;

		/** Required */
		jobInfo: SynchronousJobRead;
		supportedDestinationSyncModes?: Array<DestinationSyncMode>;
	}
	export interface DestinationDefinitionSpecificationReadFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,
		documentationUrl: FormControl<string | null | undefined>,
	}
	export function CreateDestinationDefinitionSpecificationReadFormGroup() {
		return new FormGroup<DestinationDefinitionSpecificationReadFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DestinationSyncMode { append = 0, overwrite = 1, append_dedup = 2 }

	export interface DestinationDefinitionUpdate {

		/** Required */
		destinationDefinitionId: string;
		dockerImageTag?: string | null;

		/** actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level. */
		resourceRequirements?: ActorDefinitionResourceRequirements;
	}
	export interface DestinationDefinitionUpdateFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,
		dockerImageTag: FormControl<string | null | undefined>,
	}
	export function CreateDestinationDefinitionUpdateFormGroup() {
		return new FormGroup<DestinationDefinitionUpdateFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockerImageTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DestinationIdRequestBody {

		/** Required */
		destinationId: string;
	}
	export interface DestinationIdRequestBodyFormProperties {

		/** Required */
		destinationId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationIdRequestBodyFormGroup() {
		return new FormGroup<DestinationIdRequestBodyFormProperties>({
			destinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DestinationOauthConsentRequest {

		/** Required */
		destinationDefinitionId: string;
		destinationId?: string | null;

		/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
		oAuthInputConfiguration?: OAuthConfiguration;

		/**
		 * The url to redirect to after getting the user consent
		 * Required
		 */
		redirectUrl: string;

		/** Required */
		workspaceId: string;
	}
	export interface DestinationOauthConsentRequestFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,
		destinationId: FormControl<string | null | undefined>,

		/**
		 * The url to redirect to after getting the user consent
		 * Required
		 */
		redirectUrl: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationOauthConsentRequestFormGroup() {
		return new FormGroup<DestinationOauthConsentRequestFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationId: new FormControl<string | null | undefined>(undefined),
			redirectUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DestinationRead {

		/**
		 * The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.
		 * Required
		 */
		connectionConfiguration: DestinationConfiguration;

		/** Required */
		destinationDefinitionId: string;

		/** Required */
		destinationId: string;

		/** Required */
		destinationName: string;
		icon?: string | null;

		/** Required */
		name: string;

		/** Required */
		workspaceId: string;
	}
	export interface DestinationReadFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		destinationId: FormControl<string | null | undefined>,

		/** Required */
		destinationName: FormControl<string | null | undefined>,
		icon: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationReadFormGroup() {
		return new FormGroup<DestinationReadFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			icon: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DestinationReadList {

		/** Required */
		destinations: Array<DestinationRead>;
	}
	export interface DestinationReadListFormProperties {
	}
	export function CreateDestinationReadListFormGroup() {
		return new FormGroup<DestinationReadListFormProperties>({
		});

	}

	export interface DestinationSnippetRead {

		/** Required */
		destinationDefinitionId: string;

		/** Required */
		destinationId: string;

		/** Required */
		destinationName: string;
		icon?: string | null;

		/** Required */
		name: string;
	}
	export interface DestinationSnippetReadFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		destinationId: FormControl<string | null | undefined>,

		/** Required */
		destinationName: FormControl<string | null | undefined>,
		icon: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDestinationSnippetReadFormGroup() {
		return new FormGroup<DestinationSnippetReadFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			icon: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DestinationUpdate {

		/**
		 * The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.
		 * Required
		 */
		connectionConfiguration: DestinationConfiguration;

		/** Required */
		destinationId: string;

		/** Required */
		name: string;
	}
	export interface DestinationUpdateFormProperties {

		/** Required */
		destinationId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDestinationUpdateFormGroup() {
		return new FormGroup<DestinationUpdateFormProperties>({
			destinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DiscoverCatalogResult {

		/** Required */
		catalogId: string;
	}
	export interface DiscoverCatalogResultFormProperties {

		/** Required */
		catalogId: FormControl<string | null | undefined>,
	}
	export function CreateDiscoverCatalogResultFormGroup() {
		return new FormGroup<DiscoverCatalogResultFormProperties>({
			catalogId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Geography { auto = 0, us = 1, eu = 2 }

	export interface HealthCheckRead {

		/** Required */
		available: boolean;
	}
	export interface HealthCheckReadFormProperties {

		/** Required */
		available: FormControl<boolean | null | undefined>,
	}
	export function CreateHealthCheckReadFormGroup() {
		return new FormGroup<HealthCheckReadFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportRead {
		reason?: string | null;

		/** Required */
		status: CheckConnectionReadStatus;
	}
	export interface ImportReadFormProperties {
		reason: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<CheckConnectionReadStatus | null | undefined>,
	}
	export function CreateImportReadFormGroup() {
		return new FormGroup<ImportReadFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CheckConnectionReadStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportRequestBody {

		/** Required */
		resourceId: string;

		/** Required */
		workspaceId: string;
	}
	export interface ImportRequestBodyFormProperties {

		/** Required */
		resourceId: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateImportRequestBodyFormGroup() {
		return new FormGroup<ImportRequestBodyFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InternalOperationResult {

		/** Required */
		succeeded: boolean;
	}
	export interface InternalOperationResultFormProperties {

		/** Required */
		succeeded: FormControl<boolean | null | undefined>,
	}
	export function CreateInternalOperationResultFormGroup() {
		return new FormGroup<InternalOperationResultFormProperties>({
			succeeded: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidInputExceptionInfo {
		exceptionClassName?: string | null;
		exceptionStack?: Array<string>;

		/** Required */
		message: string;

		/** Required */
		validationErrors: Array<InvalidInputProperty>;
	}
	export interface InvalidInputExceptionInfoFormProperties {
		exceptionClassName: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidInputExceptionInfoFormGroup() {
		return new FormGroup<InvalidInputExceptionInfoFormProperties>({
			exceptionClassName: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidInputProperty {
		invalidValue?: string | null;
		message?: string | null;

		/** Required */
		propertyPath: string;
	}
	export interface InvalidInputPropertyFormProperties {
		invalidValue: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Required */
		propertyPath: FormControl<string | null | undefined>,
	}
	export function CreateInvalidInputPropertyFormGroup() {
		return new FormGroup<InvalidInputPropertyFormProperties>({
			invalidValue: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			propertyPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobConfigType { check_connection_source = 0, check_connection_destination = 1, discover_schema = 2, get_spec = 3, sync = 4, reset_connection = 5 }

	export interface JobDebugInfoRead {

		/** Required */
		attempts: Array<AttemptInfoRead>;

		/** Required */
		job: JobDebugRead;
		workflowState?: WorkflowStateRead;
	}
	export interface JobDebugInfoReadFormProperties {
	}
	export function CreateJobDebugInfoReadFormGroup() {
		return new FormGroup<JobDebugInfoReadFormProperties>({
		});

	}

	export interface JobDebugRead {

		/** Required */
		airbyteVersion: string;

		/** Required */
		configId: string;

		/** Required */
		configType: SynchronousJobReadConfigType;

		/** Required */
		destinationDefinition: DestinationDefinitionRead;

		/** Required */
		id: number;

		/** Required */
		sourceDefinition: SourceDefinitionRead;

		/** Required */
		status: JobDebugReadStatus;
	}
	export interface JobDebugReadFormProperties {

		/** Required */
		airbyteVersion: FormControl<string | null | undefined>,

		/** Required */
		configId: FormControl<string | null | undefined>,

		/** Required */
		configType: FormControl<SynchronousJobReadConfigType | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<JobDebugReadStatus | null | undefined>,
	}
	export function CreateJobDebugReadFormGroup() {
		return new FormGroup<JobDebugReadFormProperties>({
			airbyteVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configType: new FormControl<SynchronousJobReadConfigType | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobDebugReadStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceDefinitionRead {

		/** Required */
		dockerImageTag: string;

		/** Required */
		dockerRepository: string;
		documentationUrl?: string | null;
		icon?: string | null;

		/** Required */
		name: string;

		/** The Airbyte Protocol version supported by the connector */
		protocolVersion?: string | null;

		/** The date when this connector was first released, in yyyy-mm-dd format. */
		releaseDate?: Date | null;
		releaseStage?: DestinationDefinitionReadReleaseStage | null;

		/** actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level. */
		resourceRequirements?: ActorDefinitionResourceRequirements;

		/** Required */
		sourceDefinitionId: string;
		sourceType?: SourceDefinitionReadSourceType | null;
	}
	export interface SourceDefinitionReadFormProperties {

		/** Required */
		dockerImageTag: FormControl<string | null | undefined>,

		/** Required */
		dockerRepository: FormControl<string | null | undefined>,
		documentationUrl: FormControl<string | null | undefined>,
		icon: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** The Airbyte Protocol version supported by the connector */
		protocolVersion: FormControl<string | null | undefined>,

		/** The date when this connector was first released, in yyyy-mm-dd format. */
		releaseDate: FormControl<Date | null | undefined>,
		releaseStage: FormControl<DestinationDefinitionReadReleaseStage | null | undefined>,

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,
		sourceType: FormControl<SourceDefinitionReadSourceType | null | undefined>,
	}
	export function CreateSourceDefinitionReadFormGroup() {
		return new FormGroup<SourceDefinitionReadFormProperties>({
			dockerImageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockerRepository: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentationUrl: new FormControl<string | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocolVersion: new FormControl<string | null | undefined>(undefined),
			releaseDate: new FormControl<Date | null | undefined>(undefined),
			releaseStage: new FormControl<DestinationDefinitionReadReleaseStage | null | undefined>(undefined),
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<SourceDefinitionReadSourceType | null | undefined>(undefined),
		});

	}

	export enum SourceDefinitionReadSourceType { api = 0, file = 1, database = 2, custom = 3 }

	export enum JobDebugReadStatus { pending = 0, running = 1, incomplete = 2, failed = 3, succeeded = 4, cancelled = 5 }

	export interface WorkflowStateRead {

		/** Required */
		running: boolean;
	}
	export interface WorkflowStateReadFormProperties {

		/** Required */
		running: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkflowStateReadFormGroup() {
		return new FormGroup<WorkflowStateReadFormProperties>({
			running: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JobIdRequestBody {

		/** Required */
		id: number;
	}
	export interface JobIdRequestBodyFormProperties {

		/** Required */
		id: FormControl<number | null | undefined>,
	}
	export function CreateJobIdRequestBodyFormGroup() {
		return new FormGroup<JobIdRequestBodyFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JobInfoLightRead {

		/** Required */
		job: JobRead;
	}
	export interface JobInfoLightReadFormProperties {
	}
	export function CreateJobInfoLightReadFormGroup() {
		return new FormGroup<JobInfoLightReadFormProperties>({
		});

	}

	export interface JobRead {

		/** Required */
		configId: string;

		/** Required */
		configType: SynchronousJobReadConfigType;

		/** Required */
		createdAt: number;

		/** Required */
		id: number;

		/** contains information about how a reset was configured. only populated if the job was a reset. */
		resetConfig?: ResetConfig;
		startedAt?: number | null;

		/** Required */
		status: JobDebugReadStatus;

		/** Required */
		updatedAt: number;
	}
	export interface JobReadFormProperties {

		/** Required */
		configId: FormControl<string | null | undefined>,

		/** Required */
		configType: FormControl<SynchronousJobReadConfigType | null | undefined>,

		/** Required */
		createdAt: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,
		startedAt: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<JobDebugReadStatus | null | undefined>,

		/** Required */
		updatedAt: FormControl<number | null | undefined>,
	}
	export function CreateJobReadFormGroup() {
		return new FormGroup<JobReadFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configType: new FormControl<SynchronousJobReadConfigType | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedAt: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<JobDebugReadStatus | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** contains information about how a reset was configured. only populated if the job was a reset. */
	export interface ResetConfig {
		streamsToReset?: Array<StreamDescriptor>;
	}

	/** contains information about how a reset was configured. only populated if the job was a reset. */
	export interface ResetConfigFormProperties {
	}
	export function CreateResetConfigFormGroup() {
		return new FormGroup<ResetConfigFormProperties>({
		});

	}

	export interface JobInfoRead {

		/** Required */
		attempts: Array<AttemptInfoRead>;

		/** Required */
		job: JobRead;
	}
	export interface JobInfoReadFormProperties {
	}
	export function CreateJobInfoReadFormGroup() {
		return new FormGroup<JobInfoReadFormProperties>({
		});

	}

	export interface JobListRequestBody {

		/** Required */
		configId: string;

		/** Required */
		configTypes: Array<JobConfigType>;
		includingJobId?: number | null;
		pagination?: Pagination;
	}
	export interface JobListRequestBodyFormProperties {

		/** Required */
		configId: FormControl<string | null | undefined>,
		includingJobId: FormControl<number | null | undefined>,
	}
	export function CreateJobListRequestBodyFormGroup() {
		return new FormGroup<JobListRequestBodyFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			includingJobId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Pagination {
		pageSize?: number | null;
		rowOffset?: number | null;
	}
	export interface PaginationFormProperties {
		pageSize: FormControl<number | null | undefined>,
		rowOffset: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			rowOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface JobOptionalRead {
		job?: JobRead;
	}
	export interface JobOptionalReadFormProperties {
	}
	export function CreateJobOptionalReadFormGroup() {
		return new FormGroup<JobOptionalReadFormProperties>({
		});

	}

	export interface JobReadList {

		/** Required */
		jobs: Array<JobWithAttemptsRead>;

		/**
		 * the total count of jobs for the specified connection
		 * Required
		 */
		totalJobCount: number;
	}
	export interface JobReadListFormProperties {

		/**
		 * the total count of jobs for the specified connection
		 * Required
		 */
		totalJobCount: FormControl<number | null | undefined>,
	}
	export function CreateJobReadListFormGroup() {
		return new FormGroup<JobReadListFormProperties>({
			totalJobCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JobWithAttemptsRead {
		attempts?: Array<AttemptRead>;
		job?: JobRead;
	}
	export interface JobWithAttemptsReadFormProperties {
	}
	export function CreateJobWithAttemptsReadFormGroup() {
		return new FormGroup<JobWithAttemptsReadFormProperties>({
		});

	}

	export enum JobStatus { pending = 0, running = 1, incomplete = 2, failed = 3, succeeded = 4, cancelled = 5 }


	/** enum that describes the different types of jobs that the platform runs. */
	export enum JobType { get_spec = 0, check_connection = 1, discover_schema = 2, sync = 3, reset_connection = 4, connection_updater = 5, replicate = 6 }

	export interface KnownExceptionInfo {
		exceptionClassName?: string | null;
		exceptionStack?: Array<string>;

		/** Required */
		message: string;
		rootCauseExceptionClassName?: string | null;
		rootCauseExceptionStack?: Array<string>;
	}
	export interface KnownExceptionInfoFormProperties {
		exceptionClassName: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
		rootCauseExceptionClassName: FormControl<string | null | undefined>,
	}
	export function CreateKnownExceptionInfoFormGroup() {
		return new FormGroup<KnownExceptionInfoFormProperties>({
			exceptionClassName: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rootCauseExceptionClassName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** type/source of logs produced */
	export enum LogType { server = 0, scheduler = 1 }

	export interface LogsRequestBody {

		/**
		 * type/source of logs produced
		 * Required
		 */
		logType: LogType;
	}
	export interface LogsRequestBodyFormProperties {

		/**
		 * type/source of logs produced
		 * Required
		 */
		logType: FormControl<LogType | null | undefined>,
	}
	export function CreateLogsRequestBodyFormGroup() {
		return new FormGroup<LogsRequestBodyFormProperties>({
			logType: new FormControl<LogType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Method used for computing final namespace in destination */
	export enum NamespaceDefinitionType { source = 0, destination = 1, customformat = 2 }

	export enum NonBreakingChangesPreference { ignore = 0, disable = 1 }

	export interface NotFoundKnownExceptionInfo {
		exceptionClassName?: string | null;
		exceptionStack?: Array<string>;
		id?: string | null;

		/** Required */
		message: string;
		rootCauseExceptionClassName?: string | null;
		rootCauseExceptionStack?: Array<string>;
	}
	export interface NotFoundKnownExceptionInfoFormProperties {
		exceptionClassName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
		rootCauseExceptionClassName: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundKnownExceptionInfoFormGroup() {
		return new FormGroup<NotFoundKnownExceptionInfoFormProperties>({
			exceptionClassName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rootCauseExceptionClassName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Notification {
		customerioConfiguration?: CustomerioNotificationConfiguration;

		/** Required */
		notificationType: NotificationNotificationType;

		/** Required */
		sendOnFailure: boolean;

		/** Required */
		sendOnSuccess: boolean;
		slackConfiguration?: SlackNotificationConfiguration;
	}
	export interface NotificationFormProperties {

		/** Required */
		notificationType: FormControl<NotificationNotificationType | null | undefined>,

		/** Required */
		sendOnFailure: FormControl<boolean | null | undefined>,

		/** Required */
		sendOnSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			notificationType: new FormControl<NotificationNotificationType | null | undefined>(undefined, [Validators.required]),
			sendOnFailure: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sendOnSuccess: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NotificationNotificationType { slack = 0, customerio = 1 }

	export interface SlackNotificationConfiguration {

		/** Required */
		webhook: string;
	}
	export interface SlackNotificationConfigurationFormProperties {

		/** Required */
		webhook: FormControl<string | null | undefined>,
	}
	export function CreateSlackNotificationConfigurationFormGroup() {
		return new FormGroup<SlackNotificationConfigurationFormProperties>({
			webhook: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotificationRead {
		message?: string | null;

		/** Required */
		status: CheckConnectionReadStatus;
	}
	export interface NotificationReadFormProperties {
		message: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<CheckConnectionReadStatus | null | undefined>,
	}
	export function CreateNotificationReadFormGroup() {
		return new FormGroup<NotificationReadFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CheckConnectionReadStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NotificationType { slack = 0, customerio = 1 }


	/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
	export interface OAuthConfiguration {
	}

	/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
	export interface OAuthConfigurationFormProperties {
	}
	export function CreateOAuthConfigurationFormGroup() {
		return new FormGroup<OAuthConfigurationFormProperties>({
		});

	}

	export interface OAuthConsentRead {

		/** Required */
		consentUrl: string;
	}
	export interface OAuthConsentReadFormProperties {

		/** Required */
		consentUrl: FormControl<string | null | undefined>,
	}
	export function CreateOAuthConsentReadFormGroup() {
		return new FormGroup<OAuthConsentReadFormProperties>({
			consentUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
	export interface OAuthInputConfiguration {
	}

	/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
	export interface OAuthInputConfigurationFormProperties {
	}
	export function CreateOAuthInputConfigurationFormGroup() {
		return new FormGroup<OAuthInputConfigurationFormProperties>({
		});

	}

	export interface OperationCreate {

		/** Required */
		name: string;

		/** Required */
		operatorConfiguration: OperatorConfiguration;

		/** Required */
		workspaceId: string;
	}
	export interface OperationCreateFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateOperationCreateFormGroup() {
		return new FormGroup<OperationCreateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OperatorConfiguration {
		dbt?: OperatorDbt;
		normalization?: OperatorNormalization;

		/** Required */
		operatorType: OperatorConfigurationOperatorType;
		webhook?: OperatorWebhook;
	}
	export interface OperatorConfigurationFormProperties {

		/** Required */
		operatorType: FormControl<OperatorConfigurationOperatorType | null | undefined>,
	}
	export function CreateOperatorConfigurationFormGroup() {
		return new FormGroup<OperatorConfigurationFormProperties>({
			operatorType: new FormControl<OperatorConfigurationOperatorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OperatorDbt {
		dbtArguments?: string | null;
		dockerImage?: string | null;
		gitRepoBranch?: string | null;

		/** Required */
		gitRepoUrl: string;
	}
	export interface OperatorDbtFormProperties {
		dbtArguments: FormControl<string | null | undefined>,
		dockerImage: FormControl<string | null | undefined>,
		gitRepoBranch: FormControl<string | null | undefined>,

		/** Required */
		gitRepoUrl: FormControl<string | null | undefined>,
	}
	export function CreateOperatorDbtFormGroup() {
		return new FormGroup<OperatorDbtFormProperties>({
			dbtArguments: new FormControl<string | null | undefined>(undefined),
			dockerImage: new FormControl<string | null | undefined>(undefined),
			gitRepoBranch: new FormControl<string | null | undefined>(undefined),
			gitRepoUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OperatorNormalization {
		option?: OperatorNormalizationOption | null;
	}
	export interface OperatorNormalizationFormProperties {
		option: FormControl<OperatorNormalizationOption | null | undefined>,
	}
	export function CreateOperatorNormalizationFormGroup() {
		return new FormGroup<OperatorNormalizationFormProperties>({
			option: new FormControl<OperatorNormalizationOption | null | undefined>(undefined),
		});

	}

	export enum OperatorNormalizationOption { basic = 0 }

	export enum OperatorConfigurationOperatorType { normalization = 0, dbt = 1, webhook = 2 }

	export interface OperatorWebhook {
		dbtCloud?: OperatorWebhookDbtCloud;

		/** DEPRECATED. Populate dbtCloud instead. */
		executionBody?: string | null;

		/** DEPRECATED. Populate dbtCloud instead. */
		executionUrl?: string | null;

		/** The id of the webhook configs to use from the workspace. */
		webhookConfigId?: string | null;
		webhookType?: OperatorWebhookWebhookType | null;
	}
	export interface OperatorWebhookFormProperties {

		/** DEPRECATED. Populate dbtCloud instead. */
		executionBody: FormControl<string | null | undefined>,

		/** DEPRECATED. Populate dbtCloud instead. */
		executionUrl: FormControl<string | null | undefined>,

		/** The id of the webhook configs to use from the workspace. */
		webhookConfigId: FormControl<string | null | undefined>,
		webhookType: FormControl<OperatorWebhookWebhookType | null | undefined>,
	}
	export function CreateOperatorWebhookFormGroup() {
		return new FormGroup<OperatorWebhookFormProperties>({
			executionBody: new FormControl<string | null | undefined>(undefined),
			executionUrl: new FormControl<string | null | undefined>(undefined),
			webhookConfigId: new FormControl<string | null | undefined>(undefined),
			webhookType: new FormControl<OperatorWebhookWebhookType | null | undefined>(undefined),
		});

	}

	export interface OperatorWebhookDbtCloud {

		/**
		 * The account id associated with the job
		 * Required
		 */
		accountId: number;

		/**
		 * The job id associated with the job
		 * Required
		 */
		jobId: number;
	}
	export interface OperatorWebhookDbtCloudFormProperties {

		/**
		 * The account id associated with the job
		 * Required
		 */
		accountId: FormControl<number | null | undefined>,

		/**
		 * The job id associated with the job
		 * Required
		 */
		jobId: FormControl<number | null | undefined>,
	}
	export function CreateOperatorWebhookDbtCloudFormGroup() {
		return new FormGroup<OperatorWebhookDbtCloudFormProperties>({
			accountId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			jobId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OperatorWebhookWebhookType { dbtCloud = 0 }

	export interface OperationIdRequestBody {

		/** Required */
		operationId: string;
	}
	export interface OperationIdRequestBodyFormProperties {

		/** Required */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateOperationIdRequestBodyFormGroup() {
		return new FormGroup<OperationIdRequestBodyFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OperationRead {

		/** Required */
		name: string;

		/** Required */
		operationId: string;

		/** Required */
		operatorConfiguration: OperatorConfiguration;

		/** Required */
		workspaceId: string;
	}
	export interface OperationReadFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		operationId: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateOperationReadFormGroup() {
		return new FormGroup<OperationReadFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OperationReadList {

		/** Required */
		operations: Array<OperationRead>;
	}
	export interface OperationReadListFormProperties {
	}
	export function CreateOperationReadListFormGroup() {
		return new FormGroup<OperationReadListFormProperties>({
		});

	}

	export interface OperationUpdate {

		/** Required */
		name: string;

		/** Required */
		operationId: string;

		/** Required */
		operatorConfiguration: OperatorConfiguration;
	}
	export interface OperationUpdateFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateOperationUpdateFormGroup() {
		return new FormGroup<OperationUpdateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OperatorType { normalization = 0, dbt = 1, webhook = 2 }

	export interface PrivateDestinationDefinitionRead {

		/** Required */
		destinationDefinition: DestinationDefinitionRead;

		/** Required */
		granted: boolean;
	}
	export interface PrivateDestinationDefinitionReadFormProperties {

		/** Required */
		granted: FormControl<boolean | null | undefined>,
	}
	export function CreatePrivateDestinationDefinitionReadFormGroup() {
		return new FormGroup<PrivateDestinationDefinitionReadFormProperties>({
			granted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrivateDestinationDefinitionReadList {

		/** Required */
		destinationDefinitions: Array<PrivateDestinationDefinitionRead>;
	}
	export interface PrivateDestinationDefinitionReadListFormProperties {
	}
	export function CreatePrivateDestinationDefinitionReadListFormGroup() {
		return new FormGroup<PrivateDestinationDefinitionReadListFormProperties>({
		});

	}

	export interface PrivateSourceDefinitionRead {

		/** Required */
		granted: boolean;

		/** Required */
		sourceDefinition: SourceDefinitionRead;
	}
	export interface PrivateSourceDefinitionReadFormProperties {

		/** Required */
		granted: FormControl<boolean | null | undefined>,
	}
	export function CreatePrivateSourceDefinitionReadFormGroup() {
		return new FormGroup<PrivateSourceDefinitionReadFormProperties>({
			granted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrivateSourceDefinitionReadList {

		/** Required */
		sourceDefinitions: Array<PrivateSourceDefinitionRead>;
	}
	export interface PrivateSourceDefinitionReadListFormProperties {
	}
	export function CreatePrivateSourceDefinitionReadListFormGroup() {
		return new FormGroup<PrivateSourceDefinitionReadListFormProperties>({
		});

	}

	export enum ReleaseStage { alpha = 0, beta = 1, generally_available = 2, custom = 3 }

	export interface SaveAttemptSyncConfigRequestBody {

		/** Required */
		attemptNumber: number;

		/** Required */
		jobId: number;

		/** Required */
		syncConfig: AttemptSyncConfig;
	}
	export interface SaveAttemptSyncConfigRequestBodyFormProperties {

		/** Required */
		attemptNumber: FormControl<number | null | undefined>,

		/** Required */
		jobId: FormControl<number | null | undefined>,
	}
	export function CreateSaveAttemptSyncConfigRequestBodyFormGroup() {
		return new FormGroup<SaveAttemptSyncConfigRequestBodyFormProperties>({
			attemptNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			jobId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SaveStatsRequestBody {

		/** Required */
		attemptNumber: number;

		/** Required */
		jobId: number;

		/** Required */
		stats: AttemptStats;
		streamStats?: Array<AttemptStreamStats>;
	}
	export interface SaveStatsRequestBodyFormProperties {

		/** Required */
		attemptNumber: FormControl<number | null | undefined>,

		/** Required */
		jobId: FormControl<number | null | undefined>,
	}
	export function CreateSaveStatsRequestBodyFormGroup() {
		return new FormGroup<SaveStatsRequestBodyFormProperties>({
			attemptNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			jobId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SchemaChange { no_change = 0, non_breaking = 1, breaking = 2 }

	export interface SetInstancewideDestinationOauthParamsRequestBody {

		/** Required */
		destinationDefinitionId: string;

		/** Required */
		params: string;
	}
	export interface SetInstancewideDestinationOauthParamsRequestBodyFormProperties {

		/** Required */
		destinationDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		params: FormControl<string | null | undefined>,
	}
	export function CreateSetInstancewideDestinationOauthParamsRequestBodyFormGroup() {
		return new FormGroup<SetInstancewideDestinationOauthParamsRequestBodyFormProperties>({
			destinationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			params: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetInstancewideSourceOauthParamsRequestBody {

		/** Required */
		params: string;

		/** Required */
		sourceDefinitionId: string;
	}
	export interface SetInstancewideSourceOauthParamsRequestBodyFormProperties {

		/** Required */
		params: FormControl<string | null | undefined>,

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateSetInstancewideSourceOauthParamsRequestBodyFormGroup() {
		return new FormGroup<SetInstancewideSourceOauthParamsRequestBodyFormProperties>({
			params: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetWorkflowInAttemptRequestBody {

		/** Required */
		attemptNumber: number;

		/** Required */
		jobId: number;
		processingTaskQueue?: string | null;

		/** Required */
		workflowId: string;
	}
	export interface SetWorkflowInAttemptRequestBodyFormProperties {

		/** Required */
		attemptNumber: FormControl<number | null | undefined>,

		/** Required */
		jobId: FormControl<number | null | undefined>,
		processingTaskQueue: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateSetWorkflowInAttemptRequestBodyFormGroup() {
		return new FormGroup<SetWorkflowInAttemptRequestBodyFormProperties>({
			attemptNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			jobId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			processingTaskQueue: new FormControl<string | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SlugRequestBody {

		/** Required */
		slug: string;
	}
	export interface SlugRequestBodyFormProperties {

		/** Required */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateSlugRequestBodyFormGroup() {
		return new FormGroup<SlugRequestBodyFormProperties>({
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceAuthSpecification {
		auth_type?: AuthSpecificationAuth_type | null;

		/** An object containing any metadata needed to describe this connector's Oauth flow */
		oauth2Specification?: OAuth2Specification;
	}
	export interface SourceAuthSpecificationFormProperties {
		auth_type: FormControl<AuthSpecificationAuth_type | null | undefined>,
	}
	export function CreateSourceAuthSpecificationFormGroup() {
		return new FormGroup<SourceAuthSpecificationFormProperties>({
			auth_type: new FormControl<AuthSpecificationAuth_type | null | undefined>(undefined),
		});

	}

	export interface SourceCloneConfiguration {

		/** The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source. */
		connectionConfiguration?: SourceConfiguration;
		name?: string | null;
	}
	export interface SourceCloneConfigurationFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateSourceCloneConfigurationFormGroup() {
		return new FormGroup<SourceCloneConfigurationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The values required to configure the source. The schema for this should have an id of the existing source along with the configuration you want to change in case. */
	export interface SourceCloneRequestBody {

		/** Required */
		sourceCloneId: string;
		sourceConfiguration?: SourceCloneConfiguration;
	}

	/** The values required to configure the source. The schema for this should have an id of the existing source along with the configuration you want to change in case. */
	export interface SourceCloneRequestBodyFormProperties {

		/** Required */
		sourceCloneId: FormControl<string | null | undefined>,
	}
	export function CreateSourceCloneRequestBodyFormGroup() {
		return new FormGroup<SourceCloneRequestBodyFormProperties>({
			sourceCloneId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source. */
	export interface SourceConfiguration {
	}

	/** The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source. */
	export interface SourceConfigurationFormProperties {
	}
	export function CreateSourceConfigurationFormGroup() {
		return new FormGroup<SourceConfigurationFormProperties>({
		});

	}

	export interface SourceCoreConfig {

		/**
		 * The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.
		 * Required
		 */
		connectionConfiguration: SourceConfiguration;

		/** Required */
		sourceDefinitionId: string;
		sourceId?: string | null;

		/** Required */
		workspaceId: string;
	}
	export interface SourceCoreConfigFormProperties {

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateSourceCoreConfigFormGroup() {
		return new FormGroup<SourceCoreConfigFormProperties>({
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceCreate {

		/**
		 * The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.
		 * Required
		 */
		connectionConfiguration: SourceConfiguration;

		/** Required */
		name: string;

		/** Required */
		sourceDefinitionId: string;

		/** Required */
		workspaceId: string;
	}
	export interface SourceCreateFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateSourceCreateFormGroup() {
		return new FormGroup<SourceCreateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceDefinitionIdRequestBody {

		/** Required */
		sourceDefinitionId: string;
	}
	export interface SourceDefinitionIdRequestBodyFormProperties {

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateSourceDefinitionIdRequestBodyFormGroup() {
		return new FormGroup<SourceDefinitionIdRequestBodyFormProperties>({
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceDefinitionIdWithWorkspaceId {

		/** Required */
		sourceDefinitionId: string;

		/** Required */
		workspaceId: string;
	}
	export interface SourceDefinitionIdWithWorkspaceIdFormProperties {

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateSourceDefinitionIdWithWorkspaceIdFormGroup() {
		return new FormGroup<SourceDefinitionIdWithWorkspaceIdFormProperties>({
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceDefinitionReadList {

		/** Required */
		sourceDefinitions: Array<SourceDefinitionRead>;
	}
	export interface SourceDefinitionReadListFormProperties {
	}
	export function CreateSourceDefinitionReadListFormGroup() {
		return new FormGroup<SourceDefinitionReadListFormProperties>({
		});

	}


	/** The specification for what values are required to configure the sourceDefinition. */
	export interface SourceDefinitionSpecification {
	}

	/** The specification for what values are required to configure the sourceDefinition. */
	export interface SourceDefinitionSpecificationFormProperties {
	}
	export function CreateSourceDefinitionSpecificationFormGroup() {
		return new FormGroup<SourceDefinitionSpecificationFormProperties>({
		});

	}

	export interface SourceDefinitionSpecificationRead {
		advancedAuth?: AdvancedAuth;
		authSpecification?: AuthSpecification;

		/** The specification for what values are required to configure the sourceDefinition. */
		connectionSpecification?: SourceDefinitionSpecification;
		documentationUrl?: string | null;

		/** Required */
		jobInfo: SynchronousJobRead;

		/** Required */
		sourceDefinitionId: string;
	}
	export interface SourceDefinitionSpecificationReadFormProperties {
		documentationUrl: FormControl<string | null | undefined>,

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateSourceDefinitionSpecificationReadFormGroup() {
		return new FormGroup<SourceDefinitionSpecificationReadFormProperties>({
			documentationUrl: new FormControl<string | null | undefined>(undefined),
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version. */
	export interface SourceDefinitionUpdate {

		/** Required */
		dockerImageTag: string;

		/** actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level. */
		resourceRequirements?: ActorDefinitionResourceRequirements;

		/** Required */
		sourceDefinitionId: string;
	}

	/** Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version. */
	export interface SourceDefinitionUpdateFormProperties {

		/** Required */
		dockerImageTag: FormControl<string | null | undefined>,

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateSourceDefinitionUpdateFormGroup() {
		return new FormGroup<SourceDefinitionUpdateFormProperties>({
			dockerImageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not. */
	export interface SourceDiscoverSchemaRead {
		breakingChange?: boolean | null;

		/** describes the available schema (catalog). */
		catalog?: AirbyteCatalog;

		/** Describes the difference between two Airbyte catalogs. */
		catalogDiff?: CatalogDiff;
		catalogId?: string | null;

		/** Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced. */
		connectionStatus?: ConnectionCreateStatus | null;

		/** Required */
		jobInfo: SynchronousJobRead;
	}

	/** Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not. */
	export interface SourceDiscoverSchemaReadFormProperties {
		breakingChange: FormControl<boolean | null | undefined>,
		catalogId: FormControl<string | null | undefined>,

		/** Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced. */
		connectionStatus: FormControl<ConnectionCreateStatus | null | undefined>,
	}
	export function CreateSourceDiscoverSchemaReadFormGroup() {
		return new FormGroup<SourceDiscoverSchemaReadFormProperties>({
			breakingChange: new FormControl<boolean | null | undefined>(undefined),
			catalogId: new FormControl<string | null | undefined>(undefined),
			connectionStatus: new FormControl<ConnectionCreateStatus | null | undefined>(undefined),
		});

	}

	export interface SourceDiscoverSchemaRequestBody {
		connectionId?: string | null;
		disable_cache?: boolean | null;
		notifySchemaChange?: boolean | null;

		/** Required */
		sourceId: string;
	}
	export interface SourceDiscoverSchemaRequestBodyFormProperties {
		connectionId: FormControl<string | null | undefined>,
		disable_cache: FormControl<boolean | null | undefined>,
		notifySchemaChange: FormControl<boolean | null | undefined>,

		/** Required */
		sourceId: FormControl<string | null | undefined>,
	}
	export function CreateSourceDiscoverSchemaRequestBodyFormGroup() {
		return new FormGroup<SourceDiscoverSchemaRequestBodyFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined),
			disable_cache: new FormControl<boolean | null | undefined>(undefined),
			notifySchemaChange: new FormControl<boolean | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** to write this requested object to database. */
	export interface SourceDiscoverSchemaWriteRequestBody {

		/**
		 * describes the available schema (catalog).
		 * Required
		 */
		catalog: AirbyteCatalog;
		configurationHash?: string | null;
		connectorVersion?: string | null;
		sourceId?: string | null;
	}

	/** to write this requested object to database. */
	export interface SourceDiscoverSchemaWriteRequestBodyFormProperties {
		configurationHash: FormControl<string | null | undefined>,
		connectorVersion: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,
	}
	export function CreateSourceDiscoverSchemaWriteRequestBodyFormGroup() {
		return new FormGroup<SourceDiscoverSchemaWriteRequestBodyFormProperties>({
			configurationHash: new FormControl<string | null | undefined>(undefined),
			connectorVersion: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SourceIdRequestBody {

		/** Required */
		sourceId: string;
	}
	export interface SourceIdRequestBodyFormProperties {

		/** Required */
		sourceId: FormControl<string | null | undefined>,
	}
	export function CreateSourceIdRequestBodyFormGroup() {
		return new FormGroup<SourceIdRequestBodyFormProperties>({
			sourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceOauthConsentRequest {

		/** The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
		oAuthInputConfiguration?: OAuthConfiguration;

		/**
		 * The url to redirect to after getting the user consent
		 * Required
		 */
		redirectUrl: string;

		/** Required */
		sourceDefinitionId: string;
		sourceId?: string | null;

		/** Required */
		workspaceId: string;
	}
	export interface SourceOauthConsentRequestFormProperties {

		/**
		 * The url to redirect to after getting the user consent
		 * Required
		 */
		redirectUrl: FormControl<string | null | undefined>,

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateSourceOauthConsentRequestFormGroup() {
		return new FormGroup<SourceOauthConsentRequestFormProperties>({
			redirectUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceRead {

		/**
		 * The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.
		 * Required
		 */
		connectionConfiguration: SourceConfiguration;
		icon?: string | null;

		/** Required */
		name: string;

		/** Required */
		sourceDefinitionId: string;

		/** Required */
		sourceId: string;

		/** Required */
		sourceName: string;

		/** Required */
		workspaceId: string;
	}
	export interface SourceReadFormProperties {
		icon: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		sourceId: FormControl<string | null | undefined>,

		/** Required */
		sourceName: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateSourceReadFormGroup() {
		return new FormGroup<SourceReadFormProperties>({
			icon: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceReadList {

		/** Required */
		sources: Array<SourceRead>;
	}
	export interface SourceReadListFormProperties {
	}
	export function CreateSourceReadListFormGroup() {
		return new FormGroup<SourceReadListFormProperties>({
		});

	}

	export interface SourceSnippetRead {
		icon?: string | null;

		/** Required */
		name: string;

		/** Required */
		sourceDefinitionId: string;

		/** Required */
		sourceId: string;

		/** Required */
		sourceName: string;
	}
	export interface SourceSnippetReadFormProperties {
		icon: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		sourceDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		sourceId: FormControl<string | null | undefined>,

		/** Required */
		sourceName: FormControl<string | null | undefined>,
	}
	export function CreateSourceSnippetReadFormGroup() {
		return new FormGroup<SourceSnippetReadFormProperties>({
			icon: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceUpdate {

		/**
		 * The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.
		 * Required
		 */
		connectionConfiguration: SourceConfiguration;

		/** Required */
		name: string;

		/** Required */
		sourceId: string;
	}
	export interface SourceUpdateFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		sourceId: FormControl<string | null | undefined>,
	}
	export function CreateSourceUpdateFormGroup() {
		return new FormGroup<SourceUpdateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UploadRead {
		resourceId?: string | null;

		/** Required */
		status: CheckConnectionReadStatus;
	}
	export interface UploadReadFormProperties {
		resourceId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<CheckConnectionReadStatus | null | undefined>,
	}
	export function CreateUploadReadFormGroup() {
		return new FormGroup<UploadReadFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CheckConnectionReadStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Summary of source and destination definitions that could be updated */
	export interface WebBackendCheckUpdatesRead {

		/** Required */
		destinationDefinitions: number;

		/** Required */
		sourceDefinitions: number;
	}

	/** Summary of source and destination definitions that could be updated */
	export interface WebBackendCheckUpdatesReadFormProperties {

		/** Required */
		destinationDefinitions: FormControl<number | null | undefined>,

		/** Required */
		sourceDefinitions: FormControl<number | null | undefined>,
	}
	export function CreateWebBackendCheckUpdatesReadFormGroup() {
		return new FormGroup<WebBackendCheckUpdatesReadFormProperties>({
			destinationDefinitions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sourceDefinitions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebBackendConnectionCreate {

		/** Required */
		destinationId: string;
		geography?: ConnectionCreateGeography | null;

		/** Optional name of the connection */
		name?: string | null;

		/** Method used for computing final namespace in destination */
		namespaceDefinition?: ConnectionCreateNamespaceDefinition | null;

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat?: string | null;
		nonBreakingChangesPreference?: ConnectionCreateNonBreakingChangesPreference | null;
		operationIds?: Array<string>;
		operations?: Array<OperationCreate>;

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix?: string | null;

		/** optional resource requirements to run workers (blank for unbounded allocations) */
		resourceRequirements?: ResourceRequirements;

		/** if null, then no schedule is set. */
		schedule?: ConnectionSchedule;

		/** schedule for when the the connection should run, per the schedule type */
		scheduleData?: ConnectionScheduleData;

		/** determine how the schedule data should be interpreted */
		scheduleType?: ConnectionCreateScheduleType | null;
		sourceCatalogId?: string | null;

		/** Required */
		sourceId: string;

		/**
		 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
		 * Required
		 */
		status: ConnectionCreateStatus;

		/** describes the available schema (catalog). */
		syncCatalog?: AirbyteCatalog;
	}
	export interface WebBackendConnectionCreateFormProperties {

		/** Required */
		destinationId: FormControl<string | null | undefined>,
		geography: FormControl<ConnectionCreateGeography | null | undefined>,

		/** Optional name of the connection */
		name: FormControl<string | null | undefined>,

		/** Method used for computing final namespace in destination */
		namespaceDefinition: FormControl<ConnectionCreateNamespaceDefinition | null | undefined>,

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat: FormControl<string | null | undefined>,
		nonBreakingChangesPreference: FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>,

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix: FormControl<string | null | undefined>,

		/** determine how the schedule data should be interpreted */
		scheduleType: FormControl<ConnectionCreateScheduleType | null | undefined>,
		sourceCatalogId: FormControl<string | null | undefined>,

		/** Required */
		sourceId: FormControl<string | null | undefined>,

		/**
		 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
		 * Required
		 */
		status: FormControl<ConnectionCreateStatus | null | undefined>,
	}
	export function CreateWebBackendConnectionCreateFormGroup() {
		return new FormGroup<WebBackendConnectionCreateFormProperties>({
			destinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			geography: new FormControl<ConnectionCreateGeography | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespaceDefinition: new FormControl<ConnectionCreateNamespaceDefinition | null | undefined>(undefined),
			namespaceFormat: new FormControl<string | null | undefined>(undefined),
			nonBreakingChangesPreference: new FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			scheduleType: new FormControl<ConnectionCreateScheduleType | null | undefined>(undefined),
			sourceCatalogId: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConnectionCreateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a connection that shows up in the connection list view. */
	export interface WebBackendConnectionListItem {

		/** Required */
		connectionId: string;

		/** Required */
		destination: DestinationSnippetRead;

		/** Required */
		isSyncing: boolean;

		/** epoch time of the latest sync job. null if no sync job has taken place. */
		latestSyncJobCreatedAt?: number | null;
		latestSyncJobStatus?: JobDebugReadStatus | null;

		/** Required */
		name: string;

		/** schedule for when the the connection should run, per the schedule type */
		scheduleData?: ConnectionScheduleData;

		/** determine how the schedule data should be interpreted */
		scheduleType?: ConnectionCreateScheduleType | null;

		/** Required */
		schemaChange: SchemaChange;

		/** Required */
		source: SourceSnippetRead;

		/**
		 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
		 * Required
		 */
		status: ConnectionCreateStatus;
	}

	/** Information about a connection that shows up in the connection list view. */
	export interface WebBackendConnectionListItemFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		isSyncing: FormControl<boolean | null | undefined>,

		/** epoch time of the latest sync job. null if no sync job has taken place. */
		latestSyncJobCreatedAt: FormControl<number | null | undefined>,
		latestSyncJobStatus: FormControl<JobDebugReadStatus | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** determine how the schedule data should be interpreted */
		scheduleType: FormControl<ConnectionCreateScheduleType | null | undefined>,

		/** Required */
		schemaChange: FormControl<SchemaChange | null | undefined>,

		/**
		 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
		 * Required
		 */
		status: FormControl<ConnectionCreateStatus | null | undefined>,
	}
	export function CreateWebBackendConnectionListItemFormGroup() {
		return new FormGroup<WebBackendConnectionListItemFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isSyncing: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			latestSyncJobCreatedAt: new FormControl<number | null | undefined>(undefined),
			latestSyncJobStatus: new FormControl<JobDebugReadStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduleType: new FormControl<ConnectionCreateScheduleType | null | undefined>(undefined),
			schemaChange: new FormControl<SchemaChange | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConnectionCreateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebBackendConnectionListRequestBody {
		destinationId?: Array<string>;
		sourceId?: Array<string>;

		/** Required */
		workspaceId: string;
	}
	export interface WebBackendConnectionListRequestBodyFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWebBackendConnectionListRequestBodyFormGroup() {
		return new FormGroup<WebBackendConnectionListRequestBodyFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebBackendConnectionRead {

		/** Describes the difference between two Airbyte catalogs. */
		catalogDiff?: CatalogDiff;
		catalogId?: string | null;

		/** Required */
		connectionId: string;

		/** Required */
		destination: DestinationRead;

		/** Required */
		destinationId: string;
		geography?: ConnectionCreateGeography | null;

		/** Required */
		isSyncing: boolean;

		/** epoch time of the latest sync job. null if no sync job has taken place. */
		latestSyncJobCreatedAt?: number | null;
		latestSyncJobStatus?: JobDebugReadStatus | null;

		/** Required */
		name: string;

		/** Method used for computing final namespace in destination */
		namespaceDefinition?: ConnectionCreateNamespaceDefinition | null;

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat?: string | null;

		/** Required */
		nonBreakingChangesPreference: ConnectionCreateNonBreakingChangesPreference;

		/** Required */
		notifySchemaChanges: boolean;
		operationIds?: Array<string>;
		operations?: Array<OperationRead>;

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix?: string | null;

		/** optional resource requirements to run workers (blank for unbounded allocations) */
		resourceRequirements?: ResourceRequirements;

		/** if null, then no schedule is set. */
		schedule?: ConnectionSchedule;

		/** schedule for when the the connection should run, per the schedule type */
		scheduleData?: ConnectionScheduleData;

		/** determine how the schedule data should be interpreted */
		scheduleType?: ConnectionCreateScheduleType | null;

		/** Required */
		schemaChange: SchemaChange;

		/** Required */
		source: SourceRead;

		/** Required */
		sourceId: string;

		/**
		 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
		 * Required
		 */
		status: ConnectionCreateStatus;

		/**
		 * describes the available schema (catalog).
		 * Required
		 */
		syncCatalog: AirbyteCatalog;
	}
	export interface WebBackendConnectionReadFormProperties {
		catalogId: FormControl<string | null | undefined>,

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		destinationId: FormControl<string | null | undefined>,
		geography: FormControl<ConnectionCreateGeography | null | undefined>,

		/** Required */
		isSyncing: FormControl<boolean | null | undefined>,

		/** epoch time of the latest sync job. null if no sync job has taken place. */
		latestSyncJobCreatedAt: FormControl<number | null | undefined>,
		latestSyncJobStatus: FormControl<JobDebugReadStatus | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Method used for computing final namespace in destination */
		namespaceDefinition: FormControl<ConnectionCreateNamespaceDefinition | null | undefined>,

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat: FormControl<string | null | undefined>,

		/** Required */
		nonBreakingChangesPreference: FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>,

		/** Required */
		notifySchemaChanges: FormControl<boolean | null | undefined>,

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix: FormControl<string | null | undefined>,

		/** determine how the schedule data should be interpreted */
		scheduleType: FormControl<ConnectionCreateScheduleType | null | undefined>,

		/** Required */
		schemaChange: FormControl<SchemaChange | null | undefined>,

		/** Required */
		sourceId: FormControl<string | null | undefined>,

		/**
		 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
		 * Required
		 */
		status: FormControl<ConnectionCreateStatus | null | undefined>,
	}
	export function CreateWebBackendConnectionReadFormGroup() {
		return new FormGroup<WebBackendConnectionReadFormProperties>({
			catalogId: new FormControl<string | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			geography: new FormControl<ConnectionCreateGeography | null | undefined>(undefined),
			isSyncing: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			latestSyncJobCreatedAt: new FormControl<number | null | undefined>(undefined),
			latestSyncJobStatus: new FormControl<JobDebugReadStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespaceDefinition: new FormControl<ConnectionCreateNamespaceDefinition | null | undefined>(undefined),
			namespaceFormat: new FormControl<string | null | undefined>(undefined),
			nonBreakingChangesPreference: new FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>(undefined, [Validators.required]),
			notifySchemaChanges: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined),
			scheduleType: new FormControl<ConnectionCreateScheduleType | null | undefined>(undefined),
			schemaChange: new FormControl<SchemaChange | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConnectionCreateStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebBackendConnectionReadList {

		/** Required */
		connections: Array<WebBackendConnectionListItem>;
	}
	export interface WebBackendConnectionReadListFormProperties {
	}
	export function CreateWebBackendConnectionReadListFormGroup() {
		return new FormGroup<WebBackendConnectionReadListFormProperties>({
		});

	}

	export interface WebBackendConnectionRequestBody {

		/** Required */
		connectionId: string;
		withRefreshedCatalog?: boolean | null;
	}
	export interface WebBackendConnectionRequestBodyFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
		withRefreshedCatalog: FormControl<boolean | null | undefined>,
	}
	export function CreateWebBackendConnectionRequestBodyFormGroup() {
		return new FormGroup<WebBackendConnectionRequestBodyFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			withRefreshedCatalog: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Used to apply a patch-style update to a connection, which means that null properties remain unchanged */
	export interface WebBackendConnectionUpdate {

		/** Required */
		connectionId: string;
		geography?: ConnectionCreateGeography | null;

		/** Name that will be set to the connection */
		name?: string | null;

		/** Method used for computing final namespace in destination */
		namespaceDefinition?: ConnectionCreateNamespaceDefinition | null;

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat?: string | null;
		nonBreakingChangesPreference?: ConnectionCreateNonBreakingChangesPreference | null;
		notifySchemaChanges?: boolean | null;
		operations?: Array<WebBackendOperationCreateOrUpdate>;

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix?: string | null;

		/** optional resource requirements to run workers (blank for unbounded allocations) */
		resourceRequirements?: ResourceRequirements;

		/** if null, then no schedule is set. */
		schedule?: ConnectionSchedule;

		/** schedule for when the the connection should run, per the schedule type */
		scheduleData?: ConnectionScheduleData;

		/** determine how the schedule data should be interpreted */
		scheduleType?: ConnectionCreateScheduleType | null;
		skipReset?: boolean | null;
		sourceCatalogId?: string | null;

		/** Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced. */
		status?: ConnectionCreateStatus | null;

		/** describes the available schema (catalog). */
		syncCatalog?: AirbyteCatalog;
	}

	/** Used to apply a patch-style update to a connection, which means that null properties remain unchanged */
	export interface WebBackendConnectionUpdateFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
		geography: FormControl<ConnectionCreateGeography | null | undefined>,

		/** Name that will be set to the connection */
		name: FormControl<string | null | undefined>,

		/** Method used for computing final namespace in destination */
		namespaceDefinition: FormControl<ConnectionCreateNamespaceDefinition | null | undefined>,

		/** Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'. */
		namespaceFormat: FormControl<string | null | undefined>,
		nonBreakingChangesPreference: FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>,
		notifySchemaChanges: FormControl<boolean | null | undefined>,

		/** Prefix that will be prepended to the name of each stream when it is written to the destination. */
		prefix: FormControl<string | null | undefined>,

		/** determine how the schedule data should be interpreted */
		scheduleType: FormControl<ConnectionCreateScheduleType | null | undefined>,
		skipReset: FormControl<boolean | null | undefined>,
		sourceCatalogId: FormControl<string | null | undefined>,

		/** Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced. */
		status: FormControl<ConnectionCreateStatus | null | undefined>,
	}
	export function CreateWebBackendConnectionUpdateFormGroup() {
		return new FormGroup<WebBackendConnectionUpdateFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			geography: new FormControl<ConnectionCreateGeography | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespaceDefinition: new FormControl<ConnectionCreateNamespaceDefinition | null | undefined>(undefined),
			namespaceFormat: new FormControl<string | null | undefined>(undefined),
			nonBreakingChangesPreference: new FormControl<ConnectionCreateNonBreakingChangesPreference | null | undefined>(undefined),
			notifySchemaChanges: new FormControl<boolean | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			scheduleType: new FormControl<ConnectionCreateScheduleType | null | undefined>(undefined),
			skipReset: new FormControl<boolean | null | undefined>(undefined),
			sourceCatalogId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ConnectionCreateStatus | null | undefined>(undefined),
		});

	}

	export interface WebBackendOperationCreateOrUpdate {

		/** Required */
		name: string;
		operationId?: string | null;

		/** Required */
		operatorConfiguration: OperatorConfiguration;

		/** Required */
		workspaceId: string;
	}
	export interface WebBackendOperationCreateOrUpdateFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		operationId: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWebBackendOperationCreateOrUpdateFormGroup() {
		return new FormGroup<WebBackendOperationCreateOrUpdateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationId: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebBackendGeographiesListResult {

		/** Required */
		geographies: Array<Geography>;
	}
	export interface WebBackendGeographiesListResultFormProperties {
	}
	export function CreateWebBackendGeographiesListResultFormGroup() {
		return new FormGroup<WebBackendGeographiesListResultFormProperties>({
		});

	}

	export interface WebBackendWorkspaceState {

		/** Required */
		workspaceId: string;
	}
	export interface WebBackendWorkspaceStateFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWebBackendWorkspaceStateFormGroup() {
		return new FormGroup<WebBackendWorkspaceStateFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebBackendWorkspaceStateResult {

		/** Required */
		hasConnections: boolean;

		/** Required */
		hasDestinations: boolean;

		/** Required */
		hasSources: boolean;
	}
	export interface WebBackendWorkspaceStateResultFormProperties {

		/** Required */
		hasConnections: FormControl<boolean | null | undefined>,

		/** Required */
		hasDestinations: FormControl<boolean | null | undefined>,

		/** Required */
		hasSources: FormControl<boolean | null | undefined>,
	}
	export function CreateWebBackendWorkspaceStateResultFormGroup() {
		return new FormGroup<WebBackendWorkspaceStateResultFormProperties>({
			hasConnections: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hasDestinations: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hasSources: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** the readable info for a webhook config; omits sensitive info e.g. auth token */
	export interface WebhookConfigRead {

		/** Required */
		id: string;

		/** human-readable name e.g. for display in UI */
		name?: string | null;
	}

	/** the readable info for a webhook config; omits sensitive info e.g. auth token */
	export interface WebhookConfigReadFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** human-readable name e.g. for display in UI */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWebhookConfigReadFormGroup() {
		return new FormGroup<WebhookConfigReadFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookConfigWrite {

		/** an auth token, to be passed as the value for an HTTP Authorization header. */
		authToken?: string | null;

		/** human readable name for this webhook e.g. for UI display. */
		name?: string | null;

		/** if supplied, the webhook config will be validated by checking that this URL returns a 2xx response. */
		validationUrl?: string | null;
	}
	export interface WebhookConfigWriteFormProperties {

		/** an auth token, to be passed as the value for an HTTP Authorization header. */
		authToken: FormControl<string | null | undefined>,

		/** human readable name for this webhook e.g. for UI display. */
		name: FormControl<string | null | undefined>,

		/** if supplied, the webhook config will be validated by checking that this URL returns a 2xx response. */
		validationUrl: FormControl<string | null | undefined>,
	}
	export function CreateWebhookConfigWriteFormGroup() {
		return new FormGroup<WebhookConfigWriteFormProperties>({
			authToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			validationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkspaceCreate {
		anonymousDataCollection?: boolean | null;
		defaultGeography?: ConnectionCreateGeography | null;
		displaySetupWizard?: boolean | null;
		email?: string | null;

		/** Required */
		name: string;
		news?: boolean | null;
		notifications?: Array<Notification>;
		securityUpdates?: boolean | null;
		webhookConfigs?: Array<WebhookConfigWrite>;
	}
	export interface WorkspaceCreateFormProperties {
		anonymousDataCollection: FormControl<boolean | null | undefined>,
		defaultGeography: FormControl<ConnectionCreateGeography | null | undefined>,
		displaySetupWizard: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		news: FormControl<boolean | null | undefined>,
		securityUpdates: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkspaceCreateFormGroup() {
		return new FormGroup<WorkspaceCreateFormProperties>({
			anonymousDataCollection: new FormControl<boolean | null | undefined>(undefined),
			defaultGeography: new FormControl<ConnectionCreateGeography | null | undefined>(undefined),
			displaySetupWizard: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			news: new FormControl<boolean | null | undefined>(undefined),
			securityUpdates: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface WorkspaceGiveFeedback {

		/** Required */
		workspaceId: string;
	}
	export interface WorkspaceGiveFeedbackFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceGiveFeedbackFormGroup() {
		return new FormGroup<WorkspaceGiveFeedbackFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WorkspaceIdRequestBody {

		/** Required */
		workspaceId: string;
	}
	export interface WorkspaceIdRequestBodyFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceIdRequestBodyFormGroup() {
		return new FormGroup<WorkspaceIdRequestBodyFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WorkspaceRead {
		anonymousDataCollection?: boolean | null;

		/** Required */
		customerId: string;
		defaultGeography?: ConnectionCreateGeography | null;
		displaySetupWizard?: boolean | null;
		email?: string | null;
		feedbackDone?: boolean | null;
		firstCompletedSync?: boolean | null;

		/** Required */
		initialSetupComplete: boolean;

		/** Required */
		name: string;
		news?: boolean | null;
		notifications?: Array<Notification>;
		securityUpdates?: boolean | null;

		/** Required */
		slug: string;
		webhookConfigs?: Array<WebhookConfigRead>;

		/** Required */
		workspaceId: string;
	}
	export interface WorkspaceReadFormProperties {
		anonymousDataCollection: FormControl<boolean | null | undefined>,

		/** Required */
		customerId: FormControl<string | null | undefined>,
		defaultGeography: FormControl<ConnectionCreateGeography | null | undefined>,
		displaySetupWizard: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		feedbackDone: FormControl<boolean | null | undefined>,
		firstCompletedSync: FormControl<boolean | null | undefined>,

		/** Required */
		initialSetupComplete: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		news: FormControl<boolean | null | undefined>,
		securityUpdates: FormControl<boolean | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceReadFormGroup() {
		return new FormGroup<WorkspaceReadFormProperties>({
			anonymousDataCollection: new FormControl<boolean | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defaultGeography: new FormControl<ConnectionCreateGeography | null | undefined>(undefined),
			displaySetupWizard: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			feedbackDone: new FormControl<boolean | null | undefined>(undefined),
			firstCompletedSync: new FormControl<boolean | null | undefined>(undefined),
			initialSetupComplete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			news: new FormControl<boolean | null | undefined>(undefined),
			securityUpdates: new FormControl<boolean | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WorkspaceReadList {

		/** Required */
		workspaces: Array<WorkspaceRead>;
	}
	export interface WorkspaceReadListFormProperties {
	}
	export function CreateWorkspaceReadListFormGroup() {
		return new FormGroup<WorkspaceReadListFormProperties>({
		});

	}


	/** Used to apply a patch-style update to a workspace, which means that null properties remain unchanged */
	export interface WorkspaceUpdate {
		anonymousDataCollection?: boolean | null;
		defaultGeography?: ConnectionCreateGeography | null;
		displaySetupWizard?: boolean | null;
		email?: string | null;
		initialSetupComplete?: boolean | null;
		news?: boolean | null;
		notifications?: Array<Notification>;
		securityUpdates?: boolean | null;
		webhookConfigs?: Array<WebhookConfigWrite>;

		/** Required */
		workspaceId: string;
	}

	/** Used to apply a patch-style update to a workspace, which means that null properties remain unchanged */
	export interface WorkspaceUpdateFormProperties {
		anonymousDataCollection: FormControl<boolean | null | undefined>,
		defaultGeography: FormControl<ConnectionCreateGeography | null | undefined>,
		displaySetupWizard: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		initialSetupComplete: FormControl<boolean | null | undefined>,
		news: FormControl<boolean | null | undefined>,
		securityUpdates: FormControl<boolean | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceUpdateFormGroup() {
		return new FormGroup<WorkspaceUpdateFormProperties>({
			anonymousDataCollection: new FormControl<boolean | null | undefined>(undefined),
			defaultGeography: new FormControl<ConnectionCreateGeography | null | undefined>(undefined),
			displaySetupWizard: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			initialSetupComplete: new FormControl<boolean | null | undefined>(undefined),
			news: new FormControl<boolean | null | undefined>(undefined),
			securityUpdates: new FormControl<boolean | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WorkspaceUpdateName {

		/** Required */
		name: string;

		/** Required */
		workspaceId: string;
	}
	export interface WorkspaceUpdateNameFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceUpdateNameFormGroup() {
		return new FormGroup<WorkspaceUpdateNameFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * For worker to set sync stats of a running attempt.
		 * Post v1/attempt/save_stats
		 * @return {InternalOperationResult} Successful Operation
		 */
		SaveStats(requestBody: SaveStatsRequestBody): Observable<InternalOperationResult> {
			return this.http.post<InternalOperationResult>(this.baseUri + 'v1/attempt/save_stats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For worker to save the AttemptSyncConfig for an attempt.
		 * Post v1/attempt/save_sync_config
		 * @return {InternalOperationResult} Successful Operation
		 */
		SaveSyncConfig(requestBody: SaveAttemptSyncConfigRequestBody): Observable<InternalOperationResult> {
			return this.http.post<InternalOperationResult>(this.baseUri + 'v1/attempt/save_sync_config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For worker to register the workflow id in attempt.
		 * Post v1/attempt/set_workflow_in_attempt
		 * @return {InternalOperationResult} Successful Operation
		 */
		SetWorkflowInAttempt(requestBody: SetWorkflowInAttemptRequestBody): Observable<InternalOperationResult> {
			return this.http.post<InternalOperationResult>(this.baseUri + 'v1/attempt/set_workflow_in_attempt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a connection between a source and a destination
		 * Post v1/connections/create
		 * @return {ConnectionRead} Successful operation
		 */
		CreateConnection(requestBody: ConnectionCreate): Observable<ConnectionRead> {
			return this.http.post<ConnectionRead>(this.baseUri + 'v1/connections/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a connection
		 * Post v1/connections/delete
		 * @return {void} 
		 */
		DeleteConnection(requestBody: ConnectionIdRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/connections/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a connection
		 * Post v1/connections/get
		 * @return {ConnectionRead} Successful operation
		 */
		GetConnection(requestBody: ConnectionIdRequestBody): Observable<ConnectionRead> {
			return this.http.post<ConnectionRead>(this.baseUri + 'v1/connections/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all connections for a workspace.
		 * List connections for workspace. Does not return deleted connections.
		 * Post v1/connections/list
		 * @return {ConnectionReadList} Successful operation
		 */
		ListConnectionsForWorkspace(requestBody: WorkspaceIdRequestBody): Observable<ConnectionReadList> {
			return this.http.post<ConnectionReadList>(this.baseUri + 'v1/connections/list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all connections for a workspace, including deleted connections.
		 * List connections for workspace, including deleted connections.
		 * Post v1/connections/list_all
		 * @return {ConnectionReadList} Successful operation
		 */
		ListAllConnectionsForWorkspace(requestBody: WorkspaceIdRequestBody): Observable<ConnectionReadList> {
			return this.http.post<ConnectionReadList>(this.baseUri + 'v1/connections/list_all', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.
		 * Post v1/connections/reset
		 * @return {JobInfoRead} Successful operation
		 */
		ResetConnection(requestBody: ConnectionIdRequestBody): Observable<JobInfoRead> {
			return this.http.post<JobInfoRead>(this.baseUri + 'v1/connections/reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search connections
		 * Post v1/connections/search
		 * @return {ConnectionReadList} Successful operation
		 */
		SearchConnections(requestBody: ConnectionSearch): Observable<ConnectionReadList> {
			return this.http.post<ConnectionReadList>(this.baseUri + 'v1/connections/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Trigger a manual sync of the connection
		 * Post v1/connections/sync
		 * @return {JobInfoRead} Successful operation
		 */
		SyncConnection(requestBody: ConnectionIdRequestBody): Observable<JobInfoRead> {
			return this.http.post<JobInfoRead>(this.baseUri + 'v1/connections/sync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a connection
		 * Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
		 * Note that if a catalog is present in the request body, the connection's entire catalog will be replaced
		 * with the catalog from the request. This means that to modify a single stream, the entire new catalog
		 * containing the updated stream needs to be sent.
		 * Post v1/connections/update
		 * @return {ConnectionRead} Successful operation
		 */
		UpdateConnection(requestBody: ConnectionUpdate): Observable<ConnectionRead> {
			return this.http.post<ConnectionRead>(this.baseUri + 'v1/connections/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get specification for a destinationDefinition
		 * Post v1/destination_definition_specifications/get
		 * @return {DestinationDefinitionSpecificationRead} Successful operation
		 */
		GetDestinationDefinitionSpecification(requestBody: DestinationDefinitionIdWithWorkspaceId): Observable<DestinationDefinitionSpecificationRead> {
			return this.http.post<DestinationDefinitionSpecificationRead>(this.baseUri + 'v1/destination_definition_specifications/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a custom destinationDefinition for the given workspace
		 * Post v1/destination_definitions/create_custom
		 * @return {DestinationDefinitionRead} Successful operation
		 */
		CreateCustomDestinationDefinition(requestBody: CustomDestinationDefinitionCreate): Observable<DestinationDefinitionRead> {
			return this.http.post<DestinationDefinitionRead>(this.baseUri + 'v1/destination_definitions/create_custom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a destination definition
		 * Post v1/destination_definitions/delete
		 * @return {void} 
		 */
		DeleteDestinationDefinition(requestBody: DestinationDefinitionIdRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/destination_definitions/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get destinationDefinition
		 * Post v1/destination_definitions/get
		 * @return {DestinationDefinitionRead} Successful operation
		 */
		GetDestinationDefinition(requestBody: DestinationDefinitionIdRequestBody): Observable<DestinationDefinitionRead> {
			return this.http.post<DestinationDefinitionRead>(this.baseUri + 'v1/destination_definitions/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a destinationDefinition that is configured for the given workspace
		 * Post v1/destination_definitions/get_for_workspace
		 * @return {DestinationDefinitionRead} Successful operation
		 */
		GetDestinationDefinitionForWorkspace(requestBody: DestinationDefinitionIdWithWorkspaceId): Observable<DestinationDefinitionRead> {
			return this.http.post<DestinationDefinitionRead>(this.baseUri + 'v1/destination_definitions/get_for_workspace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * grant a private, non-custom destinationDefinition to a given workspace
		 * Post v1/destination_definitions/grant_definition
		 * @return {PrivateDestinationDefinitionRead} Successful operation
		 */
		GrantDestinationDefinitionToWorkspace(requestBody: DestinationDefinitionIdWithWorkspaceId): Observable<PrivateDestinationDefinitionRead> {
			return this.http.post<PrivateDestinationDefinitionRead>(this.baseUri + 'v1/destination_definitions/grant_definition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all the destinationDefinitions the current Airbyte deployment is configured to use
		 * Post v1/destination_definitions/list
		 * @return {DestinationDefinitionReadList} Successful operation
		 */
		ListDestinationDefinitions(): Observable<DestinationDefinitionReadList> {
			return this.http.post<DestinationDefinitionReadList>(this.baseUri + 'v1/destination_definitions/list', null, {});
		}

		/**
		 * List all the destinationDefinitions the given workspace is configured to use
		 * Post v1/destination_definitions/list_for_workspace
		 * @return {DestinationDefinitionReadList} Successful operation
		 */
		ListDestinationDefinitionsForWorkspace(requestBody: WorkspaceIdRequestBody): Observable<DestinationDefinitionReadList> {
			return this.http.post<DestinationDefinitionReadList>(this.baseUri + 'v1/destination_definitions/list_for_workspace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the latest destinationDefinitions Airbyte supports
		 * Guaranteed to retrieve the latest information on supported destinations.
		 * Post v1/destination_definitions/list_latest
		 * @return {DestinationDefinitionReadList} Successful operation
		 */
		ListLatestDestinationDefinitions(): Observable<DestinationDefinitionReadList> {
			return this.http.post<DestinationDefinitionReadList>(this.baseUri + 'v1/destination_definitions/list_latest', null, {});
		}

		/**
		 * List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
		 * Post v1/destination_definitions/list_private
		 * @return {PrivateDestinationDefinitionReadList} Successful operation
		 */
		ListPrivateDestinationDefinitions(requestBody: WorkspaceIdRequestBody): Observable<PrivateDestinationDefinitionReadList> {
			return this.http.post<PrivateDestinationDefinitionReadList>(this.baseUri + 'v1/destination_definitions/list_private', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * revoke a grant to a private, non-custom destinationDefinition from a given workspace
		 * Post v1/destination_definitions/revoke_definition
		 * @return {void} 
		 */
		RevokeDestinationDefinitionFromWorkspace(requestBody: DestinationDefinitionIdWithWorkspaceId): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/destination_definitions/revoke_definition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update destinationDefinition
		 * Post v1/destination_definitions/update
		 * @return {DestinationDefinitionRead} Successful operation
		 */
		UpdateDestinationDefinition(requestBody: DestinationDefinitionUpdate): Observable<DestinationDefinitionRead> {
			return this.http.post<DestinationDefinitionRead>(this.baseUri + 'v1/destination_definitions/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Given a destination def ID generate an access/refresh token etc.
		 * Post v1/destination_oauths/complete_oauth
		 * @return {CompleteOAuthResponse} Successful operation
		 */
		CompleteDestinationOAuth(requestBody: CompleteDestinationOAuthRequest): Observable<CompleteOAuthResponse> {
			return this.http.post<CompleteOAuthResponse>(this.baseUri + 'v1/destination_oauths/complete_oauth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.
		 * Post v1/destination_oauths/get_consent_url
		 * @return {OAuthConsentRead} Successful operation
		 */
		GetDestinationOAuthConsent(requestBody: DestinationOauthConsentRequest): Observable<OAuthConsentRead> {
			return this.http.post<OAuthConsentRead>(this.baseUri + 'v1/destination_oauths/get_consent_url', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.
		 * Post v1/destination_oauths/oauth_params/create
		 * @return {void} Successful
		 */
		SetInstancewideDestinationOauthParams(requestBody: SetInstancewideDestinationOauthParamsRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/destination_oauths/oauth_params/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check connection to the destination
		 * Post v1/destinations/check_connection
		 * @return {CheckConnectionRead} Successful operation
		 */
		CheckConnectionToDestination(requestBody: DestinationIdRequestBody): Observable<CheckConnectionRead> {
			return this.http.post<CheckConnectionRead>(this.baseUri + 'v1/destinations/check_connection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check connection for a proposed update to a destination
		 * Post v1/destinations/check_connection_for_update
		 * @return {CheckConnectionRead} Successful operation
		 */
		CheckConnectionToDestinationForUpdate(requestBody: DestinationUpdate): Observable<CheckConnectionRead> {
			return this.http.post<CheckConnectionRead>(this.baseUri + 'v1/destinations/check_connection_for_update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Clone destination
		 * Post v1/destinations/clone
		 * @return {DestinationRead} Successful operation
		 */
		CloneDestination(requestBody: DestinationCloneRequestBody): Observable<DestinationRead> {
			return this.http.post<DestinationRead>(this.baseUri + 'v1/destinations/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a destination
		 * Post v1/destinations/create
		 * @return {DestinationRead} Successful operation
		 */
		CreateDestination(requestBody: DestinationCreate): Observable<DestinationRead> {
			return this.http.post<DestinationRead>(this.baseUri + 'v1/destinations/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the destination
		 * Post v1/destinations/delete
		 * @return {void} 
		 */
		DeleteDestination(requestBody: DestinationIdRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/destinations/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get configured destination
		 * Post v1/destinations/get
		 * @return {DestinationRead} Successful operation
		 */
		GetDestination(requestBody: DestinationIdRequestBody): Observable<DestinationRead> {
			return this.http.post<DestinationRead>(this.baseUri + 'v1/destinations/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List configured destinations for a workspace
		 * Post v1/destinations/list
		 * @return {DestinationReadList} Successful operation
		 */
		ListDestinationsForWorkspace(requestBody: WorkspaceIdRequestBody): Observable<DestinationReadList> {
			return this.http.post<DestinationReadList>(this.baseUri + 'v1/destinations/list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search destinations
		 * Post v1/destinations/search
		 * @return {DestinationReadList} Successful operation
		 */
		SearchDestinations(requestBody: DestinationSearch): Observable<DestinationReadList> {
			return this.http.post<DestinationReadList>(this.baseUri + 'v1/destinations/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a destination
		 * Post v1/destinations/update
		 * @return {DestinationRead} Successful operation
		 */
		UpdateDestination(requestBody: DestinationUpdate): Observable<DestinationRead> {
			return this.http.post<DestinationRead>(this.baseUri + 'v1/destinations/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Health Check
		 * Get v1/health
		 * @return {HealthCheckRead} Successful operation
		 */
		GetHealthCheck(): Observable<HealthCheckRead> {
			return this.http.get<HealthCheckRead>(this.baseUri + 'v1/health', {});
		}

		/**
		 * Cancels a job
		 * Post v1/jobs/cancel
		 * @return {JobInfoRead} Successful operation
		 */
		CancelJob(requestBody: JobIdRequestBody): Observable<JobInfoRead> {
			return this.http.post<JobInfoRead>(this.baseUri + 'v1/jobs/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get information about a job
		 * Post v1/jobs/get
		 * @return {JobInfoRead} Successful operation
		 */
		GetJobInfo(requestBody: JobIdRequestBody): Observable<JobInfoRead> {
			return this.http.post<JobInfoRead>(this.baseUri + 'v1/jobs/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all information needed to debug this job
		 * Post v1/jobs/get_debug_info
		 * @return {JobDebugInfoRead} Successful operation
		 */
		GetJobDebugInfo(requestBody: JobIdRequestBody): Observable<JobDebugInfoRead> {
			return this.http.post<JobDebugInfoRead>(this.baseUri + 'v1/jobs/get_debug_info', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1/jobs/get_last_replication_job
		 * @return {JobOptionalRead} Successful operation
		 */
		GetLastReplicationJob(requestBody: ConnectionIdRequestBody): Observable<JobOptionalRead> {
			return this.http.post<JobOptionalRead>(this.baseUri + 'v1/jobs/get_last_replication_job', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get information about a job excluding attempt info and logs
		 * Post v1/jobs/get_light
		 * @return {JobInfoLightRead} Successful operation
		 */
		GetJobInfoLight(requestBody: JobIdRequestBody): Observable<JobInfoLightRead> {
			return this.http.post<JobInfoLightRead>(this.baseUri + 'v1/jobs/get_light', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get normalization status to determine if we can bypass normalization phase
		 * Post v1/jobs/get_normalization_status
		 * @return {AttemptNormalizationStatusReadList} Successful operation
		 */
		GetAttemptNormalizationStatusesForJob(requestBody: JobIdRequestBody): Observable<AttemptNormalizationStatusReadList> {
			return this.http.post<AttemptNormalizationStatusReadList>(this.baseUri + 'v1/jobs/get_normalization_status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.
		 * Post v1/jobs/list
		 * @return {JobReadList} Successful operation
		 */
		ListJobsFor(requestBody: JobListRequestBody): Observable<JobReadList> {
			return this.http.post<JobReadList>(this.baseUri + 'v1/jobs/list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get logs
		 * Post v1/logs/get
		 * @return {string} Returns the log file
		 */
		GetLogs(requestBody: LogsRequestBody): Observable<string> {
			return this.http.post(this.baseUri + 'v1/logs/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Try sending a notifications
		 * Post v1/notifications/try
		 * @return {NotificationRead} Successful operation
		 */
		TryNotificationConfig(requestBody: Notification): Observable<NotificationRead> {
			return this.http.post<NotificationRead>(this.baseUri + 'v1/notifications/try', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the openapi specification
		 * Get v1/openapi
		 * @return {string} Returns the openapi specification file
		 */
		GetOpenApiSpec(): Observable<string> {
			return this.http.get(this.baseUri + 'v1/openapi', { responseType: 'text' });
		}

		/**
		 * Check if an operation to be created is valid
		 * Post v1/operations/check
		 * @return {CheckOperationRead} Successful operation
		 */
		CheckOperation(requestBody: OperatorConfiguration): Observable<CheckOperationRead> {
			return this.http.post<CheckOperationRead>(this.baseUri + 'v1/operations/check', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create an operation to be applied as part of a connection pipeline
		 * Post v1/operations/create
		 * @return {OperationRead} Successful operation
		 */
		CreateOperation(requestBody: OperationCreate): Observable<OperationRead> {
			return this.http.post<OperationRead>(this.baseUri + 'v1/operations/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an operation
		 * Post v1/operations/delete
		 * @return {void} 
		 */
		DeleteOperation(requestBody: OperationIdRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/operations/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an operation
		 * Post v1/operations/get
		 * @return {OperationRead} Successful operation
		 */
		GetOperation(requestBody: OperationIdRequestBody): Observable<OperationRead> {
			return this.http.post<OperationRead>(this.baseUri + 'v1/operations/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all operations for a connection.
		 * List operations for connection.
		 * Post v1/operations/list
		 * @return {OperationReadList} Successful operation
		 */
		ListOperationsForConnection(requestBody: ConnectionIdRequestBody): Observable<OperationReadList> {
			return this.http.post<OperationReadList>(this.baseUri + 'v1/operations/list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an operation
		 * Post v1/operations/update
		 * @return {OperationRead} Successful operation
		 */
		UpdateOperation(requestBody: OperationUpdate): Observable<OperationRead> {
			return this.http.post<OperationRead>(this.baseUri + 'v1/operations/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run check connection for a given destination configuration
		 * Post v1/scheduler/destinations/check_connection
		 * @return {CheckConnectionRead} Successful operation
		 */
		ExecuteDestinationCheckConnection(requestBody: DestinationCoreConfig): Observable<CheckConnectionRead> {
			return this.http.post<CheckConnectionRead>(this.baseUri + 'v1/scheduler/destinations/check_connection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run check connection for a given source configuration
		 * Post v1/scheduler/sources/check_connection
		 * @return {CheckConnectionRead} Successful operation
		 */
		ExecuteSourceCheckConnection(requestBody: SourceCoreConfig): Observable<CheckConnectionRead> {
			return this.http.post<CheckConnectionRead>(this.baseUri + 'v1/scheduler/sources/check_connection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run discover schema for a given source a source configuration
		 * Post v1/scheduler/sources/discover_schema
		 * @return {SourceDiscoverSchemaRead} Successful operation
		 */
		ExecuteSourceDiscoverSchema(requestBody: SourceCoreConfig): Observable<SourceDiscoverSchemaRead> {
			return this.http.post<SourceDiscoverSchemaRead>(this.baseUri + 'v1/scheduler/sources/discover_schema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get specification for a SourceDefinition.
		 * Post v1/source_definition_specifications/get
		 * @return {SourceDefinitionSpecificationRead} Successful operation
		 */
		GetSourceDefinitionSpecification(requestBody: SourceDefinitionIdWithWorkspaceId): Observable<SourceDefinitionSpecificationRead> {
			return this.http.post<SourceDefinitionSpecificationRead>(this.baseUri + 'v1/source_definition_specifications/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a custom sourceDefinition for the given workspace
		 * Post v1/source_definitions/create_custom
		 * @return {SourceDefinitionRead} Successful operation
		 */
		CreateCustomSourceDefinition(requestBody: CustomSourceDefinitionCreate): Observable<SourceDefinitionRead> {
			return this.http.post<SourceDefinitionRead>(this.baseUri + 'v1/source_definitions/create_custom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a source definition
		 * Post v1/source_definitions/delete
		 * @return {void} 
		 */
		DeleteSourceDefinition(requestBody: SourceDefinitionIdRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/source_definitions/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get source
		 * Post v1/source_definitions/get
		 * @return {SourceDefinitionRead} Successful operation
		 */
		GetSourceDefinition(requestBody: SourceDefinitionIdRequestBody): Observable<SourceDefinitionRead> {
			return this.http.post<SourceDefinitionRead>(this.baseUri + 'v1/source_definitions/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a sourceDefinition that is configured for the given workspace
		 * Post v1/source_definitions/get_for_workspace
		 * @return {SourceDefinitionRead} Successful operation
		 */
		GetSourceDefinitionForWorkspace(requestBody: SourceDefinitionIdWithWorkspaceId): Observable<SourceDefinitionRead> {
			return this.http.post<SourceDefinitionRead>(this.baseUri + 'v1/source_definitions/get_for_workspace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * grant a private, non-custom sourceDefinition to a given workspace
		 * Post v1/source_definitions/grant_definition
		 * @return {PrivateSourceDefinitionRead} Successful operation
		 */
		GrantSourceDefinitionToWorkspace(requestBody: SourceDefinitionIdWithWorkspaceId): Observable<PrivateSourceDefinitionRead> {
			return this.http.post<PrivateSourceDefinitionRead>(this.baseUri + 'v1/source_definitions/grant_definition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all the sourceDefinitions the current Airbyte deployment is configured to use
		 * Post v1/source_definitions/list
		 * @return {SourceDefinitionReadList} Successful operation
		 */
		ListSourceDefinitions(): Observable<SourceDefinitionReadList> {
			return this.http.post<SourceDefinitionReadList>(this.baseUri + 'v1/source_definitions/list', null, {});
		}

		/**
		 * List all the sourceDefinitions the given workspace is configured to use
		 * Post v1/source_definitions/list_for_workspace
		 * @return {SourceDefinitionReadList} Successful operation
		 */
		ListSourceDefinitionsForWorkspace(requestBody: WorkspaceIdRequestBody): Observable<SourceDefinitionReadList> {
			return this.http.post<SourceDefinitionReadList>(this.baseUri + 'v1/source_definitions/list_for_workspace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the latest sourceDefinitions Airbyte supports
		 * Guaranteed to retrieve the latest information on supported sources.
		 * Post v1/source_definitions/list_latest
		 * @return {SourceDefinitionReadList} Successful operation
		 */
		ListLatestSourceDefinitions(): Observable<SourceDefinitionReadList> {
			return this.http.post<SourceDefinitionReadList>(this.baseUri + 'v1/source_definitions/list_latest', null, {});
		}

		/**
		 * List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
		 * Post v1/source_definitions/list_private
		 * @return {PrivateSourceDefinitionReadList} Successful operation
		 */
		ListPrivateSourceDefinitions(requestBody: WorkspaceIdRequestBody): Observable<PrivateSourceDefinitionReadList> {
			return this.http.post<PrivateSourceDefinitionReadList>(this.baseUri + 'v1/source_definitions/list_private', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * revoke a grant to a private, non-custom sourceDefinition from a given workspace
		 * Post v1/source_definitions/revoke_definition
		 * @return {void} 
		 */
		RevokeSourceDefinitionFromWorkspace(requestBody: SourceDefinitionIdWithWorkspaceId): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/source_definitions/revoke_definition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a sourceDefinition
		 * Post v1/source_definitions/update
		 * @return {SourceDefinitionRead} Successful operation
		 */
		UpdateSourceDefinition(requestBody: SourceDefinitionUpdate): Observable<SourceDefinitionRead> {
			return this.http.post<SourceDefinitionRead>(this.baseUri + 'v1/source_definitions/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Given a source def ID generate an access/refresh token etc.
		 * Post v1/source_oauths/complete_oauth
		 * @return {CompleteOAuthResponse} Successful operation
		 */
		CompleteSourceOAuth(requestBody: CompleteSourceOauthRequest): Observable<CompleteOAuthResponse> {
			return this.http.post<CompleteOAuthResponse>(this.baseUri + 'v1/source_oauths/complete_oauth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
		 * Post v1/source_oauths/get_consent_url
		 * @return {OAuthConsentRead} Successful operation
		 */
		GetSourceOAuthConsent(requestBody: SourceOauthConsentRequest): Observable<OAuthConsentRead> {
			return this.http.post<OAuthConsentRead>(this.baseUri + 'v1/source_oauths/get_consent_url', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.
		 * Post v1/source_oauths/oauth_params/create
		 * @return {void} Successful
		 */
		SetInstancewideSourceOauthParams(requestBody: SetInstancewideSourceOauthParamsRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/source_oauths/oauth_params/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check connection to the source
		 * Post v1/sources/check_connection
		 * @return {CheckConnectionRead} Successful operation
		 */
		CheckConnectionToSource(requestBody: SourceIdRequestBody): Observable<CheckConnectionRead> {
			return this.http.post<CheckConnectionRead>(this.baseUri + 'v1/sources/check_connection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check connection for a proposed update to a source
		 * Post v1/sources/check_connection_for_update
		 * @return {CheckConnectionRead} Successful operation
		 */
		CheckConnectionToSourceForUpdate(requestBody: SourceUpdate): Observable<CheckConnectionRead> {
			return this.http.post<CheckConnectionRead>(this.baseUri + 'v1/sources/check_connection_for_update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Clone source
		 * Post v1/sources/clone
		 * @return {SourceRead} Successful operation
		 */
		CloneSource(requestBody: SourceCloneRequestBody): Observable<SourceRead> {
			return this.http.post<SourceRead>(this.baseUri + 'v1/sources/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a source
		 * Post v1/sources/create
		 * @return {SourceRead} Successful operation
		 */
		CreateSource(requestBody: SourceCreate): Observable<SourceRead> {
			return this.http.post<SourceRead>(this.baseUri + 'v1/sources/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a source
		 * Post v1/sources/delete
		 * @return {void} 
		 */
		DeleteSource(requestBody: SourceIdRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/sources/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Discover the schema catalog of the source
		 * Post v1/sources/discover_schema
		 * @return {SourceDiscoverSchemaRead} Successful operation
		 */
		DiscoverSchemaForSource(requestBody: SourceDiscoverSchemaRequestBody): Observable<SourceDiscoverSchemaRead> {
			return this.http.post<SourceDiscoverSchemaRead>(this.baseUri + 'v1/sources/discover_schema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get source
		 * Post v1/sources/get
		 * @return {SourceRead} Successful operation
		 */
		GetSource(requestBody: SourceIdRequestBody): Observable<SourceRead> {
			return this.http.post<SourceRead>(this.baseUri + 'v1/sources/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List sources for workspace
		 * List sources for workspace. Does not return deleted sources.
		 * Post v1/sources/list
		 * @return {SourceReadList} Successful operation
		 */
		ListSourcesForWorkspace(requestBody: WorkspaceIdRequestBody): Observable<SourceReadList> {
			return this.http.post<SourceReadList>(this.baseUri + 'v1/sources/list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get most recent ActorCatalog for source
		 * Post v1/sources/most_recent_source_actor_catalog
		 * @return {ActorCatalogWithUpdatedAt} Successful operation
		 */
		GetMostRecentSourceActorCatalog(requestBody: SourceIdRequestBody): Observable<ActorCatalogWithUpdatedAt> {
			return this.http.post<ActorCatalogWithUpdatedAt>(this.baseUri + 'v1/sources/most_recent_source_actor_catalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search sources
		 * Post v1/sources/search
		 * @return {SourceReadList} Successful operation
		 */
		SearchSources(requestBody: SourceSearch): Observable<SourceReadList> {
			return this.http.post<SourceReadList>(this.baseUri + 'v1/sources/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a source
		 * Post v1/sources/update
		 * @return {SourceRead} Successful operation
		 */
		UpdateSource(requestBody: SourceUpdate): Observable<SourceRead> {
			return this.http.post<SourceRead>(this.baseUri + 'v1/sources/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Should only called from worker, to write result from discover activity back to DB.
		 * Post v1/sources/write_discover_catalog_result
		 * @return {DiscoverCatalogResult} Successful Operation
		 */
		WriteDiscoverCatalogResult(requestBody: SourceDiscoverSchemaWriteRequestBody): Observable<DiscoverCatalogResult> {
			return this.http.post<DiscoverCatalogResult>(this.baseUri + 'v1/sources/write_discover_catalog_result', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create or update the state for a connection.
		 * Post v1/state/create_or_update
		 * @return {ConnectionState} Successful operation
		 */
		CreateOrUpdateState(requestBody: ConnectionStateCreateOrUpdate): Observable<ConnectionState> {
			return this.http.post<ConnectionState>(this.baseUri + 'v1/state/create_or_update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch the current state for a connection.
		 * Post v1/state/get
		 * @return {ConnectionState} Successful operation
		 */
		GetState(requestBody: ConnectionIdRequestBody): Observable<ConnectionState> {
			return this.http.post<ConnectionState>(this.baseUri + 'v1/state/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a summary of source and destination definitions that could be updated.
		 * Post v1/web_backend/check_updates
		 * @return {WebBackendCheckUpdatesRead} Successful operation
		 */
		WebBackendCheckUpdates(): Observable<WebBackendCheckUpdatesRead> {
			return this.http.post<WebBackendCheckUpdatesRead>(this.baseUri + 'v1/web_backend/check_updates', null, {});
		}

		/**
		 * Create a connection
		 * Post v1/web_backend/connections/create
		 * @return {WebBackendConnectionRead} Successful operation
		 */
		WebBackendCreateConnection(requestBody: WebBackendConnectionCreate): Observable<WebBackendConnectionRead> {
			return this.http.post<WebBackendConnectionRead>(this.baseUri + 'v1/web_backend/connections/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a connection
		 * Post v1/web_backend/connections/get
		 * @return {WebBackendConnectionRead} Successful operation
		 */
		WebBackendGetConnection(requestBody: WebBackendConnectionRequestBody): Observable<WebBackendConnectionRead> {
			return this.http.post<WebBackendConnectionRead>(this.baseUri + 'v1/web_backend/connections/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all non-deleted connections for a workspace.
		 * Post v1/web_backend/connections/list
		 * @return {WebBackendConnectionReadList} Successful operation
		 */
		WebBackendListConnectionsForWorkspace(requestBody: WebBackendConnectionListRequestBody): Observable<WebBackendConnectionReadList> {
			return this.http.post<WebBackendConnectionReadList>(this.baseUri + 'v1/web_backend/connections/list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a connection
		 * Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
		 * Any operations that lack an ID will be created. Then, the newly created operationId will be applied to the
		 * connection along with the rest of the operationIds in the request body.
		 * Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
		 * Note that if a catalog is present in the request body, the connection's entire catalog will be replaced
		 * with the catalog from the request. This means that to modify a single stream, the entire new catalog
		 * containing the updated stream needs to be sent.
		 * Post v1/web_backend/connections/update
		 * @return {WebBackendConnectionRead} Successful operation
		 */
		WebBackendUpdateConnection(requestBody: WebBackendConnectionUpdate): Observable<WebBackendConnectionRead> {
			return this.http.post<WebBackendConnectionRead>(this.baseUri + 'v1/web_backend/connections/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns available geographies can be selected to run data syncs in a particular geography.
		 * The 'auto' entry indicates that the sync will be automatically assigned to a geography according
		 * to the platform default behavior. Entries other than 'auto' are two-letter country codes that
		 * follow the ISO 3166-1 alpha-2 standard.
		 * Returns all available geographies in which a data sync can run.
		 * Post v1/web_backend/geographies/list
		 * @return {WebBackendGeographiesListResult} Successful operation
		 */
		WebBackendListGeographies(): Observable<WebBackendGeographiesListResult> {
			return this.http.post<WebBackendGeographiesListResult>(this.baseUri + 'v1/web_backend/geographies/list', null, {});
		}

		/**
		 * Fetch the current state type for a connection.
		 * Post v1/web_backend/state/get_type
		 * @return {ConnectionStateStateType} Successful operation
		 */
		GetStateType(requestBody: ConnectionIdRequestBody): Observable<ConnectionStateStateType> {
			return this.http.post<ConnectionStateStateType>(this.baseUri + 'v1/web_backend/state/get_type', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the current state of a workspace
		 * Post v1/web_backend/workspace/state
		 * @return {WebBackendWorkspaceStateResult} Successful operation
		 */
		WebBackendGetWorkspaceState(requestBody: WebBackendWorkspaceState): Observable<WebBackendWorkspaceStateResult> {
			return this.http.post<WebBackendWorkspaceStateResult>(this.baseUri + 'v1/web_backend/workspace/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a workspace
		 * Post v1/workspaces/create
		 * @return {WorkspaceRead} Successful operation
		 */
		CreateWorkspace(requestBody: WorkspaceCreate): Observable<WorkspaceRead> {
			return this.http.post<WorkspaceRead>(this.baseUri + 'v1/workspaces/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a workspace
		 * Post v1/workspaces/delete
		 * @return {void} 
		 */
		DeleteWorkspace(requestBody: WorkspaceIdRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/workspaces/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find workspace by ID
		 * Post v1/workspaces/get
		 * @return {WorkspaceRead} Successful operation
		 */
		GetWorkspace(requestBody: WorkspaceIdRequestBody): Observable<WorkspaceRead> {
			return this.http.post<WorkspaceRead>(this.baseUri + 'v1/workspaces/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Find workspace by connection id
		 * Post v1/workspaces/get_by_connection_id
		 * @return {WorkspaceRead} Successful operation
		 */
		GetWorkspaceByConnectionId(requestBody: ConnectionIdRequestBody): Observable<WorkspaceRead> {
			return this.http.post<WorkspaceRead>(this.baseUri + 'v1/workspaces/get_by_connection_id', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Find workspace by slug
		 * Post v1/workspaces/get_by_slug
		 * @return {WorkspaceRead} Successful operation
		 */
		GetWorkspaceBySlug(requestBody: SlugRequestBody): Observable<WorkspaceRead> {
			return this.http.post<WorkspaceRead>(this.baseUri + 'v1/workspaces/get_by_slug', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all workspaces registered in the current Airbyte deployment
		 * Post v1/workspaces/list
		 * @return {WorkspaceReadList} Successful operation
		 */
		ListWorkspaces(): Observable<WorkspaceReadList> {
			return this.http.post<WorkspaceReadList>(this.baseUri + 'v1/workspaces/list', null, {});
		}

		/**
		 * Update workspace feedback state
		 * Post v1/workspaces/tag_feedback_status_as_done
		 * @return {void} 
		 */
		UpdateWorkspaceFeedback(requestBody: WorkspaceGiveFeedback): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/workspaces/tag_feedback_status_as_done', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update workspace state
		 * Post v1/workspaces/update
		 * @return {WorkspaceRead} Successful operation
		 */
		UpdateWorkspace(requestBody: WorkspaceUpdate): Observable<WorkspaceRead> {
			return this.http.post<WorkspaceRead>(this.baseUri + 'v1/workspaces/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update workspace name
		 * Post v1/workspaces/update_name
		 * @return {WorkspaceRead} Successful operation
		 */
		UpdateWorkspaceName(requestBody: WorkspaceUpdateName): Observable<WorkspaceRead> {
			return this.http.post<WorkspaceRead>(this.baseUri + 'v1/workspaces/update_name', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

