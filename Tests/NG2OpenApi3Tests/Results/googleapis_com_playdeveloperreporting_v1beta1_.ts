import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1Anomaly {

		/** Combination of dimensions in which the anomaly was detected. */
		dimensions?: Array<GooglePlayDeveloperReportingV1beta1DimensionValue>;

		/** Represents the value of a metric. */
		metric?: GooglePlayDeveloperReportingV1beta1MetricValue;

		/** Metric set resource where the anomaly was detected. */
		metricSet?: string | null;

		/** Identifier. Name of the anomaly. Format: apps/{app}/anomalies/{anomaly} */
		name?: string | null;

		/** Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query. */
		timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;
	}

	/** Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1AnomalyFormProperties {

		/** Metric set resource where the anomaly was detected. */
		metricSet: FormControl<string | null | undefined>,

		/** Identifier. Name of the anomaly. Format: apps/{app}/anomalies/{anomaly} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1AnomalyFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1AnomalyFormProperties>({
			metricSet: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the value of a single dimension. */
	export interface GooglePlayDeveloperReportingV1beta1DimensionValue {

		/** Name of the dimension. */
		dimension?: string | null;

		/** Actual value, represented as an int64. */
		int64Value?: string | null;

		/** Actual value, represented as a string. */
		stringValue?: string | null;

		/** Optional. Human-friendly label for the value, always in English. For example, 'Spain' for the 'ES' country code. Whereas the dimension value is stable, this value label is subject to change. Do not assume that the (value, value_label) relationship is stable. For example, the ISO country code 'MK' changed its name recently to 'North Macedonia'. */
		valueLabel?: string | null;
	}

	/** Represents the value of a single dimension. */
	export interface GooglePlayDeveloperReportingV1beta1DimensionValueFormProperties {

		/** Name of the dimension. */
		dimension: FormControl<string | null | undefined>,

		/** Actual value, represented as an int64. */
		int64Value: FormControl<string | null | undefined>,

		/** Actual value, represented as a string. */
		stringValue: FormControl<string | null | undefined>,

		/** Optional. Human-friendly label for the value, always in English. For example, 'Spain' for the 'ES' country code. Whereas the dimension value is stable, this value label is subject to change. Do not assume that the (value, value_label) relationship is stable. For example, the ISO country code 'MK' changed its name recently to 'North Macedonia'. */
		valueLabel: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1DimensionValueFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1DimensionValueFormProperties>({
			dimension: new FormControl<string | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			valueLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the value of a metric. */
	export interface GooglePlayDeveloperReportingV1beta1MetricValue {

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		decimalValue?: GoogleTypeDecimal;

		/** Represents the confidence interval of a metric. */
		decimalValueConfidenceInterval?: GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval;

		/** Name of the metric. */
		metric?: string | null;
	}

	/** Represents the value of a metric. */
	export interface GooglePlayDeveloperReportingV1beta1MetricValueFormProperties {

		/** Name of the metric. */
		metric: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1MetricValueFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1MetricValueFormProperties>({
			metric: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
	export interface GoogleTypeDecimal {

		/** The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range. */
		value?: string | null;
	}

	/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
	export interface GoogleTypeDecimalFormProperties {

		/** The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeDecimalFormGroup() {
		return new FormGroup<GoogleTypeDecimalFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the confidence interval of a metric. */
	export interface GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval {

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		lowerBound?: GoogleTypeDecimal;

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		upperBound?: GoogleTypeDecimal;
	}

	/** Represents the confidence interval of a metric. */
	export interface GooglePlayDeveloperReportingV1beta1DecimalConfidenceIntervalFormProperties {
	}
	export function CreateGooglePlayDeveloperReportingV1beta1DecimalConfidenceIntervalFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1DecimalConfidenceIntervalFormProperties>({
		});

	}


	/** Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query. */
	export interface GooglePlayDeveloperReportingV1beta1TimelineSpec {

		/** Type of the aggregation period of the datapoints in the timeline. Intervals are identified by the date and time at the start of the interval. */
		aggregationPeriod?: GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriod | null;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		endTime?: GoogleTypeDateTime;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		startTime?: GoogleTypeDateTime;
	}

	/** Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query. */
	export interface GooglePlayDeveloperReportingV1beta1TimelineSpecFormProperties {

		/** Type of the aggregation period of the datapoints in the timeline. Intervals are identified by the date and time at the start of the interval. */
		aggregationPeriod: FormControl<GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriod | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1TimelineSpecFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1TimelineSpecFormProperties>({
			aggregationPeriod: new FormControl<GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriod | null | undefined>(undefined),
		});

	}

	export enum GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriod { AGGREGATION_PERIOD_UNSPECIFIED = 'AGGREGATION_PERIOD_UNSPECIFIED', HOURLY = 'HOURLY', DAILY = 'DAILY', FULL_RANGE = 'FULL_RANGE' }


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


	/** Singleton resource representing the set of ANR (Application not responding) metrics. This metric set contains ANRs data combined with usage data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`. **Supported metrics:** * `anrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one ANR. * `anrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `anrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedAnrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one user-perceived ANR. User-perceived ANRs are currently those of 'Input dispatching' type. * `userPerceivedAnrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedAnrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `anrRate` and `userPerceivedAnrRate` metrics. A user is counted in this metric if they used the app in the foreground during the aggregation period. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors contains unnormalized version (absolute counts) of crashes. * vitals.errors contains normalized metrics about crashes, another stability metric. */
	export interface GooglePlayDeveloperReportingV1beta1AnrRateMetricSet {

		/** Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day. */
		freshnessInfo?: GooglePlayDeveloperReportingV1beta1FreshnessInfo;

		/** Identifier. The resource name. Format: apps/{app}/anrRateMetricSet */
		name?: string | null;
	}

	/** Singleton resource representing the set of ANR (Application not responding) metrics. This metric set contains ANRs data combined with usage data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`. **Supported metrics:** * `anrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one ANR. * `anrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `anrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedAnrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one user-perceived ANR. User-perceived ANRs are currently those of 'Input dispatching' type. * `userPerceivedAnrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedAnrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `anrRate` and `userPerceivedAnrRate` metrics. A user is counted in this metric if they used the app in the foreground during the aggregation period. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors contains unnormalized version (absolute counts) of crashes. * vitals.errors contains normalized metrics about crashes, another stability metric. */
	export interface GooglePlayDeveloperReportingV1beta1AnrRateMetricSetFormProperties {

		/** Identifier. The resource name. Format: apps/{app}/anrRateMetricSet */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1AnrRateMetricSetFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1AnrRateMetricSetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day. */
	export interface GooglePlayDeveloperReportingV1beta1FreshnessInfo {

		/** Information about data freshness for every supported aggregation period. This field has set semantics, keyed by the `aggregation_period` field. */
		freshnesses?: Array<GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness>;
	}

	/** Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day. */
	export interface GooglePlayDeveloperReportingV1beta1FreshnessInfoFormProperties {
	}
	export function CreateGooglePlayDeveloperReportingV1beta1FreshnessInfoFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1FreshnessInfoFormProperties>({
		});

	}


	/** Information about data freshness for a single aggregation period. */
	export interface GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness {

		/** Aggregation period for which data is available. */
		aggregationPeriod?: GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriod | null;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		latestEndTime?: GoogleTypeDateTime;
	}

	/** Information about data freshness for a single aggregation period. */
	export interface GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessFormProperties {

		/** Aggregation period for which data is available. */
		aggregationPeriod: FormControl<GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriod | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessFormProperties>({
			aggregationPeriod: new FormControl<GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriod | null | undefined>(undefined),
		});

	}


	/** A representation of an app in the Play Store. */
	export interface GooglePlayDeveloperReportingV1beta1App {

		/** Title of the app. This is the latest title as set in the Play Console and may not yet have been reviewed, so might not match the Play Store. Example: `Google Maps`. */
		displayName?: string | null;

		/** Identifier. The resource name. Format: apps/{app} */
		name?: string | null;

		/** Package name of the app. Example: `com.example.app123`. */
		packageName?: string | null;
	}

	/** A representation of an app in the Play Store. */
	export interface GooglePlayDeveloperReportingV1beta1AppFormProperties {

		/** Title of the app. This is the latest title as set in the Play Console and may not yet have been reviewed, so might not match the Play Store. Example: `Google Maps`. */
		displayName: FormControl<string | null | undefined>,

		/** Identifier. The resource name. Format: apps/{app} */
		name: FormControl<string | null | undefined>,

		/** Package name of the app. Example: `com.example.app123`. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1AppFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1AppFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representations of an app version. */
	export interface GooglePlayDeveloperReportingV1beta1AppVersion {

		/** Numeric version code of the app version (set by the app's developer). */
		versionCode?: string | null;
	}

	/** Representations of an app version. */
	export interface GooglePlayDeveloperReportingV1beta1AppVersionFormProperties {

		/** Numeric version code of the app version (set by the app's developer). */
		versionCode: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1AppVersionFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1AppVersionFormProperties>({
			versionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Singleton resource representing the set of crashrate metrics. This metric set contains crashes data combined with usage data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`. **Supported metrics:** * `crashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash. * `crashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `crashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedCrashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash while they were actively using your app (a user-perceived crash). An app is considered to be in active use if it is displaying any activity or executing any foreground service. * `userPerceivedCrashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedCrashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `crashRate` and `userPerceivedCrashRate` metrics. A user is counted in this metric if they used the app actively during the aggregation period. An app is considered to be in active use if it is displaying any activity or executing any foreground service. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors contains unnormalized version (absolute counts) of crashes. * vitals.errors contains normalized metrics about ANRs, another stability metric. */
	export interface GooglePlayDeveloperReportingV1beta1CrashRateMetricSet {

		/** Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day. */
		freshnessInfo?: GooglePlayDeveloperReportingV1beta1FreshnessInfo;

		/** Identifier. The resource name. Format: apps/{app}/crashRateMetricSet */
		name?: string | null;
	}

	/** Singleton resource representing the set of crashrate metrics. This metric set contains crashes data combined with usage data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`. **Supported metrics:** * `crashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash. * `crashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `crashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedCrashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash while they were actively using your app (a user-perceived crash). An app is considered to be in active use if it is displaying any activity or executing any foreground service. * `userPerceivedCrashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedCrashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `crashRate` and `userPerceivedCrashRate` metrics. A user is counted in this metric if they used the app actively during the aggregation period. An app is considered to be in active use if it is displaying any activity or executing any foreground service. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors contains unnormalized version (absolute counts) of crashes. * vitals.errors contains normalized metrics about ANRs, another stability metric. */
	export interface GooglePlayDeveloperReportingV1beta1CrashRateMetricSetFormProperties {

		/** Identifier. The resource name. Format: apps/{app}/crashRateMetricSet */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1CrashRateMetricSetFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1CrashRateMetricSetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifier of a device. */
	export interface GooglePlayDeveloperReportingV1beta1DeviceId {

		/** Value of Build.BRAND. */
		buildBrand?: string | null;

		/** Value of Build.DEVICE. */
		buildDevice?: string | null;
	}

	/** Identifier of a device. */
	export interface GooglePlayDeveloperReportingV1beta1DeviceIdFormProperties {

		/** Value of Build.BRAND. */
		buildBrand: FormControl<string | null | undefined>,

		/** Value of Build.DEVICE. */
		buildDevice: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1DeviceIdFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1DeviceIdFormProperties>({
			buildBrand: new FormControl<string | null | undefined>(undefined),
			buildDevice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of a device */
	export interface GooglePlayDeveloperReportingV1beta1DeviceModelSummary {

		/** Identifier of a device. */
		deviceId?: GooglePlayDeveloperReportingV1beta1DeviceId;

		/** Link to the device in Play Device Catalog. */
		deviceUri?: string | null;

		/** Display name of the device. */
		marketingName?: string | null;
	}

	/** Summary of a device */
	export interface GooglePlayDeveloperReportingV1beta1DeviceModelSummaryFormProperties {

		/** Link to the device in Play Device Catalog. */
		deviceUri: FormControl<string | null | undefined>,

		/** Display name of the device. */
		marketingName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1DeviceModelSummaryFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1DeviceModelSummaryFormProperties>({
			deviceUri: new FormControl<string | null | undefined>(undefined),
			marketingName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Singleton resource representing the set of error report metrics. This metric set contains un-normalized error report counts. **Supported aggregation periods:** * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`. * DAILY: metrics are aggregated in calendar date intervals. The default and only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `errorReportCount` (`google.type.Decimal`): Absolute count of individual error reports that have been received for an app. * `distinctUsers` (`google.type.Decimal`): Count of distinct users for which reports have been received. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. This value is not rounded, however it may be an approximation. **Required dimension:** This dimension must be always specified in all requests in the `dimensions` field in query requests. * `reportType` (string): the type of error. The value should correspond to one of the possible values in ErrorType. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceType` (string): identifier of the device's form factor, e.g., PHONE. * `issueId` (string): the id an error was assigned to. The value should correspond to the `{issue}` component of the issue name. * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors.counts contains normalized metrics about Crashes, another stability metric. * vitals.errors.counts contains normalized metrics about ANRs, another stability metric. */
	export interface GooglePlayDeveloperReportingV1beta1ErrorCountMetricSet {

		/** Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day. */
		freshnessInfo?: GooglePlayDeveloperReportingV1beta1FreshnessInfo;

		/** The resource name. Format: apps/{app}/errorCountMetricSet */
		name?: string | null;
	}

	/** Singleton resource representing the set of error report metrics. This metric set contains un-normalized error report counts. **Supported aggregation periods:** * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`. * DAILY: metrics are aggregated in calendar date intervals. The default and only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `errorReportCount` (`google.type.Decimal`): Absolute count of individual error reports that have been received for an app. * `distinctUsers` (`google.type.Decimal`): Count of distinct users for which reports have been received. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. This value is not rounded, however it may be an approximation. **Required dimension:** This dimension must be always specified in all requests in the `dimensions` field in query requests. * `reportType` (string): the type of error. The value should correspond to one of the possible values in ErrorType. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceType` (string): identifier of the device's form factor, e.g., PHONE. * `issueId` (string): the id an error was assigned to. The value should correspond to the `{issue}` component of the issue name. * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors.counts contains normalized metrics about Crashes, another stability metric. * vitals.errors.counts contains normalized metrics about ANRs, another stability metric. */
	export interface GooglePlayDeveloperReportingV1beta1ErrorCountMetricSetFormProperties {

		/** The resource name. Format: apps/{app}/errorCountMetricSet */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1ErrorCountMetricSetFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1ErrorCountMetricSetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A group of related ErrorReports received for an app. Similar error reports are grouped together into issues with a likely identical root cause. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to different issues. This could also cause some issues disappearing entirely and being replaced by new ones. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1ErrorIssue {

		/** Cause of the issue. Depending on the type this can be either: * APPLICATION_NOT_RESPONDING: the type of ANR that occurred, e.g., 'Input dispatching timed out'. * CRASH: for Java unhandled exception errors, the type of the innermost exception that was thrown, e.g., IllegalArgumentException. For signals in native code, the signal that was raised, e.g. SIGSEGV. */
		cause?: string | null;

		/** An estimate of the number of unique users who have experienced this issue (only considering occurrences matching the filters and within the requested time period). */
		distinctUsers?: string | null;

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		distinctUsersPercent?: GoogleTypeDecimal;

		/** The total number of error reports in this issue (only considering occurrences matching the filters and within the requested time period). */
		errorReportCount?: string | null;

		/** Representations of an app version. */
		firstAppVersion?: GooglePlayDeveloperReportingV1beta1AppVersion;

		/** Representation of an OS version. */
		firstOsVersion?: GooglePlayDeveloperReportingV1beta1OsVersion;

		/** Link to the issue in Android vitals in the Play Console. */
		issueUri?: string | null;

		/** Representations of an app version. */
		lastAppVersion?: GooglePlayDeveloperReportingV1beta1AppVersion;

		/** Start of the hour during which the last error report in this issue occurred. */
		lastErrorReportTime?: string | null;

		/** Representation of an OS version. */
		lastOsVersion?: GooglePlayDeveloperReportingV1beta1OsVersion;

		/** Location where the issue happened. Depending on the type this can be either: * APPLICATION_NOT_RESPONDING: the name of the activity or service that stopped responding. * CRASH: the likely method name that caused the error. */
		location?: string | null;

		/** Identifier. The resource name of the issue. Format: apps/{app}/errorIssues/{issue} */
		name?: string | null;

		/** Type of the errors grouped in this issue. */
		type?: GooglePlayDeveloperReportingV1beta1ErrorIssueType | null;
	}

	/** A group of related ErrorReports received for an app. Similar error reports are grouped together into issues with a likely identical root cause. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to different issues. This could also cause some issues disappearing entirely and being replaced by new ones. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1ErrorIssueFormProperties {

		/** Cause of the issue. Depending on the type this can be either: * APPLICATION_NOT_RESPONDING: the type of ANR that occurred, e.g., 'Input dispatching timed out'. * CRASH: for Java unhandled exception errors, the type of the innermost exception that was thrown, e.g., IllegalArgumentException. For signals in native code, the signal that was raised, e.g. SIGSEGV. */
		cause: FormControl<string | null | undefined>,

		/** An estimate of the number of unique users who have experienced this issue (only considering occurrences matching the filters and within the requested time period). */
		distinctUsers: FormControl<string | null | undefined>,

		/** The total number of error reports in this issue (only considering occurrences matching the filters and within the requested time period). */
		errorReportCount: FormControl<string | null | undefined>,

		/** Link to the issue in Android vitals in the Play Console. */
		issueUri: FormControl<string | null | undefined>,

		/** Start of the hour during which the last error report in this issue occurred. */
		lastErrorReportTime: FormControl<string | null | undefined>,

		/** Location where the issue happened. Depending on the type this can be either: * APPLICATION_NOT_RESPONDING: the name of the activity or service that stopped responding. * CRASH: the likely method name that caused the error. */
		location: FormControl<string | null | undefined>,

		/** Identifier. The resource name of the issue. Format: apps/{app}/errorIssues/{issue} */
		name: FormControl<string | null | undefined>,

		/** Type of the errors grouped in this issue. */
		type: FormControl<GooglePlayDeveloperReportingV1beta1ErrorIssueType | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1ErrorIssueFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1ErrorIssueFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
			distinctUsers: new FormControl<string | null | undefined>(undefined),
			errorReportCount: new FormControl<string | null | undefined>(undefined),
			issueUri: new FormControl<string | null | undefined>(undefined),
			lastErrorReportTime: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GooglePlayDeveloperReportingV1beta1ErrorIssueType | null | undefined>(undefined),
		});

	}


	/** Representation of an OS version. */
	export interface GooglePlayDeveloperReportingV1beta1OsVersion {

		/** Numeric version code of the OS - API level */
		apiLevel?: string | null;
	}

	/** Representation of an OS version. */
	export interface GooglePlayDeveloperReportingV1beta1OsVersionFormProperties {

		/** Numeric version code of the OS - API level */
		apiLevel: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1OsVersionFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1OsVersionFormProperties>({
			apiLevel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePlayDeveloperReportingV1beta1ErrorIssueType { ERROR_TYPE_UNSPECIFIED = 'ERROR_TYPE_UNSPECIFIED', APPLICATION_NOT_RESPONDING = 'APPLICATION_NOT_RESPONDING', CRASH = 'CRASH' }


	/** An error report received for an app. There reports are produced by the Android platform code when a (potentially fatal) error condition is detected. Identical reports from many users will be deduplicated and coalesced into a single ErrorReport. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1ErrorReport {

		/** Representations of an app version. */
		appVersion?: GooglePlayDeveloperReportingV1beta1AppVersion;

		/** Summary of a device */
		deviceModel?: GooglePlayDeveloperReportingV1beta1DeviceModelSummary;

		/** Start of the hour during which the latest event in this error report occurred. */
		eventTime?: string | null;

		/** The issue this report was associated with. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to a different issue. */
		issue?: string | null;

		/** The resource name of the report. Format: apps/{app}/errorReports/{report} */
		name?: string | null;

		/** Representation of an OS version. */
		osVersion?: GooglePlayDeveloperReportingV1beta1OsVersion;

		/** Textual representation of the error report. These textual reports are produced by the platform. The reports are then sanitized and filtered to remove any potentially sensitive information. Although their format is fairly stable, they are not entirely meant for machine consumption and we cannot guarantee that there won't be subtle changes to the formatting that may break systems trying to parse information out of the reports. */
		reportText?: string | null;

		/** Type of the error for which this report was generated. */
		type?: GooglePlayDeveloperReportingV1beta1ErrorIssueType | null;

		/** Version control system information from BUNDLE-METADATA/version-control-info.textproto or META-INF/version-control-info.textproto of the app bundle or APK, respectively. */
		vcsInformation?: string | null;
	}

	/** An error report received for an app. There reports are produced by the Android platform code when a (potentially fatal) error condition is detected. Identical reports from many users will be deduplicated and coalesced into a single ErrorReport. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1ErrorReportFormProperties {

		/** Start of the hour during which the latest event in this error report occurred. */
		eventTime: FormControl<string | null | undefined>,

		/** The issue this report was associated with. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to a different issue. */
		issue: FormControl<string | null | undefined>,

		/** The resource name of the report. Format: apps/{app}/errorReports/{report} */
		name: FormControl<string | null | undefined>,

		/** Textual representation of the error report. These textual reports are produced by the platform. The reports are then sanitized and filtered to remove any potentially sensitive information. Although their format is fairly stable, they are not entirely meant for machine consumption and we cannot guarantee that there won't be subtle changes to the formatting that may break systems trying to parse information out of the reports. */
		reportText: FormControl<string | null | undefined>,

		/** Type of the error for which this report was generated. */
		type: FormControl<GooglePlayDeveloperReportingV1beta1ErrorIssueType | null | undefined>,

		/** Version control system information from BUNDLE-METADATA/version-control-info.textproto or META-INF/version-control-info.textproto of the app bundle or APK, respectively. */
		vcsInformation: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1ErrorReportFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1ErrorReportFormProperties>({
			eventTime: new FormControl<string | null | undefined>(undefined),
			issue: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reportText: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GooglePlayDeveloperReportingV1beta1ErrorIssueType | null | undefined>(undefined),
			vcsInformation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Singleton resource representing the set of Excessive Weakeups metrics. This metric set contains AlarmManager wakeup counts data combined with process state data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `excessiveWakeupRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had more than 10 wakeups per hour. * `excessiveWakeupRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `excessiveWakeupRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `excessiveWakeupRate` metric. A user is counted in this metric if they app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSet {

		/** Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day. */
		freshnessInfo?: GooglePlayDeveloperReportingV1beta1FreshnessInfo;

		/** Identifier. The resource name. Format: apps/{app}/excessiveWakeupRateMetricSet */
		name?: string | null;
	}

	/** Singleton resource representing the set of Excessive Weakeups metrics. This metric set contains AlarmManager wakeup counts data combined with process state data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `excessiveWakeupRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had more than 10 wakeups per hour. * `excessiveWakeupRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `excessiveWakeupRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `excessiveWakeupRate` metric. A user is counted in this metric if they app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSetFormProperties {

		/** Identifier. The resource name. Format: apps/{app}/excessiveWakeupRateMetricSet */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSetFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1ExcessiveWakeupRateMetricSetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response with a list of anomalies in datasets. */
	export interface GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse {

		/** Anomalies that were found. */
		anomalies?: Array<GooglePlayDeveloperReportingV1beta1Anomaly>;

		/** Continuation token to fetch the next page of data. */
		nextPageToken?: string | null;
	}

	/** Response with a list of anomalies in datasets. */
	export interface GooglePlayDeveloperReportingV1beta1ListAnomaliesResponseFormProperties {

		/** Continuation token to fetch the next page of data. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1ListAnomaliesResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1ListAnomaliesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a row of dimensions and metrics. */
	export interface GooglePlayDeveloperReportingV1beta1MetricsRow {

		/** Granularity of the aggregation period of the row. */
		aggregationPeriod?: GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriod | null;

		/** Dimension columns in the row. */
		dimensions?: Array<GooglePlayDeveloperReportingV1beta1DimensionValue>;

		/** Metric columns in the row. */
		metrics?: Array<GooglePlayDeveloperReportingV1beta1MetricValue>;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		startTime?: GoogleTypeDateTime;
	}

	/** Represents a row of dimensions and metrics. */
	export interface GooglePlayDeveloperReportingV1beta1MetricsRowFormProperties {

		/** Granularity of the aggregation period of the row. */
		aggregationPeriod: FormControl<GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriod | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1MetricsRowFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1MetricsRowFormProperties>({
			aggregationPeriod: new FormControl<GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriod | null | undefined>(undefined),
		});

	}


	/** Request message for QueryAnrRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequest {

		/** Dimensions to slice the metrics by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. */
		dimensions?: Array<string>;

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter?: string | null;

		/** Metrics to aggregate. **Supported metrics:** * `anrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one ANR. * `anrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `anrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `anrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedAnrRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one user-perceived ANR. User-perceived ANRs are currently those of 'Input dispatching' type. * `userPerceivedAnrRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedAnrRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedAnrRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not . supported in HOURLY granularity. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `anrRate` and `userPerceivedAnrRate` metrics. A user is counted in this metric if they used the app in the foreground during the aggregation period. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. */
		metrics?: Array<string>;

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100,000; values above 100,000 will be coerced to 100,000. */
		pageSize?: number | null;

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken?: string | null;

		/** Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query. */
		timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort?: GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null;
	}

	/** Request message for QueryAnrRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestFormProperties {

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter: FormControl<string | null | undefined>,

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100,000; values above 100,000 will be coerced to 100,000. */
		pageSize: FormControl<number | null | undefined>,

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort: FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			userCohort: new FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>(undefined),
		});

	}

	export enum GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort { USER_COHORT_UNSPECIFIED = 'USER_COHORT_UNSPECIFIED', OS_PUBLIC = 'OS_PUBLIC', OS_BETA = 'OS_BETA', APP_TESTERS = 'APP_TESTERS' }


	/** Response message for QueryAnrRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponse {

		/** Continuation token to fetch the next page of data. */
		nextPageToken?: string | null;

		/** Returned rows of data. */
		rows?: Array<GooglePlayDeveloperReportingV1beta1MetricsRow>;
	}

	/** Response message for QueryAnrRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponseFormProperties {

		/** Continuation token to fetch the next page of data. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for QueryCrashRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetRequest {

		/** Dimensions to slice the metrics by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. */
		dimensions?: Array<string>;

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter?: string | null;

		/** Metrics to aggregate. **Supported metrics:** * `crashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash. * `crashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `crashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `crashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedCrashRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that experienced at least one crash while they were actively using your app (a user-perceived crash). An app is considered to be in active use if it is displaying any activity or executing any foreground service. * `userPerceivedCrashRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `userPerceivedCrashRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `userPerceivedCrashRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. Not supported in HOURLY granularity. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `crashRate` and `userPerceivedCrashRate` metrics. A user is counted in this metric if they used the app actively during the aggregation period. An app is considered to be in active use if it is displaying any activity or executing any foreground service. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. */
		metrics?: Array<string>;

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100,000; values above 100,000 will be coerced to 100,000. */
		pageSize?: number | null;

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken?: string | null;

		/** Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query. */
		timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort?: GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null;
	}

	/** Request message for QueryCrashRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetRequestFormProperties {

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter: FormControl<string | null | undefined>,

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100,000; values above 100,000 will be coerced to 100,000. */
		pageSize: FormControl<number | null | undefined>,

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort: FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetRequestFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			userCohort: new FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>(undefined),
		});

	}


	/** Response message for QueryCrashRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponse {

		/** Continuation token to fetch the next page of data. */
		nextPageToken?: string | null;

		/** Returned rows of data. */
		rows?: Array<GooglePlayDeveloperReportingV1beta1MetricsRow>;
	}

	/** Response message for QueryCrashRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponseFormProperties {

		/** Continuation token to fetch the next page of data. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QueryCrashRateMetricSetResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for QueryErrorCountMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequest {

		/** Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceModel` (string): unique identifier of the user's device model. * `deviceType` (string): identifier of the device's form factor, e.g., PHONE. * `reportType` (string): the type of error. The value should correspond to one of the possible values in ErrorType. * `isUserPerceived` (string): denotes whether error is user perceived or not, USER_PERCEIVED or NOT_USER_PERCEIVED. * `issueId` (string): the id an error was assigned to. The value should correspond to the `{issue}` component of the issue name. * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. */
		dimensions?: Array<string>;

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter?: string | null;

		/** Metrics to aggregate. **Supported metrics:** * `errorReportCount` (`google.type.Decimal`): Absolute count of individual error reports that have been received for an app. * `distinctUsers` (`google.type.Decimal`): Count of distinct users for which reports have been received. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. This value is not rounded, however it may be an approximation. */
		metrics?: Array<string>;

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. */
		pageSize?: number | null;

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken?: string | null;

		/** Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query. */
		timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;
	}

	/** Request message for QueryErrorCountMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequestFormProperties {

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter: FormControl<string | null | undefined>,

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. */
		pageSize: FormControl<number | null | undefined>,

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequestFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error counts query response. */
	export interface GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetResponse {

		/** Continuation token to fetch the next page of data. */
		nextPageToken?: string | null;

		/** Returned rows. */
		rows?: Array<GooglePlayDeveloperReportingV1beta1MetricsRow>;
	}

	/** Error counts query response. */
	export interface GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetResponseFormProperties {

		/** Continuation token to fetch the next page of data. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for QueryExcessiveWakeupRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetRequest {

		/** Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. */
		dimensions?: Array<string>;

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter?: string | null;

		/** Metrics to aggregate. **Supported metrics:** * `excessiveWakeupRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had more than 10 wakeups per hour. * `excessiveWakeupRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `excessiveWakeupRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `excessiveWakeupRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `excessiveWakeupRate` metric. A user is counted in this metric if they app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. */
		metrics?: Array<string>;

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. */
		pageSize?: number | null;

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken?: string | null;

		/** Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query. */
		timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort?: GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null;
	}

	/** Request message for QueryExcessiveWakeupRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetRequestFormProperties {

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter: FormControl<string | null | undefined>,

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. */
		pageSize: FormControl<number | null | undefined>,

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort: FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetRequestFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			userCohort: new FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>(undefined),
		});

	}


	/** Response message for QueryExcessiveWakeupRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponse {

		/** Continuation token to fetch the next page of data. */
		nextPageToken?: string | null;

		/** Returned rows of data. */
		rows?: Array<GooglePlayDeveloperReportingV1beta1MetricsRow>;
	}

	/** Response message for QueryExcessiveWakeupRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponseFormProperties {

		/** Continuation token to fetch the next page of data. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QueryExcessiveWakeupRateMetricSetResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for QuerySlowRenderingRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QuerySlowRenderingRateMetricSetRequest {

		/** Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. */
		dimensions?: Array<string>;

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter?: string | null;

		/** Metrics to aggregate. **Supported metrics:** * `slowRenderingRate20Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a slow rendering. * `slowRenderingRate20Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate20Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a slow rendering. * `slowRenderingRate30Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowRenderingRate20Fps`/`slowRenderingRate30Fps` metric. A user is counted in this metric if their app was launched in the device. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. */
		metrics?: Array<string>;

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. */
		pageSize?: number | null;

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken?: string | null;

		/** Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query. */
		timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta Android versions only, excluding data from released Android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort?: GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null;
	}

	/** Request message for QuerySlowRenderingRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QuerySlowRenderingRateMetricSetRequestFormProperties {

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter: FormControl<string | null | undefined>,

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. */
		pageSize: FormControl<number | null | undefined>,

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta Android versions only, excluding data from released Android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort: FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QuerySlowRenderingRateMetricSetRequestFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QuerySlowRenderingRateMetricSetRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			userCohort: new FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>(undefined),
		});

	}


	/** Response message for QuerySlowRenderingRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QuerySlowRenderingRateMetricSetResponse {

		/** Continuation token to fetch the next page of data. */
		nextPageToken?: string | null;

		/** Returned rows of data. */
		rows?: Array<GooglePlayDeveloperReportingV1beta1MetricsRow>;
	}

	/** Response message for QuerySlowRenderingRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QuerySlowRenderingRateMetricSetResponseFormProperties {

		/** Continuation token to fetch the next page of data. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QuerySlowRenderingRateMetricSetResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QuerySlowRenderingRateMetricSetResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for QuerySlowStartRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QuerySlowStartRateMetricSetRequest {

		/** Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. */
		dimensions?: Array<string>;

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter?: string | null;

		/** Metrics to aggregate. **Supported metrics:** * `slowStartRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a slow start. * `slowStartRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowStartRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowStartRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowStartRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowStartRate` metric. A user is counted in this metric if their app was launched in the device. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. */
		metrics?: Array<string>;

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. */
		pageSize?: number | null;

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken?: string | null;

		/** Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query. */
		timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta Android versions only, excluding data from released Android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort?: GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null;
	}

	/** Request message for QuerySlowStartRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QuerySlowStartRateMetricSetRequestFormProperties {

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter: FormControl<string | null | undefined>,

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. */
		pageSize: FormControl<number | null | undefined>,

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta Android versions only, excluding data from released Android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort: FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QuerySlowStartRateMetricSetRequestFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QuerySlowStartRateMetricSetRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			userCohort: new FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>(undefined),
		});

	}


	/** Response message for QuerySlowStartRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QuerySlowStartRateMetricSetResponse {

		/** Continuation token to fetch the next page of data. */
		nextPageToken?: string | null;

		/** Returned rows of data. */
		rows?: Array<GooglePlayDeveloperReportingV1beta1MetricsRow>;
	}

	/** Response message for QuerySlowStartRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QuerySlowStartRateMetricSetResponseFormProperties {

		/** Continuation token to fetch the next page of data. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QuerySlowStartRateMetricSetResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QuerySlowStartRateMetricSetResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for QueryStuckBackgroundWakelockRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest {

		/** Dimensions to slice the data by. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. */
		dimensions?: Array<string>;

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter?: string | null;

		/** Metrics to aggregate. **Supported metrics:** * `stuckBgWakelockRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a wakelock held in the background for longer than 1 hour. * `stuckBgWakelockRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `stuckBgWakelockRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `stuckBgWakelockRate` metric. A user is counted in this metric if they app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. */
		metrics?: Array<string>;

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. */
		pageSize?: number | null;

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken?: string | null;

		/** Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query. */
		timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort?: GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null;
	}

	/** Request message for QueryStuckBackgroundWakelockRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequestFormProperties {

		/** Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. */
		filter: FormControl<string | null | undefined>,

		/** Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. */
		pageSize: FormControl<number | null | undefined>,

		/** A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,

		/** User view to select. The output data will correspond to the selected view. **Supported values:** * `OS_PUBLIC` To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * `APP_TESTERS` To select data from users who have opted in to be testers. Supports all the above dimensions. * `OS_BETA` To select data from beta android versions only, excluding data from released android versions. Only the following dimensions are supported: * `versionCode` (int64): version of the app that was running on the user's device. * `osBuild` (string): OS build of the user's device, e.g., "T1B2.220916.004". */
		userCohort: FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequestFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			userCohort: new FormControl<GooglePlayDeveloperReportingV1beta1QueryAnrRateMetricSetRequestUserCohort | null | undefined>(undefined),
		});

	}


	/** Response message for QueryStuckBackgroundWakelockRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse {

		/** Continuation token to fetch the next page of data. */
		nextPageToken?: string | null;

		/** Returned rows of data. */
		rows?: Array<GooglePlayDeveloperReportingV1beta1MetricsRow>;
	}

	/** Response message for QueryStuckBackgroundWakelockRateMetricSet. */
	export interface GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponseFormProperties {

		/** Continuation token to fetch the next page of data. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of an app release. */
	export interface GooglePlayDeveloperReportingV1beta1Release {

		/** Readable identifier of the release. */
		displayName?: string | null;

		/** The version codes contained in this release. */
		versionCodes?: Array<string>;
	}

	/** A representation of an app release. */
	export interface GooglePlayDeveloperReportingV1beta1ReleaseFormProperties {

		/** Readable identifier of the release. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1ReleaseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1ReleaseFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of filtering options for releases and version codes specific to an app. */
	export interface GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions {

		/** List of tracks to filter releases over. Provides the grouping of version codes under releases and tracks. */
		tracks?: Array<GooglePlayDeveloperReportingV1beta1Track>;
	}

	/** A set of filtering options for releases and version codes specific to an app. */
	export interface GooglePlayDeveloperReportingV1beta1ReleaseFilterOptionsFormProperties {
	}
	export function CreateGooglePlayDeveloperReportingV1beta1ReleaseFilterOptionsFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1ReleaseFilterOptionsFormProperties>({
		});

	}


	/** A representation of a Play release track. */
	export interface GooglePlayDeveloperReportingV1beta1Track {

		/** Readable identifier of the track. */
		displayName?: string | null;

		/** Represents all active releases in the track. */
		servingReleases?: Array<GooglePlayDeveloperReportingV1beta1Release>;

		/** The type of the track. */
		type?: string | null;
	}

	/** A representation of a Play release track. */
	export interface GooglePlayDeveloperReportingV1beta1TrackFormProperties {

		/** Readable identifier of the track. */
		displayName: FormControl<string | null | undefined>,

		/** The type of the track. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1TrackFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1TrackFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SearchAccessibleApps. */
	export interface GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse {

		/** The apps accessible to the user calling the endpoint. */
		apps?: Array<GooglePlayDeveloperReportingV1beta1App>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for SearchAccessibleApps. */
	export interface GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response with a paginated list of issues that matched the request. */
	export interface GooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponse {

		/** ErrorIssues that were found. */
		errorIssues?: Array<GooglePlayDeveloperReportingV1beta1ErrorIssue>;

		/** Continuation token to fetch the next page of data. */
		nextPageToken?: string | null;
	}

	/** Response with a paginated list of issues that matched the request. */
	export interface GooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponseFormProperties {

		/** Continuation token to fetch the next page of data. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response with a paginated list of error reports matching the search query. */
	export interface GooglePlayDeveloperReportingV1beta1SearchErrorReportsResponse {

		/** Error reports that were found. */
		errorReports?: Array<GooglePlayDeveloperReportingV1beta1ErrorReport>;

		/** Page token to fetch the next page of reports. */
		nextPageToken?: string | null;
	}

	/** Response with a paginated list of error reports matching the search query. */
	export interface GooglePlayDeveloperReportingV1beta1SearchErrorReportsResponseFormProperties {

		/** Page token to fetch the next page of reports. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1SearchErrorReportsResponseFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1SearchErrorReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Singleton resource representing the set of Slow Rendering metrics. This metric set contains low-level rendering data captured by SurafeFlinger. Sessions are evaluated based on the present-to-present histogram of frames handled by any SurfaceFlinger layer owned by the app. A slow session is a session where more than 25% of frames for the session did not meet the metric's target frame rate (either 20fps, or 30fps). *NOTE:* This metric set is only available for games. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `slowRenderingRate20Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had slow rendering. * `slowRenderingRate20Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate20Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had slow rendering. * `slowRenderingRate30Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowRenderingRate20Fps`/`slowRenderingRate30Fps` metric. A user is counted in this metric if their app rendered any frames. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1SlowRenderingRateMetricSet {

		/** Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day. */
		freshnessInfo?: GooglePlayDeveloperReportingV1beta1FreshnessInfo;

		/** Identifier. The resource name. Format: apps/{app}/slowRenderingRateMetricSet */
		name?: string | null;
	}

	/** Singleton resource representing the set of Slow Rendering metrics. This metric set contains low-level rendering data captured by SurafeFlinger. Sessions are evaluated based on the present-to-present histogram of frames handled by any SurfaceFlinger layer owned by the app. A slow session is a session where more than 25% of frames for the session did not meet the metric's target frame rate (either 20fps, or 30fps). *NOTE:* This metric set is only available for games. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `slowRenderingRate20Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had slow rendering. * `slowRenderingRate20Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate20Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had slow rendering. * `slowRenderingRate30Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowRenderingRate20Fps`/`slowRenderingRate30Fps` metric. A user is counted in this metric if their app rendered any frames. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1SlowRenderingRateMetricSetFormProperties {

		/** Identifier. The resource name. Format: apps/{app}/slowRenderingRateMetricSet */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1SlowRenderingRateMetricSetFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1SlowRenderingRateMetricSetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Singleton resource representing the set of Slow Start metrics. This metric set contains Activity start duration data. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `slowStartRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a slow start. * `slowStartRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowStartRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowStartRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowStartRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowStartRate` metric. A user is counted in this metric if their app was launched in the device. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Required dimension:** This dimension must be specified with each request for the request to be valid. * `startType` (string): the type of start that was measured. Valid types are `HOT`, `WARM` and `COLD`. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1SlowStartRateMetricSet {

		/** Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day. */
		freshnessInfo?: GooglePlayDeveloperReportingV1beta1FreshnessInfo;

		/** Identifier. The resource name. Format: apps/{app}/slowStartRateMetricSet */
		name?: string | null;
	}

	/** Singleton resource representing the set of Slow Start metrics. This metric set contains Activity start duration data. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `slowStartRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a slow start. * `slowStartRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowStartRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowStartRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowStartRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowStartRate` metric. A user is counted in this metric if their app was launched in the device. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Required dimension:** This dimension must be specified with each request for the request to be valid. * `startType` (string): the type of start that was measured. Valid types are `HOT`, `WARM` and `COLD`. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1SlowStartRateMetricSetFormProperties {

		/** Identifier. The resource name. Format: apps/{app}/slowStartRateMetricSet */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1SlowStartRateMetricSetFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1SlowStartRateMetricSetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Singleton resource representing the set of Stuck Background Wakelocks metrics. This metric set contains PowerManager wakelock duration data combined with process state data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `stuckBgWakelockRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a wakelock held in the background for longer than 1 hour. * `stuckBgWakelockRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `stuckBgWakelockRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `stuckBgWakelockRate` metric. A user is counted in this metric if their app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet {

		/** Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day. */
		freshnessInfo?: GooglePlayDeveloperReportingV1beta1FreshnessInfo;

		/** Identifier. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet */
		name?: string | null;
	}

	/** Singleton resource representing the set of Stuck Background Wakelocks metrics. This metric set contains PowerManager wakelock duration data combined with process state data to produce a normalized metric independent of user counts. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `stuckBgWakelockRate` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had a wakelock held in the background for longer than 1 hour. * `stuckBgWakelockRate7dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `stuckBgWakelockRate28dUserWeighted` (`google.type.Decimal`): Rolling average value of `stuckBgWakelockRate` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `stuckBgWakelockRate` metric. A user is counted in this metric if their app was doing any work on the device, i.e., not just active foreground usage but also background work. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., "Exynos 2100". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., "Kryo 240". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., "4198400". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., "196610". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. */
	export interface GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSetFormProperties {

		/** Identifier. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSetFormGroup() {
		return new FormGroup<GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Searches for Apps accessible by the user.
		 * Get v1beta1/apps:search
		 * @param {number} pageSize The maximum number of apps to return. The service may return fewer than this value. If unspecified, at most 50 apps will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `SearchAccessibleApps` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchAccessibleApps` must match the call that provided the page token.
		 * @return {GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse} Successful response
		 */
		Playdeveloperreporting_apps_search(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse> {
			return this.http.get<GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse>(this.baseUri + 'v1beta1/apps:search?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Describes the properties of the metric set.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet
		 * @return {GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet} Successful response
		 */
		Playdeveloperreporting_vitals_stuckbackgroundwakelockrate_get(name: string): Observable<GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet> {
			return this.http.get<GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Describes filtering options for releases.
		 * Get v1beta1/{name}:fetchReleaseFilterOptions
		 * @param {string} name Required. Name of the resource, i.e. app the filtering options are for. Format: apps/{app}
		 * @return {GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions} Successful response
		 */
		Playdeveloperreporting_apps_fetchReleaseFilterOptions(name: string): Observable<GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions> {
			return this.http.get<GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':fetchReleaseFilterOptions', {});
		}

		/**
		 * Queries the metrics in the metric set.
		 * Post v1beta1/{name}:query
		 * @param {string} name Required. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet
		 * @return {GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse} Successful response
		 */
		Playdeveloperreporting_vitals_stuckbackgroundwakelockrate_query(name: string, requestBody: GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest): Observable<GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse> {
			return this.http.post<GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists anomalies in any of the datasets.
		 * Get v1beta1/{parent}/anomalies
		 * @param {string} parent Required. Parent app for which anomalies were detected. Format: apps/{app}
		 * @param {string} filter Filtering criteria for anomalies. For basic filter guidance, please check: https://google.aip.dev/160. **Supported functions:** * `activeBetween(startTime, endTime)`: If specified, only list anomalies that were active in between `startTime` (inclusive) and `endTime` (exclusive). Both parameters are expected to conform to an RFC-3339 formatted string (e.g. `2012-04-21T11:30:00-04:00`). UTC offsets are supported. Both `startTime` and `endTime` accept the special value `UNBOUNDED`, to signify intervals with no lower or upper bound, respectively. Examples: * `activeBetween("2021-04-21T11:30:00Z", "2021-07-21T00:00:00Z")` * `activeBetween(UNBOUNDED, "2021-11-21T00:00:00-04:00")` * `activeBetween("2021-07-21T00:00:00-04:00", UNBOUNDED)`
		 * @param {number} pageSize Maximum size of the returned data. If unspecified, at most 10 anomalies will be returned. The maximum value is 100; values above 100 will be coerced to 100.
		 * @param {string} pageToken A page token, received from a previous `ListErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListErrorReports` must match the call that provided the page token.
		 * @return {GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse} Successful response
		 */
		Playdeveloperreporting_anomalies_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse> {
			return this.http.get<GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/anomalies&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Searches all error issues in which reports have been grouped.
		 * Get v1beta1/{parent}/errorIssues:search
		 * @param {string} parent Required. Parent resource of the error issues, indicating the application for which they were received. Format: apps/{app}
		 * @param {string} filter A selection predicate to retrieve only a subset of the issues. Counts in the returned error issues will only reflect occurrences that matched the filter. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error issues that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error issues that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = "google/walleye" OR deviceModel = "google/marlin"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = "Google". * `deviceType`: Matches error issues that occurred in the requested device types. Example: `deviceType = "PHONE"`. * `errorIssueType`: Matches error issues of the requested types only. Valid candidates: `CRASH`, `ANR`. Example: `errorIssueType = CRASH OR errorIssueType = ANR`. * `appProcessState`: Matches error issues on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error issues that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR errorIssueType = ANR` is not a valid filter. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)`
		 * @param {number} interval_endTime_day Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
		 * @param {number} interval_endTime_hours Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * @param {number} interval_endTime_minutes Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
		 * @param {number} interval_endTime_month Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
		 * @param {number} interval_endTime_nanos Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
		 * @param {number} interval_endTime_seconds Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
		 * @param {string} interval_endTime_timeZone_id IANA Time Zone Database time zone, e.g. "America/New_York".
		 * @param {string} interval_endTime_timeZone_version Optional. IANA Time Zone Database version number, e.g. "2019a".
		 * @param {string} interval_endTime_utcOffset UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
		 * @param {number} interval_endTime_year Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
		 * @param {number} interval_startTime_day Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
		 * @param {number} interval_startTime_hours Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * @param {number} interval_startTime_minutes Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
		 * @param {number} interval_startTime_month Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
		 * @param {number} interval_startTime_nanos Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
		 * @param {number} interval_startTime_seconds Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
		 * @param {string} interval_startTime_timeZone_id IANA Time Zone Database time zone, e.g. "America/New_York".
		 * @param {string} interval_startTime_timeZone_version Optional. IANA Time Zone Database version number, e.g. "2019a".
		 * @param {string} interval_startTime_utcOffset UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
		 * @param {number} interval_startTime_year Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
		 * @param {string} orderBy Specifies a field that will be used to order the results. ** Supported dimensions:** * `errorReportCount`: Orders issues by number of error reports. * `distinctUsers`: Orders issues by number of unique affected users. ** Supported operations:** * `asc` for ascending order. * `desc` for descending order. Format: A field and an operation, e.g., `errorReportCount desc` *Note:* currently only one field is supported at a time.
		 * @param {number} pageSize The maximum number of error issues to return. The service may return fewer than this value. If unspecified, at most 50 error issues will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
		 * @return {GooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponse} Successful response
		 */
		Playdeveloperreporting_vitals_errors_issues_search(parent: string, filter: string | null | undefined, interval_endTime_day: number | null | undefined, interval_endTime_hours: number | null | undefined, interval_endTime_minutes: number | null | undefined, interval_endTime_month: number | null | undefined, interval_endTime_nanos: number | null | undefined, interval_endTime_seconds: number | null | undefined, interval_endTime_timeZone_id: string | null | undefined, interval_endTime_timeZone_version: string | null | undefined, interval_endTime_utcOffset: string | null | undefined, interval_endTime_year: number | null | undefined, interval_startTime_day: number | null | undefined, interval_startTime_hours: number | null | undefined, interval_startTime_minutes: number | null | undefined, interval_startTime_month: number | null | undefined, interval_startTime_nanos: number | null | undefined, interval_startTime_seconds: number | null | undefined, interval_startTime_timeZone_id: string | null | undefined, interval_startTime_timeZone_version: string | null | undefined, interval_startTime_utcOffset: string | null | undefined, interval_startTime_year: number | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponse> {
			return this.http.get<GooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/errorIssues:search&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&interval_endTime_day=' + interval_endTime_day + '&interval_endTime_hours=' + interval_endTime_hours + '&interval_endTime_minutes=' + interval_endTime_minutes + '&interval_endTime_month=' + interval_endTime_month + '&interval_endTime_nanos=' + interval_endTime_nanos + '&interval_endTime_seconds=' + interval_endTime_seconds + '&interval_endTime_timeZone_id=' + (interval_endTime_timeZone_id == null ? '' : encodeURIComponent(interval_endTime_timeZone_id)) + '&interval_endTime_timeZone_version=' + (interval_endTime_timeZone_version == null ? '' : encodeURIComponent(interval_endTime_timeZone_version)) + '&interval_endTime_utcOffset=' + (interval_endTime_utcOffset == null ? '' : encodeURIComponent(interval_endTime_utcOffset)) + '&interval_endTime_year=' + interval_endTime_year + '&interval_startTime_day=' + interval_startTime_day + '&interval_startTime_hours=' + interval_startTime_hours + '&interval_startTime_minutes=' + interval_startTime_minutes + '&interval_startTime_month=' + interval_startTime_month + '&interval_startTime_nanos=' + interval_startTime_nanos + '&interval_startTime_seconds=' + interval_startTime_seconds + '&interval_startTime_timeZone_id=' + (interval_startTime_timeZone_id == null ? '' : encodeURIComponent(interval_startTime_timeZone_id)) + '&interval_startTime_timeZone_version=' + (interval_startTime_timeZone_version == null ? '' : encodeURIComponent(interval_startTime_timeZone_version)) + '&interval_startTime_utcOffset=' + (interval_startTime_utcOffset == null ? '' : encodeURIComponent(interval_startTime_utcOffset)) + '&interval_startTime_year=' + interval_startTime_year + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Searches all error reports received for an app.
		 * Get v1beta1/{parent}/errorReports:search
		 * @param {string} parent Required. Parent resource of the reports, indicating the application for which they were received. Format: apps/{app}
		 * @param {string} filter A selection predicate to retrieve only a subset of the reports. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error reports that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error reports that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = "google/walleye" OR deviceModel = "google/marlin"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = "Google". * `deviceType`: Matches error reports that occurred in the requested device types. Example: `deviceType = "PHONE"`. * `errorIssueType`: Matches error reports of the requested types only. Valid candidates: `JAVA_CRASH`, `NATIVE_CRASH`, `ANR`. Example: `errorIssueType = JAVA_CRASH OR errorIssueType = NATIVE_CRASH`. * `errorIssueId`: Matches error reports belonging to the requested error issue ids only. Example: `errorIssueId = 1234 OR errorIssueId = 4567`. * `appProcessState`: Matches error reports on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error reports that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR versionCode = ANR`. The filter expression `versionCode = 123 OR errorIssueType = ANR` is not valid. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)`
		 * @param {number} interval_endTime_day Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
		 * @param {number} interval_endTime_hours Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * @param {number} interval_endTime_minutes Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
		 * @param {number} interval_endTime_month Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
		 * @param {number} interval_endTime_nanos Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
		 * @param {number} interval_endTime_seconds Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
		 * @param {string} interval_endTime_timeZone_id IANA Time Zone Database time zone, e.g. "America/New_York".
		 * @param {string} interval_endTime_timeZone_version Optional. IANA Time Zone Database version number, e.g. "2019a".
		 * @param {string} interval_endTime_utcOffset UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
		 * @param {number} interval_endTime_year Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
		 * @param {number} interval_startTime_day Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
		 * @param {number} interval_startTime_hours Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * @param {number} interval_startTime_minutes Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
		 * @param {number} interval_startTime_month Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
		 * @param {number} interval_startTime_nanos Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
		 * @param {number} interval_startTime_seconds Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
		 * @param {string} interval_startTime_timeZone_id IANA Time Zone Database time zone, e.g. "America/New_York".
		 * @param {string} interval_startTime_timeZone_version Optional. IANA Time Zone Database version number, e.g. "2019a".
		 * @param {string} interval_startTime_utcOffset UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
		 * @param {number} interval_startTime_year Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
		 * @param {number} pageSize The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 50 reports will be returned. The maximum value is 100; values above 100 will be coerced to 100.
		 * @param {string} pageToken A page token, received from a previous `SearchErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchErrorReports` must match the call that provided the page token.
		 * @return {GooglePlayDeveloperReportingV1beta1SearchErrorReportsResponse} Successful response
		 */
		Playdeveloperreporting_vitals_errors_reports_search(parent: string, filter: string | null | undefined, interval_endTime_day: number | null | undefined, interval_endTime_hours: number | null | undefined, interval_endTime_minutes: number | null | undefined, interval_endTime_month: number | null | undefined, interval_endTime_nanos: number | null | undefined, interval_endTime_seconds: number | null | undefined, interval_endTime_timeZone_id: string | null | undefined, interval_endTime_timeZone_version: string | null | undefined, interval_endTime_utcOffset: string | null | undefined, interval_endTime_year: number | null | undefined, interval_startTime_day: number | null | undefined, interval_startTime_hours: number | null | undefined, interval_startTime_minutes: number | null | undefined, interval_startTime_month: number | null | undefined, interval_startTime_nanos: number | null | undefined, interval_startTime_seconds: number | null | undefined, interval_startTime_timeZone_id: string | null | undefined, interval_startTime_timeZone_version: string | null | undefined, interval_startTime_utcOffset: string | null | undefined, interval_startTime_year: number | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GooglePlayDeveloperReportingV1beta1SearchErrorReportsResponse> {
			return this.http.get<GooglePlayDeveloperReportingV1beta1SearchErrorReportsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/errorReports:search&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&interval_endTime_day=' + interval_endTime_day + '&interval_endTime_hours=' + interval_endTime_hours + '&interval_endTime_minutes=' + interval_endTime_minutes + '&interval_endTime_month=' + interval_endTime_month + '&interval_endTime_nanos=' + interval_endTime_nanos + '&interval_endTime_seconds=' + interval_endTime_seconds + '&interval_endTime_timeZone_id=' + (interval_endTime_timeZone_id == null ? '' : encodeURIComponent(interval_endTime_timeZone_id)) + '&interval_endTime_timeZone_version=' + (interval_endTime_timeZone_version == null ? '' : encodeURIComponent(interval_endTime_timeZone_version)) + '&interval_endTime_utcOffset=' + (interval_endTime_utcOffset == null ? '' : encodeURIComponent(interval_endTime_utcOffset)) + '&interval_endTime_year=' + interval_endTime_year + '&interval_startTime_day=' + interval_startTime_day + '&interval_startTime_hours=' + interval_startTime_hours + '&interval_startTime_minutes=' + interval_startTime_minutes + '&interval_startTime_month=' + interval_startTime_month + '&interval_startTime_nanos=' + interval_startTime_nanos + '&interval_startTime_seconds=' + interval_startTime_seconds + '&interval_startTime_timeZone_id=' + (interval_startTime_timeZone_id == null ? '' : encodeURIComponent(interval_startTime_timeZone_id)) + '&interval_startTime_timeZone_version=' + (interval_startTime_timeZone_version == null ? '' : encodeURIComponent(interval_startTime_timeZone_version)) + '&interval_startTime_utcOffset=' + (interval_startTime_utcOffset == null ? '' : encodeURIComponent(interval_startTime_utcOffset)) + '&interval_startTime_year=' + interval_startTime_year + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

