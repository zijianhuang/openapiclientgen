import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Represents the result of a create device pool request. */
	export interface CreateDevicePoolResult {

		/** Represents a collection of device types. */
		devicePool?: DevicePool | null;
	}


	/** Represents a collection of device types. */
	export interface DevicePool {
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		type?: DevicePoolType | null;
		rules?: Array<Rule> | null;
		maxDevices?: number | null;
	}

	export enum DevicePoolType { CURATED = 0, PRIVATE = 1 }


	/** Represents a condition for a device pool. */
	export interface Rule {
		attribute?: RuleAttribute | null;
		operator?: RuleOperator | null;
		value?: string | null;
	}

	export enum RuleAttribute { ARN = 0, PLATFORM = 1, FORM_FACTOR = 2, MANUFACTURER = 3, REMOTE_ACCESS_ENABLED = 4, REMOTE_DEBUG_ENABLED = 5, APPIUM_VERSION = 6, INSTANCE_ARN = 7, INSTANCE_LABELS = 8, FLEET_TYPE = 9, OS_VERSION = 10, MODEL = 11, AVAILABILITY = 12 }

	export enum RuleOperator { EQUALS = 0, LESS_THAN = 1, LESS_THAN_OR_EQUALS = 2, GREATER_THAN = 3, GREATER_THAN_OR_EQUALS = 4, IN = 5, NOT_IN = 6, CONTAINS = 7 }


	/** Represents a request to the create device pool operation. */
	export interface CreateDevicePoolRequest {
		projectArn: string;
		name: string;
		description?: string | null;
		rules: Array<Rule>;
		maxDevices?: number | null;
	}

	export interface ArgumentException {
	}

	export interface NotFoundException {
	}

	export interface LimitExceededException {
	}

	export interface ServiceAccountException {
	}

	export interface CreateInstanceProfileResult {

		/** Represents the instance profile. */
		instanceProfile?: InstanceProfile | null;
	}


	/** Represents the instance profile. */
	export interface InstanceProfile {
		arn?: string | null;
		packageCleanup?: boolean | null;
		excludeAppPackagesFromCleanup?: Array<string> | null;
		rebootAfterUse?: boolean | null;
		name?: string | null;
		description?: string | null;
	}

	export interface CreateInstanceProfileRequest {
		name: string;
		description?: string | null;
		packageCleanup?: boolean | null;
		excludeAppPackagesFromCleanup?: Array<string> | null;
		rebootAfterUse?: boolean | null;
	}

	export interface CreateNetworkProfileResult {

		/** An array of settings that describes characteristics of a network profile. */
		networkProfile?: NetworkProfile | null;
	}


	/** An array of settings that describes characteristics of a network profile. */
	export interface NetworkProfile {
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		type?: DevicePoolType | null;
		uplinkBandwidthBits?: number | null;
		downlinkBandwidthBits?: number | null;
		uplinkDelayMs?: number | null;
		downlinkDelayMs?: number | null;
		uplinkJitterMs?: number | null;
		downlinkJitterMs?: number | null;
		uplinkLossPercent?: number | null;
		downlinkLossPercent?: number | null;
	}

	export interface CreateNetworkProfileRequest {
		projectArn: string;
		name: string;
		description?: string | null;
		type?: DevicePoolType | null;
		uplinkBandwidthBits?: number | null;
		downlinkBandwidthBits?: number | null;
		uplinkDelayMs?: number | null;
		downlinkDelayMs?: number | null;
		uplinkJitterMs?: number | null;
		downlinkJitterMs?: number | null;
		uplinkLossPercent?: number | null;
		downlinkLossPercent?: number | null;
	}


	/** Represents the result of a create project request. */
	export interface CreateProjectResult {

		/** Represents an operating-system neutral workspace for running and managing tests. */
		project?: Project | null;
	}


	/** Represents an operating-system neutral workspace for running and managing tests. */
	export interface Project {
		arn?: string | null;
		name?: string | null;
		defaultJobTimeoutMinutes?: number | null;
		created?: Date | null;
	}


	/** Represents a request to the create project operation. */
	export interface CreateProjectRequest {
		name: string;
		defaultJobTimeoutMinutes?: number | null;
	}

	export interface TagOperationException {
	}


	/** Represents the server response from a request to create a remote access session. */
	export interface CreateRemoteAccessSessionResult {

		/** Represents information about the remote access session. */
		remoteAccessSession?: RemoteAccessSession | null;
	}


	/** Represents information about the remote access session. */
	export interface RemoteAccessSession {
		arn?: string | null;
		name?: string | null;
		created?: Date | null;
		status?: RemoteAccessSessionStatus | null;
		result?: RemoteAccessSessionResult | null;
		message?: string | null;
		started?: Date | null;
		stopped?: Date | null;

		/** Represents a device type that an app is tested against. */
		device?: Device | null;
		instanceArn?: string | null;
		remoteDebugEnabled?: boolean | null;
		remoteRecordEnabled?: boolean | null;
		remoteRecordAppArn?: string | null;
		hostAddress?: string | null;
		clientId?: string | null;
		billingMethod?: RemoteAccessSessionBillingMethod | null;

		/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
		deviceMinutes?: DeviceMinutes | null;
		endpoint?: string | null;
		deviceUdid?: string | null;
		interactionMode?: RemoteAccessSessionInteractionMode | null;
		skipAppResign?: boolean | null;
	}

	export enum RemoteAccessSessionStatus { PENDING = 0, PENDING_CONCURRENCY = 1, PENDING_DEVICE = 2, PROCESSING = 3, SCHEDULING = 4, PREPARING = 5, RUNNING = 6, COMPLETED = 7, STOPPING = 8 }

	export enum RemoteAccessSessionResult { PENDING = 0, PASSED = 1, WARNED = 2, FAILED = 3, SKIPPED = 4, ERRORED = 5, STOPPED = 6 }


	/** Represents a device type that an app is tested against. */
	export interface Device {
		arn?: string | null;
		name?: string | null;
		manufacturer?: string | null;
		model?: string | null;
		modelId?: string | null;
		formFactor?: DeviceFormFactor | null;
		platform?: DevicePlatform | null;
		os?: string | null;

		/** Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage. */
		cpu?: CPU | null;

		/** Represents the screen resolution of a device in height and width, expressed in pixels. */
		resolution?: Resolution | null;
		heapSize?: number | null;
		memory?: number | null;
		image?: string | null;
		carrier?: string | null;
		radio?: string | null;
		remoteAccessEnabled?: boolean | null;
		remoteDebugEnabled?: boolean | null;
		fleetType?: string | null;
		fleetName?: string | null;
		instances?: Array<DeviceInstance> | null;
		availability?: DeviceAvailability | null;
	}

	export enum DeviceFormFactor { PHONE = 0, TABLET = 1 }

	export enum DevicePlatform { ANDROID = 0, IOS = 1 }


	/** Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage. */
	export interface CPU {
		frequency?: string | null;
		architecture?: string | null;
		clock?: number | null;
	}


	/** Represents the screen resolution of a device in height and width, expressed in pixels. */
	export interface Resolution {
		width?: number | null;
		height?: number | null;
	}


	/** Represents the device instance. */
	export interface DeviceInstance {
		arn?: string | null;
		deviceArn?: string | null;
		labels?: Array<string> | null;
		status?: DeviceInstanceStatus | null;
		udid?: string | null;

		/** Represents the instance profile. */
		instanceProfile?: InstanceProfile | null;
	}

	export enum DeviceInstanceStatus { IN_USE = 0, PREPARING = 1, AVAILABLE = 2, NOT_AVAILABLE = 3 }

	export enum DeviceAvailability { TEMPORARY_NOT_AVAILABLE = 0, BUSY = 1, AVAILABLE = 2, HIGHLY_AVAILABLE = 3 }

	export enum RemoteAccessSessionBillingMethod { METERED = 0, UNMETERED = 1 }


	/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
	export interface DeviceMinutes {
		total?: number | null;
		metered?: number | null;
		unmetered?: number | null;
	}

	export enum RemoteAccessSessionInteractionMode { INTERACTIVE = 0, NO_VIDEO = 1, VIDEO_ONLY = 2 }


	/** Creates and submits a request to start a remote access session. */
	export interface CreateRemoteAccessSessionRequest {
		projectArn: string;
		deviceArn: string;
		instanceArn?: string | null;
		sshPublicKey?: string | null;
		remoteDebugEnabled?: boolean | null;
		remoteRecordEnabled?: boolean | null;
		remoteRecordAppArn?: string | null;
		name?: string | null;
		clientId?: string | null;

		/** Configuration settings for a remote access session, including billing method. */
		configuration?: CreateRemoteAccessSessionConfiguration | null;
		interactionMode?: RemoteAccessSessionInteractionMode | null;
		skipAppResign?: boolean | null;
	}


	/** Configuration settings for a remote access session, including billing method. */
	export interface CreateRemoteAccessSessionConfiguration {
		billingMethod?: RemoteAccessSessionBillingMethod | null;
		vpceConfigurationArns?: Array<string> | null;
	}

	export interface CreateTestGridProjectResult {

		/** A Selenium testing project. Projects are used to collect and collate sessions. */
		testGridProject?: TestGridProject | null;
	}


	/** A Selenium testing project. Projects are used to collect and collate sessions. */
	export interface TestGridProject {
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		created?: Date | null;
	}

	export interface CreateTestGridProjectRequest {
		name: string;
		description?: string | null;
	}

	export interface InternalServiceException {
	}

	export interface CreateTestGridUrlResult {
		url?: string | null;
		expires?: Date | null;
	}

	export interface CreateTestGridUrlRequest {
		projectArn: string;
		expiresInSeconds: number;
	}


	/** Represents the result of a create upload request. */
	export interface CreateUploadResult {

		/** An app or a set of one or more tests to upload or that have been uploaded. */
		upload?: Upload | null;
	}


	/** An app or a set of one or more tests to upload or that have been uploaded. */
	export interface Upload {
		arn?: string | null;
		name?: string | null;
		created?: Date | null;
		type?: UploadType | null;
		status?: UploadStatus | null;
		url?: string | null;
		metadata?: string | null;
		contentType?: string | null;
		message?: string | null;
		category?: DevicePoolType | null;
	}

	export enum UploadType { ANDROID_APP = 0, IOS_APP = 1, WEB_APP = 2, EXTERNAL_DATA = 3, APPIUM_JAVA_JUNIT_TEST_PACKAGE = 4, APPIUM_JAVA_TESTNG_TEST_PACKAGE = 5, APPIUM_PYTHON_TEST_PACKAGE = 6, APPIUM_NODE_TEST_PACKAGE = 7, APPIUM_RUBY_TEST_PACKAGE = 8, APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE = 9, APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE = 10, APPIUM_WEB_PYTHON_TEST_PACKAGE = 11, APPIUM_WEB_NODE_TEST_PACKAGE = 12, APPIUM_WEB_RUBY_TEST_PACKAGE = 13, CALABASH_TEST_PACKAGE = 14, INSTRUMENTATION_TEST_PACKAGE = 15, UIAUTOMATION_TEST_PACKAGE = 16, UIAUTOMATOR_TEST_PACKAGE = 17, XCTEST_TEST_PACKAGE = 18, XCTEST_UI_TEST_PACKAGE = 19, APPIUM_JAVA_JUNIT_TEST_SPEC = 20, APPIUM_JAVA_TESTNG_TEST_SPEC = 21, APPIUM_PYTHON_TEST_SPEC = 22, APPIUM_NODE_TEST_SPEC = 23, APPIUM_RUBY_TEST_SPEC = 24, APPIUM_WEB_JAVA_JUNIT_TEST_SPEC = 25, APPIUM_WEB_JAVA_TESTNG_TEST_SPEC = 26, APPIUM_WEB_PYTHON_TEST_SPEC = 27, APPIUM_WEB_NODE_TEST_SPEC = 28, APPIUM_WEB_RUBY_TEST_SPEC = 29, INSTRUMENTATION_TEST_SPEC = 30, XCTEST_UI_TEST_SPEC = 31 }

	export enum UploadStatus { INITIALIZED = 0, PROCESSING = 1, SUCCEEDED = 2, FAILED = 3 }


	/** Represents a request to the create upload operation. */
	export interface CreateUploadRequest {
		projectArn: string;
		name: string;
		type: UploadType;
		contentType?: string | null;
	}

	export interface CreateVPCEConfigurationResult {

		/** Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration. */
		vpceConfiguration?: VPCEConfiguration | null;
	}


	/** Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration. */
	export interface VPCEConfiguration {
		arn?: string | null;
		vpceConfigurationName?: string | null;
		vpceServiceName?: string | null;
		serviceDnsName?: string | null;
		vpceConfigurationDescription?: string | null;
	}

	export interface CreateVPCEConfigurationRequest {
		vpceConfigurationName: string;
		vpceServiceName: string;
		serviceDnsName: string;
		vpceConfigurationDescription?: string | null;
	}


	/** Represents the result of a delete device pool request. */
	export interface DeleteDevicePoolResult {
	}


	/** Represents a request to the delete device pool operation. */
	export interface DeleteDevicePoolRequest {
		arn: string;
	}

	export interface DeleteInstanceProfileResult {
	}

	export interface DeleteInstanceProfileRequest {
		arn: string;
	}

	export interface DeleteNetworkProfileResult {
	}

	export interface DeleteNetworkProfileRequest {
		arn: string;
	}


	/** Represents the result of a delete project request. */
	export interface DeleteProjectResult {
	}


	/** Represents a request to the delete project operation. */
	export interface DeleteProjectRequest {
		arn: string;
	}


	/** The response from the server when a request is made to delete the remote access session. */
	export interface DeleteRemoteAccessSessionResult {
	}


	/** Represents the request to delete the specified remote access session. */
	export interface DeleteRemoteAccessSessionRequest {
		arn: string;
	}


	/** Represents the result of a delete run request. */
	export interface DeleteRunResult {
	}


	/** Represents a request to the delete run operation. */
	export interface DeleteRunRequest {
		arn: string;
	}

	export interface DeleteTestGridProjectResult {
	}

	export interface DeleteTestGridProjectRequest {
		projectArn: string;
	}

	export interface CannotDeleteException {
	}


	/** Represents the result of a delete upload request. */
	export interface DeleteUploadResult {
	}


	/** Represents a request to the delete upload operation. */
	export interface DeleteUploadRequest {
		arn: string;
	}

	export interface DeleteVPCEConfigurationResult {
	}

	export interface DeleteVPCEConfigurationRequest {
		arn: string;
	}

	export interface InvalidOperationException {
	}


	/** Represents the account settings return values from the <code>GetAccountSettings</code> request. */
	export interface GetAccountSettingsResult {

		/** A container for account-level settings in AWS Device Farm. */
		accountSettings?: AccountSettings | null;
	}


	/** A container for account-level settings in AWS Device Farm. */
	export interface AccountSettings {
		awsAccountNumber?: string | null;
		unmeteredDevices?: PurchasedDevicesMap | null;
		unmeteredRemoteAccessDevices?: PurchasedDevicesMap | null;
		maxJobTimeoutMinutes?: number | null;

		/** Represents information about free trial device minutes for an AWS account. */
		trialMinutes?: TrialMinutes | null;
		maxSlots?: MaxSlotMap | null;
		defaultJobTimeoutMinutes?: number | null;
		skipAppResign?: boolean | null;
	}

	export interface PurchasedDevicesMap {
	}


	/** Represents information about free trial device minutes for an AWS account. */
	export interface TrialMinutes {
		total?: number | null;
		remaining?: number | null;
	}

	export interface MaxSlotMap {
	}


	/** Represents the request sent to retrieve the account settings. */
	export interface GetAccountSettingsRequest {
	}


	/** Represents the result of a get device request. */
	export interface GetDeviceResult {

		/** Represents a device type that an app is tested against. */
		device?: Device | null;
	}


	/** Represents a request to the get device request. */
	export interface GetDeviceRequest {
		arn: string;
	}

	export interface GetDeviceInstanceResult {

		/** Represents the device instance. */
		deviceInstance?: DeviceInstance | null;
	}

	export interface GetDeviceInstanceRequest {
		arn: string;
	}


	/** Represents the result of a get device pool request. */
	export interface GetDevicePoolResult {

		/** Represents a collection of device types. */
		devicePool?: DevicePool | null;
	}


	/** Represents a request to the get device pool operation. */
	export interface GetDevicePoolRequest {
		arn: string;
	}


	/** Represents the result of describe device pool compatibility request. */
	export interface GetDevicePoolCompatibilityResult {
		compatibleDevices?: Array<DevicePoolCompatibilityResult> | null;
		incompatibleDevices?: Array<DevicePoolCompatibilityResult> | null;
	}


	/** Represents a device pool compatibility result. */
	export interface DevicePoolCompatibilityResult {

		/** Represents a device type that an app is tested against. */
		device?: Device | null;
		compatible?: boolean | null;
		incompatibilityMessages?: Array<IncompatibilityMessage> | null;
	}


	/** Represents information about incompatibility. */
	export interface IncompatibilityMessage {
		message?: string | null;
		type?: RuleAttribute | null;
	}


	/** Represents a request to the get device pool compatibility operation. */
	export interface GetDevicePoolCompatibilityRequest {
		devicePoolArn: string;
		appArn?: string | null;
		testType?: GetDevicePoolCompatibilityRequestTestType | null;

		/** Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>. */
		test?: ScheduleRunTest | null;

		/** Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles. */
		configuration?: ScheduleRunConfiguration | null;
	}

	export enum GetDevicePoolCompatibilityRequestTestType { BUILTIN_FUZZ = 0, BUILTIN_EXPLORER = 1, WEB_PERFORMANCE_PROFILE = 2, APPIUM_JAVA_JUNIT = 3, APPIUM_JAVA_TESTNG = 4, APPIUM_PYTHON = 5, APPIUM_NODE = 6, APPIUM_RUBY = 7, APPIUM_WEB_JAVA_JUNIT = 8, APPIUM_WEB_JAVA_TESTNG = 9, APPIUM_WEB_PYTHON = 10, APPIUM_WEB_NODE = 11, APPIUM_WEB_RUBY = 12, CALABASH = 13, INSTRUMENTATION = 14, UIAUTOMATION = 15, UIAUTOMATOR = 16, XCTEST = 17, XCTEST_UI = 18, REMOTE_ACCESS_RECORD = 19, REMOTE_ACCESS_REPLAY = 20 }


	/** Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>. */
	export interface ScheduleRunTest {
		type: GetDevicePoolCompatibilityRequestTestType;
		testPackageArn?: string | null;
		testSpecArn?: string | null;
		filter?: string | null;
		parameters?: TestParameters | null;
	}

	export interface TestParameters {
	}


	/** Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles. */
	export interface ScheduleRunConfiguration {
		extraDataPackageArn?: string | null;
		networkProfileArn?: string | null;
		locale?: string | null;

		/** <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p> */
		location?: Location | null;
		vpceConfigurationArns?: Array<string> | null;

		/** <p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the device or in the test environment, are pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p> */
		customerArtifactPaths?: CustomerArtifactPaths | null;

		/** Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC. */
		radios?: Radios | null;
		auxiliaryApps?: Array<string> | null;
		billingMethod?: RemoteAccessSessionBillingMethod | null;
	}


	/** <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p> */
	export interface Location {
		latitude: number;
		longitude: number;
	}


	/** <p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the device or in the test environment, are pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p> */
	export interface CustomerArtifactPaths {
		iosPaths?: Array<string> | null;
		androidPaths?: Array<string> | null;
		deviceHostPaths?: Array<string> | null;
	}


	/** Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC. */
	export interface Radios {
		wifi?: boolean | null;
		bluetooth?: boolean | null;
		nfc?: boolean | null;
		gps?: boolean | null;
	}

	export interface GetInstanceProfileResult {

		/** Represents the instance profile. */
		instanceProfile?: InstanceProfile | null;
	}

	export interface GetInstanceProfileRequest {
		arn: string;
	}


	/** Represents the result of a get job request. */
	export interface GetJobResult {

		/** Represents a device. */
		job?: Job | null;
	}


	/** Represents a device. */
	export interface Job {
		arn?: string | null;
		name?: string | null;
		type?: GetDevicePoolCompatibilityRequestTestType | null;
		created?: Date | null;
		status?: RemoteAccessSessionStatus | null;
		result?: RemoteAccessSessionResult | null;
		started?: Date | null;
		stopped?: Date | null;

		/** Represents entity counters. */
		counters?: Counters | null;
		message?: string | null;

		/** Represents a device type that an app is tested against. */
		device?: Device | null;
		instanceArn?: string | null;

		/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
		deviceMinutes?: DeviceMinutes | null;
		videoEndpoint?: string | null;
		videoCapture?: boolean | null;
	}


	/** Represents entity counters. */
	export interface Counters {
		total?: number | null;
		passed?: number | null;
		failed?: number | null;
		warned?: number | null;
		errored?: number | null;
		stopped?: number | null;
		skipped?: number | null;
	}


	/** Represents a request to the get job operation. */
	export interface GetJobRequest {
		arn: string;
	}

	export interface GetNetworkProfileResult {

		/** An array of settings that describes characteristics of a network profile. */
		networkProfile?: NetworkProfile | null;
	}

	export interface GetNetworkProfileRequest {
		arn: string;
	}


	/** Returns the status result for a device offering. */
	export interface GetOfferingStatusResult {
		current?: OfferingStatusMap | null;
		nextPeriod?: OfferingStatusMap | null;
		nextToken?: string | null;
	}

	export interface OfferingStatusMap {
	}


	/** Represents the request to retrieve the offering status for the specified customer or account. */
	export interface GetOfferingStatusRequest {
		nextToken?: string | null;
	}

	export interface NotEligibleException {
	}


	/** Represents the result of a get project request. */
	export interface GetProjectResult {

		/** Represents an operating-system neutral workspace for running and managing tests. */
		project?: Project | null;
	}


	/** Represents a request to the get project operation. */
	export interface GetProjectRequest {
		arn: string;
	}


	/** Represents the response from the server that lists detailed information about the remote access session. */
	export interface GetRemoteAccessSessionResult {

		/** Represents information about the remote access session. */
		remoteAccessSession?: RemoteAccessSession | null;
	}


	/** Represents the request to get information about the specified remote access session. */
	export interface GetRemoteAccessSessionRequest {
		arn: string;
	}


	/** Represents the result of a get run request. */
	export interface GetRunResult {

		/** Represents a test run on a set of devices with a given app package, test parameters, and so on. */
		run?: Run | null;
	}


	/** Represents a test run on a set of devices with a given app package, test parameters, and so on. */
	export interface Run {
		arn?: string | null;
		name?: string | null;
		type?: GetDevicePoolCompatibilityRequestTestType | null;
		platform?: DevicePlatform | null;
		created?: Date | null;
		status?: RemoteAccessSessionStatus | null;
		result?: RemoteAccessSessionResult | null;
		started?: Date | null;
		stopped?: Date | null;

		/** Represents entity counters. */
		counters?: Counters | null;
		message?: string | null;
		totalJobs?: number | null;
		completedJobs?: number | null;
		billingMethod?: RemoteAccessSessionBillingMethod | null;

		/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
		deviceMinutes?: DeviceMinutes | null;

		/** An array of settings that describes characteristics of a network profile. */
		networkProfile?: NetworkProfile | null;
		parsingResultUrl?: string | null;
		resultCode?: RunResultCode | null;
		seed?: number | null;
		appUpload?: string | null;
		eventCount?: number | null;
		jobTimeoutMinutes?: number | null;
		devicePoolArn?: string | null;
		locale?: string | null;

		/** Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC. */
		radios?: Radios | null;

		/** <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p> */
		location?: Location | null;

		/** <p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the device or in the test environment, are pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p> */
		customerArtifactPaths?: CustomerArtifactPaths | null;
		webUrl?: string | null;
		skipAppResign?: boolean | null;
		testSpecArn?: string | null;

		/** Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>. */
		deviceSelectionResult?: DeviceSelectionResult | null;
	}

	export enum RunResultCode { PARSING_FAILED = 0, VPC_ENDPOINT_SETUP_FAILED = 1 }


	/** Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>. */
	export interface DeviceSelectionResult {
		filters?: Array<DeviceFilter> | null;
		matchedDevicesCount?: number | null;
		maxDevices?: number | null;
	}


	/** <p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p> */
	export interface DeviceFilter {
		attribute?: DeviceFilterAttribute | null;
		operator?: RuleOperator | null;
		values?: Array<string> | null;
	}

	export enum DeviceFilterAttribute { ARN = 0, PLATFORM = 1, OS_VERSION = 2, MODEL = 3, AVAILABILITY = 4, FORM_FACTOR = 5, MANUFACTURER = 6, REMOTE_ACCESS_ENABLED = 7, REMOTE_DEBUG_ENABLED = 8, INSTANCE_ARN = 9, INSTANCE_LABELS = 10, FLEET_TYPE = 11 }


	/** Represents a request to the get run operation. */
	export interface GetRunRequest {
		arn: string;
	}


	/** Represents the result of a get suite request. */
	export interface GetSuiteResult {

		/** Represents a collection of one or more tests. */
		suite?: Suite | null;
	}


	/** Represents a collection of one or more tests. */
	export interface Suite {
		arn?: string | null;
		name?: string | null;
		type?: GetDevicePoolCompatibilityRequestTestType | null;
		created?: Date | null;
		status?: RemoteAccessSessionStatus | null;
		result?: RemoteAccessSessionResult | null;
		started?: Date | null;
		stopped?: Date | null;

		/** Represents entity counters. */
		counters?: Counters | null;
		message?: string | null;

		/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
		deviceMinutes?: DeviceMinutes | null;
	}


	/** Represents a request to the get suite operation. */
	export interface GetSuiteRequest {
		arn: string;
	}


	/** Represents the result of a get test request. */
	export interface GetTestResult {

		/** Represents a condition that is evaluated. */
		test?: Test | null;
	}


	/** Represents a condition that is evaluated. */
	export interface Test {
		arn?: string | null;
		name?: string | null;
		type?: GetDevicePoolCompatibilityRequestTestType | null;
		created?: Date | null;
		status?: RemoteAccessSessionStatus | null;
		result?: RemoteAccessSessionResult | null;
		started?: Date | null;
		stopped?: Date | null;

		/** Represents entity counters. */
		counters?: Counters | null;
		message?: string | null;

		/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
		deviceMinutes?: DeviceMinutes | null;
	}


	/** Represents a request to the get test operation. */
	export interface GetTestRequest {
		arn: string;
	}

	export interface GetTestGridProjectResult {

		/** A Selenium testing project. Projects are used to collect and collate sessions. */
		testGridProject?: TestGridProject | null;
	}

	export interface GetTestGridProjectRequest {
		projectArn: string;
	}

	export interface GetTestGridSessionResult {

		/** A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>. */
		testGridSession?: TestGridSession | null;
	}


	/** A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>. */
	export interface TestGridSession {
		arn?: string | null;
		status?: TestGridSessionStatus | null;
		created?: Date | null;
		ended?: Date | null;
		billingMinutes?: number | null;
		seleniumProperties?: string | null;
	}

	export enum TestGridSessionStatus { ACTIVE = 0, CLOSED = 1, ERRORED = 2 }

	export interface GetTestGridSessionRequest {
		projectArn?: string | null;
		sessionId?: string | null;
		sessionArn?: string | null;
	}


	/** Represents the result of a get upload request. */
	export interface GetUploadResult {

		/** An app or a set of one or more tests to upload or that have been uploaded. */
		upload?: Upload | null;
	}


	/** Represents a request to the get upload operation. */
	export interface GetUploadRequest {
		arn: string;
	}

	export interface GetVPCEConfigurationResult {

		/** Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration. */
		vpceConfiguration?: VPCEConfiguration | null;
	}

	export interface GetVPCEConfigurationRequest {
		arn: string;
	}


	/** Represents the response from the server after AWS Device Farm makes a request to install to a remote access session. */
	export interface InstallToRemoteAccessSessionResult {

		/** An app or a set of one or more tests to upload or that have been uploaded. */
		appUpload?: Upload | null;
	}


	/** Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session. */
	export interface InstallToRemoteAccessSessionRequest {
		remoteAccessSessionArn: string;
		appArn: string;
	}


	/** Represents the result of a list artifacts operation. */
	export interface ListArtifactsResult {
		artifacts?: Array<Artifact> | null;
		nextToken?: string | null;
	}


	/** Represents the output of a test. Examples of artifacts include logs and screenshots. */
	export interface Artifact {
		arn?: string | null;
		name?: string | null;
		type?: ArtifactType | null;
		extension?: string | null;
		url?: string | null;
	}

	export enum ArtifactType { UNKNOWN = 0, SCREENSHOT = 1, DEVICE_LOG = 2, MESSAGE_LOG = 3, VIDEO_LOG = 4, RESULT_LOG = 5, SERVICE_LOG = 6, WEBKIT_LOG = 7, INSTRUMENTATION_OUTPUT = 8, EXERCISER_MONKEY_OUTPUT = 9, CALABASH_JSON_OUTPUT = 10, CALABASH_PRETTY_OUTPUT = 11, CALABASH_STANDARD_OUTPUT = 12, CALABASH_JAVA_XML_OUTPUT = 13, AUTOMATION_OUTPUT = 14, APPIUM_SERVER_OUTPUT = 15, APPIUM_JAVA_OUTPUT = 16, APPIUM_JAVA_XML_OUTPUT = 17, APPIUM_PYTHON_OUTPUT = 18, APPIUM_PYTHON_XML_OUTPUT = 19, EXPLORER_EVENT_LOG = 20, EXPLORER_SUMMARY_LOG = 21, APPLICATION_CRASH_REPORT = 22, XCTEST_LOG = 23, VIDEO = 24, CUSTOMER_ARTIFACT = 25, CUSTOMER_ARTIFACT_LOG = 26, TESTSPEC_OUTPUT = 27 }


	/** Represents a request to the list artifacts operation. */
	export interface ListArtifactsRequest {
		arn: string;
		type: ListArtifactsRequestType;
		nextToken?: string | null;
	}

	export enum ListArtifactsRequestType { SCREENSHOT = 0, FILE = 1, LOG = 2 }

	export interface ListDeviceInstancesResult {
		deviceInstances?: Array<DeviceInstance> | null;
		nextToken?: string | null;
	}

	export interface ListDeviceInstancesRequest {
		maxResults?: number | null;
		nextToken?: string | null;
	}


	/** Represents the result of a list device pools request. */
	export interface ListDevicePoolsResult {
		devicePools?: Array<DevicePool> | null;
		nextToken?: string | null;
	}


	/** Represents the result of a list device pools request. */
	export interface ListDevicePoolsRequest {
		arn: string;
		type?: DevicePoolType | null;
		nextToken?: string | null;
	}


	/** Represents the result of a list devices operation. */
	export interface ListDevicesResult {
		devices?: Array<Device> | null;
		nextToken?: string | null;
	}


	/** Represents the result of a list devices request. */
	export interface ListDevicesRequest {
		arn?: string | null;
		nextToken?: string | null;
		filters?: Array<DeviceFilter> | null;
	}

	export interface ListInstanceProfilesResult {
		instanceProfiles?: Array<InstanceProfile> | null;
		nextToken?: string | null;
	}

	export interface ListInstanceProfilesRequest {
		maxResults?: number | null;
		nextToken?: string | null;
	}


	/** Represents the result of a list jobs request. */
	export interface ListJobsResult {
		jobs?: Array<Job> | null;
		nextToken?: string | null;
	}


	/** Represents a request to the list jobs operation. */
	export interface ListJobsRequest {
		arn: string;
		nextToken?: string | null;
	}

	export interface ListNetworkProfilesResult {
		networkProfiles?: Array<NetworkProfile> | null;
		nextToken?: string | null;
	}

	export interface ListNetworkProfilesRequest {
		arn: string;
		type?: DevicePoolType | null;
		nextToken?: string | null;
	}

	export interface ListOfferingPromotionsResult {
		offeringPromotions?: Array<OfferingPromotion> | null;
		nextToken?: string | null;
	}


	/** Represents information about an offering promotion. */
	export interface OfferingPromotion {
		id?: string | null;
		description?: string | null;
	}

	export interface ListOfferingPromotionsRequest {
		nextToken?: string | null;
	}


	/** Returns the transaction log of the specified offerings. */
	export interface ListOfferingTransactionsResult {
		offeringTransactions?: Array<OfferingTransaction> | null;
		nextToken?: string | null;
	}


	/** Represents the metadata of an offering transaction. */
	export interface OfferingTransaction {

		/** The status of the offering. */
		offeringStatus?: OfferingStatus | null;
		transactionId?: string | null;
		offeringPromotionId?: string | null;
		createdOn?: Date | null;

		/** A number that represents the monetary amount for an offering or transaction. */
		cost?: MonetaryAmount | null;
	}


	/** The status of the offering. */
	export interface OfferingStatus {
		type?: OfferingStatusType | null;

		/** Represents the metadata of a device offering. */
		offering?: Offering | null;
		quantity?: number | null;
		effectiveOn?: Date | null;
	}

	export enum OfferingStatusType { PURCHASE = 0, RENEW = 1, SYSTEM = 2 }


	/** Represents the metadata of a device offering. */
	export interface Offering {
		id?: string | null;
		description?: string | null;
		type?: OfferingType | null;
		platform?: DevicePlatform | null;
		recurringCharges?: Array<RecurringCharge> | null;
	}

	export enum OfferingType { RECURRING = 0 }


	/** Specifies whether charges for devices are recurring. */
	export interface RecurringCharge {

		/** A number that represents the monetary amount for an offering or transaction. */
		cost?: MonetaryAmount | null;
		frequency?: RecurringChargeFrequency | null;
	}


	/** A number that represents the monetary amount for an offering or transaction. */
	export interface MonetaryAmount {
		amount?: number | null;
		currencyCode?: MonetaryAmountCurrencyCode | null;
	}

	export enum MonetaryAmountCurrencyCode { USD = 0 }

	export enum RecurringChargeFrequency { MONTHLY = 0 }


	/** Represents the request to list the offering transaction history. */
	export interface ListOfferingTransactionsRequest {
		nextToken?: string | null;
	}


	/** Represents the return values of the list of offerings. */
	export interface ListOfferingsResult {
		offerings?: Array<Offering> | null;
		nextToken?: string | null;
	}


	/** Represents the request to list all offerings. */
	export interface ListOfferingsRequest {
		nextToken?: string | null;
	}


	/** Represents the result of a list projects request. */
	export interface ListProjectsResult {
		projects?: Array<Project> | null;
		nextToken?: string | null;
	}


	/** Represents a request to the list projects operation. */
	export interface ListProjectsRequest {
		arn?: string | null;
		nextToken?: string | null;
	}


	/** Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session. */
	export interface ListRemoteAccessSessionsResult {
		remoteAccessSessions?: Array<RemoteAccessSession> | null;
		nextToken?: string | null;
	}


	/** Represents the request to return information about the remote access session. */
	export interface ListRemoteAccessSessionsRequest {
		arn: string;
		nextToken?: string | null;
	}


	/** Represents the result of a list runs request. */
	export interface ListRunsResult {
		runs?: Array<Run> | null;
		nextToken?: string | null;
	}


	/** Represents a request to the list runs operation. */
	export interface ListRunsRequest {
		arn: string;
		nextToken?: string | null;
	}


	/** Represents the result of a list samples request. */
	export interface ListSamplesResult {
		samples?: Array<Sample> | null;
		nextToken?: string | null;
	}


	/** Represents a sample of performance data. */
	export interface Sample {
		arn?: string | null;
		type?: SampleType | null;
		url?: string | null;
	}

	export enum SampleType { CPU = 0, MEMORY = 1, THREADS = 2, RX_RATE = 3, TX_RATE = 4, RX = 5, TX = 6, NATIVE_FRAMES = 7, NATIVE_FPS = 8, NATIVE_MIN_DRAWTIME = 9, NATIVE_AVG_DRAWTIME = 10, NATIVE_MAX_DRAWTIME = 11, OPENGL_FRAMES = 12, OPENGL_FPS = 13, OPENGL_MIN_DRAWTIME = 14, OPENGL_AVG_DRAWTIME = 15, OPENGL_MAX_DRAWTIME = 16 }


	/** Represents a request to the list samples operation. */
	export interface ListSamplesRequest {
		arn: string;
		nextToken?: string | null;
	}


	/** Represents the result of a list suites request. */
	export interface ListSuitesResult {
		suites?: Array<Suite> | null;
		nextToken?: string | null;
	}


	/** Represents a request to the list suites operation. */
	export interface ListSuitesRequest {
		arn: string;
		nextToken?: string | null;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag> | null;
	}


	/** The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters.  */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}

	export interface ListTestGridProjectsResult {
		testGridProjects?: Array<TestGridProject> | null;
		nextToken?: string | null;
	}

	export interface ListTestGridProjectsRequest {
		maxResult?: number | null;
		nextToken?: string | null;
	}

	export interface ListTestGridSessionActionsResult {
		actions?: Array<TestGridSessionAction> | null;
		nextToken?: string | null;
	}


	/** An action taken by a <a>TestGridSession</a> browser instance. */
	export interface TestGridSessionAction {
		action?: string | null;
		started?: Date | null;
		duration?: number | null;
		statusCode?: string | null;
		requestMethod?: string | null;
	}

	export interface ListTestGridSessionActionsRequest {
		sessionArn: string;
		maxResult?: number | null;
		nextToken?: string | null;
	}

	export interface ListTestGridSessionArtifactsResult {
		artifacts?: Array<TestGridSessionArtifact> | null;
		nextToken?: string | null;
	}


	/** <p>Artifacts are video and other files that are produced in the process of running a browser in an automated context. </p> <note> <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p> </note> */
	export interface TestGridSessionArtifact {
		filename?: string | null;
		type?: TestGridSessionArtifactType | null;
		url?: string | null;
	}

	export enum TestGridSessionArtifactType { UNKNOWN = 0, VIDEO = 1, SELENIUM_LOG = 2 }

	export interface ListTestGridSessionArtifactsRequest {
		sessionArn: string;
		type?: ListTestGridSessionArtifactsRequestType | null;
		maxResult?: number | null;
		nextToken?: string | null;
	}

	export enum ListTestGridSessionArtifactsRequestType { VIDEO = 0, LOG = 1 }

	export interface ListTestGridSessionsResult {
		testGridSessions?: Array<TestGridSession> | null;
		nextToken?: string | null;
	}

	export interface ListTestGridSessionsRequest {
		projectArn: string;
		status?: TestGridSessionStatus | null;
		creationTimeAfter?: Date | null;
		creationTimeBefore?: Date | null;
		endTimeAfter?: Date | null;
		endTimeBefore?: Date | null;
		maxResult?: number | null;
		nextToken?: string | null;
	}


	/** Represents the result of a list tests request. */
	export interface ListTestsResult {
		tests?: Array<Test> | null;
		nextToken?: string | null;
	}


	/** Represents a request to the list tests operation. */
	export interface ListTestsRequest {
		arn: string;
		nextToken?: string | null;
	}


	/** Represents the result of a list unique problems request. */
	export interface ListUniqueProblemsResult {
		uniqueProblems?: UniqueProblemsByExecutionResultMap | null;
		nextToken?: string | null;
	}

	export interface UniqueProblemsByExecutionResultMap {
	}


	/** Represents a request to the list unique problems operation. */
	export interface ListUniqueProblemsRequest {
		arn: string;
		nextToken?: string | null;
	}


	/** Represents the result of a list uploads request. */
	export interface ListUploadsResult {
		uploads?: Array<Upload> | null;
		nextToken?: string | null;
	}


	/** Represents a request to the list uploads operation. */
	export interface ListUploadsRequest {
		arn: string;
		type?: UploadType | null;
		nextToken?: string | null;
	}

	export interface ListVPCEConfigurationsResult {
		vpceConfigurations?: Array<VPCEConfiguration> | null;
		nextToken?: string | null;
	}

	export interface ListVPCEConfigurationsRequest {
		maxResults?: number | null;
		nextToken?: string | null;
	}


	/** The result of the purchase offering (for example, success or failure). */
	export interface PurchaseOfferingResult {

		/** Represents the metadata of an offering transaction. */
		offeringTransaction?: OfferingTransaction | null;
	}


	/** Represents a request for a purchase offering. */
	export interface PurchaseOfferingRequest {
		offeringId?: string | null;
		quantity?: number | null;
		offeringPromotionId?: string | null;
	}


	/** The result of a renewal offering. */
	export interface RenewOfferingResult {

		/** Represents the metadata of an offering transaction. */
		offeringTransaction?: OfferingTransaction | null;
	}


	/** A request that represents an offering renewal. */
	export interface RenewOfferingRequest {
		offeringId?: string | null;
		quantity?: number | null;
	}


	/** Represents the result of a schedule run request. */
	export interface ScheduleRunResult {

		/** Represents a test run on a set of devices with a given app package, test parameters, and so on. */
		run?: Run | null;
	}


	/** Represents a request to the schedule run operation. */
	export interface ScheduleRunRequest {
		projectArn: string;
		appArn?: string | null;
		devicePoolArn?: string | null;

		/** Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>. */
		deviceSelectionConfiguration?: DeviceSelectionConfiguration | null;
		name?: string | null;

		/**
		 * Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.
		 * Required
		 */
		test: ScheduleRunTest;

		/** Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles. */
		configuration?: ScheduleRunConfiguration | null;

		/** Represents configuration information about a test run, such as the execution timeout (in minutes). */
		executionConfiguration?: ExecutionConfiguration | null;
	}


	/** Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>. */
	export interface DeviceSelectionConfiguration {
		filters: Array<DeviceFilter>;
		maxDevices: number;
	}


	/** Represents configuration information about a test run, such as the execution timeout (in minutes). */
	export interface ExecutionConfiguration {
		jobTimeoutMinutes?: number | null;
		accountsCleanup?: boolean | null;
		appPackagesCleanup?: boolean | null;
		videoCapture?: boolean | null;
		skipAppResign?: boolean | null;
	}

	export interface IdempotencyException {
	}

	export interface StopJobResult {

		/** Represents a device. */
		job?: Job | null;
	}

	export interface StopJobRequest {
		arn: string;
	}


	/** Represents the response from the server that describes the remote access session when AWS Device Farm stops the session. */
	export interface StopRemoteAccessSessionResult {

		/** Represents information about the remote access session. */
		remoteAccessSession?: RemoteAccessSession | null;
	}


	/** Represents the request to stop the remote access session. */
	export interface StopRemoteAccessSessionRequest {
		arn: string;
	}


	/** Represents the results of your stop run attempt. */
	export interface StopRunResult {

		/** Represents a test run on a set of devices with a given app package, test parameters, and so on. */
		run?: Run | null;
	}


	/** Represents the request to stop a specific run. */
	export interface StopRunRequest {
		arn: string;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface TooManyTagsException {
	}

	export interface TagPolicyException {
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<string>;
	}

	export interface UpdateDeviceInstanceResult {

		/** Represents the device instance. */
		deviceInstance?: DeviceInstance | null;
	}

	export interface UpdateDeviceInstanceRequest {
		arn: string;
		profileArn?: string | null;
		labels?: Array<string> | null;
	}


	/** Represents the result of an update device pool request. */
	export interface UpdateDevicePoolResult {

		/** Represents a collection of device types. */
		devicePool?: DevicePool | null;
	}


	/** Represents a request to the update device pool operation. */
	export interface UpdateDevicePoolRequest {
		arn: string;
		name?: string | null;
		description?: string | null;
		rules?: Array<Rule> | null;
		maxDevices?: number | null;
		clearMaxDevices?: boolean | null;
	}

	export interface UpdateInstanceProfileResult {

		/** Represents the instance profile. */
		instanceProfile?: InstanceProfile | null;
	}

	export interface UpdateInstanceProfileRequest {
		arn: string;
		name?: string | null;
		description?: string | null;
		packageCleanup?: boolean | null;
		excludeAppPackagesFromCleanup?: Array<string> | null;
		rebootAfterUse?: boolean | null;
	}

	export interface UpdateNetworkProfileResult {

		/** An array of settings that describes characteristics of a network profile. */
		networkProfile?: NetworkProfile | null;
	}

	export interface UpdateNetworkProfileRequest {
		arn: string;
		name?: string | null;
		description?: string | null;
		type?: DevicePoolType | null;
		uplinkBandwidthBits?: number | null;
		downlinkBandwidthBits?: number | null;
		uplinkDelayMs?: number | null;
		downlinkDelayMs?: number | null;
		uplinkJitterMs?: number | null;
		downlinkJitterMs?: number | null;
		uplinkLossPercent?: number | null;
		downlinkLossPercent?: number | null;
	}


	/** Represents the result of an update project request. */
	export interface UpdateProjectResult {

		/** Represents an operating-system neutral workspace for running and managing tests. */
		project?: Project | null;
	}


	/** Represents a request to the update project operation. */
	export interface UpdateProjectRequest {
		arn: string;
		name?: string | null;
		defaultJobTimeoutMinutes?: number | null;
	}

	export interface UpdateTestGridProjectResult {

		/** A Selenium testing project. Projects are used to collect and collate sessions. */
		testGridProject?: TestGridProject | null;
	}

	export interface UpdateTestGridProjectRequest {
		projectArn: string;
		name?: string | null;
		description?: string | null;
	}

	export interface UpdateUploadResult {

		/** An app or a set of one or more tests to upload or that have been uploaded. */
		upload?: Upload | null;
	}

	export interface UpdateUploadRequest {
		arn: string;
		name?: string | null;
		contentType?: string | null;
		editContent?: boolean | null;
	}

	export interface UpdateVPCEConfigurationResult {

		/** Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration. */
		vpceConfiguration?: VPCEConfiguration | null;
	}

	export interface UpdateVPCEConfigurationRequest {
		arn: string;
		vpceConfigurationName?: string | null;
		vpceServiceName?: string | null;
		serviceDnsName?: string | null;
		vpceConfigurationDescription?: string | null;
	}

	export enum ArtifactCategory { SCREENSHOT = 0, FILE = 1, LOG = 2 }

	export enum BillingMethod { METERED = 0, UNMETERED = 1 }

	export enum NetworkProfileType { CURATED = 0, PRIVATE = 1 }

	export enum InteractionMode { INTERACTIVE = 0, NO_VIDEO = 1, VIDEO_ONLY = 2 }

	export enum CurrencyCode { USD = 0 }

	export enum DeviceAttribute { ARN = 0, PLATFORM = 1, FORM_FACTOR = 2, MANUFACTURER = 3, REMOTE_ACCESS_ENABLED = 4, REMOTE_DEBUG_ENABLED = 5, APPIUM_VERSION = 6, INSTANCE_ARN = 7, INSTANCE_LABELS = 8, FLEET_TYPE = 9, OS_VERSION = 10, MODEL = 11, AVAILABILITY = 12 }

	export enum InstanceStatus { IN_USE = 0, PREPARING = 1, AVAILABLE = 2, NOT_AVAILABLE = 3 }

	export enum ExecutionResult { PENDING = 0, PASSED = 1, WARNED = 2, FAILED = 3, SKIPPED = 4, ERRORED = 5, STOPPED = 6 }

	export enum ExecutionResultCode { PARSING_FAILED = 0, VPC_ENDPOINT_SETUP_FAILED = 1 }

	export enum ExecutionStatus { PENDING = 0, PENDING_CONCURRENCY = 1, PENDING_DEVICE = 2, PROCESSING = 3, SCHEDULING = 4, PREPARING = 5, RUNNING = 6, COMPLETED = 7, STOPPING = 8 }

	export enum TestType { BUILTIN_FUZZ = 0, BUILTIN_EXPLORER = 1, WEB_PERFORMANCE_PROFILE = 2, APPIUM_JAVA_JUNIT = 3, APPIUM_JAVA_TESTNG = 4, APPIUM_PYTHON = 5, APPIUM_NODE = 6, APPIUM_RUBY = 7, APPIUM_WEB_JAVA_JUNIT = 8, APPIUM_WEB_JAVA_TESTNG = 9, APPIUM_WEB_PYTHON = 10, APPIUM_WEB_NODE = 11, APPIUM_WEB_RUBY = 12, CALABASH = 13, INSTRUMENTATION = 14, UIAUTOMATION = 15, UIAUTOMATOR = 16, XCTEST = 17, XCTEST_UI = 18, REMOTE_ACCESS_RECORD = 19, REMOTE_ACCESS_REPLAY = 20 }

	export enum TestGridSessionArtifactCategory { VIDEO = 0, LOG = 1 }

	export enum OfferingTransactionType { PURCHASE = 0, RENEW = 1, SYSTEM = 2 }


	/** Information about a problem detail. */
	export interface ProblemDetail {
		arn?: string | null;
		name?: string | null;
	}


	/** Represents a specific warning or failure. */
	export interface Problem {

		/** Information about a problem detail. */
		run?: ProblemDetail | null;

		/** Information about a problem detail. */
		job?: ProblemDetail | null;

		/** Information about a problem detail. */
		suite?: ProblemDetail | null;

		/** Information about a problem detail. */
		test?: ProblemDetail | null;

		/** Represents a device type that an app is tested against. */
		device?: Device | null;
		result?: RemoteAccessSessionResult | null;
		message?: string | null;
	}


	/** A collection of one or more problems, grouped by their result. */
	export interface UniqueProblem {
		message?: string | null;
		problems?: Array<Problem> | null;
	}

	export enum UploadCategory { CURATED = 0, PRIVATE = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a device pool.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateDevicePool
		 * @return {CreateDevicePoolResult} Success
		 */
		CreateDevicePool(requestBody: CreateDevicePoolRequest): Observable<CreateDevicePoolResult> {
			return this.http.post<CreateDevicePoolResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a profile that can be applied to one or more private fleet device instances.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile
		 * @return {CreateInstanceProfileResult} Success
		 */
		CreateInstanceProfile(requestBody: CreateInstanceProfileRequest): Observable<CreateInstanceProfileResult> {
			return this.http.post<CreateInstanceProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a network profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile
		 * @return {CreateNetworkProfileResult} Success
		 */
		CreateNetworkProfile(requestBody: CreateNetworkProfileRequest): Observable<CreateNetworkProfileResult> {
			return this.http.post<CreateNetworkProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a project.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateProject
		 * @return {CreateProjectResult} Success
		 */
		CreateProject(requestBody: CreateProjectRequest): Observable<CreateProjectResult> {
			return this.http.post<CreateProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specifies and starts a remote access session.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession
		 * @return {CreateRemoteAccessSessionResult} Success
		 */
		CreateRemoteAccessSession(requestBody: CreateRemoteAccessSessionRequest): Observable<CreateRemoteAccessSessionResult> {
			return this.http.post<CreateRemoteAccessSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject
		 * @return {CreateTestGridProjectResult} Success
		 */
		CreateTestGridProject(requestBody: CreateTestGridProjectRequest): Observable<CreateTestGridProjectResult> {
			return this.http.post<CreateTestGridProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl
		 * @return {CreateTestGridUrlResult} Success
		 */
		CreateTestGridUrl(requestBody: CreateTestGridUrlRequest): Observable<CreateTestGridUrlResult> {
			return this.http.post<CreateTestGridUrlResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Uploads an app or test scripts.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateUpload
		 * @return {CreateUploadResult} Success
		 */
		CreateUpload(requestBody: CreateUploadRequest): Observable<CreateUploadResult> {
			return this.http.post<CreateUploadResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration
		 * @return {CreateVPCEConfigurationResult} Success
		 */
		CreateVPCEConfiguration(requestBody: CreateVPCEConfigurationRequest): Observable<CreateVPCEConfigurationResult> {
			return this.http.post<CreateVPCEConfigurationResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool
		 * @return {DeleteDevicePoolResult} Success
		 */
		DeleteDevicePool(requestBody: DeleteDevicePoolRequest): Observable<DeleteDevicePoolResult> {
			return this.http.post<DeleteDevicePoolResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a profile that can be applied to one or more private device instances.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile
		 * @return {DeleteInstanceProfileResult} Success
		 */
		DeleteInstanceProfile(requestBody: DeleteInstanceProfileRequest): Observable<DeleteInstanceProfileResult> {
			return this.http.post<DeleteInstanceProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a network profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile
		 * @return {DeleteNetworkProfileResult} Success
		 */
		DeleteNetworkProfile(requestBody: DeleteNetworkProfileRequest): Observable<DeleteNetworkProfileResult> {
			return this.http.post<DeleteNetworkProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteProject
		 * @return {DeleteProjectResult} Success
		 */
		DeleteProject(requestBody: DeleteProjectRequest): Observable<DeleteProjectResult> {
			return this.http.post<DeleteProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a completed remote access session and its results.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession
		 * @return {DeleteRemoteAccessSessionResult} Success
		 */
		DeleteRemoteAccessSession(requestBody: DeleteRemoteAccessSessionRequest): Observable<DeleteRemoteAccessSessionResult> {
			return this.http.post<DeleteRemoteAccessSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteRun
		 * @return {DeleteRunResult} Success
		 */
		DeleteRun(requestBody: DeleteRunRequest): Observable<DeleteRunResult> {
			return this.http.post<DeleteRunResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject
		 * @return {DeleteTestGridProjectResult} Success
		 */
		DeleteTestGridProject(requestBody: DeleteTestGridProjectRequest): Observable<DeleteTestGridProjectResult> {
			return this.http.post<DeleteTestGridProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an upload given the upload ARN.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteUpload
		 * @return {DeleteUploadResult} Success
		 */
		DeleteUpload(requestBody: DeleteUploadRequest): Observable<DeleteUploadResult> {
			return this.http.post<DeleteUploadResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration
		 * @return {DeleteVPCEConfigurationResult} Success
		 */
		DeleteVPCEConfiguration(requestBody: DeleteVPCEConfigurationRequest): Observable<DeleteVPCEConfigurationResult> {
			return this.http.post<DeleteVPCEConfigurationResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetAccountSettings
		 * @return {GetAccountSettingsResult} Success
		 */
		GetAccountSettings(requestBody: GetAccountSettingsRequest): Observable<GetAccountSettingsResult> {
			return this.http.post<GetAccountSettingsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a unique device type.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetDevice
		 * @return {GetDeviceResult} Success
		 */
		GetDevice(requestBody: GetDeviceRequest): Observable<GetDeviceResult> {
			return this.http.post<GetDeviceResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a device instance that belongs to a private device fleet.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance
		 * @return {GetDeviceInstanceResult} Success
		 */
		GetDeviceInstance(requestBody: GetDeviceInstanceRequest): Observable<GetDeviceInstanceResult> {
			return this.http.post<GetDeviceInstanceResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a device pool.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetDevicePool
		 * @return {GetDevicePoolResult} Success
		 */
		GetDevicePool(requestBody: GetDevicePoolRequest): Observable<GetDevicePoolResult> {
			return this.http.post<GetDevicePoolResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetDevicePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about compatibility with a device pool.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility
		 * @return {GetDevicePoolCompatibilityResult} Success
		 */
		GetDevicePoolCompatibility(requestBody: GetDevicePoolCompatibilityRequest): Observable<GetDevicePoolCompatibilityResult> {
			return this.http.post<GetDevicePoolCompatibilityResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified instance profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile
		 * @return {GetInstanceProfileResult} Success
		 */
		GetInstanceProfile(requestBody: GetInstanceProfileRequest): Observable<GetInstanceProfileResult> {
			return this.http.post<GetInstanceProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a job.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetJob
		 * @return {GetJobResult} Success
		 */
		GetJob(requestBody: GetJobRequest): Observable<GetJobResult> {
			return this.http.post<GetJobResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a network profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile
		 * @return {GetNetworkProfileResult} Success
		 */
		GetNetworkProfile(requestBody: GetNetworkProfileRequest): Observable<GetNetworkProfileResult> {
			return this.http.post<GetNetworkProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus
		 * @param {string} nextToken Pagination token
		 * @return {GetOfferingStatusResult} Success
		 */
		GetOfferingStatus(nextToken: string, requestBody: GetOfferingStatusRequest): Observable<GetOfferingStatusResult> {
			return this.http.post<GetOfferingStatusResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a project.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetProject
		 * @return {GetProjectResult} Success
		 */
		GetProject(requestBody: GetProjectRequest): Observable<GetProjectResult> {
			return this.http.post<GetProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a link to a currently running remote access session.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession
		 * @return {GetRemoteAccessSessionResult} Success
		 */
		GetRemoteAccessSession(requestBody: GetRemoteAccessSessionRequest): Observable<GetRemoteAccessSessionResult> {
			return this.http.post<GetRemoteAccessSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a run.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetRun
		 * @return {GetRunResult} Success
		 */
		GetRun(requestBody: GetRunRequest): Observable<GetRunResult> {
			return this.http.post<GetRunResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a suite.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetSuite
		 * @return {GetSuiteResult} Success
		 */
		GetSuite(requestBody: GetSuiteRequest): Observable<GetSuiteResult> {
			return this.http.post<GetSuiteResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetSuite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a test.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetTest
		 * @return {GetTestResult} Success
		 */
		GetTest(requestBody: GetTestRequest): Observable<GetTestResult> {
			return this.http.post<GetTestResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetTest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a Selenium testing project.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetTestGridProject
		 * @return {GetTestGridProjectResult} Success
		 */
		GetTestGridProject(requestBody: GetTestGridProjectRequest): Observable<GetTestGridProjectResult> {
			return this.http.post<GetTestGridProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetTestGridSession
		 * @return {GetTestGridSessionResult} Success
		 */
		GetTestGridSession(requestBody: GetTestGridSessionRequest): Observable<GetTestGridSessionResult> {
			return this.http.post<GetTestGridSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an upload.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetUpload
		 * @return {GetUploadResult} Success
		 */
		GetUpload(requestBody: GetUploadRequest): Observable<GetUploadResult> {
			return this.http.post<GetUploadResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration
		 * @return {GetVPCEConfigurationResult} Success
		 */
		GetVPCEConfiguration(requestBody: GetVPCEConfigurationRequest): Observable<GetVPCEConfigurationResult> {
			return this.http.post<GetVPCEConfigurationResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
		 * Post #X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession
		 * @return {InstallToRemoteAccessSessionResult} Success
		 */
		InstallToRemoteAccessSession(requestBody: InstallToRemoteAccessSessionRequest): Observable<InstallToRemoteAccessSessionResult> {
			return this.http.post<InstallToRemoteAccessSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about artifacts.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListArtifacts
		 * @param {string} nextToken Pagination token
		 * @return {ListArtifactsResult} Success
		 */
		ListArtifacts(nextToken: string, requestBody: ListArtifactsRequest): Observable<ListArtifactsResult> {
			return this.http.post<ListArtifactsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListArtifacts?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the private device instances associated with one or more AWS accounts.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances
		 * @return {ListDeviceInstancesResult} Success
		 */
		ListDeviceInstances(requestBody: ListDeviceInstancesRequest): Observable<ListDeviceInstancesResult> {
			return this.http.post<ListDeviceInstancesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about device pools.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListDevicePools
		 * @param {string} nextToken Pagination token
		 * @return {ListDevicePoolsResult} Success
		 */
		ListDevicePools(nextToken: string, requestBody: ListDevicePoolsRequest): Observable<ListDevicePoolsResult> {
			return this.http.post<ListDevicePoolsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListDevicePools?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about unique device types.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListDevices
		 * @param {string} nextToken Pagination token
		 * @return {ListDevicesResult} Success
		 */
		ListDevices(nextToken: string, requestBody: ListDevicesRequest): Observable<ListDevicesResult> {
			return this.http.post<ListDevicesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListDevices?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all the instance profiles in an AWS account.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles
		 * @return {ListInstanceProfilesResult} Success
		 */
		ListInstanceProfiles(requestBody: ListInstanceProfilesRequest): Observable<ListInstanceProfilesResult> {
			return this.http.post<ListInstanceProfilesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about jobs for a given test run.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListJobs
		 * @param {string} nextToken Pagination token
		 * @return {ListJobsResult} Success
		 */
		ListJobs(nextToken: string, requestBody: ListJobsRequest): Observable<ListJobsResult> {
			return this.http.post<ListJobsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListJobs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of available network profiles.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles
		 * @return {ListNetworkProfilesResult} Success
		 */
		ListNetworkProfiles(requestBody: ListNetworkProfilesRequest): Observable<ListNetworkProfilesResult> {
			return this.http.post<ListNetworkProfilesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions
		 * @return {ListOfferingPromotionsResult} Success
		 */
		ListOfferingPromotions(requestBody: ListOfferingPromotionsRequest): Observable<ListOfferingPromotionsResult> {
			return this.http.post<ListOfferingPromotionsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions
		 * @param {string} nextToken Pagination token
		 * @return {ListOfferingTransactionsResult} Success
		 */
		ListOfferingTransactions(nextToken: string, requestBody: ListOfferingTransactionsRequest): Observable<ListOfferingTransactionsResult> {
			return this.http.post<ListOfferingTransactionsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListOfferings
		 * @param {string} nextToken Pagination token
		 * @return {ListOfferingsResult} Success
		 */
		ListOfferings(nextToken: string, requestBody: ListOfferingsRequest): Observable<ListOfferingsResult> {
			return this.http.post<ListOfferingsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListOfferings?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about projects.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListProjects
		 * @param {string} nextToken Pagination token
		 * @return {ListProjectsResult} Success
		 */
		ListProjects(nextToken: string, requestBody: ListProjectsRequest): Observable<ListProjectsResult> {
			return this.http.post<ListProjectsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListProjects?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all currently running remote access sessions.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions
		 * @return {ListRemoteAccessSessionsResult} Success
		 */
		ListRemoteAccessSessions(requestBody: ListRemoteAccessSessionsRequest): Observable<ListRemoteAccessSessionsResult> {
			return this.http.post<ListRemoteAccessSessionsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about runs, given an AWS Device Farm project ARN.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListRuns
		 * @param {string} nextToken Pagination token
		 * @return {ListRunsResult} Success
		 */
		ListRuns(nextToken: string, requestBody: ListRunsRequest): Observable<ListRunsResult> {
			return this.http.post<ListRunsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListRuns?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about samples, given an AWS Device Farm job ARN.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListSamples
		 * @param {string} nextToken Pagination token
		 * @return {ListSamplesResult} Success
		 */
		ListSamples(nextToken: string, requestBody: ListSamplesRequest): Observable<ListSamplesResult> {
			return this.http.post<ListSamplesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListSamples?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about test suites for a given job.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListSuites
		 * @param {string} nextToken Pagination token
		 * @return {ListSuitesResult} Success
		 */
		ListSuites(nextToken: string, requestBody: ListSuitesRequest): Observable<ListSuitesResult> {
			return this.http.post<ListSuitesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListSuites?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the tags for an AWS Device Farm resource.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of all Selenium testing projects in your account.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects
		 * @param {string} maxResult Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestGridProjectsResult} Success
		 */
		ListTestGridProjects(maxResult: string, nextToken: string, requestBody: ListTestGridProjectsRequest): Observable<ListTestGridProjectsResult> {
			return this.http.post<ListTestGridProjectsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects?maxResult=' + (maxResult == null ? '' : encodeURIComponent(maxResult)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the actions taken in a <a>TestGridSession</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions
		 * @param {string} maxResult Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestGridSessionActionsResult} Success
		 */
		ListTestGridSessionActions(maxResult: string, nextToken: string, requestBody: ListTestGridSessionActionsRequest): Observable<ListTestGridSessionActionsResult> {
			return this.http.post<ListTestGridSessionActionsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions?maxResult=' + (maxResult == null ? '' : encodeURIComponent(maxResult)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of artifacts created during the session.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts
		 * @param {string} maxResult Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestGridSessionArtifactsResult} Success
		 */
		ListTestGridSessionArtifacts(maxResult: string, nextToken: string, requestBody: ListTestGridSessionArtifactsRequest): Observable<ListTestGridSessionArtifactsResult> {
			return this.http.post<ListTestGridSessionArtifactsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts?maxResult=' + (maxResult == null ? '' : encodeURIComponent(maxResult)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of sessions for a <a>TestGridProject</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions
		 * @param {string} maxResult Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestGridSessionsResult} Success
		 */
		ListTestGridSessions(maxResult: string, nextToken: string, requestBody: ListTestGridSessionsRequest): Observable<ListTestGridSessionsResult> {
			return this.http.post<ListTestGridSessionsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions?maxResult=' + (maxResult == null ? '' : encodeURIComponent(maxResult)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about tests in a given test suite.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTests
		 * @param {string} nextToken Pagination token
		 * @return {ListTestsResult} Success
		 */
		ListTests(nextToken: string, requestBody: ListTestsRequest): Observable<ListTestsResult> {
			return this.http.post<ListTestsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTests?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems
		 * @param {string} nextToken Pagination token
		 * @return {ListUniqueProblemsResult} Success
		 */
		ListUniqueProblems(nextToken: string, requestBody: ListUniqueProblemsRequest): Observable<ListUniqueProblemsResult> {
			return this.http.post<ListUniqueProblemsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about uploads, given an AWS Device Farm project ARN.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListUploads
		 * @param {string} nextToken Pagination token
		 * @return {ListUploadsResult} Success
		 */
		ListUploads(nextToken: string, requestBody: ListUploadsRequest): Observable<ListUploadsResult> {
			return this.http.post<ListUploadsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListUploads?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations
		 * @return {ListVPCEConfigurationsResult} Success
		 */
		ListVPCEConfigurations(requestBody: ListVPCEConfigurationsRequest): Observable<ListVPCEConfigurationsResult> {
			return this.http.post<ListVPCEConfigurationsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.PurchaseOffering
		 * @return {PurchaseOfferingResult} Success
		 */
		PurchaseOffering(requestBody: PurchaseOfferingRequest): Observable<PurchaseOfferingResult> {
			return this.http.post<PurchaseOfferingResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.RenewOffering
		 * @return {RenewOfferingResult} Success
		 */
		RenewOffering(requestBody: RenewOfferingRequest): Observable<RenewOfferingResult> {
			return this.http.post<RenewOfferingResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.RenewOffering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Schedules a run.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ScheduleRun
		 * @return {ScheduleRunResult} Success
		 */
		ScheduleRun(requestBody: ScheduleRunRequest): Observable<ScheduleRunResult> {
			return this.http.post<ScheduleRunResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ScheduleRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
		 * Post #X-Amz-Target=DeviceFarm_20150623.StopJob
		 * @return {StopJobResult} Success
		 */
		StopJob(requestBody: StopJobRequest): Observable<StopJobResult> {
			return this.http.post<StopJobResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.StopJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ends a specified remote access session.
		 * Post #X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession
		 * @return {StopRemoteAccessSessionResult} Success
		 */
		StopRemoteAccessSession(requestBody: StopRemoteAccessSessionRequest): Observable<StopRemoteAccessSessionResult> {
			return this.http.post<StopRemoteAccessSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
		 * Post #X-Amz-Target=DeviceFarm_20150623.StopRun
		 * @return {StopRunResult} Success
		 */
		StopRun(requestBody: StopRunRequest): Observable<StopRunResult> {
			return this.http.post<StopRunResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.StopRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
		 * Post #X-Amz-Target=DeviceFarm_20150623.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified tags from a resource.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information about a private device instance.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance
		 * @return {UpdateDeviceInstanceResult} Success
		 */
		UpdateDeviceInstance(requestBody: UpdateDeviceInstanceRequest): Observable<UpdateDeviceInstanceResult> {
			return this.http.post<UpdateDeviceInstanceResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool
		 * @return {UpdateDevicePoolResult} Success
		 */
		UpdateDevicePool(requestBody: UpdateDevicePoolRequest): Observable<UpdateDevicePoolResult> {
			return this.http.post<UpdateDevicePoolResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information about an existing private device instance profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile
		 * @return {UpdateInstanceProfileResult} Success
		 */
		UpdateInstanceProfile(requestBody: UpdateInstanceProfileRequest): Observable<UpdateInstanceProfileResult> {
			return this.http.post<UpdateInstanceProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the network profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile
		 * @return {UpdateNetworkProfileResult} Success
		 */
		UpdateNetworkProfile(requestBody: UpdateNetworkProfileRequest): Observable<UpdateNetworkProfileResult> {
			return this.http.post<UpdateNetworkProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the specified project name, given the project ARN and a new name.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateProject
		 * @return {UpdateProjectResult} Success
		 */
		UpdateProject(requestBody: UpdateProjectRequest): Observable<UpdateProjectResult> {
			return this.http.post<UpdateProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Change details of a project.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject
		 * @return {UpdateTestGridProjectResult} Success
		 */
		UpdateTestGridProject(requestBody: UpdateTestGridProjectRequest): Observable<UpdateTestGridProjectResult> {
			return this.http.post<UpdateTestGridProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an uploaded test spec.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateUpload
		 * @return {UpdateUploadResult} Success
		 */
		UpdateUpload(requestBody: UpdateUploadRequest): Observable<UpdateUploadResult> {
			return this.http.post<UpdateUploadResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration
		 * @return {UpdateVPCEConfigurationResult} Success
		 */
		UpdateVPCEConfiguration(requestBody: UpdateVPCEConfigurationRequest): Observable<UpdateVPCEConfigurationResult> {
			return this.http.post<UpdateVPCEConfigurationResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateDevicePoolX_Amz_Target { DeviceFarm_20150623_CreateDevicePool = 0 }

	export enum CreateInstanceProfileX_Amz_Target { DeviceFarm_20150623_CreateInstanceProfile = 0 }

	export enum CreateNetworkProfileX_Amz_Target { DeviceFarm_20150623_CreateNetworkProfile = 0 }

	export enum CreateProjectX_Amz_Target { DeviceFarm_20150623_CreateProject = 0 }

	export enum CreateRemoteAccessSessionX_Amz_Target { DeviceFarm_20150623_CreateRemoteAccessSession = 0 }

	export enum CreateTestGridProjectX_Amz_Target { DeviceFarm_20150623_CreateTestGridProject = 0 }

	export enum CreateTestGridUrlX_Amz_Target { DeviceFarm_20150623_CreateTestGridUrl = 0 }

	export enum CreateUploadX_Amz_Target { DeviceFarm_20150623_CreateUpload = 0 }

	export enum CreateVPCEConfigurationX_Amz_Target { DeviceFarm_20150623_CreateVPCEConfiguration = 0 }

	export enum DeleteDevicePoolX_Amz_Target { DeviceFarm_20150623_DeleteDevicePool = 0 }

	export enum DeleteInstanceProfileX_Amz_Target { DeviceFarm_20150623_DeleteInstanceProfile = 0 }

	export enum DeleteNetworkProfileX_Amz_Target { DeviceFarm_20150623_DeleteNetworkProfile = 0 }

	export enum DeleteProjectX_Amz_Target { DeviceFarm_20150623_DeleteProject = 0 }

	export enum DeleteRemoteAccessSessionX_Amz_Target { DeviceFarm_20150623_DeleteRemoteAccessSession = 0 }

	export enum DeleteRunX_Amz_Target { DeviceFarm_20150623_DeleteRun = 0 }

	export enum DeleteTestGridProjectX_Amz_Target { DeviceFarm_20150623_DeleteTestGridProject = 0 }

	export enum DeleteUploadX_Amz_Target { DeviceFarm_20150623_DeleteUpload = 0 }

	export enum DeleteVPCEConfigurationX_Amz_Target { DeviceFarm_20150623_DeleteVPCEConfiguration = 0 }

	export enum GetAccountSettingsX_Amz_Target { DeviceFarm_20150623_GetAccountSettings = 0 }

	export enum GetDeviceX_Amz_Target { DeviceFarm_20150623_GetDevice = 0 }

	export enum GetDeviceInstanceX_Amz_Target { DeviceFarm_20150623_GetDeviceInstance = 0 }

	export enum GetDevicePoolX_Amz_Target { DeviceFarm_20150623_GetDevicePool = 0 }

	export enum GetDevicePoolCompatibilityX_Amz_Target { DeviceFarm_20150623_GetDevicePoolCompatibility = 0 }

	export enum GetInstanceProfileX_Amz_Target { DeviceFarm_20150623_GetInstanceProfile = 0 }

	export enum GetJobX_Amz_Target { DeviceFarm_20150623_GetJob = 0 }

	export enum GetNetworkProfileX_Amz_Target { DeviceFarm_20150623_GetNetworkProfile = 0 }

	export enum GetOfferingStatusX_Amz_Target { DeviceFarm_20150623_GetOfferingStatus = 0 }

	export enum GetProjectX_Amz_Target { DeviceFarm_20150623_GetProject = 0 }

	export enum GetRemoteAccessSessionX_Amz_Target { DeviceFarm_20150623_GetRemoteAccessSession = 0 }

	export enum GetRunX_Amz_Target { DeviceFarm_20150623_GetRun = 0 }

	export enum GetSuiteX_Amz_Target { DeviceFarm_20150623_GetSuite = 0 }

	export enum GetTestX_Amz_Target { DeviceFarm_20150623_GetTest = 0 }

	export enum GetTestGridProjectX_Amz_Target { DeviceFarm_20150623_GetTestGridProject = 0 }

	export enum GetTestGridSessionX_Amz_Target { DeviceFarm_20150623_GetTestGridSession = 0 }

	export enum GetUploadX_Amz_Target { DeviceFarm_20150623_GetUpload = 0 }

	export enum GetVPCEConfigurationX_Amz_Target { DeviceFarm_20150623_GetVPCEConfiguration = 0 }

	export enum InstallToRemoteAccessSessionX_Amz_Target { DeviceFarm_20150623_InstallToRemoteAccessSession = 0 }

	export enum ListArtifactsX_Amz_Target { DeviceFarm_20150623_ListArtifacts = 0 }

	export enum ListDeviceInstancesX_Amz_Target { DeviceFarm_20150623_ListDeviceInstances = 0 }

	export enum ListDevicePoolsX_Amz_Target { DeviceFarm_20150623_ListDevicePools = 0 }

	export enum ListDevicesX_Amz_Target { DeviceFarm_20150623_ListDevices = 0 }

	export enum ListInstanceProfilesX_Amz_Target { DeviceFarm_20150623_ListInstanceProfiles = 0 }

	export enum ListJobsX_Amz_Target { DeviceFarm_20150623_ListJobs = 0 }

	export enum ListNetworkProfilesX_Amz_Target { DeviceFarm_20150623_ListNetworkProfiles = 0 }

	export enum ListOfferingPromotionsX_Amz_Target { DeviceFarm_20150623_ListOfferingPromotions = 0 }

	export enum ListOfferingTransactionsX_Amz_Target { DeviceFarm_20150623_ListOfferingTransactions = 0 }

	export enum ListOfferingsX_Amz_Target { DeviceFarm_20150623_ListOfferings = 0 }

	export enum ListProjectsX_Amz_Target { DeviceFarm_20150623_ListProjects = 0 }

	export enum ListRemoteAccessSessionsX_Amz_Target { DeviceFarm_20150623_ListRemoteAccessSessions = 0 }

	export enum ListRunsX_Amz_Target { DeviceFarm_20150623_ListRuns = 0 }

	export enum ListSamplesX_Amz_Target { DeviceFarm_20150623_ListSamples = 0 }

	export enum ListSuitesX_Amz_Target { DeviceFarm_20150623_ListSuites = 0 }

	export enum ListTagsForResourceX_Amz_Target { DeviceFarm_20150623_ListTagsForResource = 0 }

	export enum ListTestGridProjectsX_Amz_Target { DeviceFarm_20150623_ListTestGridProjects = 0 }

	export enum ListTestGridSessionActionsX_Amz_Target { DeviceFarm_20150623_ListTestGridSessionActions = 0 }

	export enum ListTestGridSessionArtifactsX_Amz_Target { DeviceFarm_20150623_ListTestGridSessionArtifacts = 0 }

	export enum ListTestGridSessionsX_Amz_Target { DeviceFarm_20150623_ListTestGridSessions = 0 }

	export enum ListTestsX_Amz_Target { DeviceFarm_20150623_ListTests = 0 }

	export enum ListUniqueProblemsX_Amz_Target { DeviceFarm_20150623_ListUniqueProblems = 0 }

	export enum ListUploadsX_Amz_Target { DeviceFarm_20150623_ListUploads = 0 }

	export enum ListVPCEConfigurationsX_Amz_Target { DeviceFarm_20150623_ListVPCEConfigurations = 0 }

	export enum PurchaseOfferingX_Amz_Target { DeviceFarm_20150623_PurchaseOffering = 0 }

	export enum RenewOfferingX_Amz_Target { DeviceFarm_20150623_RenewOffering = 0 }

	export enum ScheduleRunX_Amz_Target { DeviceFarm_20150623_ScheduleRun = 0 }

	export enum StopJobX_Amz_Target { DeviceFarm_20150623_StopJob = 0 }

	export enum StopRemoteAccessSessionX_Amz_Target { DeviceFarm_20150623_StopRemoteAccessSession = 0 }

	export enum StopRunX_Amz_Target { DeviceFarm_20150623_StopRun = 0 }

	export enum TagResourceX_Amz_Target { DeviceFarm_20150623_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { DeviceFarm_20150623_UntagResource = 0 }

	export enum UpdateDeviceInstanceX_Amz_Target { DeviceFarm_20150623_UpdateDeviceInstance = 0 }

	export enum UpdateDevicePoolX_Amz_Target { DeviceFarm_20150623_UpdateDevicePool = 0 }

	export enum UpdateInstanceProfileX_Amz_Target { DeviceFarm_20150623_UpdateInstanceProfile = 0 }

	export enum UpdateNetworkProfileX_Amz_Target { DeviceFarm_20150623_UpdateNetworkProfile = 0 }

	export enum UpdateProjectX_Amz_Target { DeviceFarm_20150623_UpdateProject = 0 }

	export enum UpdateTestGridProjectX_Amz_Target { DeviceFarm_20150623_UpdateTestGridProject = 0 }

	export enum UpdateUploadX_Amz_Target { DeviceFarm_20150623_UpdateUpload = 0 }

	export enum UpdateVPCEConfigurationX_Amz_Target { DeviceFarm_20150623_UpdateVPCEConfiguration = 0 }

}

