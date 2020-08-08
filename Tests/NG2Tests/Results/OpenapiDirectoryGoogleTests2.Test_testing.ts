import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
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


	/** A single Android device. */
	export interface AndroidDevice {

		/**
		 * Required. The id of the Android device to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		androidModelId?: string;

		/**
		 * Required. The id of the Android OS version to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		androidVersionId?: string;

		/**
		 * Required. The locale the test device used for testing.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		locale?: string;

		/**
		 * Required. How the device is oriented during the test.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		orientation?: string;
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


	/** A description of an Android device tests may be run on. */
	export interface AndroidModel {

		/**
		 * The company that this device is branded with.
		 * Example: "Google", "Samsung".
		 */
		brand?: string;

		/**
		 * The name of the industrial design.
		 * This corresponds to android.os.Build.DEVICE.
		 */
		codename?: string;

		/** Whether this device is virtual or physical. */
		form?: AndroidModelForm;

		/** Whether this device is a phone, tablet, wearable, etc. */
		formFactor?: AndroidModelFormFactor;

		/**
		 * The unique opaque id for this model.
		 * Use this for invoking the TestExecutionService.
		 */
		id?: string;

		/**
		 * True if and only if tests with this model are recorded by stitching
		 * together screenshots. See use_low_spec_video_recording in device config.
		 */
		lowFpsVideoRecording?: boolean;

		/** The manufacturer of this device. */
		manufacturer?: string;

		/**
		 * The human-readable marketing name for this device model.
		 * Examples: "Nexus 5", "Galaxy S5".
		 */
		name?: string;

		/**
		 * Screen density in DPI.
		 * This corresponds to ro.sf.lcd_density
		 */
		screenDensity?: number;

		/** Screen size in the horizontal (X) dimension measured in pixels. */
		screenX?: number;

		/** Screen size in the vertical (Y) dimension measured in pixels. */
		screenY?: number;

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
		thumbnailUrl?: string;
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


	/** A location/region designation for language. */
	export interface Locale {

		/**
		 * The id for this locale.
		 * Example: "en_US".
		 */
		id?: string;

		/**
		 * A human-friendly name for this language/locale.
		 * Example: "English".
		 */
		name?: string;

		/**
		 * A human-friendly string representing the region for this
		 * locale. Example: "United States". Not present for every locale.
		 */
		region?: string;

		/**
		 * Tags for this dimension.
		 * Example: "default".
		 */
		tags?: Array<string>;
	}


	/** Screen orientation of the device. */
	export interface Orientation {

		/**
		 * The id for this orientation.
		 * Example: "portrait".
		 */
		id?: string;

		/**
		 * A human-friendly name for this orientation.
		 * Example: "portrait".
		 */
		name?: string;

		/**
		 * Tags for this dimension.
		 * Example: "default".
		 */
		tags?: Array<string>;
	}


	/** A version of the Android OS. */
	export interface AndroidVersion {

		/**
		 * The API level for this Android version.
		 * Examples: 18, 19.
		 */
		apiLevel?: number;

		/**
		 * The code name for this Android version.
		 * Examples: "JellyBean", "KitKat".
		 */
		codeName?: string;

		/**
		 * Data about the relative number of devices running a
		 * given configuration of the Android platform.
		 */
		distribution?: Distribution;

		/**
		 * An opaque id for this Android version.
		 * Use this id to invoke the TestExecutionService.
		 */
		id?: string;

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
		versionString?: string;
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
		marketShare?: number;

		/** Output only. The time this distribution was measured. */
		measurementTime?: string;
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
		day?: number;

		/**
		 * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
		 * month and day.
		 */
		month?: number;

		/**
		 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
		 * a year.
		 */
		year?: number;
	}


	/** A list of Android device configurations in which the test is to be executed. */
	export interface AndroidDeviceList {

		/** Required. A list of Android devices. */
		androidDevices?: Array<AndroidDevice>;
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
		appPackageId?: string;

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
		orchestratorOption?: AndroidInstrumentationTestOrchestratorOption;

		/** Options for enabling sharding. */
		shardingOption?: ShardingOption;

		/** A reference to a file, used for user inputs. */
		testApk?: FileReference;

		/**
		 * The java package for the test to be executed.
		 * The default value is determined by examining the application's manifest.
		 */
		testPackageId?: string;

		/**
		 * The InstrumentationTestRunner class.
		 * The default value is determined by examining the application's manifest.
		 */
		testRunnerClass?: string;

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


	/** A reference to a file, used for user inputs. */
	export interface FileReference {

		/**
		 * A path to a file in Google Cloud Storage.
		 * Example: gs://build-app-1414623860166/app-debug-unaligned.apk
		 */
		gcsPath?: string;
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


	/**
	 * Uniformly shards test cases given a total number of shards.
	 * For Instrumentation test, it will be translated to “-e numShard” “-e
	 * shardIndex” AndroidJUnitRunner arguments. With uniform sharding enabled,
	 * specifying these sharding arguments via environment_variables is invalid.
	 */
	export interface UniformSharding {

		/** Required. Total number of shards. The number must be >= 1 and <= 50. */
		numShards?: number;
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
		appInitialActivity?: string;

		/**
		 * The java package for the application under test.
		 * The default value is determined by examining the application's manifest.
		 */
		appPackageId?: string;

		/**
		 * The max depth of the traversal stack Robo can explore. Needs to be at least
		 * 2 to make Robo explore the app beyond the first activity.
		 * Default is 50.
		 */
		maxDepth?: number;

		/**
		 * The max number of steps Robo can execute.
		 * Default is no limit.
		 */
		maxSteps?: number;

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
	 * Directs Robo to interact with a specific UI element if it is encountered
	 * during the crawl. Currently, Robo can perform text entry or element click.
	 */
	export interface RoboDirective {

		/**
		 * Required. The type of action that Robo should perform on the specified
		 * element.
		 */
		actionType?: RoboDirectiveActionType;

		/**
		 * The text that Robo is directed to set. If left empty, the directive will be
		 * treated as a CLICK on the element matching the resource_name.
		 */
		inputText?: string;

		/**
		 * Required. The android resource name of the target UI element.
		 * For example,
		 * in Java: R.string.foo
		 * in xml: @string/foo
		 * Only the "foo" part is needed.
		 * Reference doc:
		 * https://developer.android.com/guide/topics/resources/accessing-resources.html
		 */
		resourceName?: string;
	}

	export enum RoboDirectiveActionType { ACTION_TYPE_UNSPECIFIED = 0, SINGLE_CLICK = 1, ENTER_TEXT = 2, IGNORE = 3 }


	/** Message for specifying the start activities to crawl. */
	export interface RoboStartingIntent {

		/** Specifies an intent that starts the main launcher activity. */
		launcherActivity?: LauncherActivityIntent;

		/** A starting intent specified by an action, uri, and categories. */
		startActivity?: StartActivityIntent;

		/** Timeout in seconds for each intent. */
		timeout?: string;
	}


	/** Specifies an intent that starts the main launcher activity. */
	export interface LauncherActivityIntent {
	}


	/** A starting intent specified by an action, uri, and categories. */
	export interface StartActivityIntent {

		/**
		 * Action name.
		 * Required for START_ACTIVITY.
		 */
		action?: string;

		/** Intent categories to set on the intent. */
		categories?: Array<string>;

		/** URI for the action. */
		uri?: string;
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
		appPackageId?: string;

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


	/** An Android package file to install. */
	export interface Apk {

		/** A reference to a file, used for user inputs. */
		location?: FileReference;

		/**
		 * The java package for the APK to be installed.
		 * Value is determined by examining the application's manifest.
		 */
		packageName?: string;
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
	 * An Android app manifest. See
	 * http://developer.android.com/guide/topics/manifest/manifest-intro.html
	 */
	export interface ApkManifest {

		/** User-readable name for the application. */
		applicationLabel?: string;
		intentFilters?: Array<IntentFilter>;

		/** Maximum API level on which the application is designed to run. */
		maxSdkVersion?: number;

		/** Minimum API level required for the application to run. */
		minSdkVersion?: number;

		/**
		 * Full Java-style package name for this application, e.g.
		 * "com.example.foo".
		 */
		packageName?: string;

		/** Specifies the API Level on which the application is designed to run. */
		targetSdkVersion?: number;
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
		mimeType?: string;
	}


	/** Response containing the current state of the specified test matrix. */
	export interface CancelTestMatrixResponse {

		/**
		 * The current rolled-up state of the test matrix.
		 * If this state is already final, then the cancelation request will
		 * have no effect.
		 */
		testState?: CancelTestMatrixResponseTestState;
	}

	export enum CancelTestMatrixResponseTestState { TEST_STATE_UNSPECIFIED = 0, VALIDATING = 1, PENDING = 2, RUNNING = 3, FINISHED = 4, ERROR = 5, UNSUPPORTED_ENVIRONMENT = 6, INCOMPATIBLE_ENVIRONMENT = 7, INCOMPATIBLE_ARCHITECTURE = 8, CANCELLED = 9, INVALID = 10 }


	/** Information about the client which invoked the test. */
	export interface ClientInfo {

		/** The list of detailed information about client. */
		clientInfoDetails?: Array<ClientInfoDetail>;

		/** Required. Client name, such as gcloud. */
		name?: string;
	}


	/**
	 * Key-value pair of detailed information about the client which invoked the
	 * test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.
	 */
	export interface ClientInfoDetail {

		/** Required. The key of detailed client information. */
		key?: string;

		/** Required. The value of detailed client information. */
		value?: string;
	}


	/** A single device file description. */
	export interface DeviceFile {

		/** An opaque binary blob file to install on the device before the test starts. */
		obbFile?: ObbFile;

		/** A file or directory to install on the device before the test starts. */
		regularFile?: RegularFile;
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
		obbFileName?: string;
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
		devicePath?: string;
	}


	/** The environment in which the test is run. */
	export interface Environment {

		/** A single Android device. */
		androidDevice?: AndroidDevice;

		/** A single iOS device. */
		iosDevice?: IosDevice;
	}


	/** A single iOS device. */
	export interface IosDevice {

		/**
		 * Required. The id of the iOS device to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		iosModelId?: string;

		/**
		 * Required. The id of the iOS major software version to be used.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		iosVersionId?: string;

		/**
		 * Required. The locale the test device used for testing.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		locale?: string;

		/**
		 * Required. How the device is oriented during the test.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 */
		orientation?: string;
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


	/** A list of iOS device configurations in which the test is to be executed. */
	export interface IosDeviceList {

		/** Required. A list of iOS devices. */
		iosDevices?: Array<IosDevice>;
	}


	/** A key-value pair passed as an environment variable to the test. */
	export interface EnvironmentVariable {

		/** Key for the environment variable. */
		key?: string;

		/** Value for the environment variable. */
		value?: string;
	}


	/** Response containing the details of the specified Android application APK. */
	export interface GetApkDetailsResponse {

		/**
		 * Android application details based on application manifest and apk archive
		 * contents.
		 */
		apkDetail?: ApkDetail;
	}


	/** A storage location within Google cloud storage (GCS). */
	export interface GoogleCloudStorage {

		/**
		 * Required. The path to a directory in GCS that will
		 * eventually contain the results for this test.
		 * The requesting user must have write access on the bucket in the supplied
		 * path.
		 */
		gcsPath?: string;
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
		formFactor?: AndroidModelFormFactor;

		/**
		 * The unique opaque id for this model.
		 * Use this for invoking the TestExecutionService.
		 */
		id?: string;

		/**
		 * The human-readable name for this device model.
		 * Examples: "iPhone 4s", "iPad Mini 2".
		 */
		name?: string;

		/** Screen density in DPI. */
		screenDensity?: number;

		/** Screen size in the horizontal (X) dimension measured in pixels. */
		screenX?: number;

		/** Screen size in the vertical (Y) dimension measured in pixels. */
		screenY?: number;

		/** The set of iOS major software versions this device supports. */
		supportedVersionIds?: Array<string>;

		/**
		 * Tags for this dimension.
		 * Examples: "default", "preview", "deprecated".
		 */
		tags?: Array<string>;
	}


	/** iOS configuration that can be selected at the time a test is run. */
	export interface IosRuntimeConfiguration {

		/** The set of available locales. */
		locales?: Array<Locale>;

		/** The set of available orientations. */
		orientations?: Array<Orientation>;
	}


	/** An iOS version. */
	export interface IosVersion {

		/**
		 * An opaque id for this iOS version.
		 * Use this id to invoke the TestExecutionService.
		 */
		id?: string;

		/**
		 * An integer representing the major iOS version.
		 * Examples: "8", "9".
		 */
		majorVersion?: number;

		/**
		 * An integer representing the minor iOS version.
		 * Examples: "1", "2".
		 */
		minorVersion?: number;

		/** The available Xcode versions for this version. */
		supportedXcodeVersionIds?: Array<string>;

		/**
		 * Tags for this dimension.
		 * Examples: "default", "preview", "deprecated".
		 */
		tags?: Array<string>;
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
		version?: string;
	}


	/**
	 * A test of an iOS application that implements one or more game loop scenarios.
	 * This test type accepts an archived application (.ipa file) and a list of
	 * integer scenarios that will be executed on the app sequentially.
	 */
	export interface IosTestLoop {

		/** Output only. The bundle id for the application under test. */
		appBundleId?: string;

		/** A reference to a file, used for user inputs. */
		appIpa?: FileReference;

		/**
		 * The list of scenarios that should be run during the test. Defaults to the
		 * single scenario 0 if unspecified.
		 */
		scenarios?: Array<number>;
	}


	/** A description of how to set up an iOS device prior to running the test. */
	export interface IosTestSetup {

		/**
		 * The network traffic profile used for running the test.
		 * Available network profiles can be queried by using the
		 * NETWORK_CONFIGURATION environment type when calling
		 * TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
		 */
		networkProfile?: string;
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
		appBundleId?: string;

		/** A reference to a file, used for user inputs. */
		testsZip?: FileReference;

		/**
		 * The Xcode version that should be used for the test.
		 * Use the TestEnvironmentDiscoveryService to get supported options.
		 * Defaults to the latest Xcode version Firebase Test Lab supports.
		 */
		xcodeVersion?: string;

		/** A reference to a file, used for user inputs. */
		xctestrun?: FileReference;
	}

	export interface NetworkConfiguration {

		/** Network emulation parameters. */
		downRule?: TrafficRule;

		/** The unique opaque id for this network traffic configuration. */
		id?: string;

		/** Network emulation parameters. */
		upRule?: TrafficRule;
	}


	/** Network emulation parameters. */
	export interface TrafficRule {

		/** Bandwidth in kbits/second. */
		bandwidth?: number;

		/** Burst size in kbits. */
		burst?: number;

		/** Packet delay, must be >= 0. */
		delay?: string;

		/** Packet duplication ratio (0.0 - 1.0). */
		packetDuplicationRatio?: number;

		/** Packet loss ratio (0.0 - 1.0). */
		packetLossRatio?: number;
	}

	export interface NetworkConfigurationCatalog {
		configurations?: Array<NetworkConfiguration>;
	}


	/** The currently provided software environment on the devices under test. */
	export interface ProvidedSoftwareCatalog {

		/**
		 * A string representing the current version of Android Test
		 * Orchestrator that is provided by TestExecutionService.
		 * Example: "1.0.2 beta".
		 */
		orchestratorVersion?: string;
	}


	/** Locations where the results of running the test are stored. */
	export interface ResultStorage {

		/** A storage location within Google cloud storage (GCS). */
		googleCloudStorage?: GoogleCloudStorage;

		/** Output only. URL to the results in the Firebase Web Console. */
		resultsUrl?: string;

		/**
		 * Represents a tool results execution resource.
		 * This has the results of a TestMatrix.
		 */
		toolResultsExecution?: ToolResultsExecution;

		/** Represents a tool results history resource. */
		toolResultsHistory?: ToolResultsHistory;
	}


	/**
	 * Represents a tool results execution resource.
	 * This has the results of a TestMatrix.
	 */
	export interface ToolResultsExecution {

		/** Output only. A tool results execution ID. */
		executionId?: string;

		/** Output only. A tool results history ID. */
		historyId?: string;

		/** Output only. The cloud project that owns the tool results execution. */
		projectId?: string;
	}


	/** Represents a tool results history resource. */
	export interface ToolResultsHistory {

		/** Required. A tool results history ID. */
		historyId?: string;

		/** Required. The cloud project that owns the tool results history. */
		projectId?: string;
	}


	/** Output only. Details about the shard. */
	export interface Shard {

		/** Output only. The total number of shards. */
		numShards?: number;

		/** Output only. The index of the shard among all the shards. */
		shardIndex?: number;

		/** Test targets for a shard. */
		testTargetsForShard?: TestTargetsForShard;
	}

	export interface SystraceSetup {

		/**
		 * Systrace duration in seconds.
		 * Should be between 1 and 30 seconds. 0 disables systrace.
		 */
		durationSeconds?: number;
	}


	/** Additional details about the progress of the running test. */
	export interface TestDetails {

		/**
		 * Output only. If the TestState is ERROR, then this string will contain
		 * human-readable details about the error.
		 */
		errorMessage?: string;

		/**
		 * Output only. Human-readable, detailed descriptions of the test's progress.
		 * For example: "Provisioning a device", "Starting Test".
		 * During the course of execution new data may be appended
		 * to the end of progress_messages.
		 */
		progressMessages?: Array<string>;
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


	/** A single test executed in a single environment. */
	export interface TestExecution {

		/** The environment in which the test is run. */
		environment?: Environment;

		/** Output only. Unique id set by the service. */
		id?: string;

		/** Output only. Id of the containing TestMatrix. */
		matrixId?: string;

		/** Output only. The cloud project that owns the test execution. */
		projectId?: string;

		/** Output only. Details about the shard. */
		shard?: Shard;

		/**
		 * Output only. Indicates the current progress of the test execution
		 * (e.g., FINISHED).
		 */
		state?: CancelTestMatrixResponseTestState;

		/** Additional details about the progress of the running test. */
		testDetails?: TestDetails;

		/** A description of how to run the test. */
		testSpecification?: TestSpecification;

		/** Output only. The time this test execution was initially created. */
		timestamp?: string;

		/**
		 * Represents a tool results step resource.
		 * This has the results of a TestExecution.
		 */
		toolResultsStep?: ToolResultsStep;
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
		disablePerformanceMetrics?: boolean;

		/** Disables video recording. May reduce test latency. */
		disableVideoRecording?: boolean;

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
		testTimeout?: string;
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
		networkProfile?: string;
		systrace?: SystraceSetup;
	}


	/**
	 * Represents a tool results step resource.
	 * This has the results of a TestExecution.
	 */
	export interface ToolResultsStep {

		/** Output only. A tool results execution ID. */
		executionId?: string;

		/** Output only. A tool results history ID. */
		historyId?: string;

		/** Output only. The cloud project that owns the tool results step. */
		projectId?: string;

		/** Output only. A tool results step ID. */
		stepId?: string;
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
		flakyTestAttempts?: number;

		/**
		 * Output only. Describes why the matrix is considered invalid.
		 * Only useful for matrices in the INVALID state.
		 */
		invalidMatrixDetails?: TestMatrixInvalidMatrixDetails;

		/**
		 * Output Only. The overall outcome of the test.
		 * Only set when the test matrix state is FINISHED.
		 */
		outcomeSummary?: TestMatrixOutcomeSummary;

		/** The cloud project that owns the test matrix. */
		projectId?: string;

		/** Locations where the results of running the test are stored. */
		resultStorage?: ResultStorage;

		/** Output only. Indicates the current progress of the test matrix. */
		state?: CancelTestMatrixResponseTestState;

		/**
		 * Output only. The list of test executions that the service creates for
		 * this matrix.
		 */
		testExecutions?: Array<TestExecution>;

		/** Output only. Unique id set by the service. */
		testMatrixId?: string;

		/** A description of how to run the test. */
		testSpecification?: TestSpecification;

		/** Output only. The time this test matrix was initially created. */
		timestamp?: string;
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
		Testing_projects_testMatrices_create(projectId: string, requestId: string, requestBody: TestMatrix): Observable<HttpResponse<string>> {
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
		Testing_testEnvironmentCatalog_get(environmentType: Testing_testEnvironmentCatalog_getEnvironmentType, projectId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/testEnvironmentCatalog/' + environmentType + '?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Testing_testEnvironmentCatalog_getEnvironmentType { ENVIRONMENT_TYPE_UNSPECIFIED = 0, ANDROID = 1, IOS = 2, NETWORK_CONFIGURATION = 3, PROVIDED_SOFTWARE = 4 }

}

