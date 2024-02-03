import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Identifies an account and how to log into it. */
	export interface Account {

		/** Enables automatic Google account login. If set, the service automatically generates a Google test account and adds it to the device, before executing the test. Note that test accounts might be reused. Many applications show their full set of functionalities when an account is present on the device. Logging into the device with these generated accounts allows testing more functionalities. */
		googleAuto?: GoogleAuto;
	}

	/** Identifies an account and how to log into it. */
	export interface AccountFormProperties {
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
		});

	}


	/** Enables automatic Google account login. If set, the service automatically generates a Google test account and adds it to the device, before executing the test. Note that test accounts might be reused. Many applications show their full set of functionalities when an account is present on the device. Logging into the device with these generated accounts allows testing more functionalities. */
	export interface GoogleAuto {
	}

	/** Enables automatic Google account login. If set, the service automatically generates a Google test account and adds it to the device, before executing the test. Note that test accounts might be reused. Many applications show their full set of functionalities when an account is present on the device. Logging into the device with these generated accounts allows testing more functionalities. */
	export interface GoogleAutoFormProperties {
	}
	export function CreateGoogleAutoFormGroup() {
		return new FormGroup<GoogleAutoFormProperties>({
		});

	}


	/** A single Android device. */
	export interface AndroidDevice {

		/** Required. The id of the Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
		androidModelId?: string | null;

		/** Required. The id of the Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
		androidVersionId?: string | null;

		/** Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options. */
		locale?: string | null;

		/** Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options. */
		orientation?: string | null;
	}

	/** A single Android device. */
	export interface AndroidDeviceFormProperties {

		/** Required. The id of the Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
		androidModelId: FormControl<string | null | undefined>,

		/** Required. The id of the Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
		androidVersionId: FormControl<string | null | undefined>,

		/** Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options. */
		locale: FormControl<string | null | undefined>,

		/** Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options. */
		orientation: FormControl<string | null | undefined>,
	}
	export function CreateAndroidDeviceFormGroup() {
		return new FormGroup<AndroidDeviceFormProperties>({
			androidModelId: new FormControl<string | null | undefined>(undefined),
			androidVersionId: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			orientation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The currently supported Android devices. */
	export interface AndroidDeviceCatalog {

		/** The set of supported Android device models. */
		models?: Array<AndroidModel>;

		/** Android configuration that can be selected at the time a test is run. */
		runtimeConfiguration?: AndroidRuntimeConfiguration;

		/** The set of supported Android OS versions. */
		versions?: Array<AndroidVersion>;
	}

	/** The currently supported Android devices. */
	export interface AndroidDeviceCatalogFormProperties {
	}
	export function CreateAndroidDeviceCatalogFormGroup() {
		return new FormGroup<AndroidDeviceCatalogFormProperties>({
		});

	}


	/** A description of an Android device tests may be run on. */
	export interface AndroidModel {

		/** The company that this device is branded with. Example: "Google", "Samsung". */
		brand?: string | null;

		/** The name of the industrial design. This corresponds to android.os.Build.DEVICE. */
		codename?: string | null;

		/** Whether this device is virtual or physical. */
		form?: AndroidModelForm | null;

		/** Whether this device is a phone, tablet, wearable, etc. */
		formFactor?: AndroidModelFormFactor | null;

		/** The unique opaque id for this model. Use this for invoking the TestExecutionService. */
		id?: string | null;

		/** True if and only if tests with this model are recorded by stitching together screenshots. See use_low_spec_video_recording in device config. */
		lowFpsVideoRecording?: boolean | null;

		/** The manufacturer of this device. */
		manufacturer?: string | null;

		/** The human-readable marketing name for this device model. Examples: "Nexus 5", "Galaxy S5". */
		name?: string | null;

		/** Version-specific information of an Android model. */
		perVersionInfo?: Array<PerAndroidVersionInfo>;

		/** Screen density in DPI. This corresponds to ro.sf.lcd_density */
		screenDensity?: number | null;

		/** Screen size in the horizontal (X) dimension measured in pixels. */
		screenX?: number | null;

		/** Screen size in the vertical (Y) dimension measured in pixels. */
		screenY?: number | null;

		/** The list of supported ABIs for this device. This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2. The most preferred ABI is the first element in the list. Elements are optionally prefixed by "version_id:" (where version_id is the id of an AndroidVersion), denoting an ABI that is supported only on a particular version. */
		supportedAbis?: Array<string>;

		/** The set of Android versions this device supports. */
		supportedVersionIds?: Array<string>;

		/** Tags for this dimension. Examples: "default", "preview", "deprecated". */
		tags?: Array<string>;

		/** URL of a thumbnail image (photo) of the device. */
		thumbnailUrl?: string | null;
	}

	/** A description of an Android device tests may be run on. */
	export interface AndroidModelFormProperties {

		/** The company that this device is branded with. Example: "Google", "Samsung". */
		brand: FormControl<string | null | undefined>,

		/** The name of the industrial design. This corresponds to android.os.Build.DEVICE. */
		codename: FormControl<string | null | undefined>,

		/** Whether this device is virtual or physical. */
		form: FormControl<AndroidModelForm | null | undefined>,

		/** Whether this device is a phone, tablet, wearable, etc. */
		formFactor: FormControl<AndroidModelFormFactor | null | undefined>,

		/** The unique opaque id for this model. Use this for invoking the TestExecutionService. */
		id: FormControl<string | null | undefined>,

		/** True if and only if tests with this model are recorded by stitching together screenshots. See use_low_spec_video_recording in device config. */
		lowFpsVideoRecording: FormControl<boolean | null | undefined>,

		/** The manufacturer of this device. */
		manufacturer: FormControl<string | null | undefined>,

		/** The human-readable marketing name for this device model. Examples: "Nexus 5", "Galaxy S5". */
		name: FormControl<string | null | undefined>,

		/** Screen density in DPI. This corresponds to ro.sf.lcd_density */
		screenDensity: FormControl<number | null | undefined>,

		/** Screen size in the horizontal (X) dimension measured in pixels. */
		screenX: FormControl<number | null | undefined>,

		/** Screen size in the vertical (Y) dimension measured in pixels. */
		screenY: FormControl<number | null | undefined>,

		/** URL of a thumbnail image (photo) of the device. */
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateAndroidModelFormGroup() {
		return new FormGroup<AndroidModelFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			codename: new FormControl<string | null | undefined>(undefined),
			form: new FormControl<AndroidModelForm | null | undefined>(undefined),
			formFactor: new FormControl<AndroidModelFormFactor | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lowFpsVideoRecording: new FormControl<boolean | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			screenDensity: new FormControl<number | null | undefined>(undefined),
			screenX: new FormControl<number | null | undefined>(undefined),
			screenY: new FormControl<number | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AndroidModelForm { DEVICE_FORM_UNSPECIFIED = 'DEVICE_FORM_UNSPECIFIED', VIRTUAL = 'VIRTUAL', PHYSICAL = 'PHYSICAL', EMULATOR = 'EMULATOR' }

	export enum AndroidModelFormFactor { DEVICE_FORM_FACTOR_UNSPECIFIED = 'DEVICE_FORM_FACTOR_UNSPECIFIED', PHONE = 'PHONE', TABLET = 'TABLET', WEARABLE = 'WEARABLE' }


	/** A version-specific information of an Android model. */
	export interface PerAndroidVersionInfo {

		/** The number of online devices for an Android version. */
		deviceCapacity?: PerAndroidVersionInfoDeviceCapacity | null;

		/** Denotes whether Direct Access is supported, and by which client versions. DirectAccessService is currently available as a preview to select developers. You can register today on behalf of you and your team at https://developer.android.com/studio/preview/android-device-streaming */
		directAccessVersionInfo?: DirectAccessVersionInfo;

		/** An Android version. */
		versionId?: string | null;
	}

	/** A version-specific information of an Android model. */
	export interface PerAndroidVersionInfoFormProperties {

		/** The number of online devices for an Android version. */
		deviceCapacity: FormControl<PerAndroidVersionInfoDeviceCapacity | null | undefined>,

		/** An Android version. */
		versionId: FormControl<string | null | undefined>,
	}
	export function CreatePerAndroidVersionInfoFormGroup() {
		return new FormGroup<PerAndroidVersionInfoFormProperties>({
			deviceCapacity: new FormControl<PerAndroidVersionInfoDeviceCapacity | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PerAndroidVersionInfoDeviceCapacity { DEVICE_CAPACITY_UNSPECIFIED = 'DEVICE_CAPACITY_UNSPECIFIED', DEVICE_CAPACITY_HIGH = 'DEVICE_CAPACITY_HIGH', DEVICE_CAPACITY_MEDIUM = 'DEVICE_CAPACITY_MEDIUM', DEVICE_CAPACITY_LOW = 'DEVICE_CAPACITY_LOW', DEVICE_CAPACITY_NONE = 'DEVICE_CAPACITY_NONE' }


	/** Denotes whether Direct Access is supported, and by which client versions. DirectAccessService is currently available as a preview to select developers. You can register today on behalf of you and your team at https://developer.android.com/studio/preview/android-device-streaming */
	export interface DirectAccessVersionInfo {

		/** Whether direct access is supported at all. Clients are expected to filter down the device list to only android models and versions which support Direct Access when that is the user intent. */
		directAccessSupported?: boolean | null;

		/** Output only. Indicates client-device compatibility, where a device is known to work only with certain workarounds implemented in the Android Studio client. Expected format "major.minor.micro.patch", e.g. "5921.22.2211.8881706". */
		minimumAndroidStudioVersion?: string | null;
	}

	/** Denotes whether Direct Access is supported, and by which client versions. DirectAccessService is currently available as a preview to select developers. You can register today on behalf of you and your team at https://developer.android.com/studio/preview/android-device-streaming */
	export interface DirectAccessVersionInfoFormProperties {

		/** Whether direct access is supported at all. Clients are expected to filter down the device list to only android models and versions which support Direct Access when that is the user intent. */
		directAccessSupported: FormControl<boolean | null | undefined>,

		/** Output only. Indicates client-device compatibility, where a device is known to work only with certain workarounds implemented in the Android Studio client. Expected format "major.minor.micro.patch", e.g. "5921.22.2211.8881706". */
		minimumAndroidStudioVersion: FormControl<string | null | undefined>,
	}
	export function CreateDirectAccessVersionInfoFormGroup() {
		return new FormGroup<DirectAccessVersionInfoFormProperties>({
			directAccessSupported: new FormControl<boolean | null | undefined>(undefined),
			minimumAndroidStudioVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Android configuration that can be selected at the time a test is run. */
	export interface AndroidRuntimeConfiguration {

		/** The set of available locales. */
		locales?: Array<Locale>;

		/** The set of available orientations. */
		orientations?: Array<Orientation>;
	}

	/** Android configuration that can be selected at the time a test is run. */
	export interface AndroidRuntimeConfigurationFormProperties {
	}
	export function CreateAndroidRuntimeConfigurationFormGroup() {
		return new FormGroup<AndroidRuntimeConfigurationFormProperties>({
		});

	}


	/** A location/region designation for language. */
	export interface Locale {

		/** The id for this locale. Example: "en_US". */
		id?: string | null;

		/** A human-friendly name for this language/locale. Example: "English". */
		name?: string | null;

		/** A human-friendly string representing the region for this locale. Example: "United States". Not present for every locale. */
		region?: string | null;

		/** Tags for this dimension. Example: "default". */
		tags?: Array<string>;
	}

	/** A location/region designation for language. */
	export interface LocaleFormProperties {

		/** The id for this locale. Example: "en_US". */
		id: FormControl<string | null | undefined>,

		/** A human-friendly name for this language/locale. Example: "English". */
		name: FormControl<string | null | undefined>,

		/** A human-friendly string representing the region for this locale. Example: "United States". Not present for every locale. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateLocaleFormGroup() {
		return new FormGroup<LocaleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Screen orientation of the device. */
	export interface Orientation {

		/** The id for this orientation. Example: "portrait". */
		id?: string | null;

		/** A human-friendly name for this orientation. Example: "portrait". */
		name?: string | null;

		/** Tags for this dimension. Example: "default". */
		tags?: Array<string>;
	}

	/** Screen orientation of the device. */
	export interface OrientationFormProperties {

		/** The id for this orientation. Example: "portrait". */
		id: FormControl<string | null | undefined>,

		/** A human-friendly name for this orientation. Example: "portrait". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrientationFormGroup() {
		return new FormGroup<OrientationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A version of the Android OS. */
	export interface AndroidVersion {

		/** The API level for this Android version. Examples: 18, 19. */
		apiLevel?: number | null;

		/** The code name for this Android version. Examples: "JellyBean", "KitKat". */
		codeName?: string | null;

		/** Data about the relative number of devices running a given configuration of the Android platform. */
		distribution?: Distribution;

		/** An opaque id for this Android version. Use this id to invoke the TestExecutionService. */
		id?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		releaseDate?: Date;

		/** Tags for this dimension. Examples: "default", "preview", "deprecated". */
		tags?: Array<string>;

		/** A string representing this version of the Android OS. Examples: "4.3", "4.4". */
		versionString?: string | null;
	}

	/** A version of the Android OS. */
	export interface AndroidVersionFormProperties {

		/** The API level for this Android version. Examples: 18, 19. */
		apiLevel: FormControl<number | null | undefined>,

		/** The code name for this Android version. Examples: "JellyBean", "KitKat". */
		codeName: FormControl<string | null | undefined>,

		/** An opaque id for this Android version. Use this id to invoke the TestExecutionService. */
		id: FormControl<string | null | undefined>,

		/** A string representing this version of the Android OS. Examples: "4.3", "4.4". */
		versionString: FormControl<string | null | undefined>,
	}
	export function CreateAndroidVersionFormGroup() {
		return new FormGroup<AndroidVersionFormProperties>({
			apiLevel: new FormControl<number | null | undefined>(undefined),
			codeName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			versionString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data about the relative number of devices running a given configuration of the Android platform. */
	export interface Distribution {

		/** Output only. The estimated fraction (0-1) of the total market with this configuration. */
		marketShare?: number | null;

		/** Output only. The time this distribution was measured. */
		measurementTime?: string | null;
	}

	/** Data about the relative number of devices running a given configuration of the Android platform. */
	export interface DistributionFormProperties {

		/** Output only. The estimated fraction (0-1) of the total market with this configuration. */
		marketShare: FormControl<number | null | undefined>,

		/** Output only. The time this distribution was measured. */
		measurementTime: FormControl<string | null | undefined>,
	}
	export function CreateDistributionFormGroup() {
		return new FormGroup<DistributionFormProperties>({
			marketShare: new FormControl<number | null | undefined>(undefined),
			measurementTime: new FormControl<string | null | undefined>(undefined),
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


	/** A list of Android device configurations in which the test is to be executed. */
	export interface AndroidDeviceList {

		/** Required. A list of Android devices. */
		androidDevices?: Array<AndroidDevice>;
	}

	/** A list of Android device configurations in which the test is to be executed. */
	export interface AndroidDeviceListFormProperties {
	}
	export function CreateAndroidDeviceListFormGroup() {
		return new FormGroup<AndroidDeviceListFormProperties>({
		});

	}


	/** A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests. */
	export interface AndroidInstrumentationTest {

		/** A reference to a file, used for user inputs. */
		appApk?: FileReference;

		/** An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles. */
		appBundle?: AppBundle;

		/** The java package for the application under test. The default value is determined by examining the application's manifest. */
		appPackageId?: string | null;

		/** The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.1 or higher! ** Orchestrator offers the following benefits: - No shared state - Crashes are isolated - Logs are scoped per test See for more information about Android Test Orchestrator. If not set, the test will be run without the orchestrator. */
		orchestratorOption?: AndroidInstrumentationTestOrchestratorOption | null;

		/** Options for enabling sharding. */
		shardingOption?: ShardingOption;

		/** A reference to a file, used for user inputs. */
		testApk?: FileReference;

		/** The java package for the test to be executed. The default value is determined by examining the application's manifest. */
		testPackageId?: string | null;

		/** The InstrumentationTestRunner class. The default value is determined by examining the application's manifest. */
		testRunnerClass?: string | null;

		/** Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run. */
		testTargets?: Array<string>;
	}

	/** A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests. */
	export interface AndroidInstrumentationTestFormProperties {

		/** The java package for the application under test. The default value is determined by examining the application's manifest. */
		appPackageId: FormControl<string | null | undefined>,

		/** The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.1 or higher! ** Orchestrator offers the following benefits: - No shared state - Crashes are isolated - Logs are scoped per test See for more information about Android Test Orchestrator. If not set, the test will be run without the orchestrator. */
		orchestratorOption: FormControl<AndroidInstrumentationTestOrchestratorOption | null | undefined>,

		/** The java package for the test to be executed. The default value is determined by examining the application's manifest. */
		testPackageId: FormControl<string | null | undefined>,

		/** The InstrumentationTestRunner class. The default value is determined by examining the application's manifest. */
		testRunnerClass: FormControl<string | null | undefined>,
	}
	export function CreateAndroidInstrumentationTestFormGroup() {
		return new FormGroup<AndroidInstrumentationTestFormProperties>({
			appPackageId: new FormControl<string | null | undefined>(undefined),
			orchestratorOption: new FormControl<AndroidInstrumentationTestOrchestratorOption | null | undefined>(undefined),
			testPackageId: new FormControl<string | null | undefined>(undefined),
			testRunnerClass: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reference to a file, used for user inputs. */
	export interface FileReference {

		/** A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding) */
		gcsPath?: string | null;
	}

	/** A reference to a file, used for user inputs. */
	export interface FileReferenceFormProperties {

		/** A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding) */
		gcsPath: FormControl<string | null | undefined>,
	}
	export function CreateFileReferenceFormGroup() {
		return new FormGroup<FileReferenceFormProperties>({
			gcsPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles. */
	export interface AppBundle {

		/** A reference to a file, used for user inputs. */
		bundleLocation?: FileReference;
	}

	/** An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles. */
	export interface AppBundleFormProperties {
	}
	export function CreateAppBundleFormGroup() {
		return new FormGroup<AppBundleFormProperties>({
		});

	}

	export enum AndroidInstrumentationTestOrchestratorOption { ORCHESTRATOR_OPTION_UNSPECIFIED = 'ORCHESTRATOR_OPTION_UNSPECIFIED', USE_ORCHESTRATOR = 'USE_ORCHESTRATOR', DO_NOT_USE_ORCHESTRATOR = 'DO_NOT_USE_ORCHESTRATOR' }


	/** Options for enabling sharding. */
	export interface ShardingOption {

		/** Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid. */
		manualSharding?: ManualSharding;

		/** Shards test based on previous test case timing records. */
		smartSharding?: SmartSharding;

		/** Uniformly shards test cases given a total number of shards. For instrumentation tests, it will be translated to "-e numShard" and "-e shardIndex" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards. */
		uniformSharding?: UniformSharding;
	}

	/** Options for enabling sharding. */
	export interface ShardingOptionFormProperties {
	}
	export function CreateShardingOptionFormGroup() {
		return new FormGroup<ShardingOptionFormProperties>({
		});

	}


	/** Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid. */
	export interface ManualSharding {

		/** Required. Group of packages, classes, and/or test methods to be run for each manually-created shard. You must specify at least one shard if this field is present. When you select one or more physical devices, the number of repeated test_targets_for_shard must be <= 50. When you select one or more ARM virtual devices, it must be <= 200. When you select only x86 virtual devices, it must be <= 500. */
		testTargetsForShard?: Array<TestTargetsForShard>;
	}

	/** Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid. */
	export interface ManualShardingFormProperties {
	}
	export function CreateManualShardingFormGroup() {
		return new FormGroup<ManualShardingFormProperties>({
		});

	}


	/** Test targets for a shard. */
	export interface TestTargetsForShard {

		/** Group of packages, classes, and/or test methods to be run for each shard. The targets need to be specified in AndroidJUnitRunner argument format. For example, "package com.my.packages" "class com.my.package.MyClass". The number of test_targets must be greater than 0. */
		testTargets?: Array<string>;
	}

	/** Test targets for a shard. */
	export interface TestTargetsForShardFormProperties {
	}
	export function CreateTestTargetsForShardFormGroup() {
		return new FormGroup<TestTargetsForShardFormProperties>({
		});

	}


	/** Shards test based on previous test case timing records. */
	export interface SmartSharding {

		/** The amount of time tests within a shard should take. Default: 300 seconds (5 minutes). The minimum allowed: 120 seconds (2 minutes). The shard count is dynamically set based on time, up to the maximum shard limit (described below). To guarantee at least one test case for each shard, the number of shards will not exceed the number of test cases. Shard duration will be exceeded if: - The maximum shard limit is reached and there is more calculated test time remaining to allocate into shards. - Any individual test is estimated to be longer than the targeted shard duration. Shard duration is not guaranteed because smart sharding uses test case history and default durations which may not be accurate. The rules for finding the test case timing records are: - If the service has processed a test case in the last 30 days, the record of the latest successful test case will be used. - For new test cases, the average duration of other known test cases will be used. - If there are no previous test case timing records available, the default test case duration is 15 seconds. Because the actual shard duration can exceed the targeted shard duration, we recommend that you set the targeted value at least 5 minutes less than the maximum allowed test timeout (45 minutes for physical devices and 60 minutes for virtual), or that you use the custom test timeout value that you set. This approach avoids cancelling the shard before all tests can finish. Note that there is a limit for maximum number of shards. When you select one or more physical devices, the number of shards must be <= 50. When you select one or more ARM virtual devices, it must be <= 200. When you select only x86 virtual devices, it must be <= 500. To guarantee at least one test case for per shard, the number of shards will not exceed the number of test cases. Each shard created counts toward daily test quota. */
		targetedShardDuration?: string | null;
	}

	/** Shards test based on previous test case timing records. */
	export interface SmartShardingFormProperties {

		/** The amount of time tests within a shard should take. Default: 300 seconds (5 minutes). The minimum allowed: 120 seconds (2 minutes). The shard count is dynamically set based on time, up to the maximum shard limit (described below). To guarantee at least one test case for each shard, the number of shards will not exceed the number of test cases. Shard duration will be exceeded if: - The maximum shard limit is reached and there is more calculated test time remaining to allocate into shards. - Any individual test is estimated to be longer than the targeted shard duration. Shard duration is not guaranteed because smart sharding uses test case history and default durations which may not be accurate. The rules for finding the test case timing records are: - If the service has processed a test case in the last 30 days, the record of the latest successful test case will be used. - For new test cases, the average duration of other known test cases will be used. - If there are no previous test case timing records available, the default test case duration is 15 seconds. Because the actual shard duration can exceed the targeted shard duration, we recommend that you set the targeted value at least 5 minutes less than the maximum allowed test timeout (45 minutes for physical devices and 60 minutes for virtual), or that you use the custom test timeout value that you set. This approach avoids cancelling the shard before all tests can finish. Note that there is a limit for maximum number of shards. When you select one or more physical devices, the number of shards must be <= 50. When you select one or more ARM virtual devices, it must be <= 200. When you select only x86 virtual devices, it must be <= 500. To guarantee at least one test case for per shard, the number of shards will not exceed the number of test cases. Each shard created counts toward daily test quota. */
		targetedShardDuration: FormControl<string | null | undefined>,
	}
	export function CreateSmartShardingFormGroup() {
		return new FormGroup<SmartShardingFormProperties>({
			targetedShardDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Uniformly shards test cases given a total number of shards. For instrumentation tests, it will be translated to "-e numShard" and "-e shardIndex" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards. */
	export interface UniformSharding {

		/** Required. The total number of shards to create. This must always be a positive number that is no greater than the total number of test cases. When you select one or more physical devices, the number of shards must be <= 50. When you select one or more ARM virtual devices, it must be <= 200. When you select only x86 virtual devices, it must be <= 500. */
		numShards?: number | null;
	}

	/** Uniformly shards test cases given a total number of shards. For instrumentation tests, it will be translated to "-e numShard" and "-e shardIndex" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards. */
	export interface UniformShardingFormProperties {

		/** Required. The total number of shards to create. This must always be a positive number that is no greater than the total number of test cases. When you select one or more physical devices, the number of shards must be <= 50. When you select one or more ARM virtual devices, it must be <= 200. When you select only x86 virtual devices, it must be <= 500. */
		numShards: FormControl<number | null | undefined>,
	}
	export function CreateUniformShardingFormGroup() {
		return new FormGroup<UniformShardingFormProperties>({
			numShards: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored. */
	export interface AndroidMatrix {

		/** Required. The ids of the set of Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
		androidModelIds?: Array<string>;

		/** Required. The ids of the set of Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
		androidVersionIds?: Array<string>;

		/** Required. The set of locales the test device will enable for testing. Use the TestEnvironmentDiscoveryService to get supported options. */
		locales?: Array<string>;

		/** Required. The set of orientations to test with. Use the TestEnvironmentDiscoveryService to get supported options. */
		orientations?: Array<string>;
	}

	/** A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored. */
	export interface AndroidMatrixFormProperties {
	}
	export function CreateAndroidMatrixFormGroup() {
		return new FormGroup<AndroidMatrixFormProperties>({
		});

	}


	/** A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes. */
	export interface AndroidRoboTest {

		/** A reference to a file, used for user inputs. */
		appApk?: FileReference;

		/** An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles. */
		appBundle?: AppBundle;

		/** The initial activity that should be used to start the app. */
		appInitialActivity?: string | null;

		/** The java package for the application under test. The default value is determined by examining the application's manifest. */
		appPackageId?: string | null;

		/** The max depth of the traversal stack Robo can explore. Needs to be at least 2 to make Robo explore the app beyond the first activity. Default is 50. */
		maxDepth?: number | null;

		/** The max number of steps Robo can execute. Default is no limit. */
		maxSteps?: number | null;

		/** A set of directives Robo should apply during the crawl. This allows users to customize the crawl. For example, the username and password for a test account can be provided. */
		roboDirectives?: Array<RoboDirective>;

		/** The mode in which Robo should run. Most clients should allow the server to populate this field automatically. */
		roboMode?: AndroidRoboTestRoboMode | null;

		/** A reference to a file, used for user inputs. */
		roboScript?: FileReference;

		/** The intents used to launch the app for the crawl. If none are provided, then the main launcher activity is launched. If some are provided, then only those provided are launched (the main launcher activity must be provided explicitly). */
		startingIntents?: Array<RoboStartingIntent>;
	}

	/** A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes. */
	export interface AndroidRoboTestFormProperties {

		/** The initial activity that should be used to start the app. */
		appInitialActivity: FormControl<string | null | undefined>,

		/** The java package for the application under test. The default value is determined by examining the application's manifest. */
		appPackageId: FormControl<string | null | undefined>,

		/** The max depth of the traversal stack Robo can explore. Needs to be at least 2 to make Robo explore the app beyond the first activity. Default is 50. */
		maxDepth: FormControl<number | null | undefined>,

		/** The max number of steps Robo can execute. Default is no limit. */
		maxSteps: FormControl<number | null | undefined>,

		/** The mode in which Robo should run. Most clients should allow the server to populate this field automatically. */
		roboMode: FormControl<AndroidRoboTestRoboMode | null | undefined>,
	}
	export function CreateAndroidRoboTestFormGroup() {
		return new FormGroup<AndroidRoboTestFormProperties>({
			appInitialActivity: new FormControl<string | null | undefined>(undefined),
			appPackageId: new FormControl<string | null | undefined>(undefined),
			maxDepth: new FormControl<number | null | undefined>(undefined),
			maxSteps: new FormControl<number | null | undefined>(undefined),
			roboMode: new FormControl<AndroidRoboTestRoboMode | null | undefined>(undefined),
		});

	}


	/** Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click. */
	export interface RoboDirective {

		/** Required. The type of action that Robo should perform on the specified element. */
		actionType?: RoboDirectiveActionType | null;

		/** The text that Robo is directed to set. If left empty, the directive will be treated as a CLICK on the element matching the resource_name. */
		inputText?: string | null;

		/** Required. The android resource name of the target UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html */
		resourceName?: string | null;
	}

	/** Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click. */
	export interface RoboDirectiveFormProperties {

		/** Required. The type of action that Robo should perform on the specified element. */
		actionType: FormControl<RoboDirectiveActionType | null | undefined>,

		/** The text that Robo is directed to set. If left empty, the directive will be treated as a CLICK on the element matching the resource_name. */
		inputText: FormControl<string | null | undefined>,

		/** Required. The android resource name of the target UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateRoboDirectiveFormGroup() {
		return new FormGroup<RoboDirectiveFormProperties>({
			actionType: new FormControl<RoboDirectiveActionType | null | undefined>(undefined),
			inputText: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RoboDirectiveActionType { ACTION_TYPE_UNSPECIFIED = 'ACTION_TYPE_UNSPECIFIED', SINGLE_CLICK = 'SINGLE_CLICK', ENTER_TEXT = 'ENTER_TEXT', IGNORE = 'IGNORE' }

	export enum AndroidRoboTestRoboMode { ROBO_MODE_UNSPECIFIED = 'ROBO_MODE_UNSPECIFIED', ROBO_VERSION_1 = 'ROBO_VERSION_1', ROBO_VERSION_2 = 'ROBO_VERSION_2' }


	/** Message for specifying the start activities to crawl. */
	export interface RoboStartingIntent {

		/** Specifies an intent that starts the main launcher activity. */
		launcherActivity?: LauncherActivityIntent;

		/** Skips the starting activity */
		noActivity?: NoActivityIntent;

		/** A starting intent specified by an action, uri, and categories. */
		startActivity?: StartActivityIntent;

		/** Timeout in seconds for each intent. */
		timeout?: string | null;
	}

	/** Message for specifying the start activities to crawl. */
	export interface RoboStartingIntentFormProperties {

		/** Timeout in seconds for each intent. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateRoboStartingIntentFormGroup() {
		return new FormGroup<RoboStartingIntentFormProperties>({
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an intent that starts the main launcher activity. */
	export interface LauncherActivityIntent {
	}

	/** Specifies an intent that starts the main launcher activity. */
	export interface LauncherActivityIntentFormProperties {
	}
	export function CreateLauncherActivityIntentFormGroup() {
		return new FormGroup<LauncherActivityIntentFormProperties>({
		});

	}


	/** Skips the starting activity */
	export interface NoActivityIntent {
	}

	/** Skips the starting activity */
	export interface NoActivityIntentFormProperties {
	}
	export function CreateNoActivityIntentFormGroup() {
		return new FormGroup<NoActivityIntentFormProperties>({
		});

	}


	/** A starting intent specified by an action, uri, and categories. */
	export interface StartActivityIntent {

		/** Action name. Required for START_ACTIVITY. */
		action?: string | null;

		/** Intent categories to set on the intent. */
		categories?: Array<string>;

		/** URI for the action. */
		uri?: string | null;
	}

	/** A starting intent specified by an action, uri, and categories. */
	export interface StartActivityIntentFormProperties {

		/** Action name. Required for START_ACTIVITY. */
		action: FormControl<string | null | undefined>,

		/** URI for the action. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateStartActivityIntentFormGroup() {
		return new FormGroup<StartActivityIntentFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being. */
	export interface AndroidTestLoop {

		/** A reference to a file, used for user inputs. */
		appApk?: FileReference;

		/** An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles. */
		appBundle?: AppBundle;

		/** The java package for the application under test. The default is determined by examining the application's manifest. */
		appPackageId?: string | null;

		/** The list of scenario labels that should be run during the test. The scenario labels should map to labels defined in the application's manifest. For example, player_experience and com.google.test.loops.player_experience add all of the loops labeled in the manifest with the com.google.test.loops.player_experience name to the execution. Scenarios can also be specified in the scenarios field. */
		scenarioLabels?: Array<string>;

		/** The list of scenarios that should be run during the test. The default is all test loops, derived from the application's manifest. */
		scenarios?: Array<number>;
	}

	/** A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being. */
	export interface AndroidTestLoopFormProperties {

		/** The java package for the application under test. The default is determined by examining the application's manifest. */
		appPackageId: FormControl<string | null | undefined>,
	}
	export function CreateAndroidTestLoopFormGroup() {
		return new FormGroup<AndroidTestLoopFormProperties>({
			appPackageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Android package file to install. */
	export interface Apk {

		/** A reference to a file, used for user inputs. */
		location?: FileReference;

		/** The java package for the APK to be installed. Value is determined by examining the application's manifest. */
		packageName?: string | null;
	}

	/** An Android package file to install. */
	export interface ApkFormProperties {

		/** The java package for the APK to be installed. Value is determined by examining the application's manifest. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateApkFormGroup() {
		return new FormGroup<ApkFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Android application details based on application manifest and apk archive contents. */
	export interface ApkDetail {

		/** An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html */
		apkManifest?: ApkManifest;
	}

	/** Android application details based on application manifest and apk archive contents. */
	export interface ApkDetailFormProperties {
	}
	export function CreateApkDetailFormGroup() {
		return new FormGroup<ApkDetailFormProperties>({
		});

	}


	/** An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html */
	export interface ApkManifest {

		/** User-readable name for the application. */
		applicationLabel?: string | null;
		intentFilters?: Array<IntentFilter>;

		/** Maximum API level on which the application is designed to run. */
		maxSdkVersion?: number | null;

		/** Meta-data tags defined in the manifest. */
		metadata?: Array<Metadata>;

		/** Minimum API level required for the application to run. */
		minSdkVersion?: number | null;

		/** Full Java-style package name for this application, e.g. "com.example.foo". */
		packageName?: string | null;

		/** Services contained in the tag. */
		services?: Array<Service>;

		/** Specifies the API Level on which the application is designed to run. */
		targetSdkVersion?: number | null;

		/** Feature usage tags defined in the manifest. */
		usesFeature?: Array<UsesFeature>;

		/** Permissions declared to be used by the application */
		usesPermission?: Array<string>;

		/** Version number used internally by the app. */
		versionCode?: string | null;

		/** Version number shown to users. */
		versionName?: string | null;
	}

	/** An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html */
	export interface ApkManifestFormProperties {

		/** User-readable name for the application. */
		applicationLabel: FormControl<string | null | undefined>,

		/** Maximum API level on which the application is designed to run. */
		maxSdkVersion: FormControl<number | null | undefined>,

		/** Minimum API level required for the application to run. */
		minSdkVersion: FormControl<number | null | undefined>,

		/** Full Java-style package name for this application, e.g. "com.example.foo". */
		packageName: FormControl<string | null | undefined>,

		/** Specifies the API Level on which the application is designed to run. */
		targetSdkVersion: FormControl<number | null | undefined>,

		/** Version number used internally by the app. */
		versionCode: FormControl<string | null | undefined>,

		/** Version number shown to users. */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateApkManifestFormGroup() {
		return new FormGroup<ApkManifestFormProperties>({
			applicationLabel: new FormControl<string | null | undefined>(undefined),
			maxSdkVersion: new FormControl<number | null | undefined>(undefined),
			minSdkVersion: new FormControl<number | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			targetSdkVersion: new FormControl<number | null | undefined>(undefined),
			versionCode: new FormControl<string | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html */
	export interface IntentFilter {

		/** The android:name value of the tag. */
		actionNames?: Array<string>;

		/** The android:name value of the tag. */
		categoryNames?: Array<string>;

		/** The android:mimeType value of the tag. */
		mimeType?: string | null;
	}

	/** The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html */
	export interface IntentFilterFormProperties {

		/** The android:mimeType value of the tag. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateIntentFilterFormGroup() {
		return new FormGroup<IntentFilterFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag within a manifest. https://developer.android.com/guide/topics/manifest/meta-data-element.html */
	export interface Metadata {

		/** The android:name value */
		name?: string | null;

		/** The android:value value */
		value?: string | null;
	}

	/** A tag within a manifest. https://developer.android.com/guide/topics/manifest/meta-data-element.html */
	export interface MetadataFormProperties {

		/** The android:name value */
		name: FormControl<string | null | undefined>,

		/** The android:value value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The section of an tag. https://developer.android.com/guide/topics/manifest/service-element */
	export interface Service {

		/** Intent filters in the service */
		intentFilter?: Array<IntentFilter>;

		/** The android:name value */
		name?: string | null;
	}

	/** The section of an tag. https://developer.android.com/guide/topics/manifest/service-element */
	export interface ServiceFormProperties {

		/** The android:name value */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag within a manifest. https://developer.android.com/guide/topics/manifest/uses-feature-element.html */
	export interface UsesFeature {

		/** The android:required value */
		isRequired?: boolean | null;

		/** The android:name value */
		name?: string | null;
	}

	/** A tag within a manifest. https://developer.android.com/guide/topics/manifest/uses-feature-element.html */
	export interface UsesFeatureFormProperties {

		/** The android:required value */
		isRequired: FormControl<boolean | null | undefined>,

		/** The android:name value */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUsesFeatureFormGroup() {
		return new FormGroup<UsesFeatureFormProperties>({
			isRequired: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for cancelling a Device Session. */
	export interface CancelDeviceSessionRequest {
	}

	/** The request object for cancelling a Device Session. */
	export interface CancelDeviceSessionRequestFormProperties {
	}
	export function CreateCancelDeviceSessionRequestFormGroup() {
		return new FormGroup<CancelDeviceSessionRequestFormProperties>({
		});

	}


	/** Response containing the current state of the specified test matrix. */
	export interface CancelTestMatrixResponse {

		/** The current rolled-up state of the test matrix. If this state is already final, then the cancelation request will have no effect. */
		testState?: CancelTestMatrixResponseTestState | null;
	}

	/** Response containing the current state of the specified test matrix. */
	export interface CancelTestMatrixResponseFormProperties {

		/** The current rolled-up state of the test matrix. If this state is already final, then the cancelation request will have no effect. */
		testState: FormControl<CancelTestMatrixResponseTestState | null | undefined>,
	}
	export function CreateCancelTestMatrixResponseFormGroup() {
		return new FormGroup<CancelTestMatrixResponseFormProperties>({
			testState: new FormControl<CancelTestMatrixResponseTestState | null | undefined>(undefined),
		});

	}

	export enum CancelTestMatrixResponseTestState { TEST_STATE_UNSPECIFIED = 'TEST_STATE_UNSPECIFIED', VALIDATING = 'VALIDATING', PENDING = 'PENDING', RUNNING = 'RUNNING', FINISHED = 'FINISHED', ERROR = 'ERROR', UNSUPPORTED_ENVIRONMENT = 'UNSUPPORTED_ENVIRONMENT', INCOMPATIBLE_ENVIRONMENT = 'INCOMPATIBLE_ENVIRONMENT', INCOMPATIBLE_ARCHITECTURE = 'INCOMPATIBLE_ARCHITECTURE', CANCELLED = 'CANCELLED', INVALID = 'INVALID' }


	/** Information about the client which invoked the test. */
	export interface ClientInfo {

		/** The list of detailed information about client. */
		clientInfoDetails?: Array<ClientInfoDetail>;

		/** Required. Client name, such as gcloud. */
		name?: string | null;
	}

	/** Information about the client which invoked the test. */
	export interface ClientInfoFormProperties {

		/** Required. Client name, such as gcloud. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateClientInfoFormGroup() {
		return new FormGroup<ClientInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}. */
	export interface ClientInfoDetail {

		/** Required. The key of detailed client information. */
		key?: string | null;

		/** Required. The value of detailed client information. */
		value?: string | null;
	}

	/** Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}. */
	export interface ClientInfoDetailFormProperties {

		/** Required. The key of detailed client information. */
		key: FormControl<string | null | undefined>,

		/** Required. The value of detailed client information. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateClientInfoDetailFormGroup() {
		return new FormGroup<ClientInfoDetailFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single device file description. */
	export interface DeviceFile {

		/** An opaque binary blob file to install on the device before the test starts. */
		obbFile?: ObbFile;

		/** A file or directory to install on the device before the test starts. */
		regularFile?: RegularFile;
	}

	/** A single device file description. */
	export interface DeviceFileFormProperties {
	}
	export function CreateDeviceFileFormGroup() {
		return new FormGroup<DeviceFileFormProperties>({
		});

	}


	/** An opaque binary blob file to install on the device before the test starts. */
	export interface ObbFile {

		/** A reference to a file, used for user inputs. */
		obb?: FileReference;

		/** Required. OBB file name which must conform to the format as specified by Android e.g. [main|patch].0300110.com.example.android.obb which will be installed into \/Android/obb/\/ on the device. */
		obbFileName?: string | null;
	}

	/** An opaque binary blob file to install on the device before the test starts. */
	export interface ObbFileFormProperties {

		/** Required. OBB file name which must conform to the format as specified by Android e.g. [main|patch].0300110.com.example.android.obb which will be installed into \/Android/obb/\/ on the device. */
		obbFileName: FormControl<string | null | undefined>,
	}
	export function CreateObbFileFormGroup() {
		return new FormGroup<ObbFileFormProperties>({
			obbFileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A file or directory to install on the device before the test starts. */
	export interface RegularFile {

		/** A reference to a file, used for user inputs. */
		content?: FileReference;

		/** Required. Where to put the content on the device. Must be an absolute, allowlisted path. If the file exists, it will be replaced. The following device-side directories and any of their subdirectories are allowlisted: ${EXTERNAL_STORAGE}, /sdcard, or /storage ${ANDROID_DATA}/local/tmp, or /data/local/tmp Specifying a path outside of these directory trees is invalid. The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device and copy the file there. It is strongly advised to use the Environment API in app and test code to access files on the device in a portable way. */
		devicePath?: string | null;
	}

	/** A file or directory to install on the device before the test starts. */
	export interface RegularFileFormProperties {

		/** Required. Where to put the content on the device. Must be an absolute, allowlisted path. If the file exists, it will be replaced. The following device-side directories and any of their subdirectories are allowlisted: ${EXTERNAL_STORAGE}, /sdcard, or /storage ${ANDROID_DATA}/local/tmp, or /data/local/tmp Specifying a path outside of these directory trees is invalid. The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device and copy the file there. It is strongly advised to use the Environment API in app and test code to access files on the device in a portable way. */
		devicePath: FormControl<string | null | undefined>,
	}
	export function CreateRegularFileFormGroup() {
		return new FormGroup<RegularFileFormProperties>({
			devicePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single device IP block */
	export interface DeviceIpBlock {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		addedDate?: Date;

		/** An IP address block in CIDR notation eg: 34.68.194.64/29 */
		block?: string | null;

		/** Whether this block is used by physical or virtual devices */
		form?: AndroidModelForm | null;
	}

	/** A single device IP block */
	export interface DeviceIpBlockFormProperties {

		/** An IP address block in CIDR notation eg: 34.68.194.64/29 */
		block: FormControl<string | null | undefined>,

		/** Whether this block is used by physical or virtual devices */
		form: FormControl<AndroidModelForm | null | undefined>,
	}
	export function CreateDeviceIpBlockFormGroup() {
		return new FormGroup<DeviceIpBlockFormProperties>({
			block: new FormControl<string | null | undefined>(undefined),
			form: new FormControl<AndroidModelForm | null | undefined>(undefined),
		});

	}


	/** List of IP blocks used by the Firebase Test Lab */
	export interface DeviceIpBlockCatalog {

		/** The device IP blocks used by Firebase Test Lab */
		ipBlocks?: Array<DeviceIpBlock>;
	}

	/** List of IP blocks used by the Firebase Test Lab */
	export interface DeviceIpBlockCatalogFormProperties {
	}
	export function CreateDeviceIpBlockCatalogFormGroup() {
		return new FormGroup<DeviceIpBlockCatalogFormProperties>({
		});

	}


	/** Protobuf message describing the device message, used from several RPCs. */
	export interface DeviceSession {

		/** Output only. The timestamp that the session first became ACTIVE. */
		activeStartTime?: string | null;

		/** A single Android device. */
		androidDevice?: AndroidDevice;

		/** Output only. The time that the Session was created. */
		createTime?: string | null;

		/** Output only. The title of the DeviceSession to be presented in the UI. */
		displayName?: string | null;

		/** Optional. If the device is still in use at this time, any connections will be ended and the SessionState will transition from ACTIVE to FINISHED. */
		expireTime?: string | null;

		/** Output only. The interval of time that this device must be interacted with before it transitions from ACTIVE to TIMEOUT_INACTIVITY. */
		inactivityTimeout?: string | null;

		/** Optional. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}" */
		name?: string | null;

		/** Output only. Current state of the DeviceSession. */
		state?: DeviceSessionState | null;

		/** Output only. The historical state transitions of the session_state message including the current session state. */
		stateHistories?: Array<SessionStateEvent>;

		/** Optional. The amount of time that a device will be initially allocated for. This can eventually be extended with the UpdateDeviceSession RPC. Default: 30 minutes. */
		ttl?: string | null;
	}

	/** Protobuf message describing the device message, used from several RPCs. */
	export interface DeviceSessionFormProperties {

		/** Output only. The timestamp that the session first became ACTIVE. */
		activeStartTime: FormControl<string | null | undefined>,

		/** Output only. The time that the Session was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The title of the DeviceSession to be presented in the UI. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. If the device is still in use at this time, any connections will be ended and the SessionState will transition from ACTIVE to FINISHED. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The interval of time that this device must be interacted with before it transitions from ACTIVE to TIMEOUT_INACTIVITY. */
		inactivityTimeout: FormControl<string | null | undefined>,

		/** Optional. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}" */
		name: FormControl<string | null | undefined>,

		/** Output only. Current state of the DeviceSession. */
		state: FormControl<DeviceSessionState | null | undefined>,

		/** Optional. The amount of time that a device will be initially allocated for. This can eventually be extended with the UpdateDeviceSession RPC. Default: 30 minutes. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateDeviceSessionFormGroup() {
		return new FormGroup<DeviceSessionFormProperties>({
			activeStartTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			inactivityTimeout: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DeviceSessionState | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceSessionState { SESSION_STATE_UNSPECIFIED = 'SESSION_STATE_UNSPECIFIED', REQUESTED = 'REQUESTED', PENDING = 'PENDING', ACTIVE = 'ACTIVE', EXPIRED = 'EXPIRED', FINISHED = 'FINISHED', UNAVAILABLE = 'UNAVAILABLE', ERROR = 'ERROR' }


	/** A message encapsulating a series of Session states and the time that the DeviceSession first entered those states. */
	export interface SessionStateEvent {

		/** Output only. The time that the session_state first encountered that state. */
		eventTime?: string | null;

		/** Output only. The session_state tracked by this event */
		sessionState?: DeviceSessionState | null;

		/** Output only. A human-readable message to explain the state. */
		stateMessage?: string | null;
	}

	/** A message encapsulating a series of Session states and the time that the DeviceSession first entered those states. */
	export interface SessionStateEventFormProperties {

		/** Output only. The time that the session_state first encountered that state. */
		eventTime: FormControl<string | null | undefined>,

		/** Output only. The session_state tracked by this event */
		sessionState: FormControl<DeviceSessionState | null | undefined>,

		/** Output only. A human-readable message to explain the state. */
		stateMessage: FormControl<string | null | undefined>,
	}
	export function CreateSessionStateEventFormGroup() {
		return new FormGroup<SessionStateEventFormProperties>({
			eventTime: new FormControl<string | null | undefined>(undefined),
			sessionState: new FormControl<DeviceSessionState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/** The environment in which the test is run. */
	export interface Environment {

		/** A single Android device. */
		androidDevice?: AndroidDevice;

		/** A single iOS device. */
		iosDevice?: IosDevice;
	}

	/** The environment in which the test is run. */
	export interface EnvironmentFormProperties {
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
		});

	}


	/** A single iOS device. */
	export interface IosDevice {

		/** Required. The id of the iOS device to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
		iosModelId?: string | null;

		/** Required. The id of the iOS major software version to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
		iosVersionId?: string | null;

		/** Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options. */
		locale?: string | null;

		/** Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options. */
		orientation?: string | null;
	}

	/** A single iOS device. */
	export interface IosDeviceFormProperties {

		/** Required. The id of the iOS device to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
		iosModelId: FormControl<string | null | undefined>,

		/** Required. The id of the iOS major software version to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
		iosVersionId: FormControl<string | null | undefined>,

		/** Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options. */
		locale: FormControl<string | null | undefined>,

		/** Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options. */
		orientation: FormControl<string | null | undefined>,
	}
	export function CreateIosDeviceFormGroup() {
		return new FormGroup<IosDeviceFormProperties>({
			iosModelId: new FormControl<string | null | undefined>(undefined),
			iosVersionId: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			orientation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The matrix of environments in which the test is to be executed. */
	export interface EnvironmentMatrix {

		/** A list of Android device configurations in which the test is to be executed. */
		androidDeviceList?: AndroidDeviceList;

		/** A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored. */
		androidMatrix?: AndroidMatrix;

		/** A list of iOS device configurations in which the test is to be executed. */
		iosDeviceList?: IosDeviceList;
	}

	/** The matrix of environments in which the test is to be executed. */
	export interface EnvironmentMatrixFormProperties {
	}
	export function CreateEnvironmentMatrixFormGroup() {
		return new FormGroup<EnvironmentMatrixFormProperties>({
		});

	}


	/** A list of iOS device configurations in which the test is to be executed. */
	export interface IosDeviceList {

		/** Required. A list of iOS devices. */
		iosDevices?: Array<IosDevice>;
	}

	/** A list of iOS device configurations in which the test is to be executed. */
	export interface IosDeviceListFormProperties {
	}
	export function CreateIosDeviceListFormGroup() {
		return new FormGroup<IosDeviceListFormProperties>({
		});

	}


	/** A key-value pair passed as an environment variable to the test. */
	export interface EnvironmentVariable {

		/** Key for the environment variable. */
		key?: string | null;

		/** Value for the environment variable. */
		value?: string | null;
	}

	/** A key-value pair passed as an environment variable to the test. */
	export interface EnvironmentVariableFormProperties {

		/** Key for the environment variable. */
		key: FormControl<string | null | undefined>,

		/** Value for the environment variable. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentVariableFormGroup() {
		return new FormGroup<EnvironmentVariableFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing the details of the specified Android application APK. */
	export interface GetApkDetailsResponse {

		/** Android application details based on application manifest and apk archive contents. */
		apkDetail?: ApkDetail;
	}

	/** Response containing the details of the specified Android application APK. */
	export interface GetApkDetailsResponseFormProperties {
	}
	export function CreateGetApkDetailsResponseFormGroup() {
		return new FormGroup<GetApkDetailsResponseFormProperties>({
		});

	}


	/** A storage location within Google cloud storage (GCS). */
	export interface GoogleCloudStorage {

		/** Required. The path to a directory in GCS that will eventually contain the results for this test. The requesting user must have write access on the bucket in the supplied path. */
		gcsPath?: string | null;
	}

	/** A storage location within Google cloud storage (GCS). */
	export interface GoogleCloudStorageFormProperties {

		/** Required. The path to a directory in GCS that will eventually contain the results for this test. The requesting user must have write access on the bucket in the supplied path. */
		gcsPath: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudStorageFormGroup() {
		return new FormGroup<GoogleCloudStorageFormProperties>({
			gcsPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The currently supported iOS devices. */
	export interface IosDeviceCatalog {

		/** The set of supported iOS device models. */
		models?: Array<IosModel>;

		/** iOS configuration that can be selected at the time a test is run. */
		runtimeConfiguration?: IosRuntimeConfiguration;

		/** The set of supported iOS software versions. */
		versions?: Array<IosVersion>;

		/** The set of supported Xcode versions. */
		xcodeVersions?: Array<XcodeVersion>;
	}

	/** The currently supported iOS devices. */
	export interface IosDeviceCatalogFormProperties {
	}
	export function CreateIosDeviceCatalogFormGroup() {
		return new FormGroup<IosDeviceCatalogFormProperties>({
		});

	}


	/** A description of an iOS device tests may be run on. */
	export interface IosModel {

		/** Device capabilities. Copied from https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/DeviceCompatibilityMatrix/DeviceCompatibilityMatrix.html */
		deviceCapabilities?: Array<string>;

		/** Whether this device is a phone, tablet, wearable, etc. */
		formFactor?: AndroidModelFormFactor | null;

		/** The unique opaque id for this model. Use this for invoking the TestExecutionService. */
		id?: string | null;

		/** The human-readable name for this device model. Examples: "iPhone 4s", "iPad Mini 2". */
		name?: string | null;

		/** Version-specific information of an iOS model. */
		perVersionInfo?: Array<PerIosVersionInfo>;

		/** Screen density in DPI. */
		screenDensity?: number | null;

		/** Screen size in the horizontal (X) dimension measured in pixels. */
		screenX?: number | null;

		/** Screen size in the vertical (Y) dimension measured in pixels. */
		screenY?: number | null;

		/** The set of iOS major software versions this device supports. */
		supportedVersionIds?: Array<string>;

		/** Tags for this dimension. Examples: "default", "preview", "deprecated". */
		tags?: Array<string>;
	}

	/** A description of an iOS device tests may be run on. */
	export interface IosModelFormProperties {

		/** Whether this device is a phone, tablet, wearable, etc. */
		formFactor: FormControl<AndroidModelFormFactor | null | undefined>,

		/** The unique opaque id for this model. Use this for invoking the TestExecutionService. */
		id: FormControl<string | null | undefined>,

		/** The human-readable name for this device model. Examples: "iPhone 4s", "iPad Mini 2". */
		name: FormControl<string | null | undefined>,

		/** Screen density in DPI. */
		screenDensity: FormControl<number | null | undefined>,

		/** Screen size in the horizontal (X) dimension measured in pixels. */
		screenX: FormControl<number | null | undefined>,

		/** Screen size in the vertical (Y) dimension measured in pixels. */
		screenY: FormControl<number | null | undefined>,
	}
	export function CreateIosModelFormGroup() {
		return new FormGroup<IosModelFormProperties>({
			formFactor: new FormControl<AndroidModelFormFactor | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			screenDensity: new FormControl<number | null | undefined>(undefined),
			screenX: new FormControl<number | null | undefined>(undefined),
			screenY: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A version-specific information of an iOS model. */
	export interface PerIosVersionInfo {

		/** The number of online devices for an iOS version. */
		deviceCapacity?: PerAndroidVersionInfoDeviceCapacity | null;

		/** An iOS version. */
		versionId?: string | null;
	}

	/** A version-specific information of an iOS model. */
	export interface PerIosVersionInfoFormProperties {

		/** The number of online devices for an iOS version. */
		deviceCapacity: FormControl<PerAndroidVersionInfoDeviceCapacity | null | undefined>,

		/** An iOS version. */
		versionId: FormControl<string | null | undefined>,
	}
	export function CreatePerIosVersionInfoFormGroup() {
		return new FormGroup<PerIosVersionInfoFormProperties>({
			deviceCapacity: new FormControl<PerAndroidVersionInfoDeviceCapacity | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** iOS configuration that can be selected at the time a test is run. */
	export interface IosRuntimeConfiguration {

		/** The set of available locales. */
		locales?: Array<Locale>;

		/** The set of available orientations. */
		orientations?: Array<Orientation>;
	}

	/** iOS configuration that can be selected at the time a test is run. */
	export interface IosRuntimeConfigurationFormProperties {
	}
	export function CreateIosRuntimeConfigurationFormGroup() {
		return new FormGroup<IosRuntimeConfigurationFormProperties>({
		});

	}


	/** An iOS version. */
	export interface IosVersion {

		/** An opaque id for this iOS version. Use this id to invoke the TestExecutionService. */
		id?: string | null;

		/** An integer representing the major iOS version. Examples: "8", "9". */
		majorVersion?: number | null;

		/** An integer representing the minor iOS version. Examples: "1", "2". */
		minorVersion?: number | null;

		/** The available Xcode versions for this version. */
		supportedXcodeVersionIds?: Array<string>;

		/** Tags for this dimension. Examples: "default", "preview", "deprecated". */
		tags?: Array<string>;
	}

	/** An iOS version. */
	export interface IosVersionFormProperties {

		/** An opaque id for this iOS version. Use this id to invoke the TestExecutionService. */
		id: FormControl<string | null | undefined>,

		/** An integer representing the major iOS version. Examples: "8", "9". */
		majorVersion: FormControl<number | null | undefined>,

		/** An integer representing the minor iOS version. Examples: "1", "2". */
		minorVersion: FormControl<number | null | undefined>,
	}
	export function CreateIosVersionFormGroup() {
		return new FormGroup<IosVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			majorVersion: new FormControl<number | null | undefined>(undefined),
			minorVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Xcode version that an iOS version is compatible with. */
	export interface XcodeVersion {

		/** Tags for this Xcode version. Example: "default". */
		tags?: Array<string>;

		/** The id for this version. Example: "9.2". */
		version?: string | null;
	}

	/** An Xcode version that an iOS version is compatible with. */
	export interface XcodeVersionFormProperties {

		/** The id for this version. Example: "9.2". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateXcodeVersionFormGroup() {
		return new FormGroup<XcodeVersionFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A file or directory to install on the device before the test starts. */
	export interface IosDeviceFile {

		/** The bundle id of the app where this file lives. iOS apps sandbox their own filesystem, so app files must specify which app installed on the device. */
		bundleId?: string | null;

		/** A reference to a file, used for user inputs. */
		content?: FileReference;

		/** Location of the file on the device, inside the app's sandboxed filesystem */
		devicePath?: string | null;
	}

	/** A file or directory to install on the device before the test starts. */
	export interface IosDeviceFileFormProperties {

		/** The bundle id of the app where this file lives. iOS apps sandbox their own filesystem, so app files must specify which app installed on the device. */
		bundleId: FormControl<string | null | undefined>,

		/** Location of the file on the device, inside the app's sandboxed filesystem */
		devicePath: FormControl<string | null | undefined>,
	}
	export function CreateIosDeviceFileFormGroup() {
		return new FormGroup<IosDeviceFileFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
			devicePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A test that explores an iOS application on an iOS device. */
	export interface IosRoboTest {

		/** The bundle ID for the app-under-test. This is determined by examining the application's "Info.plist" file. */
		appBundleId?: string | null;

		/** A reference to a file, used for user inputs. */
		appIpa?: FileReference;

		/** A reference to a file, used for user inputs. */
		roboScript?: FileReference;
	}

	/** A test that explores an iOS application on an iOS device. */
	export interface IosRoboTestFormProperties {

		/** The bundle ID for the app-under-test. This is determined by examining the application's "Info.plist" file. */
		appBundleId: FormControl<string | null | undefined>,
	}
	export function CreateIosRoboTestFormGroup() {
		return new FormGroup<IosRoboTestFormProperties>({
			appBundleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially. */
	export interface IosTestLoop {

		/** Output only. The bundle id for the application under test. */
		appBundleId?: string | null;

		/** A reference to a file, used for user inputs. */
		appIpa?: FileReference;

		/** The list of scenarios that should be run during the test. Defaults to the single scenario 0 if unspecified. */
		scenarios?: Array<number>;
	}

	/** A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially. */
	export interface IosTestLoopFormProperties {

		/** Output only. The bundle id for the application under test. */
		appBundleId: FormControl<string | null | undefined>,
	}
	export function CreateIosTestLoopFormGroup() {
		return new FormGroup<IosTestLoopFormProperties>({
			appBundleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of how to set up an iOS device prior to running the test. */
	export interface IosTestSetup {

		/** iOS apps to install in addition to those being directly tested. */
		additionalIpas?: Array<FileReference>;

		/** The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog. */
		networkProfile?: string | null;

		/** List of directories on the device to upload to Cloud Storage at the end of the test. Directories should either be in a shared directory (such as /private/var/mobile/Media) or within an accessible directory inside the app's filesystem (such as /Documents) by specifying the bundle ID. */
		pullDirectories?: Array<IosDeviceFile>;

		/** List of files to push to the device before starting the test. */
		pushFiles?: Array<IosDeviceFile>;
	}

	/** A description of how to set up an iOS device prior to running the test. */
	export interface IosTestSetupFormProperties {

		/** The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog. */
		networkProfile: FormControl<string | null | undefined>,
	}
	export function CreateIosTestSetupFormGroup() {
		return new FormGroup<IosTestSetupFormProperties>({
			networkProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests. */
	export interface IosXcTest {

		/** Output only. The bundle id for the application under test. */
		appBundleId?: string | null;

		/** The option to test special app entitlements. Setting this would re-sign the app having special entitlements with an explicit application-identifier. Currently supports testing aps-environment entitlement. */
		testSpecialEntitlements?: boolean | null;

		/** A reference to a file, used for user inputs. */
		testsZip?: FileReference;

		/** The Xcode version that should be used for the test. Use the TestEnvironmentDiscoveryService to get supported options. Defaults to the latest Xcode version Firebase Test Lab supports. */
		xcodeVersion?: string | null;

		/** A reference to a file, used for user inputs. */
		xctestrun?: FileReference;
	}

	/** A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests. */
	export interface IosXcTestFormProperties {

		/** Output only. The bundle id for the application under test. */
		appBundleId: FormControl<string | null | undefined>,

		/** The option to test special app entitlements. Setting this would re-sign the app having special entitlements with an explicit application-identifier. Currently supports testing aps-environment entitlement. */
		testSpecialEntitlements: FormControl<boolean | null | undefined>,

		/** The Xcode version that should be used for the test. Use the TestEnvironmentDiscoveryService to get supported options. Defaults to the latest Xcode version Firebase Test Lab supports. */
		xcodeVersion: FormControl<string | null | undefined>,
	}
	export function CreateIosXcTestFormGroup() {
		return new FormGroup<IosXcTestFormProperties>({
			appBundleId: new FormControl<string | null | undefined>(undefined),
			testSpecialEntitlements: new FormControl<boolean | null | undefined>(undefined),
			xcodeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of device sessions. */
	export interface ListDeviceSessionsResponse {

		/** The sessions matching the specified filter in the given cloud project. */
		deviceSessions?: Array<DeviceSession>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** A list of device sessions. */
	export interface ListDeviceSessionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceSessionsResponseFormGroup() {
		return new FormGroup<ListDeviceSessionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkConfiguration {

		/** Network emulation parameters. */
		downRule?: TrafficRule;

		/** The unique opaque id for this network traffic configuration. */
		id?: string | null;

		/** Network emulation parameters. */
		upRule?: TrafficRule;
	}
	export interface NetworkConfigurationFormProperties {

		/** The unique opaque id for this network traffic configuration. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network emulation parameters. */
	export interface TrafficRule {

		/** Bandwidth in kbits/second. */
		bandwidth?: number | null;

		/** Burst size in kbits. */
		burst?: number | null;

		/** Packet delay, must be >= 0. */
		delay?: string | null;

		/** Packet duplication ratio (0.0 - 1.0). */
		packetDuplicationRatio?: number | null;

		/** Packet loss ratio (0.0 - 1.0). */
		packetLossRatio?: number | null;
	}

	/** Network emulation parameters. */
	export interface TrafficRuleFormProperties {

		/** Bandwidth in kbits/second. */
		bandwidth: FormControl<number | null | undefined>,

		/** Burst size in kbits. */
		burst: FormControl<number | null | undefined>,

		/** Packet delay, must be >= 0. */
		delay: FormControl<string | null | undefined>,

		/** Packet duplication ratio (0.0 - 1.0). */
		packetDuplicationRatio: FormControl<number | null | undefined>,

		/** Packet loss ratio (0.0 - 1.0). */
		packetLossRatio: FormControl<number | null | undefined>,
	}
	export function CreateTrafficRuleFormGroup() {
		return new FormGroup<TrafficRuleFormProperties>({
			bandwidth: new FormControl<number | null | undefined>(undefined),
			burst: new FormControl<number | null | undefined>(undefined),
			delay: new FormControl<string | null | undefined>(undefined),
			packetDuplicationRatio: new FormControl<number | null | undefined>(undefined),
			packetLossRatio: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NetworkConfigurationCatalog {
		configurations?: Array<NetworkConfiguration>;
	}
	export interface NetworkConfigurationCatalogFormProperties {
	}
	export function CreateNetworkConfigurationCatalogFormGroup() {
		return new FormGroup<NetworkConfigurationCatalogFormProperties>({
		});

	}


	/** The currently provided software environment on the devices under test. */
	export interface ProvidedSoftwareCatalog {

		/** A string representing the current version of AndroidX Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#androidx.test:orchestrator. */
		androidxOrchestratorVersion?: string | null;

		/** Deprecated: Use AndroidX Test Orchestrator going forward. A string representing the current version of Android Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#com.android.support.test:orchestrator. */
		orchestratorVersion?: string | null;
	}

	/** The currently provided software environment on the devices under test. */
	export interface ProvidedSoftwareCatalogFormProperties {

		/** A string representing the current version of AndroidX Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#androidx.test:orchestrator. */
		androidxOrchestratorVersion: FormControl<string | null | undefined>,

		/** Deprecated: Use AndroidX Test Orchestrator going forward. A string representing the current version of Android Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#com.android.support.test:orchestrator. */
		orchestratorVersion: FormControl<string | null | undefined>,
	}
	export function CreateProvidedSoftwareCatalogFormGroup() {
		return new FormGroup<ProvidedSoftwareCatalogFormProperties>({
			androidxOrchestratorVersion: new FormControl<string | null | undefined>(undefined),
			orchestratorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Locations where the results of running the test are stored. */
	export interface ResultStorage {

		/** A storage location within Google cloud storage (GCS). */
		googleCloudStorage?: GoogleCloudStorage;

		/** Output only. URL to the results in the Firebase Web Console. */
		resultsUrl?: string | null;

		/** Represents a tool results execution resource. This has the results of a TestMatrix. */
		toolResultsExecution?: ToolResultsExecution;

		/** Represents a tool results history resource. */
		toolResultsHistory?: ToolResultsHistory;
	}

	/** Locations where the results of running the test are stored. */
	export interface ResultStorageFormProperties {

		/** Output only. URL to the results in the Firebase Web Console. */
		resultsUrl: FormControl<string | null | undefined>,
	}
	export function CreateResultStorageFormGroup() {
		return new FormGroup<ResultStorageFormProperties>({
			resultsUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a tool results execution resource. This has the results of a TestMatrix. */
	export interface ToolResultsExecution {

		/** Output only. A tool results execution ID. */
		executionId?: string | null;

		/** Output only. A tool results history ID. */
		historyId?: string | null;

		/** Output only. The cloud project that owns the tool results execution. */
		projectId?: string | null;
	}

	/** Represents a tool results execution resource. This has the results of a TestMatrix. */
	export interface ToolResultsExecutionFormProperties {

		/** Output only. A tool results execution ID. */
		executionId: FormControl<string | null | undefined>,

		/** Output only. A tool results history ID. */
		historyId: FormControl<string | null | undefined>,

		/** Output only. The cloud project that owns the tool results execution. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateToolResultsExecutionFormGroup() {
		return new FormGroup<ToolResultsExecutionFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			historyId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a tool results history resource. */
	export interface ToolResultsHistory {

		/** Required. A tool results history ID. */
		historyId?: string | null;

		/** Required. The cloud project that owns the tool results history. */
		projectId?: string | null;
	}

	/** Represents a tool results history resource. */
	export interface ToolResultsHistoryFormProperties {

		/** Required. A tool results history ID. */
		historyId: FormControl<string | null | undefined>,

		/** Required. The cloud project that owns the tool results history. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateToolResultsHistoryFormGroup() {
		return new FormGroup<ToolResultsHistoryFormProperties>({
			historyId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output only. Details about the shard. */
	export interface Shard {

		/** Output only. The estimated shard duration based on previous test case timing records, if available. */
		estimatedShardDuration?: string | null;

		/** Output only. The total number of shards. */
		numShards?: number | null;

		/** Output only. The index of the shard among all the shards. */
		shardIndex?: number | null;

		/** Test targets for a shard. */
		testTargetsForShard?: TestTargetsForShard;
	}

	/** Output only. Details about the shard. */
	export interface ShardFormProperties {

		/** Output only. The estimated shard duration based on previous test case timing records, if available. */
		estimatedShardDuration: FormControl<string | null | undefined>,

		/** Output only. The total number of shards. */
		numShards: FormControl<number | null | undefined>,

		/** Output only. The index of the shard among all the shards. */
		shardIndex: FormControl<number | null | undefined>,
	}
	export function CreateShardFormGroup() {
		return new FormGroup<ShardFormProperties>({
			estimatedShardDuration: new FormControl<string | null | undefined>(undefined),
			numShards: new FormControl<number | null | undefined>(undefined),
			shardIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SystraceSetup {

		/** Systrace duration in seconds. Should be between 1 and 30 seconds. 0 disables systrace. */
		durationSeconds?: number | null;
	}
	export interface SystraceSetupFormProperties {

		/** Systrace duration in seconds. Should be between 1 and 30 seconds. 0 disables systrace. */
		durationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSystraceSetupFormGroup() {
		return new FormGroup<SystraceSetupFormProperties>({
			durationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional details about the progress of the running test. */
	export interface TestDetails {

		/** Output only. If the TestState is ERROR, then this string will contain human-readable details about the error. */
		errorMessage?: string | null;

		/** Output only. Human-readable, detailed descriptions of the test's progress. For example: "Provisioning a device", "Starting Test". During the course of execution new data may be appended to the end of progress_messages. */
		progressMessages?: Array<string>;
	}

	/** Additional details about the progress of the running test. */
	export interface TestDetailsFormProperties {

		/** Output only. If the TestState is ERROR, then this string will contain human-readable details about the error. */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateTestDetailsFormGroup() {
		return new FormGroup<TestDetailsFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of a test environment. */
	export interface TestEnvironmentCatalog {

		/** The currently supported Android devices. */
		androidDeviceCatalog?: AndroidDeviceCatalog;

		/** List of IP blocks used by the Firebase Test Lab */
		deviceIpBlockCatalog?: DeviceIpBlockCatalog;

		/** The currently supported iOS devices. */
		iosDeviceCatalog?: IosDeviceCatalog;
		networkConfigurationCatalog?: NetworkConfigurationCatalog;

		/** The currently provided software environment on the devices under test. */
		softwareCatalog?: ProvidedSoftwareCatalog;
	}

	/** A description of a test environment. */
	export interface TestEnvironmentCatalogFormProperties {
	}
	export function CreateTestEnvironmentCatalogFormGroup() {
		return new FormGroup<TestEnvironmentCatalogFormProperties>({
		});

	}


	/** A single test executed in a single environment. */
	export interface TestExecution {

		/** The environment in which the test is run. */
		environment?: Environment;

		/** Output only. Unique id set by the service. */
		id?: string | null;

		/** Output only. Id of the containing TestMatrix. */
		matrixId?: string | null;

		/** Output only. The cloud project that owns the test execution. */
		projectId?: string | null;

		/** Output only. Details about the shard. */
		shard?: Shard;

		/** Output only. Indicates the current progress of the test execution (e.g., FINISHED). */
		state?: CancelTestMatrixResponseTestState | null;

		/** Additional details about the progress of the running test. */
		testDetails?: TestDetails;

		/** A description of how to run the test. */
		testSpecification?: TestSpecification;

		/** Output only. The time this test execution was initially created. */
		timestamp?: string | null;

		/** Represents a tool results step resource. This has the results of a TestExecution. */
		toolResultsStep?: ToolResultsStep;
	}

	/** A single test executed in a single environment. */
	export interface TestExecutionFormProperties {

		/** Output only. Unique id set by the service. */
		id: FormControl<string | null | undefined>,

		/** Output only. Id of the containing TestMatrix. */
		matrixId: FormControl<string | null | undefined>,

		/** Output only. The cloud project that owns the test execution. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. Indicates the current progress of the test execution (e.g., FINISHED). */
		state: FormControl<CancelTestMatrixResponseTestState | null | undefined>,

		/** Output only. The time this test execution was initially created. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateTestExecutionFormGroup() {
		return new FormGroup<TestExecutionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			matrixId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CancelTestMatrixResponseTestState | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of how to run the test. */
	export interface TestSpecification {

		/** A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests. */
		androidInstrumentationTest?: AndroidInstrumentationTest;

		/** A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes. */
		androidRoboTest?: AndroidRoboTest;

		/** A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being. */
		androidTestLoop?: AndroidTestLoop;

		/** Disables performance metrics recording. May reduce test latency. */
		disablePerformanceMetrics?: boolean | null;

		/** Disables video recording. May reduce test latency. */
		disableVideoRecording?: boolean | null;

		/** A test that explores an iOS application on an iOS device. */
		iosRoboTest?: IosRoboTest;

		/** A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially. */
		iosTestLoop?: IosTestLoop;

		/** A description of how to set up an iOS device prior to running the test. */
		iosTestSetup?: IosTestSetup;

		/** A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests. */
		iosXcTest?: IosXcTest;

		/** A description of how to set up the Android device prior to running the test. */
		testSetup?: TestSetup;

		/** Max time a test execution is allowed to run before it is automatically cancelled. The default value is 5 min. */
		testTimeout?: string | null;
	}

	/** A description of how to run the test. */
	export interface TestSpecificationFormProperties {

		/** Disables performance metrics recording. May reduce test latency. */
		disablePerformanceMetrics: FormControl<boolean | null | undefined>,

		/** Disables video recording. May reduce test latency. */
		disableVideoRecording: FormControl<boolean | null | undefined>,

		/** Max time a test execution is allowed to run before it is automatically cancelled. The default value is 5 min. */
		testTimeout: FormControl<string | null | undefined>,
	}
	export function CreateTestSpecificationFormGroup() {
		return new FormGroup<TestSpecificationFormProperties>({
			disablePerformanceMetrics: new FormControl<boolean | null | undefined>(undefined),
			disableVideoRecording: new FormControl<boolean | null | undefined>(undefined),
			testTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of how to set up the Android device prior to running the test. */
	export interface TestSetup {

		/** Identifies an account and how to log into it. */
		account?: Account;

		/** APKs to install in addition to those being directly tested. These will be installed after the app under test. Currently capped at 100. */
		additionalApks?: Array<Apk>;

		/** List of directories on the device to upload to GCS at the end of the test; they must be absolute paths under /sdcard, /storage or /data/local/tmp. Path names are restricted to characters a-z A-Z 0-9 _ - . + and / Note: The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device. */
		directoriesToPull?: Array<string>;

		/** Whether to prevent all runtime permissions to be granted at app install */
		dontAutograntPermissions?: boolean | null;

		/** Environment variables to set for the test (only applicable for instrumentation tests). */
		environmentVariables?: Array<EnvironmentVariable>;

		/** List of files to push to the device before starting the test. */
		filesToPush?: Array<DeviceFile>;

		/** Optional. Initial setup APKs to install before the app under test is installed. Currently capped at 100. */
		initialSetupApks?: Array<Apk>;

		/** The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog. */
		networkProfile?: string | null;
		systrace?: SystraceSetup;
	}

	/** A description of how to set up the Android device prior to running the test. */
	export interface TestSetupFormProperties {

		/** Whether to prevent all runtime permissions to be granted at app install */
		dontAutograntPermissions: FormControl<boolean | null | undefined>,

		/** The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog. */
		networkProfile: FormControl<string | null | undefined>,
	}
	export function CreateTestSetupFormGroup() {
		return new FormGroup<TestSetupFormProperties>({
			dontAutograntPermissions: new FormControl<boolean | null | undefined>(undefined),
			networkProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a tool results step resource. This has the results of a TestExecution. */
	export interface ToolResultsStep {

		/** Output only. A tool results execution ID. */
		executionId?: string | null;

		/** Output only. A tool results history ID. */
		historyId?: string | null;

		/** Output only. The cloud project that owns the tool results step. */
		projectId?: string | null;

		/** Output only. A tool results step ID. */
		stepId?: string | null;
	}

	/** Represents a tool results step resource. This has the results of a TestExecution. */
	export interface ToolResultsStepFormProperties {

		/** Output only. A tool results execution ID. */
		executionId: FormControl<string | null | undefined>,

		/** Output only. A tool results history ID. */
		historyId: FormControl<string | null | undefined>,

		/** Output only. The cloud project that owns the tool results step. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. A tool results step ID. */
		stepId: FormControl<string | null | undefined>,
	}
	export function CreateToolResultsStepFormGroup() {
		return new FormGroup<ToolResultsStepFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			historyId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			stepId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome. */
	export interface TestMatrix {

		/** Information about the client which invoked the test. */
		clientInfo?: ClientInfo;

		/** The matrix of environments in which the test is to be executed. */
		environmentMatrix?: EnvironmentMatrix;

		/** If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation. */
		failFast?: boolean | null;

		/** The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns. */
		flakyTestAttempts?: number | null;

		/** Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state. */
		invalidMatrixDetails?: TestMatrixInvalidMatrixDetails | null;

		/** Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED. */
		outcomeSummary?: TestMatrixOutcomeSummary | null;

		/** The cloud project that owns the test matrix. */
		projectId?: string | null;

		/** Locations where the results of running the test are stored. */
		resultStorage?: ResultStorage;

		/** Output only. Indicates the current progress of the test matrix. */
		state?: CancelTestMatrixResponseTestState | null;

		/** Output only. The list of test executions that the service creates for this matrix. */
		testExecutions?: Array<TestExecution>;

		/** Output only. Unique id set by the service. */
		testMatrixId?: string | null;

		/** A description of how to run the test. */
		testSpecification?: TestSpecification;

		/** Output only. The time this test matrix was initially created. */
		timestamp?: string | null;
	}

	/** TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome. */
	export interface TestMatrixFormProperties {

		/** If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation. */
		failFast: FormControl<boolean | null | undefined>,

		/** The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns. */
		flakyTestAttempts: FormControl<number | null | undefined>,

		/** Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state. */
		invalidMatrixDetails: FormControl<TestMatrixInvalidMatrixDetails | null | undefined>,

		/** Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED. */
		outcomeSummary: FormControl<TestMatrixOutcomeSummary | null | undefined>,

		/** The cloud project that owns the test matrix. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. Indicates the current progress of the test matrix. */
		state: FormControl<CancelTestMatrixResponseTestState | null | undefined>,

		/** Output only. Unique id set by the service. */
		testMatrixId: FormControl<string | null | undefined>,

		/** Output only. The time this test matrix was initially created. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateTestMatrixFormGroup() {
		return new FormGroup<TestMatrixFormProperties>({
			failFast: new FormControl<boolean | null | undefined>(undefined),
			flakyTestAttempts: new FormControl<number | null | undefined>(undefined),
			invalidMatrixDetails: new FormControl<TestMatrixInvalidMatrixDetails | null | undefined>(undefined),
			outcomeSummary: new FormControl<TestMatrixOutcomeSummary | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CancelTestMatrixResponseTestState | null | undefined>(undefined),
			testMatrixId: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TestMatrixInvalidMatrixDetails { INVALID_MATRIX_DETAILS_UNSPECIFIED = 'INVALID_MATRIX_DETAILS_UNSPECIFIED', DETAILS_UNAVAILABLE = 'DETAILS_UNAVAILABLE', MALFORMED_APK = 'MALFORMED_APK', MALFORMED_TEST_APK = 'MALFORMED_TEST_APK', NO_MANIFEST = 'NO_MANIFEST', NO_PACKAGE_NAME = 'NO_PACKAGE_NAME', INVALID_PACKAGE_NAME = 'INVALID_PACKAGE_NAME', TEST_SAME_AS_APP = 'TEST_SAME_AS_APP', NO_INSTRUMENTATION = 'NO_INSTRUMENTATION', NO_SIGNATURE = 'NO_SIGNATURE', INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE = 'INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE', NO_TEST_RUNNER_CLASS = 'NO_TEST_RUNNER_CLASS', NO_LAUNCHER_ACTIVITY = 'NO_LAUNCHER_ACTIVITY', FORBIDDEN_PERMISSIONS = 'FORBIDDEN_PERMISSIONS', INVALID_ROBO_DIRECTIVES = 'INVALID_ROBO_DIRECTIVES', INVALID_RESOURCE_NAME = 'INVALID_RESOURCE_NAME', INVALID_DIRECTIVE_ACTION = 'INVALID_DIRECTIVE_ACTION', TEST_LOOP_INTENT_FILTER_NOT_FOUND = 'TEST_LOOP_INTENT_FILTER_NOT_FOUND', SCENARIO_LABEL_NOT_DECLARED = 'SCENARIO_LABEL_NOT_DECLARED', SCENARIO_LABEL_MALFORMED = 'SCENARIO_LABEL_MALFORMED', SCENARIO_NOT_DECLARED = 'SCENARIO_NOT_DECLARED', DEVICE_ADMIN_RECEIVER = 'DEVICE_ADMIN_RECEIVER', MALFORMED_XC_TEST_ZIP = 'MALFORMED_XC_TEST_ZIP', BUILT_FOR_IOS_SIMULATOR = 'BUILT_FOR_IOS_SIMULATOR', NO_TESTS_IN_XC_TEST_ZIP = 'NO_TESTS_IN_XC_TEST_ZIP', USE_DESTINATION_ARTIFACTS = 'USE_DESTINATION_ARTIFACTS', TEST_NOT_APP_HOSTED = 'TEST_NOT_APP_HOSTED', PLIST_CANNOT_BE_PARSED = 'PLIST_CANNOT_BE_PARSED', TEST_ONLY_APK = 'TEST_ONLY_APK', MALFORMED_IPA = 'MALFORMED_IPA', MISSING_URL_SCHEME = 'MISSING_URL_SCHEME', MALFORMED_APP_BUNDLE = 'MALFORMED_APP_BUNDLE', NO_CODE_APK = 'NO_CODE_APK', INVALID_INPUT_APK = 'INVALID_INPUT_APK', INVALID_APK_PREVIEW_SDK = 'INVALID_APK_PREVIEW_SDK', MATRIX_TOO_LARGE = 'MATRIX_TOO_LARGE', TEST_QUOTA_EXCEEDED = 'TEST_QUOTA_EXCEEDED', SERVICE_NOT_ACTIVATED = 'SERVICE_NOT_ACTIVATED', UNKNOWN_PERMISSION_ERROR = 'UNKNOWN_PERMISSION_ERROR' }

	export enum TestMatrixOutcomeSummary { OUTCOME_SUMMARY_UNSPECIFIED = 'OUTCOME_SUMMARY_UNSPECIFIED', SUCCESS = 'SUCCESS', FAILURE = 'FAILURE', INCONCLUSIVE = 'INCONCLUSIVE', SKIPPED = 'SKIPPED' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the details of an Android application APK.
		 * Post v1/applicationDetailService/getApkDetails
		 * @return {GetApkDetailsResponse} Successful response
		 */
		Testing_applicationDetailService_getApkDetails(requestBody: FileReference): Observable<GetApkDetailsResponse> {
			return this.http.post<GetApkDetailsResponse>(this.baseUri + 'v1/applicationDetailService/getApkDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. Execution creation happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.
		 * Post v1/projects/{projectId}/testMatrices
		 * @param {string} projectId The GCE project under which this job will run.
		 * @param {string} requestId A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended. Optional, but strongly recommended.
		 * @return {TestMatrix} Successful response
		 */
		Testing_projects_testMatrices_create(projectId: string, requestId: string | null | undefined, requestBody: TestMatrix): Observable<TestMatrix> {
			return this.http.post<TestMatrix>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/testMatrices&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
		 * Get v1/projects/{projectId}/testMatrices/{testMatrixId}
		 * @param {string} projectId Cloud project that owns the test matrix.
		 * @param {string} testMatrixId Unique test matrix id which was assigned by the service.
		 * @return {TestMatrix} Successful response
		 */
		Testing_projects_testMatrices_get(projectId: string, testMatrixId: string): Observable<TestMatrix> {
			return this.http.get<TestMatrix>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/testMatrices/' + (testMatrixId == null ? '' : encodeURIComponent(testMatrixId)), {});
		}

		/**
		 * Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
		 * Post v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel
		 * @param {string} projectId Cloud project that owns the test.
		 * @param {string} testMatrixId Test matrix that will be canceled.
		 * @return {CancelTestMatrixResponse} Successful response
		 */
		Testing_projects_testMatrices_cancel(projectId: string, testMatrixId: string): Observable<CancelTestMatrixResponse> {
			return this.http.post<CancelTestMatrixResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/testMatrices/' + (testMatrixId == null ? '' : encodeURIComponent(testMatrixId)) + ':cancel', null, {});
		}

		/**
		 * Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred
		 * Get v1/testEnvironmentCatalog/{environmentType}
		 * @param {Testing_testEnvironmentCatalog_getEnvironmentType} environmentType Required. The type of environment that should be listed.
		 * @param {string} projectId For authorization, the cloud project requesting the TestEnvironmentCatalog.
		 * @return {TestEnvironmentCatalog} Successful response
		 */
		Testing_testEnvironmentCatalog_get(environmentType: Testing_testEnvironmentCatalog_getEnvironmentType, projectId: string | null | undefined): Observable<TestEnvironmentCatalog> {
			return this.http.get<TestEnvironmentCatalog>(this.baseUri + 'v1/testEnvironmentCatalog/' + environmentType + '?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * GET /v1/projects/{project_id}/deviceSessions/{device_session_id} Return a DeviceSession, which documents the allocation status and whether the device is allocated. Clients making requests from this API must poll GetDeviceSession.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}"
		 * @return {DeviceSession} Successful response
		 */
		Testing_projects_deviceSessions_get(name: string): Observable<DeviceSession> {
			return this.http.get<DeviceSession>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * PATCH /v1/projects/{projectId}/deviceSessions/deviceSessionId}:updateDeviceSession Updates the current device session to the fields described by the update_mask.
		 * Patch v1/{name}
		 * @param {string} name Optional. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}"
		 * @param {string} updateMask Required. The list of fields to update.
		 * @return {DeviceSession} Successful response
		 */
		Testing_projects_deviceSessions_patch(name: string, updateMask: string | null | undefined, requestBody: DeviceSession): Observable<DeviceSession> {
			return this.http.patch<DeviceSession>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST /v1/projects/{project_id}/deviceSessions/{device_session_id}:cancel Changes the DeviceSession to state FINISHED and terminates all connections. Canceled sessions are not deleted and can be retrieved or listed by the user until they expire based on the 28 day deletion policy.
		 * Post v1/{name}:cancel
		 * @param {string} name Required. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}"
		 * @return {Empty} Successful response
		 */
		Testing_projects_deviceSessions_cancel(name: string, requestBody: CancelDeviceSessionRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * GET /v1/projects/{project_id}/deviceSessions Lists device Sessions owned by the project user.
		 * Get v1/{parent}/deviceSessions
		 * @param {string} parent Required. The name of the parent to request, e.g. "projects/{project_id}"
		 * @param {string} filter Optional. If specified, responses will be filtered by the given filter. Allowed fields are: session_state.
		 * @param {number} pageSize Optional. The maximum number of DeviceSessions to return.
		 * @param {string} pageToken Optional. A continuation token for paging.
		 * @return {ListDeviceSessionsResponse} Successful response
		 */
		Testing_projects_deviceSessions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDeviceSessionsResponse> {
			return this.http.get<ListDeviceSessionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deviceSessions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * POST /v1/projects/{project_id}/deviceSessions
		 * Post v1/{parent}/deviceSessions
		 * @param {string} parent Required. The Compute Engine project under which this device will be allocated. "projects/{project_id}"
		 * @return {DeviceSession} Successful response
		 */
		Testing_projects_deviceSessions_create(parent: string, requestBody: DeviceSession): Observable<DeviceSession> {
			return this.http.post<DeviceSession>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deviceSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Testing_testEnvironmentCatalog_getEnvironmentType { ENVIRONMENT_TYPE_UNSPECIFIED = 'ENVIRONMENT_TYPE_UNSPECIFIED', ANDROID = 'ANDROID', IOS = 'IOS', NETWORK_CONFIGURATION = 'NETWORK_CONFIGURATION', PROVIDED_SOFTWARE = 'PROVIDED_SOFTWARE', DEVICE_IP_BLOCKS = 'DEVICE_IP_BLOCKS' }

}

