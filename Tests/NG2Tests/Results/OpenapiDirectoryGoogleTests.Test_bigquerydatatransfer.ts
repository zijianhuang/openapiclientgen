import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * A request to determine whether the user has valid credentials. This method
	 * is used to limit the number of OAuth popups in the user interface. The
	 * user id is inferred from the API call context.
	 * If the data source has the Google+ authorization type, this method
	 * returns false, as it cannot be determined whether the credentials are
	 * already valid merely based on the user id.
	 */
	export interface CheckValidCredsRequest {
	}

	/**
	 * A request to determine whether the user has valid credentials. This method
	 * is used to limit the number of OAuth popups in the user interface. The
	 * user id is inferred from the API call context.
	 * If the data source has the Google+ authorization type, this method
	 * returns false, as it cannot be determined whether the credentials are
	 * already valid merely based on the user id.
	 */
	export interface CheckValidCredsRequestFormProperties {
	}
	export function CreateCheckValidCredsRequestFormGroup() {
		return new FormGroup<CheckValidCredsRequestFormProperties>({
		});

	}


	/** A response indicating whether the credentials exist and are valid. */
	export interface CheckValidCredsResponse {

		/** If set to `true`, the credentials exist and are valid. */
		hasValidCreds?: boolean | null;
	}

	/** A response indicating whether the credentials exist and are valid. */
	export interface CheckValidCredsResponseFormProperties {

		/** If set to `true`, the credentials exist and are valid. */
		hasValidCreds: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckValidCredsResponseFormGroup() {
		return new FormGroup<CheckValidCredsResponseFormProperties>({
			hasValidCreds: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * Represents data source metadata. Metadata is sufficient to
	 * render UI and request proper OAuth tokens.
	 */
	export interface DataSource {

		/** Indicates the type of authorization. */
		authorizationType?: DataSourceAuthorizationType | null;

		/** Data source client id which should be used to receive refresh token. */
		clientId?: string | null;

		/**
		 * Specifies whether the data source supports automatic data refresh for the
		 * past few days, and how it's supported.
		 * For some data sources, data might not be complete until a few days later,
		 * so it's useful to refresh data automatically.
		 */
		dataRefreshType?: DataSourceDataRefreshType | null;

		/** Data source id. */
		dataSourceId?: string | null;

		/**
		 * Default data refresh window on days.
		 * Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
		 */
		defaultDataRefreshWindowDays?: number | null;

		/**
		 * Default data transfer schedule.
		 * Examples of valid schedules include:
		 * `1st,3rd monday of month 15:30`,
		 * `every wed,fri of jan,jun 13:15`, and
		 * `first sunday of quarter 00:00`.
		 */
		defaultSchedule?: string | null;

		/** User friendly data source description string. */
		description?: string | null;

		/** User friendly data source name. */
		displayName?: string | null;

		/** Url for the help document for this data source. */
		helpUrl?: string | null;

		/**
		 * Disables backfilling and manual run scheduling
		 * for the data source.
		 */
		manualRunsDisabled?: boolean | null;

		/** The minimum interval for scheduler to schedule runs. */
		minimumScheduleInterval?: string | null;

		/** Output only. Data source resource name. */
		name?: string | null;

		/** Data source parameters. */
		parameters?: Array<DataSourceParameter>;

		/**
		 * Api auth scopes for which refresh token needs to be obtained. These are
		 * scopes needed by a data source to prepare data and ingest them into
		 * BigQuery, e.g., https://www.googleapis.com/auth/bigquery
		 */
		scopes?: Array<string>;

		/**
		 * Specifies whether the data source supports a user defined schedule, or
		 * operates on the default schedule.
		 * When set to `true`, user can override default schedule.
		 */
		supportsCustomSchedule?: boolean | null;

		/** Deprecated. This field has no effect. */
		supportsMultipleTransfers?: boolean | null;

		/** Deprecated. This field has no effect. */
		transferType?: DataSourceTransferType | null;

		/**
		 * The number of seconds to wait for an update from the data source
		 * before the Data Transfer Service marks the transfer as FAILED.
		 */
		updateDeadlineSeconds?: number | null;
	}

	/**
	 * Represents data source metadata. Metadata is sufficient to
	 * render UI and request proper OAuth tokens.
	 */
	export interface DataSourceFormProperties {

		/** Indicates the type of authorization. */
		authorizationType: FormControl<DataSourceAuthorizationType | null | undefined>,

		/** Data source client id which should be used to receive refresh token. */
		clientId: FormControl<string | null | undefined>,

		/**
		 * Specifies whether the data source supports automatic data refresh for the
		 * past few days, and how it's supported.
		 * For some data sources, data might not be complete until a few days later,
		 * so it's useful to refresh data automatically.
		 */
		dataRefreshType: FormControl<DataSourceDataRefreshType | null | undefined>,

		/** Data source id. */
		dataSourceId: FormControl<string | null | undefined>,

		/**
		 * Default data refresh window on days.
		 * Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
		 */
		defaultDataRefreshWindowDays: FormControl<number | null | undefined>,

		/**
		 * Default data transfer schedule.
		 * Examples of valid schedules include:
		 * `1st,3rd monday of month 15:30`,
		 * `every wed,fri of jan,jun 13:15`, and
		 * `first sunday of quarter 00:00`.
		 */
		defaultSchedule: FormControl<string | null | undefined>,

		/** User friendly data source description string. */
		description: FormControl<string | null | undefined>,

		/** User friendly data source name. */
		displayName: FormControl<string | null | undefined>,

		/** Url for the help document for this data source. */
		helpUrl: FormControl<string | null | undefined>,

		/**
		 * Disables backfilling and manual run scheduling
		 * for the data source.
		 */
		manualRunsDisabled: FormControl<boolean | null | undefined>,

		/** The minimum interval for scheduler to schedule runs. */
		minimumScheduleInterval: FormControl<string | null | undefined>,

		/** Output only. Data source resource name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Specifies whether the data source supports a user defined schedule, or
		 * operates on the default schedule.
		 * When set to `true`, user can override default schedule.
		 */
		supportsCustomSchedule: FormControl<boolean | null | undefined>,

		/** Deprecated. This field has no effect. */
		supportsMultipleTransfers: FormControl<boolean | null | undefined>,

		/** Deprecated. This field has no effect. */
		transferType: FormControl<DataSourceTransferType | null | undefined>,

		/**
		 * The number of seconds to wait for an update from the data source
		 * before the Data Transfer Service marks the transfer as FAILED.
		 */
		updateDeadlineSeconds: FormControl<number | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			authorizationType: new FormControl<DataSourceAuthorizationType | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			dataRefreshType: new FormControl<DataSourceDataRefreshType | null | undefined>(undefined),
			dataSourceId: new FormControl<string | null | undefined>(undefined),
			defaultDataRefreshWindowDays: new FormControl<number | null | undefined>(undefined),
			defaultSchedule: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			helpUrl: new FormControl<string | null | undefined>(undefined),
			manualRunsDisabled: new FormControl<boolean | null | undefined>(undefined),
			minimumScheduleInterval: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			supportsCustomSchedule: new FormControl<boolean | null | undefined>(undefined),
			supportsMultipleTransfers: new FormControl<boolean | null | undefined>(undefined),
			transferType: new FormControl<DataSourceTransferType | null | undefined>(undefined),
			updateDeadlineSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DataSourceAuthorizationType { AUTHORIZATION_TYPE_UNSPECIFIED = 0, AUTHORIZATION_CODE = 1, GOOGLE_PLUS_AUTHORIZATION_CODE = 2, FIRST_PARTY_OAUTH = 3 }

	export enum DataSourceDataRefreshType { DATA_REFRESH_TYPE_UNSPECIFIED = 0, SLIDING_WINDOW = 1, CUSTOM_SLIDING_WINDOW = 2 }


	/**
	 * Represents a data source parameter with validation rules, so that
	 * parameters can be rendered in the UI. These parameters are given to us by
	 * supported data sources, and include all needed information for rendering
	 * and validation.
	 * Thus, whoever uses this api can decide to generate either generic ui,
	 * or custom data source specific forms.
	 */
	export interface DataSourceParameter {

		/** All possible values for the parameter. */
		allowedValues?: Array<string>;

		/**
		 * If true, it should not be used in new transfers, and it should not be
		 * visible to users.
		 */
		deprecated?: boolean | null;

		/** Parameter description. */
		description?: string | null;

		/** Parameter display name in the user interface. */
		displayName?: string | null;

		/** Deprecated. This field has no effect. */
		fields?: Array<DataSourceParameter>;

		/** Cannot be changed after initial creation. */
		immutable?: boolean | null;

		/** For integer and double values specifies maxminum allowed value. */
		maxValue?: number | null;

		/** For integer and double values specifies minimum allowed value. */
		minValue?: number | null;

		/** Parameter identifier. */
		paramId?: string | null;

		/** Deprecated. This field has no effect. */
		recurse?: boolean | null;

		/** Deprecated. This field has no effect. */
		repeated?: boolean | null;

		/** Is parameter required. */
		required?: boolean | null;

		/** Parameter type. */
		type?: DataSourceParameterType | null;

		/**
		 * Description of the requirements for this field, in case the user input does
		 * not fulfill the regex pattern or min/max values.
		 */
		validationDescription?: string | null;

		/** URL to a help document to further explain the naming requirements. */
		validationHelpUrl?: string | null;

		/** Regular expression which can be used for parameter validation. */
		validationRegex?: string | null;
	}

	/**
	 * Represents a data source parameter with validation rules, so that
	 * parameters can be rendered in the UI. These parameters are given to us by
	 * supported data sources, and include all needed information for rendering
	 * and validation.
	 * Thus, whoever uses this api can decide to generate either generic ui,
	 * or custom data source specific forms.
	 */
	export interface DataSourceParameterFormProperties {

		/**
		 * If true, it should not be used in new transfers, and it should not be
		 * visible to users.
		 */
		deprecated: FormControl<boolean | null | undefined>,

		/** Parameter description. */
		description: FormControl<string | null | undefined>,

		/** Parameter display name in the user interface. */
		displayName: FormControl<string | null | undefined>,

		/** Cannot be changed after initial creation. */
		immutable: FormControl<boolean | null | undefined>,

		/** For integer and double values specifies maxminum allowed value. */
		maxValue: FormControl<number | null | undefined>,

		/** For integer and double values specifies minimum allowed value. */
		minValue: FormControl<number | null | undefined>,

		/** Parameter identifier. */
		paramId: FormControl<string | null | undefined>,

		/** Deprecated. This field has no effect. */
		recurse: FormControl<boolean | null | undefined>,

		/** Deprecated. This field has no effect. */
		repeated: FormControl<boolean | null | undefined>,

		/** Is parameter required. */
		required: FormControl<boolean | null | undefined>,

		/** Parameter type. */
		type: FormControl<DataSourceParameterType | null | undefined>,

		/**
		 * Description of the requirements for this field, in case the user input does
		 * not fulfill the regex pattern or min/max values.
		 */
		validationDescription: FormControl<string | null | undefined>,

		/** URL to a help document to further explain the naming requirements. */
		validationHelpUrl: FormControl<string | null | undefined>,

		/** Regular expression which can be used for parameter validation. */
		validationRegex: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceParameterFormGroup() {
		return new FormGroup<DataSourceParameterFormProperties>({
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			immutable: new FormControl<boolean | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
			paramId: new FormControl<string | null | undefined>(undefined),
			recurse: new FormControl<boolean | null | undefined>(undefined),
			repeated: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<DataSourceParameterType | null | undefined>(undefined),
			validationDescription: new FormControl<string | null | undefined>(undefined),
			validationHelpUrl: new FormControl<string | null | undefined>(undefined),
			validationRegex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataSourceParameterType { TYPE_UNSPECIFIED = 0, STRING = 1, INTEGER = 2, DOUBLE = 3, BOOLEAN = 4, RECORD = 5, PLUS_PAGE = 6 }

	export enum DataSourceTransferType { TRANSFER_TYPE_UNSPECIFIED = 0, BATCH = 1, STREAMING = 2 }


	/**
	 * Represents preferences for sending email notifications for transfer run
	 * events.
	 */
	export interface EmailPreferences {

		/** If true, email notifications will be sent on transfer run failures. */
		enableFailureEmail?: boolean | null;
	}

	/**
	 * Represents preferences for sending email notifications for transfer run
	 * events.
	 */
	export interface EmailPreferencesFormProperties {

		/** If true, email notifications will be sent on transfer run failures. */
		enableFailureEmail: FormControl<boolean | null | undefined>,
	}
	export function CreateEmailPreferencesFormGroup() {
		return new FormGroup<EmailPreferencesFormProperties>({
			enableFailureEmail: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Returns list of supported data sources and their metadata. */
	export interface ListDataSourcesResponse {

		/** List of supported data sources and their transfer settings. */
		dataSources?: Array<DataSource>;

		/**
		 * Output only. The next-pagination token. For multiple-page list results,
		 * this token can be used as the
		 * `ListDataSourcesRequest.page_token`
		 * to request the next page of list results.
		 */
		nextPageToken?: string | null;
	}

	/** Returns list of supported data sources and their metadata. */
	export interface ListDataSourcesResponseFormProperties {

		/**
		 * Output only. The next-pagination token. For multiple-page list results,
		 * this token can be used as the
		 * `ListDataSourcesRequest.page_token`
		 * to request the next page of list results.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSourcesResponseFormGroup() {
		return new FormGroup<ListDataSourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string | null;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any };

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string | null;
	}

	/** A resource that represents Google Cloud Platform location. */
	export interface LocationFormProperties {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The returned list of pipelines in the project. */
	export interface ListTransferConfigsResponse {

		/**
		 * Output only. The next-pagination token. For multiple-page list results,
		 * this token can be used as the
		 * `ListTransferConfigsRequest.page_token`
		 * to request the next page of list results.
		 */
		nextPageToken?: string | null;

		/** Output only. The stored pipeline transfer configurations. */
		transferConfigs?: Array<TransferConfig>;
	}

	/** The returned list of pipelines in the project. */
	export interface ListTransferConfigsResponseFormProperties {

		/**
		 * Output only. The next-pagination token. For multiple-page list results,
		 * this token can be used as the
		 * `ListTransferConfigsRequest.page_token`
		 * to request the next page of list results.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransferConfigsResponseFormGroup() {
		return new FormGroup<ListTransferConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a data transfer configuration. A transfer configuration
	 * contains all metadata needed to perform a data transfer. For example,
	 * `destination_dataset_id` specifies where data should be stored.
	 * When a new transfer configuration is created, the specified
	 * `destination_dataset_id` is created when needed and shared with the
	 * appropriate data source service account.
	 */
	export interface TransferConfig {

		/**
		 * The number of days to look back to automatically refresh the data.
		 * For example, if `data_refresh_window_days = 10`, then every day
		 * BigQuery reingests data for [today-10, today-1], rather than ingesting data
		 * for just [today-1].
		 * Only valid if the data source supports the feature. Set the value to  0
		 * to use the default value.
		 */
		dataRefreshWindowDays?: number | null;

		/** Data source id. Cannot be changed once data transfer is created. */
		dataSourceId?: string | null;

		/** Output only. Region in which BigQuery dataset is located. */
		datasetRegion?: string | null;

		/** The BigQuery target dataset id. */
		destinationDatasetId?: string | null;

		/**
		 * Is this config disabled. When set to true, no runs are scheduled
		 * for a given transfer.
		 */
		disabled?: boolean | null;

		/** User specified display name for the data transfer. */
		displayName?: string | null;

		/**
		 * Represents preferences for sending email notifications for transfer run
		 * events.
		 */
		emailPreferences?: EmailPreferences;

		/**
		 * The resource name of the transfer config.
		 * Transfer config names have the form of
		 * `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`.
		 * The name is automatically generated based on the config_id specified in
		 * CreateTransferConfigRequest along with project_id and region. If config_id
		 * is not provided, usually a uuid, even though it is not guaranteed or
		 * required, will be generated for config_id.
		 */
		name?: string | null;

		/** Output only. Next time when data transfer will run. */
		nextRunTime?: string | null;

		/**
		 * Pub/Sub topic where notifications will be sent after transfer runs
		 * associated with this transfer config finish.
		 */
		notificationPubsubTopic?: string | null;

		/** Data transfer specific parameters. */
		params?: {[id: string]: any };

		/**
		 * Data transfer schedule.
		 * If the data source does not support a custom schedule, this should be
		 * empty. If it is empty, the default value for the data source will be
		 * used.
		 * The specified times are in UTC.
		 * Examples of valid format:
		 * `1st,3rd monday of month 15:30`,
		 * `every wed,fri of jan,jun 13:15`, and
		 * `first sunday of quarter 00:00`.
		 * See more explanation about the format here:
		 * https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
		 * NOTE: the granularity should be at least 8 hours, or less frequent.
		 */
		schedule?: string | null;

		/** Options customizing the data transfer schedule. */
		scheduleOptions?: ScheduleOptions;

		/** Output only. State of the most recently updated transfer run. */
		state?: TransferConfigState | null;

		/** Output only. Data transfer modification time. Ignored by server on input. */
		updateTime?: string | null;

		/** Deprecated. Unique ID of the user on whose behalf transfer is done. */
		userId?: string | null;
	}

	/**
	 * Represents a data transfer configuration. A transfer configuration
	 * contains all metadata needed to perform a data transfer. For example,
	 * `destination_dataset_id` specifies where data should be stored.
	 * When a new transfer configuration is created, the specified
	 * `destination_dataset_id` is created when needed and shared with the
	 * appropriate data source service account.
	 */
	export interface TransferConfigFormProperties {

		/**
		 * The number of days to look back to automatically refresh the data.
		 * For example, if `data_refresh_window_days = 10`, then every day
		 * BigQuery reingests data for [today-10, today-1], rather than ingesting data
		 * for just [today-1].
		 * Only valid if the data source supports the feature. Set the value to  0
		 * to use the default value.
		 */
		dataRefreshWindowDays: FormControl<number | null | undefined>,

		/** Data source id. Cannot be changed once data transfer is created. */
		dataSourceId: FormControl<string | null | undefined>,

		/** Output only. Region in which BigQuery dataset is located. */
		datasetRegion: FormControl<string | null | undefined>,

		/** The BigQuery target dataset id. */
		destinationDatasetId: FormControl<string | null | undefined>,

		/**
		 * Is this config disabled. When set to true, no runs are scheduled
		 * for a given transfer.
		 */
		disabled: FormControl<boolean | null | undefined>,

		/** User specified display name for the data transfer. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The resource name of the transfer config.
		 * Transfer config names have the form of
		 * `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`.
		 * The name is automatically generated based on the config_id specified in
		 * CreateTransferConfigRequest along with project_id and region. If config_id
		 * is not provided, usually a uuid, even though it is not guaranteed or
		 * required, will be generated for config_id.
		 */
		name: FormControl<string | null | undefined>,

		/** Output only. Next time when data transfer will run. */
		nextRunTime: FormControl<string | null | undefined>,

		/**
		 * Pub/Sub topic where notifications will be sent after transfer runs
		 * associated with this transfer config finish.
		 */
		notificationPubsubTopic: FormControl<string | null | undefined>,

		/** Data transfer specific parameters. */
		params: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Data transfer schedule.
		 * If the data source does not support a custom schedule, this should be
		 * empty. If it is empty, the default value for the data source will be
		 * used.
		 * The specified times are in UTC.
		 * Examples of valid format:
		 * `1st,3rd monday of month 15:30`,
		 * `every wed,fri of jan,jun 13:15`, and
		 * `first sunday of quarter 00:00`.
		 * See more explanation about the format here:
		 * https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
		 * NOTE: the granularity should be at least 8 hours, or less frequent.
		 */
		schedule: FormControl<string | null | undefined>,

		/** Output only. State of the most recently updated transfer run. */
		state: FormControl<TransferConfigState | null | undefined>,

		/** Output only. Data transfer modification time. Ignored by server on input. */
		updateTime: FormControl<string | null | undefined>,

		/** Deprecated. Unique ID of the user on whose behalf transfer is done. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateTransferConfigFormGroup() {
		return new FormGroup<TransferConfigFormProperties>({
			dataRefreshWindowDays: new FormControl<number | null | undefined>(undefined),
			dataSourceId: new FormControl<string | null | undefined>(undefined),
			datasetRegion: new FormControl<string | null | undefined>(undefined),
			destinationDatasetId: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nextRunTime: new FormControl<string | null | undefined>(undefined),
			notificationPubsubTopic: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			schedule: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<TransferConfigState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options customizing the data transfer schedule. */
	export interface ScheduleOptions {

		/**
		 * If true, automatic scheduling of data transfer runs for this configuration
		 * will be disabled. The runs can be started on ad-hoc basis using
		 * StartManualTransferRuns API. When automatic scheduling is disabled, the
		 * TransferConfig.schedule field will be ignored.
		 */
		disableAutoScheduling?: boolean | null;

		/**
		 * Defines time to stop scheduling transfer runs. A transfer run cannot be
		 * scheduled at or after the end time. The end time can be changed at any
		 * moment. The time when a data transfer can be trigerred manually is not
		 * limited by this option.
		 */
		endTime?: string | null;

		/**
		 * Specifies time to start scheduling transfer runs. The first run will be
		 * scheduled at or after the start time according to a recurrence pattern
		 * defined in the schedule string. The start time can be changed at any
		 * moment. The time when a data transfer can be trigerred manually is not
		 * limited by this option.
		 */
		startTime?: string | null;
	}

	/** Options customizing the data transfer schedule. */
	export interface ScheduleOptionsFormProperties {

		/**
		 * If true, automatic scheduling of data transfer runs for this configuration
		 * will be disabled. The runs can be started on ad-hoc basis using
		 * StartManualTransferRuns API. When automatic scheduling is disabled, the
		 * TransferConfig.schedule field will be ignored.
		 */
		disableAutoScheduling: FormControl<boolean | null | undefined>,

		/**
		 * Defines time to stop scheduling transfer runs. A transfer run cannot be
		 * scheduled at or after the end time. The end time can be changed at any
		 * moment. The time when a data transfer can be trigerred manually is not
		 * limited by this option.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Specifies time to start scheduling transfer runs. The first run will be
		 * scheduled at or after the start time according to a recurrence pattern
		 * defined in the schedule string. The start time can be changed at any
		 * moment. The time when a data transfer can be trigerred manually is not
		 * limited by this option.
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateScheduleOptionsFormGroup() {
		return new FormGroup<ScheduleOptionsFormProperties>({
			disableAutoScheduling: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransferConfigState { TRANSFER_STATE_UNSPECIFIED = 0, PENDING = 1, RUNNING = 2, SUCCEEDED = 3, FAILED = 4, CANCELLED = 5 }


	/** The returned list transfer run messages. */
	export interface ListTransferLogsResponse {

		/**
		 * Output only. The next-pagination token. For multiple-page list results,
		 * this token can be used as the
		 * `GetTransferRunLogRequest.page_token`
		 * to request the next page of list results.
		 */
		nextPageToken?: string | null;

		/** Output only. The stored pipeline transfer messages. */
		transferMessages?: Array<TransferMessage>;
	}

	/** The returned list transfer run messages. */
	export interface ListTransferLogsResponseFormProperties {

		/**
		 * Output only. The next-pagination token. For multiple-page list results,
		 * this token can be used as the
		 * `GetTransferRunLogRequest.page_token`
		 * to request the next page of list results.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransferLogsResponseFormGroup() {
		return new FormGroup<ListTransferLogsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a user facing message for a particular data transfer run. */
	export interface TransferMessage {

		/** Message text. */
		messageText?: string | null;

		/** Time when message was logged. */
		messageTime?: string | null;

		/** Message severity. */
		severity?: TransferMessageSeverity | null;
	}

	/** Represents a user facing message for a particular data transfer run. */
	export interface TransferMessageFormProperties {

		/** Message text. */
		messageText: FormControl<string | null | undefined>,

		/** Time when message was logged. */
		messageTime: FormControl<string | null | undefined>,

		/** Message severity. */
		severity: FormControl<TransferMessageSeverity | null | undefined>,
	}
	export function CreateTransferMessageFormGroup() {
		return new FormGroup<TransferMessageFormProperties>({
			messageText: new FormControl<string | null | undefined>(undefined),
			messageTime: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<TransferMessageSeverity | null | undefined>(undefined),
		});

	}

	export enum TransferMessageSeverity { MESSAGE_SEVERITY_UNSPECIFIED = 0, INFO = 1, WARNING = 2, ERROR = 3 }


	/** The returned list of pipelines in the project. */
	export interface ListTransferRunsResponse {

		/**
		 * Output only. The next-pagination token. For multiple-page list results,
		 * this token can be used as the
		 * `ListTransferRunsRequest.page_token`
		 * to request the next page of list results.
		 */
		nextPageToken?: string | null;

		/** Output only. The stored pipeline transfer runs. */
		transferRuns?: Array<TransferRun>;
	}

	/** The returned list of pipelines in the project. */
	export interface ListTransferRunsResponseFormProperties {

		/**
		 * Output only. The next-pagination token. For multiple-page list results,
		 * this token can be used as the
		 * `ListTransferRunsRequest.page_token`
		 * to request the next page of list results.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransferRunsResponseFormGroup() {
		return new FormGroup<ListTransferRunsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a data transfer run. */
	export interface TransferRun {

		/** Output only. Data source id. */
		dataSourceId?: string | null;

		/** Output only. The BigQuery target dataset id. */
		destinationDatasetId?: string | null;

		/**
		 * Represents preferences for sending email notifications for transfer run
		 * events.
		 */
		emailPreferences?: EmailPreferences;

		/**
		 * Output only. Time when transfer run ended.
		 * Parameter ignored by server for input requests.
		 */
		endTime?: string | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		errorStatus?: Status;

		/**
		 * The resource name of the transfer run.
		 * Transfer run names have the form
		 * `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`.
		 * The name is ignored when creating a transfer run.
		 */
		name?: string | null;

		/**
		 * Output only. Pub/Sub topic where a notification will be sent after this
		 * transfer run finishes
		 */
		notificationPubsubTopic?: string | null;

		/** Output only. Data transfer specific parameters. */
		params?: {[id: string]: any };

		/**
		 * For batch transfer runs, specifies the date and time of the data should be
		 * ingested.
		 */
		runTime?: string | null;

		/**
		 * Output only. Describes the schedule of this transfer run if it was
		 * created as part of a regular schedule. For batch transfer runs that are
		 * scheduled manually, this is empty.
		 * NOTE: the system might choose to delay the schedule depending on the
		 * current load, so `schedule_time` doesn't always match this.
		 */
		schedule?: string | null;

		/** Minimum time after which a transfer run can be started. */
		scheduleTime?: string | null;

		/**
		 * Output only. Time when transfer run was started.
		 * Parameter ignored by server for input requests.
		 */
		startTime?: string | null;

		/** Data transfer run state. Ignored for input requests. */
		state?: TransferConfigState | null;

		/** Output only. Last time the data transfer run state was updated. */
		updateTime?: string | null;

		/** Deprecated. Unique ID of the user on whose behalf transfer is done. */
		userId?: string | null;
	}

	/** Represents a data transfer run. */
	export interface TransferRunFormProperties {

		/** Output only. Data source id. */
		dataSourceId: FormControl<string | null | undefined>,

		/** Output only. The BigQuery target dataset id. */
		destinationDatasetId: FormControl<string | null | undefined>,

		/**
		 * Output only. Time when transfer run ended.
		 * Parameter ignored by server for input requests.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * The resource name of the transfer run.
		 * Transfer run names have the form
		 * `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`.
		 * The name is ignored when creating a transfer run.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Output only. Pub/Sub topic where a notification will be sent after this
		 * transfer run finishes
		 */
		notificationPubsubTopic: FormControl<string | null | undefined>,

		/** Output only. Data transfer specific parameters. */
		params: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * For batch transfer runs, specifies the date and time of the data should be
		 * ingested.
		 */
		runTime: FormControl<string | null | undefined>,

		/**
		 * Output only. Describes the schedule of this transfer run if it was
		 * created as part of a regular schedule. For batch transfer runs that are
		 * scheduled manually, this is empty.
		 * NOTE: the system might choose to delay the schedule depending on the
		 * current load, so `schedule_time` doesn't always match this.
		 */
		schedule: FormControl<string | null | undefined>,

		/** Minimum time after which a transfer run can be started. */
		scheduleTime: FormControl<string | null | undefined>,

		/**
		 * Output only. Time when transfer run was started.
		 * Parameter ignored by server for input requests.
		 */
		startTime: FormControl<string | null | undefined>,

		/** Data transfer run state. Ignored for input requests. */
		state: FormControl<TransferConfigState | null | undefined>,

		/** Output only. Last time the data transfer run state was updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Deprecated. Unique ID of the user on whose behalf transfer is done. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateTransferRunFormGroup() {
		return new FormGroup<TransferRunFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined),
			destinationDatasetId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationPubsubTopic: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			runTime: new FormControl<string | null | undefined>(undefined),
			schedule: new FormControl<string | null | undefined>(undefined),
			scheduleTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<TransferConfigState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to schedule transfer runs for a time range. */
	export interface ScheduleTransferRunsRequest {

		/**
		 * Required. End time of the range of transfer runs. For example,
		 * `"2017-05-30T00:00:00+00:00"`.
		 */
		endTime?: string | null;

		/**
		 * Required. Start time of the range of transfer runs. For example,
		 * `"2017-05-25T00:00:00+00:00"`.
		 */
		startTime?: string | null;
	}

	/** A request to schedule transfer runs for a time range. */
	export interface ScheduleTransferRunsRequestFormProperties {

		/**
		 * Required. End time of the range of transfer runs. For example,
		 * `"2017-05-30T00:00:00+00:00"`.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Required. Start time of the range of transfer runs. For example,
		 * `"2017-05-25T00:00:00+00:00"`.
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateScheduleTransferRunsRequestFormGroup() {
		return new FormGroup<ScheduleTransferRunsRequestFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response to schedule transfer runs for a time range. */
	export interface ScheduleTransferRunsResponse {

		/** The transfer runs that were scheduled. */
		runs?: Array<TransferRun>;
	}

	/** A response to schedule transfer runs for a time range. */
	export interface ScheduleTransferRunsResponseFormProperties {
	}
	export function CreateScheduleTransferRunsResponseFormGroup() {
		return new FormGroup<ScheduleTransferRunsResponseFormProperties>({
		});

	}


	/** A request to start manual transfer runs. */
	export interface StartManualTransferRunsRequest {

		/**
		 * Specific run_time for a transfer run to be started. The
		 * requested_run_time must not be in the future.
		 */
		requestedRunTime?: string | null;

		/**
		 * A specification for a time range, this will request transfer runs with
		 * run_time between start_time (inclusive) and end_time (exclusive).
		 */
		requestedTimeRange?: TimeRange;
	}

	/** A request to start manual transfer runs. */
	export interface StartManualTransferRunsRequestFormProperties {

		/**
		 * Specific run_time for a transfer run to be started. The
		 * requested_run_time must not be in the future.
		 */
		requestedRunTime: FormControl<string | null | undefined>,
	}
	export function CreateStartManualTransferRunsRequestFormGroup() {
		return new FormGroup<StartManualTransferRunsRequestFormProperties>({
			requestedRunTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A specification for a time range, this will request transfer runs with
	 * run_time between start_time (inclusive) and end_time (exclusive).
	 */
	export interface TimeRange {

		/**
		 * End time of the range of transfer runs. For example,
		 * `"2017-05-30T00:00:00+00:00"`. The end_time must not be in the future.
		 * Creates transfer runs where run_time is in the range betwen start_time
		 * (inclusive) and end_time (exlusive).
		 */
		endTime?: string | null;

		/**
		 * Start time of the range of transfer runs. For example,
		 * `"2017-05-25T00:00:00+00:00"`. The start_time must be strictly less than
		 * the end_time. Creates transfer runs where run_time is in the range betwen
		 * start_time (inclusive) and end_time (exlusive).
		 */
		startTime?: string | null;
	}

	/**
	 * A specification for a time range, this will request transfer runs with
	 * run_time between start_time (inclusive) and end_time (exclusive).
	 */
	export interface TimeRangeFormProperties {

		/**
		 * End time of the range of transfer runs. For example,
		 * `"2017-05-30T00:00:00+00:00"`. The end_time must not be in the future.
		 * Creates transfer runs where run_time is in the range betwen start_time
		 * (inclusive) and end_time (exlusive).
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Start time of the range of transfer runs. For example,
		 * `"2017-05-25T00:00:00+00:00"`. The start_time must be strictly less than
		 * the end_time. Creates transfer runs where run_time is in the range betwen
		 * start_time (inclusive) and end_time (exlusive).
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response to start manual transfer runs. */
	export interface StartManualTransferRunsResponse {

		/** The transfer runs that were created. */
		runs?: Array<TransferRun>;
	}

	/** A response to start manual transfer runs. */
	export interface StartManualTransferRunsResponseFormProperties {
	}
	export function CreateStartManualTransferRunsResponseFormGroup() {
		return new FormGroup<StartManualTransferRunsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified transfer run.
		 * Delete v1/{name}
		 * @param {string} name Required. The field will contain name of the resource requested, for example:
		 * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
		 * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_transferConfigs_runs_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the particular transfer run.
		 * Get v1/{name}
		 * @param {string} name Required. The field will contain name of the resource requested, for example:
		 * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
		 * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_transferConfigs_runs_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a data transfer configuration.
		 * All fields must be set, even if they are not updated.
		 * Patch v1/{name}
		 * @param {string} name The resource name of the transfer config.
		 * Transfer config names have the form of
		 * `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`.
		 * The name is automatically generated based on the config_id specified in
		 * CreateTransferConfigRequest along with project_id and region. If config_id
		 * is not provided, usually a uuid, even though it is not guaranteed or
		 * required, will be generated for config_id.
		 * @param {string} authorizationCode Optional OAuth2 authorization code to use with this transfer configuration.
		 * If it is provided, the transfer configuration will be associated with the
		 * authorizing user.
		 * In order to obtain authorization_code, please make a
		 * request to
		 * https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
		 * * client_id should be OAuth client_id of BigQuery DTS API for the given
		 *   data source returned by ListDataSources method.
		 * * data_source_scopes are the scopes returned by ListDataSources method.
		 * * redirect_uri is an optional parameter. If not specified, then
		 *   authorization code is posted to the opener of authorization flow window.
		 *   Otherwise it will be sent to the redirect uri. A special value of
		 *   urn:ietf:wg:oauth:2.0:oob means that authorization code should be
		 *   returned in the title bar of the browser, with the page text prompting
		 *   the user to copy the code and paste it in the application.
		 * @param {string} serviceAccountName Optional service account name. If this field is set and
		 * "service_account_name" is set in update_mask, transfer config will be
		 * updated to use this service account credentials. It requires that
		 * requesting user calling this API has permissions to act as this service
		 * account.
		 * @param {string} updateMask Required. Required list of fields to be updated in this request.
		 * @param {string} versionInfo Optional version info. If users want to find a very recent access token,
		 * that is, immediately after approving access, users have to set the
		 * version_info claim in the token request. To obtain the version_info, users
		 * must use the "none+gsession" response type. which be return a
		 * version_info back in the authorization response which be be put in a JWT
		 * claim in the token request.
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_transferConfigs_patch(name: string, authorizationCode: string | null | undefined, serviceAccountName: string | null | undefined, updateMask: string | null | undefined, versionInfo: string | null | undefined, requestBody: TransferConfig): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&authorizationCode=' + (authorizationCode == null ? '' : encodeURIComponent(authorizationCode)) + '&serviceAccountName=' + (serviceAccountName == null ? '' : encodeURIComponent(serviceAccountName)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&versionInfo=' + (versionInfo == null ? '' : encodeURIComponent(versionInfo)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns true if valid credentials exist for the given data source and
		 * requesting user.
		 * Some data sources doesn't support service account, so we need to talk to
		 * them on behalf of the end user. This API just checks whether we have OAuth
		 * token for the particular user, which is a pre-requisite before user can
		 * create a transfer config.
		 * Post v1/{name}:checkValidCreds
		 * @param {string} name Required. The data source in the form:
		 * `projects/{project_id}/dataSources/{data_source_id}` or
		 * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_dataSources_checkValidCreds(name: string, requestBody: CheckValidCredsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':checkValidCreds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists supported data sources and returns their settings,
		 * which can be used for UI rendering.
		 * Get v1/{parent}/dataSources
		 * @param {string} parent Required. The BigQuery project id for which data sources should be returned.
		 * Must be in the form: `projects/{project_id}` or
		 * `projects/{project_id}/locations/{location_id}
		 * @param {number} pageSize Page size. The default page size is the maximum value of 1000 results.
		 * @param {string} pageToken Pagination token, which can be used to request a specific page
		 * of `ListDataSourcesRequest` list results. For multiple-page
		 * results, `ListDataSourcesResponse` outputs
		 * a `next_page` token, which can be used as the
		 * `page_token` value to request the next page of list results.
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_dataSources_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataSources&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about running and completed jobs.
		 * Get v1/{parent}/runs
		 * @param {string} parent Required. Name of transfer configuration for which transfer runs should be retrieved.
		 * Format of transfer configuration resource name is:
		 * `projects/{project_id}/transferConfigs/{config_id}` or
		 * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
		 * @param {number} pageSize Page size. The default page size is the maximum value of 1000 results.
		 * @param {string} pageToken Pagination token, which can be used to request a specific page
		 * of `ListTransferRunsRequest` list results. For multiple-page
		 * results, `ListTransferRunsResponse` outputs
		 * a `next_page` token, which can be used as the
		 * `page_token` value to request the next page of list results.
		 * @param {Bigquerydatatransfer_projects_locations_transferConfigs_runs_listRunAttempt} runAttempt Indicates how run attempts are to be pulled.
		 * @param {Array<TransferConfigState>} states When specified, only transfer runs with requested states are returned.
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_transferConfigs_runs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, runAttempt: Bigquerydatatransfer_projects_locations_transferConfigs_runs_listRunAttempt | null | undefined, states: Array<TransferConfigState> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&runAttempt=' + runAttempt + '&' + states?.map(z => `states=${z}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about all data transfers in the project.
		 * Get v1/{parent}/transferConfigs
		 * @param {string} parent Required. The BigQuery project id for which data sources
		 * should be returned: `projects/{project_id}` or
		 * `projects/{project_id}/locations/{location_id}`
		 * @param {Array<string>} dataSourceIds When specified, only configurations of requested data sources are returned.
		 * @param {number} pageSize Page size. The default page size is the maximum value of 1000 results.
		 * @param {string} pageToken Pagination token, which can be used to request a specific page
		 * of `ListTransfersRequest` list results. For multiple-page
		 * results, `ListTransfersResponse` outputs
		 * a `next_page` token, which can be used as the
		 * `page_token` value to request the next page of list results.
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_transferConfigs_list(parent: string, dataSourceIds: Array<string> | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/transferConfigs&' + dataSourceIds?.map(z => `dataSourceIds=${encodeURIComponent(z)}`).join('&') + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new data transfer configuration.
		 * Post v1/{parent}/transferConfigs
		 * @param {string} parent Required. The BigQuery project id where the transfer configuration should be created.
		 * Must be in the format projects/{project_id}/locations/{location_id} or
		 * projects/{project_id}. If specified location and location of the
		 * destination bigquery dataset do not match - the request will fail.
		 * @param {string} authorizationCode Optional OAuth2 authorization code to use with this transfer configuration.
		 * This is required if new credentials are needed, as indicated by
		 * `CheckValidCreds`.
		 * In order to obtain authorization_code, please make a
		 * request to
		 * https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
		 * * client_id should be OAuth client_id of BigQuery DTS API for the given
		 *   data source returned by ListDataSources method.
		 * * data_source_scopes are the scopes returned by ListDataSources method.
		 * * redirect_uri is an optional parameter. If not specified, then
		 *   authorization code is posted to the opener of authorization flow window.
		 *   Otherwise it will be sent to the redirect uri. A special value of
		 *   urn:ietf:wg:oauth:2.0:oob means that authorization code should be
		 *   returned in the title bar of the browser, with the page text prompting
		 *   the user to copy the code and paste it in the application.
		 * @param {string} serviceAccountName Optional service account name. If this field is set, transfer config will
		 * be created with this service account credentials. It requires that
		 * requesting user calling this API has permissions to act as this service
		 * account.
		 * @param {string} versionInfo Optional version info. If users want to find a very recent access token,
		 * that is, immediately after approving access, users have to set the
		 * version_info claim in the token request. To obtain the version_info, users
		 * must use the "none+gsession" response type. which be return a
		 * version_info back in the authorization response which be be put in a JWT
		 * claim in the token request.
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_transferConfigs_create(parent: string, authorizationCode: string | null | undefined, serviceAccountName: string | null | undefined, versionInfo: string | null | undefined, requestBody: TransferConfig): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/transferConfigs&authorizationCode=' + (authorizationCode == null ? '' : encodeURIComponent(authorizationCode)) + '&serviceAccountName=' + (serviceAccountName == null ? '' : encodeURIComponent(serviceAccountName)) + '&versionInfo=' + (versionInfo == null ? '' : encodeURIComponent(versionInfo)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns user facing log messages for the data transfer run.
		 * Get v1/{parent}/transferLogs
		 * @param {string} parent Required. Transfer run name in the form:
		 * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
		 * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
		 * @param {Array<TransferMessageSeverity>} messageTypes Message types to return. If not populated - INFO, WARNING and ERROR
		 * messages are returned.
		 * @param {number} pageSize Page size. The default page size is the maximum value of 1000 results.
		 * @param {string} pageToken Pagination token, which can be used to request a specific page
		 * of `ListTransferLogsRequest` list results. For multiple-page
		 * results, `ListTransferLogsResponse` outputs
		 * a `next_page` token, which can be used as the
		 * `page_token` value to request the next page of list results.
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_transferConfigs_runs_transferLogs_list(parent: string, messageTypes: Array<TransferMessageSeverity> | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/transferLogs&' + messageTypes?.map(z => `messageTypes=${z}`).join('&') + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates transfer runs for a time range [start_time, end_time].
		 * For each date - or whatever granularity the data source supports - in the
		 * range, one transfer run is created.
		 * Note that runs are created per UTC time in the time range.
		 * DEPRECATED: use StartManualTransferRuns instead.
		 * Post v1/{parent}:scheduleRuns
		 * @param {string} parent Required. Transfer configuration name in the form:
		 * `projects/{project_id}/transferConfigs/{config_id}` or
		 * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_transferConfigs_scheduleRuns(parent: string, requestBody: ScheduleTransferRunsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':scheduleRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Start manual transfer runs to be executed now with schedule_time equal to
		 * current time. The transfer runs can be created for a time range where the
		 * run_time is between start_time (inclusive) and end_time (exclusive), or for
		 * a specific run_time.
		 * Post v1/{parent}:startManualRuns
		 * @param {string} parent Transfer configuration name in the form:
		 * `projects/{project_id}/transferConfigs/{config_id}` or
		 * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
		 * @return {void} Successful response
		 */
		Bigquerydatatransfer_projects_locations_transferConfigs_startManualRuns(parent: string, requestBody: StartManualTransferRunsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':startManualRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Bigquerydatatransfer_projects_locations_transferConfigs_runs_listRunAttempt { RUN_ATTEMPT_UNSPECIFIED = 0, LATEST = 1 }

}

