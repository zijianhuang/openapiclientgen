import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Additional details for an ANR crash. */
	export interface ANR {

		/** A stacktrace. */
		stackTrace?: StackTrace;
	}

	/** Additional details for an ANR crash. */
	export interface ANRFormProperties {
	}
	export function CreateANRFormGroup() {
		return new FormGroup<ANRFormProperties>({
		});

	}


	/** A stacktrace. */
	export interface StackTrace {

		/** The stack trace message. Required */
		exception?: string | null;
	}

	/** A stacktrace. */
	export interface StackTraceFormProperties {

		/** The stack trace message. Required */
		exception: FormControl<string | null | undefined>,
	}
	export function CreateStackTraceFormGroup() {
		return new FormGroup<StackTraceFormProperties>({
			exception: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Android app information. */
	export interface AndroidAppInfo {

		/** The name of the app. Optional */
		name?: string | null;

		/** The package name of the app. Required. */
		packageName?: string | null;

		/** The internal version code of the app. Optional. */
		versionCode?: string | null;

		/** The version name of the app. Optional. */
		versionName?: string | null;
	}

	/** Android app information. */
	export interface AndroidAppInfoFormProperties {

		/** The name of the app. Optional */
		name: FormControl<string | null | undefined>,

		/** The package name of the app. Required. */
		packageName: FormControl<string | null | undefined>,

		/** The internal version code of the app. Optional. */
		versionCode: FormControl<string | null | undefined>,

		/** The version name of the app. Optional. */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateAndroidAppInfoFormGroup() {
		return new FormGroup<AndroidAppInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<string | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests. */
	export interface AndroidInstrumentationTest {

		/** The java package for the test to be executed. Required */
		testPackageId?: string | null;

		/** The InstrumentationTestRunner class. Required */
		testRunnerClass?: string | null;

		/** Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run. */
		testTargets?: Array<string>;

		/** The flag indicates whether Android Test Orchestrator will be used to run test or not. */
		useOrchestrator?: boolean | null;
	}

	/** A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests. */
	export interface AndroidInstrumentationTestFormProperties {

		/** The java package for the test to be executed. Required */
		testPackageId: FormControl<string | null | undefined>,

		/** The InstrumentationTestRunner class. Required */
		testRunnerClass: FormControl<string | null | undefined>,

		/** The flag indicates whether Android Test Orchestrator will be used to run test or not. */
		useOrchestrator: FormControl<boolean | null | undefined>,
	}
	export function CreateAndroidInstrumentationTestFormGroup() {
		return new FormGroup<AndroidInstrumentationTestFormProperties>({
			testPackageId: new FormControl<string | null | undefined>(undefined),
			testRunnerClass: new FormControl<string | null | undefined>(undefined),
			useOrchestrator: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes. */
	export interface AndroidRoboTest {

		/** The initial activity that should be used to start the app. Optional */
		appInitialActivity?: string | null;

		/** The java package for the bootstrap. Optional */
		bootstrapPackageId?: string | null;

		/** The runner class for the bootstrap. Optional */
		bootstrapRunnerClass?: string | null;

		/** The max depth of the traversal stack Robo can explore. Optional */
		maxDepth?: number | null;

		/** The max number of steps/actions Robo can execute. Default is no limit (0). Optional */
		maxSteps?: number | null;
	}

	/** A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes. */
	export interface AndroidRoboTestFormProperties {

		/** The initial activity that should be used to start the app. Optional */
		appInitialActivity: FormControl<string | null | undefined>,

		/** The java package for the bootstrap. Optional */
		bootstrapPackageId: FormControl<string | null | undefined>,

		/** The runner class for the bootstrap. Optional */
		bootstrapRunnerClass: FormControl<string | null | undefined>,

		/** The max depth of the traversal stack Robo can explore. Optional */
		maxDepth: FormControl<number | null | undefined>,

		/** The max number of steps/actions Robo can execute. Default is no limit (0). Optional */
		maxSteps: FormControl<number | null | undefined>,
	}
	export function CreateAndroidRoboTestFormGroup() {
		return new FormGroup<AndroidRoboTestFormProperties>({
			appInitialActivity: new FormControl<string | null | undefined>(undefined),
			bootstrapPackageId: new FormControl<string | null | undefined>(undefined),
			bootstrapRunnerClass: new FormControl<string | null | undefined>(undefined),
			maxDepth: new FormControl<number | null | undefined>(undefined),
			maxSteps: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Android mobile test specification. */
	export interface AndroidTest {

		/** Android app information. */
		androidAppInfo?: AndroidAppInfo;

		/** A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests. */
		androidInstrumentationTest?: AndroidInstrumentationTest;

		/** A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes. */
		androidRoboTest?: AndroidRoboTest;

		/** Test Loops are tests that can be launched by the app itself, determining when to run by listening for an intent. */
		androidTestLoop?: AndroidTestLoop;

		/** A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
		testTimeout?: Duration;
	}

	/** An Android mobile test specification. */
	export interface AndroidTestFormProperties {
	}
	export function CreateAndroidTestFormGroup() {
		return new FormGroup<AndroidTestFormProperties>({
		});

	}


	/** Test Loops are tests that can be launched by the app itself, determining when to run by listening for an intent. */
	export interface AndroidTestLoop {
	}

	/** Test Loops are tests that can be launched by the app itself, determining when to run by listening for an intent. */
	export interface AndroidTestLoopFormProperties {
	}
	export function CreateAndroidTestLoopFormGroup() {
		return new FormGroup<AndroidTestLoopFormProperties>({
		});

	}


	/**  A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
	export interface Duration {

		/** Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive. */
		nanos?: number | null;

		/** Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
		seconds?: string | null;
	}

	/**  A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
	export interface DurationFormProperties {

		/** Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive. */
		nanos: FormControl<number | null | undefined>,

		/** Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
		seconds: FormControl<string | null | undefined>,
	}
	export function CreateDurationFormGroup() {
		return new FormGroup<DurationFormProperties>({
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++. Foo foo = ...; Any any; any.PackFrom(foo); ... if (any.UnpackTo(&foo)) { ... } Example 2: Pack and unpack a message in Java. Foo foo = ...; Any any = Any.pack(foo); ... if (any.is(Foo.class)) { foo = any.unpack(Foo.class); } Example 3: Pack and unpack a message in Python. foo = Foo(...) any = Any() any.Pack(foo) ... if any.Is(Foo.DESCRIPTOR): any.Unpack(foo) ... Example 4: Pack and unpack a message in Go foo := &pb.Foo{...} any, err := ptypes.MarshalAny(foo) ... foo := &pb.Foo{} if err := ptypes.UnmarshalAny(any, foo); err != nil { ... } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example "foo.bar.com/x/y.z" will yield type name "y.z". # JSON The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example: package google.profile; message Person { string first_name = 1; string last_name = 2; } { "@type": "type.googleapis.com/google.profile.Person", "firstName": , "lastName": } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message google.protobuf.Duration): { "@type": "type.googleapis.com/google.protobuf.Duration", "value": "1.212s" } */
	export interface Any {

		/** A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics. */
		typeUrl?: string | null;

		/** Must be a valid serialized protocol buffer of the above specified type. */
		value?: string | null;
	}

	/**  `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++. Foo foo = ...; Any any; any.PackFrom(foo); ... if (any.UnpackTo(&foo)) { ... } Example 2: Pack and unpack a message in Java. Foo foo = ...; Any any = Any.pack(foo); ... if (any.is(Foo.class)) { foo = any.unpack(Foo.class); } Example 3: Pack and unpack a message in Python. foo = Foo(...) any = Any() any.Pack(foo) ... if any.Is(Foo.DESCRIPTOR): any.Unpack(foo) ... Example 4: Pack and unpack a message in Go foo := &pb.Foo{...} any, err := ptypes.MarshalAny(foo) ... foo := &pb.Foo{} if err := ptypes.UnmarshalAny(any, foo); err != nil { ... } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example "foo.bar.com/x/y.z" will yield type name "y.z". # JSON The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example: package google.profile; message Person { string first_name = 1; string last_name = 2; } { "@type": "type.googleapis.com/google.profile.Person", "firstName": , "lastName": } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message google.protobuf.Duration): { "@type": "type.googleapis.com/google.protobuf.Duration", "value": "1.212s" } */
	export interface AnyFormProperties {

		/** A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics. */
		typeUrl: FormControl<string | null | undefined>,

		/** Must be a valid serialized protocol buffer of the above specified type. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAnyFormGroup() {
		return new FormGroup<AnyFormProperties>({
			typeUrl: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppStartTime {

		/** A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
		fullyDrawnTime?: Duration;

		/** A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
		initialDisplayTime?: Duration;
	}
	export interface AppStartTimeFormProperties {
	}
	export function CreateAppStartTimeFormGroup() {
		return new FormGroup<AppStartTimeFormProperties>({
		});

	}


	/** There was an issue with the assets in this test. */
	export interface AssetIssue {
	}

	/** There was an issue with the assets in this test. */
	export interface AssetIssueFormProperties {
	}
	export function CreateAssetIssueFormGroup() {
		return new FormGroup<AssetIssueFormProperties>({
		});

	}


	/** A suggestion to use deep links for a Robo run. */
	export interface AvailableDeepLinks {
	}

	/** A suggestion to use deep links for a Robo run. */
	export interface AvailableDeepLinksFormProperties {
	}
	export function CreateAvailableDeepLinksFormGroup() {
		return new FormGroup<AvailableDeepLinksFormProperties>({
		});

	}


	/** Encapsulates the metadata for basic sample series represented by a line chart */
	export interface BasicPerfSampleSeries {
		perfMetricType?: BasicPerfSampleSeriesPerfMetricType | null;
		perfUnit?: BasicPerfSampleSeriesPerfUnit | null;
		sampleSeriesLabel?: BasicPerfSampleSeriesSampleSeriesLabel | null;
	}

	/** Encapsulates the metadata for basic sample series represented by a line chart */
	export interface BasicPerfSampleSeriesFormProperties {
		perfMetricType: FormControl<BasicPerfSampleSeriesPerfMetricType | null | undefined>,
		perfUnit: FormControl<BasicPerfSampleSeriesPerfUnit | null | undefined>,
		sampleSeriesLabel: FormControl<BasicPerfSampleSeriesSampleSeriesLabel | null | undefined>,
	}
	export function CreateBasicPerfSampleSeriesFormGroup() {
		return new FormGroup<BasicPerfSampleSeriesFormProperties>({
			perfMetricType: new FormControl<BasicPerfSampleSeriesPerfMetricType | null | undefined>(undefined),
			perfUnit: new FormControl<BasicPerfSampleSeriesPerfUnit | null | undefined>(undefined),
			sampleSeriesLabel: new FormControl<BasicPerfSampleSeriesSampleSeriesLabel | null | undefined>(undefined),
		});

	}

	export enum BasicPerfSampleSeriesPerfMetricType { perfMetricTypeUnspecified = 'perfMetricTypeUnspecified', memory = 'memory', cpu = 'cpu', network = 'network', graphics = 'graphics' }

	export enum BasicPerfSampleSeriesPerfUnit { perfUnitUnspecified = 'perfUnitUnspecified', kibibyte = 'kibibyte', percent = 'percent', bytesPerSecond = 'bytesPerSecond', framesPerSecond = 'framesPerSecond', byte = 'byte' }

	export enum BasicPerfSampleSeriesSampleSeriesLabel { sampleSeriesTypeUnspecified = 'sampleSeriesTypeUnspecified', memoryRssPrivate = 'memoryRssPrivate', memoryRssShared = 'memoryRssShared', memoryRssTotal = 'memoryRssTotal', memoryTotal = 'memoryTotal', cpuUser = 'cpuUser', cpuKernel = 'cpuKernel', cpuTotal = 'cpuTotal', ntBytesTransferred = 'ntBytesTransferred', ntBytesReceived = 'ntBytesReceived', networkSent = 'networkSent', networkReceived = 'networkReceived', graphicsFrameRate = 'graphicsFrameRate' }


	/** The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error */
	export interface BatchCreatePerfSamplesRequest {

		/** The set of PerfSamples to create should not include existing timestamps */
		perfSamples?: Array<PerfSample>;
	}

	/** The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error */
	export interface BatchCreatePerfSamplesRequestFormProperties {
	}
	export function CreateBatchCreatePerfSamplesRequestFormGroup() {
		return new FormGroup<BatchCreatePerfSamplesRequestFormProperties>({
		});

	}


	/** Resource representing a single performance measure or data point */
	export interface PerfSample {

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
		sampleTime?: Timestamp;

		/** Value observed */
		value?: number | null;
	}

	/** Resource representing a single performance measure or data point */
	export interface PerfSampleFormProperties {

		/** Value observed */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePerfSampleFormGroup() {
		return new FormGroup<PerfSampleFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
	export interface Timestamp {

		/** Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. */
		nanos?: number | null;

		/** Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive. */
		seconds?: string | null;
	}

	/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
	export interface TimestampFormProperties {

		/** Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. */
		nanos: FormControl<number | null | undefined>,

		/** Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive. */
		seconds: FormControl<string | null | undefined>,
	}
	export function CreateTimestampFormGroup() {
		return new FormGroup<TimestampFormProperties>({
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchCreatePerfSamplesResponse {
		perfSamples?: Array<PerfSample>;
	}
	export interface BatchCreatePerfSamplesResponseFormProperties {
	}
	export function CreateBatchCreatePerfSamplesResponseFormGroup() {
		return new FormGroup<BatchCreatePerfSamplesResponseFormProperties>({
		});

	}


	/** A warning that Robo encountered a screen that was mostly blank; this may indicate a problem with the app. */
	export interface BlankScreen {

		/** The screen id of the element */
		screenId?: string | null;
	}

	/** A warning that Robo encountered a screen that was mostly blank; this may indicate a problem with the app. */
	export interface BlankScreenFormProperties {

		/** The screen id of the element */
		screenId: FormControl<string | null | undefined>,
	}
	export function CreateBlankScreenFormGroup() {
		return new FormGroup<BlankScreenFormProperties>({
			screenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CPUInfo {

		/** description of the device processor ie '1.8 GHz hexa core 64-bit ARMv8-A' */
		cpuProcessor?: string | null;

		/** the CPU clock speed in GHz */
		cpuSpeedInGhz?: number | null;

		/** the number of CPU cores */
		numberOfCores?: number | null;
	}
	export interface CPUInfoFormProperties {

		/** description of the device processor ie '1.8 GHz hexa core 64-bit ARMv8-A' */
		cpuProcessor: FormControl<string | null | undefined>,

		/** the CPU clock speed in GHz */
		cpuSpeedInGhz: FormControl<number | null | undefined>,

		/** the number of CPU cores */
		numberOfCores: FormControl<number | null | undefined>,
	}
	export function CreateCPUInfoFormGroup() {
		return new FormGroup<CPUInfoFormProperties>({
			cpuProcessor: new FormControl<string | null | undefined>(undefined),
			cpuSpeedInGhz: new FormControl<number | null | undefined>(undefined),
			numberOfCores: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Crash dialog was detected during the test execution */
	export interface CrashDialogError {

		/** The name of the package that caused the dialog. */
		crashPackage?: string | null;
	}

	/** Crash dialog was detected during the test execution */
	export interface CrashDialogErrorFormProperties {

		/** The name of the package that caused the dialog. */
		crashPackage: FormControl<string | null | undefined>,
	}
	export function CreateCrashDialogErrorFormGroup() {
		return new FormGroup<CrashDialogErrorFormProperties>({
			crashPackage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A notification that Robo detected a splash screen provided by app (vs. Android OS splash screen). */
	export interface DetectedAppSplashScreen {
	}

	/** A notification that Robo detected a splash screen provided by app (vs. Android OS splash screen). */
	export interface DetectedAppSplashScreenFormProperties {
	}
	export function CreateDetectedAppSplashScreenFormGroup() {
		return new FormGroup<DetectedAppSplashScreenFormProperties>({
		});

	}


	/** A warning that device ran out of memory */
	export interface DeviceOutOfMemory {
	}

	/** A warning that device ran out of memory */
	export interface DeviceOutOfMemoryFormProperties {
	}
	export function CreateDeviceOutOfMemoryFormGroup() {
		return new FormGroup<DeviceOutOfMemoryFormProperties>({
		});

	}


	/** Additional details about encountered login screens. */
	export interface EncounteredLoginScreen {

		/** Number of encountered distinct login screens. */
		distinctScreens?: number | null;

		/** Subset of login screens. */
		screenIds?: Array<string>;
	}

	/** Additional details about encountered login screens. */
	export interface EncounteredLoginScreenFormProperties {

		/** Number of encountered distinct login screens. */
		distinctScreens: FormControl<number | null | undefined>,
	}
	export function CreateEncounteredLoginScreenFormGroup() {
		return new FormGroup<EncounteredLoginScreenFormProperties>({
			distinctScreens: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional details about encountered screens with elements that are not Android UI widgets. */
	export interface EncounteredNonAndroidUiWidgetScreen {

		/** Number of encountered distinct screens with non Android UI widgets. */
		distinctScreens?: number | null;

		/** Subset of screens which contain non Android UI widgets. */
		screenIds?: Array<string>;
	}

	/** Additional details about encountered screens with elements that are not Android UI widgets. */
	export interface EncounteredNonAndroidUiWidgetScreenFormProperties {

		/** Number of encountered distinct screens with non Android UI widgets. */
		distinctScreens: FormControl<number | null | undefined>,
	}
	export function CreateEncounteredNonAndroidUiWidgetScreenFormGroup() {
		return new FormGroup<EncounteredNonAndroidUiWidgetScreenFormProperties>({
			distinctScreens: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes). */
	export interface Environment {

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
		completionTime?: Timestamp;

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
		creationTime?: Timestamp;

		/** Dimension values describing the environment. Dimension values always consist of "Model", "Version", "Locale", and "Orientation". - In response: always set - In create request: always set - In update request: never set */
		dimensionValue?: Array<EnvironmentDimensionValueEntry>;

		/** A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27. */
		displayName?: string | null;

		/** Output only. An Environment id. */
		environmentId?: string | null;

		/** Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result. */
		environmentResult?: MergedResult;

		/** Output only. An Execution id. */
		executionId?: string | null;

		/** Output only. A History id. */
		historyId?: string | null;

		/** Output only. A Project id. */
		projectId?: string | null;

		/** The storage for test results. */
		resultsStorage?: ResultsStorage;

		/** Output only. Summaries of shards. Only one shard will present unless sharding feature is enabled in TestExecutionService. */
		shardSummaries?: Array<ShardSummary>;
	}

	/** An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes). */
	export interface EnvironmentFormProperties {

		/** A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. An Environment id. */
		environmentId: FormControl<string | null | undefined>,

		/** Output only. An Execution id. */
		executionId: FormControl<string | null | undefined>,

		/** Output only. A History id. */
		historyId: FormControl<string | null | undefined>,

		/** Output only. A Project id. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			executionId: new FormControl<string | null | undefined>(undefined),
			historyId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnvironmentDimensionValueEntry {
		key?: string | null;
		value?: string | null;
	}
	export interface EnvironmentDimensionValueEntryFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentDimensionValueEntryFormGroup() {
		return new FormGroup<EnvironmentDimensionValueEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result. */
	export interface MergedResult {

		/** Interprets a result so that humans and machines can act on it. */
		outcome?: Outcome;

		/** State of the resource */
		state?: MergedResultState | null;

		/** The combined and rolled-up result of each test suite that was run as part of this environment. Combining: When the test cases from a suite are run in different steps (sharding), the results are added back together in one overview. (e.g., if shard1 has 2 failures and shard2 has 1 failure than the overview failure_count = 3). Rollup: When test cases from the same suite are run multiple times (flaky), the results are combined (e.g., if testcase1.run1 fails, testcase1.run2 passes, and both testcase2.run1 and testcase2.run2 fail then the overview flaky_count = 1 and failure_count = 1). */
		testSuiteOverviews?: Array<TestSuiteOverview>;
	}

	/** Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result. */
	export interface MergedResultFormProperties {

		/** State of the resource */
		state: FormControl<MergedResultState | null | undefined>,
	}
	export function CreateMergedResultFormGroup() {
		return new FormGroup<MergedResultFormProperties>({
			state: new FormControl<MergedResultState | null | undefined>(undefined),
		});

	}


	/** Interprets a result so that humans and machines can act on it. */
	export interface Outcome {

		/** Details for an outcome with a FAILURE outcome summary. */
		failureDetail?: FailureDetail;

		/** Details for an outcome with an INCONCLUSIVE outcome summary. */
		inconclusiveDetail?: InconclusiveDetail;

		/** Details for an outcome with a SKIPPED outcome summary. */
		skippedDetail?: SkippedDetail;

		/** Details for an outcome with a SUCCESS outcome summary. LINT.IfChange */
		successDetail?: SuccessDetail;

		/** The simplest way to interpret a result. Required */
		summary?: OutcomeSummary | null;
	}

	/** Interprets a result so that humans and machines can act on it. */
	export interface OutcomeFormProperties {

		/** The simplest way to interpret a result. Required */
		summary: FormControl<OutcomeSummary | null | undefined>,
	}
	export function CreateOutcomeFormGroup() {
		return new FormGroup<OutcomeFormProperties>({
			summary: new FormControl<OutcomeSummary | null | undefined>(undefined),
		});

	}


	/** Details for an outcome with a FAILURE outcome summary. */
	export interface FailureDetail {

		/** If the failure was severe because the system (app) under test crashed. */
		crashed?: boolean | null;

		/** If the device ran out of memory during a test, causing the test to crash. */
		deviceOutOfMemory?: boolean | null;

		/** If the Roboscript failed to complete successfully, e.g., because a Roboscript action or assertion failed or a Roboscript action could not be matched during the entire crawl. */
		failedRoboscript?: boolean | null;

		/** If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform. */
		notInstalled?: boolean | null;

		/** If a native process (including any other than the app) crashed. */
		otherNativeCrash?: boolean | null;

		/** If the test overran some time limit, and that is why it failed. */
		timedOut?: boolean | null;

		/** If the robo was unable to crawl the app; perhaps because the app did not start. */
		unableToCrawl?: boolean | null;
	}

	/** Details for an outcome with a FAILURE outcome summary. */
	export interface FailureDetailFormProperties {

		/** If the failure was severe because the system (app) under test crashed. */
		crashed: FormControl<boolean | null | undefined>,

		/** If the device ran out of memory during a test, causing the test to crash. */
		deviceOutOfMemory: FormControl<boolean | null | undefined>,

		/** If the Roboscript failed to complete successfully, e.g., because a Roboscript action or assertion failed or a Roboscript action could not be matched during the entire crawl. */
		failedRoboscript: FormControl<boolean | null | undefined>,

		/** If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform. */
		notInstalled: FormControl<boolean | null | undefined>,

		/** If a native process (including any other than the app) crashed. */
		otherNativeCrash: FormControl<boolean | null | undefined>,

		/** If the test overran some time limit, and that is why it failed. */
		timedOut: FormControl<boolean | null | undefined>,

		/** If the robo was unable to crawl the app; perhaps because the app did not start. */
		unableToCrawl: FormControl<boolean | null | undefined>,
	}
	export function CreateFailureDetailFormGroup() {
		return new FormGroup<FailureDetailFormProperties>({
			crashed: new FormControl<boolean | null | undefined>(undefined),
			deviceOutOfMemory: new FormControl<boolean | null | undefined>(undefined),
			failedRoboscript: new FormControl<boolean | null | undefined>(undefined),
			notInstalled: new FormControl<boolean | null | undefined>(undefined),
			otherNativeCrash: new FormControl<boolean | null | undefined>(undefined),
			timedOut: new FormControl<boolean | null | undefined>(undefined),
			unableToCrawl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details for an outcome with an INCONCLUSIVE outcome summary. */
	export interface InconclusiveDetail {

		/** If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running. */
		abortedByUser?: boolean | null;

		/** If results are being provided to the user in certain cases of infrastructure failures */
		hasErrorLogs?: boolean | null;

		/** If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed. For example, a mobile test requires provisioning a device where the test executes, and that provisioning can fail. */
		infrastructureFailure?: boolean | null;
	}

	/** Details for an outcome with an INCONCLUSIVE outcome summary. */
	export interface InconclusiveDetailFormProperties {

		/** If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running. */
		abortedByUser: FormControl<boolean | null | undefined>,

		/** If results are being provided to the user in certain cases of infrastructure failures */
		hasErrorLogs: FormControl<boolean | null | undefined>,

		/** If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed. For example, a mobile test requires provisioning a device where the test executes, and that provisioning can fail. */
		infrastructureFailure: FormControl<boolean | null | undefined>,
	}
	export function CreateInconclusiveDetailFormGroup() {
		return new FormGroup<InconclusiveDetailFormProperties>({
			abortedByUser: new FormControl<boolean | null | undefined>(undefined),
			hasErrorLogs: new FormControl<boolean | null | undefined>(undefined),
			infrastructureFailure: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details for an outcome with a SKIPPED outcome summary. */
	export interface SkippedDetail {

		/** If the App doesn't support the specific API level. */
		incompatibleAppVersion?: boolean | null;

		/** If the App doesn't run on the specific architecture, for example, x86. */
		incompatibleArchitecture?: boolean | null;

		/** If the requested OS version doesn't run on the specific device model. */
		incompatibleDevice?: boolean | null;
	}

	/** Details for an outcome with a SKIPPED outcome summary. */
	export interface SkippedDetailFormProperties {

		/** If the App doesn't support the specific API level. */
		incompatibleAppVersion: FormControl<boolean | null | undefined>,

		/** If the App doesn't run on the specific architecture, for example, x86. */
		incompatibleArchitecture: FormControl<boolean | null | undefined>,

		/** If the requested OS version doesn't run on the specific device model. */
		incompatibleDevice: FormControl<boolean | null | undefined>,
	}
	export function CreateSkippedDetailFormGroup() {
		return new FormGroup<SkippedDetailFormProperties>({
			incompatibleAppVersion: new FormControl<boolean | null | undefined>(undefined),
			incompatibleArchitecture: new FormControl<boolean | null | undefined>(undefined),
			incompatibleDevice: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details for an outcome with a SUCCESS outcome summary. LINT.IfChange */
	export interface SuccessDetail {

		/** If a native process other than the app crashed. */
		otherNativeCrash?: boolean | null;
	}

	/** Details for an outcome with a SUCCESS outcome summary. LINT.IfChange */
	export interface SuccessDetailFormProperties {

		/** If a native process other than the app crashed. */
		otherNativeCrash: FormControl<boolean | null | undefined>,
	}
	export function CreateSuccessDetailFormGroup() {
		return new FormGroup<SuccessDetailFormProperties>({
			otherNativeCrash: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OutcomeSummary { unset = 'unset', success = 'success', failure = 'failure', inconclusive = 'inconclusive', skipped = 'skipped', flaky = 'flaky' }

	export enum MergedResultState { unknownState = 'unknownState', pending = 'pending', inProgress = 'inProgress', complete = 'complete' }


	/** A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step. */
	export interface TestSuiteOverview {

		/** A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
		elapsedTime?: Duration;

		/** Number of test cases in error, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never */
		errorCount?: number | null;

		/** Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user. - In create/response: always set - In update request: never */
		failureCount?: number | null;

		/** Number of flaky test cases, set by the service by rolling up flaky test attempts. Present only for rollup test suite overview at environment level. A step cannot have flaky test cases. */
		flakyCount?: number | null;

		/** The name of the test suite. - In create/response: always set - In update request: never */
		name?: string | null;

		/** Number of test cases not run, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never */
		skippedCount?: number | null;

		/** Number of test cases, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never */
		totalCount?: number | null;

		/** A reference to a file. */
		xmlSource?: FileReference;
	}

	/** A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step. */
	export interface TestSuiteOverviewFormProperties {

		/** Number of test cases in error, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never */
		errorCount: FormControl<number | null | undefined>,

		/** Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user. - In create/response: always set - In update request: never */
		failureCount: FormControl<number | null | undefined>,

		/** Number of flaky test cases, set by the service by rolling up flaky test attempts. Present only for rollup test suite overview at environment level. A step cannot have flaky test cases. */
		flakyCount: FormControl<number | null | undefined>,

		/** The name of the test suite. - In create/response: always set - In update request: never */
		name: FormControl<string | null | undefined>,

		/** Number of test cases not run, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never */
		skippedCount: FormControl<number | null | undefined>,

		/** Number of test cases, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateTestSuiteOverviewFormGroup() {
		return new FormGroup<TestSuiteOverviewFormProperties>({
			errorCount: new FormControl<number | null | undefined>(undefined),
			failureCount: new FormControl<number | null | undefined>(undefined),
			flakyCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			skippedCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A reference to a file. */
	export interface FileReference {

		/** The URI of a file stored in Google Cloud Storage. For example: http://storage.googleapis.com/mybucket/path/to/test.xml or in gsutil format: gs://mybucket/path/to/test.xml with version-specific info, gs://mybucket/path/to/test.xml#1360383693690000 An INVALID_ARGUMENT error will be returned if the URI format is not supported. - In response: always set - In create/update request: always set */
		fileUri?: string | null;
	}

	/** A reference to a file. */
	export interface FileReferenceFormProperties {

		/** The URI of a file stored in Google Cloud Storage. For example: http://storage.googleapis.com/mybucket/path/to/test.xml or in gsutil format: gs://mybucket/path/to/test.xml with version-specific info, gs://mybucket/path/to/test.xml#1360383693690000 An INVALID_ARGUMENT error will be returned if the URI format is not supported. - In response: always set - In create/update request: always set */
		fileUri: FormControl<string | null | undefined>,
	}
	export function CreateFileReferenceFormGroup() {
		return new FormGroup<FileReferenceFormProperties>({
			fileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The storage for test results. */
	export interface ResultsStorage {

		/** A reference to a file. */
		resultsStoragePath?: FileReference;

		/** A reference to a file. */
		xunitXmlFile?: FileReference;
	}

	/** The storage for test results. */
	export interface ResultsStorageFormProperties {
	}
	export function CreateResultsStorageFormGroup() {
		return new FormGroup<ResultsStorageFormProperties>({
		});

	}


	/** Result summary for a shard in an environment. */
	export interface ShardSummary {

		/** Summaries of the steps belonging to the shard. With flaky_test_attempts enabled from TestExecutionService, more than one run (Step) can present. And the runs will be sorted by multistep_number. */
		runs?: Array<StepSummary>;

		/** Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result. */
		shardResult?: MergedResult;
	}

	/** Result summary for a shard in an environment. */
	export interface ShardSummaryFormProperties {
	}
	export function CreateShardSummaryFormGroup() {
		return new FormGroup<ShardSummaryFormProperties>({
		});

	}


	/** Lightweight summary of a step within this execution. */
	export interface StepSummary {
	}

	/** Lightweight summary of a step within this execution. */
	export interface StepSummaryFormProperties {
	}
	export function CreateStepSummaryFormGroup() {
		return new FormGroup<StepSummaryFormProperties>({
		});

	}


	/** An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable. */
	export interface Execution {

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
		completionTime?: Timestamp;

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
		creationTime?: Timestamp;

		/** The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set */
		dimensionDefinitions?: Array<MatrixDimensionDefinition>;

		/** A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set */
		executionId?: string | null;

		/** Interprets a result so that humans and machines can act on it. */
		outcome?: Outcome;

		/** The details about how to run the execution. */
		specification?: Specification;

		/** The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional */
		state?: MergedResultState | null;

		/** TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set */
		testExecutionMatrixId?: string | null;
	}

	/** An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable. */
	export interface ExecutionFormProperties {

		/** A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set */
		executionId: FormControl<string | null | undefined>,

		/** The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional */
		state: FormControl<MergedResultState | null | undefined>,

		/** TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set */
		testExecutionMatrixId: FormControl<string | null | undefined>,
	}
	export function CreateExecutionFormGroup() {
		return new FormGroup<ExecutionFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MergedResultState | null | undefined>(undefined),
			testExecutionMatrixId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One dimension of the matrix of different runs of a step. */
	export interface MatrixDimensionDefinition {
	}

	/** One dimension of the matrix of different runs of a step. */
	export interface MatrixDimensionDefinitionFormProperties {
	}
	export function CreateMatrixDimensionDefinitionFormGroup() {
		return new FormGroup<MatrixDimensionDefinitionFormProperties>({
		});

	}


	/** The details about how to run the execution. */
	export interface Specification {

		/** An Android mobile test specification. */
		androidTest?: AndroidTest;

		/** A iOS mobile test specification */
		iosTest?: IosTest;
	}

	/** The details about how to run the execution. */
	export interface SpecificationFormProperties {
	}
	export function CreateSpecificationFormGroup() {
		return new FormGroup<SpecificationFormProperties>({
		});

	}


	/** A iOS mobile test specification */
	export interface IosTest {

		/** iOS app information */
		iosAppInfo?: IosAppInfo;

		/** A Robo test for an iOS application. */
		iosRoboTest?: IosRoboTest;

		/** A game loop test of an iOS application. */
		iosTestLoop?: IosTestLoop;

		/** A test of an iOS application that uses the XCTest framework. */
		iosXcTest?: IosXcTest;

		/** A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
		testTimeout?: Duration;
	}

	/** A iOS mobile test specification */
	export interface IosTestFormProperties {
	}
	export function CreateIosTestFormGroup() {
		return new FormGroup<IosTestFormProperties>({
		});

	}


	/** iOS app information */
	export interface IosAppInfo {

		/** The name of the app. Required */
		name?: string | null;
	}

	/** iOS app information */
	export interface IosAppInfoFormProperties {

		/** The name of the app. Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIosAppInfoFormGroup() {
		return new FormGroup<IosAppInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Robo test for an iOS application. */
	export interface IosRoboTest {
	}

	/** A Robo test for an iOS application. */
	export interface IosRoboTestFormProperties {
	}
	export function CreateIosRoboTestFormGroup() {
		return new FormGroup<IosRoboTestFormProperties>({
		});

	}


	/** A game loop test of an iOS application. */
	export interface IosTestLoop {

		/** Bundle ID of the app. */
		bundleId?: string | null;
	}

	/** A game loop test of an iOS application. */
	export interface IosTestLoopFormProperties {

		/** Bundle ID of the app. */
		bundleId: FormControl<string | null | undefined>,
	}
	export function CreateIosTestLoopFormGroup() {
		return new FormGroup<IosTestLoopFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A test of an iOS application that uses the XCTest framework. */
	export interface IosXcTest {

		/** Bundle ID of the app. */
		bundleId?: string | null;

		/** Xcode version that the test was run with. */
		xcodeVersion?: string | null;
	}

	/** A test of an iOS application that uses the XCTest framework. */
	export interface IosXcTestFormProperties {

		/** Bundle ID of the app. */
		bundleId: FormControl<string | null | undefined>,

		/** Xcode version that the test was run with. */
		xcodeVersion: FormControl<string | null | undefined>,
	}
	export function CreateIosXcTestFormGroup() {
		return new FormGroup<IosXcTestFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
			xcodeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Failed to install the App. */
	export interface FailedToInstall {
	}

	/** Failed to install the App. */
	export interface FailedToInstallFormProperties {
	}
	export function CreateFailedToInstallFormGroup() {
		return new FormGroup<FailedToInstallFormProperties>({
		});

	}


	/** Additional details for a fatal exception. */
	export interface FatalException {

		/** A stacktrace. */
		stackTrace?: StackTrace;
	}

	/** Additional details for a fatal exception. */
	export interface FatalExceptionFormProperties {
	}
	export function CreateFatalExceptionFormGroup() {
		return new FormGroup<FatalExceptionFormProperties>({
		});

	}


	/** Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+. */
	export interface GraphicsStats {

		/** Histogram of frame render times. There should be 154 buckets ranging from [5ms, 6ms) to [4950ms, infinity) */
		buckets?: Array<GraphicsStatsBucket>;

		/** Total "high input latency" events. */
		highInputLatencyCount?: string | null;

		/** Total frames with slow render time. Should be <= total_frames. */
		jankyFrames?: string | null;

		/** Total "missed vsync" events. */
		missedVsyncCount?: string | null;

		/** 50th percentile frame render time in milliseconds. */
		p50Millis?: string | null;

		/** 90th percentile frame render time in milliseconds. */
		p90Millis?: string | null;

		/** 95th percentile frame render time in milliseconds. */
		p95Millis?: string | null;

		/** 99th percentile frame render time in milliseconds. */
		p99Millis?: string | null;

		/** Total "slow bitmap upload" events. */
		slowBitmapUploadCount?: string | null;

		/** Total "slow draw" events. */
		slowDrawCount?: string | null;

		/** Total "slow UI thread" events. */
		slowUiThreadCount?: string | null;

		/** Total frames rendered by package. */
		totalFrames?: string | null;
	}

	/** Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+. */
	export interface GraphicsStatsFormProperties {

		/** Total "high input latency" events. */
		highInputLatencyCount: FormControl<string | null | undefined>,

		/** Total frames with slow render time. Should be <= total_frames. */
		jankyFrames: FormControl<string | null | undefined>,

		/** Total "missed vsync" events. */
		missedVsyncCount: FormControl<string | null | undefined>,

		/** 50th percentile frame render time in milliseconds. */
		p50Millis: FormControl<string | null | undefined>,

		/** 90th percentile frame render time in milliseconds. */
		p90Millis: FormControl<string | null | undefined>,

		/** 95th percentile frame render time in milliseconds. */
		p95Millis: FormControl<string | null | undefined>,

		/** 99th percentile frame render time in milliseconds. */
		p99Millis: FormControl<string | null | undefined>,

		/** Total "slow bitmap upload" events. */
		slowBitmapUploadCount: FormControl<string | null | undefined>,

		/** Total "slow draw" events. */
		slowDrawCount: FormControl<string | null | undefined>,

		/** Total "slow UI thread" events. */
		slowUiThreadCount: FormControl<string | null | undefined>,

		/** Total frames rendered by package. */
		totalFrames: FormControl<string | null | undefined>,
	}
	export function CreateGraphicsStatsFormGroup() {
		return new FormGroup<GraphicsStatsFormProperties>({
			highInputLatencyCount: new FormControl<string | null | undefined>(undefined),
			jankyFrames: new FormControl<string | null | undefined>(undefined),
			missedVsyncCount: new FormControl<string | null | undefined>(undefined),
			p50Millis: new FormControl<string | null | undefined>(undefined),
			p90Millis: new FormControl<string | null | undefined>(undefined),
			p95Millis: new FormControl<string | null | undefined>(undefined),
			p99Millis: new FormControl<string | null | undefined>(undefined),
			slowBitmapUploadCount: new FormControl<string | null | undefined>(undefined),
			slowDrawCount: new FormControl<string | null | undefined>(undefined),
			slowUiThreadCount: new FormControl<string | null | undefined>(undefined),
			totalFrames: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GraphicsStatsBucket {

		/** Number of frames in the bucket. */
		frameCount?: string | null;

		/** Lower bound of render time in milliseconds. */
		renderMillis?: string | null;
	}
	export interface GraphicsStatsBucketFormProperties {

		/** Number of frames in the bucket. */
		frameCount: FormControl<string | null | undefined>,

		/** Lower bound of render time in milliseconds. */
		renderMillis: FormControl<string | null | undefined>,
	}
	export function CreateGraphicsStatsBucketFormGroup() {
		return new FormGroup<GraphicsStatsBucketFormProperties>({
			frameCount: new FormControl<string | null | undefined>(undefined),
			renderMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch. */
	export interface History {

		/** A short human-readable (plain text) name to display in the UI. Maximum of 100 characters. - In response: present if set during create. - In create request: optional */
		displayName?: string | null;

		/** A unique identifier within a project for this History. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create request: never set */
		historyId?: string | null;

		/** A name to uniquely identify a history within a project. Maximum of 200 characters. - In response always set - In create request: always set */
		name?: string | null;

		/** The platform of the test history. - In response: always set. Returns the platform of the last execution if unknown. */
		testPlatform?: HistoryTestPlatform | null;
	}

	/** A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch. */
	export interface HistoryFormProperties {

		/** A short human-readable (plain text) name to display in the UI. Maximum of 100 characters. - In response: present if set during create. - In create request: optional */
		displayName: FormControl<string | null | undefined>,

		/** A unique identifier within a project for this History. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create request: never set */
		historyId: FormControl<string | null | undefined>,

		/** A name to uniquely identify a history within a project. Maximum of 200 characters. - In response always set - In create request: always set */
		name: FormControl<string | null | undefined>,

		/** The platform of the test history. - In response: always set. Returns the platform of the last execution if unknown. */
		testPlatform: FormControl<HistoryTestPlatform | null | undefined>,
	}
	export function CreateHistoryFormGroup() {
		return new FormGroup<HistoryFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			historyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			testPlatform: new FormControl<HistoryTestPlatform | null | undefined>(undefined),
		});

	}

	export enum HistoryTestPlatform { unknownPlatform = 'unknownPlatform', android = 'android', ios = 'ios' }


	/** An image, with a link to the main image and a thumbnail. */
	export interface Image {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** A reference to a ToolExecution output file. */
		sourceImage?: ToolOutputReference;

		/** The step to which the image is attached. Always set. */
		stepId?: string | null;

		/** A single thumbnail, with its size and format. */
		thumbnail?: Thumbnail;
	}

	/** An image, with a link to the main image and a thumbnail. */
	export interface ImageFormProperties {

		/** The step to which the image is attached. Always set. */
		stepId: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			stepId: new FormControl<string | null | undefined>(undefined),
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


	/** A reference to a ToolExecution output file. */
	export interface ToolOutputReference {

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
		creationTime?: Timestamp;

		/** A reference to a file. */
		output?: FileReference;

		/** A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name. */
		testCase?: TestCaseReference;
	}

	/** A reference to a ToolExecution output file. */
	export interface ToolOutputReferenceFormProperties {
	}
	export function CreateToolOutputReferenceFormGroup() {
		return new FormGroup<ToolOutputReferenceFormProperties>({
		});

	}


	/** A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name. */
	export interface TestCaseReference {

		/** The name of the class. */
		className?: string | null;

		/** The name of the test case. Required. */
		name?: string | null;

		/** The name of the test suite to which this test case belongs. */
		testSuiteName?: string | null;
	}

	/** A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name. */
	export interface TestCaseReferenceFormProperties {

		/** The name of the class. */
		className: FormControl<string | null | undefined>,

		/** The name of the test case. Required. */
		name: FormControl<string | null | undefined>,

		/** The name of the test suite to which this test case belongs. */
		testSuiteName: FormControl<string | null | undefined>,
	}
	export function CreateTestCaseReferenceFormGroup() {
		return new FormGroup<TestCaseReferenceFormProperties>({
			className: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			testSuiteName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single thumbnail, with its size and format. */
	export interface Thumbnail {

		/** The thumbnail's content type, i.e. "image/png". Always set. */
		contentType?: string | null;

		/** The thumbnail file itself. That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.) Always set. */
		data?: string | null;

		/** The height of the thumbnail, in pixels. Always set. */
		heightPx?: number | null;

		/** The width of the thumbnail, in pixels. Always set. */
		widthPx?: number | null;
	}

	/** A single thumbnail, with its size and format. */
	export interface ThumbnailFormProperties {

		/** The thumbnail's content type, i.e. "image/png". Always set. */
		contentType: FormControl<string | null | undefined>,

		/** The thumbnail file itself. That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.) Always set. */
		data: FormControl<string | null | undefined>,

		/** The height of the thumbnail, in pixels. Always set. */
		heightPx: FormControl<number | null | undefined>,

		/** The width of the thumbnail, in pixels. Always set. */
		widthPx: FormControl<number | null | undefined>,
	}
	export function CreateThumbnailFormGroup() {
		return new FormGroup<ThumbnailFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			heightPx: new FormControl<number | null | undefined>(undefined),
			widthPx: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional details of in-app purchases encountered during the crawl. */
	export interface InAppPurchasesFound {

		/** The total number of in-app purchases flows explored: how many times the robo tries to buy a SKU. */
		inAppPurchasesFlowsExplored?: number | null;

		/** The total number of in-app purchases flows started. */
		inAppPurchasesFlowsStarted?: number | null;
	}

	/** Additional details of in-app purchases encountered during the crawl. */
	export interface InAppPurchasesFoundFormProperties {

		/** The total number of in-app purchases flows explored: how many times the robo tries to buy a SKU. */
		inAppPurchasesFlowsExplored: FormControl<number | null | undefined>,

		/** The total number of in-app purchases flows started. */
		inAppPurchasesFlowsStarted: FormControl<number | null | undefined>,
	}
	export function CreateInAppPurchasesFoundFormGroup() {
		return new FormGroup<InAppPurchasesFoundFormProperties>({
			inAppPurchasesFlowsExplored: new FormControl<number | null | undefined>(undefined),
			inAppPurchasesFlowsStarted: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Step Id and outcome of each individual step that was run as a group with other steps with the same configuration. */
	export interface IndividualOutcome {

		/** Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0. */
		multistepNumber?: number | null;
		outcomeSummary?: OutcomeSummary | null;

		/** A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
		runDuration?: Duration;
		stepId?: string | null;
	}

	/** Step Id and outcome of each individual step that was run as a group with other steps with the same configuration. */
	export interface IndividualOutcomeFormProperties {

		/** Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0. */
		multistepNumber: FormControl<number | null | undefined>,
		outcomeSummary: FormControl<OutcomeSummary | null | undefined>,
		stepId: FormControl<string | null | undefined>,
	}
	export function CreateIndividualOutcomeFormGroup() {
		return new FormGroup<IndividualOutcomeFormProperties>({
			multistepNumber: new FormControl<number | null | undefined>(undefined),
			outcomeSummary: new FormControl<OutcomeSummary | null | undefined>(undefined),
			stepId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A warning that Robo did not crawl potentially important parts of the app. */
	export interface InsufficientCoverage {
	}

	/** A warning that Robo did not crawl potentially important parts of the app. */
	export interface InsufficientCoverageFormProperties {
	}
	export function CreateInsufficientCoverageFormGroup() {
		return new FormGroup<InsufficientCoverageFormProperties>({
		});

	}


	/** Additional details for an iOS app crash. */
	export interface IosAppCrashed {

		/** A stacktrace. */
		stackTrace?: StackTrace;
	}

	/** Additional details for an iOS app crash. */
	export interface IosAppCrashedFormProperties {
	}
	export function CreateIosAppCrashedFormGroup() {
		return new FormGroup<IosAppCrashedFormProperties>({
		});

	}


	/** Failed to find the launcher activity of an app. */
	export interface LauncherActivityNotFound {
	}

	/** Failed to find the launcher activity of an app. */
	export interface LauncherActivityNotFoundFormProperties {
	}
	export function CreateLauncherActivityNotFoundFormGroup() {
		return new FormGroup<LauncherActivityNotFoundFormProperties>({
		});

	}


	/** Response message for EnvironmentService.ListEnvironments. */
	export interface ListEnvironmentsResponse {

		/** Environments. Always set. */
		environments?: Array<Environment>;

		/** A Execution id Always set. */
		executionId?: string | null;

		/** A History id. Always set. */
		historyId?: string | null;

		/** A continuation token to resume the query at the next item. Will only be set if there are more Environments to fetch. */
		nextPageToken?: string | null;

		/** A Project id. Always set. */
		projectId?: string | null;
	}

	/** Response message for EnvironmentService.ListEnvironments. */
	export interface ListEnvironmentsResponseFormProperties {

		/** A Execution id Always set. */
		executionId: FormControl<string | null | undefined>,

		/** A History id. Always set. */
		historyId: FormControl<string | null | undefined>,

		/** A continuation token to resume the query at the next item. Will only be set if there are more Environments to fetch. */
		nextPageToken: FormControl<string | null | undefined>,

		/** A Project id. Always set. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsResponseFormGroup() {
		return new FormGroup<ListEnvironmentsResponseFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			historyId: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExecutionsResponse {

		/** Executions. Always set. */
		executions?: Array<Execution>;

		/** A continuation token to resume the query at the next item. Will only be set if there are more Executions to fetch. */
		nextPageToken?: string | null;
	}
	export interface ListExecutionsResponseFormProperties {

		/** A continuation token to resume the query at the next item. Will only be set if there are more Executions to fetch. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsResponseFormGroup() {
		return new FormGroup<ListExecutionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for HistoryService.List */
	export interface ListHistoriesResponse {

		/** Histories. */
		histories?: Array<History>;

		/** A continuation token to resume the query at the next item. Will only be set if there are more histories to fetch. Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes. */
		nextPageToken?: string | null;
	}

	/** Response message for HistoryService.List */
	export interface ListHistoriesResponseFormProperties {

		/** A continuation token to resume the query at the next item. Will only be set if there are more histories to fetch. Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListHistoriesResponseFormGroup() {
		return new FormGroup<ListHistoriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPerfSampleSeriesResponse {

		/** The resulting PerfSampleSeries sorted by id */
		perfSampleSeries?: Array<PerfSampleSeries>;
	}
	export interface ListPerfSampleSeriesResponseFormProperties {
	}
	export function CreateListPerfSampleSeriesResponseFormGroup() {
		return new FormGroup<ListPerfSampleSeriesResponseFormProperties>({
		});

	}


	/** Resource representing a collection of performance samples (or data points) */
	export interface PerfSampleSeries {

		/** Encapsulates the metadata for basic sample series represented by a line chart */
		basicPerfSampleSeries?: BasicPerfSampleSeries;

		/** A tool results execution ID. @OutputOnly */
		executionId?: string | null;

		/** A tool results history ID. @OutputOnly */
		historyId?: string | null;

		/** The cloud project @OutputOnly */
		projectId?: string | null;

		/** A sample series id @OutputOnly */
		sampleSeriesId?: string | null;

		/** A tool results step ID. @OutputOnly */
		stepId?: string | null;
	}

	/** Resource representing a collection of performance samples (or data points) */
	export interface PerfSampleSeriesFormProperties {

		/** A tool results execution ID. @OutputOnly */
		executionId: FormControl<string | null | undefined>,

		/** A tool results history ID. @OutputOnly */
		historyId: FormControl<string | null | undefined>,

		/** The cloud project @OutputOnly */
		projectId: FormControl<string | null | undefined>,

		/** A sample series id @OutputOnly */
		sampleSeriesId: FormControl<string | null | undefined>,

		/** A tool results step ID. @OutputOnly */
		stepId: FormControl<string | null | undefined>,
	}
	export function CreatePerfSampleSeriesFormGroup() {
		return new FormGroup<PerfSampleSeriesFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			historyId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			sampleSeriesId: new FormControl<string | null | undefined>(undefined),
			stepId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPerfSamplesResponse {

		/** Optional, returned if result size exceeds the page size specified in the request (or the default page size, 500, if unspecified). It indicates the last sample timestamp to be used as page_token in subsequent request */
		nextPageToken?: string | null;
		perfSamples?: Array<PerfSample>;
	}
	export interface ListPerfSamplesResponseFormProperties {

		/** Optional, returned if result size exceeds the page size specified in the request (or the default page size, 500, if unspecified). It indicates the last sample timestamp to be used as page_token in subsequent request */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPerfSamplesResponseFormGroup() {
		return new FormGroup<ListPerfSamplesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListScreenshotClustersResponse {

		/** The set of clusters associated with an execution Always set */
		clusters?: Array<ScreenshotCluster>;
	}
	export interface ListScreenshotClustersResponseFormProperties {
	}
	export function CreateListScreenshotClustersResponseFormGroup() {
		return new FormGroup<ListScreenshotClustersResponseFormProperties>({
		});

	}

	export interface ScreenshotCluster {

		/** A string that describes the activity of every screen in the cluster. */
		activity?: string | null;

		/** A unique identifier for the cluster. @OutputOnly */
		clusterId?: string | null;
		keyScreen?: Screen;

		/** Full list of screens. */
		screens?: Array<Screen>;
	}
	export interface ScreenshotClusterFormProperties {

		/** A string that describes the activity of every screen in the cluster. */
		activity: FormControl<string | null | undefined>,

		/** A unique identifier for the cluster. @OutputOnly */
		clusterId: FormControl<string | null | undefined>,
	}
	export function CreateScreenshotClusterFormGroup() {
		return new FormGroup<ScreenshotClusterFormProperties>({
			activity: new FormControl<string | null | undefined>(undefined),
			clusterId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Screen {

		/** File reference of the png file. Required. */
		fileReference?: string | null;

		/** Locale of the device that the screenshot was taken on. Required. */
		locale?: string | null;

		/** Model of the device that the screenshot was taken on. Required. */
		model?: string | null;

		/** OS version of the device that the screenshot was taken on. Required. */
		version?: string | null;
	}
	export interface ScreenFormProperties {

		/** File reference of the png file. Required. */
		fileReference: FormControl<string | null | undefined>,

		/** Locale of the device that the screenshot was taken on. Required. */
		locale: FormControl<string | null | undefined>,

		/** Model of the device that the screenshot was taken on. Required. */
		model: FormControl<string | null | undefined>,

		/** OS version of the device that the screenshot was taken on. Required. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateScreenFormGroup() {
		return new FormGroup<ScreenFormProperties>({
			fileReference: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AccessibilityService.ListStepAccessibilityClusters. */
	export interface ListStepAccessibilityClustersResponse {

		/** A sequence of accessibility suggestions, grouped into clusters. Within the sequence, clusters that belong to the same SuggestionCategory should be adjacent. Within each category, clusters should be ordered by their SuggestionPriority (ERRORs first). The categories should be ordered by their highest priority cluster. */
		clusters?: Array<SuggestionClusterProto>;

		/** A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Always presents. */
		name?: string | null;
	}

	/** Response message for AccessibilityService.ListStepAccessibilityClusters. */
	export interface ListStepAccessibilityClustersResponseFormProperties {

		/** A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Always presents. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateListStepAccessibilityClustersResponseFormGroup() {
		return new FormGroup<ListStepAccessibilityClustersResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's. */
	export interface SuggestionClusterProto {

		/** Category in which these types of suggestions should appear. Always set. */
		category?: SuggestionClusterProtoCategory | null;

		/** A sequence of suggestions. All of the suggestions within a cluster must have the same SuggestionPriority and belong to the same SuggestionCategory. Suggestions with the same screenshot URL should be adjacent. */
		suggestions?: Array<SuggestionProto>;
	}

	/** A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's. */
	export interface SuggestionClusterProtoFormProperties {

		/** Category in which these types of suggestions should appear. Always set. */
		category: FormControl<SuggestionClusterProtoCategory | null | undefined>,
	}
	export function CreateSuggestionClusterProtoFormGroup() {
		return new FormGroup<SuggestionClusterProtoFormProperties>({
			category: new FormControl<SuggestionClusterProtoCategory | null | undefined>(undefined),
		});

	}

	export enum SuggestionClusterProtoCategory { unknownCategory = 'unknownCategory', contentLabeling = 'contentLabeling', touchTargetSize = 'touchTargetSize', lowContrast = 'lowContrast', implementation = 'implementation' }

	export interface SuggestionProto {

		/** Reference to a help center article concerning this type of suggestion. Always set. */
		helpUrl?: string | null;

		/** IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests. */
		longMessage?: SafeHtmlProto;

		/** Relative importance of a suggestion. Always set. */
		priority?: SuggestionProtoPriority | null;

		/** A somewhat human readable identifier of the source view, if it does not have a resource_name. This is a path within the accessibility hierarchy, an element with resource name; similar to an XPath. */
		pseudoResourceId?: string | null;

		/** A rectangular region. */
		region?: RegionProto;

		/** Reference to a view element, identified by its resource name, if it has one. */
		resourceName?: string | null;

		/** ID of the screen for the suggestion. It is used for getting the corresponding screenshot path. For example, screen_id "1" corresponds to "1.png" file in GCS. Always set. */
		screenId?: string | null;

		/** Relative importance of a suggestion as compared with other suggestions that have the same priority and category. This is a meaningless value that can be used to order suggestions that are in the same category and have the same priority. The larger values have higher priority (i.e., are more important). Optional. */
		secondaryPriority?: number | null;

		/** IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests. */
		shortMessage?: SafeHtmlProto;

		/** General title for the suggestion, in the user's language, without markup. Always set. */
		title?: string | null;
	}
	export interface SuggestionProtoFormProperties {

		/** Reference to a help center article concerning this type of suggestion. Always set. */
		helpUrl: FormControl<string | null | undefined>,

		/** Relative importance of a suggestion. Always set. */
		priority: FormControl<SuggestionProtoPriority | null | undefined>,

		/** A somewhat human readable identifier of the source view, if it does not have a resource_name. This is a path within the accessibility hierarchy, an element with resource name; similar to an XPath. */
		pseudoResourceId: FormControl<string | null | undefined>,

		/** Reference to a view element, identified by its resource name, if it has one. */
		resourceName: FormControl<string | null | undefined>,

		/** ID of the screen for the suggestion. It is used for getting the corresponding screenshot path. For example, screen_id "1" corresponds to "1.png" file in GCS. Always set. */
		screenId: FormControl<string | null | undefined>,

		/** Relative importance of a suggestion as compared with other suggestions that have the same priority and category. This is a meaningless value that can be used to order suggestions that are in the same category and have the same priority. The larger values have higher priority (i.e., are more important). Optional. */
		secondaryPriority: FormControl<number | null | undefined>,

		/** General title for the suggestion, in the user's language, without markup. Always set. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSuggestionProtoFormGroup() {
		return new FormGroup<SuggestionProtoFormProperties>({
			helpUrl: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<SuggestionProtoPriority | null | undefined>(undefined),
			pseudoResourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			screenId: new FormControl<string | null | undefined>(undefined),
			secondaryPriority: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests. */
	export interface SafeHtmlProto {

		/** IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. */
		privateDoNotAccessOrElseSafeHtmlWrappedValue?: string | null;
	}

	/** IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests. */
	export interface SafeHtmlProtoFormProperties {

		/** IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. */
		privateDoNotAccessOrElseSafeHtmlWrappedValue: FormControl<string | null | undefined>,
	}
	export function CreateSafeHtmlProtoFormGroup() {
		return new FormGroup<SafeHtmlProtoFormProperties>({
			privateDoNotAccessOrElseSafeHtmlWrappedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SuggestionProtoPriority { unknownPriority = 'unknownPriority', error = 'error', warning = 'warning', info = 'info' }


	/** A rectangular region. */
	export interface RegionProto {

		/** The height, in pixels. Always set. */
		heightPx?: number | null;

		/** The left side of the rectangle, in pixels. Always set. */
		leftPx?: number | null;

		/** The top of the rectangle, in pixels. Always set. */
		topPx?: number | null;

		/** The width, in pixels. Always set. */
		widthPx?: number | null;
	}

	/** A rectangular region. */
	export interface RegionProtoFormProperties {

		/** The height, in pixels. Always set. */
		heightPx: FormControl<number | null | undefined>,

		/** The left side of the rectangle, in pixels. Always set. */
		leftPx: FormControl<number | null | undefined>,

		/** The top of the rectangle, in pixels. Always set. */
		topPx: FormControl<number | null | undefined>,

		/** The width, in pixels. Always set. */
		widthPx: FormControl<number | null | undefined>,
	}
	export function CreateRegionProtoFormGroup() {
		return new FormGroup<RegionProtoFormProperties>({
			heightPx: new FormControl<number | null | undefined>(undefined),
			leftPx: new FormControl<number | null | undefined>(undefined),
			topPx: new FormControl<number | null | undefined>(undefined),
			widthPx: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response containing the thumbnails in a step. */
	export interface ListStepThumbnailsResponse {

		/** A continuation token to resume the query at the next item. If set, indicates that there are more thumbnails to read, by calling list again with this value in the page_token field. */
		nextPageToken?: string | null;

		/** A list of image data. Images are returned in a deterministic order; they are ordered by these factors, in order of importance: * First, by their associated test case. Images without a test case are considered greater than images with one. * Second, by their creation time. Images without a creation time are greater than images with one. * Third, by the order in which they were added to the step (by calls to CreateStep or UpdateStep). */
		thumbnails?: Array<Image>;
	}

	/** A response containing the thumbnails in a step. */
	export interface ListStepThumbnailsResponseFormProperties {

		/** A continuation token to resume the query at the next item. If set, indicates that there are more thumbnails to read, by calling list again with this value in the page_token field. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListStepThumbnailsResponseFormGroup() {
		return new FormGroup<ListStepThumbnailsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for StepService.List. */
	export interface ListStepsResponse {

		/** A continuation token to resume the query at the next item. If set, indicates that there are more steps to read, by calling list again with this value in the page_token field. */
		nextPageToken?: string | null;

		/** Steps. */
		steps?: Array<Step>;
	}

	/** Response message for StepService.List. */
	export interface ListStepsResponseFormProperties {

		/** A continuation token to resume the query at the next item. If set, indicates that there are more steps to read, by calling list again with this value in the page_token field. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListStepsResponseFormGroup() {
		return new FormGroup<ListStepsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates a TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable. */
	export interface Step {

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
		completionTime?: Timestamp;

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
		creationTime?: Timestamp;

		/** A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional */
		description?: string | null;

		/** A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
		deviceUsageDuration?: Duration;

		/** If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set */
		dimensionValue?: Array<StepDimensionValueEntry>;

		/** Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set */
		hasImages?: boolean | null;

		/** Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value */
		labels?: Array<StepLabelsEntry>;

		/** Details when multiple steps are run with the same configuration as a group. */
		multiStep?: MultiStep;

		/** A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set */
		name?: string | null;

		/** Interprets a result so that humans and machines can act on it. */
		outcome?: Outcome;

		/** A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
		runDuration?: Duration;

		/** The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional */
		state?: MergedResultState | null;

		/** A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set */
		stepId?: string | null;

		/** A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field. */
		testExecutionStep?: TestExecutionStep;

		/** Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another. */
		toolExecutionStep?: ToolExecutionStep;
	}

	/** A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates a TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable. */
	export interface StepFormProperties {

		/** A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional */
		description: FormControl<string | null | undefined>,

		/** Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set */
		hasImages: FormControl<boolean | null | undefined>,

		/** A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set */
		name: FormControl<string | null | undefined>,

		/** The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional */
		state: FormControl<MergedResultState | null | undefined>,

		/** A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set */
		stepId: FormControl<string | null | undefined>,
	}
	export function CreateStepFormGroup() {
		return new FormGroup<StepFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			hasImages: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MergedResultState | null | undefined>(undefined),
			stepId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StepDimensionValueEntry {
		key?: string | null;
		value?: string | null;
	}
	export interface StepDimensionValueEntryFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateStepDimensionValueEntryFormGroup() {
		return new FormGroup<StepDimensionValueEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StepLabelsEntry {
		key?: string | null;
		value?: string | null;
	}
	export interface StepLabelsEntryFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateStepLabelsEntryFormGroup() {
		return new FormGroup<StepLabelsEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details when multiple steps are run with the same configuration as a group. */
	export interface MultiStep {

		/** Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0. */
		multistepNumber?: number | null;

		/** Stores rollup test status of multiple steps that were run as a group and outcome of each individual step. */
		primaryStep?: PrimaryStep;

		/** Step Id of the primary (original) step, which might be this step. */
		primaryStepId?: string | null;
	}

	/** Details when multiple steps are run with the same configuration as a group. */
	export interface MultiStepFormProperties {

		/** Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0. */
		multistepNumber: FormControl<number | null | undefined>,

		/** Step Id of the primary (original) step, which might be this step. */
		primaryStepId: FormControl<string | null | undefined>,
	}
	export function CreateMultiStepFormGroup() {
		return new FormGroup<MultiStepFormProperties>({
			multistepNumber: new FormControl<number | null | undefined>(undefined),
			primaryStepId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stores rollup test status of multiple steps that were run as a group and outcome of each individual step. */
	export interface PrimaryStep {

		/** Step Id and outcome of each individual step. */
		individualOutcome?: Array<IndividualOutcome>;

		/** Rollup test status of multiple steps that were run with the same configuration as a group. */
		rollUp?: OutcomeSummary | null;
	}

	/** Stores rollup test status of multiple steps that were run as a group and outcome of each individual step. */
	export interface PrimaryStepFormProperties {

		/** Rollup test status of multiple steps that were run with the same configuration as a group. */
		rollUp: FormControl<OutcomeSummary | null | undefined>,
	}
	export function CreatePrimaryStepFormGroup() {
		return new FormGroup<PrimaryStepFormProperties>({
			rollUp: new FormControl<OutcomeSummary | null | undefined>(undefined),
		});

	}


	/** A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field. */
	export interface TestExecutionStep {

		/** Issues observed during the test execution. For example, if the mobile app under test crashed during the test, the error message and the stack trace content can be recorded here to assist debugging. - In response: present if set by create or update - In create/update request: optional */
		testIssues?: Array<TestIssue>;

		/** List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded. The maximum allowed number of test suite overviews per step is 1000. - In response: always set - In create request: optional - In update request: never (use publishXunitXmlFiles custom method instead) */
		testSuiteOverviews?: Array<TestSuiteOverview>;

		/** Testing timing break down to know phases. */
		testTiming?: TestTiming;

		/** An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code. */
		toolExecution?: ToolExecution;
	}

	/** A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field. */
	export interface TestExecutionStepFormProperties {
	}
	export function CreateTestExecutionStepFormGroup() {
		return new FormGroup<TestExecutionStepFormProperties>({
		});

	}


	/** An issue detected occurring during a test execution. */
	export interface TestIssue {

		/** Category of issue. Required. */
		category?: TestIssueCategory | null;

		/** A brief human-readable message describing the issue. Required. */
		errorMessage?: string | null;

		/** Severity of issue. Required. */
		severity?: TestIssueSeverity | null;

		/** A stacktrace. */
		stackTrace?: StackTrace;

		/** Type of issue. Required. */
		type?: TestIssueType | null;

		/** `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++. Foo foo = ...; Any any; any.PackFrom(foo); ... if (any.UnpackTo(&foo)) { ... } Example 2: Pack and unpack a message in Java. Foo foo = ...; Any any = Any.pack(foo); ... if (any.is(Foo.class)) { foo = any.unpack(Foo.class); } Example 3: Pack and unpack a message in Python. foo = Foo(...) any = Any() any.Pack(foo) ... if any.Is(Foo.DESCRIPTOR): any.Unpack(foo) ... Example 4: Pack and unpack a message in Go foo := &pb.Foo{...} any, err := ptypes.MarshalAny(foo) ... foo := &pb.Foo{} if err := ptypes.UnmarshalAny(any, foo); err != nil { ... } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example "foo.bar.com/x/y.z" will yield type name "y.z". # JSON The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example: package google.profile; message Person { string first_name = 1; string last_name = 2; } { "@type": "type.googleapis.com/google.profile.Person", "firstName": , "lastName": } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message google.protobuf.Duration): { "@type": "type.googleapis.com/google.protobuf.Duration", "value": "1.212s" } */
		warning?: Any;
	}

	/** An issue detected occurring during a test execution. */
	export interface TestIssueFormProperties {

		/** Category of issue. Required. */
		category: FormControl<TestIssueCategory | null | undefined>,

		/** A brief human-readable message describing the issue. Required. */
		errorMessage: FormControl<string | null | undefined>,

		/** Severity of issue. Required. */
		severity: FormControl<TestIssueSeverity | null | undefined>,

		/** Type of issue. Required. */
		type: FormControl<TestIssueType | null | undefined>,
	}
	export function CreateTestIssueFormGroup() {
		return new FormGroup<TestIssueFormProperties>({
			category: new FormControl<TestIssueCategory | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<TestIssueSeverity | null | undefined>(undefined),
			type: new FormControl<TestIssueType | null | undefined>(undefined),
		});

	}

	export enum TestIssueCategory { unspecifiedCategory = 'unspecifiedCategory', common = 'common', robo = 'robo' }

	export enum TestIssueSeverity { unspecifiedSeverity = 'unspecifiedSeverity', info = 'info', suggestion = 'suggestion', warning = 'warning', severe = 'severe' }

	export enum TestIssueType { unspecifiedType = 'unspecifiedType', fatalException = 'fatalException', nativeCrash = 'nativeCrash', anr = 'anr', unusedRoboDirective = 'unusedRoboDirective', compatibleWithOrchestrator = 'compatibleWithOrchestrator', launcherActivityNotFound = 'launcherActivityNotFound', startActivityNotFound = 'startActivityNotFound', incompleteRoboScriptExecution = 'incompleteRoboScriptExecution', completeRoboScriptExecution = 'completeRoboScriptExecution', failedToInstall = 'failedToInstall', availableDeepLinks = 'availableDeepLinks', nonSdkApiUsageViolation = 'nonSdkApiUsageViolation', nonSdkApiUsageReport = 'nonSdkApiUsageReport', encounteredNonAndroidUiWidgetScreen = 'encounteredNonAndroidUiWidgetScreen', encounteredLoginScreen = 'encounteredLoginScreen', performedGoogleLogin = 'performedGoogleLogin', iosException = 'iosException', iosCrash = 'iosCrash', performedMonkeyActions = 'performedMonkeyActions', usedRoboDirective = 'usedRoboDirective', usedRoboIgnoreDirective = 'usedRoboIgnoreDirective', insufficientCoverage = 'insufficientCoverage', inAppPurchases = 'inAppPurchases', crashDialogError = 'crashDialogError', uiElementsTooDeep = 'uiElementsTooDeep', blankScreen = 'blankScreen', overlappingUiElements = 'overlappingUiElements', unityException = 'unityException', deviceOutOfMemory = 'deviceOutOfMemory', logcatCollectionError = 'logcatCollectionError', detectedAppSplashScreen = 'detectedAppSplashScreen', assetIssue = 'assetIssue' }


	/** Testing timing break down to know phases. */
	export interface TestTiming {

		/** A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
		testProcessDuration?: Duration;
	}

	/** Testing timing break down to know phases. */
	export interface TestTimingFormProperties {
	}
	export function CreateTestTimingFormGroup() {
		return new FormGroup<TestTimingFormProperties>({
		});

	}


	/** An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code. */
	export interface ToolExecution {

		/** The full tokenized command line including the program name (equivalent to argv in a C program). - In response: present if set by create request - In create request: optional - In update request: never set */
		commandLineArguments?: Array<string>;

		/** Exit code from a tool execution. */
		exitCode?: ToolExitCode;

		/** References to any plain text logs output the tool execution. This field can be set before the tool has exited in order to be able to have access to a live view of the logs while the tool is running. The maximum allowed number of tool logs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list */
		toolLogs?: Array<FileReference>;

		/** References to opaque files of any format output by the tool execution. The maximum allowed number of tool outputs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list */
		toolOutputs?: Array<ToolOutputReference>;
	}

	/** An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code. */
	export interface ToolExecutionFormProperties {
	}
	export function CreateToolExecutionFormGroup() {
		return new FormGroup<ToolExecutionFormProperties>({
		});

	}


	/** Exit code from a tool execution. */
	export interface ToolExitCode {

		/** Tool execution exit code. A value of 0 means that the execution was successful. - In response: always set - In create/update request: always set */
		number?: number | null;
	}

	/** Exit code from a tool execution. */
	export interface ToolExitCodeFormProperties {

		/** Tool execution exit code. A value of 0 means that the execution was successful. - In response: always set - In create/update request: always set */
		number: FormControl<number | null | undefined>,
	}
	export function CreateToolExitCodeFormGroup() {
		return new FormGroup<ToolExitCodeFormProperties>({
			number: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another. */
	export interface ToolExecutionStep {

		/** An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code. */
		toolExecution?: ToolExecution;
	}

	/** Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another. */
	export interface ToolExecutionStepFormProperties {
	}
	export function CreateToolExecutionStepFormGroup() {
		return new FormGroup<ToolExecutionStepFormProperties>({
		});

	}


	/** Response message for StepService.ListTestCases. */
	export interface ListTestCasesResponse {
		nextPageToken?: string | null;

		/** List of test cases. */
		testCases?: Array<TestCase>;
	}

	/** Response message for StepService.ListTestCases. */
	export interface ListTestCasesResponseFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestCasesResponseFormGroup() {
		return new FormGroup<ListTestCasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestCase {

		/** A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years. */
		elapsedTime?: Duration;

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
		endTime?: Timestamp;

		/** Why the test case was skipped. Present only for skipped test case */
		skippedMessage?: string | null;

		/** The stack trace details if the test case failed or encountered an error. The maximum size of the stack traces is 100KiB, beyond which the stack track will be truncated. Zero if the test case passed. */
		stackTraces?: Array<StackTrace>;

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings. */
		startTime?: Timestamp;

		/** The status of the test case. Required. */
		status?: TestCaseStatus | null;

		/** A unique identifier within a Step for this Test Case. */
		testCaseId?: string | null;

		/** A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name. */
		testCaseReference?: TestCaseReference;

		/** References to opaque files of any format output by the tool execution. @OutputOnly */
		toolOutputs?: Array<ToolOutputReference>;
	}
	export interface TestCaseFormProperties {

		/** Why the test case was skipped. Present only for skipped test case */
		skippedMessage: FormControl<string | null | undefined>,

		/** The status of the test case. Required. */
		status: FormControl<TestCaseStatus | null | undefined>,

		/** A unique identifier within a Step for this Test Case. */
		testCaseId: FormControl<string | null | undefined>,
	}
	export function CreateTestCaseFormGroup() {
		return new FormGroup<TestCaseFormProperties>({
			skippedMessage: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TestCaseStatus | null | undefined>(undefined),
			testCaseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TestCaseStatus { passed = 'passed', failed = 'failed', error = 'error', skipped = 'skipped', flaky = 'flaky' }


	/** A warning that there were issues in logcat collection. */
	export interface LogcatCollectionError {
	}

	/** A warning that there were issues in logcat collection. */
	export interface LogcatCollectionErrorFormProperties {
	}
	export function CreateLogcatCollectionErrorFormGroup() {
		return new FormGroup<LogcatCollectionErrorFormProperties>({
		});

	}

	export interface MemoryInfo {

		/** Maximum memory that can be allocated to the process in KiB */
		memoryCapInKibibyte?: string | null;

		/** Total memory available on the device in KiB */
		memoryTotalInKibibyte?: string | null;
	}
	export interface MemoryInfoFormProperties {

		/** Maximum memory that can be allocated to the process in KiB */
		memoryCapInKibibyte: FormControl<string | null | undefined>,

		/** Total memory available on the device in KiB */
		memoryTotalInKibibyte: FormControl<string | null | undefined>,
	}
	export function CreateMemoryInfoFormGroup() {
		return new FormGroup<MemoryInfoFormProperties>({
			memoryCapInKibibyte: new FormControl<string | null | undefined>(undefined),
			memoryTotalInKibibyte: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional details for a native crash. */
	export interface NativeCrash {

		/** A stacktrace. */
		stackTrace?: StackTrace;
	}

	/** Additional details for a native crash. */
	export interface NativeCrashFormProperties {
	}
	export function CreateNativeCrashFormGroup() {
		return new FormGroup<NativeCrashFormProperties>({
		});

	}


	/** A non-sdk API and examples of it being called along with other metadata See https://developer.android.com/distribute/best-practices/develop/restrictions-non-sdk-interfaces */
	export interface NonSdkApi {

		/** The signature of the Non-SDK API */
		apiSignature?: string | null;

		/** Example stack traces of this API being called. */
		exampleStackTraces?: Array<string>;

		/** Optional debugging insights for non-SDK API violations. */
		insights?: Array<NonSdkApiInsight>;

		/** The total number of times this API was observed to have been called. */
		invocationCount?: number | null;

		/** Which list this API appears on */
		list?: NonSdkApiList | null;
	}

	/** A non-sdk API and examples of it being called along with other metadata See https://developer.android.com/distribute/best-practices/develop/restrictions-non-sdk-interfaces */
	export interface NonSdkApiFormProperties {

		/** The signature of the Non-SDK API */
		apiSignature: FormControl<string | null | undefined>,

		/** The total number of times this API was observed to have been called. */
		invocationCount: FormControl<number | null | undefined>,

		/** Which list this API appears on */
		list: FormControl<NonSdkApiList | null | undefined>,
	}
	export function CreateNonSdkApiFormGroup() {
		return new FormGroup<NonSdkApiFormProperties>({
			apiSignature: new FormControl<string | null | undefined>(undefined),
			invocationCount: new FormControl<number | null | undefined>(undefined),
			list: new FormControl<NonSdkApiList | null | undefined>(undefined),
		});

	}


	/** Non-SDK API insights (to address debugging solutions). */
	export interface NonSdkApiInsight {

		/** Optional sample stack traces, for which this insight applies (there should be at least one). */
		exampleTraceMessages?: Array<string>;

		/** A unique ID, to be used for determining the effectiveness of this particular insight in the context of a matcher. (required) */
		matcherId?: string | null;

		/** This insight indicates that the hidden API usage originates from a Google-provided library. Users need not take any action. */
		pendingGoogleUpdateInsight?: PendingGoogleUpdateInsight;

		/** This insight is a recommendation to upgrade a given library to the specified version, in order to avoid dependencies on non-SDK APIs. */
		upgradeInsight?: UpgradeInsight;
	}

	/** Non-SDK API insights (to address debugging solutions). */
	export interface NonSdkApiInsightFormProperties {

		/** A unique ID, to be used for determining the effectiveness of this particular insight in the context of a matcher. (required) */
		matcherId: FormControl<string | null | undefined>,
	}
	export function CreateNonSdkApiInsightFormGroup() {
		return new FormGroup<NonSdkApiInsightFormProperties>({
			matcherId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This insight indicates that the hidden API usage originates from a Google-provided library. Users need not take any action. */
	export interface PendingGoogleUpdateInsight {

		/** The name of the Google-provided library with the non-SDK API dependency. */
		nameOfGoogleLibrary?: string | null;
	}

	/** This insight indicates that the hidden API usage originates from a Google-provided library. Users need not take any action. */
	export interface PendingGoogleUpdateInsightFormProperties {

		/** The name of the Google-provided library with the non-SDK API dependency. */
		nameOfGoogleLibrary: FormControl<string | null | undefined>,
	}
	export function CreatePendingGoogleUpdateInsightFormGroup() {
		return new FormGroup<PendingGoogleUpdateInsightFormProperties>({
			nameOfGoogleLibrary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This insight is a recommendation to upgrade a given library to the specified version, in order to avoid dependencies on non-SDK APIs. */
	export interface UpgradeInsight {

		/** The name of the package to be upgraded. */
		packageName?: string | null;

		/** The suggested version to upgrade to. Optional: In case we are not sure which version solves this problem */
		upgradeToVersion?: string | null;
	}

	/** This insight is a recommendation to upgrade a given library to the specified version, in order to avoid dependencies on non-SDK APIs. */
	export interface UpgradeInsightFormProperties {

		/** The name of the package to be upgraded. */
		packageName: FormControl<string | null | undefined>,

		/** The suggested version to upgrade to. Optional: In case we are not sure which version solves this problem */
		upgradeToVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeInsightFormGroup() {
		return new FormGroup<UpgradeInsightFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
			upgradeToVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NonSdkApiList { NONE = 'NONE', WHITE = 'WHITE', BLACK = 'BLACK', GREY = 'GREY', GREY_MAX_O = 'GREY_MAX_O', GREY_MAX_P = 'GREY_MAX_P', GREY_MAX_Q = 'GREY_MAX_Q', GREY_MAX_R = 'GREY_MAX_R' }


	/** Additional details for a non-sdk API usage violation. */
	export interface NonSdkApiUsageViolation {

		/** Signatures of a subset of those hidden API's. */
		apiSignatures?: Array<string>;

		/** Total number of unique hidden API's accessed. */
		uniqueApis?: number | null;
	}

	/** Additional details for a non-sdk API usage violation. */
	export interface NonSdkApiUsageViolationFormProperties {

		/** Total number of unique hidden API's accessed. */
		uniqueApis: FormControl<number | null | undefined>,
	}
	export function CreateNonSdkApiUsageViolationFormGroup() {
		return new FormGroup<NonSdkApiUsageViolationFormProperties>({
			uniqueApis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains a summary and examples of non-sdk API usage violations. */
	export interface NonSdkApiUsageViolationReport {

		/** Examples of the detected API usages. */
		exampleApis?: Array<NonSdkApi>;

		/** Minimum API level required for the application to run. */
		minSdkVersion?: number | null;

		/** Specifies the API Level on which the application is designed to run. */
		targetSdkVersion?: number | null;

		/** Total number of unique Non-SDK API's accessed. */
		uniqueApis?: number | null;
	}

	/** Contains a summary and examples of non-sdk API usage violations. */
	export interface NonSdkApiUsageViolationReportFormProperties {

		/** Minimum API level required for the application to run. */
		minSdkVersion: FormControl<number | null | undefined>,

		/** Specifies the API Level on which the application is designed to run. */
		targetSdkVersion: FormControl<number | null | undefined>,

		/** Total number of unique Non-SDK API's accessed. */
		uniqueApis: FormControl<number | null | undefined>,
	}
	export function CreateNonSdkApiUsageViolationReportFormGroup() {
		return new FormGroup<NonSdkApiUsageViolationReportFormProperties>({
			minSdkVersion: new FormControl<number | null | undefined>(undefined),
			targetSdkVersion: new FormControl<number | null | undefined>(undefined),
			uniqueApis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A warning that Robo encountered a screen that has overlapping clickable elements; this may indicate a potential UI issue. */
	export interface OverlappingUIElements {

		/** Resource names of the overlapping screen elements */
		resourceName?: Array<string>;

		/** The screen id of the elements */
		screenId?: string | null;
	}

	/** A warning that Robo encountered a screen that has overlapping clickable elements; this may indicate a potential UI issue. */
	export interface OverlappingUIElementsFormProperties {

		/** The screen id of the elements */
		screenId: FormControl<string | null | undefined>,
	}
	export function CreateOverlappingUIElementsFormGroup() {
		return new FormGroup<OverlappingUIElementsFormProperties>({
			screenId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates performance environment info */
	export interface PerfEnvironment {
		cpuInfo?: CPUInfo;
		memoryInfo?: MemoryInfo;
	}

	/** Encapsulates performance environment info */
	export interface PerfEnvironmentFormProperties {
	}
	export function CreatePerfEnvironmentFormGroup() {
		return new FormGroup<PerfEnvironmentFormProperties>({
		});

	}


	/** A summary of perf metrics collected and performance environment info */
	export interface PerfMetricsSummary {
		appStartTime?: AppStartTime;

		/** A tool results execution ID. @OutputOnly */
		executionId?: string | null;

		/** Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+. */
		graphicsStats?: GraphicsStats;

		/** A tool results history ID. @OutputOnly */
		historyId?: string | null;

		/** Encapsulates performance environment info */
		perfEnvironment?: PerfEnvironment;

		/** Set of resource collected */
		perfMetrics?: Array<BasicPerfSampleSeriesPerfMetricType>;

		/** The cloud project @OutputOnly */
		projectId?: string | null;

		/** A tool results step ID. @OutputOnly */
		stepId?: string | null;
	}

	/** A summary of perf metrics collected and performance environment info */
	export interface PerfMetricsSummaryFormProperties {

		/** A tool results execution ID. @OutputOnly */
		executionId: FormControl<string | null | undefined>,

		/** A tool results history ID. @OutputOnly */
		historyId: FormControl<string | null | undefined>,

		/** The cloud project @OutputOnly */
		projectId: FormControl<string | null | undefined>,

		/** A tool results step ID. @OutputOnly */
		stepId: FormControl<string | null | undefined>,
	}
	export function CreatePerfMetricsSummaryFormGroup() {
		return new FormGroup<PerfMetricsSummaryFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			historyId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			stepId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A notification that Robo signed in with Google. */
	export interface PerformedGoogleLogin {
	}

	/** A notification that Robo signed in with Google. */
	export interface PerformedGoogleLoginFormProperties {
	}
	export function CreatePerformedGoogleLoginFormGroup() {
		return new FormGroup<PerformedGoogleLoginFormProperties>({
		});

	}


	/** A notification that Robo performed some monkey actions. */
	export interface PerformedMonkeyActions {

		/** The total number of monkey actions performed during the crawl. */
		totalActions?: number | null;
	}

	/** A notification that Robo performed some monkey actions. */
	export interface PerformedMonkeyActionsFormProperties {

		/** The total number of monkey actions performed during the crawl. */
		totalActions: FormControl<number | null | undefined>,
	}
	export function CreatePerformedMonkeyActionsFormGroup() {
		return new FormGroup<PerformedMonkeyActionsFormProperties>({
			totalActions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Per-project settings for the Tool Results service. */
	export interface ProjectSettings {

		/** The name of the Google Cloud Storage bucket to which results are written. By default, this is unset. In update request: optional In response: optional */
		defaultBucket?: string | null;

		/** The name of the project's settings. Always of the form: projects/{project-id}/settings In update request: never set In response: always set */
		name?: string | null;
	}

	/** Per-project settings for the Tool Results service. */
	export interface ProjectSettingsFormProperties {

		/** The name of the Google Cloud Storage bucket to which results are written. By default, this is unset. In update request: optional In response: optional */
		defaultBucket: FormControl<string | null | undefined>,

		/** The name of the project's settings. Always of the form: projects/{project-id}/settings In update request: never set In response: always set */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProjectSettingsFormGroup() {
		return new FormGroup<ProjectSettingsFormProperties>({
			defaultBucket: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for StepService.PublishXunitXmlFiles. */
	export interface PublishXunitXmlFilesRequest {

		/** URI of the Xunit XML files to publish. The maximum size of the file this reference is pointing to is 50MB. Required. */
		xunitXmlFiles?: Array<FileReference>;
	}

	/** Request message for StepService.PublishXunitXmlFiles. */
	export interface PublishXunitXmlFilesRequestFormProperties {
	}
	export function CreatePublishXunitXmlFilesRequestFormGroup() {
		return new FormGroup<PublishXunitXmlFilesRequestFormProperties>({
		});

	}


	/** Execution stats for a user-provided Robo script. */
	export interface RoboScriptExecution {

		/** The number of Robo script actions executed successfully. */
		successfulActions?: number | null;

		/** The total number of actions in the Robo script. */
		totalActions?: number | null;
	}

	/** Execution stats for a user-provided Robo script. */
	export interface RoboScriptExecutionFormProperties {

		/** The number of Robo script actions executed successfully. */
		successfulActions: FormControl<number | null | undefined>,

		/** The total number of actions in the Robo script. */
		totalActions: FormControl<number | null | undefined>,
	}
	export function CreateRoboScriptExecutionFormGroup() {
		return new FormGroup<RoboScriptExecutionFormProperties>({
			successfulActions: new FormControl<number | null | undefined>(undefined),
			totalActions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** User provided intent failed to resolve to an activity. */
	export interface StartActivityNotFound {
		action?: string | null;
		uri?: string | null;
	}

	/** User provided intent failed to resolve to an activity. */
	export interface StartActivityNotFoundFormProperties {
		action: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateStartActivityNotFoundFormGroup() {
		return new FormGroup<StartActivityNotFoundFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A warning that the screen hierarchy is deeper than the recommended threshold. */
	export interface UIElementTooDeep {

		/** The depth of the screen element */
		depth?: number | null;

		/** The screen id of the element */
		screenId?: string | null;

		/** The screen state id of the element */
		screenStateId?: string | null;
	}

	/** A warning that the screen hierarchy is deeper than the recommended threshold. */
	export interface UIElementTooDeepFormProperties {

		/** The depth of the screen element */
		depth: FormControl<number | null | undefined>,

		/** The screen id of the element */
		screenId: FormControl<string | null | undefined>,

		/** The screen state id of the element */
		screenStateId: FormControl<string | null | undefined>,
	}
	export function CreateUIElementTooDeepFormGroup() {
		return new FormGroup<UIElementTooDeepFormProperties>({
			depth: new FormControl<number | null | undefined>(undefined),
			screenId: new FormControl<string | null | undefined>(undefined),
			screenStateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Default unspecified warning. */
	export interface UnspecifiedWarning {
	}

	/** Default unspecified warning. */
	export interface UnspecifiedWarningFormProperties {
	}
	export function CreateUnspecifiedWarningFormGroup() {
		return new FormGroup<UnspecifiedWarningFormProperties>({
		});

	}


	/** Additional details of an unused robodirective. */
	export interface UnusedRoboDirective {

		/** The name of the resource that was unused. */
		resourceName?: string | null;
	}

	/** Additional details of an unused robodirective. */
	export interface UnusedRoboDirectiveFormProperties {

		/** The name of the resource that was unused. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateUnusedRoboDirectiveFormGroup() {
		return new FormGroup<UnusedRoboDirectiveFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional details of a used Robo directive. */
	export interface UsedRoboDirective {

		/** The name of the resource that was used. */
		resourceName?: string | null;
	}

	/** Additional details of a used Robo directive. */
	export interface UsedRoboDirectiveFormProperties {

		/** The name of the resource that was used. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateUsedRoboDirectiveFormGroup() {
		return new FormGroup<UsedRoboDirectiveFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional details of a used Robo directive with an ignore action. Note: This is a different scenario than unused directive. */
	export interface UsedRoboIgnoreDirective {

		/** The name of the resource that was ignored. */
		resourceName?: string | null;
	}

	/** Additional details of a used Robo directive with an ignore action. Note: This is a different scenario than unused directive. */
	export interface UsedRoboIgnoreDirectiveFormProperties {

		/** The name of the resource that was ignored. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateUsedRoboIgnoreDirectiveFormGroup() {
		return new FormGroup<UsedRoboIgnoreDirectiveFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories
		 * @param {string} projectId A Project id. Required.
		 * @param {string} filterByName If set, only return histories with the given name. Optional.
		 * @param {number} pageSize The maximum number of Histories to fetch. Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100. Optional.
		 * @param {string} pageToken A continuation token to resume the query at the next item. Optional.
		 * @return {ListHistoriesResponse} Successful response
		 */
		Toolresults_projects_histories_list(projectId: string, filterByName: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListHistoriesResponse> {
			return this.http.get<ListHistoriesResponse>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories&filterByName=' + (filterByName == null ? '' : encodeURIComponent(filterByName)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
		 * Post toolresults/v1beta3/projects/{projectId}/histories
		 * @param {string} projectId A Project id. Required.
		 * @param {string} requestId A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
		 * @return {History} Successful response
		 */
		Toolresults_projects_histories_create(projectId: string, requestId: string | null | undefined, requestBody: History): Observable<History> {
			return this.http.post<History>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @return {History} Successful response
		 */
		Toolresults_projects_histories_get(projectId: string, historyId: string): Observable<History> {
			return this.http.get<History>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)), {});
		}

		/**
		 * Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {number} pageSize The maximum number of Executions to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
		 * @param {string} pageToken A continuation token to resume the query at the next item. Optional.
		 * @return {ListExecutionsResponse} Successful response
		 */
		Toolresults_projects_histories_executions_list(projectId: string, historyId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListExecutionsResponse> {
			return this.http.get<ListExecutionsResponse>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
		 * Post toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} requestId A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
		 * @return {Execution} Successful response
		 */
		Toolresults_projects_histories_executions_create(projectId: string, historyId: string, requestId: string | null | undefined, requestBody: Execution): Observable<Execution> {
			return this.http.post<Execution>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} executionId An Execution id. Required.
		 * @return {Execution} Successful response
		 */
		Toolresults_projects_histories_executions_get(projectId: string, historyId: string, executionId: string): Observable<Execution> {
			return this.http.get<Execution>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)), {});
		}

		/**
		 * Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
		 * Patch toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId Required.
		 * @param {string} executionId Required.
		 * @param {string} requestId A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
		 * @return {Execution} Successful response
		 */
		Toolresults_projects_histories_executions_patch(projectId: string, historyId: string, executionId: string, requestId: string | null | undefined, requestBody: Execution): Observable<Execution> {
			return this.http.patch<Execution>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} executionId An Execution id. Required.
		 * @return {ListScreenshotClustersResponse} Successful response
		 */
		Toolresults_projects_histories_executions_clusters_list(projectId: string, historyId: string, executionId: string): Observable<ListScreenshotClustersResponse> {
			return this.http.get<ListScreenshotClustersResponse>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/clusters', {});
		}

		/**
		 * Retrieves a single screenshot cluster by its ID
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} executionId An Execution id. Required.
		 * @param {string} clusterId A Cluster id Required.
		 * @return {ScreenshotCluster} Successful response
		 */
		Toolresults_projects_histories_executions_clusters_get(projectId: string, historyId: string, executionId: string, clusterId: string): Observable<ScreenshotCluster> {
			return this.http.get<ScreenshotCluster>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)), {});
		}

		/**
		 * Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments
		 * @param {string} projectId Required. A Project id.
		 * @param {string} historyId Required. A History id.
		 * @param {string} executionId Required. An Execution id.
		 * @param {number} pageSize The maximum number of Environments to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0.
		 * @param {string} pageToken A continuation token to resume the query at the next item.
		 * @return {ListEnvironmentsResponse} Successful response
		 */
		Toolresults_projects_histories_executions_environments_list(projectId: string, historyId: string, executionId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEnvironmentsResponse> {
			return this.http.get<ListEnvironmentsResponse>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/environments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments/{environmentId}
		 * @param {string} projectId Required. A Project id.
		 * @param {string} historyId Required. A History id.
		 * @param {string} executionId Required. An Execution id.
		 * @param {string} environmentId Required. An Environment id.
		 * @return {Environment} Successful response
		 */
		Toolresults_projects_histories_executions_environments_get(projectId: string, historyId: string, executionId: string, environmentId: string): Observable<Environment> {
			return this.http.get<Environment>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), {});
		}

		/**
		 * Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} executionId A Execution id. Required.
		 * @param {number} pageSize The maximum number of Steps to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
		 * @param {string} pageToken A continuation token to resume the query at the next item. Optional.
		 * @return {ListStepsResponse} Successful response
		 */
		Toolresults_projects_histories_executions_steps_list(projectId: string, historyId: string, executionId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListStepsResponse> {
			return this.http.get<ListStepsResponse>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
		 * Post toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps
		 * @param {string} projectId Required. A Project id.
		 * @param {string} historyId Required. A History id.
		 * @param {string} executionId Required. An Execution id.
		 * @param {string} requestId A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
		 * @return {Step} Successful response
		 */
		Toolresults_projects_histories_executions_steps_create(projectId: string, historyId: string, executionId: string, requestId: string | null | undefined, requestBody: Step): Observable<Step> {
			return this.http.post<Step>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} executionId A Execution id. Required.
		 * @param {string} stepId A Step id. Required.
		 * @return {Step} Successful response
		 */
		Toolresults_projects_histories_executions_steps_get(projectId: string, historyId: string, executionId: string, stepId: string): Observable<Step> {
			return this.http.get<Step>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)), {});
		}

		/**
		 * Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
		 * Patch toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} executionId A Execution id. Required.
		 * @param {string} stepId A Step id. Required.
		 * @param {string} requestId A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
		 * @return {Step} Successful response
		 */
		Toolresults_projects_histories_executions_steps_patch(projectId: string, historyId: string, executionId: string, stepId: string, requestId: string | null | undefined, requestBody: Step): Observable<Step> {
			return this.http.patch<Step>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary
		 * @param {string} projectId The cloud project
		 * @param {string} historyId A tool results history ID.
		 * @param {string} executionId A tool results execution ID.
		 * @param {string} stepId A tool results step ID.
		 * @return {PerfMetricsSummary} Successful response
		 */
		Toolresults_projects_histories_executions_steps_getPerfMetricsSummary(projectId: string, historyId: string, executionId: string, stepId: string): Observable<PerfMetricsSummary> {
			return this.http.get<PerfMetricsSummary>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '/perfMetricsSummary', {});
		}

		/**
		 * Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist
		 * Post toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary
		 * @param {string} projectId The cloud project
		 * @param {string} historyId A tool results history ID.
		 * @param {string} executionId A tool results execution ID.
		 * @param {string} stepId A tool results step ID.
		 * @return {PerfMetricsSummary} Successful response
		 */
		Toolresults_projects_histories_executions_steps_perfMetricsSummary_create(projectId: string, historyId: string, executionId: string, stepId: string, requestBody: PerfMetricsSummary): Observable<PerfMetricsSummary> {
			return this.http.post<PerfMetricsSummary>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '/perfMetricsSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries
		 * @param {string} projectId The cloud project
		 * @param {string} historyId A tool results history ID.
		 * @param {string} executionId A tool results execution ID.
		 * @param {string} stepId A tool results step ID.
		 * @param {Array<BasicPerfSampleSeriesPerfMetricType>} filter Specify one or more PerfMetricType values such as CPU to filter the result
		 * @return {ListPerfSampleSeriesResponse} Successful response
		 */
		Toolresults_projects_histories_executions_steps_perfSampleSeries_list(projectId: string, historyId: string, executionId: string, stepId: string, filter: Array<BasicPerfSampleSeriesPerfMetricType> | null | undefined): Observable<ListPerfSampleSeriesResponse> {
			return this.http.get<ListPerfSampleSeriesResponse>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '/perfSampleSeries&' + filter?.map(z => `filter=${z}`).join('&'), {});
		}

		/**
		 * Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
		 * Post toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries
		 * @param {string} projectId The cloud project
		 * @param {string} historyId A tool results history ID.
		 * @param {string} executionId A tool results execution ID.
		 * @param {string} stepId A tool results step ID.
		 * @return {PerfSampleSeries} Successful response
		 */
		Toolresults_projects_histories_executions_steps_perfSampleSeries_create(projectId: string, historyId: string, executionId: string, stepId: string, requestBody: PerfSampleSeries): Observable<PerfSampleSeries> {
			return this.http.post<PerfSampleSeries>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '/perfSampleSeries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}
		 * @param {string} projectId The cloud project
		 * @param {string} historyId A tool results history ID.
		 * @param {string} executionId A tool results execution ID.
		 * @param {string} stepId A tool results step ID.
		 * @param {string} sampleSeriesId A sample series id
		 * @return {PerfSampleSeries} Successful response
		 */
		Toolresults_projects_histories_executions_steps_perfSampleSeries_get(projectId: string, historyId: string, executionId: string, stepId: string, sampleSeriesId: string): Observable<PerfSampleSeries> {
			return this.http.get<PerfSampleSeries>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '/perfSampleSeries/' + (sampleSeriesId == null ? '' : encodeURIComponent(sampleSeriesId)), {});
		}

		/**
		 * Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples
		 * @param {string} projectId The cloud project
		 * @param {string} historyId A tool results history ID.
		 * @param {string} executionId A tool results execution ID.
		 * @param {string} stepId A tool results step ID.
		 * @param {string} sampleSeriesId A sample series id
		 * @param {number} pageSize The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
		 * @param {string} pageToken Optional, the next_page_token returned in the previous response
		 * @return {ListPerfSamplesResponse} Successful response
		 */
		Toolresults_projects_histories_executions_steps_perfSampleSeries_samples_list(projectId: string, historyId: string, executionId: string, stepId: string, sampleSeriesId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPerfSamplesResponse> {
			return this.http.get<ListPerfSamplesResponse>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '/perfSampleSeries/' + (sampleSeriesId == null ? '' : encodeURIComponent(sampleSeriesId)) + '/samples&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
		 * Post toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate
		 * @param {string} projectId The cloud project
		 * @param {string} historyId A tool results history ID.
		 * @param {string} executionId A tool results execution ID.
		 * @param {string} stepId A tool results step ID.
		 * @param {string} sampleSeriesId A sample series id
		 * @return {BatchCreatePerfSamplesResponse} Successful response
		 */
		Toolresults_projects_histories_executions_steps_perfSampleSeries_samples_batchCreate(projectId: string, historyId: string, executionId: string, stepId: string, sampleSeriesId: string, requestBody: BatchCreatePerfSamplesRequest): Observable<BatchCreatePerfSamplesResponse> {
			return this.http.post<BatchCreatePerfSamplesResponse>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '/perfSampleSeries/' + (sampleSeriesId == null ? '' : encodeURIComponent(sampleSeriesId)) + '/samples:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} executionId A Execution id Required.
		 * @param {string} stepId A Step id. Note: This step must include a TestExecutionStep. Required.
		 * @param {number} pageSize The maximum number of TestCases to fetch. Default value: 100. The server will use this default if the field is not set or has a value of 0. Optional.
		 * @param {string} pageToken A continuation token to resume the query at the next item. Optional.
		 * @return {ListTestCasesResponse} Successful response
		 */
		Toolresults_projects_histories_executions_steps_testCases_list(projectId: string, historyId: string, executionId: string, stepId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTestCasesResponse> {
			return this.http.get<ListTestCasesResponse>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '/testCases&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases/{testCaseId}
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} executionId A Execution id Required.
		 * @param {string} stepId A Step id. Note: This step must include a TestExecutionStep. Required.
		 * @param {string} testCaseId A Test Case id. Required.
		 * @return {TestCase} Successful response
		 */
		Toolresults_projects_histories_executions_steps_testCases_get(projectId: string, historyId: string, executionId: string, stepId: string, testCaseId: string): Observable<TestCase> {
			return this.http.get<TestCase>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '/testCases/' + (testCaseId == null ? '' : encodeURIComponent(testCaseId)), {});
		}

		/**
		 * Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
		 * Get toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} executionId An Execution id. Required.
		 * @param {string} stepId A Step id. Required.
		 * @param {number} pageSize The maximum number of thumbnails to fetch. Default value: 50. The server will use this default if the field is not set or has a value of 0. Optional.
		 * @param {string} pageToken A continuation token to resume the query at the next item. Optional.
		 * @return {ListStepThumbnailsResponse} Successful response
		 */
		Toolresults_projects_histories_executions_steps_thumbnails_list(projectId: string, historyId: string, executionId: string, stepId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListStepThumbnailsResponse> {
			return this.http.get<ListStepThumbnailsResponse>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + '/thumbnails&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
		 * Post toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles
		 * @param {string} projectId A Project id. Required.
		 * @param {string} historyId A History id. Required.
		 * @param {string} executionId A Execution id. Required.
		 * @param {string} stepId A Step id. Note: This step must include a TestExecutionStep. Required.
		 * @return {Step} Successful response
		 */
		Toolresults_projects_histories_executions_steps_publishXunitXmlFiles(projectId: string, historyId: string, executionId: string, stepId: string, requestBody: PublishXunitXmlFilesRequest): Observable<Step> {
			return this.http.post<Step>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/histories/' + (historyId == null ? '' : encodeURIComponent(historyId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/steps/' + (stepId == null ? '' : encodeURIComponent(stepId)) + ':publishXunitXmlFiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project
		 * Get toolresults/v1beta3/projects/{projectId}/settings
		 * @param {string} projectId A Project id. Required.
		 * @return {ProjectSettings} Successful response
		 */
		Toolresults_projects_getSettings(projectId: string): Observable<ProjectSettings> {
			return this.http.get<ProjectSettings>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/settings', {});
		}

		/**
		 * Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage
		 * Post toolresults/v1beta3/projects/{projectId}:initializeSettings
		 * @param {string} projectId A Project id. Required.
		 * @return {ProjectSettings} Successful response
		 */
		Toolresults_projects_initializeSettings(projectId: string): Observable<ProjectSettings> {
			return this.http.post<ProjectSettings>(this.baseUri + 'toolresults/v1beta3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':initializeSettings', null, {});
		}

		/**
		 * Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist
		 * Get toolresults/v1beta3/{name}:accessibilityClusters
		 * @param {string} name A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Required.
		 * @param {string} locale The accepted format is the canonical Unicode format with hyphen as a delimiter. Language must be lowercase, Language Script - Capitalized, Region - UPPERCASE. See http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for details. Required.
		 * @return {ListStepAccessibilityClustersResponse} Successful response
		 */
		Toolresults_projects_histories_executions_steps_accessibilityClusters(name: string, locale: string | null | undefined): Observable<ListStepAccessibilityClustersResponse> {
			return this.http.get<ListStepAccessibilityClustersResponse>(this.baseUri + 'toolresults/v1beta3/' + (name == null ? '' : encodeURIComponent(name)) + ':accessibilityClusters&locale=' + (locale == null ? '' : encodeURIComponent(locale)), {});
		}
	}

}

