import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Identifies an account and how to log into it. */
	export interface Account {

		/**
		 * Enables automatic Google account login.
		 * If set, the service automatically generates a Google test account and adds
		 * it to the device, before executing the test. Note that test accounts might be
		 * reused.
		 * Many applications show their full set of functionalities when an account is
		 * present on the device. Logging into the device with these generated accounts
		 * allows testing more functionalities.
		 */
		googleAuto?: GoogleAuto;
	}

	/** Identifies an account and how to log into it. */
	export interface AccountFormProperties {
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
		});

	}


	/**
	 * Enables automatic Google account login.
	 * If set, the service automatically generates a Google test account and adds
	 * it to the device, before executing the test. Note that test accounts might be
	 * reused.
	 * Many applications show their full set of functionalities when an account is
	 * present on the device. Logging into the device with these generated accounts
	 * allows testing more functionalities.
	 */
	export interface GoogleAuto {
	}

	/**
	 * Enables automatic Google account login.
	 * If set, the service automatically generates a Google test account and adds
	 * it to the device, before executing the test. Note that test accounts might be
	 * reused.
	 * Many applications show their full set of functionalities when an account is
	 * present on the device. Logging into the device with these generated accounts
	 * allows testing more functionalities.
	 */
	export interface GoogleAutoFormProperties {
	}
	export function CreateGoogleAutoFormGroup() {
		return new FormGroup<GoogleAutoFormProperties>({
		});

	}


	/** A single Android device. */
	export interface AndroidDevice {

		/**
		 * Required. The id of the Android device to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		androidModelId?: string | null;

		/**
		 * Required. The id of the Android OS version to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		androidVersionId?: string | null;

		/**
		 * Required. The locale the test device used for testing.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		locale?: string | null;

		/**
		 * Required. How the device is oriented during the test.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		orientation?: string | null;
	}

	/** A single Android device. */
	export interface AndroidDeviceFormProperties {

		/**
		 * Required. The id of the Android device to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		androidModelId: FormControl<string | null | undefined>,

		/**
		 * Required. The id of the Android OS version to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		androidVersionId: FormControl<string | null | undefined>,

		/**
		 * Required. The locale the test device used for testing.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		locale: FormControl<string | null | undefined>,

		/**
		 * Required. How the device is oriented during the test.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
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

		/**
		 * The company that this device is branded with.
		 * Example: "Google", "Samsung".
		 */
		brand?: string | null;

		/**
		 * The name of the industrial design.
		 * This corresponds to android.os.Build.DEVICE.
		 */
		codename?: string | null;

		/** Whether this device is virtual or physical. */
		form?: AndroidModelForm | null;

		/** Whether this device is a phone, tablet, wearable, etc. */
		formFactor?: AndroidModelFormFactor | null;

		/**
		 * The unique opaque id for this model.
		 * Use this for invoking the TestExecutionService.
		 */
		id?: string | null;

		/**
		 * True if and only if tests with this model are recorded by stitching
		 * together screenshots. See use_low_spec_video_recording in device config.
		 */
		lowFpsVideoRecording?: boolean | null;

		/** The manufacturer of this device. */
		manufacturer?: string | null;

		/**
		 * The human-readable marketing name for this device model.
		 * Examples: "Nexus 5", "Galaxy S5".
		 */
		name?: string | null;

		/**
		 * Screen density in DPI.
		 * This corresponds to ro.sf.lcd_density
		 */
		screenDensity?: number | null;

		/** Screen size in the horizontal (X) dimension measured in pixels. */
		screenX?: number | null;

		/** Screen size in the vertical (Y) dimension measured in pixels. */
		screenY?: number | null;

		/**
		 * The list of supported ABIs for this device.
		 * This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level
		 * 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2.
		 * The most preferred ABI is the first element in the list.
		 * Elements are optionally prefixed by "version_id:" (where version_id is
		 * the id of an AndroidVersion), denoting an ABI that is supported only on
		 * a particular version.
		 */
		supportedAbis?: Array<string>;

		/** The set of Android versions this device supports. */
		supportedVersionIds?: Array<string>;

		/**
		 * Tags for this dimension.
		 * Examples: "default", "preview", "deprecated".
		 */
		tags?: Array<string>;

		/** URL of a thumbnail image of the device. */
		thumbnailUrl?: string | null;
	}

	/** A description of an Android device tests may be run on. */
	export interface AndroidModelFormProperties {

		/**
		 * The company that this device is branded with.
		 * Example: "Google", "Samsung".
		 */
		brand: FormControl<string | null | undefined>,

		/**
		 * The name of the industrial design.
		 * This corresponds to android.os.Build.DEVICE.
		 */
		codename: FormControl<string | null | undefined>,

		/** Whether this device is virtual or physical. */
		form: FormControl<AndroidModelForm | null | undefined>,

		/** Whether this device is a phone, tablet, wearable, etc. */
		formFactor: FormControl<AndroidModelFormFactor | null | undefined>,

		/**
		 * The unique opaque id for this model.
		 * Use this for invoking the TestExecutionService.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * True if and only if tests with this model are recorded by stitching
		 * together screenshots. See use_low_spec_video_recording in device config.
		 */
		lowFpsVideoRecording: FormControl<boolean | null | undefined>,

		/** The manufacturer of this device. */
		manufacturer: FormControl<string | null | undefined>,

		/**
		 * The human-readable marketing name for this device model.
		 * Examples: "Nexus 5", "Galaxy S5".
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Screen density in DPI.
		 * This corresponds to ro.sf.lcd_density
		 */
		screenDensity: FormControl<number | null | undefined>,

		/** Screen size in the horizontal (X) dimension measured in pixels. */
		screenX: FormControl<number | null | undefined>,

		/** Screen size in the vertical (Y) dimension measured in pixels. */
		screenY: FormControl<number | null | undefined>,

		/** URL of a thumbnail image of the device. */
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

	export enum AndroidModelForm { DEVICE_FORM_UNSPECIFIED = 0, VIRTUAL = 1, PHYSICAL = 2 }

	export enum AndroidModelFormFactor { DEVICE_FORM_FACTOR_UNSPECIFIED = 0, PHONE = 1, TABLET = 2, WEARABLE = 3 }


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

		/**
		 * The id for this locale.
		 * Example: "en_US".
		 */
		id?: string | null;

		/**
		 * A human-friendly name for this language/locale.
		 * Example: "English".
		 */
		name?: string | null;

		/**
		 * A human-friendly string representing the region for this
		 * locale. Example: "United States". Not present for every locale.
		 */
		region?: string | null;

		/**
		 * Tags for this dimension.
		 * Example: "default".
		 */
		tags?: Array<string>;
	}

	/** A location/region designation for language. */
	export interface LocaleFormProperties {

		/**
		 * The id for this locale.
		 * Example: "en_US".
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * A human-friendly name for this language/locale.
		 * Example: "English".
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A human-friendly string representing the region for this
		 * locale. Example: "United States". Not present for every locale.
		 */
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

		/**
		 * The id for this orientation.
		 * Example: "portrait".
		 */
		id?: string | null;

		/**
		 * A human-friendly name for this orientation.
		 * Example: "portrait".
		 */
		name?: string | null;

		/**
		 * Tags for this dimension.
		 * Example: "default".
		 */
		tags?: Array<string>;
	}

	/** Screen orientation of the device. */
	export interface OrientationFormProperties {

		/**
		 * The id for this orientation.
		 * Example: "portrait".
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * A human-friendly name for this orientation.
		 * Example: "portrait".
		 */
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

		/**
		 * The API level for this Android version.
		 * Examples: 18, 19.
		 */
		apiLevel?: number | null;

		/**
		 * The code name for this Android version.
		 * Examples: "JellyBean", "KitKat".
		 */
		codeName?: string | null;

		/**
		 * Data about the relative number of devices running a
		 * given configuration of the Android platform.
		 */
		distribution?: Distribution;

		/**
		 * An opaque id for this Android version.
		 * Use this id to invoke the TestExecutionService.
		 */
		id?: string | null;

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
		 * and time zone are either specified elsewhere or are not significant. The date
		 * is relative to the Proleptic Gregorian Calendar. This can represent:
		 * * A full date, with non-zero year, month and day values
		 * * A month and day value, with a zero year, e.g. an anniversary
		 * * A year on its own, with zero month and day values
		 * * A year and month value, with a zero day, e.g. a credit card expiration date
		 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
		 */
		releaseDate?: Date;

		/**
		 * Tags for this dimension.
		 * Examples: "default", "preview", "deprecated".
		 */
		tags?: Array<string>;

		/**
		 * A string representing this version of the Android OS.
		 * Examples: "4.3", "4.4".
		 */
		versionString?: string | null;
	}

	/** A version of the Android OS. */
	export interface AndroidVersionFormProperties {

		/**
		 * The API level for this Android version.
		 * Examples: 18, 19.
		 */
		apiLevel: FormControl<number | null | undefined>,

		/**
		 * The code name for this Android version.
		 * Examples: "JellyBean", "KitKat".
		 */
		codeName: FormControl<string | null | undefined>,

		/**
		 * An opaque id for this Android version.
		 * Use this id to invoke the TestExecutionService.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * A string representing this version of the Android OS.
		 * Examples: "4.3", "4.4".
		 */
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


	/**
	 * Data about the relative number of devices running a
	 * given configuration of the Android platform.
	 */
	export interface Distribution {

		/**
		 * Output only. The estimated fraction (0-1) of the total market with this
		 * configuration.
		 */
		marketShare?: number | null;

		/** Output only. The time this distribution was measured. */
		measurementTime?: string | null;
	}

	/**
	 * Data about the relative number of devices running a
	 * given configuration of the Android platform.
	 */
	export interface DistributionFormProperties {

		/**
		 * Output only. The estimated fraction (0-1) of the total market with this
		 * configuration.
		 */
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


	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
	 * and time zone are either specified elsewhere or are not significant. The date
	 * is relative to the Proleptic Gregorian Calendar. This can represent:
	 * * A full date, with non-zero year, month and day values
	 * * A month and day value, with a zero year, e.g. an anniversary
	 * * A year on its own, with zero month and day values
	 * * A year and month value, with a zero day, e.g. a credit card expiration date
	 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
	 */
	export interface Date {

		/**
		 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
		 * if specifying a year by itself or a year and month where the day is not
		 * significant.
		 */
		day?: number | null;

		/**
		 * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
		 * month and day.
		 */
		month?: number | null;

		/**
		 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
		 * a year.
		 */
		year?: number | null;
	}

	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
	 * and time zone are either specified elsewhere or are not significant. The date
	 * is relative to the Proleptic Gregorian Calendar. This can represent:
	 * * A full date, with non-zero year, month and day values
	 * * A month and day value, with a zero year, e.g. an anniversary
	 * * A year on its own, with zero month and day values
	 * * A year and month value, with a zero day, e.g. a credit card expiration date
	 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
	 */
	export interface DateFormProperties {

		/**
		 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
		 * if specifying a year by itself or a year and month where the day is not
		 * significant.
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
		 * month and day.
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
		 * a year.
		 */
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


	/**
	 * A test of an Android application that can control an Android component
	 * independently of its normal lifecycle.
	 * Android instrumentation tests run an application APK and test APK inside the
	 * same process on a virtual or physical AndroidDevice.  They also specify
	 * a test runner class, such as com.google.GoogleTestRunner, which can vary
	 * on the specific instrumentation framework chosen.
	 * See <http://developer.android.com/tools/testing/testing_android.html> for
	 * more information on types of Android tests.
	 */
	export interface AndroidInstrumentationTest {

		/** A reference to a file, used for user inputs. */
		appApk?: FileReference;

		/**
		 * An Android App Bundle file format, containing a BundleConfig.pb file,
		 * a base module directory, zero or more dynamic feature module directories.
		 * <p>See https://developer.android.com/guide/app-bundle/build for guidance on
		 * building App Bundles.
		 */
		appBundle?: AppBundle;

		/**
		 * The java package for the application under test.
		 * The default value is determined by examining the application's manifest.
		 */
		appPackageId?: string | null;

		/**
		 * The option of whether running each test within its own invocation of
		 * instrumentation with Android Test Orchestrator or not.
		 * ** Orchestrator is only compatible with AndroidJUnitRunner version 1.0 or
		 * higher! **
		 * Orchestrator offers the following benefits:
		 * - No shared state
		 * - Crashes are isolated
		 * - Logs are scoped per test
		 * See
		 * <https://developer.android.com/training/testing/junit-runner.html#using-android-test-orchestrator>
		 * for more information about Android Test Orchestrator.
		 * If not set, the test will be run without the orchestrator.
		 */
		orchestratorOption?: AndroidInstrumentationTestOrchestratorOption | null;

		/** Options for enabling sharding. */
		shardingOption?: ShardingOption;

		/** A reference to a file, used for user inputs. */
		testApk?: FileReference;

		/**
		 * The java package for the test to be executed.
		 * The default value is determined by examining the application's manifest.
		 */
		testPackageId?: string | null;

		/**
		 * The InstrumentationTestRunner class.
		 * The default value is determined by examining the application's manifest.
		 */
		testRunnerClass?: string | null;

		/**
		 * Each target must be fully qualified with the package name or class name,
		 * in one of these formats:
		 * - "package package_name"
		 * - "class package_name.class_name"
		 * - "class package_name.class_name#method_name"
		 * If empty, all targets in the module will be run.
		 */
		testTargets?: Array<string>;
	}

	/**
	 * A test of an Android application that can control an Android component
	 * independently of its normal lifecycle.
	 * Android instrumentation tests run an application APK and test APK inside the
	 * same process on a virtual or physical AndroidDevice.  They also specify
	 * a test runner class, such as com.google.GoogleTestRunner, which can vary
	 * on the specific instrumentation framework chosen.
	 * See <http://developer.android.com/tools/testing/testing_android.html> for
	 * more information on types of Android tests.
	 */
	export interface AndroidInstrumentationTestFormProperties {

		/**
		 * The java package for the application under test.
		 * The default value is determined by examining the application's manifest.
		 */
		appPackageId: FormControl<string | null | undefined>,

		/**
		 * The option of whether running each test within its own invocation of
		 * instrumentation with Android Test Orchestrator or not.
		 * ** Orchestrator is only compatible with AndroidJUnitRunner version 1.0 or
		 * higher! **
		 * Orchestrator offers the following benefits:
		 * - No shared state
		 * - Crashes are isolated
		 * - Logs are scoped per test
		 * See
		 * <https://developer.android.com/training/testing/junit-runner.html#using-android-test-orchestrator>
		 * for more information about Android Test Orchestrator.
		 * If not set, the test will be run without the orchestrator.
		 */
		orchestratorOption: FormControl<AndroidInstrumentationTestOrchestratorOption | null | undefined>,

		/**
		 * The java package for the test to be executed.
		 * The default value is determined by examining the application's manifest.
		 */
		testPackageId: FormControl<string | null | undefined>,

		/**
		 * The InstrumentationTestRunner class.
		 * The default value is determined by examining the application's manifest.
		 */
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

		/**
		 * A path to a file in Google Cloud Storage.
		 * Example: gs://build-app-1414623860166/app-debug-unaligned.apk
		 */
		gcsPath?: string | null;
	}

	/** A reference to a file, used for user inputs. */
	export interface FileReferenceFormProperties {

		/**
		 * A path to a file in Google Cloud Storage.
		 * Example: gs://build-app-1414623860166/app-debug-unaligned.apk
		 */
		gcsPath: FormControl<string | null | undefined>,
	}
	export function CreateFileReferenceFormGroup() {
		return new FormGroup<FileReferenceFormProperties>({
			gcsPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An Android App Bundle file format, containing a BundleConfig.pb file,
	 * a base module directory, zero or more dynamic feature module directories.
	 * <p>See https://developer.android.com/guide/app-bundle/build for guidance on
	 * building App Bundles.
	 */
	export interface AppBundle {

		/** A reference to a file, used for user inputs. */
		bundleLocation?: FileReference;
	}

	/**
	 * An Android App Bundle file format, containing a BundleConfig.pb file,
	 * a base module directory, zero or more dynamic feature module directories.
	 * <p>See https://developer.android.com/guide/app-bundle/build for guidance on
	 * building App Bundles.
	 */
	export interface AppBundleFormProperties {
	}
	export function CreateAppBundleFormGroup() {
		return new FormGroup<AppBundleFormProperties>({
		});

	}

	export enum AndroidInstrumentationTestOrchestratorOption { ORCHESTRATOR_OPTION_UNSPECIFIED = 0, USE_ORCHESTRATOR = 1, DO_NOT_USE_ORCHESTRATOR = 2 }


	/** Options for enabling sharding. */
	export interface ShardingOption {

		/**
		 * Shards test cases into the specified groups of packages, classes, and/or
		 * methods.
		 * With manual sharding enabled, specifying test targets via
		 * environment_variables or in InstrumentationTest is invalid.
		 */
		manualSharding?: ManualSharding;

		/**
		 * Uniformly shards test cases given a total number of shards.
		 * For Instrumentation test, it will be translated to “-e numShard” “-e
		 * shardIndex” AndroidJUnitRunner arguments. With uniform sharding enabled,
		 * specifying these sharding arguments via environment_variables is invalid.
		 */
		uniformSharding?: UniformSharding;
	}

	/** Options for enabling sharding. */
	export interface ShardingOptionFormProperties {
	}
	export function CreateShardingOptionFormGroup() {
		return new FormGroup<ShardingOptionFormProperties>({
		});

	}


	/**
	 * Shards test cases into the specified groups of packages, classes, and/or
	 * methods.
	 * With manual sharding enabled, specifying test targets via
	 * environment_variables or in InstrumentationTest is invalid.
	 */
	export interface ManualSharding {

		/**
		 * Required. Group of packages, classes, and/or test methods to be run for
		 * each shard. The number of shard_test_targets must be >= 1 and <= 50.
		 */
		testTargetsForShard?: Array<TestTargetsForShard>;
	}

	/**
	 * Shards test cases into the specified groups of packages, classes, and/or
	 * methods.
	 * With manual sharding enabled, specifying test targets via
	 * environment_variables or in InstrumentationTest is invalid.
	 */
	export interface ManualShardingFormProperties {
	}
	export function CreateManualShardingFormGroup() {
		return new FormGroup<ManualShardingFormProperties>({
		});

	}


	/** Test targets for a shard. */
	export interface TestTargetsForShard {

		/**
		 * Group of packages, classes, and/or test methods to be run for each shard.
		 * The targets need to be specified in AndroidJUnitRunner argument format. For
		 * example, “package com.my.packages” “class com.my.package.MyClass”.
		 * The number of shard_test_targets must be greater than 0.
		 */
		testTargets?: Array<string>;
	}

	/** Test targets for a shard. */
	export interface TestTargetsForShardFormProperties {
	}
	export function CreateTestTargetsForShardFormGroup() {
		return new FormGroup<TestTargetsForShardFormProperties>({
		});

	}


	/**
	 * Uniformly shards test cases given a total number of shards.
	 * For Instrumentation test, it will be translated to “-e numShard” “-e
	 * shardIndex” AndroidJUnitRunner arguments. With uniform sharding enabled,
	 * specifying these sharding arguments via environment_variables is invalid.
	 */
	export interface UniformSharding {

		/** Required. Total number of shards. The number must be >= 1 and <= 50. */
		numShards?: number | null;
	}

	/**
	 * Uniformly shards test cases given a total number of shards.
	 * For Instrumentation test, it will be translated to “-e numShard” “-e
	 * shardIndex” AndroidJUnitRunner arguments. With uniform sharding enabled,
	 * specifying these sharding arguments via environment_variables is invalid.
	 */
	export interface UniformShardingFormProperties {

		/** Required. Total number of shards. The number must be >= 1 and <= 50. */
		numShards: FormControl<number | null | undefined>,
	}
	export function CreateUniformShardingFormGroup() {
		return new FormGroup<UniformShardingFormProperties>({
			numShards: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A set of Android device configuration permutations is defined by the
	 * the cross-product of the given axes. Internally, the given AndroidMatrix
	 * will be expanded into a set of AndroidDevices.
	 * Only supported permutations will be instantiated.  Invalid permutations
	 * (e.g., incompatible models/versions) are ignored.
	 */
	export interface AndroidMatrix {

		/**
		 * Required. The ids of the set of Android device to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		androidModelIds?: Array<string>;

		/**
		 * Required. The ids of the set of Android OS version to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		androidVersionIds?: Array<string>;

		/**
		 * Required. The set of locales the test device will enable for testing.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		locales?: Array<string>;

		/**
		 * Required. The set of orientations to test with.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		orientations?: Array<string>;
	}

	/**
	 * A set of Android device configuration permutations is defined by the
	 * the cross-product of the given axes. Internally, the given AndroidMatrix
	 * will be expanded into a set of AndroidDevices.
	 * Only supported permutations will be instantiated.  Invalid permutations
	 * (e.g., incompatible models/versions) are ignored.
	 */
	export interface AndroidMatrixFormProperties {
	}
	export function CreateAndroidMatrixFormGroup() {
		return new FormGroup<AndroidMatrixFormProperties>({
		});

	}


	/**
	 * A test of an android application that explores the application on a virtual
	 * or physical Android Device, finding culprits and crashes as it goes.
	 */
	export interface AndroidRoboTest {

		/** A reference to a file, used for user inputs. */
		appApk?: FileReference;

		/**
		 * An Android App Bundle file format, containing a BundleConfig.pb file,
		 * a base module directory, zero or more dynamic feature module directories.
		 * <p>See https://developer.android.com/guide/app-bundle/build for guidance on
		 * building App Bundles.
		 */
		appBundle?: AppBundle;

		/** The initial activity that should be used to start the app. */
		appInitialActivity?: string | null;

		/**
		 * The java package for the application under test.
		 * The default value is determined by examining the application's manifest.
		 */
		appPackageId?: string | null;

		/**
		 * The max depth of the traversal stack Robo can explore. Needs to be at least
		 * 2 to make Robo explore the app beyond the first activity.
		 * Default is 50.
		 */
		maxDepth?: number | null;

		/**
		 * The max number of steps Robo can execute.
		 * Default is no limit.
		 */
		maxSteps?: number | null;

		/**
		 * A set of directives Robo should apply during the crawl.
		 * This allows users to customize the crawl. For example, the username and
		 * password for a test account can be provided.
		 */
		roboDirectives?: Array<RoboDirective>;

		/** A reference to a file, used for user inputs. */
		roboScript?: FileReference;

		/**
		 * The intents used to launch the app for the crawl.
		 * If none are provided, then the main launcher activity is launched.
		 * If some are provided, then only those provided are launched (the main
		 * launcher activity must be provided explicitly).
		 */
		startingIntents?: Array<RoboStartingIntent>;
	}

	/**
	 * A test of an android application that explores the application on a virtual
	 * or physical Android Device, finding culprits and crashes as it goes.
	 */
	export interface AndroidRoboTestFormProperties {

		/** The initial activity that should be used to start the app. */
		appInitialActivity: FormControl<string | null | undefined>,

		/**
		 * The java package for the application under test.
		 * The default value is determined by examining the application's manifest.
		 */
		appPackageId: FormControl<string | null | undefined>,

		/**
		 * The max depth of the traversal stack Robo can explore. Needs to be at least
		 * 2 to make Robo explore the app beyond the first activity.
		 * Default is 50.
		 */
		maxDepth: FormControl<number | null | undefined>,

		/**
		 * The max number of steps Robo can execute.
		 * Default is no limit.
		 */
		maxSteps: FormControl<number | null | undefined>,
	}
	export function CreateAndroidRoboTestFormGroup() {
		return new FormGroup<AndroidRoboTestFormProperties>({
			appInitialActivity: new FormControl<string | null | undefined>(undefined),
			appPackageId: new FormControl<string | null | undefined>(undefined),
			maxDepth: new FormControl<number | null | undefined>(undefined),
			maxSteps: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Directs Robo to interact with a specific UI element if it is encountered
	 * during the crawl. Currently, Robo can perform text entry or element click.
	 */
	export interface RoboDirective {

		/**
		 * Required. The type of action that Robo should perform on the specified
		 * element.
		 */
		actionType?: RoboDirectiveActionType | null;

		/**
		 * The text that Robo is directed to set. If left empty, the directive will be
		 * treated as a CLICK on the element matching the resource_name.
		 */
		inputText?: string | null;

		/**
		 * Required. The android resource name of the target UI element.
		 * For example,
		 * in Java: R.string.foo
		 * in xml: @string/foo
		 * Only the "foo" part is needed.
		 * Reference doc:
		 * https://developer.android.com/guide/topics/resources/accessing-resources.html
		 */
		resourceName?: string | null;
	}

	/**
	 * Directs Robo to interact with a specific UI element if it is encountered
	 * during the crawl. Currently, Robo can perform text entry or element click.
	 */
	export interface RoboDirectiveFormProperties {

		/**
		 * Required. The type of action that Robo should perform on the specified
		 * element.
		 */
		actionType: FormControl<RoboDirectiveActionType | null | undefined>,

		/**
		 * The text that Robo is directed to set. If left empty, the directive will be
		 * treated as a CLICK on the element matching the resource_name.
		 */
		inputText: FormControl<string | null | undefined>,

		/**
		 * Required. The android resource name of the target UI element.
		 * For example,
		 * in Java: R.string.foo
		 * in xml: @string/foo
		 * Only the "foo" part is needed.
		 * Reference doc:
		 * https://developer.android.com/guide/topics/resources/accessing-resources.html
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateRoboDirectiveFormGroup() {
		return new FormGroup<RoboDirectiveFormProperties>({
			actionType: new FormControl<RoboDirectiveActionType | null | undefined>(undefined),
			inputText: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RoboDirectiveActionType { ACTION_TYPE_UNSPECIFIED = 0, SINGLE_CLICK = 1, ENTER_TEXT = 2, IGNORE = 3 }


	/** Message for specifying the start activities to crawl. */
	export interface RoboStartingIntent {

		/** Specifies an intent that starts the main launcher activity. */
		launcherActivity?: LauncherActivityIntent;

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


	/** A starting intent specified by an action, uri, and categories. */
	export interface StartActivityIntent {

		/**
		 * Action name.
		 * Required for START_ACTIVITY.
		 */
		action?: string | null;

		/** Intent categories to set on the intent. */
		categories?: Array<string>;

		/** URI for the action. */
		uri?: string | null;
	}

	/** A starting intent specified by an action, uri, and categories. */
	export interface StartActivityIntentFormProperties {

		/**
		 * Action name.
		 * Required for START_ACTIVITY.
		 */
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


	/**
	 * A test of an Android Application with a Test Loop.
	 * The intent \<intent-name\> will be implicitly added, since Games is the only
	 * user of this api, for the time being.
	 */
	export interface AndroidTestLoop {

		/** A reference to a file, used for user inputs. */
		appApk?: FileReference;

		/**
		 * An Android App Bundle file format, containing a BundleConfig.pb file,
		 * a base module directory, zero or more dynamic feature module directories.
		 * <p>See https://developer.android.com/guide/app-bundle/build for guidance on
		 * building App Bundles.
		 */
		appBundle?: AppBundle;

		/**
		 * The java package for the application under test.
		 * The default is determined by examining the application's manifest.
		 */
		appPackageId?: string | null;

		/**
		 * The list of scenario labels that should be run during the test.
		 * The scenario labels should map to labels defined in the application's
		 * manifest. For example, player_experience and
		 * com.google.test.loops.player_experience add all of the loops labeled in the
		 * manifest with the com.google.test.loops.player_experience name to the
		 * execution.
		 * Scenarios can also be specified in the scenarios field.
		 */
		scenarioLabels?: Array<string>;

		/**
		 * The list of scenarios that should be run during the test.
		 * The default is all test loops, derived from the application's
		 * manifest.
		 */
		scenarios?: Array<number>;
	}

	/**
	 * A test of an Android Application with a Test Loop.
	 * The intent \<intent-name\> will be implicitly added, since Games is the only
	 * user of this api, for the time being.
	 */
	export interface AndroidTestLoopFormProperties {

		/**
		 * The java package for the application under test.
		 * The default is determined by examining the application's manifest.
		 */
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

		/**
		 * The java package for the APK to be installed.
		 * Value is determined by examining the application's manifest.
		 */
		packageName?: string | null;
	}

	/** An Android package file to install. */
	export interface ApkFormProperties {

		/**
		 * The java package for the APK to be installed.
		 * Value is determined by examining the application's manifest.
		 */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateApkFormGroup() {
		return new FormGroup<ApkFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Android application details based on application manifest and apk archive
	 * contents.
	 */
	export interface ApkDetail {

		/**
		 * An Android app manifest. See
		 * http://developer.android.com/guide/topics/manifest/manifest-intro.html
		 */
		apkManifest?: ApkManifest;
	}

	/**
	 * Android application details based on application manifest and apk archive
	 * contents.
	 */
	export interface ApkDetailFormProperties {
	}
	export function CreateApkDetailFormGroup() {
		return new FormGroup<ApkDetailFormProperties>({
		});

	}


	/**
	 * An Android app manifest. See
	 * http://developer.android.com/guide/topics/manifest/manifest-intro.html
	 */
	export interface ApkManifest {

		/** User-readable name for the application. */
		applicationLabel?: string | null;
		intentFilters?: Array<IntentFilter>;

		/** Maximum API level on which the application is designed to run. */
		maxSdkVersion?: number | null;

		/** Minimum API level required for the application to run. */
		minSdkVersion?: number | null;

		/**
		 * Full Java-style package name for this application, e.g.
		 * "com.example.foo".
		 */
		packageName?: string | null;

		/** Specifies the API Level on which the application is designed to run. */
		targetSdkVersion?: number | null;
	}

	/**
	 * An Android app manifest. See
	 * http://developer.android.com/guide/topics/manifest/manifest-intro.html
	 */
	export interface ApkManifestFormProperties {

		/** User-readable name for the application. */
		applicationLabel: FormControl<string | null | undefined>,

		/** Maximum API level on which the application is designed to run. */
		maxSdkVersion: FormControl<number | null | undefined>,

		/** Minimum API level required for the application to run. */
		minSdkVersion: FormControl<number | null | undefined>,

		/**
		 * Full Java-style package name for this application, e.g.
		 * "com.example.foo".
		 */
		packageName: FormControl<string | null | undefined>,

		/** Specifies the API Level on which the application is designed to run. */
		targetSdkVersion: FormControl<number | null | undefined>,
	}
	export function CreateApkManifestFormGroup() {
		return new FormGroup<ApkManifestFormProperties>({
			applicationLabel: new FormControl<string | null | undefined>(undefined),
			maxSdkVersion: new FormControl<number | null | undefined>(undefined),
			minSdkVersion: new FormControl<number | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			targetSdkVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The <intent-filter> section of an <activity> tag.
	 * https://developer.android.com/guide/topics/manifest/intent-filter-element.html
	 */
	export interface IntentFilter {

		/** The android:name value of the <action> tag. */
		actionNames?: Array<string>;

		/** The android:name value of the <category> tag. */
		categoryNames?: Array<string>;

		/** The android:mimeType value of the <data> tag. */
		mimeType?: string | null;
	}

	/**
	 * The <intent-filter> section of an <activity> tag.
	 * https://developer.android.com/guide/topics/manifest/intent-filter-element.html
	 */
	export interface IntentFilterFormProperties {

		/** The android:mimeType value of the <data> tag. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateIntentFilterFormGroup() {
		return new FormGroup<IntentFilterFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing the current state of the specified test matrix. */
	export interface CancelTestMatrixResponse {

		/**
		 * The current rolled-up state of the test matrix.
		 * If this state is already final, then the cancelation request will
		 * have no effect.
		 */
		testState?: CancelTestMatrixResponseTestState | null;
	}

	/** Response containing the current state of the specified test matrix. */
	export interface CancelTestMatrixResponseFormProperties {

		/**
		 * The current rolled-up state of the test matrix.
		 * If this state is already final, then the cancelation request will
		 * have no effect.
		 */
		testState: FormControl<CancelTestMatrixResponseTestState | null | undefined>,
	}
	export function CreateCancelTestMatrixResponseFormGroup() {
		return new FormGroup<CancelTestMatrixResponseFormProperties>({
			testState: new FormControl<CancelTestMatrixResponseTestState | null | undefined>(undefined),
		});

	}

	export enum CancelTestMatrixResponseTestState { TEST_STATE_UNSPECIFIED = 0, VALIDATING = 1, PENDING = 2, RUNNING = 3, FINISHED = 4, ERROR = 5, UNSUPPORTED_ENVIRONMENT = 6, INCOMPATIBLE_ENVIRONMENT = 7, INCOMPATIBLE_ARCHITECTURE = 8, CANCELLED = 9, INVALID = 10 }


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


	/**
	 * Key-value pair of detailed information about the client which invoked the
	 * test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.
	 */
	export interface ClientInfoDetail {

		/** Required. The key of detailed client information. */
		key?: string | null;

		/** Required. The value of detailed client information. */
		value?: string | null;
	}

	/**
	 * Key-value pair of detailed information about the client which invoked the
	 * test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.
	 */
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

		/**
		 * Required. OBB file name which must conform to the format as specified by
		 * Android
		 * e.g. [main|patch].0300110.com.example.android.obb
		 * which will be installed into
		 * \<shared-storage\>/Android/obb/\<package-name\>/
		 * on the device.
		 */
		obbFileName?: string | null;
	}

	/** An opaque binary blob file to install on the device before the test starts. */
	export interface ObbFileFormProperties {

		/**
		 * Required. OBB file name which must conform to the format as specified by
		 * Android
		 * e.g. [main|patch].0300110.com.example.android.obb
		 * which will be installed into
		 * \<shared-storage\>/Android/obb/\<package-name\>/
		 * on the device.
		 */
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

		/**
		 * Required. Where to put the content on the device. Must be an absolute,
		 * whitelisted path. If the file exists, it will be replaced.
		 * The following device-side directories and any of their subdirectories are
		 * whitelisted:
		 * <p>${EXTERNAL_STORAGE}, or /sdcard</p>
		 * <p>${ANDROID_DATA}/local/tmp, or /data/local/tmp</p>
		 * <p>Specifying a path outside of these directory trees is invalid.
		 * <p> The paths /sdcard and /data will be made available and treated as
		 * implicit path substitutions. E.g. if /sdcard on a particular device does
		 * not map to external storage, the system will replace it with the external
		 * storage path prefix for that device and copy the file there.
		 * <p> It is strongly advised to use the <a href=
		 * "http://developer.android.com/reference/android/os/Environment.html">
		 * Environment API</a> in app and test code to access files on the device in a
		 * portable way.
		 */
		devicePath?: string | null;
	}

	/** A file or directory to install on the device before the test starts. */
	export interface RegularFileFormProperties {

		/**
		 * Required. Where to put the content on the device. Must be an absolute,
		 * whitelisted path. If the file exists, it will be replaced.
		 * The following device-side directories and any of their subdirectories are
		 * whitelisted:
		 * <p>${EXTERNAL_STORAGE}, or /sdcard</p>
		 * <p>${ANDROID_DATA}/local/tmp, or /data/local/tmp</p>
		 * <p>Specifying a path outside of these directory trees is invalid.
		 * <p> The paths /sdcard and /data will be made available and treated as
		 * implicit path substitutions. E.g. if /sdcard on a particular device does
		 * not map to external storage, the system will replace it with the external
		 * storage path prefix for that device and copy the file there.
		 * <p> It is strongly advised to use the <a href=
		 * "http://developer.android.com/reference/android/os/Environment.html">
		 * Environment API</a> in app and test code to access files on the device in a
		 * portable way.
		 */
		devicePath: FormControl<string | null | undefined>,
	}
	export function CreateRegularFileFormGroup() {
		return new FormGroup<RegularFileFormProperties>({
			devicePath: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Required. The id of the iOS device to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		iosModelId?: string | null;

		/**
		 * Required. The id of the iOS major software version to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		iosVersionId?: string | null;

		/**
		 * Required. The locale the test device used for testing.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		locale?: string | null;

		/**
		 * Required. How the device is oriented during the test.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		orientation?: string | null;
	}

	/** A single iOS device. */
	export interface IosDeviceFormProperties {

		/**
		 * Required. The id of the iOS device to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		iosModelId: FormControl<string | null | undefined>,

		/**
		 * Required. The id of the iOS major software version to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		iosVersionId: FormControl<string | null | undefined>,

		/**
		 * Required. The locale the test device used for testing.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		locale: FormControl<string | null | undefined>,

		/**
		 * Required. How the device is oriented during the test.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
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

		/**
		 * A set of Android device configuration permutations is defined by the
		 * the cross-product of the given axes. Internally, the given AndroidMatrix
		 * will be expanded into a set of AndroidDevices.
		 * Only supported permutations will be instantiated.  Invalid permutations
		 * (e.g., incompatible models/versions) are ignored.
		 */
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

		/**
		 * Android application details based on application manifest and apk archive
		 * contents.
		 */
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

		/**
		 * Required. The path to a directory in GCS that will
		 * eventually contain the results for this test.
		 * The requesting user must have write access on the bucket in the supplied
		 * path.
		 */
		gcsPath?: string | null;
	}

	/** A storage location within Google cloud storage (GCS). */
	export interface GoogleCloudStorageFormProperties {

		/**
		 * Required. The path to a directory in GCS that will
		 * eventually contain the results for this test.
		 * The requesting user must have write access on the bucket in the supplied
		 * path.
		 */
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


	/**
	 * A description of an iOS device tests may be run on.
	 * Next tag: 12
	 */
	export interface IosModel {

		/**
		 * Device capabilities.
		 * Copied from
		 * https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/DeviceCompatibilityMatrix/DeviceCompatibilityMatrix.html
		 */
		deviceCapabilities?: Array<string>;

		/** Whether this device is a phone, tablet, wearable, etc. */
		formFactor?: AndroidModelFormFactor | null;

		/**
		 * The unique opaque id for this model.
		 * Use this for invoking the TestExecutionService.
		 */
		id?: string | null;

		/**
		 * The human-readable name for this device model.
		 * Examples: "iPhone 4s", "iPad Mini 2".
		 */
		name?: string | null;

		/** Screen density in DPI. */
		screenDensity?: number | null;

		/** Screen size in the horizontal (X) dimension measured in pixels. */
		screenX?: number | null;

		/** Screen size in the vertical (Y) dimension measured in pixels. */
		screenY?: number | null;

		/** The set of iOS major software versions this device supports. */
		supportedVersionIds?: Array<string>;

		/**
		 * Tags for this dimension.
		 * Examples: "default", "preview", "deprecated".
		 */
		tags?: Array<string>;
	}

	/**
	 * A description of an iOS device tests may be run on.
	 * Next tag: 12
	 */
	export interface IosModelFormProperties {

		/** Whether this device is a phone, tablet, wearable, etc. */
		formFactor: FormControl<AndroidModelFormFactor | null | undefined>,

		/**
		 * The unique opaque id for this model.
		 * Use this for invoking the TestExecutionService.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The human-readable name for this device model.
		 * Examples: "iPhone 4s", "iPad Mini 2".
		 */
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

		/**
		 * An opaque id for this iOS version.
		 * Use this id to invoke the TestExecutionService.
		 */
		id?: string | null;

		/**
		 * An integer representing the major iOS version.
		 * Examples: "8", "9".
		 */
		majorVersion?: number | null;

		/**
		 * An integer representing the minor iOS version.
		 * Examples: "1", "2".
		 */
		minorVersion?: number | null;

		/** The available Xcode versions for this version. */
		supportedXcodeVersionIds?: Array<string>;

		/**
		 * Tags for this dimension.
		 * Examples: "default", "preview", "deprecated".
		 */
		tags?: Array<string>;
	}

	/** An iOS version. */
	export interface IosVersionFormProperties {

		/**
		 * An opaque id for this iOS version.
		 * Use this id to invoke the TestExecutionService.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * An integer representing the major iOS version.
		 * Examples: "8", "9".
		 */
		majorVersion: FormControl<number | null | undefined>,

		/**
		 * An integer representing the minor iOS version.
		 * Examples: "1", "2".
		 */
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

		/**
		 * Tags for this Xcode version.
		 * Example: "default".
		 */
		tags?: Array<string>;

		/**
		 * The id for this version.
		 * Example: "9.2".
		 */
		version?: string | null;
	}

	/** An Xcode version that an iOS version is compatible with. */
	export interface XcodeVersionFormProperties {

		/**
		 * The id for this version.
		 * Example: "9.2".
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateXcodeVersionFormGroup() {
		return new FormGroup<XcodeVersionFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A test of an iOS application that implements one or more game loop scenarios.
	 * This test type accepts an archived application (.ipa file) and a list of
	 * integer scenarios that will be executed on the app sequentially.
	 */
	export interface IosTestLoop {

		/** Output only. The bundle id for the application under test. */
		appBundleId?: string | null;

		/** A reference to a file, used for user inputs. */
		appIpa?: FileReference;

		/**
		 * The list of scenarios that should be run during the test. Defaults to the
		 * single scenario 0 if unspecified.
		 */
		scenarios?: Array<number>;
	}

	/**
	 * A test of an iOS application that implements one or more game loop scenarios.
	 * This test type accepts an archived application (.ipa file) and a list of
	 * integer scenarios that will be executed on the app sequentially.
	 */
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

		/**
		 * The network traffic profile used for running the test.
		 * Available network profiles can be queried by using the
		 * NETWORK_CONFIGURATION environment type when calling
		 * TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
		 */
		networkProfile?: string | null;
	}

	/** A description of how to set up an iOS device prior to running the test. */
	export interface IosTestSetupFormProperties {

		/**
		 * The network traffic profile used for running the test.
		 * Available network profiles can be queried by using the
		 * NETWORK_CONFIGURATION environment type when calling
		 * TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
		 */
		networkProfile: FormControl<string | null | undefined>,
	}
	export function CreateIosTestSetupFormGroup() {
		return new FormGroup<IosTestSetupFormProperties>({
			networkProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A test of an iOS application that uses the XCTest framework.
	 * Xcode supports the option to "build for testing", which generates an
	 * .xctestrun file that contains a test specification (arguments, test methods,
	 * etc). This test type accepts a zip file containing the .xctestrun file and
	 * the corresponding contents of the Build/Products directory that contains all
	 * the binaries needed to run the tests.
	 */
	export interface IosXcTest {

		/** Output only. The bundle id for the application under test. */
		appBundleId?: string | null;

		/** A reference to a file, used for user inputs. */
		testsZip?: FileReference;

		/**
		 * The Xcode version that should be used for the test.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 * Defaults to the latest Xcode version Firebase Test Lab supports.
		 */
		xcodeVersion?: string | null;

		/** A reference to a file, used for user inputs. */
		xctestrun?: FileReference;
	}

	/**
	 * A test of an iOS application that uses the XCTest framework.
	 * Xcode supports the option to "build for testing", which generates an
	 * .xctestrun file that contains a test specification (arguments, test methods,
	 * etc). This test type accepts a zip file containing the .xctestrun file and
	 * the corresponding contents of the Build/Products directory that contains all
	 * the binaries needed to run the tests.
	 */
	export interface IosXcTestFormProperties {

		/** Output only. The bundle id for the application under test. */
		appBundleId: FormControl<string | null | undefined>,

		/**
		 * The Xcode version that should be used for the test.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 * Defaults to the latest Xcode version Firebase Test Lab supports.
		 */
		xcodeVersion: FormControl<string | null | undefined>,
	}
	export function CreateIosXcTestFormGroup() {
		return new FormGroup<IosXcTestFormProperties>({
			appBundleId: new FormControl<string | null | undefined>(undefined),
			xcodeVersion: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * A string representing the current version of Android Test
		 * Orchestrator that is provided by TestExecutionService.
		 * Example: "1.0.2 beta".
		 */
		orchestratorVersion?: string | null;
	}

	/** The currently provided software environment on the devices under test. */
	export interface ProvidedSoftwareCatalogFormProperties {

		/**
		 * A string representing the current version of Android Test
		 * Orchestrator that is provided by TestExecutionService.
		 * Example: "1.0.2 beta".
		 */
		orchestratorVersion: FormControl<string | null | undefined>,
	}
	export function CreateProvidedSoftwareCatalogFormGroup() {
		return new FormGroup<ProvidedSoftwareCatalogFormProperties>({
			orchestratorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Locations where the results of running the test are stored. */
	export interface ResultStorage {

		/** A storage location within Google cloud storage (GCS). */
		googleCloudStorage?: GoogleCloudStorage;

		/** Output only. URL to the results in the Firebase Web Console. */
		resultsUrl?: string | null;

		/**
		 * Represents a tool results execution resource.
		 * This has the results of a TestMatrix.
		 */
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


	/**
	 * Represents a tool results execution resource.
	 * This has the results of a TestMatrix.
	 */
	export interface ToolResultsExecution {

		/** Output only. A tool results execution ID. */
		executionId?: string | null;

		/** Output only. A tool results history ID. */
		historyId?: string | null;

		/** Output only. The cloud project that owns the tool results execution. */
		projectId?: string | null;
	}

	/**
	 * Represents a tool results execution resource.
	 * This has the results of a TestMatrix.
	 */
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

		/** Output only. The total number of shards. */
		numShards?: number | null;

		/** Output only. The index of the shard among all the shards. */
		shardIndex?: number | null;

		/** Test targets for a shard. */
		testTargetsForShard?: TestTargetsForShard;
	}

	/** Output only. Details about the shard. */
	export interface ShardFormProperties {

		/** Output only. The total number of shards. */
		numShards: FormControl<number | null | undefined>,

		/** Output only. The index of the shard among all the shards. */
		shardIndex: FormControl<number | null | undefined>,
	}
	export function CreateShardFormGroup() {
		return new FormGroup<ShardFormProperties>({
			numShards: new FormControl<number | null | undefined>(undefined),
			shardIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SystraceSetup {

		/**
		 * Systrace duration in seconds.
		 * Should be between 1 and 30 seconds. 0 disables systrace.
		 */
		durationSeconds?: number | null;
	}
	export interface SystraceSetupFormProperties {

		/**
		 * Systrace duration in seconds.
		 * Should be between 1 and 30 seconds. 0 disables systrace.
		 */
		durationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSystraceSetupFormGroup() {
		return new FormGroup<SystraceSetupFormProperties>({
			durationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional details about the progress of the running test. */
	export interface TestDetails {

		/**
		 * Output only. If the TestState is ERROR, then this string will contain
		 * human-readable details about the error.
		 */
		errorMessage?: string | null;

		/**
		 * Output only. Human-readable, detailed descriptions of the test's progress.
		 * For example: "Provisioning a device", "Starting Test".
		 * During the course of execution new data may be appended
		 * to the end of progress_messages.
		 */
		progressMessages?: Array<string>;
	}

	/** Additional details about the progress of the running test. */
	export interface TestDetailsFormProperties {

		/**
		 * Output only. If the TestState is ERROR, then this string will contain
		 * human-readable details about the error.
		 */
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

		/**
		 * Output only. Indicates the current progress of the test execution
		 * (e.g., FINISHED).
		 */
		state?: CancelTestMatrixResponseTestState | null;

		/** Additional details about the progress of the running test. */
		testDetails?: TestDetails;

		/** A description of how to run the test. */
		testSpecification?: TestSpecification;

		/** Output only. The time this test execution was initially created. */
		timestamp?: string | null;

		/**
		 * Represents a tool results step resource.
		 * This has the results of a TestExecution.
		 */
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

		/**
		 * Output only. Indicates the current progress of the test execution
		 * (e.g., FINISHED).
		 */
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

		/**
		 * A test of an Android application that can control an Android component
		 * independently of its normal lifecycle.
		 * Android instrumentation tests run an application APK and test APK inside the
		 * same process on a virtual or physical AndroidDevice.  They also specify
		 * a test runner class, such as com.google.GoogleTestRunner, which can vary
		 * on the specific instrumentation framework chosen.
		 * See <http://developer.android.com/tools/testing/testing_android.html> for
		 * more information on types of Android tests.
		 */
		androidInstrumentationTest?: AndroidInstrumentationTest;

		/**
		 * A test of an android application that explores the application on a virtual
		 * or physical Android Device, finding culprits and crashes as it goes.
		 */
		androidRoboTest?: AndroidRoboTest;

		/**
		 * A test of an Android Application with a Test Loop.
		 * The intent \<intent-name\> will be implicitly added, since Games is the only
		 * user of this api, for the time being.
		 */
		androidTestLoop?: AndroidTestLoop;

		/** Disables performance metrics recording. May reduce test latency. */
		disablePerformanceMetrics?: boolean | null;

		/** Disables video recording. May reduce test latency. */
		disableVideoRecording?: boolean | null;

		/**
		 * A test of an iOS application that implements one or more game loop scenarios.
		 * This test type accepts an archived application (.ipa file) and a list of
		 * integer scenarios that will be executed on the app sequentially.
		 */
		iosTestLoop?: IosTestLoop;

		/** A description of how to set up an iOS device prior to running the test. */
		iosTestSetup?: IosTestSetup;

		/**
		 * A test of an iOS application that uses the XCTest framework.
		 * Xcode supports the option to "build for testing", which generates an
		 * .xctestrun file that contains a test specification (arguments, test methods,
		 * etc). This test type accepts a zip file containing the .xctestrun file and
		 * the corresponding contents of the Build/Products directory that contains all
		 * the binaries needed to run the tests.
		 */
		iosXcTest?: IosXcTest;

		/** A description of how to set up the Android device prior to running the test. */
		testSetup?: TestSetup;

		/**
		 * Max time a test execution is allowed to run before it is
		 * automatically cancelled.
		 * The default value is 5 min.
		 */
		testTimeout?: string | null;
	}

	/** A description of how to run the test. */
	export interface TestSpecificationFormProperties {

		/** Disables performance metrics recording. May reduce test latency. */
		disablePerformanceMetrics: FormControl<boolean | null | undefined>,

		/** Disables video recording. May reduce test latency. */
		disableVideoRecording: FormControl<boolean | null | undefined>,

		/**
		 * Max time a test execution is allowed to run before it is
		 * automatically cancelled.
		 * The default value is 5 min.
		 */
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

		/**
		 * APKs to install in addition to those being directly tested.
		 * Currently capped at 100.
		 */
		additionalApks?: Array<Apk>;

		/**
		 * List of directories on the device to upload to GCS at the end of the test;
		 * they must be absolute paths under /sdcard or /data/local/tmp.
		 * Path names are restricted to characters a-z A-Z 0-9 _ - . + and /
		 * Note: The paths /sdcard and /data will be made available and treated as
		 * implicit path substitutions. E.g. if /sdcard on a particular device does
		 * not map to external storage, the system will replace it with the external
		 * storage path prefix for that device.
		 */
		directoriesToPull?: Array<string>;

		/**
		 * Environment variables to set for the test (only applicable for
		 * instrumentation tests).
		 */
		environmentVariables?: Array<EnvironmentVariable>;

		/** List of files to push to the device before starting the test. */
		filesToPush?: Array<DeviceFile>;

		/**
		 * The network traffic profile used for running the test.
		 * Available network profiles can be queried by using the
		 * NETWORK_CONFIGURATION environment type when calling
		 * TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
		 */
		networkProfile?: string | null;
		systrace?: SystraceSetup;
	}

	/** A description of how to set up the Android device prior to running the test. */
	export interface TestSetupFormProperties {

		/**
		 * The network traffic profile used for running the test.
		 * Available network profiles can be queried by using the
		 * NETWORK_CONFIGURATION environment type when calling
		 * TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
		 */
		networkProfile: FormControl<string | null | undefined>,
	}
	export function CreateTestSetupFormGroup() {
		return new FormGroup<TestSetupFormProperties>({
			networkProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a tool results step resource.
	 * This has the results of a TestExecution.
	 */
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

	/**
	 * Represents a tool results step resource.
	 * This has the results of a TestExecution.
	 */
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


	/**
	 * TestMatrix captures all details about a test. It contains the environment
	 * configuration, test specification, test executions and overall state and
	 * outcome.
	 */
	export interface TestMatrix {

		/** Information about the client which invoked the test. */
		clientInfo?: ClientInfo;

		/** The matrix of environments in which the test is to be executed. */
		environmentMatrix?: EnvironmentMatrix;

		/**
		 * The number of times a TestExecution should be re-attempted if one or more
		 * of its test cases fail for any reason.
		 * The maximum number of reruns allowed is 10.
		 * Default is 0, which implies no reruns.
		 */
		flakyTestAttempts?: number | null;

		/**
		 * Output only. Describes why the matrix is considered invalid.
		 * Only useful for matrices in the INVALID state.
		 */
		invalidMatrixDetails?: TestMatrixInvalidMatrixDetails | null;

		/**
		 * Output Only. The overall outcome of the test.
		 * Only set when the test matrix state is FINISHED.
		 */
		outcomeSummary?: TestMatrixOutcomeSummary | null;

		/** The cloud project that owns the test matrix. */
		projectId?: string | null;

		/** Locations where the results of running the test are stored. */
		resultStorage?: ResultStorage;

		/** Output only. Indicates the current progress of the test matrix. */
		state?: CancelTestMatrixResponseTestState | null;

		/**
		 * Output only. The list of test executions that the service creates for
		 * this matrix.
		 */
		testExecutions?: Array<TestExecution>;

		/** Output only. Unique id set by the service. */
		testMatrixId?: string | null;

		/** A description of how to run the test. */
		testSpecification?: TestSpecification;

		/** Output only. The time this test matrix was initially created. */
		timestamp?: string | null;
	}

	/**
	 * TestMatrix captures all details about a test. It contains the environment
	 * configuration, test specification, test executions and overall state and
	 * outcome.
	 */
	export interface TestMatrixFormProperties {

		/**
		 * The number of times a TestExecution should be re-attempted if one or more
		 * of its test cases fail for any reason.
		 * The maximum number of reruns allowed is 10.
		 * Default is 0, which implies no reruns.
		 */
		flakyTestAttempts: FormControl<number | null | undefined>,

		/**
		 * Output only. Describes why the matrix is considered invalid.
		 * Only useful for matrices in the INVALID state.
		 */
		invalidMatrixDetails: FormControl<TestMatrixInvalidMatrixDetails | null | undefined>,

		/**
		 * Output Only. The overall outcome of the test.
		 * Only set when the test matrix state is FINISHED.
		 */
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
			flakyTestAttempts: new FormControl<number | null | undefined>(undefined),
			invalidMatrixDetails: new FormControl<TestMatrixInvalidMatrixDetails | null | undefined>(undefined),
			outcomeSummary: new FormControl<TestMatrixOutcomeSummary | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CancelTestMatrixResponseTestState | null | undefined>(undefined),
			testMatrixId: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TestMatrixInvalidMatrixDetails { INVALID_MATRIX_DETAILS_UNSPECIFIED = 0, DETAILS_UNAVAILABLE = 1, MALFORMED_APK = 2, MALFORMED_TEST_APK = 3, NO_MANIFEST = 4, NO_PACKAGE_NAME = 5, INVALID_PACKAGE_NAME = 6, TEST_SAME_AS_APP = 7, NO_INSTRUMENTATION = 8, NO_SIGNATURE = 9, INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE = 10, NO_TEST_RUNNER_CLASS = 11, NO_LAUNCHER_ACTIVITY = 12, FORBIDDEN_PERMISSIONS = 13, INVALID_ROBO_DIRECTIVES = 14, INVALID_RESOURCE_NAME = 15, INVALID_DIRECTIVE_ACTION = 16, TEST_LOOP_INTENT_FILTER_NOT_FOUND = 17, SCENARIO_LABEL_NOT_DECLARED = 18, SCENARIO_LABEL_MALFORMED = 19, SCENARIO_NOT_DECLARED = 20, DEVICE_ADMIN_RECEIVER = 21, MALFORMED_XC_TEST_ZIP = 22, BUILT_FOR_IOS_SIMULATOR = 23, NO_TESTS_IN_XC_TEST_ZIP = 24, USE_DESTINATION_ARTIFACTS = 25, TEST_NOT_APP_HOSTED = 26, PLIST_CANNOT_BE_PARSED = 27, TEST_ONLY_APK = 28, MALFORMED_IPA = 29, MISSING_URL_SCHEME = 30, MALFORMED_APP_BUNDLE = 31, NO_CODE_APK = 32, INVALID_INPUT_APK = 33, INVALID_APK_PREVIEW_SDK = 34 }

	export enum TestMatrixOutcomeSummary { OUTCOME_SUMMARY_UNSPECIFIED = 0, SUCCESS = 1, FAILURE = 2, INCONCLUSIVE = 3, SKIPPED = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the details of an Android application APK.
		 * Post v1/applicationDetailService/getApkDetails
		 * @return {void} Successful response
		 */
		Testing_applicationDetailService_getApkDetails(requestBody: FileReference): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/applicationDetailService/getApkDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates and runs a matrix of tests according to the given specifications.
		 * Unsupported environments will be returned in the state UNSUPPORTED.
		 * Matrices are limited to at most 200 supported executions.
		 * May return any of the following canonical error codes:
		 * - PERMISSION_DENIED - if the user is not authorized to write to project
		 * - INVALID_ARGUMENT - if the request is malformed or if the matrix expands
		 * to more than 200 supported executions
		 * Post v1/projects/{projectId}/testMatrices
		 * @param {string} projectId The GCE project under which this job will run.
		 * @param {string} requestId A string id used to detect duplicated requests.
		 * Ids are automatically scoped to a project, so
		 * users should ensure the ID is unique per-project.
		 * A UUID is recommended.
		 * Optional, but strongly recommended.
		 * @return {void} Successful response
		 */
		Testing_projects_testMatrices_create(projectId: string, requestId: string | null | undefined, requestBody: TestMatrix): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/testMatrices&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks the status of a test matrix.
		 * May return any of the following canonical error codes:
		 * - PERMISSION_DENIED - if the user is not authorized to read project
		 * - INVALID_ARGUMENT - if the request is malformed
		 * - NOT_FOUND - if the Test Matrix does not exist
		 * Get v1/projects/{projectId}/testMatrices/{testMatrixId}
		 * @param {string} projectId Cloud project that owns the test matrix.
		 * @param {string} testMatrixId Unique test matrix id which was assigned by the service.
		 * @return {void} Successful response
		 */
		Testing_projects_testMatrices_get(projectId: string, testMatrixId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/testMatrices/' + (testMatrixId == null ? '' : encodeURIComponent(testMatrixId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels unfinished test executions in a test matrix.
		 * This call returns immediately and cancellation proceeds asychronously.
		 * If the matrix is already final, this operation will have no effect.
		 * May return any of the following canonical error codes:
		 * - PERMISSION_DENIED - if the user is not authorized to read project
		 * - INVALID_ARGUMENT - if the request is malformed
		 * - NOT_FOUND - if the Test Matrix does not exist
		 * Post v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel
		 * @param {string} projectId Cloud project that owns the test.
		 * @param {string} testMatrixId Test matrix that will be canceled.
		 * @return {void} Successful response
		 */
		Testing_projects_testMatrices_cancel(projectId: string, testMatrixId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/testMatrices/' + (testMatrixId == null ? '' : encodeURIComponent(testMatrixId)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the catalog of supported test environments.
		 * May return any of the following canonical error codes:
		 * - INVALID_ARGUMENT - if the request is malformed
		 * - NOT_FOUND - if the environment type does not exist
		 * - INTERNAL - if an internal error occurred
		 * Get v1/testEnvironmentCatalog/{environmentType}
		 * @param {Testing_testEnvironmentCatalog_getEnvironmentType} environmentType Required. The type of environment that should be listed.
		 * @param {string} projectId For authorization, the cloud project requesting the TestEnvironmentCatalog.
		 * @return {void} Successful response
		 */
		Testing_testEnvironmentCatalog_get(environmentType: Testing_testEnvironmentCatalog_getEnvironmentType, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/testEnvironmentCatalog/' + environmentType + '?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Testing_testEnvironmentCatalog_getEnvironmentType { ENVIRONMENT_TYPE_UNSPECIFIED = 0, ANDROID = 1, IOS = 2, NETWORK_CONFIGURATION = 3, PROVIDED_SOFTWARE = 4 }

}

