import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Android app information. */
	export interface GoogleChromeManagementV1AndroidAppInfo {

		/** Output only. Permissions requested by an Android app. */
		permissions?: Array<GoogleChromeManagementV1AndroidAppPermission>;
	}

	/** Android app information. */
	export interface GoogleChromeManagementV1AndroidAppInfoFormProperties {
	}
	export function CreateGoogleChromeManagementV1AndroidAppInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1AndroidAppInfoFormProperties>({
		});

	}


	/** Permission requested by an Android app. */
	export interface GoogleChromeManagementV1AndroidAppPermission {

		/** Output only. The type of the permission. */
		type?: string | null;
	}

	/** Permission requested by an Android app. */
	export interface GoogleChromeManagementV1AndroidAppPermissionFormProperties {

		/** Output only. The type of the permission. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1AndroidAppPermissionFormGroup() {
		return new FormGroup<GoogleChromeManagementV1AndroidAppPermissionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource representing app details. */
	export interface GoogleChromeManagementV1AppDetails {

		/** Android app information. */
		androidAppInfo?: GoogleChromeManagementV1AndroidAppInfo;

		/** Output only. Unique store identifier for the item. Examples: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension, "com.google.android.apps.docs" for the Google Drive Android app. */
		appId?: string | null;

		/** Chrome Web Store app information. */
		chromeAppInfo?: GoogleChromeManagementV1ChromeAppInfo;

		/** Output only. App's description. */
		description?: string | null;

		/** Output only. The uri for the detail page of the item. */
		detailUri?: string | null;

		/** Output only. App's display name. */
		displayName?: string | null;

		/** Output only. First published time. */
		firstPublishTime?: string | null;

		/** Output only. Home page or Website uri. */
		homepageUri?: string | null;

		/** Output only. A link to an image that can be used as an icon for the product. */
		iconUri?: string | null;

		/** Output only. Indicates if the app has to be paid for OR has paid content. */
		isPaidApp?: boolean | null;

		/** Output only. Latest published time. */
		latestPublishTime?: string | null;

		/** Output only. Format: name=customers/{customer_id}/apps/{chrome|android|web}/{app_id}@{version} */
		name?: string | null;

		/** Output only. The URI pointing to the privacy policy of the app, if it was provided by the developer. Version-specific field that will only be set when the requested app version is found. */
		privacyPolicyUri?: string | null;

		/** Output only. The publisher of the item. */
		publisher?: string | null;

		/** Output only. Number of reviews received. Chrome Web Store review information will always be for the latest version of an app. */
		reviewNumber?: string | null;

		/** Output only. The rating of the app (on 5 stars). Chrome Web Store review information will always be for the latest version of an app. */
		reviewRating?: number | null;

		/** Output only. App version. A new revision is committed whenever a new version of the app is published. */
		revisionId?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		serviceError?: GoogleRpcStatus;

		/** Output only. App type. */
		type?: GoogleChromeManagementV1AppDetailsType | null;
	}

	/** Resource representing app details. */
	export interface GoogleChromeManagementV1AppDetailsFormProperties {

		/** Output only. Unique store identifier for the item. Examples: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension, "com.google.android.apps.docs" for the Google Drive Android app. */
		appId: FormControl<string | null | undefined>,

		/** Output only. App's description. */
		description: FormControl<string | null | undefined>,

		/** Output only. The uri for the detail page of the item. */
		detailUri: FormControl<string | null | undefined>,

		/** Output only. App's display name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. First published time. */
		firstPublishTime: FormControl<string | null | undefined>,

		/** Output only. Home page or Website uri. */
		homepageUri: FormControl<string | null | undefined>,

		/** Output only. A link to an image that can be used as an icon for the product. */
		iconUri: FormControl<string | null | undefined>,

		/** Output only. Indicates if the app has to be paid for OR has paid content. */
		isPaidApp: FormControl<boolean | null | undefined>,

		/** Output only. Latest published time. */
		latestPublishTime: FormControl<string | null | undefined>,

		/** Output only. Format: name=customers/{customer_id}/apps/{chrome|android|web}/{app_id}@{version} */
		name: FormControl<string | null | undefined>,

		/** Output only. The URI pointing to the privacy policy of the app, if it was provided by the developer. Version-specific field that will only be set when the requested app version is found. */
		privacyPolicyUri: FormControl<string | null | undefined>,

		/** Output only. The publisher of the item. */
		publisher: FormControl<string | null | undefined>,

		/** Output only. Number of reviews received. Chrome Web Store review information will always be for the latest version of an app. */
		reviewNumber: FormControl<string | null | undefined>,

		/** Output only. The rating of the app (on 5 stars). Chrome Web Store review information will always be for the latest version of an app. */
		reviewRating: FormControl<number | null | undefined>,

		/** Output only. App version. A new revision is committed whenever a new version of the app is published. */
		revisionId: FormControl<string | null | undefined>,

		/** Output only. App type. */
		type: FormControl<GoogleChromeManagementV1AppDetailsType | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1AppDetailsFormGroup() {
		return new FormGroup<GoogleChromeManagementV1AppDetailsFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			detailUri: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			firstPublishTime: new FormControl<string | null | undefined>(undefined),
			homepageUri: new FormControl<string | null | undefined>(undefined),
			iconUri: new FormControl<string | null | undefined>(undefined),
			isPaidApp: new FormControl<boolean | null | undefined>(undefined),
			latestPublishTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privacyPolicyUri: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			reviewNumber: new FormControl<string | null | undefined>(undefined),
			reviewRating: new FormControl<number | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleChromeManagementV1AppDetailsType | null | undefined>(undefined),
		});

	}


	/** Chrome Web Store app information. */
	export interface GoogleChromeManagementV1ChromeAppInfo {

		/** Output only. Whether the app or extension is built and maintained by Google. Version-specific field that will only be set when the requested app version is found. */
		googleOwned?: boolean | null;

		/** Output only. Whether the app or extension is in a published state in the Chrome Web Store. */
		isCwsHosted?: boolean | null;

		/** Output only. Whether an app supports policy for extensions. */
		isExtensionPolicySupported?: boolean | null;

		/** Output only. Whether the app is only for Kiosk mode on ChromeOS devices */
		isKioskOnly?: boolean | null;

		/** Output only. Whether the app or extension is a theme. */
		isTheme?: boolean | null;

		/** Output only. Whether this app is enabled for Kiosk mode on ChromeOS devices */
		kioskEnabled?: boolean | null;

		/** Output only. The minimum number of users using this app. */
		minUserCount?: number | null;

		/** Output only. Every custom permission requested by the app. Version-specific field that will only be set when the requested app version is found. */
		permissions?: Array<GoogleChromeManagementV1ChromeAppPermission>;

		/** Output only. Every permission giving access to domains or broad host patterns. ( e.g. www.google.com). This includes the matches from content scripts as well as hosts in the permissions node of the manifest. Version-specific field that will only be set when the requested app version is found. */
		siteAccess?: Array<GoogleChromeManagementV1ChromeAppSiteAccess>;

		/** Output only. The app developer has enabled support for their app. Version-specific field that will only be set when the requested app version is found. */
		supportEnabled?: boolean | null;

		/** Output only. Types of an item in the Chrome Web Store */
		type?: GoogleChromeManagementV1ChromeAppInfoType | null;
	}

	/** Chrome Web Store app information. */
	export interface GoogleChromeManagementV1ChromeAppInfoFormProperties {

		/** Output only. Whether the app or extension is built and maintained by Google. Version-specific field that will only be set when the requested app version is found. */
		googleOwned: FormControl<boolean | null | undefined>,

		/** Output only. Whether the app or extension is in a published state in the Chrome Web Store. */
		isCwsHosted: FormControl<boolean | null | undefined>,

		/** Output only. Whether an app supports policy for extensions. */
		isExtensionPolicySupported: FormControl<boolean | null | undefined>,

		/** Output only. Whether the app is only for Kiosk mode on ChromeOS devices */
		isKioskOnly: FormControl<boolean | null | undefined>,

		/** Output only. Whether the app or extension is a theme. */
		isTheme: FormControl<boolean | null | undefined>,

		/** Output only. Whether this app is enabled for Kiosk mode on ChromeOS devices */
		kioskEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The minimum number of users using this app. */
		minUserCount: FormControl<number | null | undefined>,

		/** Output only. The app developer has enabled support for their app. Version-specific field that will only be set when the requested app version is found. */
		supportEnabled: FormControl<boolean | null | undefined>,

		/** Output only. Types of an item in the Chrome Web Store */
		type: FormControl<GoogleChromeManagementV1ChromeAppInfoType | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1ChromeAppInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1ChromeAppInfoFormProperties>({
			googleOwned: new FormControl<boolean | null | undefined>(undefined),
			isCwsHosted: new FormControl<boolean | null | undefined>(undefined),
			isExtensionPolicySupported: new FormControl<boolean | null | undefined>(undefined),
			isKioskOnly: new FormControl<boolean | null | undefined>(undefined),
			isTheme: new FormControl<boolean | null | undefined>(undefined),
			kioskEnabled: new FormControl<boolean | null | undefined>(undefined),
			minUserCount: new FormControl<number | null | undefined>(undefined),
			supportEnabled: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<GoogleChromeManagementV1ChromeAppInfoType | null | undefined>(undefined),
		});

	}


	/** Permission requested by a Chrome app or extension. */
	export interface GoogleChromeManagementV1ChromeAppPermission {

		/** Output only. If available, whether this permissions grants the app/extension access to user data. */
		accessUserData?: boolean | null;

		/** Output only. If available, a URI to a page that has documentation for the current permission. */
		documentationUri?: string | null;

		/** Output only. The type of the permission. */
		type?: string | null;
	}

	/** Permission requested by a Chrome app or extension. */
	export interface GoogleChromeManagementV1ChromeAppPermissionFormProperties {

		/** Output only. If available, whether this permissions grants the app/extension access to user data. */
		accessUserData: FormControl<boolean | null | undefined>,

		/** Output only. If available, a URI to a page that has documentation for the current permission. */
		documentationUri: FormControl<string | null | undefined>,

		/** Output only. The type of the permission. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1ChromeAppPermissionFormGroup() {
		return new FormGroup<GoogleChromeManagementV1ChromeAppPermissionFormProperties>({
			accessUserData: new FormControl<boolean | null | undefined>(undefined),
			documentationUri: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represent one host permission. */
	export interface GoogleChromeManagementV1ChromeAppSiteAccess {

		/** Output only. This can contain very specific hosts, or patterns like "*.com" for instance. */
		hostMatch?: string | null;
	}

	/** Represent one host permission. */
	export interface GoogleChromeManagementV1ChromeAppSiteAccessFormProperties {

		/** Output only. This can contain very specific hosts, or patterns like "*.com" for instance. */
		hostMatch: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1ChromeAppSiteAccessFormGroup() {
		return new FormGroup<GoogleChromeManagementV1ChromeAppSiteAccessFormProperties>({
			hostMatch: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1ChromeAppInfoType { ITEM_TYPE_UNSPECIFIED = 'ITEM_TYPE_UNSPECIFIED', EXTENSION = 'EXTENSION', OTHERS = 'OTHERS' }


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1AppDetailsType { APP_ITEM_TYPE_UNSPECIFIED = 'APP_ITEM_TYPE_UNSPECIFIED', CHROME = 'CHROME', ANDROID = 'ANDROID', WEB = 'WEB' }


	/** Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_AUDIO_REPORT */
	export interface GoogleChromeManagementV1AudioStatusReport {

		/** Output only. Active input device's name. */
		inputDevice?: string | null;

		/** Output only. Active input device's gain in [0, 100]. */
		inputGain?: number | null;

		/** Output only. Is active input device mute or not. */
		inputMute?: boolean | null;

		/** Output only. Active output device's name. */
		outputDevice?: string | null;

		/** Output only. Is active output device mute or not. */
		outputMute?: boolean | null;

		/** Output only. Active output device's volume in [0, 100]. */
		outputVolume?: number | null;

		/** Output only. Timestamp of when the sample was collected on device. */
		reportTime?: string | null;
	}

	/** Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_AUDIO_REPORT */
	export interface GoogleChromeManagementV1AudioStatusReportFormProperties {

		/** Output only. Active input device's name. */
		inputDevice: FormControl<string | null | undefined>,

		/** Output only. Active input device's gain in [0, 100]. */
		inputGain: FormControl<number | null | undefined>,

		/** Output only. Is active input device mute or not. */
		inputMute: FormControl<boolean | null | undefined>,

		/** Output only. Active output device's name. */
		outputDevice: FormControl<string | null | undefined>,

		/** Output only. Is active output device mute or not. */
		outputMute: FormControl<boolean | null | undefined>,

		/** Output only. Active output device's volume in [0, 100]. */
		outputVolume: FormControl<number | null | undefined>,

		/** Output only. Timestamp of when the sample was collected on device. */
		reportTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1AudioStatusReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1AudioStatusReportFormProperties>({
			inputDevice: new FormControl<string | null | undefined>(undefined),
			inputGain: new FormControl<number | null | undefined>(undefined),
			inputMute: new FormControl<boolean | null | undefined>(undefined),
			outputDevice: new FormControl<string | null | undefined>(undefined),
			outputMute: new FormControl<boolean | null | undefined>(undefined),
			outputVolume: new FormControl<number | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BATTERY_INFO */
	export interface GoogleChromeManagementV1BatteryInfo {

		/** Output only. Design capacity (mAmpere-hours). */
		designCapacity?: string | null;

		/** Output only. Designed minimum output voltage (mV) */
		designMinVoltage?: number | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		manufactureDate?: GoogleTypeDate;

		/** Output only. Battery manufacturer. */
		manufacturer?: string | null;

		/** Output only. Battery serial number. */
		serialNumber?: string | null;

		/** Output only. Technology of the battery. Example: Li-ion */
		technology?: string | null;
	}

	/** Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BATTERY_INFO */
	export interface GoogleChromeManagementV1BatteryInfoFormProperties {

		/** Output only. Design capacity (mAmpere-hours). */
		designCapacity: FormControl<string | null | undefined>,

		/** Output only. Designed minimum output voltage (mV) */
		designMinVoltage: FormControl<number | null | undefined>,

		/** Output only. Battery manufacturer. */
		manufacturer: FormControl<string | null | undefined>,

		/** Output only. Battery serial number. */
		serialNumber: FormControl<string | null | undefined>,

		/** Output only. Technology of the battery. Example: Li-ion */
		technology: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1BatteryInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1BatteryInfoFormProperties>({
			designCapacity: new FormControl<string | null | undefined>(undefined),
			designMinVoltage: new FormControl<number | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			technology: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A */
	export interface GoogleChromeManagementV1BatterySampleReport {

		/** Output only. Battery charge percentage. */
		chargeRate?: number | null;

		/** Output only. Battery current (mA). */
		current?: string | null;

		/** Output only. The battery discharge rate measured in mW. Positive if the battery is being discharged, negative if it's being charged. */
		dischargeRate?: number | null;

		/** Output only. Battery remaining capacity (mAmpere-hours). */
		remainingCapacity?: string | null;

		/** Output only. Timestamp of when the sample was collected on device */
		reportTime?: string | null;

		/** Output only. Battery status read from sysfs. Example: Discharging */
		status?: string | null;

		/** Output only. Temperature in Celsius degrees. */
		temperature?: number | null;

		/** Output only. Battery voltage (millivolt). */
		voltage?: string | null;
	}

	/** Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A */
	export interface GoogleChromeManagementV1BatterySampleReportFormProperties {

		/** Output only. Battery charge percentage. */
		chargeRate: FormControl<number | null | undefined>,

		/** Output only. Battery current (mA). */
		current: FormControl<string | null | undefined>,

		/** Output only. The battery discharge rate measured in mW. Positive if the battery is being discharged, negative if it's being charged. */
		dischargeRate: FormControl<number | null | undefined>,

		/** Output only. Battery remaining capacity (mAmpere-hours). */
		remainingCapacity: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when the sample was collected on device */
		reportTime: FormControl<string | null | undefined>,

		/** Output only. Battery status read from sysfs. Example: Discharging */
		status: FormControl<string | null | undefined>,

		/** Output only. Temperature in Celsius degrees. */
		temperature: FormControl<number | null | undefined>,

		/** Output only. Battery voltage (millivolt). */
		voltage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1BatterySampleReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1BatterySampleReportFormProperties>({
			chargeRate: new FormControl<number | null | undefined>(undefined),
			current: new FormControl<string | null | undefined>(undefined),
			dischargeRate: new FormControl<number | null | undefined>(undefined),
			remainingCapacity: new FormControl<string | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
			voltage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BATTERY_REPORT */
	export interface GoogleChromeManagementV1BatteryStatusReport {

		/** Output only. Battery health. */
		batteryHealth?: GoogleChromeManagementV1BatteryStatusReportBatteryHealth | null;

		/** Output only. Cycle count. */
		cycleCount?: number | null;

		/** Output only. Full charge capacity (mAmpere-hours). */
		fullChargeCapacity?: string | null;

		/** Output only. Timestamp of when the sample was collected on device */
		reportTime?: string | null;

		/** Output only. Sampling data for the battery sorted in a decreasing order of report_time. */
		sample?: Array<GoogleChromeManagementV1BatterySampleReport>;

		/** Output only. Battery serial number. */
		serialNumber?: string | null;
	}

	/** Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BATTERY_REPORT */
	export interface GoogleChromeManagementV1BatteryStatusReportFormProperties {

		/** Output only. Battery health. */
		batteryHealth: FormControl<GoogleChromeManagementV1BatteryStatusReportBatteryHealth | null | undefined>,

		/** Output only. Cycle count. */
		cycleCount: FormControl<number | null | undefined>,

		/** Output only. Full charge capacity (mAmpere-hours). */
		fullChargeCapacity: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when the sample was collected on device */
		reportTime: FormControl<string | null | undefined>,

		/** Output only. Battery serial number. */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1BatteryStatusReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1BatteryStatusReportFormProperties>({
			batteryHealth: new FormControl<GoogleChromeManagementV1BatteryStatusReportBatteryHealth | null | undefined>(undefined),
			cycleCount: new FormControl<number | null | undefined>(undefined),
			fullChargeCapacity: new FormControl<string | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1BatteryStatusReportBatteryHealth { BATTERY_HEALTH_UNSPECIFIED = 'BATTERY_HEALTH_UNSPECIFIED', BATTERY_HEALTH_NORMAL = 'BATTERY_HEALTH_NORMAL', BATTERY_REPLACE_SOON = 'BATTERY_REPLACE_SOON', BATTERY_REPLACE_NOW = 'BATTERY_REPLACE_NOW' }


	/** Boot performance report of a device. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceBootMode](https://chromeenterprise.google/policies/#ReportDeviceBootMode) * Data Collection Frequency: On every boot up event * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_OS_REPORT */
	export interface GoogleChromeManagementV1BootPerformanceReport {

		/** Total time to boot up. */
		bootUpDuration?: string | null;

		/** The timestamp when power came on. */
		bootUpTime?: string | null;

		/** Timestamp when the report was collected. */
		reportTime?: string | null;

		/** Total time since shutdown start to power off. */
		shutdownDuration?: string | null;

		/** The shutdown reason. */
		shutdownReason?: GoogleChromeManagementV1BootPerformanceReportShutdownReason | null;

		/** The timestamp when shutdown. */
		shutdownTime?: string | null;
	}

	/** Boot performance report of a device. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceBootMode](https://chromeenterprise.google/policies/#ReportDeviceBootMode) * Data Collection Frequency: On every boot up event * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_OS_REPORT */
	export interface GoogleChromeManagementV1BootPerformanceReportFormProperties {

		/** Total time to boot up. */
		bootUpDuration: FormControl<string | null | undefined>,

		/** The timestamp when power came on. */
		bootUpTime: FormControl<string | null | undefined>,

		/** Timestamp when the report was collected. */
		reportTime: FormControl<string | null | undefined>,

		/** Total time since shutdown start to power off. */
		shutdownDuration: FormControl<string | null | undefined>,

		/** The shutdown reason. */
		shutdownReason: FormControl<GoogleChromeManagementV1BootPerformanceReportShutdownReason | null | undefined>,

		/** The timestamp when shutdown. */
		shutdownTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1BootPerformanceReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1BootPerformanceReportFormProperties>({
			bootUpDuration: new FormControl<string | null | undefined>(undefined),
			bootUpTime: new FormControl<string | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
			shutdownDuration: new FormControl<string | null | undefined>(undefined),
			shutdownReason: new FormControl<GoogleChromeManagementV1BootPerformanceReportShutdownReason | null | undefined>(undefined),
			shutdownTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1BootPerformanceReportShutdownReason { SHUTDOWN_REASON_UNSPECIFIED = 'SHUTDOWN_REASON_UNSPECIFIED', USER_REQUEST = 'USER_REQUEST', SYSTEM_UPDATE = 'SYSTEM_UPDATE', LOW_BATTERY = 'LOW_BATTERY', OTHER = 'OTHER' }


	/** Describes a browser version and its install count. */
	export interface GoogleChromeManagementV1BrowserVersion {

		/** Output only. The release channel of the installed browser. */
		channel?: GoogleChromeManagementV1BrowserVersionChannel | null;

		/** Output only. Count grouped by device_system and major version */
		count?: string | null;

		/** Output only. Version of the system-specified operating system. */
		deviceOsVersion?: string | null;

		/** Output only. The device operating system. */
		system?: GoogleChromeManagementV1BrowserVersionSystem | null;

		/** Output only. The full version of the installed browser. */
		version?: string | null;
	}

	/** Describes a browser version and its install count. */
	export interface GoogleChromeManagementV1BrowserVersionFormProperties {

		/** Output only. The release channel of the installed browser. */
		channel: FormControl<GoogleChromeManagementV1BrowserVersionChannel | null | undefined>,

		/** Output only. Count grouped by device_system and major version */
		count: FormControl<string | null | undefined>,

		/** Output only. Version of the system-specified operating system. */
		deviceOsVersion: FormControl<string | null | undefined>,

		/** Output only. The device operating system. */
		system: FormControl<GoogleChromeManagementV1BrowserVersionSystem | null | undefined>,

		/** Output only. The full version of the installed browser. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1BrowserVersionFormGroup() {
		return new FormGroup<GoogleChromeManagementV1BrowserVersionFormProperties>({
			channel: new FormControl<GoogleChromeManagementV1BrowserVersionChannel | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
			deviceOsVersion: new FormControl<string | null | undefined>(undefined),
			system: new FormControl<GoogleChromeManagementV1BrowserVersionSystem | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1BrowserVersionChannel { RELEASE_CHANNEL_UNSPECIFIED = 'RELEASE_CHANNEL_UNSPECIFIED', CANARY = 'CANARY', DEV = 'DEV', BETA = 'BETA', STABLE = 'STABLE' }

	export enum GoogleChromeManagementV1BrowserVersionSystem { DEVICE_SYSTEM_UNSPECIFIED = 'DEVICE_SYSTEM_UNSPECIFIED', SYSTEM_OTHER = 'SYSTEM_OTHER', SYSTEM_ANDROID = 'SYSTEM_ANDROID', SYSTEM_IOS = 'SYSTEM_IOS', SYSTEM_CROS = 'SYSTEM_CROS', SYSTEM_WINDOWS = 'SYSTEM_WINDOWS', SYSTEM_MAC = 'SYSTEM_MAC', SYSTEM_LINUX = 'SYSTEM_LINUX' }


	/** Details of an app installation request. */
	export interface GoogleChromeManagementV1ChromeAppRequest {

		/** Output only. Format: app_details=customers/{customer_id}/apps/chrome/{app_id} */
		appDetails?: string | null;

		/** Output only. Unique store identifier for the app. Example: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension. */
		appId?: string | null;

		/** Output only. The uri for the detail page of the item. */
		detailUri?: string | null;

		/** Output only. App's display name. */
		displayName?: string | null;

		/** Output only. A link to an image that can be used as an icon for the product. */
		iconUri?: string | null;

		/** Output only. The timestamp of the most recently made request for this app. */
		latestRequestTime?: string | null;

		/** Output only. Total count of requests for this app. */
		requestCount?: string | null;
	}

	/** Details of an app installation request. */
	export interface GoogleChromeManagementV1ChromeAppRequestFormProperties {

		/** Output only. Format: app_details=customers/{customer_id}/apps/chrome/{app_id} */
		appDetails: FormControl<string | null | undefined>,

		/** Output only. Unique store identifier for the app. Example: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension. */
		appId: FormControl<string | null | undefined>,

		/** Output only. The uri for the detail page of the item. */
		detailUri: FormControl<string | null | undefined>,

		/** Output only. App's display name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. A link to an image that can be used as an icon for the product. */
		iconUri: FormControl<string | null | undefined>,

		/** Output only. The timestamp of the most recently made request for this app. */
		latestRequestTime: FormControl<string | null | undefined>,

		/** Output only. Total count of requests for this app. */
		requestCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1ChromeAppRequestFormGroup() {
		return new FormGroup<GoogleChromeManagementV1ChromeAppRequestFormProperties>({
			appDetails: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			detailUri: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			iconUri: new FormControl<string | null | undefined>(undefined),
			latestRequestTime: new FormControl<string | null | undefined>(undefined),
			requestCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing summary of requested app installations. */
	export interface GoogleChromeManagementV1CountChromeAppRequestsResponse {

		/** Token to specify the next page in the list. */
		nextPageToken?: string | null;

		/** Count of requested apps matching request. */
		requestedApps?: Array<GoogleChromeManagementV1ChromeAppRequest>;

		/** Total number of matching app requests. */
		totalSize?: number | null;
	}

	/** Response containing summary of requested app installations. */
	export interface GoogleChromeManagementV1CountChromeAppRequestsResponseFormProperties {

		/** Token to specify the next page in the list. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total number of matching app requests. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1CountChromeAppRequestsResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CountChromeAppRequestsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response containing counts for browsers that need attention. */
	export interface GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse {

		/** Number of browsers that haven’t had any recent activity */
		noRecentActivityCount?: string | null;

		/** Number of browsers that are pending an OS update */
		pendingBrowserUpdateCount?: string | null;

		/** Number of browsers that have been recently enrolled */
		recentlyEnrolledCount?: string | null;
	}

	/** Response containing counts for browsers that need attention. */
	export interface GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponseFormProperties {

		/** Number of browsers that haven’t had any recent activity */
		noRecentActivityCount: FormControl<string | null | undefined>,

		/** Number of browsers that are pending an OS update */
		pendingBrowserUpdateCount: FormControl<string | null | undefined>,

		/** Number of browsers that have been recently enrolled */
		recentlyEnrolledCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponseFormProperties>({
			noRecentActivityCount: new FormControl<string | null | undefined>(undefined),
			pendingBrowserUpdateCount: new FormControl<string | null | undefined>(undefined),
			recentlyEnrolledCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date. */
	export interface GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse {

		/** The list of reports sorted by auto update expiration date in ascending order. */
		deviceAueCountReports?: Array<GoogleChromeManagementV1DeviceAueCountReport>;
	}

	/** Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date. */
	export interface GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponseFormProperties {
	}
	export function CreateGoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponseFormProperties>({
		});

	}


	/** Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range. */
	export interface GoogleChromeManagementV1DeviceAueCountReport {

		/** Enum value of month corresponding to the auto update expiration date in UTC time zone. If the device is already expired, this field is empty. */
		aueMonth?: GoogleChromeManagementV1DeviceAueCountReportAueMonth | null;

		/** Int value of year corresponding to the Auto Update Expiration date in UTC time zone. If the device is already expired, this field is empty. */
		aueYear?: string | null;

		/** Count of devices of this model. */
		count?: string | null;

		/** Boolean value for whether or not the device has already expired. */
		expired?: boolean | null;

		/** Public model name of the devices. */
		model?: string | null;
	}

	/** Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range. */
	export interface GoogleChromeManagementV1DeviceAueCountReportFormProperties {

		/** Enum value of month corresponding to the auto update expiration date in UTC time zone. If the device is already expired, this field is empty. */
		aueMonth: FormControl<GoogleChromeManagementV1DeviceAueCountReportAueMonth | null | undefined>,

		/** Int value of year corresponding to the Auto Update Expiration date in UTC time zone. If the device is already expired, this field is empty. */
		aueYear: FormControl<string | null | undefined>,

		/** Count of devices of this model. */
		count: FormControl<string | null | undefined>,

		/** Boolean value for whether or not the device has already expired. */
		expired: FormControl<boolean | null | undefined>,

		/** Public model name of the devices. */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1DeviceAueCountReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1DeviceAueCountReportFormProperties>({
			aueMonth: new FormControl<GoogleChromeManagementV1DeviceAueCountReportAueMonth | null | undefined>(undefined),
			aueYear: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
			expired: new FormControl<boolean | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1DeviceAueCountReportAueMonth { MONTH_UNSPECIFIED = 'MONTH_UNSPECIFIED', JANUARY = 'JANUARY', FEBRUARY = 'FEBRUARY', MARCH = 'MARCH', APRIL = 'APRIL', MAY = 'MAY', JUNE = 'JUNE', JULY = 'JULY', AUGUST = 'AUGUST', SEPTEMBER = 'SEPTEMBER', OCTOBER = 'OCTOBER', NOVEMBER = 'NOVEMBER', DECEMBER = 'DECEMBER' }


	/** Response containing counts for devices that need attention. */
	export interface GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse {

		/** Number of ChromeOS devices have not synced policies in the past 28 days. */
		noRecentPolicySyncCount?: string | null;

		/** Number of ChromeOS devices that have not seen any user activity in the past 28 days. */
		noRecentUserActivityCount?: string | null;

		/** Number of devices whose OS version is not compliant. */
		osVersionNotCompliantCount?: string | null;

		/** Number of devices that are pending an OS update. */
		pendingUpdate?: string | null;

		/** Number of devices that are unable to apply a policy due to an OS version mismatch. */
		unsupportedPolicyCount?: string | null;
	}

	/** Response containing counts for devices that need attention. */
	export interface GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponseFormProperties {

		/** Number of ChromeOS devices have not synced policies in the past 28 days. */
		noRecentPolicySyncCount: FormControl<string | null | undefined>,

		/** Number of ChromeOS devices that have not seen any user activity in the past 28 days. */
		noRecentUserActivityCount: FormControl<string | null | undefined>,

		/** Number of devices whose OS version is not compliant. */
		osVersionNotCompliantCount: FormControl<string | null | undefined>,

		/** Number of devices that are pending an OS update. */
		pendingUpdate: FormControl<string | null | undefined>,

		/** Number of devices that are unable to apply a policy due to an OS version mismatch. */
		unsupportedPolicyCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponseFormProperties>({
			noRecentPolicySyncCount: new FormControl<string | null | undefined>(undefined),
			noRecentUserActivityCount: new FormControl<string | null | undefined>(undefined),
			osVersionNotCompliantCount: new FormControl<string | null | undefined>(undefined),
			pendingUpdate: new FormControl<string | null | undefined>(undefined),
			unsupportedPolicyCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing a list of devices with a specific type of hardware specification from the requested hardware type. */
	export interface GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse {

		/** The DeviceHardwareCountReport for device cpu type (for example Intel(R) Core(TM) i7-10610U CPU @ 1.80GHz). */
		cpuReports?: Array<GoogleChromeManagementV1DeviceHardwareCountReport>;

		/** The DeviceHardwareCountReport for device memory amount in gigabytes (for example 16). */
		memoryReports?: Array<GoogleChromeManagementV1DeviceHardwareCountReport>;

		/** The DeviceHardwareCountReport for device model type (for example Acer C7 Chromebook). */
		modelReports?: Array<GoogleChromeManagementV1DeviceHardwareCountReport>;

		/** The DeviceHardwareCountReport for device storage amount in gigabytes (for example 128). */
		storageReports?: Array<GoogleChromeManagementV1DeviceHardwareCountReport>;
	}

	/** Response containing a list of devices with a specific type of hardware specification from the requested hardware type. */
	export interface GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponseFormProperties {
	}
	export function CreateGoogleChromeManagementV1CountChromeHardwareFleetDevicesResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponseFormProperties>({
		});

	}


	/** Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification. */
	export interface GoogleChromeManagementV1DeviceHardwareCountReport {

		/** Public name of the hardware specification. */
		bucket?: string | null;

		/** Count of devices with a unique hardware specification. */
		count?: string | null;
	}

	/** Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification. */
	export interface GoogleChromeManagementV1DeviceHardwareCountReportFormProperties {

		/** Public name of the hardware specification. */
		bucket: FormControl<string | null | undefined>,

		/** Count of devices with a unique hardware specification. */
		count: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1DeviceHardwareCountReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1DeviceHardwareCountReportFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing requested browser versions details and counts. */
	export interface GoogleChromeManagementV1CountChromeVersionsResponse {

		/** List of all browser versions and their install counts. */
		browserVersions?: Array<GoogleChromeManagementV1BrowserVersion>;

		/** Token to specify the next page of the request. */
		nextPageToken?: string | null;

		/** Total number browser versions matching request. */
		totalSize?: number | null;
	}

	/** Response containing requested browser versions details and counts. */
	export interface GoogleChromeManagementV1CountChromeVersionsResponseFormProperties {

		/** Token to specify the next page of the request. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total number browser versions matching request. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1CountChromeVersionsResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CountChromeVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response containing details of queried installed apps. */
	export interface GoogleChromeManagementV1CountInstalledAppsResponse {

		/** List of installed apps matching request. */
		installedApps?: Array<GoogleChromeManagementV1InstalledApp>;

		/** Token to specify the next page of the request. */
		nextPageToken?: string | null;

		/** Total number of installed apps matching request. */
		totalSize?: number | null;
	}

	/** Response containing details of queried installed apps. */
	export interface GoogleChromeManagementV1CountInstalledAppsResponseFormProperties {

		/** Token to specify the next page of the request. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total number of installed apps matching request. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1CountInstalledAppsResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CountInstalledAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes an installed app. */
	export interface GoogleChromeManagementV1InstalledApp {

		/** Output only. Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote). */
		appId?: string | null;

		/** Output only. How the app was installed. */
		appInstallType?: GoogleChromeManagementV1InstalledAppAppInstallType | null;

		/** Output only. Source of the installed app. */
		appSource?: GoogleChromeManagementV1InstalledAppAppSource | null;

		/** Output only. Type of the app. */
		appType?: GoogleChromeManagementV1InstalledAppAppType | null;

		/** Output only. Count of browser devices with this app installed. */
		browserDeviceCount?: string | null;

		/** Output only. Description of the installed app. */
		description?: string | null;

		/** Output only. Whether the app is disabled. */
		disabled?: boolean | null;

		/** Output only. Name of the installed app. */
		displayName?: string | null;

		/** Output only. Homepage uri of the installed app. */
		homepageUri?: string | null;

		/** Output only. Count of ChromeOS users with this app installed. */
		osUserCount?: string | null;

		/** Output only. Permissions of the installed app. */
		permissions?: Array<string>;
	}

	/** Describes an installed app. */
	export interface GoogleChromeManagementV1InstalledAppFormProperties {

		/** Output only. Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote). */
		appId: FormControl<string | null | undefined>,

		/** Output only. How the app was installed. */
		appInstallType: FormControl<GoogleChromeManagementV1InstalledAppAppInstallType | null | undefined>,

		/** Output only. Source of the installed app. */
		appSource: FormControl<GoogleChromeManagementV1InstalledAppAppSource | null | undefined>,

		/** Output only. Type of the app. */
		appType: FormControl<GoogleChromeManagementV1InstalledAppAppType | null | undefined>,

		/** Output only. Count of browser devices with this app installed. */
		browserDeviceCount: FormControl<string | null | undefined>,

		/** Output only. Description of the installed app. */
		description: FormControl<string | null | undefined>,

		/** Output only. Whether the app is disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** Output only. Name of the installed app. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Homepage uri of the installed app. */
		homepageUri: FormControl<string | null | undefined>,

		/** Output only. Count of ChromeOS users with this app installed. */
		osUserCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1InstalledAppFormGroup() {
		return new FormGroup<GoogleChromeManagementV1InstalledAppFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			appInstallType: new FormControl<GoogleChromeManagementV1InstalledAppAppInstallType | null | undefined>(undefined),
			appSource: new FormControl<GoogleChromeManagementV1InstalledAppAppSource | null | undefined>(undefined),
			appType: new FormControl<GoogleChromeManagementV1InstalledAppAppType | null | undefined>(undefined),
			browserDeviceCount: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			homepageUri: new FormControl<string | null | undefined>(undefined),
			osUserCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1InstalledAppAppInstallType { APP_INSTALL_TYPE_UNSPECIFIED = 'APP_INSTALL_TYPE_UNSPECIFIED', MULTIPLE = 'MULTIPLE', NORMAL = 'NORMAL', ADMIN = 'ADMIN', DEVELOPMENT = 'DEVELOPMENT', SIDELOAD = 'SIDELOAD', OTHER = 'OTHER' }

	export enum GoogleChromeManagementV1InstalledAppAppSource { APP_SOURCE_UNSPECIFIED = 'APP_SOURCE_UNSPECIFIED', CHROME_WEBSTORE = 'CHROME_WEBSTORE', PLAY_STORE = 'PLAY_STORE' }

	export enum GoogleChromeManagementV1InstalledAppAppType { APP_TYPE_UNSPECIFIED = 'APP_TYPE_UNSPECIFIED', EXTENSION = 'EXTENSION', APP = 'APP', THEME = 'THEME', HOSTED_APP = 'HOSTED_APP', ANDROID_APP = 'ANDROID_APP' }


	/** Response containing a summary printing report for each printer from the specified organizational unit for the requested time interval. */
	export interface GoogleChromeManagementV1CountPrintJobsByPrinterResponse {

		/** Pagination token for requesting the next page. */
		nextPageToken?: string | null;

		/** List of PrinterReports matching request. */
		printerReports?: Array<GoogleChromeManagementV1PrinterReport>;

		/** Total number of printers matching request. */
		totalSize?: string | null;
	}

	/** Response containing a summary printing report for each printer from the specified organizational unit for the requested time interval. */
	export interface GoogleChromeManagementV1CountPrintJobsByPrinterResponseFormProperties {

		/** Pagination token for requesting the next page. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total number of printers matching request. */
		totalSize: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1CountPrintJobsByPrinterResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CountPrintJobsByPrinterResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Report for CountPrintJobsByPrinter, contains statistics on printer usage. Contains the total number of print jobs initiated with this printer, the number of users and the number of devices that have initiated at least one print job with this printer. */
	export interface GoogleChromeManagementV1PrinterReport {

		/** Number of chrome devices that have been used to send print jobs to the specified printer. */
		deviceCount?: string | null;

		/** Number of print jobs sent to the printer. */
		jobCount?: string | null;

		/** Printer name. */
		printer?: string | null;

		/** Printer API ID. */
		printerId?: string | null;

		/** Printer model. */
		printerModel?: string | null;

		/** Number of users that have sent print jobs to the printer. */
		userCount?: string | null;
	}

	/** Report for CountPrintJobsByPrinter, contains statistics on printer usage. Contains the total number of print jobs initiated with this printer, the number of users and the number of devices that have initiated at least one print job with this printer. */
	export interface GoogleChromeManagementV1PrinterReportFormProperties {

		/** Number of chrome devices that have been used to send print jobs to the specified printer. */
		deviceCount: FormControl<string | null | undefined>,

		/** Number of print jobs sent to the printer. */
		jobCount: FormControl<string | null | undefined>,

		/** Printer name. */
		printer: FormControl<string | null | undefined>,

		/** Printer API ID. */
		printerId: FormControl<string | null | undefined>,

		/** Printer model. */
		printerModel: FormControl<string | null | undefined>,

		/** Number of users that have sent print jobs to the printer. */
		userCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1PrinterReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1PrinterReportFormProperties>({
			deviceCount: new FormControl<string | null | undefined>(undefined),
			jobCount: new FormControl<string | null | undefined>(undefined),
			printer: new FormControl<string | null | undefined>(undefined),
			printerId: new FormControl<string | null | undefined>(undefined),
			printerModel: new FormControl<string | null | undefined>(undefined),
			userCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing a summary printing report for each user that has initiated a print job with a printer from the specified organizational unit during the requested time interval. */
	export interface GoogleChromeManagementV1CountPrintJobsByUserResponse {

		/** Pagination token for requesting the next page. */
		nextPageToken?: string | null;

		/** Total number of users matching request. */
		totalSize?: string | null;

		/** List of UserPrintReports matching request. */
		userPrintReports?: Array<GoogleChromeManagementV1UserPrintReport>;
	}

	/** Response containing a summary printing report for each user that has initiated a print job with a printer from the specified organizational unit during the requested time interval. */
	export interface GoogleChromeManagementV1CountPrintJobsByUserResponseFormProperties {

		/** Pagination token for requesting the next page. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total number of users matching request. */
		totalSize: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1CountPrintJobsByUserResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CountPrintJobsByUserResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Report for CountPrintJobsByUser, contains printing statistics for a user. Contains the number of printers, the number of devices used to initiate print jobs, and the number of print jobs initiated. */
	export interface GoogleChromeManagementV1UserPrintReport {

		/** Number of chrome devices that have been used to initiate print jobs by the user. */
		deviceCount?: string | null;

		/** Number of print jobs initiated by the user. */
		jobCount?: string | null;

		/** Number of printers used by the user. */
		printerCount?: string | null;

		/** The primary e-mail address of the user. */
		userEmail?: string | null;

		/** The unique Directory API ID of the user. */
		userId?: string | null;
	}

	/** Report for CountPrintJobsByUser, contains printing statistics for a user. Contains the number of printers, the number of devices used to initiate print jobs, and the number of print jobs initiated. */
	export interface GoogleChromeManagementV1UserPrintReportFormProperties {

		/** Number of chrome devices that have been used to initiate print jobs by the user. */
		deviceCount: FormControl<string | null | undefined>,

		/** Number of print jobs initiated by the user. */
		jobCount: FormControl<string | null | undefined>,

		/** Number of printers used by the user. */
		printerCount: FormControl<string | null | undefined>,

		/** The primary e-mail address of the user. */
		userEmail: FormControl<string | null | undefined>,

		/** The unique Directory API ID of the user. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1UserPrintReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1UserPrintReportFormProperties>({
			deviceCount: new FormControl<string | null | undefined>(undefined),
			jobCount: new FormControl<string | null | undefined>(undefined),
			printerCount: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_CPU_INFO */
	export interface GoogleChromeManagementV1CpuInfo {

		/** Output only. Architecture type for the CPU. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A */
		architecture?: GoogleChromeManagementV1CpuInfoArchitecture | null;

		/** Output only. Whether keylocker is configured.`TRUE` = Enabled; `FALSE` = disabled. Only reported if keylockerSupported = `TRUE`. */
		keylockerConfigured?: boolean | null;

		/** Output only. Whether keylocker is supported. */
		keylockerSupported?: boolean | null;

		/** Output only. The max CPU clock speed in kHz. */
		maxClockSpeed?: number | null;

		/** Output only. The CPU model name. Example: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz */
		model?: string | null;
	}

	/** CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_CPU_INFO */
	export interface GoogleChromeManagementV1CpuInfoFormProperties {

		/** Output only. Architecture type for the CPU. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A */
		architecture: FormControl<GoogleChromeManagementV1CpuInfoArchitecture | null | undefined>,

		/** Output only. Whether keylocker is configured.`TRUE` = Enabled; `FALSE` = disabled. Only reported if keylockerSupported = `TRUE`. */
		keylockerConfigured: FormControl<boolean | null | undefined>,

		/** Output only. Whether keylocker is supported. */
		keylockerSupported: FormControl<boolean | null | undefined>,

		/** Output only. The max CPU clock speed in kHz. */
		maxClockSpeed: FormControl<number | null | undefined>,

		/** Output only. The CPU model name. Example: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1CpuInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CpuInfoFormProperties>({
			architecture: new FormControl<GoogleChromeManagementV1CpuInfoArchitecture | null | undefined>(undefined),
			keylockerConfigured: new FormControl<boolean | null | undefined>(undefined),
			keylockerSupported: new FormControl<boolean | null | undefined>(undefined),
			maxClockSpeed: new FormControl<number | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1CpuInfoArchitecture { ARCHITECTURE_UNSPECIFIED = 'ARCHITECTURE_UNSPECIFIED', X64 = 'X64' }


	/** Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_CPU_REPORT */
	export interface GoogleChromeManagementV1CpuStatusReport {

		/** Output only. CPU temperature sample info per CPU core in Celsius */
		cpuTemperatureInfo?: Array<GoogleChromeManagementV1CpuTemperatureInfo>;

		/** Output only. Sample of CPU utilization (0-100 percent). */
		cpuUtilizationPct?: number | null;

		/** Output only. The timestamp in milliseconds representing time at which this report was sampled. */
		reportTime?: string | null;

		/** Output only. Frequency the report is sampled. */
		sampleFrequency?: string | null;
	}

	/** Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_CPU_REPORT */
	export interface GoogleChromeManagementV1CpuStatusReportFormProperties {

		/** Output only. Sample of CPU utilization (0-100 percent). */
		cpuUtilizationPct: FormControl<number | null | undefined>,

		/** Output only. The timestamp in milliseconds representing time at which this report was sampled. */
		reportTime: FormControl<string | null | undefined>,

		/** Output only. Frequency the report is sampled. */
		sampleFrequency: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1CpuStatusReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CpuStatusReportFormProperties>({
			cpuUtilizationPct: new FormControl<number | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
			sampleFrequency: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CPU temperature of a device. Sampled per CPU core in Celsius. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A */
	export interface GoogleChromeManagementV1CpuTemperatureInfo {

		/** Output only. CPU label. Example: Core 0 */
		label?: string | null;

		/** Output only. CPU temperature in Celsius. */
		temperatureCelsius?: number | null;
	}

	/** CPU temperature of a device. Sampled per CPU core in Celsius. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A */
	export interface GoogleChromeManagementV1CpuTemperatureInfoFormProperties {

		/** Output only. CPU label. Example: Core 0 */
		label: FormControl<string | null | undefined>,

		/** Output only. CPU temperature in Celsius. */
		temperatureCelsius: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1CpuTemperatureInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1CpuTemperatureInfoFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			temperatureCelsius: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a device reporting Chrome browser information. */
	export interface GoogleChromeManagementV1Device {

		/** Output only. The ID of the device that reported this Chrome browser information. */
		deviceId?: string | null;

		/** Output only. The name of the machine within its local network. */
		machine?: string | null;
	}

	/** Describes a device reporting Chrome browser information. */
	export interface GoogleChromeManagementV1DeviceFormProperties {

		/** Output only. The ID of the device that reported this Chrome browser information. */
		deviceId: FormControl<string | null | undefined>,

		/** Output only. The name of the machine within its local network. */
		machine: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1DeviceFormGroup() {
		return new FormGroup<GoogleChromeManagementV1DeviceFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			machine: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Device activity report. * Granular permission needed: TELEMETRY_API_DEVICE_ACTIVITY_REPORT */
	export interface GoogleChromeManagementV1DeviceActivityReport {

		/** Output only. Device activity state. */
		deviceActivityState?: GoogleChromeManagementV1DeviceActivityReportDeviceActivityState | null;

		/** Output only. Timestamp of when the report was collected. */
		reportTime?: string | null;
	}

	/** Device activity report. * Granular permission needed: TELEMETRY_API_DEVICE_ACTIVITY_REPORT */
	export interface GoogleChromeManagementV1DeviceActivityReportFormProperties {

		/** Output only. Device activity state. */
		deviceActivityState: FormControl<GoogleChromeManagementV1DeviceActivityReportDeviceActivityState | null | undefined>,

		/** Output only. Timestamp of when the report was collected. */
		reportTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1DeviceActivityReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1DeviceActivityReportFormProperties>({
			deviceActivityState: new FormControl<GoogleChromeManagementV1DeviceActivityReportDeviceActivityState | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1DeviceActivityReportDeviceActivityState { DEVICE_ACTIVITY_STATE_UNSPECIFIED = 'DEVICE_ACTIVITY_STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', IDLE = 'IDLE', LOCKED = 'LOCKED' }


	/** Status of the single storage device. */
	export interface GoogleChromeManagementV1DiskInfo {

		/** Output only. Number of bytes read since last boot. */
		bytesReadThisSession?: string | null;

		/** Output only. Number of bytes written since last boot. */
		bytesWrittenThisSession?: string | null;

		/** Output only. Time spent discarding since last boot. Discarding is writing to clear blocks which are no longer in use. Supported on kernels 4.18+. */
		discardTimeThisSession?: string | null;

		/** Output only. Disk health. */
		health?: string | null;

		/** Output only. Counts the time the disk and queue were busy, so unlike the fields above, parallel requests are not counted multiple times. */
		ioTimeThisSession?: string | null;

		/** Output only. Disk manufacturer. */
		manufacturer?: string | null;

		/** Output only. Disk model. */
		model?: string | null;

		/** Output only. Time spent reading from disk since last boot. */
		readTimeThisSession?: string | null;

		/** Output only. Disk serial number. */
		serialNumber?: string | null;

		/** Output only. Disk size. */
		sizeBytes?: string | null;

		/** Output only. Disk type: eMMC / NVMe / ATA / SCSI. */
		type?: string | null;

		/** Output only. Disk volumes. */
		volumeIds?: Array<string>;

		/** Output only. Time spent writing to disk since last boot. */
		writeTimeThisSession?: string | null;
	}

	/** Status of the single storage device. */
	export interface GoogleChromeManagementV1DiskInfoFormProperties {

		/** Output only. Number of bytes read since last boot. */
		bytesReadThisSession: FormControl<string | null | undefined>,

		/** Output only. Number of bytes written since last boot. */
		bytesWrittenThisSession: FormControl<string | null | undefined>,

		/** Output only. Time spent discarding since last boot. Discarding is writing to clear blocks which are no longer in use. Supported on kernels 4.18+. */
		discardTimeThisSession: FormControl<string | null | undefined>,

		/** Output only. Disk health. */
		health: FormControl<string | null | undefined>,

		/** Output only. Counts the time the disk and queue were busy, so unlike the fields above, parallel requests are not counted multiple times. */
		ioTimeThisSession: FormControl<string | null | undefined>,

		/** Output only. Disk manufacturer. */
		manufacturer: FormControl<string | null | undefined>,

		/** Output only. Disk model. */
		model: FormControl<string | null | undefined>,

		/** Output only. Time spent reading from disk since last boot. */
		readTimeThisSession: FormControl<string | null | undefined>,

		/** Output only. Disk serial number. */
		serialNumber: FormControl<string | null | undefined>,

		/** Output only. Disk size. */
		sizeBytes: FormControl<string | null | undefined>,

		/** Output only. Disk type: eMMC / NVMe / ATA / SCSI. */
		type: FormControl<string | null | undefined>,

		/** Output only. Time spent writing to disk since last boot. */
		writeTimeThisSession: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1DiskInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1DiskInfoFormProperties>({
			bytesReadThisSession: new FormControl<string | null | undefined>(undefined),
			bytesWrittenThisSession: new FormControl<string | null | undefined>(undefined),
			discardTimeThisSession: new FormControl<string | null | undefined>(undefined),
			health: new FormControl<string | null | undefined>(undefined),
			ioTimeThisSession: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			readTimeThisSession: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			writeTimeThisSession: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information of a display device. */
	export interface GoogleChromeManagementV1DisplayDevice {

		/** Output only. Display height in millimeters. */
		displayHeightMm?: number | null;

		/** Output only. Display device name. */
		displayName?: string | null;

		/** Output only. Display width in millimeters. */
		displayWidthMm?: number | null;

		/** Output only. Is display internal or not. */
		internal?: boolean | null;

		/** Output only. Year of manufacture. */
		manufactureYear?: number | null;

		/** Output only. Three letter manufacturer ID. */
		manufacturerId?: string | null;

		/** Output only. Manufacturer product code. */
		modelId?: number | null;
	}

	/** Information of a display device. */
	export interface GoogleChromeManagementV1DisplayDeviceFormProperties {

		/** Output only. Display height in millimeters. */
		displayHeightMm: FormControl<number | null | undefined>,

		/** Output only. Display device name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Display width in millimeters. */
		displayWidthMm: FormControl<number | null | undefined>,

		/** Output only. Is display internal or not. */
		internal: FormControl<boolean | null | undefined>,

		/** Output only. Year of manufacture. */
		manufactureYear: FormControl<number | null | undefined>,

		/** Output only. Three letter manufacturer ID. */
		manufacturerId: FormControl<string | null | undefined>,

		/** Output only. Manufacturer product code. */
		modelId: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1DisplayDeviceFormGroup() {
		return new FormGroup<GoogleChromeManagementV1DisplayDeviceFormProperties>({
			displayHeightMm: new FormControl<number | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			displayWidthMm: new FormControl<number | null | undefined>(undefined),
			internal: new FormControl<boolean | null | undefined>(undefined),
			manufactureYear: new FormControl<number | null | undefined>(undefined),
			manufacturerId: new FormControl<string | null | undefined>(undefined),
			modelId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information for a display. */
	export interface GoogleChromeManagementV1DisplayInfo {

		/** Output only. Represents the graphics card device id. */
		deviceId?: string | null;

		/** Output only. Display device name. */
		displayName?: string | null;

		/** Output only. Indicates if display is internal or not. */
		isInternal?: boolean | null;

		/** Output only. Refresh rate in Hz. */
		refreshRate?: number | null;

		/** Output only. Resolution height in pixels. */
		resolutionHeight?: number | null;

		/** Output only. Resolution width in pixels. */
		resolutionWidth?: number | null;
	}

	/** Information for a display. */
	export interface GoogleChromeManagementV1DisplayInfoFormProperties {

		/** Output only. Represents the graphics card device id. */
		deviceId: FormControl<string | null | undefined>,

		/** Output only. Display device name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Indicates if display is internal or not. */
		isInternal: FormControl<boolean | null | undefined>,

		/** Output only. Refresh rate in Hz. */
		refreshRate: FormControl<number | null | undefined>,

		/** Output only. Resolution height in pixels. */
		resolutionHeight: FormControl<number | null | undefined>,

		/** Output only. Resolution width in pixels. */
		resolutionWidth: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1DisplayInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1DisplayInfoFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			refreshRate: new FormControl<number | null | undefined>(undefined),
			resolutionHeight: new FormControl<number | null | undefined>(undefined),
			resolutionWidth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response containing a list of print jobs. */
	export interface GoogleChromeManagementV1EnumeratePrintJobsResponse {

		/** A token, which can be used in a subsequent request to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of requested print jobs. */
		printJobs?: Array<GoogleChromeManagementV1PrintJob>;

		/** Total number of print jobs matching request. */
		totalSize?: string | null;
	}

	/** Response containing a list of print jobs. */
	export interface GoogleChromeManagementV1EnumeratePrintJobsResponseFormProperties {

		/** A token, which can be used in a subsequent request to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total number of print jobs matching request. */
		totalSize: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1EnumeratePrintJobsResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1EnumeratePrintJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to print a document that has been submitted to a printer. */
	export interface GoogleChromeManagementV1PrintJob {

		/** Color mode. */
		colorMode?: GoogleChromeManagementV1PrintJobColorMode | null;

		/** Print job completion timestamp. */
		completeTime?: string | null;

		/** Number of copies. */
		copyCount?: number | null;

		/** Print job creation timestamp. */
		createTime?: string | null;

		/** Number of pages in the document. */
		documentPageCount?: number | null;

		/** Duplex mode. */
		duplexMode?: GoogleChromeManagementV1PrintJobDuplexMode | null;

		/** Unique ID of the print job. */
		id?: string | null;

		/** Name of the printer used for printing. */
		printer?: string | null;

		/** API ID of the printer used for printing. */
		printerId?: string | null;

		/** The final state of the job. */
		state?: GoogleChromeManagementV1PrintJobState | null;

		/** The title of the document. */
		title?: string | null;

		/** The primary e-mail address of the user who submitted the print job. */
		userEmail?: string | null;

		/** The unique Directory API ID of the user who submitted the print job. */
		userId?: string | null;
	}

	/** Represents a request to print a document that has been submitted to a printer. */
	export interface GoogleChromeManagementV1PrintJobFormProperties {

		/** Color mode. */
		colorMode: FormControl<GoogleChromeManagementV1PrintJobColorMode | null | undefined>,

		/** Print job completion timestamp. */
		completeTime: FormControl<string | null | undefined>,

		/** Number of copies. */
		copyCount: FormControl<number | null | undefined>,

		/** Print job creation timestamp. */
		createTime: FormControl<string | null | undefined>,

		/** Number of pages in the document. */
		documentPageCount: FormControl<number | null | undefined>,

		/** Duplex mode. */
		duplexMode: FormControl<GoogleChromeManagementV1PrintJobDuplexMode | null | undefined>,

		/** Unique ID of the print job. */
		id: FormControl<string | null | undefined>,

		/** Name of the printer used for printing. */
		printer: FormControl<string | null | undefined>,

		/** API ID of the printer used for printing. */
		printerId: FormControl<string | null | undefined>,

		/** The final state of the job. */
		state: FormControl<GoogleChromeManagementV1PrintJobState | null | undefined>,

		/** The title of the document. */
		title: FormControl<string | null | undefined>,

		/** The primary e-mail address of the user who submitted the print job. */
		userEmail: FormControl<string | null | undefined>,

		/** The unique Directory API ID of the user who submitted the print job. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1PrintJobFormGroup() {
		return new FormGroup<GoogleChromeManagementV1PrintJobFormProperties>({
			colorMode: new FormControl<GoogleChromeManagementV1PrintJobColorMode | null | undefined>(undefined),
			completeTime: new FormControl<string | null | undefined>(undefined),
			copyCount: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			documentPageCount: new FormControl<number | null | undefined>(undefined),
			duplexMode: new FormControl<GoogleChromeManagementV1PrintJobDuplexMode | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			printer: new FormControl<string | null | undefined>(undefined),
			printerId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleChromeManagementV1PrintJobState | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1PrintJobColorMode { COLOR_MODE_UNSPECIFIED = 'COLOR_MODE_UNSPECIFIED', BLACK_AND_WHITE = 'BLACK_AND_WHITE', COLOR = 'COLOR' }

	export enum GoogleChromeManagementV1PrintJobDuplexMode { DUPLEX_MODE_UNSPECIFIED = 'DUPLEX_MODE_UNSPECIFIED', ONE_SIDED = 'ONE_SIDED', TWO_SIDED_LONG_EDGE = 'TWO_SIDED_LONG_EDGE', TWO_SIDED_SHORT_EDGE = 'TWO_SIDED_SHORT_EDGE' }

	export enum GoogleChromeManagementV1PrintJobState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PRINTED = 'PRINTED', CANCELLED = 'CANCELLED', FAILED = 'FAILED' }


	/** Response containing a list of devices with queried app installed. */
	export interface GoogleChromeManagementV1FindInstalledAppDevicesResponse {

		/** A list of devices which have the app installed. Sorted in ascending alphabetical order on the Device.machine field. */
		devices?: Array<GoogleChromeManagementV1Device>;

		/** Token to specify the next page of the request. */
		nextPageToken?: string | null;

		/** Total number of devices matching request. */
		totalSize?: number | null;
	}

	/** Response containing a list of devices with queried app installed. */
	export interface GoogleChromeManagementV1FindInstalledAppDevicesResponseFormProperties {

		/** Token to specify the next page of the request. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total number of devices matching request. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1FindInstalledAppDevicesResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1FindInstalledAppDevicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information of a graphics adapter (GPU). */
	export interface GoogleChromeManagementV1GraphicsAdapterInfo {

		/** Output only. Adapter name. Example: Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2). */
		adapter?: string | null;

		/** Output only. Represents the graphics card device id. */
		deviceId?: string | null;

		/** Output only. Version of the GPU driver. */
		driverVersion?: string | null;
	}

	/** Information of a graphics adapter (GPU). */
	export interface GoogleChromeManagementV1GraphicsAdapterInfoFormProperties {

		/** Output only. Adapter name. Example: Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2). */
		adapter: FormControl<string | null | undefined>,

		/** Output only. Represents the graphics card device id. */
		deviceId: FormControl<string | null | undefined>,

		/** Output only. Version of the GPU driver. */
		driverVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1GraphicsAdapterInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1GraphicsAdapterInfoFormProperties>({
			adapter: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			driverVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_INFO */
	export interface GoogleChromeManagementV1GraphicsInfo {

		/** Information of a graphics adapter (GPU). */
		adapterInfo?: GoogleChromeManagementV1GraphicsAdapterInfo;

		/** Output only. Information about the display(s) of the device. */
		displayDevices?: Array<GoogleChromeManagementV1DisplayDevice>;

		/** Output only. Is ePrivacy screen supported or not. */
		eprivacySupported?: boolean | null;

		/** Information on the device touch screen. */
		touchScreenInfo?: GoogleChromeManagementV1TouchScreenInfo;
	}

	/** Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_INFO */
	export interface GoogleChromeManagementV1GraphicsInfoFormProperties {

		/** Output only. Is ePrivacy screen supported or not. */
		eprivacySupported: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1GraphicsInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1GraphicsInfoFormProperties>({
			eprivacySupported: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information on the device touch screen. */
	export interface GoogleChromeManagementV1TouchScreenInfo {

		/** Output only. List of the internal touch screen devices. */
		devices?: Array<GoogleChromeManagementV1TouchScreenDevice>;

		/** Output only. Touchpad library name used by the input stack. */
		touchpadLibrary?: string | null;
	}

	/** Information on the device touch screen. */
	export interface GoogleChromeManagementV1TouchScreenInfoFormProperties {

		/** Output only. Touchpad library name used by the input stack. */
		touchpadLibrary: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TouchScreenInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TouchScreenInfoFormProperties>({
			touchpadLibrary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information of an internal touch screen device. */
	export interface GoogleChromeManagementV1TouchScreenDevice {

		/** Output only. Touch screen device display name. */
		displayName?: string | null;

		/** Output only. Touch screen device is stylus capable or not. */
		stylusCapable?: boolean | null;

		/** Output only. Number of touch points supported on the device. */
		touchPointCount?: number | null;
	}

	/** Information of an internal touch screen device. */
	export interface GoogleChromeManagementV1TouchScreenDeviceFormProperties {

		/** Output only. Touch screen device display name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Touch screen device is stylus capable or not. */
		stylusCapable: FormControl<boolean | null | undefined>,

		/** Output only. Number of touch points supported on the device. */
		touchPointCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TouchScreenDeviceFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TouchScreenDeviceFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			stylusCapable: new FormControl<boolean | null | undefined>(undefined),
			touchPointCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: 3 hours. * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_REPORT */
	export interface GoogleChromeManagementV1GraphicsStatusReport {

		/** Output only. Information about the displays for the device. */
		displays?: Array<GoogleChromeManagementV1DisplayInfo>;

		/** Output only. Time at which the graphics data was reported. */
		reportTime?: string | null;
	}

	/** Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: 3 hours. * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_REPORT */
	export interface GoogleChromeManagementV1GraphicsStatusReportFormProperties {

		/** Output only. Time at which the graphics data was reported. */
		reportTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1GraphicsStatusReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1GraphicsStatusReportFormProperties>({
			reportTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Heartbeat status report of a device. * Available for Kiosks * This field provides online/offline/unknown status of a device and will only be included if the status has changed (e.g. Online -> Offline) * Data for this field is controlled via policy: [HeartbeatEnabled](https://chromeenterprise.google/policies/#HeartbeatEnabled) [More Info](https://support.google.com/chrome/a/answer/6179663#:~:text=On%20the%20Chrome,device%20status%20alerts) * Heartbeat Frequency: 2 mins * Note: If a device goes offline, it can take up to 12 minutes for the online status of the device to be updated * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: N/A * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_DEVICE_ACTIVITY_REPORT */
	export interface GoogleChromeManagementV1HeartbeatStatusReport {

		/** Timestamp of when status changed was detected */
		reportTime?: string | null;

		/** State the device changed to */
		state?: GoogleChromeManagementV1HeartbeatStatusReportState | null;
	}

	/** Heartbeat status report of a device. * Available for Kiosks * This field provides online/offline/unknown status of a device and will only be included if the status has changed (e.g. Online -> Offline) * Data for this field is controlled via policy: [HeartbeatEnabled](https://chromeenterprise.google/policies/#HeartbeatEnabled) [More Info](https://support.google.com/chrome/a/answer/6179663#:~:text=On%20the%20Chrome,device%20status%20alerts) * Heartbeat Frequency: 2 mins * Note: If a device goes offline, it can take up to 12 minutes for the online status of the device to be updated * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: N/A * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_DEVICE_ACTIVITY_REPORT */
	export interface GoogleChromeManagementV1HeartbeatStatusReportFormProperties {

		/** Timestamp of when status changed was detected */
		reportTime: FormControl<string | null | undefined>,

		/** State the device changed to */
		state: FormControl<GoogleChromeManagementV1HeartbeatStatusReportState | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1HeartbeatStatusReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1HeartbeatStatusReportFormProperties>({
			reportTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleChromeManagementV1HeartbeatStatusReportState | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1HeartbeatStatusReportState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', UNKNOWN = 'UNKNOWN', ONLINE = 'ONLINE', OFFLINE = 'OFFLINE' }


	/** Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites. */
	export interface GoogleChromeManagementV1HttpsLatencyRoutineData {

		/** Output only. HTTPS latency if routine succeeded or failed because of HIGH_LATENCY or VERY_HIGH_LATENCY. */
		latency?: string | null;

		/** Output only. HTTPS latency routine problem if a problem occurred. */
		problem?: GoogleChromeManagementV1HttpsLatencyRoutineDataProblem | null;
	}

	/** Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites. */
	export interface GoogleChromeManagementV1HttpsLatencyRoutineDataFormProperties {

		/** Output only. HTTPS latency if routine succeeded or failed because of HIGH_LATENCY or VERY_HIGH_LATENCY. */
		latency: FormControl<string | null | undefined>,

		/** Output only. HTTPS latency routine problem if a problem occurred. */
		problem: FormControl<GoogleChromeManagementV1HttpsLatencyRoutineDataProblem | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1HttpsLatencyRoutineDataFormGroup() {
		return new FormGroup<GoogleChromeManagementV1HttpsLatencyRoutineDataFormProperties>({
			latency: new FormControl<string | null | undefined>(undefined),
			problem: new FormControl<GoogleChromeManagementV1HttpsLatencyRoutineDataProblem | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1HttpsLatencyRoutineDataProblem { HTTPS_LATENCY_PROBLEM_UNSPECIFIED = 'HTTPS_LATENCY_PROBLEM_UNSPECIFIED', FAILED_DNS_RESOLUTIONS = 'FAILED_DNS_RESOLUTIONS', FAILED_HTTPS_REQUESTS = 'FAILED_HTTPS_REQUESTS', HIGH_LATENCY = 'HIGH_LATENCY', VERY_HIGH_LATENCY = 'VERY_HIGH_LATENCY' }


	/** Kiosk app status report of a device. * Available for Kiosks * This field provides the app id and version number running on a kiosk device and the timestamp of when the report was last updated * Data for this field is controlled via policy: [ReportDeviceSessionStatus](https://chromeenterprise.google/policies/#ReportDeviceSessionStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_APPS_REPORT */
	export interface GoogleChromeManagementV1KioskAppStatusReport {

		/** App id of kiosk app for example "mdmkkicfmmkgmpkmkdikhlbggogpicma" */
		appId?: string | null;

		/** App version number of kiosk app for example "1.10.118" */
		appVersion?: string | null;

		/** Timestamp of when report was collected */
		reportTime?: string | null;
	}

	/** Kiosk app status report of a device. * Available for Kiosks * This field provides the app id and version number running on a kiosk device and the timestamp of when the report was last updated * Data for this field is controlled via policy: [ReportDeviceSessionStatus](https://chromeenterprise.google/policies/#ReportDeviceSessionStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_APPS_REPORT */
	export interface GoogleChromeManagementV1KioskAppStatusReportFormProperties {

		/** App id of kiosk app for example "mdmkkicfmmkgmpkmkdikhlbggogpicma" */
		appId: FormControl<string | null | undefined>,

		/** App version number of kiosk app for example "1.10.118" */
		appVersion: FormControl<string | null | undefined>,

		/** Timestamp of when report was collected */
		reportTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1KioskAppStatusReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1KioskAppStatusReportFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			appVersion: new FormControl<string | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleChromeManagementV1ListTelemetryDevicesResponse {

		/** Telemetry devices returned in the response. */
		devices?: Array<GoogleChromeManagementV1TelemetryDevice>;

		/** Token to specify next page in the list. */
		nextPageToken?: string | null;
	}
	export interface GoogleChromeManagementV1ListTelemetryDevicesResponseFormProperties {

		/** Token to specify next page in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1ListTelemetryDevicesResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1ListTelemetryDevicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Telemetry data collected from a managed device. * Granular permission needed: TELEMETRY_API_DEVICE */
	export interface GoogleChromeManagementV1TelemetryDevice {

		/** Output only. Audio reports collected periodically sorted in a decreasing order of report_time. */
		audioStatusReport?: Array<GoogleChromeManagementV1AudioStatusReport>;

		/** Output only. Information on battery specs for the device. */
		batteryInfo?: Array<GoogleChromeManagementV1BatteryInfo>;

		/** Output only. Battery reports collected periodically. */
		batteryStatusReport?: Array<GoogleChromeManagementV1BatteryStatusReport>;

		/** Output only. Boot performance reports of the device. */
		bootPerformanceReport?: Array<GoogleChromeManagementV1BootPerformanceReport>;

		/** Output only. Information regarding CPU specs for the device. */
		cpuInfo?: Array<GoogleChromeManagementV1CpuInfo>;

		/** Output only. CPU status reports collected periodically sorted in a decreasing order of report_time. */
		cpuStatusReport?: Array<GoogleChromeManagementV1CpuStatusReport>;

		/** Output only. Google Workspace Customer whose enterprise enrolled the device. */
		customer?: string | null;

		/** Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab */
		deviceId?: string | null;

		/** Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_INFO */
		graphicsInfo?: GoogleChromeManagementV1GraphicsInfo;

		/** Output only. Graphics reports collected periodically. */
		graphicsStatusReport?: Array<GoogleChromeManagementV1GraphicsStatusReport>;

		/** Output only. Heartbeat status report containing timestamps periodically sorted in decreasing order of report_time */
		heartbeatStatusReport?: Array<GoogleChromeManagementV1HeartbeatStatusReport>;

		/** Output only. Kiosk app status report for the kiosk device */
		kioskAppStatusReport?: Array<GoogleChromeManagementV1KioskAppStatusReport>;

		/** Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_INFO */
		memoryInfo?: GoogleChromeManagementV1MemoryInfo;

		/** Output only. Memory status reports collected periodically sorted decreasing by report_time. */
		memoryStatusReport?: Array<GoogleChromeManagementV1MemoryStatusReport>;

		/** Output only. Resource name of the device. */
		name?: string | null;

		/** Output only. Network bandwidth reports collected periodically sorted in a decreasing order of report_time. */
		networkBandwidthReport?: Array<GoogleChromeManagementV1NetworkBandwidthReport>;

		/** Output only. Network diagnostics collected periodically. */
		networkDiagnosticsReport?: Array<GoogleChromeManagementV1NetworkDiagnosticsReport>;

		/** Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_NETWORK_INFO */
		networkInfo?: GoogleChromeManagementV1NetworkInfo;

		/** Output only. Network specs collected periodically. */
		networkStatusReport?: Array<GoogleChromeManagementV1NetworkStatusReport>;

		/** Output only. Organization unit ID of the device. */
		orgUnitId?: string | null;

		/** Output only. Contains relevant information regarding ChromeOS update status. */
		osUpdateStatus?: Array<GoogleChromeManagementV1OsUpdateStatus>;

		/** Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time. */
		peripheralsReport?: Array<GoogleChromeManagementV1PeripheralsReport>;

		/** Output only. Device serial number. This value is the same as the Admin Console's Serial Number in the ChromeOS Devices tab. */
		serialNumber?: string | null;

		/** Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_INFO */
		storageInfo?: GoogleChromeManagementV1StorageInfo;

		/** Output only. Storage reports collected periodically. */
		storageStatusReport?: Array<GoogleChromeManagementV1StorageStatusReport>;

		/** Output only. Information on Thunderbolt bus. */
		thunderboltInfo?: Array<GoogleChromeManagementV1ThunderboltInfo>;
	}

	/** Telemetry data collected from a managed device. * Granular permission needed: TELEMETRY_API_DEVICE */
	export interface GoogleChromeManagementV1TelemetryDeviceFormProperties {

		/** Output only. Google Workspace Customer whose enterprise enrolled the device. */
		customer: FormControl<string | null | undefined>,

		/** Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab */
		deviceId: FormControl<string | null | undefined>,

		/** Output only. Resource name of the device. */
		name: FormControl<string | null | undefined>,

		/** Output only. Organization unit ID of the device. */
		orgUnitId: FormControl<string | null | undefined>,

		/** Output only. Device serial number. This value is the same as the Admin Console's Serial Number in the ChromeOS Devices tab. */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryDeviceFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryDeviceFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_INFO */
	export interface GoogleChromeManagementV1MemoryInfo {

		/** Output only. Amount of available RAM in bytes. */
		availableRamBytes?: string | null;

		/** Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A */
		totalMemoryEncryption?: GoogleChromeManagementV1TotalMemoryEncryptionInfo;

		/** Output only. Total RAM in bytes. */
		totalRamBytes?: string | null;
	}

	/** Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_INFO */
	export interface GoogleChromeManagementV1MemoryInfoFormProperties {

		/** Output only. Amount of available RAM in bytes. */
		availableRamBytes: FormControl<string | null | undefined>,

		/** Output only. Total RAM in bytes. */
		totalRamBytes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1MemoryInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1MemoryInfoFormProperties>({
			availableRamBytes: new FormControl<string | null | undefined>(undefined),
			totalRamBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A */
	export interface GoogleChromeManagementV1TotalMemoryEncryptionInfo {

		/** Memory encryption algorithm. */
		encryptionAlgorithm?: GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithm | null;

		/** The state of memory encryption on the device. */
		encryptionState?: GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionState | null;

		/** The length of the encryption keys. */
		keyLength?: string | null;

		/** The maximum number of keys that can be used for encryption. */
		maxKeys?: string | null;
	}

	/** Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A */
	export interface GoogleChromeManagementV1TotalMemoryEncryptionInfoFormProperties {

		/** Memory encryption algorithm. */
		encryptionAlgorithm: FormControl<GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithm | null | undefined>,

		/** The state of memory encryption on the device. */
		encryptionState: FormControl<GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionState | null | undefined>,

		/** The length of the encryption keys. */
		keyLength: FormControl<string | null | undefined>,

		/** The maximum number of keys that can be used for encryption. */
		maxKeys: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TotalMemoryEncryptionInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TotalMemoryEncryptionInfoFormProperties>({
			encryptionAlgorithm: new FormControl<GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithm | null | undefined>(undefined),
			encryptionState: new FormControl<GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionState | null | undefined>(undefined),
			keyLength: new FormControl<string | null | undefined>(undefined),
			maxKeys: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithm { MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED = 'MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED', MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN = 'MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN', MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128 = 'MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128', MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256 = 'MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256' }

	export enum GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionState { MEMORY_ENCRYPTION_STATE_UNSPECIFIED = 'MEMORY_ENCRYPTION_STATE_UNSPECIFIED', MEMORY_ENCRYPTION_STATE_UNKNOWN = 'MEMORY_ENCRYPTION_STATE_UNKNOWN', MEMORY_ENCRYPTION_STATE_DISABLED = 'MEMORY_ENCRYPTION_STATE_DISABLED', MEMORY_ENCRYPTION_STATE_TME = 'MEMORY_ENCRYPTION_STATE_TME', MEMORY_ENCRYPTION_STATE_MKTME = 'MEMORY_ENCRYPTION_STATE_MKTME' }


	/** Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_REPORT */
	export interface GoogleChromeManagementV1MemoryStatusReport {

		/** Output only. Number of page faults during this collection */
		pageFaults?: number | null;

		/** Output only. The timestamp in milliseconds representing time at which this report was sampled. */
		reportTime?: string | null;

		/** Output only. Frequency the report is sampled. */
		sampleFrequency?: string | null;

		/** Output only. Amount of free RAM in bytes (unreliable due to Garbage Collection). */
		systemRamFreeBytes?: string | null;
	}

	/** Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_REPORT */
	export interface GoogleChromeManagementV1MemoryStatusReportFormProperties {

		/** Output only. Number of page faults during this collection */
		pageFaults: FormControl<number | null | undefined>,

		/** Output only. The timestamp in milliseconds representing time at which this report was sampled. */
		reportTime: FormControl<string | null | undefined>,

		/** Output only. Frequency the report is sampled. */
		sampleFrequency: FormControl<string | null | undefined>,

		/** Output only. Amount of free RAM in bytes (unreliable due to Garbage Collection). */
		systemRamFreeBytes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1MemoryStatusReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1MemoryStatusReportFormProperties>({
			pageFaults: new FormControl<number | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
			sampleFrequency: new FormControl<string | null | undefined>(undefined),
			systemRamFreeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network bandwidth report. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1NetworkBandwidthReport {

		/** Output only. Download speed in kilobits per second. */
		downloadSpeedKbps?: string | null;

		/** Output only. Timestamp of when the report was collected. */
		reportTime?: string | null;
	}

	/** Network bandwidth report. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1NetworkBandwidthReportFormProperties {

		/** Output only. Download speed in kilobits per second. */
		downloadSpeedKbps: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when the report was collected. */
		reportTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1NetworkBandwidthReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1NetworkBandwidthReportFormProperties>({
			downloadSpeedKbps: new FormControl<string | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1NetworkDiagnosticsReport {

		/** Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites. */
		httpsLatencyData?: GoogleChromeManagementV1HttpsLatencyRoutineData;

		/** Output only. Timestamp of when the diagnostics were collected. */
		reportTime?: string | null;
	}

	/** Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1NetworkDiagnosticsReportFormProperties {

		/** Output only. Timestamp of when the diagnostics were collected. */
		reportTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1NetworkDiagnosticsReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1NetworkDiagnosticsReportFormProperties>({
			reportTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_NETWORK_INFO */
	export interface GoogleChromeManagementV1NetworkInfo {

		/** Output only. List of network devices. */
		networkDevices?: Array<GoogleChromeManagementV1NetworkDevice>;
	}

	/** Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_NETWORK_INFO */
	export interface GoogleChromeManagementV1NetworkInfoFormProperties {
	}
	export function CreateGoogleChromeManagementV1NetworkInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1NetworkInfoFormProperties>({
		});

	}


	/** Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A */
	export interface GoogleChromeManagementV1NetworkDevice {

		/** Output only. The integrated circuit card ID associated with the device's sim card. */
		iccid?: string | null;

		/** Output only. IMEI (if applicable) of the corresponding network device. */
		imei?: string | null;

		/** Output only. MAC address (if applicable) of the corresponding network device. */
		macAddress?: string | null;

		/** Output only. The mobile directory number associated with the device's sim card. */
		mdn?: string | null;

		/** Output only. MEID (if applicable) of the corresponding network device. */
		meid?: string | null;

		/** Output only. Network device type. */
		type?: GoogleChromeManagementV1NetworkDeviceType | null;
	}

	/** Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A */
	export interface GoogleChromeManagementV1NetworkDeviceFormProperties {

		/** Output only. The integrated circuit card ID associated with the device's sim card. */
		iccid: FormControl<string | null | undefined>,

		/** Output only. IMEI (if applicable) of the corresponding network device. */
		imei: FormControl<string | null | undefined>,

		/** Output only. MAC address (if applicable) of the corresponding network device. */
		macAddress: FormControl<string | null | undefined>,

		/** Output only. The mobile directory number associated with the device's sim card. */
		mdn: FormControl<string | null | undefined>,

		/** Output only. MEID (if applicable) of the corresponding network device. */
		meid: FormControl<string | null | undefined>,

		/** Output only. Network device type. */
		type: FormControl<GoogleChromeManagementV1NetworkDeviceType | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1NetworkDeviceFormGroup() {
		return new FormGroup<GoogleChromeManagementV1NetworkDeviceFormProperties>({
			iccid: new FormControl<string | null | undefined>(undefined),
			imei: new FormControl<string | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
			mdn: new FormControl<string | null | undefined>(undefined),
			meid: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleChromeManagementV1NetworkDeviceType | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1NetworkDeviceType { NETWORK_DEVICE_TYPE_UNSPECIFIED = 'NETWORK_DEVICE_TYPE_UNSPECIFIED', CELLULAR_DEVICE = 'CELLULAR_DEVICE', ETHERNET_DEVICE = 'ETHERNET_DEVICE', WIFI_DEVICE = 'WIFI_DEVICE' }


	/** State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1NetworkStatusReport {

		/** Output only. Current connection state of the network. */
		connectionState?: GoogleChromeManagementV1NetworkStatusReportConnectionState | null;

		/** Output only. Network connection type. */
		connectionType?: GoogleChromeManagementV1NetworkStatusReportConnectionType | null;

		/** Output only. Whether the wifi encryption key is turned off. */
		encryptionOn?: boolean | null;

		/** Output only. Gateway IP address. */
		gatewayIpAddress?: string | null;

		/** Output only. Network connection guid. */
		guid?: string | null;

		/** Output only. LAN IP address. */
		lanIpAddress?: string | null;

		/** Output only. Receiving bit rate measured in Megabits per second. */
		receivingBitRateMbps?: string | null;

		/** Output only. Time at which the network state was reported. */
		reportTime?: string | null;

		/** Output only. Frequency the report is sampled. */
		sampleFrequency?: string | null;

		/** Output only. Signal strength for wireless networks measured in decibels. */
		signalStrengthDbm?: number | null;

		/** Output only. Transmission bit rate measured in Megabits per second. */
		transmissionBitRateMbps?: string | null;

		/** Output only. Transmission power measured in decibels. */
		transmissionPowerDbm?: number | null;

		/** Output only. Wifi link quality. Value ranges from [0, 70]. 0 indicates no signal and 70 indicates a strong signal. */
		wifiLinkQuality?: string | null;

		/** Output only. Wifi power management enabled */
		wifiPowerManagementEnabled?: boolean | null;
	}

	/** State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1NetworkStatusReportFormProperties {

		/** Output only. Current connection state of the network. */
		connectionState: FormControl<GoogleChromeManagementV1NetworkStatusReportConnectionState | null | undefined>,

		/** Output only. Network connection type. */
		connectionType: FormControl<GoogleChromeManagementV1NetworkStatusReportConnectionType | null | undefined>,

		/** Output only. Whether the wifi encryption key is turned off. */
		encryptionOn: FormControl<boolean | null | undefined>,

		/** Output only. Gateway IP address. */
		gatewayIpAddress: FormControl<string | null | undefined>,

		/** Output only. Network connection guid. */
		guid: FormControl<string | null | undefined>,

		/** Output only. LAN IP address. */
		lanIpAddress: FormControl<string | null | undefined>,

		/** Output only. Receiving bit rate measured in Megabits per second. */
		receivingBitRateMbps: FormControl<string | null | undefined>,

		/** Output only. Time at which the network state was reported. */
		reportTime: FormControl<string | null | undefined>,

		/** Output only. Frequency the report is sampled. */
		sampleFrequency: FormControl<string | null | undefined>,

		/** Output only. Signal strength for wireless networks measured in decibels. */
		signalStrengthDbm: FormControl<number | null | undefined>,

		/** Output only. Transmission bit rate measured in Megabits per second. */
		transmissionBitRateMbps: FormControl<string | null | undefined>,

		/** Output only. Transmission power measured in decibels. */
		transmissionPowerDbm: FormControl<number | null | undefined>,

		/** Output only. Wifi link quality. Value ranges from [0, 70]. 0 indicates no signal and 70 indicates a strong signal. */
		wifiLinkQuality: FormControl<string | null | undefined>,

		/** Output only. Wifi power management enabled */
		wifiPowerManagementEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1NetworkStatusReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1NetworkStatusReportFormProperties>({
			connectionState: new FormControl<GoogleChromeManagementV1NetworkStatusReportConnectionState | null | undefined>(undefined),
			connectionType: new FormControl<GoogleChromeManagementV1NetworkStatusReportConnectionType | null | undefined>(undefined),
			encryptionOn: new FormControl<boolean | null | undefined>(undefined),
			gatewayIpAddress: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lanIpAddress: new FormControl<string | null | undefined>(undefined),
			receivingBitRateMbps: new FormControl<string | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
			sampleFrequency: new FormControl<string | null | undefined>(undefined),
			signalStrengthDbm: new FormControl<number | null | undefined>(undefined),
			transmissionBitRateMbps: new FormControl<string | null | undefined>(undefined),
			transmissionPowerDbm: new FormControl<number | null | undefined>(undefined),
			wifiLinkQuality: new FormControl<string | null | undefined>(undefined),
			wifiPowerManagementEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1NetworkStatusReportConnectionState { NETWORK_CONNECTION_STATE_UNSPECIFIED = 'NETWORK_CONNECTION_STATE_UNSPECIFIED', ONLINE = 'ONLINE', CONNECTED = 'CONNECTED', PORTAL = 'PORTAL', CONNECTING = 'CONNECTING', NOT_CONNECTED = 'NOT_CONNECTED' }

	export enum GoogleChromeManagementV1NetworkStatusReportConnectionType { NETWORK_TYPE_UNSPECIFIED = 'NETWORK_TYPE_UNSPECIFIED', CELLULAR = 'CELLULAR', ETHERNET = 'ETHERNET', TETHER = 'TETHER', VPN = 'VPN', WIFI = 'WIFI' }


	/** Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_OS_REPORT */
	export interface GoogleChromeManagementV1OsUpdateStatus {

		/** Output only. Timestamp of the last reboot. */
		lastRebootTime?: string | null;

		/** Output only. Timestamp of the last update check. */
		lastUpdateCheckTime?: string | null;

		/** Output only. Timestamp of the last successful update. */
		lastUpdateTime?: string | null;

		/** Output only. New platform version of the os image being downloaded and applied. It is only set when update status is OS_IMAGE_DOWNLOAD_IN_PROGRESS or OS_UPDATE_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for OS_UPDATE_NEED_REBOOT status for some edge cases, e.g. update engine is restarted without a reboot. */
		newPlatformVersion?: string | null;

		/** Output only. New requested platform version from the pending updated kiosk app. */
		newRequestedPlatformVersion?: string | null;

		/** Output only. Current state of the os update. */
		updateState?: GoogleChromeManagementV1OsUpdateStatusUpdateState | null;
	}

	/** Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_OS_REPORT */
	export interface GoogleChromeManagementV1OsUpdateStatusFormProperties {

		/** Output only. Timestamp of the last reboot. */
		lastRebootTime: FormControl<string | null | undefined>,

		/** Output only. Timestamp of the last update check. */
		lastUpdateCheckTime: FormControl<string | null | undefined>,

		/** Output only. Timestamp of the last successful update. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** Output only. New platform version of the os image being downloaded and applied. It is only set when update status is OS_IMAGE_DOWNLOAD_IN_PROGRESS or OS_UPDATE_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for OS_UPDATE_NEED_REBOOT status for some edge cases, e.g. update engine is restarted without a reboot. */
		newPlatformVersion: FormControl<string | null | undefined>,

		/** Output only. New requested platform version from the pending updated kiosk app. */
		newRequestedPlatformVersion: FormControl<string | null | undefined>,

		/** Output only. Current state of the os update. */
		updateState: FormControl<GoogleChromeManagementV1OsUpdateStatusUpdateState | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1OsUpdateStatusFormGroup() {
		return new FormGroup<GoogleChromeManagementV1OsUpdateStatusFormProperties>({
			lastRebootTime: new FormControl<string | null | undefined>(undefined),
			lastUpdateCheckTime: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			newPlatformVersion: new FormControl<string | null | undefined>(undefined),
			newRequestedPlatformVersion: new FormControl<string | null | undefined>(undefined),
			updateState: new FormControl<GoogleChromeManagementV1OsUpdateStatusUpdateState | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1OsUpdateStatusUpdateState { UPDATE_STATE_UNSPECIFIED = 'UPDATE_STATE_UNSPECIFIED', OS_IMAGE_DOWNLOAD_NOT_STARTED = 'OS_IMAGE_DOWNLOAD_NOT_STARTED', OS_IMAGE_DOWNLOAD_IN_PROGRESS = 'OS_IMAGE_DOWNLOAD_IN_PROGRESS', OS_UPDATE_NEED_REBOOT = 'OS_UPDATE_NEED_REBOOT' }


	/** Peripherals report. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT */
	export interface GoogleChromeManagementV1PeripheralsReport {

		/** Output only. Timestamp of when the report was collected. */
		reportTime?: string | null;

		/** Reports of all usb connected devices. */
		usbPeripheralReport?: Array<GoogleChromeManagementV1UsbPeripheralReport>;
	}

	/** Peripherals report. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT */
	export interface GoogleChromeManagementV1PeripheralsReportFormProperties {

		/** Output only. Timestamp of when the report was collected. */
		reportTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1PeripheralsReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1PeripheralsReportFormProperties>({
			reportTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** USB connected peripheral report. */
	export interface GoogleChromeManagementV1UsbPeripheralReport {

		/** Output only. Categories the device belongs to https://www.usb.org/defined-class-codes */
		categories?: Array<string>;

		/** Output only. Class ID https://www.usb.org/defined-class-codes */
		classId?: number | null;

		/** Output only. Firmware version */
		firmwareVersion?: string | null;

		/** Output only. Device name, model name, or product name */
		name?: string | null;

		/** Output only. Product ID */
		pid?: number | null;

		/** Output only. Subclass ID https://www.usb.org/defined-class-codes */
		subclassId?: number | null;

		/** Output only. Vendor name */
		vendor?: string | null;

		/** Output only. Vendor ID */
		vid?: number | null;
	}

	/** USB connected peripheral report. */
	export interface GoogleChromeManagementV1UsbPeripheralReportFormProperties {

		/** Output only. Class ID https://www.usb.org/defined-class-codes */
		classId: FormControl<number | null | undefined>,

		/** Output only. Firmware version */
		firmwareVersion: FormControl<string | null | undefined>,

		/** Output only. Device name, model name, or product name */
		name: FormControl<string | null | undefined>,

		/** Output only. Product ID */
		pid: FormControl<number | null | undefined>,

		/** Output only. Subclass ID https://www.usb.org/defined-class-codes */
		subclassId: FormControl<number | null | undefined>,

		/** Output only. Vendor name */
		vendor: FormControl<string | null | undefined>,

		/** Output only. Vendor ID */
		vid: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1UsbPeripheralReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1UsbPeripheralReportFormProperties>({
			classId: new FormControl<number | null | undefined>(undefined),
			firmwareVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<number | null | undefined>(undefined),
			subclassId: new FormControl<number | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
			vid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_INFO */
	export interface GoogleChromeManagementV1StorageInfo {

		/** The available space for user data storage in the device in bytes. */
		availableDiskBytes?: string | null;

		/** The total space for user data storage in the device in bytes. */
		totalDiskBytes?: string | null;

		/** Information for disk volumes */
		volume?: Array<GoogleChromeManagementV1StorageInfoDiskVolume>;
	}

	/** Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_INFO */
	export interface GoogleChromeManagementV1StorageInfoFormProperties {

		/** The available space for user data storage in the device in bytes. */
		availableDiskBytes: FormControl<string | null | undefined>,

		/** The total space for user data storage in the device in bytes. */
		totalDiskBytes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1StorageInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1StorageInfoFormProperties>({
			availableDiskBytes: new FormControl<string | null | undefined>(undefined),
			totalDiskBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information for disk volumes */
	export interface GoogleChromeManagementV1StorageInfoDiskVolume {

		/** Free storage space in bytes. */
		storageFreeBytes?: string | null;

		/** Total storage space in bytes. */
		storageTotalBytes?: string | null;

		/** Disk volume id. */
		volumeId?: string | null;
	}

	/** Information for disk volumes */
	export interface GoogleChromeManagementV1StorageInfoDiskVolumeFormProperties {

		/** Free storage space in bytes. */
		storageFreeBytes: FormControl<string | null | undefined>,

		/** Total storage space in bytes. */
		storageTotalBytes: FormControl<string | null | undefined>,

		/** Disk volume id. */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1StorageInfoDiskVolumeFormGroup() {
		return new FormGroup<GoogleChromeManagementV1StorageInfoDiskVolumeFormProperties>({
			storageFreeBytes: new FormControl<string | null | undefined>(undefined),
			storageTotalBytes: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_REPORT */
	export interface GoogleChromeManagementV1StorageStatusReport {

		/** Output only. Reports on disk. */
		disk?: Array<GoogleChromeManagementV1DiskInfo>;

		/** Output only. Timestamp of when the sample was collected on device */
		reportTime?: string | null;
	}

	/** Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_REPORT */
	export interface GoogleChromeManagementV1StorageStatusReportFormProperties {

		/** Output only. Timestamp of when the sample was collected on device */
		reportTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1StorageStatusReportFormGroup() {
		return new FormGroup<GoogleChromeManagementV1StorageStatusReportFormProperties>({
			reportTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Thunderbolt bus info. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceSecurityStatus](https://chromeenterprise.google/policies/#ReportDeviceSecurityStatus) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: No * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BUS_DEVICE_INFO */
	export interface GoogleChromeManagementV1ThunderboltInfo {

		/** Security level of the Thunderbolt bus. */
		securityLevel?: GoogleChromeManagementV1ThunderboltInfoSecurityLevel | null;
	}

	/** Thunderbolt bus info. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceSecurityStatus](https://chromeenterprise.google/policies/#ReportDeviceSecurityStatus) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: No * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BUS_DEVICE_INFO */
	export interface GoogleChromeManagementV1ThunderboltInfoFormProperties {

		/** Security level of the Thunderbolt bus. */
		securityLevel: FormControl<GoogleChromeManagementV1ThunderboltInfoSecurityLevel | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1ThunderboltInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1ThunderboltInfoFormProperties>({
			securityLevel: new FormControl<GoogleChromeManagementV1ThunderboltInfoSecurityLevel | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1ThunderboltInfoSecurityLevel { THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED = 'THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED', THUNDERBOLT_SECURITY_NONE_LEVEL = 'THUNDERBOLT_SECURITY_NONE_LEVEL', THUNDERBOLT_SECURITY_USER_LEVEL = 'THUNDERBOLT_SECURITY_USER_LEVEL', THUNDERBOLT_SECURITY_SECURE_LEVEL = 'THUNDERBOLT_SECURITY_SECURE_LEVEL', THUNDERBOLT_SECURITY_DP_ONLY_LEVEL = 'THUNDERBOLT_SECURITY_DP_ONLY_LEVEL', THUNDERBOLT_SECURITY_USB_ONLY_LEVEL = 'THUNDERBOLT_SECURITY_USB_ONLY_LEVEL', THUNDERBOLT_SECURITY_NO_PCIE_LEVEL = 'THUNDERBOLT_SECURITY_NO_PCIE_LEVEL' }


	/** Response message for listing telemetry events for a customer. */
	export interface GoogleChromeManagementV1ListTelemetryEventsResponse {

		/** Token to specify next page in the list. */
		nextPageToken?: string | null;

		/** Telemetry events returned in the response. */
		telemetryEvents?: Array<GoogleChromeManagementV1TelemetryEvent>;
	}

	/** Response message for listing telemetry events for a customer. */
	export interface GoogleChromeManagementV1ListTelemetryEventsResponseFormProperties {

		/** Token to specify next page in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1ListTelemetryEventsResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1ListTelemetryEventsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Telemetry data reported by a managed device. */
	export interface GoogleChromeManagementV1TelemetryEvent {

		/** `TelemetryAudioSevereUnderrunEvent` is triggered when a audio devices run out of buffer data for more than 5 seconds. * Granular permission needed: TELEMETRY_API_AUDIO_REPORT */
		audioSevereUnderrunEvent?: GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent;

		/** Information about a device associated with telemetry data. * Granular Permission needed: TELEMETRY_API_DEVICE */
		device?: GoogleChromeManagementV1TelemetryDeviceInfo;

		/** The event type of the current event. */
		eventType?: GoogleChromeManagementV1TelemetryEventEventType | null;

		/** Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
		httpsLatencyChangeEvent?: GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent;

		/** Output only. Resource name of the event. */
		name?: string | null;

		/** `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
		networkStateChangeEvent?: GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent;

		/** Timestamp that represents when the event was reported. */
		reportTime?: string | null;

		/** `TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT */
		usbPeripheralsEvent?: GoogleChromeManagementV1TelemetryUsbPeripheralsEvent;

		/** Information about a user associated with telemetry data. * Granular permission needed: TELEMETRY_API_USER */
		user?: GoogleChromeManagementV1TelemetryUserInfo;

		/** `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
		vpnConnectionStateChangeEvent?: GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent;

		/** `TelemetryNetworkSignalStrengthEvent` is triggered on WiFi signal strength events. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
		wifiSignalStrengthEvent?: GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent;
	}

	/** Telemetry data reported by a managed device. */
	export interface GoogleChromeManagementV1TelemetryEventFormProperties {

		/** The event type of the current event. */
		eventType: FormControl<GoogleChromeManagementV1TelemetryEventEventType | null | undefined>,

		/** Output only. Resource name of the event. */
		name: FormControl<string | null | undefined>,

		/** Timestamp that represents when the event was reported. */
		reportTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryEventFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryEventFormProperties>({
			eventType: new FormControl<GoogleChromeManagementV1TelemetryEventEventType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `TelemetryAudioSevereUnderrunEvent` is triggered when a audio devices run out of buffer data for more than 5 seconds. * Granular permission needed: TELEMETRY_API_AUDIO_REPORT */
	export interface GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent {
	}

	/** `TelemetryAudioSevereUnderrunEvent` is triggered when a audio devices run out of buffer data for more than 5 seconds. * Granular permission needed: TELEMETRY_API_AUDIO_REPORT */
	export interface GoogleChromeManagementV1TelemetryAudioSevereUnderrunEventFormProperties {
	}
	export function CreateGoogleChromeManagementV1TelemetryAudioSevereUnderrunEventFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryAudioSevereUnderrunEventFormProperties>({
		});

	}


	/** Information about a device associated with telemetry data. * Granular Permission needed: TELEMETRY_API_DEVICE */
	export interface GoogleChromeManagementV1TelemetryDeviceInfo {

		/** Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab. */
		deviceId?: string | null;

		/** Output only. Organization unit ID of the device. */
		orgUnitId?: string | null;
	}

	/** Information about a device associated with telemetry data. * Granular Permission needed: TELEMETRY_API_DEVICE */
	export interface GoogleChromeManagementV1TelemetryDeviceInfoFormProperties {

		/** Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab. */
		deviceId: FormControl<string | null | undefined>,

		/** Output only. Organization unit ID of the device. */
		orgUnitId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryDeviceInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryDeviceInfoFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1TelemetryEventEventType { EVENT_TYPE_UNSPECIFIED = 'EVENT_TYPE_UNSPECIFIED', AUDIO_SEVERE_UNDERRUN = 'AUDIO_SEVERE_UNDERRUN', NETWORK_STATE_CHANGE = 'NETWORK_STATE_CHANGE', USB_ADDED = 'USB_ADDED', USB_REMOVED = 'USB_REMOVED', NETWORK_HTTPS_LATENCY_CHANGE = 'NETWORK_HTTPS_LATENCY_CHANGE', WIFI_SIGNAL_STRENGTH_LOW = 'WIFI_SIGNAL_STRENGTH_LOW', WIFI_SIGNAL_STRENGTH_RECOVERED = 'WIFI_SIGNAL_STRENGTH_RECOVERED', VPN_CONNECTION_STATE_CHANGE = 'VPN_CONNECTION_STATE_CHANGE' }


	/** Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent {

		/** Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites. */
		httpsLatencyRoutineData?: GoogleChromeManagementV1HttpsLatencyRoutineData;

		/** Current HTTPS latency state. */
		httpsLatencyState?: GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyState | null;
	}

	/** Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventFormProperties {

		/** Current HTTPS latency state. */
		httpsLatencyState: FormControl<GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyState | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryHttpsLatencyChangeEventFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventFormProperties>({
			httpsLatencyState: new FormControl<GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyState | null | undefined>(undefined),
		});

	}

	export enum GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyState { HTTPS_LATENCY_STATE_UNSPECIFIED = 'HTTPS_LATENCY_STATE_UNSPECIFIED', RECOVERY = 'RECOVERY', PROBLEM = 'PROBLEM' }


	/** `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent {

		/** Current connection state of the network. */
		connectionState?: GoogleChromeManagementV1NetworkStatusReportConnectionState | null;

		/** Unique identifier of the network. */
		guid?: string | null;
	}

	/** `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventFormProperties {

		/** Current connection state of the network. */
		connectionState: FormControl<GoogleChromeManagementV1NetworkStatusReportConnectionState | null | undefined>,

		/** Unique identifier of the network. */
		guid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventFormProperties>({
			connectionState: new FormControl<GoogleChromeManagementV1NetworkStatusReportConnectionState | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT */
	export interface GoogleChromeManagementV1TelemetryUsbPeripheralsEvent {

		/** List of usb devices that were either added or removed. */
		usbPeripheralReport?: Array<GoogleChromeManagementV1UsbPeripheralReport>;
	}

	/** `TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT */
	export interface GoogleChromeManagementV1TelemetryUsbPeripheralsEventFormProperties {
	}
	export function CreateGoogleChromeManagementV1TelemetryUsbPeripheralsEventFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryUsbPeripheralsEventFormProperties>({
		});

	}


	/** Information about a user associated with telemetry data. * Granular permission needed: TELEMETRY_API_USER */
	export interface GoogleChromeManagementV1TelemetryUserInfo {

		/** Output only. User's email. */
		email?: string | null;

		/** Output only. Organization unit ID of the user. */
		orgUnitId?: string | null;
	}

	/** Information about a user associated with telemetry data. * Granular permission needed: TELEMETRY_API_USER */
	export interface GoogleChromeManagementV1TelemetryUserInfoFormProperties {

		/** Output only. User's email. */
		email: FormControl<string | null | undefined>,

		/** Output only. Organization unit ID of the user. */
		orgUnitId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryUserInfoFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryUserInfoFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `TelemetryNetworkSignalStrengthEvent` is triggered on WiFi signal strength events. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent {

		/** Unique identifier of the network. */
		guid?: string | null;

		/** Signal strength RSSI value. */
		signalStrengthDbm?: number | null;
	}

	/** `TelemetryNetworkSignalStrengthEvent` is triggered on WiFi signal strength events. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT */
	export interface GoogleChromeManagementV1TelemetryNetworkSignalStrengthEventFormProperties {

		/** Unique identifier of the network. */
		guid: FormControl<string | null | undefined>,

		/** Signal strength RSSI value. */
		signalStrengthDbm: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryNetworkSignalStrengthEventFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryNetworkSignalStrengthEventFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			signalStrengthDbm: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for listing notification configs for a customer. */
	export interface GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The telemetry notification configs from the specified customer. */
		telemetryNotificationConfigs?: Array<GoogleChromeManagementV1TelemetryNotificationConfig>;
	}

	/** Response message for listing notification configs for a customer. */
	export interface GoogleChromeManagementV1ListTelemetryNotificationConfigsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1ListTelemetryNotificationConfigsResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1ListTelemetryNotificationConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration to receive notifications of telemetry data. */
	export interface GoogleChromeManagementV1TelemetryNotificationConfig {

		/** Output only. Google Workspace customer that owns the resource. */
		customer?: string | null;

		/** Configures how the telemetry data should be filtered. */
		filter?: GoogleChromeManagementV1TelemetryNotificationFilter;

		/** The pubsub topic to which notifications are published to. */
		googleCloudPubsubTopic?: string | null;

		/** Output only. Resource name of the notification configuration. */
		name?: string | null;
	}

	/** Configuration to receive notifications of telemetry data. */
	export interface GoogleChromeManagementV1TelemetryNotificationConfigFormProperties {

		/** Output only. Google Workspace customer that owns the resource. */
		customer: FormControl<string | null | undefined>,

		/** The pubsub topic to which notifications are published to. */
		googleCloudPubsubTopic: FormControl<string | null | undefined>,

		/** Output only. Resource name of the notification configuration. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryNotificationConfigFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryNotificationConfigFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
			googleCloudPubsubTopic: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures how the telemetry data should be filtered. */
	export interface GoogleChromeManagementV1TelemetryNotificationFilter {

		/** If set, only sends notifications for telemetry data coming from this device. */
		deviceId?: string | null;

		/** If set, only sends notifications for telemetry data coming from devices in this org unit. */
		deviceOrgUnitId?: string | null;

		/** Configures how the telemetry events should be filtered. */
		telemetryEventNotificationFilter?: GoogleChromeManagementV1TelemetryEventNotificationFilter;

		/** If set, only sends notifications for telemetry data coming from devices owned by this user. */
		userEmail?: string | null;

		/** If set, only sends notifications for telemetry data coming from devices owned by users in this org unit. */
		userOrgUnitId?: string | null;
	}

	/** Configures how the telemetry data should be filtered. */
	export interface GoogleChromeManagementV1TelemetryNotificationFilterFormProperties {

		/** If set, only sends notifications for telemetry data coming from this device. */
		deviceId: FormControl<string | null | undefined>,

		/** If set, only sends notifications for telemetry data coming from devices in this org unit. */
		deviceOrgUnitId: FormControl<string | null | undefined>,

		/** If set, only sends notifications for telemetry data coming from devices owned by this user. */
		userEmail: FormControl<string | null | undefined>,

		/** If set, only sends notifications for telemetry data coming from devices owned by users in this org unit. */
		userOrgUnitId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryNotificationFilterFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryNotificationFilterFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			deviceOrgUnitId: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userOrgUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures how the telemetry events should be filtered. */
	export interface GoogleChromeManagementV1TelemetryEventNotificationFilter {

		/** Only sends the notifications for events of these types. Must not be empty. */
		eventTypes?: Array<GoogleChromeManagementV1TelemetryEventEventType>;
	}

	/** Configures how the telemetry events should be filtered. */
	export interface GoogleChromeManagementV1TelemetryEventNotificationFilterFormProperties {
	}
	export function CreateGoogleChromeManagementV1TelemetryEventNotificationFilterFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryEventNotificationFilterFormProperties>({
		});

	}


	/** Response message for listing telemetry users for a customer. */
	export interface GoogleChromeManagementV1ListTelemetryUsersResponse {

		/** Token to specify next page in the list. */
		nextPageToken?: string | null;

		/** Telemetry users returned in the response. */
		telemetryUsers?: Array<GoogleChromeManagementV1TelemetryUser>;
	}

	/** Response message for listing telemetry users for a customer. */
	export interface GoogleChromeManagementV1ListTelemetryUsersResponseFormProperties {

		/** Token to specify next page in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1ListTelemetryUsersResponseFormGroup() {
		return new FormGroup<GoogleChromeManagementV1ListTelemetryUsersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Telemetry data collected from a managed user. * Granular permission needed: TELEMETRY_API_USER */
	export interface GoogleChromeManagementV1TelemetryUser {

		/** G Suite Customer whose enterprise enrolled the device. */
		customer?: string | null;

		/** Resource name of the user. */
		name?: string | null;

		/** Organization unit of the user. */
		orgUnitId?: string | null;

		/** Telemetry data collected from a managed user and device. */
		userDevice?: Array<GoogleChromeManagementV1TelemetryUserDevice>;

		/** Email address of the user. */
		userEmail?: string | null;

		/** Directory ID of the user. */
		userId?: string | null;
	}

	/** Telemetry data collected from a managed user. * Granular permission needed: TELEMETRY_API_USER */
	export interface GoogleChromeManagementV1TelemetryUserFormProperties {

		/** G Suite Customer whose enterprise enrolled the device. */
		customer: FormControl<string | null | undefined>,

		/** Resource name of the user. */
		name: FormControl<string | null | undefined>,

		/** Organization unit of the user. */
		orgUnitId: FormControl<string | null | undefined>,

		/** Email address of the user. */
		userEmail: FormControl<string | null | undefined>,

		/** Directory ID of the user. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryUserFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryUserFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Telemetry data collected for a managed user and device. * Granular permission needed: TELEMETRY_API_DEVICE */
	export interface GoogleChromeManagementV1TelemetryUserDevice {

		/** Output only. Audio reports collected periodically sorted in a decreasing order of report_time. */
		audioStatusReport?: Array<GoogleChromeManagementV1AudioStatusReport>;

		/** Output only. Device activity reports collected periodically sorted in a decreasing order of report_time. */
		deviceActivityReport?: Array<GoogleChromeManagementV1DeviceActivityReport>;

		/** The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab. */
		deviceId?: string | null;

		/** Output only. Network bandwidth reports collected periodically sorted in a decreasing order of report_time. */
		networkBandwidthReport?: Array<GoogleChromeManagementV1NetworkBandwidthReport>;

		/** Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time. */
		peripheralsReport?: Array<GoogleChromeManagementV1PeripheralsReport>;
	}

	/** Telemetry data collected for a managed user and device. * Granular permission needed: TELEMETRY_API_DEVICE */
	export interface GoogleChromeManagementV1TelemetryUserDeviceFormProperties {

		/** The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab. */
		deviceId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromeManagementV1TelemetryUserDeviceFormGroup() {
		return new FormGroup<GoogleChromeManagementV1TelemetryUserDeviceFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Generate summary of app installation requests.
		 * Get v1/{customer}/apps:countChromeAppRequests
		 * @param {string} customer Required. Customer id or "my_customer" to use the customer associated to the account making the request.
		 * @param {string} orderBy Field used to order results. Supported fields: * request_count * latest_request_time
		 * @param {string} orgUnitId The ID of the organizational unit.
		 * @param {number} pageSize Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50.
		 * @param {string} pageToken Token to specify the page of the request to be returned.
		 * @return {GoogleChromeManagementV1CountChromeAppRequestsResponse} Successful response
		 */
		Chromemanagement_customers_apps_countChromeAppRequests(customer: string, orderBy: string | null | undefined, orgUnitId: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleChromeManagementV1CountChromeAppRequestsResponse> {
			return this.http.get<GoogleChromeManagementV1CountChromeAppRequestsResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/apps:countChromeAppRequests&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&orgUnitId=' + (orgUnitId == null ? '' : encodeURIComponent(orgUnitId)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
		 * Get v1/{customer}/reports:countChromeBrowsersNeedingAttention
		 * @param {string} customer Required. The customer ID or "my_customer" prefixed with "customers/".
		 * @param {string} orgUnitId Optional. The ID of the organizational unit. If omitted, all data will be returned.
		 * @return {GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse} Successful response
		 */
		Chromemanagement_customers_reports_countChromeBrowsersNeedingAttention(customer: string, orgUnitId: string | null | undefined): Observable<GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse> {
			return this.http.get<GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/reports:countChromeBrowsersNeedingAttention&orgUnitId=' + (orgUnitId == null ? '' : encodeURIComponent(orgUnitId)), {});
		}

		/**
		 * Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
		 * Get v1/{customer}/reports:countChromeDevicesReachingAutoExpirationDate
		 * @param {string} customer Required. The customer ID or "my_customer" prefixed with "customers/".
		 * @param {string} maxAueDate Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date.
		 * @param {string} minAueDate Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date.
		 * @param {string} orgUnitId Optional. The organizational unit ID, if omitted, will return data for all organizational units.
		 * @return {GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse} Successful response
		 */
		Chromemanagement_customers_reports_countChromeDevicesReachingAutoExpirationDate(customer: string, maxAueDate: string | null | undefined, minAueDate: string | null | undefined, orgUnitId: string | null | undefined): Observable<GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse> {
			return this.http.get<GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/reports:countChromeDevicesReachingAutoExpirationDate&maxAueDate=' + (maxAueDate == null ? '' : encodeURIComponent(maxAueDate)) + '&minAueDate=' + (minAueDate == null ? '' : encodeURIComponent(minAueDate)) + '&orgUnitId=' + (orgUnitId == null ? '' : encodeURIComponent(orgUnitId)), {});
		}

		/**
		 * Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
		 * Get v1/{customer}/reports:countChromeDevicesThatNeedAttention
		 * @param {string} customer Required. The customer ID or "my_customer" prefixed with "customers/".
		 * @param {string} orgUnitId Optional. The ID of the organizational unit. If omitted, all data will be returned.
		 * @param {string} readMask Required. Mask of the fields that should be populated in the returned report.
		 * @return {GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse} Successful response
		 */
		Chromemanagement_customers_reports_countChromeDevicesThatNeedAttention(customer: string, orgUnitId: string | null | undefined, readMask: string | null | undefined): Observable<GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse> {
			return this.http.get<GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/reports:countChromeDevicesThatNeedAttention&orgUnitId=' + (orgUnitId == null ? '' : encodeURIComponent(orgUnitId)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
		 * Get v1/{customer}/reports:countChromeHardwareFleetDevices
		 * @param {string} customer Required. The customer ID or "my_customer".
		 * @param {string} orgUnitId Optional. The ID of the organizational unit. If omitted, all data will be returned.
		 * @param {string} readMask Required. Mask of the fields that should be populated in the returned report.
		 * @return {GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse} Successful response
		 */
		Chromemanagement_customers_reports_countChromeHardwareFleetDevices(customer: string, orgUnitId: string | null | undefined, readMask: string | null | undefined): Observable<GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse> {
			return this.http.get<GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/reports:countChromeHardwareFleetDevices&orgUnitId=' + (orgUnitId == null ? '' : encodeURIComponent(orgUnitId)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Generate report of installed Chrome versions.
		 * Get v1/{customer}/reports:countChromeVersions
		 * @param {string} customer Required. Customer id or "my_customer" to use the customer associated to the account making the request.
		 * @param {string} filter Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
		 * @param {string} orgUnitId The ID of the organizational unit.
		 * @param {number} pageSize Maximum number of results to return. Maximum and default are 100.
		 * @param {string} pageToken Token to specify the page of the request to be returned.
		 * @return {GoogleChromeManagementV1CountChromeVersionsResponse} Successful response
		 */
		Chromemanagement_customers_reports_countChromeVersions(customer: string, filter: string | null | undefined, orgUnitId: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleChromeManagementV1CountChromeVersionsResponse> {
			return this.http.get<GoogleChromeManagementV1CountChromeVersionsResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/reports:countChromeVersions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orgUnitId=' + (orgUnitId == null ? '' : encodeURIComponent(orgUnitId)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Generate report of app installations.
		 * Get v1/{customer}/reports:countInstalledApps
		 * @param {string} customer Required. Customer id or "my_customer" to use the customer associated to the account making the request.
		 * @param {string} filter Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id
		 * @param {string} orderBy Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id
		 * @param {string} orgUnitId The ID of the organizational unit.
		 * @param {number} pageSize Maximum number of results to return. Maximum and default are 100.
		 * @param {string} pageToken Token to specify the page of the request to be returned.
		 * @return {GoogleChromeManagementV1CountInstalledAppsResponse} Successful response
		 */
		Chromemanagement_customers_reports_countInstalledApps(customer: string, filter: string | null | undefined, orderBy: string | null | undefined, orgUnitId: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleChromeManagementV1CountInstalledAppsResponse> {
			return this.http.get<GoogleChromeManagementV1CountInstalledAppsResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/reports:countInstalledApps&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&orgUnitId=' + (orgUnitId == null ? '' : encodeURIComponent(orgUnitId)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get a summary of printing done by each printer.
		 * Get v1/{customer}/reports:countPrintJobsByPrinter
		 * @param {string} customer Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
		 * @param {string} filter Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time
		 * @param {string} orderBy Field used to order results. If omitted, results will be ordered in ascending order of the 'printer' field. Supported order_by fields: * printer * job_count * device_count * user_count
		 * @param {number} pageSize Maximum number of results to return. Maximum and default are 100.
		 * @param {string} pageToken Token to specify the page of the response to be returned.
		 * @param {string} printerOrgUnitId The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned.
		 * @return {GoogleChromeManagementV1CountPrintJobsByPrinterResponse} Successful response
		 */
		Chromemanagement_customers_reports_countPrintJobsByPrinter(customer: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, printerOrgUnitId: string | null | undefined): Observable<GoogleChromeManagementV1CountPrintJobsByPrinterResponse> {
			return this.http.get<GoogleChromeManagementV1CountPrintJobsByPrinterResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/reports:countPrintJobsByPrinter&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&printerOrgUnitId=' + (printerOrgUnitId == null ? '' : encodeURIComponent(printerOrgUnitId)), {});
		}

		/**
		 * Get a summary of printing done by each user.
		 * Get v1/{customer}/reports:countPrintJobsByUser
		 * @param {string} customer Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
		 * @param {string} filter Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time
		 * @param {string} orderBy Field used to order results. If omitted, results will be ordered in ascending order of the 'user_email' field. Supported order_by fields: * user_email * job_count * printer_count * device_count
		 * @param {number} pageSize Maximum number of results to return. Maximum and default are 100.
		 * @param {string} pageToken Token to specify the page of the response to be returned.
		 * @param {string} printerOrgUnitId The ID of the organizational unit for printers. If specified, only print jobs initiated with printers from the specified organizational unit will be counted. If omitted, all print jobs will be counted.
		 * @return {GoogleChromeManagementV1CountPrintJobsByUserResponse} Successful response
		 */
		Chromemanagement_customers_reports_countPrintJobsByUser(customer: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, printerOrgUnitId: string | null | undefined): Observable<GoogleChromeManagementV1CountPrintJobsByUserResponse> {
			return this.http.get<GoogleChromeManagementV1CountPrintJobsByUserResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/reports:countPrintJobsByUser&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&printerOrgUnitId=' + (printerOrgUnitId == null ? '' : encodeURIComponent(printerOrgUnitId)), {});
		}

		/**
		 * Get a list of print jobs.
		 * Get v1/{customer}/reports:enumeratePrintJobs
		 * @param {string} customer Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
		 * @param {string} filter Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported for `complete_time`. Note: Only = comparator supported for `user_id` and `printer_id`. Supported filter fields: * complete_time * printer_id * user_id
		 * @param {string} orderBy Field used to order results. If not specified, results will be ordered in descending order of the `complete_time` field. Supported order by fields: * title * state * create_time * complete_time * document_page_count * color_mode * duplex_mode * printer * user_email
		 * @param {number} pageSize The number of print jobs in the page from 0 to 100 inclusive, if page_size is not specified or zero, the size will be 50.
		 * @param {string} pageToken A page token received from a previous `EnumeratePrintJobs` call. Provide this to retrieve the subsequent page. If omitted, the first page of results will be returned. When paginating, all other parameters provided to `EnumeratePrintJobs` must match the call that provided the page token.
		 * @param {string} printerOrgUnitId The ID of the organizational unit for printers. If specified, only print jobs submitted to printers from the specified organizational unit will be returned.
		 * @return {GoogleChromeManagementV1EnumeratePrintJobsResponse} Successful response
		 */
		Chromemanagement_customers_reports_enumeratePrintJobs(customer: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, printerOrgUnitId: string | null | undefined): Observable<GoogleChromeManagementV1EnumeratePrintJobsResponse> {
			return this.http.get<GoogleChromeManagementV1EnumeratePrintJobsResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/reports:enumeratePrintJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&printerOrgUnitId=' + (printerOrgUnitId == null ? '' : encodeURIComponent(printerOrgUnitId)), {});
		}

		/**
		 * Generate report of managed Chrome browser devices that have a specified app installed.
		 * Get v1/{customer}/reports:findInstalledAppDevices
		 * @param {string} customer Required. Customer id or "my_customer" to use the customer associated to the account making the request.
		 * @param {string} appId Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
		 * @param {GoogleChromeManagementV1InstalledAppAppType} appType Type of the app.
		 * @param {string} filter Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
		 * @param {string} orderBy Field used to order results. Supported order by fields: * machine * device_id
		 * @param {string} orgUnitId The ID of the organizational unit.
		 * @param {number} pageSize Maximum number of results to return. Maximum and default are 100.
		 * @param {string} pageToken Token to specify the page of the request to be returned.
		 * @return {GoogleChromeManagementV1FindInstalledAppDevicesResponse} Successful response
		 */
		Chromemanagement_customers_reports_findInstalledAppDevices(customer: string, appId: string | null | undefined, appType: GoogleChromeManagementV1InstalledAppAppType | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, orgUnitId: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleChromeManagementV1FindInstalledAppDevicesResponse> {
			return this.http.get<GoogleChromeManagementV1FindInstalledAppDevicesResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/reports:findInstalledAppDevices&appId=' + (appId == null ? '' : encodeURIComponent(appId)) + '&appType=' + appType + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&orgUnitId=' + (orgUnitId == null ? '' : encodeURIComponent(orgUnitId)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Delete a telemetry notification config.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the notification config to delete. Format: `customers/{customer}/telemetry/notificationConfigs/{notification_config}`
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Chromemanagement_customers_telemetry_notificationConfigs_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get telemetry user.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the `TelemetryUser` to return.
		 * @param {string} readMask Read mask to specify which fields to return.
		 * @return {GoogleChromeManagementV1TelemetryUser} Successful response
		 */
		Chromemanagement_customers_telemetry_users_get(name: string, readMask: string | null | undefined): Observable<GoogleChromeManagementV1TelemetryUser> {
			return this.http.get<GoogleChromeManagementV1TelemetryUser>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * List all telemetry devices.
		 * Get v1/{parent}/telemetry/devices
		 * @param {string} parent Required. Customer id or "my_customer" to use the customer associated to the account making the request.
		 * @param {string} filter Optional. Only include resources that match the filter. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The "reports_timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
		 * @param {number} pageSize Maximum number of results to return. Default value is 100. Maximum value is 1000.
		 * @param {string} pageToken Token to specify next page in the list.
		 * @param {string} readMask Required. Read mask to specify which fields to return.
		 * @return {GoogleChromeManagementV1ListTelemetryDevicesResponse} Successful response
		 */
		Chromemanagement_customers_telemetry_devices_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<GoogleChromeManagementV1ListTelemetryDevicesResponse> {
			return this.http.get<GoogleChromeManagementV1ListTelemetryDevicesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/telemetry/devices&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * List telemetry events.
		 * Get v1/{parent}/telemetry/events
		 * @param {string} parent Required. Customer id or "my_customer" to use the customer associated to the account making the request.
		 * @param {string} filter Optional. Only include resources that match the filter. Although this parameter is currently optional, this parameter will be required- please specify at least 1 event type. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The "timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
		 * @param {number} pageSize Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000.
		 * @param {string} pageToken Optional. Token to specify next page in the list.
		 * @param {string} readMask Required. Read mask to specify which fields to return. Although currently required, this field will become optional, while the filter parameter with an event type will be come required.
		 * @return {GoogleChromeManagementV1ListTelemetryEventsResponse} Successful response
		 */
		Chromemanagement_customers_telemetry_events_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<GoogleChromeManagementV1ListTelemetryEventsResponse> {
			return this.http.get<GoogleChromeManagementV1ListTelemetryEventsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/telemetry/events&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * List all telemetry notification configs.
		 * Get v1/{parent}/telemetry/notificationConfigs
		 * @param {string} parent Required. The parent which owns the notification configs.
		 * @param {number} pageSize The maximum number of notification configs to return. The service may return fewer than this value. If unspecified, at most 100 notification configs will be returned. The maximum value is 100; values above 100 will be coerced to 100.
		 * @param {string} pageToken A page token, received from a previous `ListTelemetryNotificationConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTelemetryNotificationConfigs` must match the call that provided the page token.
		 * @return {GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse} Successful response
		 */
		Chromemanagement_customers_telemetry_notificationConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse> {
			return this.http.get<GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/telemetry/notificationConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a telemetry notification config.
		 * Post v1/{parent}/telemetry/notificationConfigs
		 * @param {string} parent Required. The parent resource where this notification config will be created. Format: `customers/{customer}`
		 * @return {GoogleChromeManagementV1TelemetryNotificationConfig} Successful response
		 */
		Chromemanagement_customers_telemetry_notificationConfigs_create(parent: string, requestBody: GoogleChromeManagementV1TelemetryNotificationConfig): Observable<GoogleChromeManagementV1TelemetryNotificationConfig> {
			return this.http.post<GoogleChromeManagementV1TelemetryNotificationConfig>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/telemetry/notificationConfigs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all telemetry users.
		 * Get v1/{parent}/telemetry/users
		 * @param {string} parent Required. Customer id or "my_customer" to use the customer associated to the account making the request.
		 * @param {string} filter Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id 
		 * @param {number} pageSize Maximum number of results to return. Default value is 100. Maximum value is 1000.
		 * @param {string} pageToken Token to specify next page in the list.
		 * @param {string} readMask Read mask to specify which fields to return.
		 * @return {GoogleChromeManagementV1ListTelemetryUsersResponse} Successful response
		 */
		Chromemanagement_customers_telemetry_users_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<GoogleChromeManagementV1ListTelemetryUsersResponse> {
			return this.http.get<GoogleChromeManagementV1ListTelemetryUsersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/telemetry/users&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}
	}

}

