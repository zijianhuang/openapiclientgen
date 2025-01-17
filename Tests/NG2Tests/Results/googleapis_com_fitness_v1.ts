import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AggregateBucket {

		/** Available for Bucket.Type.ACTIVITY_TYPE, Bucket.Type.ACTIVITY_SEGMENT */
		activity?: number | null;

		/** There will be one dataset per AggregateBy in the request. */
		dataset?: Array<Dataset>;

		/** The end time for the aggregated data, in milliseconds since epoch, inclusive. */
		endTimeMillis?: string | null;

		/** Sessions contain metadata, such as a user-friendly name and time interval information. */
		session?: Session;

		/** The start time for the aggregated data, in milliseconds since epoch, inclusive. */
		startTimeMillis?: string | null;

		/** The type of a bucket signifies how the data aggregation is performed in the bucket. */
		type?: AggregateBucketType | null;
	}
	export interface AggregateBucketFormProperties {

		/** Available for Bucket.Type.ACTIVITY_TYPE, Bucket.Type.ACTIVITY_SEGMENT */
		activity: FormControl<number | null | undefined>,

		/** The end time for the aggregated data, in milliseconds since epoch, inclusive. */
		endTimeMillis: FormControl<string | null | undefined>,

		/** The start time for the aggregated data, in milliseconds since epoch, inclusive. */
		startTimeMillis: FormControl<string | null | undefined>,

		/** The type of a bucket signifies how the data aggregation is performed in the bucket. */
		type: FormControl<AggregateBucketType | null | undefined>,
	}
	export function CreateAggregateBucketFormGroup() {
		return new FormGroup<AggregateBucketFormProperties>({
			activity: new FormControl<number | null | undefined>(undefined),
			endTimeMillis: new FormControl<string | null | undefined>(undefined),
			startTimeMillis: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AggregateBucketType | null | undefined>(undefined),
		});

	}


	/** A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset. */
	export interface Dataset {

		/** The data stream ID of the data source that created the points in this dataset. */
		dataSourceId?: string | null;

		/** The largest end time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the second part of the dataset identifier. */
		maxEndTimeNs?: string | null;

		/** The smallest start time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the first part of the dataset identifier. */
		minStartTimeNs?: string | null;

		/** This token will be set when a dataset is received in response to a GET request and the dataset is too large to be included in a single response. Provide this value in a subsequent GET request to return the next page of data points within this dataset. */
		nextPageToken?: string | null;

		/** A partial list of data points contained in the dataset, ordered by largest endTimeNanos first. This list is considered complete when retrieving a small dataset and partial when patching a dataset or retrieving a dataset that is too large to include in a single response. */
		point?: Array<DataPoint>;
	}

	/** A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset. */
	export interface DatasetFormProperties {

		/** The data stream ID of the data source that created the points in this dataset. */
		dataSourceId: FormControl<string | null | undefined>,

		/** The largest end time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the second part of the dataset identifier. */
		maxEndTimeNs: FormControl<string | null | undefined>,

		/** The smallest start time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the first part of the dataset identifier. */
		minStartTimeNs: FormControl<string | null | undefined>,

		/** This token will be set when a dataset is received in response to a GET request and the dataset is too large to be included in a single response. Provide this value in a subsequent GET request to return the next page of data points within this dataset. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined),
			maxEndTimeNs: new FormControl<string | null | undefined>(undefined),
			minStartTimeNs: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a single data point, generated by a particular data source. A data point holds a value for each field, an end timestamp and an optional start time. The exact semantics of each of these attributes are specified in the documentation for the particular data type.
	 * A data point can represent an instantaneous measurement, reading or input observation, as well as averages or aggregates over a time interval. Check the data type documentation to determine which is the case for a particular data type.
	 * Data points always contain one value for each field of the data type.
	 */
	export interface DataPoint {

		/** DO NOT USE THIS FIELD. It is ignored, and not stored. */
		computationTimeMillis?: string | null;

		/** The data type defining the format of the values in this data point. */
		dataTypeName?: string | null;

		/** The end time of the interval represented by this data point, in nanoseconds since epoch. */
		endTimeNanos?: string | null;

		/** Indicates the last time this data point was modified. Useful only in contexts where we are listing the data changes, rather than representing the current state of the data. */
		modifiedTimeMillis?: string | null;

		/**
		 * If the data point is contained in a dataset for a derived data source, this field will be populated with the data source stream ID that created the data point originally.
		 * WARNING: do not rely on this field for anything other than debugging. The value of this field, if it is set at all, is an implementation detail and is not guaranteed to remain consistent.
		 */
		originDataSourceId?: string | null;

		/** The raw timestamp from the original SensorEvent. */
		rawTimestampNanos?: string | null;

		/** The start time of the interval represented by this data point, in nanoseconds since epoch. */
		startTimeNanos?: string | null;

		/**
		 * Values of each data type field for the data point. It is expected that each value corresponding to a data type field will occur in the same order that the field is listed with in the data type specified in a data source.
		 * Only one of integer and floating point fields will be populated, depending on the format enum value within data source's type field.
		 */
		value?: Array<Value>;
	}

	/**
	 * Represents a single data point, generated by a particular data source. A data point holds a value for each field, an end timestamp and an optional start time. The exact semantics of each of these attributes are specified in the documentation for the particular data type.
	 * A data point can represent an instantaneous measurement, reading or input observation, as well as averages or aggregates over a time interval. Check the data type documentation to determine which is the case for a particular data type.
	 * Data points always contain one value for each field of the data type.
	 */
	export interface DataPointFormProperties {

		/** DO NOT USE THIS FIELD. It is ignored, and not stored. */
		computationTimeMillis: FormControl<string | null | undefined>,

		/** The data type defining the format of the values in this data point. */
		dataTypeName: FormControl<string | null | undefined>,

		/** The end time of the interval represented by this data point, in nanoseconds since epoch. */
		endTimeNanos: FormControl<string | null | undefined>,

		/** Indicates the last time this data point was modified. Useful only in contexts where we are listing the data changes, rather than representing the current state of the data. */
		modifiedTimeMillis: FormControl<string | null | undefined>,

		/**
		 * If the data point is contained in a dataset for a derived data source, this field will be populated with the data source stream ID that created the data point originally.
		 * WARNING: do not rely on this field for anything other than debugging. The value of this field, if it is set at all, is an implementation detail and is not guaranteed to remain consistent.
		 */
		originDataSourceId: FormControl<string | null | undefined>,

		/** The raw timestamp from the original SensorEvent. */
		rawTimestampNanos: FormControl<string | null | undefined>,

		/** The start time of the interval represented by this data point, in nanoseconds since epoch. */
		startTimeNanos: FormControl<string | null | undefined>,
	}
	export function CreateDataPointFormGroup() {
		return new FormGroup<DataPointFormProperties>({
			computationTimeMillis: new FormControl<string | null | undefined>(undefined),
			dataTypeName: new FormControl<string | null | undefined>(undefined),
			endTimeNanos: new FormControl<string | null | undefined>(undefined),
			modifiedTimeMillis: new FormControl<string | null | undefined>(undefined),
			originDataSourceId: new FormControl<string | null | undefined>(undefined),
			rawTimestampNanos: new FormControl<string | null | undefined>(undefined),
			startTimeNanos: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Holder object for the value of a single field in a data point.
	 * A field value has a particular format and is only ever set to one of an integer or a floating point value.
	 */
	export interface Value {

		/** Floating point value. When this is set, other values must not be set. */
		fpVal?: number | null;

		/** Integer value. When this is set, other values must not be set. */
		intVal?: number | null;

		/** Map value. The valid key space and units for the corresponding value of each entry should be documented as part of the data type definition. Keys should be kept small whenever possible. Data streams with large keys and high data frequency may be down sampled. */
		mapVal?: Array<ValueMapValEntry>;

		/** String value. When this is set, other values must not be set. Strings should be kept small whenever possible. Data streams with large string values and high data frequency may be down sampled. */
		stringVal?: string | null;
	}

	/**
	 * Holder object for the value of a single field in a data point.
	 * A field value has a particular format and is only ever set to one of an integer or a floating point value.
	 */
	export interface ValueFormProperties {

		/** Floating point value. When this is set, other values must not be set. */
		fpVal: FormControl<number | null | undefined>,

		/** Integer value. When this is set, other values must not be set. */
		intVal: FormControl<number | null | undefined>,

		/** String value. When this is set, other values must not be set. Strings should be kept small whenever possible. Data streams with large string values and high data frequency may be down sampled. */
		stringVal: FormControl<string | null | undefined>,
	}
	export function CreateValueFormGroup() {
		return new FormGroup<ValueFormProperties>({
			fpVal: new FormControl<number | null | undefined>(undefined),
			intVal: new FormControl<number | null | undefined>(undefined),
			stringVal: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValueMapValEntry {
		key?: string | null;

		/**
		 * Holder object for the value of an entry in a map field of a data point.
		 * A map value supports a subset of the formats that the regular Value supports.
		 */
		value?: MapValue;
	}
	export interface ValueMapValEntryFormProperties {
		key: FormControl<string | null | undefined>,
	}
	export function CreateValueMapValEntryFormGroup() {
		return new FormGroup<ValueMapValEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Holder object for the value of an entry in a map field of a data point.
	 * A map value supports a subset of the formats that the regular Value supports.
	 */
	export interface MapValue {

		/** Floating point value. */
		fpVal?: number | null;
	}

	/**
	 * Holder object for the value of an entry in a map field of a data point.
	 * A map value supports a subset of the formats that the regular Value supports.
	 */
	export interface MapValueFormProperties {

		/** Floating point value. */
		fpVal: FormControl<number | null | undefined>,
	}
	export function CreateMapValueFormGroup() {
		return new FormGroup<MapValueFormProperties>({
			fpVal: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Sessions contain metadata, such as a user-friendly name and time interval information. */
	export interface Session {

		/** Session active time. While start_time_millis and end_time_millis define the full session time, the active time can be shorter and specified by active_time_millis. If the inactive time during the session is known, it should also be inserted via a com.google.activity.segment data point with a STILL activity value */
		activeTimeMillis?: string | null;

		/** The type of activity this session represents. */
		activityType?: number | null;
		application?: Application;

		/** A description for this session. */
		description?: string | null;

		/** An end time, in milliseconds since epoch, inclusive. */
		endTimeMillis?: string | null;

		/** A client-generated identifier that is unique across all sessions owned by this particular user. */
		id?: string | null;

		/** A timestamp that indicates when the session was last modified. */
		modifiedTimeMillis?: string | null;

		/** A human readable name of the session. */
		name?: string | null;

		/** A start time, in milliseconds since epoch, inclusive. */
		startTimeMillis?: string | null;
	}

	/** Sessions contain metadata, such as a user-friendly name and time interval information. */
	export interface SessionFormProperties {

		/** Session active time. While start_time_millis and end_time_millis define the full session time, the active time can be shorter and specified by active_time_millis. If the inactive time during the session is known, it should also be inserted via a com.google.activity.segment data point with a STILL activity value */
		activeTimeMillis: FormControl<string | null | undefined>,

		/** The type of activity this session represents. */
		activityType: FormControl<number | null | undefined>,

		/** A description for this session. */
		description: FormControl<string | null | undefined>,

		/** An end time, in milliseconds since epoch, inclusive. */
		endTimeMillis: FormControl<string | null | undefined>,

		/** A client-generated identifier that is unique across all sessions owned by this particular user. */
		id: FormControl<string | null | undefined>,

		/** A timestamp that indicates when the session was last modified. */
		modifiedTimeMillis: FormControl<string | null | undefined>,

		/** A human readable name of the session. */
		name: FormControl<string | null | undefined>,

		/** A start time, in milliseconds since epoch, inclusive. */
		startTimeMillis: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			activeTimeMillis: new FormControl<string | null | undefined>(undefined),
			activityType: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endTimeMillis: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modifiedTimeMillis: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTimeMillis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Application {

		/** An optional URI that can be used to link back to the application. */
		detailsUrl?: string | null;

		/** The name of this application. This is required for REST clients, but we do not enforce uniqueness of this name. It is provided as a matter of convenience for other developers who would like to identify which REST created an Application or Data Source. */
		name?: string | null;

		/** Package name for this application. This is used as a unique identifier when created by Android applications, but cannot be specified by REST clients. REST clients will have their developer project number reflected into the Data Source data stream IDs, instead of the packageName. */
		packageName?: string | null;

		/** Version of the application. You should update this field whenever the application changes in a way that affects the computation of the data. */
		version?: string | null;
	}
	export interface ApplicationFormProperties {

		/** An optional URI that can be used to link back to the application. */
		detailsUrl: FormControl<string | null | undefined>,

		/** The name of this application. This is required for REST clients, but we do not enforce uniqueness of this name. It is provided as a matter of convenience for other developers who would like to identify which REST created an Application or Data Source. */
		name: FormControl<string | null | undefined>,

		/** Package name for this application. This is used as a unique identifier when created by Android applications, but cannot be specified by REST clients. REST clients will have their developer project number reflected into the Data Source data stream IDs, instead of the packageName. */
		packageName: FormControl<string | null | undefined>,

		/** Version of the application. You should update this field whenever the application changes in a way that affects the computation of the data. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			detailsUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AggregateBucketType { activitySegment = 0, activityType = 1, session = 2, time = 3, unknown = 4 }


	/** The specification of which data to aggregate. */
	export interface AggregateBy {

		/** A data source ID to aggregate. Only data from the specified data source ID will be included in the aggregation. If specified, this data source must exist; the OAuth scopes in the supplied credentials must grant read access to this data type. The dataset in the response will have the same data source ID. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both. */
		dataSourceId?: string | null;

		/** The data type to aggregate. All data sources providing this data type will contribute data to the aggregation. The response will contain a single dataset for this data type name. The dataset will have a data source ID of derived::com.google.android.gms:aggregated. If the user has no data for this data type, an empty data set will be returned. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both. */
		dataTypeName?: string | null;
	}

	/** The specification of which data to aggregate. */
	export interface AggregateByFormProperties {

		/** A data source ID to aggregate. Only data from the specified data source ID will be included in the aggregation. If specified, this data source must exist; the OAuth scopes in the supplied credentials must grant read access to this data type. The dataset in the response will have the same data source ID. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both. */
		dataSourceId: FormControl<string | null | undefined>,

		/** The data type to aggregate. All data sources providing this data type will contribute data to the aggregation. The response will contain a single dataset for this data type name. The dataset will have a data source ID of derived::com.google.android.gms:aggregated. If the user has no data for this data type, an empty data set will be returned. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both. */
		dataTypeName: FormControl<string | null | undefined>,
	}
	export function CreateAggregateByFormGroup() {
		return new FormGroup<AggregateByFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined),
			dataTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Next id: 10 */
	export interface AggregateRequest {

		/** The specification of data to be aggregated. At least one aggregateBy spec must be provided. All data that is specified will be aggregated using the same bucketing criteria. There will be one dataset in the response for every aggregateBy spec. */
		aggregateBy?: Array<AggregateBy>;
		bucketByActivitySegment?: BucketByActivity;
		bucketByActivityType?: BucketByActivity;
		bucketBySession?: BucketBySession;
		bucketByTime?: BucketByTime;

		/** The end of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive. */
		endTimeMillis?: string | null;

		/** DO NOT POPULATE THIS FIELD. It is ignored. */
		filteredDataQualityStandard?: Array<string>;

		/** The start of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive. */
		startTimeMillis?: string | null;
	}

	/** Next id: 10 */
	export interface AggregateRequestFormProperties {

		/** The end of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive. */
		endTimeMillis: FormControl<string | null | undefined>,

		/** The start of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive. */
		startTimeMillis: FormControl<string | null | undefined>,
	}
	export function CreateAggregateRequestFormGroup() {
		return new FormGroup<AggregateRequestFormProperties>({
			endTimeMillis: new FormControl<string | null | undefined>(undefined),
			startTimeMillis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BucketByActivity {

		/** The default activity stream will be used if a specific activityDataSourceId is not specified. */
		activityDataSourceId?: string | null;

		/** Specifies that only activity segments of duration longer than minDurationMillis are considered and used as a container for aggregated data. */
		minDurationMillis?: string | null;
	}
	export interface BucketByActivityFormProperties {

		/** The default activity stream will be used if a specific activityDataSourceId is not specified. */
		activityDataSourceId: FormControl<string | null | undefined>,

		/** Specifies that only activity segments of duration longer than minDurationMillis are considered and used as a container for aggregated data. */
		minDurationMillis: FormControl<string | null | undefined>,
	}
	export function CreateBucketByActivityFormGroup() {
		return new FormGroup<BucketByActivityFormProperties>({
			activityDataSourceId: new FormControl<string | null | undefined>(undefined),
			minDurationMillis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BucketBySession {

		/** Specifies that only sessions of duration longer than minDurationMillis are considered and used as a container for aggregated data. */
		minDurationMillis?: string | null;
	}
	export interface BucketBySessionFormProperties {

		/** Specifies that only sessions of duration longer than minDurationMillis are considered and used as a container for aggregated data. */
		minDurationMillis: FormControl<string | null | undefined>,
	}
	export function CreateBucketBySessionFormGroup() {
		return new FormGroup<BucketBySessionFormProperties>({
			minDurationMillis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BucketByTime {

		/** Specifies that result buckets aggregate data by exactly durationMillis time frames. Time frames that contain no data will be included in the response with an empty dataset. */
		durationMillis?: string | null;
		period?: BucketByTimePeriod;
	}
	export interface BucketByTimeFormProperties {

		/** Specifies that result buckets aggregate data by exactly durationMillis time frames. Time frames that contain no data will be included in the response with an empty dataset. */
		durationMillis: FormControl<string | null | undefined>,
	}
	export function CreateBucketByTimeFormGroup() {
		return new FormGroup<BucketByTimeFormProperties>({
			durationMillis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BucketByTimePeriod {

		/** org.joda.timezone.DateTimeZone */
		timeZoneId?: string | null;
		type?: BucketByTimePeriodType | null;
		value?: number | null;
	}
	export interface BucketByTimePeriodFormProperties {

		/** org.joda.timezone.DateTimeZone */
		timeZoneId: FormControl<string | null | undefined>,
		type: FormControl<BucketByTimePeriodType | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateBucketByTimePeriodFormGroup() {
		return new FormGroup<BucketByTimePeriodFormProperties>({
			timeZoneId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BucketByTimePeriodType | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BucketByTimePeriodType { day = 0, month = 1, week = 2 }

	export interface AggregateResponse {

		/** A list of buckets containing the aggregated data. */
		bucket?: Array<AggregateBucket>;
	}
	export interface AggregateResponseFormProperties {
	}
	export function CreateAggregateResponseFormGroup() {
		return new FormGroup<AggregateResponseFormProperties>({
		});

	}


	/**
	 * Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source.
	 * The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type.
	 * Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.
	 */
	export interface DataSource {
		application?: Application;

		/** DO NOT POPULATE THIS FIELD. It is never populated in responses from the platform, and is ignored in queries. It will be removed in a future version entirely. */
		dataQualityStandard?: Array<string>;

		/**
		 * A unique identifier for the data stream produced by this data source. The identifier includes:
		 * - The physical device's manufacturer, model, and serial number (UID).
		 * - The application's package name or name. Package name is used when the data source was created by an Android application. The developer project number is used when the data source was created by a REST client.
		 * - The data source's type.
		 * - The data source's stream name.  Note that not all attributes of the data source are used as part of the stream identifier. In particular, the version of the hardware/the application isn't used. This allows us to preserve the same stream through version updates. This also means that two DataSource objects may represent the same data stream even if they're not equal.
		 * The exact format of the data stream ID created by an Android application is: type:dataType.name:application.packageName:device.manufacturer:device.model:device.uid:dataStreamName
		 * The exact format of the data stream ID created by a REST client is: type:dataType.name:developer project number:device.manufacturer:device.model:device.uid:dataStreamName
		 * When any of the optional fields that make up the data stream ID are absent, they will be omitted from the data stream ID. The minimum viable data stream ID would be: type:dataType.name:developer project number
		 * Finally, the developer project number and device UID are obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the developer project number in clear and normal form. This means a client will see a different set of data_stream_ids than another client with different credentials.
		 */
		dataStreamId?: string | null;

		/** The stream name uniquely identifies this particular data source among other data sources of the same type from the same underlying producer. Setting the stream name is optional, but should be done whenever an application exposes two streams for the same data type, or when a device has two equivalent sensors. */
		dataStreamName?: string | null;
		dataType?: DataType;

		/**
		 * Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source.
		 * The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including:
		 * - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance)
		 * - Display the source of data to the user (by using the device make / model)
		 * - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone)
		 * - Build different analysis models for each device/version.
		 */
		device?: Device;

		/** An end-user visible name for this data source. */
		name?: string | null;

		/** A constant describing the type of this data source. Indicates whether this data source produces raw or derived data. */
		type?: DataSourceType | null;
	}

	/**
	 * Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source.
	 * The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type.
	 * Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.
	 */
	export interface DataSourceFormProperties {

		/**
		 * A unique identifier for the data stream produced by this data source. The identifier includes:
		 * - The physical device's manufacturer, model, and serial number (UID).
		 * - The application's package name or name. Package name is used when the data source was created by an Android application. The developer project number is used when the data source was created by a REST client.
		 * - The data source's type.
		 * - The data source's stream name.  Note that not all attributes of the data source are used as part of the stream identifier. In particular, the version of the hardware/the application isn't used. This allows us to preserve the same stream through version updates. This also means that two DataSource objects may represent the same data stream even if they're not equal.
		 * The exact format of the data stream ID created by an Android application is: type:dataType.name:application.packageName:device.manufacturer:device.model:device.uid:dataStreamName
		 * The exact format of the data stream ID created by a REST client is: type:dataType.name:developer project number:device.manufacturer:device.model:device.uid:dataStreamName
		 * When any of the optional fields that make up the data stream ID are absent, they will be omitted from the data stream ID. The minimum viable data stream ID would be: type:dataType.name:developer project number
		 * Finally, the developer project number and device UID are obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the developer project number in clear and normal form. This means a client will see a different set of data_stream_ids than another client with different credentials.
		 */
		dataStreamId: FormControl<string | null | undefined>,

		/** The stream name uniquely identifies this particular data source among other data sources of the same type from the same underlying producer. Setting the stream name is optional, but should be done whenever an application exposes two streams for the same data type, or when a device has two equivalent sensors. */
		dataStreamName: FormControl<string | null | undefined>,

		/** An end-user visible name for this data source. */
		name: FormControl<string | null | undefined>,

		/** A constant describing the type of this data source. Indicates whether this data source produces raw or derived data. */
		type: FormControl<DataSourceType | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			dataStreamId: new FormControl<string | null | undefined>(undefined),
			dataStreamName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataSourceType | null | undefined>(undefined),
		});

	}

	export interface DataType {

		/** A field represents one dimension of a data type. */
		field?: Array<DataTypeField>;

		/** Each data type has a unique, namespaced, name. All data types in the com.google namespace are shared as part of the platform. */
		name?: string | null;
	}
	export interface DataTypeFormProperties {

		/** Each data type has a unique, namespaced, name. All data types in the com.google namespace are shared as part of the platform. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDataTypeFormGroup() {
		return new FormGroup<DataTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.).
	 * This message is only instantiated in code and not used for wire comms or stored in any way.
	 */
	export interface DataTypeField {

		/** The different supported formats for each field in a data type. */
		format?: DataTypeFieldFormat | null;

		/** Defines the name and format of data. Unlike data type names, field names are not namespaced, and only need to be unique within the data type. */
		name?: string | null;
		optional?: boolean | null;
	}

	/**
	 * In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.).
	 * This message is only instantiated in code and not used for wire comms or stored in any way.
	 */
	export interface DataTypeFieldFormProperties {

		/** The different supported formats for each field in a data type. */
		format: FormControl<DataTypeFieldFormat | null | undefined>,

		/** Defines the name and format of data. Unlike data type names, field names are not namespaced, and only need to be unique within the data type. */
		name: FormControl<string | null | undefined>,
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateDataTypeFieldFormGroup() {
		return new FormGroup<DataTypeFieldFormProperties>({
			format: new FormControl<DataTypeFieldFormat | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DataTypeFieldFormat { blob = 0, floatList = 1, floatPoint = 2, integer = 3, integerList = 4, map = 5, string = 6 }


	/**
	 * Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source.
	 * The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including:  
	 * - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance)
	 * - Display the source of data to the user (by using the device make / model)
	 * - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone)
	 * - Build different analysis models for each device/version.
	 */
	export interface Device {

		/** Manufacturer of the product/hardware. */
		manufacturer?: string | null;

		/** End-user visible model name for the device. */
		model?: string | null;

		/** A constant representing the type of the device. */
		type?: DeviceType | null;

		/**
		 * The serial number or other unique ID for the hardware. This field is obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the uid field in clear and normal form.
		 * The obfuscation preserves equality; that is, given two IDs, if id1 == id2, obfuscated(id1) == obfuscated(id2).
		 */
		uid?: string | null;

		/** Version string for the device hardware/software. */
		version?: string | null;
	}

	/**
	 * Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source.
	 * The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including:  
	 * - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance)
	 * - Display the source of data to the user (by using the device make / model)
	 * - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone)
	 * - Build different analysis models for each device/version.
	 */
	export interface DeviceFormProperties {

		/** Manufacturer of the product/hardware. */
		manufacturer: FormControl<string | null | undefined>,

		/** End-user visible model name for the device. */
		model: FormControl<string | null | undefined>,

		/** A constant representing the type of the device. */
		type: FormControl<DeviceType | null | undefined>,

		/**
		 * The serial number or other unique ID for the hardware. This field is obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the uid field in clear and normal form.
		 * The obfuscation preserves equality; that is, given two IDs, if id1 == id2, obfuscated(id1) == obfuscated(id2).
		 */
		uid: FormControl<string | null | undefined>,

		/** Version string for the device hardware/software. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			manufacturer: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DeviceType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceType { chestStrap = 0, headMounted = 1, phone = 2, scale = 3, tablet = 4, unknown = 5, watch = 6 }

	export enum DataSourceType { derived = 0, raw = 1 }

	export interface ListDataPointChangesResponse {

		/** The data stream ID of the data source with data point changes. */
		dataSourceId?: string | null;

		/** Deleted data points for the user. Note, for modifications this should be parsed before handling insertions. */
		deletedDataPoint?: Array<DataPoint>;

		/** Inserted data points for the user. */
		insertedDataPoint?: Array<DataPoint>;

		/** The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListDataPointChangesResponseFormProperties {

		/** The data stream ID of the data source with data point changes. */
		dataSourceId: FormControl<string | null | undefined>,

		/** The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataPointChangesResponseFormGroup() {
		return new FormGroup<ListDataPointChangesResponseFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDataSourcesResponse {

		/** A previously created data source. */
		dataSource?: Array<DataSource>;
	}
	export interface ListDataSourcesResponseFormProperties {
	}
	export function CreateListDataSourcesResponseFormGroup() {
		return new FormGroup<ListDataSourcesResponseFormProperties>({
		});

	}

	export interface ListSessionsResponse {

		/** If includeDeleted is set to true in the request, this list will contain sessions deleted with original end times that are within the startTime and endTime frame. */
		deletedSession?: Array<Session>;

		/** Flag to indicate server has more data to transfer */
		hasMoreData?: boolean | null;

		/** The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;

		/** Sessions with an end time that is between startTime and endTime of the request. */
		session?: Array<Session>;
	}
	export interface ListSessionsResponseFormProperties {

		/** Flag to indicate server has more data to transfer */
		hasMoreData: FormControl<boolean | null | undefined>,

		/** The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsResponseFormGroup() {
		return new FormGroup<ListSessionsResponseFormProperties>({
			hasMoreData: new FormControl<boolean | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all data sources that are visible to the developer, using the OAuth scopes provided. The list is not exhaustive; the user may have private data sources that are only visible to other developers, or calls using other scopes.
		 * Get {userId}/dataSources
		 * @param {string} userId List data sources for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {Array<string>} dataTypeName The names of data types to include in the list. If not specified, all data sources will be returned.
		 * @return {void} Successful response
		 */
		Fitness_users_dataSources_list(userId: string, dataTypeName: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/dataSources&' + dataTypeName?.map(z => `dataTypeName=${encodeURIComponent(z)}`).join('&') + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new data source that is unique across all data sources belonging to this user.
		 * A data source is a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point in every dataset inserted into or read from the Fitness API has an associated data source.
		 * Each data source produces a unique stream of dataset updates, with a unique data source identifier. Not all changes to data source affect the data stream ID, so that data collected by updated versions of the same application/device can still be considered to belong to the same data source.
		 * Data sources are identified using a string generated by the server, based on the contents of the source being created. The dataStreamId field should not be set when invoking this method. It will be automatically generated by the server with the correct format. If a dataStreamId is set, it must match the format that the server would generate. This format is a combination of some fields from the data source, and has a specific order. If it doesn't match, the request will fail with an error.
		 * Specifying a DataType which is not a known type (beginning with "com.google.") will create a DataSource with a custom data type. Custom data types are only readable by the application that created them. Custom data types are deprecated; use standard data types instead.
		 * In addition to the data source fields included in the data source ID, the developer project number that is authenticated when creating the data source is included. This developer project number is obfuscated when read by any other developer reading public data types.
		 * Post {userId}/dataSources
		 * @param {string} userId Create the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @return {void} Successful response
		 */
		Fitness_users_dataSources_create(userId: string, requestBody: DataSource): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/dataSources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified data source. The request will fail if the data source contains any data points.
		 * Delete {userId}/dataSources/{dataSourceId}
		 * @param {string} userId Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {string} dataSourceId The data stream ID of the data source to delete.
		 * @return {void} Successful response
		 */
		Fitness_users_dataSources_delete(userId: string, dataSourceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/dataSources/' + (dataSourceId == null ? '' : encodeURIComponent(dataSourceId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the specified data source.
		 * Get {userId}/dataSources/{dataSourceId}
		 * @param {string} userId Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {string} dataSourceId The data stream ID of the data source to retrieve.
		 * @return {void} Successful response
		 */
		Fitness_users_dataSources_get(userId: string, dataSourceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/dataSources/' + (dataSourceId == null ? '' : encodeURIComponent(dataSourceId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified data source. The dataStreamId, dataType, type, dataStreamName, and device properties with the exception of version, cannot be modified.
		 * Data sources are identified by their dataStreamId.
		 * Put {userId}/dataSources/{dataSourceId}
		 * @param {string} userId Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {string} dataSourceId The data stream ID of the data source to update.
		 * @return {void} Successful response
		 */
		Fitness_users_dataSources_update(userId: string, dataSourceId: string, requestBody: DataSource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/dataSources/' + (dataSourceId == null ? '' : encodeURIComponent(dataSourceId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Queries for user's data point changes for a particular data source.
		 * Get {userId}/dataSources/{dataSourceId}/dataPointChanges
		 * @param {string} userId List data points for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {string} dataSourceId The data stream ID of the data source that created the dataset.
		 * @param {number} limit If specified, no more than this many data point changes will be included in the response.
		 * @param {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
		 * @return {void} Successful response
		 */
		Fitness_users_dataSources_dataPointChanges_list(userId: string, dataSourceId: string, limit: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/dataSources/' + (dataSourceId == null ? '' : encodeURIComponent(dataSourceId)) + '/dataPointChanges&limit=' + limit + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs an inclusive delete of all data points whose start and end times have any overlap with the time range specified by the dataset ID. For most data types, the entire data point will be deleted. For data types where the time span represents a consistent value (such as com.google.activity.segment), and a data point straddles either end point of the dataset, only the overlapping portion of the data point will be deleted.
		 * Delete {userId}/dataSources/{dataSourceId}/datasets/{datasetId}
		 * @param {string} userId Delete a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {string} dataSourceId The data stream ID of the data source that created the dataset.
		 * @param {string} datasetId Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
		 * @param {string} currentTimeMillis The client's current time in milliseconds since epoch.
		 * @param {string} modifiedTimeMillis When the operation was performed on the client.
		 * @return {void} Successful response
		 */
		Fitness_users_dataSources_datasets_delete(userId: string, dataSourceId: string, datasetId: string, currentTimeMillis: string | null | undefined, modifiedTimeMillis: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/dataSources/' + (dataSourceId == null ? '' : encodeURIComponent(dataSourceId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '&currentTimeMillis=' + (currentTimeMillis == null ? '' : encodeURIComponent(currentTimeMillis)) + '&modifiedTimeMillis=' + (modifiedTimeMillis == null ? '' : encodeURIComponent(modifiedTimeMillis)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a dataset containing all data points whose start and end times overlap with the specified range of the dataset minimum start time and maximum end time. Specifically, any data point whose start time is less than or equal to the dataset end time and whose end time is greater than or equal to the dataset start time.
		 * Get {userId}/dataSources/{dataSourceId}/datasets/{datasetId}
		 * @param {string} userId Retrieve a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {string} dataSourceId The data stream ID of the data source that created the dataset.
		 * @param {string} datasetId Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
		 * @param {number} limit If specified, no more than this many data points will be included in the dataset. If there are more data points in the dataset, nextPageToken will be set in the dataset response.
		 * @param {string} pageToken The continuation token, which is used to page through large datasets. To get the next page of a dataset, set this parameter to the value of nextPageToken from the previous response. Each subsequent call will yield a partial dataset with data point end timestamps that are strictly smaller than those in the previous partial response.
		 * @return {void} Successful response
		 */
		Fitness_users_dataSources_datasets_get(userId: string, dataSourceId: string, datasetId: string, limit: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/dataSources/' + (dataSourceId == null ? '' : encodeURIComponent(dataSourceId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '&limit=' + limit + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds data points to a dataset. The dataset need not be previously created. All points within the given dataset will be returned with subsquent calls to retrieve this dataset. Data points can belong to more than one dataset. This method does not use patch semantics.
		 * Patch {userId}/dataSources/{dataSourceId}/datasets/{datasetId}
		 * @param {string} userId Patch a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {string} dataSourceId The data stream ID of the data source that created the dataset.
		 * @param {string} datasetId Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
		 * @param {string} currentTimeMillis The client's current time in milliseconds since epoch. Note that the minStartTimeNs and maxEndTimeNs properties in the request body are in nanoseconds instead of milliseconds.
		 * @return {void} Successful response
		 */
		Fitness_users_dataSources_datasets_patch(userId: string, dataSourceId: string, datasetId: string, currentTimeMillis: string | null | undefined, requestBody: Dataset): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/dataSources/' + (dataSourceId == null ? '' : encodeURIComponent(dataSourceId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '&currentTimeMillis=' + (currentTimeMillis == null ? '' : encodeURIComponent(currentTimeMillis)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Aggregates data of a certain type or stream into buckets divided by a given type of boundary. Multiple data sets of multiple types and from multiple sources can be aggregated into exactly one bucket type per request.
		 * Post {userId}/dataset:aggregate
		 * @param {string} userId Aggregate data for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @return {void} Successful response
		 */
		Fitness_users_dataset_aggregate(userId: string, requestBody: AggregateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/dataset:aggregate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists sessions previously created.
		 * Get {userId}/sessions
		 * @param {string} userId List sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {Array<number>} activityType If non-empty, only sessions with these activity types should be returned.
		 * @param {string} endTime An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response.
		 * @param {boolean} includeDeleted If true, deleted sessions will be returned. When set to true, sessions returned in this response will only have an ID and will not have any other fields.
		 * @param {string} pageToken The continuation token, which is used for incremental syncing. To get the next batch of changes, set this parameter to the value of nextPageToken from the previous response. This token is treated as a timestamp (in millis since epoch). If specified, the API returns sessions modified since this time. The page token is ignored if either start or end time is specified. If none of start time, end time, and the page token is specified, sessions modified in the last 30 days are returned.
		 * @param {string} startTime An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response.
		 * @return {void} Successful response
		 */
		Fitness_users_sessions_list(userId: string, activityType: Array<number> | null | undefined, endTime: string | null | undefined, includeDeleted: boolean | null | undefined, pageToken: string | null | undefined, startTime: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/sessions&' + activityType?.map(z => `activityType=${z}`).join('&') + '&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&includeDeleted=' + includeDeleted + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a session specified by the given session ID.
		 * Delete {userId}/sessions/{sessionId}
		 * @param {string} userId Delete a session for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {string} sessionId The ID of the session to be deleted.
		 * @param {string} currentTimeMillis The client's current time in milliseconds since epoch.
		 * @return {void} Successful response
		 */
		Fitness_users_sessions_delete(userId: string, sessionId: string, currentTimeMillis: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '&currentTimeMillis=' + (currentTimeMillis == null ? '' : encodeURIComponent(currentTimeMillis)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates or insert a given session.
		 * Put {userId}/sessions/{sessionId}
		 * @param {string} userId Create sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
		 * @param {string} sessionId The ID of the session to be created.
		 * @param {string} currentTimeMillis The client's current time in milliseconds since epoch.
		 * @return {void} Successful response
		 */
		Fitness_users_sessions_update(userId: string, sessionId: string, currentTimeMillis: string | null | undefined, requestBody: Session): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (userId == null ? '' : encodeURIComponent(userId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '&currentTimeMillis=' + (currentTimeMillis == null ? '' : encodeURIComponent(currentTimeMillis)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

