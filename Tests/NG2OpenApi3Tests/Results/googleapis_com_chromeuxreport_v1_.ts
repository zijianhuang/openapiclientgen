import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type. */
	export interface Bin {

		/** The proportion of users that experienced this bin's value for the given metric. */
		density?: number | null;

		/** End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf. */
		end?: any;

		/** Start is the beginning of the data bin. */
		start?: any;
	}

	/** A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type. */
	export interface BinFormProperties {

		/** The proportion of users that experienced this bin's value for the given metric. */
		density: FormControl<number | null | undefined>,

		/** End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf. */
		end: FormControl<any | null | undefined>,

		/** Start is the beginning of the data bin. */
		start: FormControl<any | null | undefined>,
	}
	export function CreateBinFormGroup() {
		return new FormGroup<BinFormProperties>({
			density: new FormControl<number | null | undefined>(undefined),
			end: new FormControl<any | null | undefined>(undefined),
			start: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The collection period is a date range which includes the `first` and `last` day. */
	export interface CollectionPeriod {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		firstDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		lastDate?: Date;
	}

	/** The collection period is a date range which includes the `first` and `last` day. */
	export interface CollectionPeriodFormProperties {
	}
	export function CreateCollectionPeriodFormGroup() {
		return new FormGroup<CollectionPeriodFormProperties>({
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** For enum metrics, provides fraction timeseries which add up to approximately 1.0 per entry (k-th element into the repeated fractions field for any k <= len) across fraction_timeseries. */
	export interface FractionTimeseries {

		/** Values between 0.0 and 1.0 (inclusive) and NaN. */
		fractions?: Array<number>;
	}

	/** For enum metrics, provides fraction timeseries which add up to approximately 1.0 per entry (k-th element into the repeated fractions field for any k <= len) across fraction_timeseries. */
	export interface FractionTimeseriesFormProperties {
	}
	export function CreateFractionTimeseriesFormGroup() {
		return new FormGroup<FractionTimeseriesFormProperties>({
		});

	}


	/** Key defines all the dimensions that identify this record as unique. */
	export interface HistoryKey {

		/** The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned. */
		formFactor?: HistoryKeyFormFactor | null;

		/** Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data. */
		origin?: string | null;

		/** Url specifies a specific url that this record is for. This url should be normalized, following the normalization actions taken in the request to increase the chances of successful lookup. Note: When specifying a "url" only data for that specific url will be aggregated. */
		url?: string | null;
	}

	/** Key defines all the dimensions that identify this record as unique. */
	export interface HistoryKeyFormProperties {

		/** The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned. */
		formFactor: FormControl<HistoryKeyFormFactor | null | undefined>,

		/** Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data. */
		origin: FormControl<string | null | undefined>,

		/** Url specifies a specific url that this record is for. This url should be normalized, following the normalization actions taken in the request to increase the chances of successful lookup. Note: When specifying a "url" only data for that specific url will be aggregated. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateHistoryKeyFormGroup() {
		return new FormGroup<HistoryKeyFormProperties>({
			formFactor: new FormControl<HistoryKeyFormFactor | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HistoryKeyFormFactor { ALL_FORM_FACTORS = 0, PHONE = 1, DESKTOP = 2, TABLET = 3 }


	/** HistoryRecord is a timeseries of Chrome UX Report data. It contains user experience statistics for a single url pattern and a set of dimensions. */
	export interface HistoryRecord {

		/** The collection periods indicate when each of the data points reflected in the time series data in metrics was collected. Note that all the time series share the same collection periods, and it is enforced in the CrUX pipeline that every time series has the same number of data points. */
		collectionPeriods?: Array<CollectionPeriod>;

		/** Key defines all the dimensions that identify this record as unique. */
		key?: HistoryKey;

		/** Metrics is the map of user experience time series data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"] */
		metrics?: {[id: string]: MetricTimeseries };
	}

	/** HistoryRecord is a timeseries of Chrome UX Report data. It contains user experience statistics for a single url pattern and a set of dimensions. */
	export interface HistoryRecordFormProperties {

		/** Metrics is the map of user experience time series data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"] */
		metrics: FormControl<{[id: string]: MetricTimeseries } | null | undefined>,
	}
	export function CreateHistoryRecordFormGroup() {
		return new FormGroup<HistoryRecordFormProperties>({
			metrics: new FormControl<{[id: string]: MetricTimeseries } | null | undefined>(undefined),
		});

	}


	/** A `metric timeseries` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`, where each bin has density values for a particular time period. */
	export interface MetricTimeseries {

		/** Mapping from labels to timeseries of fractions attributed to this label. */
		fractionTimeseries?: {[id: string]: FractionTimeseries };

		/** The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1, for each timeseries entry. */
		histogramTimeseries?: Array<TimeseriesBin>;

		/** Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users. */
		percentilesTimeseries?: TimeseriesPercentiles;
	}

	/** A `metric timeseries` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`, where each bin has density values for a particular time period. */
	export interface MetricTimeseriesFormProperties {

		/** Mapping from labels to timeseries of fractions attributed to this label. */
		fractionTimeseries: FormControl<{[id: string]: FractionTimeseries } | null | undefined>,
	}
	export function CreateMetricTimeseriesFormGroup() {
		return new FormGroup<MetricTimeseriesFormProperties>({
			fractionTimeseries: new FormControl<{[id: string]: FractionTimeseries } | null | undefined>(undefined),
		});

	}


	/** A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type. */
	export interface TimeseriesBin {

		/** The proportion of users that experienced this bin's value for the given metric in a given collection period; the index for each of these entries corresponds to an entry in the CollectionPeriods field in the HistoryRecord message, which describes when the density was observed in the field. Thus, the length of this list of densities is equal to the length of the CollectionPeriods field in the HistoryRecord message. */
		densities?: Array<number>;

		/** End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf. */
		end?: any;

		/** Start is the beginning of the data bin. */
		start?: any;
	}

	/** A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type. */
	export interface TimeseriesBinFormProperties {

		/** End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf. */
		end: FormControl<any | null | undefined>,

		/** Start is the beginning of the data bin. */
		start: FormControl<any | null | undefined>,
	}
	export function CreateTimeseriesBinFormGroup() {
		return new FormGroup<TimeseriesBinFormProperties>({
			end: new FormControl<any | null | undefined>(undefined),
			start: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users. */
	export interface TimeseriesPercentiles {

		/** 75% of users experienced the given metric at or below this value. The length of this list of densities is equal to the length of the CollectionPeriods field in the HistoryRecord message, which describes when the density was observed in the field. */
		p75s?: Array<string>;
	}

	/** Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users. */
	export interface TimeseriesPercentilesFormProperties {
	}
	export function CreateTimeseriesPercentilesFormGroup() {
		return new FormGroup<TimeseriesPercentilesFormProperties>({
		});

	}


	/** Key defines all the dimensions that identify this record as unique. */
	export interface Key {

		/** The effective connection type is the general connection class that all users experienced for this record. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types If the effective connection type is unspecified, then aggregated data over all effective connection types will be returned. */
		effectiveConnectionType?: string | null;

		/** The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned. */
		formFactor?: HistoryKeyFormFactor | null;

		/** Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data. */
		origin?: string | null;

		/** Url specifies a specific url that this record is for. Note: When specifying a "url" only data for that specific url will be aggregated. */
		url?: string | null;
	}

	/** Key defines all the dimensions that identify this record as unique. */
	export interface KeyFormProperties {

		/** The effective connection type is the general connection class that all users experienced for this record. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types If the effective connection type is unspecified, then aggregated data over all effective connection types will be returned. */
		effectiveConnectionType: FormControl<string | null | undefined>,

		/** The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned. */
		formFactor: FormControl<HistoryKeyFormFactor | null | undefined>,

		/** Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data. */
		origin: FormControl<string | null | undefined>,

		/** Url specifies a specific url that this record is for. Note: When specifying a "url" only data for that specific url will be aggregated. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
			effectiveConnectionType: new FormControl<string | null | undefined>(undefined),
			formFactor: new FormControl<HistoryKeyFormFactor | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `metric` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`. */
	export interface Metric {

		/** For enum metrics, provides fractions which add up to approximately 1.0. */
		fractions?: {[id: string]: number };

		/** The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1. */
		histogram?: Array<Bin>;

		/** Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users. */
		percentiles?: Percentiles;
	}

	/** A `metric` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`. */
	export interface MetricFormProperties {

		/** For enum metrics, provides fractions which add up to approximately 1.0. */
		fractions: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			fractions: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users. */
	export interface Percentiles {

		/** 75% of users experienced the given metric at or below this value. */
		p75?: any;
	}

	/** Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users. */
	export interface PercentilesFormProperties {

		/** 75% of users experienced the given metric at or below this value. */
		p75: FormControl<any | null | undefined>,
	}
	export function CreatePercentilesFormGroup() {
		return new FormGroup<PercentilesFormProperties>({
			p75: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience history record. */
	export interface QueryHistoryRequest {

		/** The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned. */
		formFactor?: HistoryKeyFormFactor | null;

		/** The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"] */
		metrics?: Array<string>;

		/** The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com" */
		origin?: string | null;

		/** The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/" */
		url?: string | null;
	}

	/** Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience history record. */
	export interface QueryHistoryRequestFormProperties {

		/** The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned. */
		formFactor: FormControl<HistoryKeyFormFactor | null | undefined>,

		/** The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com" */
		origin: FormControl<string | null | undefined>,

		/** The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/" */
		url: FormControl<string | null | undefined>,
	}
	export function CreateQueryHistoryRequestFormGroup() {
		return new FormGroup<QueryHistoryRequestFormProperties>({
			formFactor: new FormControl<HistoryKeyFormFactor | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryHistoryRequest`. The returned response will have a history record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful. */
	export interface QueryHistoryResponse {

		/** HistoryRecord is a timeseries of Chrome UX Report data. It contains user experience statistics for a single url pattern and a set of dimensions. */
		record?: HistoryRecord;

		/** Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled. */
		urlNormalizationDetails?: UrlNormalization;
	}

	/** Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryHistoryRequest`. The returned response will have a history record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful. */
	export interface QueryHistoryResponseFormProperties {
	}
	export function CreateQueryHistoryResponseFormGroup() {
		return new FormGroup<QueryHistoryResponseFormProperties>({
		});

	}


	/** Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled. */
	export interface UrlNormalization {

		/** The URL after any normalization actions. This is a valid user experience URL that could reasonably be looked up. */
		normalizedUrl?: string | null;

		/** The original requested URL prior to any normalization actions. */
		originalUrl?: string | null;
	}

	/** Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled. */
	export interface UrlNormalizationFormProperties {

		/** The URL after any normalization actions. This is a valid user experience URL that could reasonably be looked up. */
		normalizedUrl: FormControl<string | null | undefined>,

		/** The original requested URL prior to any normalization actions. */
		originalUrl: FormControl<string | null | undefined>,
	}
	export function CreateUrlNormalizationFormGroup() {
		return new FormGroup<UrlNormalizationFormProperties>({
			normalizedUrl: new FormControl<string | null | undefined>(undefined),
			originalUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record. */
	export interface QueryRequest {

		/** The effective connection type is a query dimension that specifies the effective network class that the record's data should belong to. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types Note: If no effective connection type is specified, then a special record with aggregated data over all effective connection types will be returned. */
		effectiveConnectionType?: string | null;

		/** The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned. */
		formFactor?: HistoryKeyFormFactor | null;

		/** The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"] */
		metrics?: Array<string>;

		/** The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com" */
		origin?: string | null;

		/** The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/" */
		url?: string | null;
	}

	/** Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record. */
	export interface QueryRequestFormProperties {

		/** The effective connection type is a query dimension that specifies the effective network class that the record's data should belong to. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types Note: If no effective connection type is specified, then a special record with aggregated data over all effective connection types will be returned. */
		effectiveConnectionType: FormControl<string | null | undefined>,

		/** The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned. */
		formFactor: FormControl<HistoryKeyFormFactor | null | undefined>,

		/** The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com" */
		origin: FormControl<string | null | undefined>,

		/** The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/" */
		url: FormControl<string | null | undefined>,
	}
	export function CreateQueryRequestFormGroup() {
		return new FormGroup<QueryRequestFormProperties>({
			effectiveConnectionType: new FormControl<string | null | undefined>(undefined),
			formFactor: new FormControl<HistoryKeyFormFactor | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful. */
	export interface QueryResponse {

		/** Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions. */
		record?: Record;

		/** Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled. */
		urlNormalizationDetails?: UrlNormalization;
	}

	/** Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful. */
	export interface QueryResponseFormProperties {
	}
	export function CreateQueryResponseFormGroup() {
		return new FormGroup<QueryResponseFormProperties>({
		});

	}


	/** Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions. */
	export interface Record {

		/** The collection period is a date range which includes the `first` and `last` day. */
		collectionPeriod?: CollectionPeriod;

		/** Key defines all the dimensions that identify this record as unique. */
		key?: Key;

		/** Metrics is the map of user experience data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"] */
		metrics?: {[id: string]: Metric };
	}

	/** Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions. */
	export interface RecordFormProperties {

		/** Metrics is the map of user experience data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"] */
		metrics: FormControl<{[id: string]: Metric } | null | undefined>,
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
			metrics: new FormControl<{[id: string]: Metric } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.
		 * Post v1/records:queryHistoryRecord
		 * @return {QueryHistoryResponse} Successful response
		 */
		Chromeuxreport_records_queryHistoryRecord(requestBody: QueryHistoryRequest): Observable<QueryHistoryResponse> {
			return this.http.post<QueryHistoryResponse>(this.baseUri + 'v1/records:queryHistoryRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.
		 * Post v1/records:queryRecord
		 * @return {QueryResponse} Successful response
		 */
		Chromeuxreport_records_queryRecord(requestBody: QueryRequest): Observable<QueryResponse> {
			return this.http.post<QueryResponse>(this.baseUri + 'v1/records:queryRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

