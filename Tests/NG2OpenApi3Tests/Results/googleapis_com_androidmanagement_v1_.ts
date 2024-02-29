import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A shell command was issued over ADB via “adb shell command”. */
	export interface AdbShellCommandEvent {

		/** Shell command that was issued over ADB via "adb shell command". Redacted to empty string on organization-owned managed profile devices. */
		shellCmd?: string | null;
	}

	/** A shell command was issued over ADB via “adb shell command”. */
	export interface AdbShellCommandEventFormProperties {

		/** Shell command that was issued over ADB via "adb shell command". Redacted to empty string on organization-owned managed profile devices. */
		shellCmd: FormControl<string | null | undefined>,
	}
	export function CreateAdbShellCommandEventFormGroup() {
		return new FormGroup<AdbShellCommandEventFormProperties>({
			shellCmd: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An ADB interactive shell was opened via “adb shell”. Intentionally empty. */
	export interface AdbShellInteractiveEvent {
	}

	/** An ADB interactive shell was opened via “adb shell”. Intentionally empty. */
	export interface AdbShellInteractiveEventFormProperties {
	}
	export function CreateAdbShellInteractiveEventFormGroup() {
		return new FormGroup<AdbShellInteractiveEventFormProperties>({
		});

	}


	/** Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values. */
	export interface AdvancedSecurityOverrides {

		/** Controls Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC). Enabling Common Criteria Mode increases certain security components on a device, including AES-GCM encryption of Bluetooth Long Term Keys, and Wi-Fi configuration stores.Warning: Common Criteria Mode enforces a strict security model typically only required for IT products used in national security systems and other highly sensitive organizations. Standard device use may be affected. Only enabled if required. */
		commonCriteriaMode?: AdvancedSecurityOverridesCommonCriteriaMode | null;

		/** Controls access to developer settings: developer options and safe boot. Replaces safeBootDisabled (deprecated) and debuggingFeaturesAllowed (deprecated). */
		developerSettings?: AdvancedSecurityOverridesDeveloperSettings | null;

		/** Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced. Replaces ensureVerifyAppsEnabled (deprecated). */
		googlePlayProtectVerifyApps?: AdvancedSecurityOverridesGooglePlayProtectVerifyApps | null;

		/** Personal apps that can read work profile notifications using a NotificationListenerService (https://developer.android.com/reference/android/service/notification/NotificationListenerService). By default, no personal apps (aside from system apps) can read work notifications. Each value in the list must be a package name. */
		personalAppsThatCanReadWorkNotifications?: Array<string>;

		/** The policy for untrusted apps (apps from unknown sources) enforced on the device. Replaces install_unknown_sources_allowed (deprecated). */
		untrustedAppsPolicy?: AdvancedSecurityOverridesUntrustedAppsPolicy | null;
	}

	/** Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values. */
	export interface AdvancedSecurityOverridesFormProperties {

		/** Controls Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC). Enabling Common Criteria Mode increases certain security components on a device, including AES-GCM encryption of Bluetooth Long Term Keys, and Wi-Fi configuration stores.Warning: Common Criteria Mode enforces a strict security model typically only required for IT products used in national security systems and other highly sensitive organizations. Standard device use may be affected. Only enabled if required. */
		commonCriteriaMode: FormControl<AdvancedSecurityOverridesCommonCriteriaMode | null | undefined>,

		/** Controls access to developer settings: developer options and safe boot. Replaces safeBootDisabled (deprecated) and debuggingFeaturesAllowed (deprecated). */
		developerSettings: FormControl<AdvancedSecurityOverridesDeveloperSettings | null | undefined>,

		/** Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced. Replaces ensureVerifyAppsEnabled (deprecated). */
		googlePlayProtectVerifyApps: FormControl<AdvancedSecurityOverridesGooglePlayProtectVerifyApps | null | undefined>,

		/** The policy for untrusted apps (apps from unknown sources) enforced on the device. Replaces install_unknown_sources_allowed (deprecated). */
		untrustedAppsPolicy: FormControl<AdvancedSecurityOverridesUntrustedAppsPolicy | null | undefined>,
	}
	export function CreateAdvancedSecurityOverridesFormGroup() {
		return new FormGroup<AdvancedSecurityOverridesFormProperties>({
			commonCriteriaMode: new FormControl<AdvancedSecurityOverridesCommonCriteriaMode | null | undefined>(undefined),
			developerSettings: new FormControl<AdvancedSecurityOverridesDeveloperSettings | null | undefined>(undefined),
			googlePlayProtectVerifyApps: new FormControl<AdvancedSecurityOverridesGooglePlayProtectVerifyApps | null | undefined>(undefined),
			untrustedAppsPolicy: new FormControl<AdvancedSecurityOverridesUntrustedAppsPolicy | null | undefined>(undefined),
		});

	}

	export enum AdvancedSecurityOverridesCommonCriteriaMode { COMMON_CRITERIA_MODE_UNSPECIFIED = 'COMMON_CRITERIA_MODE_UNSPECIFIED', COMMON_CRITERIA_MODE_DISABLED = 'COMMON_CRITERIA_MODE_DISABLED', COMMON_CRITERIA_MODE_ENABLED = 'COMMON_CRITERIA_MODE_ENABLED' }

	export enum AdvancedSecurityOverridesDeveloperSettings { DEVELOPER_SETTINGS_UNSPECIFIED = 'DEVELOPER_SETTINGS_UNSPECIFIED', DEVELOPER_SETTINGS_DISABLED = 'DEVELOPER_SETTINGS_DISABLED', DEVELOPER_SETTINGS_ALLOWED = 'DEVELOPER_SETTINGS_ALLOWED' }

	export enum AdvancedSecurityOverridesGooglePlayProtectVerifyApps { GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED = 'GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED', VERIFY_APPS_ENFORCED = 'VERIFY_APPS_ENFORCED', VERIFY_APPS_USER_CHOICE = 'VERIFY_APPS_USER_CHOICE' }

	export enum AdvancedSecurityOverridesUntrustedAppsPolicy { UNTRUSTED_APPS_POLICY_UNSPECIFIED = 'UNTRUSTED_APPS_POLICY_UNSPECIFIED', DISALLOW_INSTALL = 'DISALLOW_INSTALL', ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY = 'ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY', ALLOW_INSTALL_DEVICE_WIDE = 'ALLOW_INSTALL_DEVICE_WIDE' }


	/** Configuration for an always-on VPN connection. */
	export interface AlwaysOnVpnPackage {

		/** Disallows networking when the VPN is not connected. */
		lockdownEnabled?: boolean | null;

		/** The package name of the VPN app. */
		packageName?: string | null;
	}

	/** Configuration for an always-on VPN connection. */
	export interface AlwaysOnVpnPackageFormProperties {

		/** Disallows networking when the VPN is not connected. */
		lockdownEnabled: FormControl<boolean | null | undefined>,

		/** The package name of the VPN app. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateAlwaysOnVpnPackageFormGroup() {
		return new FormGroup<AlwaysOnVpnPackageFormProperties>({
			lockdownEnabled: new FormControl<boolean | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy. */
	export interface ApiLevelCondition {

		/**
		 * The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minApiLevel?: number | null;
	}

	/** A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy. */
	export interface ApiLevelConditionFormProperties {

		/**
		 * The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minApiLevel: FormControl<number | null | undefined>,
	}
	export function CreateApiLevelConditionFormGroup() {
		return new FormGroup<ApiLevelConditionFormProperties>({
			minApiLevel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a process. It contains process name, start time, app Uid, app Pid, seinfo tag, hash of the base APK. */
	export interface AppProcessInfo {

		/** SHA-256 hash of the base APK, in hexadecimal format. */
		apkSha256Hash?: string | null;

		/** Package names of all packages that are associated with the particular user ID. In most cases, this will be a single package name, the package that has been assigned that user ID. If multiple application share a UID then all packages sharing UID will be included. */
		packageNames?: Array<string>;

		/**
		 * Process ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pid?: number | null;

		/** Process name. */
		processName?: string | null;

		/** SELinux policy info. */
		seinfo?: string | null;

		/** Process start time. */
		startTime?: string | null;

		/**
		 * UID of the package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uid?: number | null;
	}

	/** Information about a process. It contains process name, start time, app Uid, app Pid, seinfo tag, hash of the base APK. */
	export interface AppProcessInfoFormProperties {

		/** SHA-256 hash of the base APK, in hexadecimal format. */
		apkSha256Hash: FormControl<string | null | undefined>,

		/**
		 * Process ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pid: FormControl<number | null | undefined>,

		/** Process name. */
		processName: FormControl<string | null | undefined>,

		/** SELinux policy info. */
		seinfo: FormControl<string | null | undefined>,

		/** Process start time. */
		startTime: FormControl<string | null | undefined>,

		/**
		 * UID of the package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uid: FormControl<number | null | undefined>,
	}
	export function CreateAppProcessInfoFormGroup() {
		return new FormGroup<AppProcessInfoFormProperties>({
			apkSha256Hash: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<number | null | undefined>(undefined),
			processName: new FormControl<string | null | undefined>(undefined),
			seinfo: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An app process was started. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface AppProcessStartEvent {

		/** Information about a process. It contains process name, start time, app Uid, app Pid, seinfo tag, hash of the base APK. */
		processInfo?: AppProcessInfo;
	}

	/** An app process was started. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface AppProcessStartEventFormProperties {
	}
	export function CreateAppProcessStartEventFormGroup() {
		return new FormGroup<AppProcessStartEventFormProperties>({
		});

	}


	/** Id to name association of a app track. */
	export interface AppTrackInfo {

		/** The track name associated with the trackId, set in the Play Console. The name is modifiable from Play Console. */
		trackAlias?: string | null;

		/** The unmodifiable unique track identifier, taken from the releaseTrackId in the URL of the Play Console page that displays the app’s track information. */
		trackId?: string | null;
	}

	/** Id to name association of a app track. */
	export interface AppTrackInfoFormProperties {

		/** The track name associated with the trackId, set in the Play Console. The name is modifiable from Play Console. */
		trackAlias: FormControl<string | null | undefined>,

		/** The unmodifiable unique track identifier, taken from the releaseTrackId in the URL of the Play Console page that displays the app’s track information. */
		trackId: FormControl<string | null | undefined>,
	}
	export function CreateAppTrackInfoFormGroup() {
		return new FormGroup<AppTrackInfoFormProperties>({
			trackAlias: new FormControl<string | null | undefined>(undefined),
			trackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This represents a single version of the app. */
	export interface AppVersion {

		/** If the value is True, it indicates that this version is a production track. */
		production?: boolean | null;

		/** Track identifiers that the app version is published in. This does not include the production track (see production instead). */
		trackIds?: Array<string>;

		/**
		 * Unique increasing identifier for the app version.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		versionCode?: number | null;

		/** The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4"). */
		versionString?: string | null;
	}

	/** This represents a single version of the app. */
	export interface AppVersionFormProperties {

		/** If the value is True, it indicates that this version is a production track. */
		production: FormControl<boolean | null | undefined>,

		/**
		 * Unique increasing identifier for the app version.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		versionCode: FormControl<number | null | undefined>,

		/** The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4"). */
		versionString: FormControl<string | null | undefined>,
	}
	export function CreateAppVersionFormGroup() {
		return new FormGroup<AppVersionFormProperties>({
			production: new FormControl<boolean | null | undefined>(undefined),
			versionCode: new FormControl<number | null | undefined>(undefined),
			versionString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an app. */
	export interface Application {

		/** Whether this app is free, free with in-app purchases, or paid. If the pricing is unspecified, this means the app is not generally available anymore (even though it might still be available to people who own it). */
		appPricing?: ApplicationAppPricing | null;

		/** Application tracks visible to the enterprise. */
		appTracks?: Array<AppTrackInfo>;

		/** Versions currently available for this app. */
		appVersions?: Array<AppVersion>;

		/** The name of the author of the apps (for example, the app developer). */
		author?: string | null;

		/** The countries which this app is available in as per ISO 3166-1 alpha-2. */
		availableCountries?: Array<string>;

		/** The app category (e.g. RACING, SOCIAL, etc.) */
		category?: string | null;

		/** The content rating for this app. */
		contentRating?: ApplicationContentRating | null;

		/** The localized promotional description, if available. */
		description?: string | null;

		/** How and to whom the package is made available. */
		distributionChannel?: ApplicationDistributionChannel | null;

		/** Noteworthy features (if any) of this app. */
		features?: Array<string>;

		/** Full app description, if available. */
		fullDescription?: string | null;

		/** A link to an image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 512 x 512. */
		iconUrl?: string | null;

		/** The set of managed properties available to be pre-configured for the app. */
		managedProperties?: Array<ManagedProperty>;

		/**
		 * The minimum Android SDK necessary to run the app.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minAndroidSdkVersion?: number | null;

		/** The name of the app in the form enterprises/{enterprise}/applications/{package_name}. */
		name?: string | null;

		/** The permissions required by the app. */
		permissions?: Array<ApplicationPermission>;

		/** A link to the (consumer) Google Play details page for the app. */
		playStoreUrl?: string | null;

		/** A localised description of the recent changes made to the app. */
		recentChanges?: string | null;

		/** A list of screenshot links representing the app. */
		screenshotUrls?: Array<string>;

		/** A link to a smaller image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 128 x 128. */
		smallIconUrl?: string | null;

		/** The title of the app. Localized. */
		title?: string | null;

		/** Output only. The approximate time (within 7 days) the app was last published. */
		updateTime?: string | null;
	}

	/** Information about an app. */
	export interface ApplicationFormProperties {

		/** Whether this app is free, free with in-app purchases, or paid. If the pricing is unspecified, this means the app is not generally available anymore (even though it might still be available to people who own it). */
		appPricing: FormControl<ApplicationAppPricing | null | undefined>,

		/** The name of the author of the apps (for example, the app developer). */
		author: FormControl<string | null | undefined>,

		/** The app category (e.g. RACING, SOCIAL, etc.) */
		category: FormControl<string | null | undefined>,

		/** The content rating for this app. */
		contentRating: FormControl<ApplicationContentRating | null | undefined>,

		/** The localized promotional description, if available. */
		description: FormControl<string | null | undefined>,

		/** How and to whom the package is made available. */
		distributionChannel: FormControl<ApplicationDistributionChannel | null | undefined>,

		/** Full app description, if available. */
		fullDescription: FormControl<string | null | undefined>,

		/** A link to an image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 512 x 512. */
		iconUrl: FormControl<string | null | undefined>,

		/**
		 * The minimum Android SDK necessary to run the app.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minAndroidSdkVersion: FormControl<number | null | undefined>,

		/** The name of the app in the form enterprises/{enterprise}/applications/{package_name}. */
		name: FormControl<string | null | undefined>,

		/** A link to the (consumer) Google Play details page for the app. */
		playStoreUrl: FormControl<string | null | undefined>,

		/** A localised description of the recent changes made to the app. */
		recentChanges: FormControl<string | null | undefined>,

		/** A link to a smaller image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 128 x 128. */
		smallIconUrl: FormControl<string | null | undefined>,

		/** The title of the app. Localized. */
		title: FormControl<string | null | undefined>,

		/** Output only. The approximate time (within 7 days) the app was last published. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			appPricing: new FormControl<ApplicationAppPricing | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			contentRating: new FormControl<ApplicationContentRating | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			distributionChannel: new FormControl<ApplicationDistributionChannel | null | undefined>(undefined),
			fullDescription: new FormControl<string | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			minAndroidSdkVersion: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			playStoreUrl: new FormControl<string | null | undefined>(undefined),
			recentChanges: new FormControl<string | null | undefined>(undefined),
			smallIconUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationAppPricing { APP_PRICING_UNSPECIFIED = 'APP_PRICING_UNSPECIFIED', FREE = 'FREE', FREE_WITH_IN_APP_PURCHASE = 'FREE_WITH_IN_APP_PURCHASE', PAID = 'PAID' }

	export enum ApplicationContentRating { CONTENT_RATING_UNSPECIFIED = 'CONTENT_RATING_UNSPECIFIED', THREE_YEARS = 'THREE_YEARS', SEVEN_YEARS = 'SEVEN_YEARS', TWELVE_YEARS = 'TWELVE_YEARS', SIXTEEN_YEARS = 'SIXTEEN_YEARS', EIGHTEEN_YEARS = 'EIGHTEEN_YEARS' }

	export enum ApplicationDistributionChannel { DISTRIBUTION_CHANNEL_UNSPECIFIED = 'DISTRIBUTION_CHANNEL_UNSPECIFIED', PUBLIC_GOOGLE_HOSTED = 'PUBLIC_GOOGLE_HOSTED', PRIVATE_GOOGLE_HOSTED = 'PRIVATE_GOOGLE_HOSTED', PRIVATE_SELF_HOSTED = 'PRIVATE_SELF_HOSTED' }


	/** Managed property. */
	export interface ManagedProperty {

		/** The default value of the property. BUNDLE_ARRAY properties don't have a default value. */
		defaultValue?: any;

		/** A longer description of the property, providing more detail of what it affects. Localized. */
		description?: string | null;

		/** For CHOICE or MULTISELECT properties, the list of possible entries. */
		entries?: Array<ManagedPropertyEntry>;

		/** The unique key that the app uses to identify the property, e.g. "com.google.android.gm.fieldname". */
		key?: string | null;

		/** For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep. */
		nestedProperties?: Array<ManagedProperty>;

		/** The name of the property. Localized. */
		title?: string | null;

		/** The type of the property. */
		type?: ManagedPropertyType | null;
	}

	/** Managed property. */
	export interface ManagedPropertyFormProperties {

		/** The default value of the property. BUNDLE_ARRAY properties don't have a default value. */
		defaultValue: FormControl<any | null | undefined>,

		/** A longer description of the property, providing more detail of what it affects. Localized. */
		description: FormControl<string | null | undefined>,

		/** The unique key that the app uses to identify the property, e.g. "com.google.android.gm.fieldname". */
		key: FormControl<string | null | undefined>,

		/** The name of the property. Localized. */
		title: FormControl<string | null | undefined>,

		/** The type of the property. */
		type: FormControl<ManagedPropertyType | null | undefined>,
	}
	export function CreateManagedPropertyFormGroup() {
		return new FormGroup<ManagedPropertyFormProperties>({
			defaultValue: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ManagedPropertyType | null | undefined>(undefined),
		});

	}


	/** An entry of a managed property. */
	export interface ManagedPropertyEntry {

		/** The human-readable name of the value. Localized. */
		name?: string | null;

		/** The machine-readable value of the entry, which should be used in the configuration. Not localized. */
		value?: string | null;
	}

	/** An entry of a managed property. */
	export interface ManagedPropertyEntryFormProperties {

		/** The human-readable name of the value. Localized. */
		name: FormControl<string | null | undefined>,

		/** The machine-readable value of the entry, which should be used in the configuration. Not localized. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateManagedPropertyEntryFormGroup() {
		return new FormGroup<ManagedPropertyEntryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedPropertyType { MANAGED_PROPERTY_TYPE_UNSPECIFIED = 'MANAGED_PROPERTY_TYPE_UNSPECIFIED', BOOL = 'BOOL', STRING = 'STRING', INTEGER = 'INTEGER', CHOICE = 'CHOICE', MULTISELECT = 'MULTISELECT', HIDDEN = 'HIDDEN', BUNDLE = 'BUNDLE', BUNDLE_ARRAY = 'BUNDLE_ARRAY' }


	/** A permission required by the app. */
	export interface ApplicationPermission {

		/** A longer description of the permission, providing more detail on what it affects. Localized. */
		description?: string | null;

		/** The name of the permission. Localized. */
		name?: string | null;

		/** An opaque string uniquely identifying the permission. Not localized. */
		permissionId?: string | null;
	}

	/** A permission required by the app. */
	export interface ApplicationPermissionFormProperties {

		/** A longer description of the permission, providing more detail on what it affects. Localized. */
		description: FormControl<string | null | undefined>,

		/** The name of the permission. Localized. */
		name: FormControl<string | null | undefined>,

		/** An opaque string uniquely identifying the permission. Not localized. */
		permissionId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPermissionFormGroup() {
		return new FormGroup<ApplicationPermissionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permissionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An app-related event. */
	export interface ApplicationEvent {

		/** The creation time of the event. */
		createTime?: string | null;

		/** App event type. */
		eventType?: ApplicationEventEventType | null;
	}

	/** An app-related event. */
	export interface ApplicationEventFormProperties {

		/** The creation time of the event. */
		createTime: FormControl<string | null | undefined>,

		/** App event type. */
		eventType: FormControl<ApplicationEventEventType | null | undefined>,
	}
	export function CreateApplicationEventFormGroup() {
		return new FormGroup<ApplicationEventFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<ApplicationEventEventType | null | undefined>(undefined),
		});

	}

	export enum ApplicationEventEventType { APPLICATION_EVENT_TYPE_UNSPECIFIED = 'APPLICATION_EVENT_TYPE_UNSPECIFIED', INSTALLED = 'INSTALLED', CHANGED = 'CHANGED', DATA_CLEARED = 'DATA_CLEARED', REMOVED = 'REMOVED', REPLACED = 'REPLACED', RESTARTED = 'RESTARTED', PINNED = 'PINNED', UNPINNED = 'UNPINNED' }


	/** Policy for an individual app. Note: Application availability on a given device cannot be changed using this policy if installAppsDisabled is enabled. The maximum number of applications that you can specify per policy is 3,000. */
	export interface ApplicationPolicy {

		/** List of the app’s track IDs that a device belonging to the enterprise can access. If the list contains multiple track IDs, devices receive the latest version among all accessible tracks. If the list contains no track IDs, devices only have access to the app’s production track. More details about each track are available in AppTrackInfo. */
		accessibleTrackIds?: Array<string>;

		/** Specifies whether the app is allowed networking when the VPN is not connected and alwaysOnVpnPackage.lockdownEnabled is enabled. If set to VPN_LOCKDOWN_ENFORCED, the app is not allowed networking, and if set to VPN_LOCKDOWN_EXEMPTION, the app is allowed networking. Only supported on devices running Android 10 and above. If this is not supported by the device, the device will contain a NonComplianceDetail with non_compliance_reason set to API_LEVEL and a fieldPath. If this is not applicable to the app, the device will contain a NonComplianceDetail with non_compliance_reason set to UNSUPPORTED and a fieldPath. The fieldPath is set to applications[i].alwaysOnVpnLockdownExemption, where i is the index of the package in the applications policy. */
		alwaysOnVpnLockdownExemption?: ApplicationPolicyAlwaysOnVpnLockdownExemption | null;

		/** Controls the auto-update mode for the app. */
		autoUpdateMode?: ApplicationPolicyAutoUpdateMode | null;

		/** Controls whether the app can communicate with itself across a device’s work and personal profiles, subject to user consent. */
		connectedWorkAndPersonalApp?: ApplicationPolicyConnectedWorkAndPersonalApp | null;

		/** The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps. */
		defaultPermissionPolicy?: ApplicationPolicyDefaultPermissionPolicy | null;

		/** The scopes delegated to the app from Android Device Policy. These provide additional privileges for the applications they are applied to. */
		delegatedScopes?: Array<string>;

		/** Whether the app is disabled. When disabled, the app data is still preserved. */
		disabled?: boolean | null;

		/** Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline. For Android versions 13 and above, extension apps are exempt from battery restrictions so will not be placed into the restricted App Standby Bucket (https://developer.android.com/topic/performance/appstandby#restricted-bucket). Extensions apps are also protected against users clearing their data or force-closing the application, although admins can continue to use the clear app data command (https://developer.android.com/management/reference/rest/v1/enterprises.devices/issueCommand#CommandType) on extension apps if needed for Android 13 and above. */
		extensionConfig?: ExtensionConfig;

		/** The type of installation to perform. */
		installType?: ApplicationPolicyInstallType | null;

		/** Whether the app is allowed to lock itself in full-screen mode. DEPRECATED. Use InstallType KIOSK or kioskCustomLauncherEnabled to configure a dedicated device. */
		lockTaskAllowed?: boolean | null;

		/** Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: *type* *JSON value* BOOL true or false STRING string INTEGER number CHOICE string MULTISELECT array of strings HIDDEN string BUNDLE_ARRAY array of objects */
		managedConfiguration?: {[id: string]: any };

		/** The managed configurations template for the app, saved from the managed configurations iframe. */
		managedConfigurationTemplate?: ManagedConfigurationTemplate;

		/**
		 * The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumVersionCode?: number | null;

		/** The package name of the app. For example, com.google.android.youtube for the YouTube app. */
		packageName?: string | null;

		/** Explicit permission grants or denials for the app. These values override the default_permission_policy and permission_grants which apply to all apps. */
		permissionGrants?: Array<PermissionGrant>;

		/** Specifies whether the app installed in the work profile is allowed to add widgets to the home screen. */
		workProfileWidgets?: ApplicationPolicyWorkProfileWidgets | null;
	}

	/** Policy for an individual app. Note: Application availability on a given device cannot be changed using this policy if installAppsDisabled is enabled. The maximum number of applications that you can specify per policy is 3,000. */
	export interface ApplicationPolicyFormProperties {

		/** Specifies whether the app is allowed networking when the VPN is not connected and alwaysOnVpnPackage.lockdownEnabled is enabled. If set to VPN_LOCKDOWN_ENFORCED, the app is not allowed networking, and if set to VPN_LOCKDOWN_EXEMPTION, the app is allowed networking. Only supported on devices running Android 10 and above. If this is not supported by the device, the device will contain a NonComplianceDetail with non_compliance_reason set to API_LEVEL and a fieldPath. If this is not applicable to the app, the device will contain a NonComplianceDetail with non_compliance_reason set to UNSUPPORTED and a fieldPath. The fieldPath is set to applications[i].alwaysOnVpnLockdownExemption, where i is the index of the package in the applications policy. */
		alwaysOnVpnLockdownExemption: FormControl<ApplicationPolicyAlwaysOnVpnLockdownExemption | null | undefined>,

		/** Controls the auto-update mode for the app. */
		autoUpdateMode: FormControl<ApplicationPolicyAutoUpdateMode | null | undefined>,

		/** Controls whether the app can communicate with itself across a device’s work and personal profiles, subject to user consent. */
		connectedWorkAndPersonalApp: FormControl<ApplicationPolicyConnectedWorkAndPersonalApp | null | undefined>,

		/** The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps. */
		defaultPermissionPolicy: FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>,

		/** Whether the app is disabled. When disabled, the app data is still preserved. */
		disabled: FormControl<boolean | null | undefined>,

		/** The type of installation to perform. */
		installType: FormControl<ApplicationPolicyInstallType | null | undefined>,

		/** Whether the app is allowed to lock itself in full-screen mode. DEPRECATED. Use InstallType KIOSK or kioskCustomLauncherEnabled to configure a dedicated device. */
		lockTaskAllowed: FormControl<boolean | null | undefined>,

		/** Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: *type* *JSON value* BOOL true or false STRING string INTEGER number CHOICE string MULTISELECT array of strings HIDDEN string BUNDLE_ARRAY array of objects */
		managedConfiguration: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumVersionCode: FormControl<number | null | undefined>,

		/** The package name of the app. For example, com.google.android.youtube for the YouTube app. */
		packageName: FormControl<string | null | undefined>,

		/** Specifies whether the app installed in the work profile is allowed to add widgets to the home screen. */
		workProfileWidgets: FormControl<ApplicationPolicyWorkProfileWidgets | null | undefined>,
	}
	export function CreateApplicationPolicyFormGroup() {
		return new FormGroup<ApplicationPolicyFormProperties>({
			alwaysOnVpnLockdownExemption: new FormControl<ApplicationPolicyAlwaysOnVpnLockdownExemption | null | undefined>(undefined),
			autoUpdateMode: new FormControl<ApplicationPolicyAutoUpdateMode | null | undefined>(undefined),
			connectedWorkAndPersonalApp: new FormControl<ApplicationPolicyConnectedWorkAndPersonalApp | null | undefined>(undefined),
			defaultPermissionPolicy: new FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			installType: new FormControl<ApplicationPolicyInstallType | null | undefined>(undefined),
			lockTaskAllowed: new FormControl<boolean | null | undefined>(undefined),
			managedConfiguration: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			minimumVersionCode: new FormControl<number | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			workProfileWidgets: new FormControl<ApplicationPolicyWorkProfileWidgets | null | undefined>(undefined),
		});

	}

	export enum ApplicationPolicyAlwaysOnVpnLockdownExemption { ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED = 'ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED', VPN_LOCKDOWN_ENFORCED = 'VPN_LOCKDOWN_ENFORCED', VPN_LOCKDOWN_EXEMPTION = 'VPN_LOCKDOWN_EXEMPTION' }

	export enum ApplicationPolicyAutoUpdateMode { AUTO_UPDATE_MODE_UNSPECIFIED = 'AUTO_UPDATE_MODE_UNSPECIFIED', AUTO_UPDATE_DEFAULT = 'AUTO_UPDATE_DEFAULT', AUTO_UPDATE_POSTPONED = 'AUTO_UPDATE_POSTPONED', AUTO_UPDATE_HIGH_PRIORITY = 'AUTO_UPDATE_HIGH_PRIORITY' }

	export enum ApplicationPolicyConnectedWorkAndPersonalApp { CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED = 'CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED', CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED = 'CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED', CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED = 'CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED' }

	export enum ApplicationPolicyDefaultPermissionPolicy { PERMISSION_POLICY_UNSPECIFIED = 'PERMISSION_POLICY_UNSPECIFIED', PROMPT = 'PROMPT', GRANT = 'GRANT', DENY = 'DENY' }


	/** Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline. For Android versions 13 and above, extension apps are exempt from battery restrictions so will not be placed into the restricted App Standby Bucket (https://developer.android.com/topic/performance/appstandby#restricted-bucket). Extensions apps are also protected against users clearing their data or force-closing the application, although admins can continue to use the clear app data command (https://developer.android.com/management/reference/rest/v1/enterprises.devices/issueCommand#CommandType) on extension apps if needed for Android 13 and above. */
	export interface ExtensionConfig {

		/** Fully qualified class name of the receiver service class for Android Device Policy to notify the extension app of any local command status updates. */
		notificationReceiver?: string | null;

		/** Hex-encoded SHA-256 hash of the signing certificate of the extension app. Only hexadecimal string representations of 64 characters are valid.If not specified, the signature for the corresponding package name is obtained from the Play Store instead.If this list is empty, the signature of the extension app on the device must match the signature obtained from the Play Store for the app to be able to communicate with Android Device Policy.If this list is not empty, the signature of the extension app on the device must match one of the entries in this list for the app to be able to communicate with Android Device Policy.In production use cases, it is recommended to leave this empty. */
		signingKeyFingerprintsSha256?: Array<string>;
	}

	/** Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline. For Android versions 13 and above, extension apps are exempt from battery restrictions so will not be placed into the restricted App Standby Bucket (https://developer.android.com/topic/performance/appstandby#restricted-bucket). Extensions apps are also protected against users clearing their data or force-closing the application, although admins can continue to use the clear app data command (https://developer.android.com/management/reference/rest/v1/enterprises.devices/issueCommand#CommandType) on extension apps if needed for Android 13 and above. */
	export interface ExtensionConfigFormProperties {

		/** Fully qualified class name of the receiver service class for Android Device Policy to notify the extension app of any local command status updates. */
		notificationReceiver: FormControl<string | null | undefined>,
	}
	export function CreateExtensionConfigFormGroup() {
		return new FormGroup<ExtensionConfigFormProperties>({
			notificationReceiver: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationPolicyInstallType { INSTALL_TYPE_UNSPECIFIED = 'INSTALL_TYPE_UNSPECIFIED', PREINSTALLED = 'PREINSTALLED', FORCE_INSTALLED = 'FORCE_INSTALLED', BLOCKED = 'BLOCKED', AVAILABLE = 'AVAILABLE', REQUIRED_FOR_SETUP = 'REQUIRED_FOR_SETUP', KIOSK = 'KIOSK' }


	/** The managed configurations template for the app, saved from the managed configurations iframe. */
	export interface ManagedConfigurationTemplate {

		/** Optional, a map containing configuration variables defined for the configuration. */
		configurationVariables?: {[id: string]: string };

		/** The ID of the managed configurations template. */
		templateId?: string | null;
	}

	/** The managed configurations template for the app, saved from the managed configurations iframe. */
	export interface ManagedConfigurationTemplateFormProperties {

		/** Optional, a map containing configuration variables defined for the configuration. */
		configurationVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** The ID of the managed configurations template. */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateManagedConfigurationTemplateFormGroup() {
		return new FormGroup<ManagedConfigurationTemplateFormProperties>({
			configurationVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for an Android permission and its grant state. */
	export interface PermissionGrant {

		/** The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR. */
		permission?: string | null;

		/** The policy for granting the permission. */
		policy?: ApplicationPolicyDefaultPermissionPolicy | null;
	}

	/** Configuration for an Android permission and its grant state. */
	export interface PermissionGrantFormProperties {

		/** The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR. */
		permission: FormControl<string | null | undefined>,

		/** The policy for granting the permission. */
		policy: FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>,
	}
	export function CreatePermissionGrantFormGroup() {
		return new FormGroup<PermissionGrantFormProperties>({
			permission: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>(undefined),
		});

	}

	export enum ApplicationPolicyWorkProfileWidgets { WORK_PROFILE_WIDGETS_UNSPECIFIED = 'WORK_PROFILE_WIDGETS_UNSPECIFIED', WORK_PROFILE_WIDGETS_ALLOWED = 'WORK_PROFILE_WIDGETS_ALLOWED', WORK_PROFILE_WIDGETS_DISALLOWED = 'WORK_PROFILE_WIDGETS_DISALLOWED' }


	/** Information reported about an installed app. */
	export interface ApplicationReport {

		/** The source of the package. */
		applicationSource?: ApplicationReportApplicationSource | null;

		/** The display name of the app. */
		displayName?: string | null;

		/** The list of app events which have occurred in the last 30 hours. */
		events?: Array<ApplicationEvent>;

		/** The package name of the app that installed this app. */
		installerPackageName?: string | null;

		/** List of keyed app states reported by the app. */
		keyedAppStates?: Array<KeyedAppState>;

		/** Package name of the app. */
		packageName?: string | null;

		/** The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number. */
		packageSha256Hash?: string | null;

		/** The SHA-1 hash of each android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the app package. Each byte of each hash value is represented as a two-digit hexadecimal number. */
		signingKeyCertFingerprints?: Array<string>;

		/** Application state. */
		state?: ApplicationReportState | null;

		/** Whether the app is user facing. */
		userFacingType?: ApplicationReportUserFacingType | null;

		/**
		 * The app version code, which can be used to determine whether one version is more recent than another.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		versionCode?: number | null;

		/** The app version as displayed to the user. */
		versionName?: string | null;
	}

	/** Information reported about an installed app. */
	export interface ApplicationReportFormProperties {

		/** The source of the package. */
		applicationSource: FormControl<ApplicationReportApplicationSource | null | undefined>,

		/** The display name of the app. */
		displayName: FormControl<string | null | undefined>,

		/** The package name of the app that installed this app. */
		installerPackageName: FormControl<string | null | undefined>,

		/** Package name of the app. */
		packageName: FormControl<string | null | undefined>,

		/** The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number. */
		packageSha256Hash: FormControl<string | null | undefined>,

		/** Application state. */
		state: FormControl<ApplicationReportState | null | undefined>,

		/** Whether the app is user facing. */
		userFacingType: FormControl<ApplicationReportUserFacingType | null | undefined>,

		/**
		 * The app version code, which can be used to determine whether one version is more recent than another.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		versionCode: FormControl<number | null | undefined>,

		/** The app version as displayed to the user. */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateApplicationReportFormGroup() {
		return new FormGroup<ApplicationReportFormProperties>({
			applicationSource: new FormControl<ApplicationReportApplicationSource | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			installerPackageName: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			packageSha256Hash: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ApplicationReportState | null | undefined>(undefined),
			userFacingType: new FormControl<ApplicationReportUserFacingType | null | undefined>(undefined),
			versionCode: new FormControl<number | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationReportApplicationSource { APPLICATION_SOURCE_UNSPECIFIED = 'APPLICATION_SOURCE_UNSPECIFIED', SYSTEM_APP_FACTORY_VERSION = 'SYSTEM_APP_FACTORY_VERSION', SYSTEM_APP_UPDATED_VERSION = 'SYSTEM_APP_UPDATED_VERSION', INSTALLED_FROM_PLAY_STORE = 'INSTALLED_FROM_PLAY_STORE' }


	/** Keyed app state reported by the app. */
	export interface KeyedAppState {

		/** The creation time of the app state on the device. */
		createTime?: string | null;

		/** Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data < 10”). */
		data?: string | null;

		/** The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key. */
		key?: string | null;

		/** The time the app state was most recently updated. */
		lastUpdateTime?: string | null;

		/** Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message. */
		message?: string | null;

		/** The severity of the app state. */
		severity?: KeyedAppStateSeverity | null;
	}

	/** Keyed app state reported by the app. */
	export interface KeyedAppStateFormProperties {

		/** The creation time of the app state on the device. */
		createTime: FormControl<string | null | undefined>,

		/** Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data < 10”). */
		data: FormControl<string | null | undefined>,

		/** The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key. */
		key: FormControl<string | null | undefined>,

		/** The time the app state was most recently updated. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message. */
		message: FormControl<string | null | undefined>,

		/** The severity of the app state. */
		severity: FormControl<KeyedAppStateSeverity | null | undefined>,
	}
	export function CreateKeyedAppStateFormGroup() {
		return new FormGroup<KeyedAppStateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<KeyedAppStateSeverity | null | undefined>(undefined),
		});

	}

	export enum KeyedAppStateSeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', INFO = 'INFO', ERROR = 'ERROR' }

	export enum ApplicationReportState { APPLICATION_STATE_UNSPECIFIED = 'APPLICATION_STATE_UNSPECIFIED', REMOVED = 'REMOVED', INSTALLED = 'INSTALLED' }

	export enum ApplicationReportUserFacingType { USER_FACING_TYPE_UNSPECIFIED = 'USER_FACING_TYPE_UNSPECIFIED', NOT_USER_FACING = 'NOT_USER_FACING', USER_FACING = 'USER_FACING' }


	/** Settings controlling the behavior of application reports. */
	export interface ApplicationReportingSettings {

		/** Whether removed apps are included in application reports. */
		includeRemovedApps?: boolean | null;
	}

	/** Settings controlling the behavior of application reports. */
	export interface ApplicationReportingSettingsFormProperties {

		/** Whether removed apps are included in application reports. */
		includeRemovedApps: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationReportingSettingsFormGroup() {
		return new FormGroup<ApplicationReportingSettingsFormProperties>({
			includeRemovedApps: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Batched event logs of events from the device. */
	export interface BatchUsageLogEvents {

		/** The name of the device in the form ‘enterprises/{enterpriseId}/devices/{deviceId}’ */
		device?: string | null;

		/** The device timestamp when the batch of events were collected from the device. */
		retrievalTime?: string | null;

		/** The list of UsageLogEvent that were reported by the device, sorted chronologically by the event time. */
		usageLogEvents?: Array<UsageLogEvent>;

		/** The resource name of the user that owns this device in the form ‘enterprises/{enterpriseId}/users/{userId}’. */
		user?: string | null;
	}

	/** Batched event logs of events from the device. */
	export interface BatchUsageLogEventsFormProperties {

		/** The name of the device in the form ‘enterprises/{enterpriseId}/devices/{deviceId}’ */
		device: FormControl<string | null | undefined>,

		/** The device timestamp when the batch of events were collected from the device. */
		retrievalTime: FormControl<string | null | undefined>,

		/** The resource name of the user that owns this device in the form ‘enterprises/{enterpriseId}/users/{userId}’. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateBatchUsageLogEventsFormGroup() {
		return new FormGroup<BatchUsageLogEventsFormProperties>({
			device: new FormControl<string | null | undefined>(undefined),
			retrievalTime: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event logged on the device. */
	export interface UsageLogEvent {

		/** A shell command was issued over ADB via “adb shell command”. */
		adbShellCommandEvent?: AdbShellCommandEvent;

		/** An ADB interactive shell was opened via “adb shell”. Intentionally empty. */
		adbShellInteractiveEvent?: AdbShellInteractiveEvent;

		/** An app process was started. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
		appProcessStartEvent?: AppProcessStartEvent;

		/** A new root certificate was installed into the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
		certAuthorityInstalledEvent?: CertAuthorityInstalledEvent;

		/** A root certificate was removed from the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
		certAuthorityRemovedEvent?: CertAuthorityRemovedEvent;

		/** An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate. */
		certValidationFailureEvent?: CertValidationFailureEvent;

		/** A TCP connect event was initiated through the standard network stack. */
		connectEvent?: ConnectEvent;

		/** Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted. */
		cryptoSelfTestCompletedEvent?: CryptoSelfTestCompletedEvent;

		/** A DNS lookup event was initiated through the standard network stack. */
		dnsEvent?: DnsEvent;

		/** Represents that the device has completed enrollment. User should be in the launcher at this point, device at this point will be compliant and all setup steps have been completed. Intentionally empty. */
		enrollmentCompleteEvent?: EnrollmentCompleteEvent;

		/** Unique id of the event. */
		eventId?: string | null;

		/** Device timestamp when the event was logged. */
		eventTime?: string | null;

		/** The particular usage log event type that was reported on the device. Use this to determine which event field to access. */
		eventType?: UsageLogEventEventType | null;

		/** A file was downloaded from the device. */
		filePulledEvent?: FilePulledEvent;

		/** A file was uploaded onto the device. */
		filePushedEvent?: FilePushedEvent;

		/** A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
		keyDestructionEvent?: KeyDestructionEvent;

		/** A cryptographic key including user installed, admin installed and system maintained private key is installed on the device either by the user or management.This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
		keyGeneratedEvent?: KeyGeneratedEvent;

		/** A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
		keyImportEvent?: KeyImportEvent;

		/** A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
		keyIntegrityViolationEvent?: KeyIntegrityViolationEvent;

		/** An attempt was made to unlock the device. */
		keyguardDismissAuthAttemptEvent?: KeyguardDismissAuthAttemptEvent;

		/** The keyguard was dismissed. Intentionally empty. */
		keyguardDismissedEvent?: KeyguardDismissedEvent;

		/** The device was locked either by user or timeout. Intentionally empty. */
		keyguardSecuredEvent?: KeyguardSecuredEvent;

		/** The usageLog buffer on the device has reached 90% of its capacity, therefore older events may be dropped. Intentionally empty. */
		logBufferSizeCriticalEvent?: LogBufferSizeCriticalEvent;

		/** usageLog policy has been enabled. Intentionally empty. */
		loggingStartedEvent?: LoggingStartedEvent;

		/** usageLog policy has been disabled. Intentionally empty. */
		loggingStoppedEvent?: LoggingStoppedEvent;

		/** A lost mode event containing the device location and battery level as a percentage. */
		lostModeLocationEvent?: LostModeLocationEvent;

		/** An event indicating an outgoing phone call has been made when a device is in lost mode. Intentionally empty. */
		lostModeOutgoingPhoneCallEvent?: LostModeOutgoingPhoneCallEvent;

		/** Removable media was mounted. */
		mediaMountEvent?: MediaMountEvent;

		/** Removable media was unmounted. */
		mediaUnmountEvent?: MediaUnmountEvent;

		/** Device was shutdown. Intentionally empty. */
		osShutdownEvent?: OsShutdownEvent;

		/** Device was started. */
		osStartupEvent?: OsStartupEvent;

		/** The device or profile has been remotely locked via the LOCK command. */
		remoteLockEvent?: RemoteLockEvent;

		/** A lost mode event indicating the user has attempted to stop lost mode. */
		stopLostModeUserAttemptEvent?: StopLostModeUserAttemptEvent;

		/** The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Intentionally empty. */
		wipeFailureEvent?: WipeFailureEvent;
	}

	/** An event logged on the device. */
	export interface UsageLogEventFormProperties {

		/** Unique id of the event. */
		eventId: FormControl<string | null | undefined>,

		/** Device timestamp when the event was logged. */
		eventTime: FormControl<string | null | undefined>,

		/** The particular usage log event type that was reported on the device. Use this to determine which event field to access. */
		eventType: FormControl<UsageLogEventEventType | null | undefined>,
	}
	export function CreateUsageLogEventFormGroup() {
		return new FormGroup<UsageLogEventFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<UsageLogEventEventType | null | undefined>(undefined),
		});

	}


	/** A new root certificate was installed into the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface CertAuthorityInstalledEvent {

		/** Subject of the certificate. */
		certificate?: string | null;

		/** Whether the installation event succeeded. */
		success?: boolean | null;

		/**
		 * The user in which the certificate install event happened. Only available for devices running Android 11 and above.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userId?: number | null;
	}

	/** A new root certificate was installed into the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface CertAuthorityInstalledEventFormProperties {

		/** Subject of the certificate. */
		certificate: FormControl<string | null | undefined>,

		/** Whether the installation event succeeded. */
		success: FormControl<boolean | null | undefined>,

		/**
		 * The user in which the certificate install event happened. Only available for devices running Android 11 and above.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userId: FormControl<number | null | undefined>,
	}
	export function CreateCertAuthorityInstalledEventFormGroup() {
		return new FormGroup<CertAuthorityInstalledEventFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A root certificate was removed from the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface CertAuthorityRemovedEvent {

		/** Subject of the certificate. */
		certificate?: string | null;

		/** Whether the removal succeeded. */
		success?: boolean | null;

		/**
		 * The user in which the certificate removal event occurred. Only available for devices running Android 11 and above.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userId?: number | null;
	}

	/** A root certificate was removed from the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface CertAuthorityRemovedEventFormProperties {

		/** Subject of the certificate. */
		certificate: FormControl<string | null | undefined>,

		/** Whether the removal succeeded. */
		success: FormControl<boolean | null | undefined>,

		/**
		 * The user in which the certificate removal event occurred. Only available for devices running Android 11 and above.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userId: FormControl<number | null | undefined>,
	}
	export function CreateCertAuthorityRemovedEventFormGroup() {
		return new FormGroup<CertAuthorityRemovedEventFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate. */
	export interface CertValidationFailureEvent {

		/** The reason why certification validation failed. */
		failureReason?: string | null;
	}

	/** An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate. */
	export interface CertValidationFailureEventFormProperties {

		/** The reason why certification validation failed. */
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateCertValidationFailureEventFormGroup() {
		return new FormGroup<CertValidationFailureEventFormProperties>({
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A TCP connect event was initiated through the standard network stack. */
	export interface ConnectEvent {

		/** The destination IP address of the connect call. */
		destinationIpAddress?: string | null;

		/**
		 * The destination port of the connect call.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		destinationPort?: number | null;

		/** The package name of the UID that performed the connect call. */
		packageName?: string | null;
	}

	/** A TCP connect event was initiated through the standard network stack. */
	export interface ConnectEventFormProperties {

		/** The destination IP address of the connect call. */
		destinationIpAddress: FormControl<string | null | undefined>,

		/**
		 * The destination port of the connect call.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		destinationPort: FormControl<number | null | undefined>,

		/** The package name of the UID that performed the connect call. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateConnectEventFormGroup() {
		return new FormGroup<ConnectEventFormProperties>({
			destinationIpAddress: new FormControl<string | null | undefined>(undefined),
			destinationPort: new FormControl<number | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted. */
	export interface CryptoSelfTestCompletedEvent {

		/** Whether the test succeeded. */
		success?: boolean | null;
	}

	/** Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted. */
	export interface CryptoSelfTestCompletedEventFormProperties {

		/** Whether the test succeeded. */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCryptoSelfTestCompletedEventFormGroup() {
		return new FormGroup<CryptoSelfTestCompletedEventFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A DNS lookup event was initiated through the standard network stack. */
	export interface DnsEvent {

		/** The hostname that was looked up. */
		hostname?: string | null;

		/** The (possibly truncated) list of the IP addresses returned for DNS lookup (max 10 IPv4 or IPv6 addresses). */
		ipAddresses?: Array<string>;

		/** The package name of the UID that performed the DNS lookup. */
		packageName?: string | null;

		/** The number of IP addresses returned from the DNS lookup event. May be higher than the amount of ip_addresses if there were too many addresses to log. */
		totalIpAddressesReturned?: string | null;
	}

	/** A DNS lookup event was initiated through the standard network stack. */
	export interface DnsEventFormProperties {

		/** The hostname that was looked up. */
		hostname: FormControl<string | null | undefined>,

		/** The package name of the UID that performed the DNS lookup. */
		packageName: FormControl<string | null | undefined>,

		/** The number of IP addresses returned from the DNS lookup event. May be higher than the amount of ip_addresses if there were too many addresses to log. */
		totalIpAddressesReturned: FormControl<string | null | undefined>,
	}
	export function CreateDnsEventFormGroup() {
		return new FormGroup<DnsEventFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			totalIpAddressesReturned: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents that the device has completed enrollment. User should be in the launcher at this point, device at this point will be compliant and all setup steps have been completed. Intentionally empty. */
	export interface EnrollmentCompleteEvent {
	}

	/** Represents that the device has completed enrollment. User should be in the launcher at this point, device at this point will be compliant and all setup steps have been completed. Intentionally empty. */
	export interface EnrollmentCompleteEventFormProperties {
	}
	export function CreateEnrollmentCompleteEventFormGroup() {
		return new FormGroup<EnrollmentCompleteEventFormProperties>({
		});

	}

	export enum UsageLogEventEventType { EVENT_TYPE_UNSPECIFIED = 'EVENT_TYPE_UNSPECIFIED', ADB_SHELL_COMMAND = 'ADB_SHELL_COMMAND', ADB_SHELL_INTERACTIVE = 'ADB_SHELL_INTERACTIVE', APP_PROCESS_START = 'APP_PROCESS_START', KEYGUARD_DISMISSED = 'KEYGUARD_DISMISSED', KEYGUARD_DISMISS_AUTH_ATTEMPT = 'KEYGUARD_DISMISS_AUTH_ATTEMPT', KEYGUARD_SECURED = 'KEYGUARD_SECURED', FILE_PULLED = 'FILE_PULLED', FILE_PUSHED = 'FILE_PUSHED', CERT_AUTHORITY_INSTALLED = 'CERT_AUTHORITY_INSTALLED', CERT_AUTHORITY_REMOVED = 'CERT_AUTHORITY_REMOVED', CERT_VALIDATION_FAILURE = 'CERT_VALIDATION_FAILURE', CRYPTO_SELF_TEST_COMPLETED = 'CRYPTO_SELF_TEST_COMPLETED', KEY_DESTRUCTION = 'KEY_DESTRUCTION', KEY_GENERATED = 'KEY_GENERATED', KEY_IMPORT = 'KEY_IMPORT', KEY_INTEGRITY_VIOLATION = 'KEY_INTEGRITY_VIOLATION', LOGGING_STARTED = 'LOGGING_STARTED', LOGGING_STOPPED = 'LOGGING_STOPPED', LOG_BUFFER_SIZE_CRITICAL = 'LOG_BUFFER_SIZE_CRITICAL', MEDIA_MOUNT = 'MEDIA_MOUNT', MEDIA_UNMOUNT = 'MEDIA_UNMOUNT', OS_SHUTDOWN = 'OS_SHUTDOWN', OS_STARTUP = 'OS_STARTUP', REMOTE_LOCK = 'REMOTE_LOCK', WIPE_FAILURE = 'WIPE_FAILURE', CONNECT = 'CONNECT', DNS = 'DNS', STOP_LOST_MODE_USER_ATTEMPT = 'STOP_LOST_MODE_USER_ATTEMPT', LOST_MODE_OUTGOING_PHONE_CALL = 'LOST_MODE_OUTGOING_PHONE_CALL', LOST_MODE_LOCATION = 'LOST_MODE_LOCATION', ENROLLMENT_COMPLETE = 'ENROLLMENT_COMPLETE' }


	/** A file was downloaded from the device. */
	export interface FilePulledEvent {

		/** The path of the file being pulled. */
		filePath?: string | null;
	}

	/** A file was downloaded from the device. */
	export interface FilePulledEventFormProperties {

		/** The path of the file being pulled. */
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateFilePulledEventFormGroup() {
		return new FormGroup<FilePulledEventFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A file was uploaded onto the device. */
	export interface FilePushedEvent {

		/** The path of the file being pushed. */
		filePath?: string | null;
	}

	/** A file was uploaded onto the device. */
	export interface FilePushedEventFormProperties {

		/** The path of the file being pushed. */
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateFilePushedEventFormGroup() {
		return new FormGroup<FilePushedEventFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface KeyDestructionEvent {

		/**
		 * UID of the application which owns the key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		applicationUid?: number | null;

		/** Alias of the key. */
		keyAlias?: string | null;

		/** Whether the operation was successful. */
		success?: boolean | null;
	}

	/** A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface KeyDestructionEventFormProperties {

		/**
		 * UID of the application which owns the key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		applicationUid: FormControl<number | null | undefined>,

		/** Alias of the key. */
		keyAlias: FormControl<string | null | undefined>,

		/** Whether the operation was successful. */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateKeyDestructionEventFormGroup() {
		return new FormGroup<KeyDestructionEventFormProperties>({
			applicationUid: new FormControl<number | null | undefined>(undefined),
			keyAlias: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A cryptographic key including user installed, admin installed and system maintained private key is installed on the device either by the user or management.This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface KeyGeneratedEvent {

		/**
		 * UID of the application which generated the key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		applicationUid?: number | null;

		/** Alias of the key. */
		keyAlias?: string | null;

		/** Whether the operation was successful. */
		success?: boolean | null;
	}

	/** A cryptographic key including user installed, admin installed and system maintained private key is installed on the device either by the user or management.This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface KeyGeneratedEventFormProperties {

		/**
		 * UID of the application which generated the key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		applicationUid: FormControl<number | null | undefined>,

		/** Alias of the key. */
		keyAlias: FormControl<string | null | undefined>,

		/** Whether the operation was successful. */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateKeyGeneratedEventFormGroup() {
		return new FormGroup<KeyGeneratedEventFormProperties>({
			applicationUid: new FormControl<number | null | undefined>(undefined),
			keyAlias: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface KeyImportEvent {

		/**
		 * UID of the application which imported the key
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		applicationUid?: number | null;

		/** Alias of the key. */
		keyAlias?: string | null;

		/** Whether the operation was successful. */
		success?: boolean | null;
	}

	/** A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface KeyImportEventFormProperties {

		/**
		 * UID of the application which imported the key
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		applicationUid: FormControl<number | null | undefined>,

		/** Alias of the key. */
		keyAlias: FormControl<string | null | undefined>,

		/** Whether the operation was successful. */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateKeyImportEventFormGroup() {
		return new FormGroup<KeyImportEventFormProperties>({
			applicationUid: new FormControl<number | null | undefined>(undefined),
			keyAlias: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface KeyIntegrityViolationEvent {

		/**
		 * UID of the application which owns the key
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		applicationUid?: number | null;

		/** Alias of the key. */
		keyAlias?: string | null;
	}

	/** A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile. */
	export interface KeyIntegrityViolationEventFormProperties {

		/**
		 * UID of the application which owns the key
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		applicationUid: FormControl<number | null | undefined>,

		/** Alias of the key. */
		keyAlias: FormControl<string | null | undefined>,
	}
	export function CreateKeyIntegrityViolationEventFormGroup() {
		return new FormGroup<KeyIntegrityViolationEventFormProperties>({
			applicationUid: new FormControl<number | null | undefined>(undefined),
			keyAlias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An attempt was made to unlock the device. */
	export interface KeyguardDismissAuthAttemptEvent {

		/** Whether a strong form of authentication (password, PIN, or pattern) was used to unlock device. */
		strongAuthMethodUsed?: boolean | null;

		/** Whether the unlock attempt was successful. */
		success?: boolean | null;
	}

	/** An attempt was made to unlock the device. */
	export interface KeyguardDismissAuthAttemptEventFormProperties {

		/** Whether a strong form of authentication (password, PIN, or pattern) was used to unlock device. */
		strongAuthMethodUsed: FormControl<boolean | null | undefined>,

		/** Whether the unlock attempt was successful. */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateKeyguardDismissAuthAttemptEventFormGroup() {
		return new FormGroup<KeyguardDismissAuthAttemptEventFormProperties>({
			strongAuthMethodUsed: new FormControl<boolean | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The keyguard was dismissed. Intentionally empty. */
	export interface KeyguardDismissedEvent {
	}

	/** The keyguard was dismissed. Intentionally empty. */
	export interface KeyguardDismissedEventFormProperties {
	}
	export function CreateKeyguardDismissedEventFormGroup() {
		return new FormGroup<KeyguardDismissedEventFormProperties>({
		});

	}


	/** The device was locked either by user or timeout. Intentionally empty. */
	export interface KeyguardSecuredEvent {
	}

	/** The device was locked either by user or timeout. Intentionally empty. */
	export interface KeyguardSecuredEventFormProperties {
	}
	export function CreateKeyguardSecuredEventFormGroup() {
		return new FormGroup<KeyguardSecuredEventFormProperties>({
		});

	}


	/** The usageLog buffer on the device has reached 90% of its capacity, therefore older events may be dropped. Intentionally empty. */
	export interface LogBufferSizeCriticalEvent {
	}

	/** The usageLog buffer on the device has reached 90% of its capacity, therefore older events may be dropped. Intentionally empty. */
	export interface LogBufferSizeCriticalEventFormProperties {
	}
	export function CreateLogBufferSizeCriticalEventFormGroup() {
		return new FormGroup<LogBufferSizeCriticalEventFormProperties>({
		});

	}


	/** usageLog policy has been enabled. Intentionally empty. */
	export interface LoggingStartedEvent {
	}

	/** usageLog policy has been enabled. Intentionally empty. */
	export interface LoggingStartedEventFormProperties {
	}
	export function CreateLoggingStartedEventFormGroup() {
		return new FormGroup<LoggingStartedEventFormProperties>({
		});

	}


	/** usageLog policy has been disabled. Intentionally empty. */
	export interface LoggingStoppedEvent {
	}

	/** usageLog policy has been disabled. Intentionally empty. */
	export interface LoggingStoppedEventFormProperties {
	}
	export function CreateLoggingStoppedEventFormGroup() {
		return new FormGroup<LoggingStoppedEventFormProperties>({
		});

	}


	/** A lost mode event containing the device location and battery level as a percentage. */
	export interface LostModeLocationEvent {

		/**
		 * The battery level as a number between 0 and 100 inclusive
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batteryLevel?: number | null;

		/** The device location containing the latitude and longitude. */
		location?: Location;
	}

	/** A lost mode event containing the device location and battery level as a percentage. */
	export interface LostModeLocationEventFormProperties {

		/**
		 * The battery level as a number between 0 and 100 inclusive
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batteryLevel: FormControl<number | null | undefined>,
	}
	export function CreateLostModeLocationEventFormGroup() {
		return new FormGroup<LostModeLocationEventFormProperties>({
			batteryLevel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The device location containing the latitude and longitude. */
	export interface Location {

		/**
		 * The latitude position of the location
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * The longitude position of the location
		 * Type: double
		 */
		longitude?: number | null;
	}

	/** The device location containing the latitude and longitude. */
	export interface LocationFormProperties {

		/**
		 * The latitude position of the location
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The longitude position of the location
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An event indicating an outgoing phone call has been made when a device is in lost mode. Intentionally empty. */
	export interface LostModeOutgoingPhoneCallEvent {
	}

	/** An event indicating an outgoing phone call has been made when a device is in lost mode. Intentionally empty. */
	export interface LostModeOutgoingPhoneCallEventFormProperties {
	}
	export function CreateLostModeOutgoingPhoneCallEventFormGroup() {
		return new FormGroup<LostModeOutgoingPhoneCallEventFormProperties>({
		});

	}


	/** Removable media was mounted. */
	export interface MediaMountEvent {

		/** Mount point. */
		mountPoint?: string | null;

		/** Volume label. Redacted to empty string on organization-owned managed profile devices. */
		volumeLabel?: string | null;
	}

	/** Removable media was mounted. */
	export interface MediaMountEventFormProperties {

		/** Mount point. */
		mountPoint: FormControl<string | null | undefined>,

		/** Volume label. Redacted to empty string on organization-owned managed profile devices. */
		volumeLabel: FormControl<string | null | undefined>,
	}
	export function CreateMediaMountEventFormGroup() {
		return new FormGroup<MediaMountEventFormProperties>({
			mountPoint: new FormControl<string | null | undefined>(undefined),
			volumeLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Removable media was unmounted. */
	export interface MediaUnmountEvent {

		/** Mount point. */
		mountPoint?: string | null;

		/** Volume label. Redacted to empty string on organization-owned managed profile devices. */
		volumeLabel?: string | null;
	}

	/** Removable media was unmounted. */
	export interface MediaUnmountEventFormProperties {

		/** Mount point. */
		mountPoint: FormControl<string | null | undefined>,

		/** Volume label. Redacted to empty string on organization-owned managed profile devices. */
		volumeLabel: FormControl<string | null | undefined>,
	}
	export function CreateMediaUnmountEventFormGroup() {
		return new FormGroup<MediaUnmountEventFormProperties>({
			mountPoint: new FormControl<string | null | undefined>(undefined),
			volumeLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Device was shutdown. Intentionally empty. */
	export interface OsShutdownEvent {
	}

	/** Device was shutdown. Intentionally empty. */
	export interface OsShutdownEventFormProperties {
	}
	export function CreateOsShutdownEventFormGroup() {
		return new FormGroup<OsShutdownEventFormProperties>({
		});

	}


	/** Device was started. */
	export interface OsStartupEvent {

		/** Verified Boot state. */
		verifiedBootState?: OsStartupEventVerifiedBootState | null;

		/** dm-verity mode. */
		verityMode?: OsStartupEventVerityMode | null;
	}

	/** Device was started. */
	export interface OsStartupEventFormProperties {

		/** Verified Boot state. */
		verifiedBootState: FormControl<OsStartupEventVerifiedBootState | null | undefined>,

		/** dm-verity mode. */
		verityMode: FormControl<OsStartupEventVerityMode | null | undefined>,
	}
	export function CreateOsStartupEventFormGroup() {
		return new FormGroup<OsStartupEventFormProperties>({
			verifiedBootState: new FormControl<OsStartupEventVerifiedBootState | null | undefined>(undefined),
			verityMode: new FormControl<OsStartupEventVerityMode | null | undefined>(undefined),
		});

	}

	export enum OsStartupEventVerifiedBootState { VERIFIED_BOOT_STATE_UNSPECIFIED = 'VERIFIED_BOOT_STATE_UNSPECIFIED', GREEN = 'GREEN', YELLOW = 'YELLOW', ORANGE = 'ORANGE' }

	export enum OsStartupEventVerityMode { DM_VERITY_MODE_UNSPECIFIED = 'DM_VERITY_MODE_UNSPECIFIED', ENFORCING = 'ENFORCING', IO_ERROR = 'IO_ERROR', DISABLED = 'DISABLED' }


	/** The device or profile has been remotely locked via the LOCK command. */
	export interface RemoteLockEvent {

		/** Package name of the admin app requesting the change. */
		adminPackageName?: string | null;

		/**
		 * User ID of the admin app from the which the change was requested.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		adminUserId?: number | null;

		/**
		 * User ID in which the change was requested in.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetUserId?: number | null;
	}

	/** The device or profile has been remotely locked via the LOCK command. */
	export interface RemoteLockEventFormProperties {

		/** Package name of the admin app requesting the change. */
		adminPackageName: FormControl<string | null | undefined>,

		/**
		 * User ID of the admin app from the which the change was requested.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		adminUserId: FormControl<number | null | undefined>,

		/**
		 * User ID in which the change was requested in.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetUserId: FormControl<number | null | undefined>,
	}
	export function CreateRemoteLockEventFormGroup() {
		return new FormGroup<RemoteLockEventFormProperties>({
			adminPackageName: new FormControl<string | null | undefined>(undefined),
			adminUserId: new FormControl<number | null | undefined>(undefined),
			targetUserId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A lost mode event indicating the user has attempted to stop lost mode. */
	export interface StopLostModeUserAttemptEvent {

		/** The status of the attempt to stop lost mode. */
		status?: StopLostModeUserAttemptEventStatus | null;
	}

	/** A lost mode event indicating the user has attempted to stop lost mode. */
	export interface StopLostModeUserAttemptEventFormProperties {

		/** The status of the attempt to stop lost mode. */
		status: FormControl<StopLostModeUserAttemptEventStatus | null | undefined>,
	}
	export function CreateStopLostModeUserAttemptEventFormGroup() {
		return new FormGroup<StopLostModeUserAttemptEventFormProperties>({
			status: new FormControl<StopLostModeUserAttemptEventStatus | null | undefined>(undefined),
		});

	}

	export enum StopLostModeUserAttemptEventStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', ATTEMPT_SUCCEEDED = 'ATTEMPT_SUCCEEDED', ATTEMPT_FAILED = 'ATTEMPT_FAILED' }


	/** The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Intentionally empty. */
	export interface WipeFailureEvent {
	}

	/** The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Intentionally empty. */
	export interface WipeFailureEventFormProperties {
	}
	export function CreateWipeFailureEventFormGroup() {
		return new FormGroup<WipeFailureEventFormProperties>({
		});

	}


	/** An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified. */
	export interface BlockAction {

		/**
		 * Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blockAfterDays?: number | null;

		/** Specifies the scope of this BlockAction. Only applicable to devices that are company-owned. */
		blockScope?: BlockActionBlockScope | null;
	}

	/** An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified. */
	export interface BlockActionFormProperties {

		/**
		 * Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blockAfterDays: FormControl<number | null | undefined>,

		/** Specifies the scope of this BlockAction. Only applicable to devices that are company-owned. */
		blockScope: FormControl<BlockActionBlockScope | null | undefined>,
	}
	export function CreateBlockActionFormGroup() {
		return new FormGroup<BlockActionFormProperties>({
			blockAfterDays: new FormControl<number | null | undefined>(undefined),
			blockScope: new FormControl<BlockActionBlockScope | null | undefined>(undefined),
		});

	}

	export enum BlockActionBlockScope { BLOCK_SCOPE_UNSPECIFIED = 'BLOCK_SCOPE_UNSPECIFIED', BLOCK_SCOPE_WORK_PROFILE = 'BLOCK_SCOPE_WORK_PROFILE', BLOCK_SCOPE_DEVICE = 'BLOCK_SCOPE_DEVICE' }


	/** Controls apps' access to private keys. The rule determines which private key, if any, Android Device Policy grants to the specified app. Access is granted either when the app calls KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) (or any overloads) to request a private key alias for a given URL, or for rules that are not URL-specific (that is, if urlPattern is not set, or set to the empty string or .*) on Android 11 and above, directly so that the app can call KeyChain.getPrivateKey (https://developer.android.com/reference/android/security/KeyChain#getPrivateKey%28android.content.Context,%20java.lang.String%29), without first having to call KeyChain.choosePrivateKeyAlias.When an app calls KeyChain.choosePrivateKeyAlias if more than one choosePrivateKeyRules matches, the last matching rule defines which key alias to return. */
	export interface ChoosePrivateKeyRule {

		/** The package names to which this rule applies. The hash of the signing certificate for each app is verified against the hash provided by Play. If no package names are specified, then the alias is provided to all apps that call KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) or any overloads (but not without calling KeyChain.choosePrivateKeyAlias, even on Android 11 and above). Any app with the same Android UID as a package specified here will have access when they call KeyChain.choosePrivateKeyAlias. */
		packageNames?: Array<string>;

		/** The alias of the private key to be used. */
		privateKeyAlias?: string | null;

		/** The URL pattern to match against the URL of the request. If not set or empty, it matches all URLs. This uses the regular expression syntax of java.util.regex.Pattern. */
		urlPattern?: string | null;
	}

	/** Controls apps' access to private keys. The rule determines which private key, if any, Android Device Policy grants to the specified app. Access is granted either when the app calls KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) (or any overloads) to request a private key alias for a given URL, or for rules that are not URL-specific (that is, if urlPattern is not set, or set to the empty string or .*) on Android 11 and above, directly so that the app can call KeyChain.getPrivateKey (https://developer.android.com/reference/android/security/KeyChain#getPrivateKey%28android.content.Context,%20java.lang.String%29), without first having to call KeyChain.choosePrivateKeyAlias.When an app calls KeyChain.choosePrivateKeyAlias if more than one choosePrivateKeyRules matches, the last matching rule defines which key alias to return. */
	export interface ChoosePrivateKeyRuleFormProperties {

		/** The alias of the private key to be used. */
		privateKeyAlias: FormControl<string | null | undefined>,

		/** The URL pattern to match against the URL of the request. If not set or empty, it matches all URLs. This uses the regular expression syntax of java.util.regex.Pattern. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function CreateChoosePrivateKeyRuleFormGroup() {
		return new FormGroup<ChoosePrivateKeyRuleFormProperties>({
			privateKeyAlias: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device. */
	export interface ClearAppsDataParams {

		/** The package names of the apps whose data will be cleared when the command is executed. */
		packageNames?: Array<string>;
	}

	/** Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device. */
	export interface ClearAppsDataParamsFormProperties {
	}
	export function CreateClearAppsDataParamsFormGroup() {
		return new FormGroup<ClearAppsDataParamsFormProperties>({
		});

	}


	/** Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device. */
	export interface ClearAppsDataStatus {

		/** The per-app results, a mapping from package names to the respective clearing result. */
		results?: {[id: string]: PerAppResult };
	}

	/** Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device. */
	export interface ClearAppsDataStatusFormProperties {

		/** The per-app results, a mapping from package names to the respective clearing result. */
		results: FormControl<{[id: string]: PerAppResult } | null | undefined>,
	}
	export function CreateClearAppsDataStatusFormGroup() {
		return new FormGroup<ClearAppsDataStatusFormProperties>({
			results: new FormControl<{[id: string]: PerAppResult } | null | undefined>(undefined),
		});

	}


	/** The result of an attempt to clear the data of a single app. */
	export interface PerAppResult {

		/** The result of an attempt to clear the data of a single app. */
		clearingResult?: PerAppResultClearingResult | null;
	}

	/** The result of an attempt to clear the data of a single app. */
	export interface PerAppResultFormProperties {

		/** The result of an attempt to clear the data of a single app. */
		clearingResult: FormControl<PerAppResultClearingResult | null | undefined>,
	}
	export function CreatePerAppResultFormGroup() {
		return new FormGroup<PerAppResultFormProperties>({
			clearingResult: new FormControl<PerAppResultClearingResult | null | undefined>(undefined),
		});

	}

	export enum PerAppResultClearingResult { CLEARING_RESULT_UNSPECIFIED = 'CLEARING_RESULT_UNSPECIFIED', SUCCESS = 'SUCCESS', APP_NOT_FOUND = 'APP_NOT_FOUND', APP_PROTECTED = 'APP_PROTECTED', API_LEVEL = 'API_LEVEL' }


	/** A command. */
	export interface Command {

		/** Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device. */
		clearAppsDataParams?: ClearAppsDataParams;

		/** Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device. */
		clearAppsDataStatus?: ClearAppsDataStatus;

		/** The timestamp at which the command was created. The timestamp is automatically generated by the server. */
		createTime?: string | null;

		/** The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration. */
		duration?: string | null;

		/** If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller. */
		errorCode?: CommandErrorCode | null;

		/** For commands of type RESET_PASSWORD, optionally specifies the new password. Note: The new password must be at least 6 characters long if it is numeric in case of Android 14 devices. Else the command will fail with INVALID_VALUE. */
		newPassword?: string | null;

		/** For commands of type RESET_PASSWORD, optionally specifies flags. */
		resetPasswordFlags?: Array<string>;

		/** Parameters associated with the START_LOST_MODE command to put the device into lost mode. At least one of the parameters, not including the organization name, must be provided in order for the device to be put into lost mode. */
		startLostModeParams?: StartLostModeParams;

		/** Status of the START_LOST_MODE command to put the device into lost mode. */
		startLostModeStatus?: StartLostModeStatus;

		/** Parameters associated with the STOP_LOST_MODE command to take the device out of lost mode. */
		stopLostModeParams?: StopLostModeParams;

		/** Status of the STOP_LOST_MODE command to take the device out of lost mode. */
		stopLostModeStatus?: StopLostModeStatus;

		/** The type of the command. */
		type?: CommandType | null;

		/** The resource name of the user that owns the device in the form enterprises/{enterpriseId}/users/{userId}. This is automatically generated by the server based on the device the command is sent to. */
		userName?: string | null;
	}

	/** A command. */
	export interface CommandFormProperties {

		/** The timestamp at which the command was created. The timestamp is automatically generated by the server. */
		createTime: FormControl<string | null | undefined>,

		/** The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration. */
		duration: FormControl<string | null | undefined>,

		/** If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller. */
		errorCode: FormControl<CommandErrorCode | null | undefined>,

		/** For commands of type RESET_PASSWORD, optionally specifies the new password. Note: The new password must be at least 6 characters long if it is numeric in case of Android 14 devices. Else the command will fail with INVALID_VALUE. */
		newPassword: FormControl<string | null | undefined>,

		/** The type of the command. */
		type: FormControl<CommandType | null | undefined>,

		/** The resource name of the user that owns the device in the form enterprises/{enterpriseId}/users/{userId}. This is automatically generated by the server based on the device the command is sent to. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<CommandErrorCode | null | undefined>(undefined),
			newPassword: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CommandType | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommandErrorCode { COMMAND_ERROR_CODE_UNSPECIFIED = 'COMMAND_ERROR_CODE_UNSPECIFIED', UNKNOWN = 'UNKNOWN', API_LEVEL = 'API_LEVEL', MANAGEMENT_MODE = 'MANAGEMENT_MODE', INVALID_VALUE = 'INVALID_VALUE', UNSUPPORTED = 'UNSUPPORTED' }


	/** Parameters associated with the START_LOST_MODE command to put the device into lost mode. At least one of the parameters, not including the organization name, must be provided in order for the device to be put into lost mode. */
	export interface StartLostModeParams {

		/** The email address displayed to the user when the device is in lost mode. */
		lostEmailAddress?: string | null;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		lostMessage?: UserFacingMessage;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		lostOrganization?: UserFacingMessage;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		lostPhoneNumber?: UserFacingMessage;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		lostStreetAddress?: UserFacingMessage;
	}

	/** Parameters associated with the START_LOST_MODE command to put the device into lost mode. At least one of the parameters, not including the organization name, must be provided in order for the device to be put into lost mode. */
	export interface StartLostModeParamsFormProperties {

		/** The email address displayed to the user when the device is in lost mode. */
		lostEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateStartLostModeParamsFormGroup() {
		return new FormGroup<StartLostModeParamsFormProperties>({
			lostEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
	export interface UserFacingMessage {

		/** The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided. */
		defaultMessage?: string | null;

		/** A map containing pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr. */
		localizedMessages?: {[id: string]: string };
	}

	/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
	export interface UserFacingMessageFormProperties {

		/** The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided. */
		defaultMessage: FormControl<string | null | undefined>,

		/** A map containing pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr. */
		localizedMessages: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUserFacingMessageFormGroup() {
		return new FormGroup<UserFacingMessageFormProperties>({
			defaultMessage: new FormControl<string | null | undefined>(undefined),
			localizedMessages: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Status of the START_LOST_MODE command to put the device into lost mode. */
	export interface StartLostModeStatus {

		/** The status. See StartLostModeStatus. */
		status?: StartLostModeStatusStatus | null;
	}

	/** Status of the START_LOST_MODE command to put the device into lost mode. */
	export interface StartLostModeStatusFormProperties {

		/** The status. See StartLostModeStatus. */
		status: FormControl<StartLostModeStatusStatus | null | undefined>,
	}
	export function CreateStartLostModeStatusFormGroup() {
		return new FormGroup<StartLostModeStatusFormProperties>({
			status: new FormControl<StartLostModeStatusStatus | null | undefined>(undefined),
		});

	}

	export enum StartLostModeStatusStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', SUCCESS = 'SUCCESS', RESET_PASSWORD_RECENTLY = 'RESET_PASSWORD_RECENTLY', USER_EXIT_LOST_MODE_RECENTLY = 'USER_EXIT_LOST_MODE_RECENTLY', ALREADY_IN_LOST_MODE = 'ALREADY_IN_LOST_MODE' }


	/** Parameters associated with the STOP_LOST_MODE command to take the device out of lost mode. */
	export interface StopLostModeParams {
	}

	/** Parameters associated with the STOP_LOST_MODE command to take the device out of lost mode. */
	export interface StopLostModeParamsFormProperties {
	}
	export function CreateStopLostModeParamsFormGroup() {
		return new FormGroup<StopLostModeParamsFormProperties>({
		});

	}


	/** Status of the STOP_LOST_MODE command to take the device out of lost mode. */
	export interface StopLostModeStatus {

		/** The status. See StopLostModeStatus. */
		status?: StopLostModeStatusStatus | null;
	}

	/** Status of the STOP_LOST_MODE command to take the device out of lost mode. */
	export interface StopLostModeStatusFormProperties {

		/** The status. See StopLostModeStatus. */
		status: FormControl<StopLostModeStatusStatus | null | undefined>,
	}
	export function CreateStopLostModeStatusFormGroup() {
		return new FormGroup<StopLostModeStatusFormProperties>({
			status: new FormControl<StopLostModeStatusStatus | null | undefined>(undefined),
		});

	}

	export enum StopLostModeStatusStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', SUCCESS = 'SUCCESS', NOT_IN_LOST_MODE = 'NOT_IN_LOST_MODE' }

	export enum CommandType { COMMAND_TYPE_UNSPECIFIED = 'COMMAND_TYPE_UNSPECIFIED', LOCK = 'LOCK', RESET_PASSWORD = 'RESET_PASSWORD', REBOOT = 'REBOOT', RELINQUISH_OWNERSHIP = 'RELINQUISH_OWNERSHIP', CLEAR_APP_DATA = 'CLEAR_APP_DATA', START_LOST_MODE = 'START_LOST_MODE', STOP_LOST_MODE = 'STOP_LOST_MODE' }


	/** Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy. */
	export interface CommonCriteriaModeInfo {

		/** Whether Common Criteria Mode is enabled. */
		commonCriteriaModeStatus?: CommonCriteriaModeInfoCommonCriteriaModeStatus | null;
	}

	/** Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy. */
	export interface CommonCriteriaModeInfoFormProperties {

		/** Whether Common Criteria Mode is enabled. */
		commonCriteriaModeStatus: FormControl<CommonCriteriaModeInfoCommonCriteriaModeStatus | null | undefined>,
	}
	export function CreateCommonCriteriaModeInfoFormGroup() {
		return new FormGroup<CommonCriteriaModeInfoFormProperties>({
			commonCriteriaModeStatus: new FormControl<CommonCriteriaModeInfoCommonCriteriaModeStatus | null | undefined>(undefined),
		});

	}

	export enum CommonCriteriaModeInfoCommonCriteriaModeStatus { COMMON_CRITERIA_MODE_STATUS_UNKNOWN = 'COMMON_CRITERIA_MODE_STATUS_UNKNOWN', COMMON_CRITERIA_MODE_DISABLED = 'COMMON_CRITERIA_MODE_DISABLED', COMMON_CRITERIA_MODE_ENABLED = 'COMMON_CRITERIA_MODE_ENABLED' }


	/** A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule. */
	export interface ComplianceRule {

		/** A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy. */
		apiLevelCondition?: ApiLevelCondition;

		/** If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed. */
		disableApps?: boolean | null;

		/** A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields. */
		nonComplianceDetailCondition?: NonComplianceDetailCondition;

		/** If set, the rule includes a mitigating action to disable apps specified in the list, but app data is preserved. */
		packageNamesToDisable?: Array<string>;
	}

	/** A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule. */
	export interface ComplianceRuleFormProperties {

		/** If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed. */
		disableApps: FormControl<boolean | null | undefined>,
	}
	export function CreateComplianceRuleFormGroup() {
		return new FormGroup<ComplianceRuleFormProperties>({
			disableApps: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields. */
	export interface NonComplianceDetailCondition {

		/** The reason the device is not in compliance with the setting. If not set, then this condition matches any reason. */
		nonComplianceReason?: NonComplianceDetailConditionNonComplianceReason | null;

		/** The package name of the app that's out of compliance. If not set, then this condition matches any package name. */
		packageName?: string | null;

		/** The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name. */
		settingName?: string | null;
	}

	/** A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields. */
	export interface NonComplianceDetailConditionFormProperties {

		/** The reason the device is not in compliance with the setting. If not set, then this condition matches any reason. */
		nonComplianceReason: FormControl<NonComplianceDetailConditionNonComplianceReason | null | undefined>,

		/** The package name of the app that's out of compliance. If not set, then this condition matches any package name. */
		packageName: FormControl<string | null | undefined>,

		/** The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name. */
		settingName: FormControl<string | null | undefined>,
	}
	export function CreateNonComplianceDetailConditionFormGroup() {
		return new FormGroup<NonComplianceDetailConditionFormProperties>({
			nonComplianceReason: new FormControl<NonComplianceDetailConditionNonComplianceReason | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			settingName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NonComplianceDetailConditionNonComplianceReason { NON_COMPLIANCE_REASON_UNSPECIFIED = 'NON_COMPLIANCE_REASON_UNSPECIFIED', API_LEVEL = 'API_LEVEL', MANAGEMENT_MODE = 'MANAGEMENT_MODE', USER_ACTION = 'USER_ACTION', INVALID_VALUE = 'INVALID_VALUE', APP_NOT_INSTALLED = 'APP_NOT_INSTALLED', UNSUPPORTED = 'UNSUPPORTED', APP_INSTALLED = 'APP_INSTALLED', PENDING = 'PENDING', APP_INCOMPATIBLE = 'APP_INCOMPATIBLE', APP_NOT_UPDATED = 'APP_NOT_UPDATED', DEVICE_INCOMPATIBLE = 'DEVICE_INCOMPATIBLE' }


	/** Contact details for managed Google Play enterprises. */
	export interface ContactInfo {

		/** Email address for a point of contact, which will be used to send important announcements related to managed Google Play. */
		contactEmail?: string | null;

		/** The email of the data protection officer. The email is validated but not verified. */
		dataProtectionOfficerEmail?: string | null;

		/** The name of the data protection officer. */
		dataProtectionOfficerName?: string | null;

		/** The phone number of the data protection officer The phone number is validated but not verified. */
		dataProtectionOfficerPhone?: string | null;

		/** The email of the EU representative. The email is validated but not verified. */
		euRepresentativeEmail?: string | null;

		/** The name of the EU representative. */
		euRepresentativeName?: string | null;

		/** The phone number of the EU representative. The phone number is validated but not verified. */
		euRepresentativePhone?: string | null;
	}

	/** Contact details for managed Google Play enterprises. */
	export interface ContactInfoFormProperties {

		/** Email address for a point of contact, which will be used to send important announcements related to managed Google Play. */
		contactEmail: FormControl<string | null | undefined>,

		/** The email of the data protection officer. The email is validated but not verified. */
		dataProtectionOfficerEmail: FormControl<string | null | undefined>,

		/** The name of the data protection officer. */
		dataProtectionOfficerName: FormControl<string | null | undefined>,

		/** The phone number of the data protection officer The phone number is validated but not verified. */
		dataProtectionOfficerPhone: FormControl<string | null | undefined>,

		/** The email of the EU representative. The email is validated but not verified. */
		euRepresentativeEmail: FormControl<string | null | undefined>,

		/** The name of the EU representative. */
		euRepresentativeName: FormControl<string | null | undefined>,

		/** The phone number of the EU representative. The phone number is validated but not verified. */
		euRepresentativePhone: FormControl<string | null | undefined>,
	}
	export function CreateContactInfoFormGroup() {
		return new FormGroup<ContactInfoFormProperties>({
			contactEmail: new FormControl<string | null | undefined>(undefined),
			dataProtectionOfficerEmail: new FormControl<string | null | undefined>(undefined),
			dataProtectionOfficerName: new FormControl<string | null | undefined>(undefined),
			dataProtectionOfficerPhone: new FormControl<string | null | undefined>(undefined),
			euRepresentativeEmail: new FormControl<string | null | undefined>(undefined),
			euRepresentativeName: new FormControl<string | null | undefined>(undefined),
			euRepresentativePhone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This feature is not generally available. */
	export interface ContentProviderEndpoint {

		/** This feature is not generally available. */
		packageName?: string | null;

		/** Required. This feature is not generally available. */
		signingCertsSha256?: Array<string>;

		/** This feature is not generally available. */
		uri?: string | null;
	}

	/** This feature is not generally available. */
	export interface ContentProviderEndpointFormProperties {

		/** This feature is not generally available. */
		packageName: FormControl<string | null | undefined>,

		/** This feature is not generally available. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateContentProviderEndpointFormGroup() {
		return new FormGroup<ContentProviderEndpointFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Controls the data from the work profile that can be accessed from the personal profile and vice versa. A nonComplianceDetail with MANAGEMENT_MODE is reported if the device does not have a work profile. */
	export interface CrossProfilePolicies {

		/** Whether text copied from one profile (personal or work) can be pasted in the other profile. */
		crossProfileCopyPaste?: CrossProfilePoliciesCrossProfileCopyPaste | null;

		/** Whether data from one profile (personal or work) can be shared with apps in the other profile. Specifically controls simple data sharing via intents. Management of other cross-profile communication channels, such as contact search, copy/paste, or connected work & personal apps, are configured separately. */
		crossProfileDataSharing?: CrossProfilePoliciesCrossProfileDataSharing | null;

		/** A list of package names. */
		exemptionsToShowWorkContactsInPersonalProfile?: PackageNameList;

		/** Whether personal apps can access contacts stored in the work profile.See also exemptions_to_show_work_contacts_in_personal_profile. */
		showWorkContactsInPersonalProfile?: CrossProfilePoliciesShowWorkContactsInPersonalProfile | null;

		/** Specifies the default behaviour for work profile widgets. If the policy does not specify work_profile_widgets for a specific application, it will behave according to the value specified here. */
		workProfileWidgetsDefault?: CrossProfilePoliciesWorkProfileWidgetsDefault | null;
	}

	/** Controls the data from the work profile that can be accessed from the personal profile and vice versa. A nonComplianceDetail with MANAGEMENT_MODE is reported if the device does not have a work profile. */
	export interface CrossProfilePoliciesFormProperties {

		/** Whether text copied from one profile (personal or work) can be pasted in the other profile. */
		crossProfileCopyPaste: FormControl<CrossProfilePoliciesCrossProfileCopyPaste | null | undefined>,

		/** Whether data from one profile (personal or work) can be shared with apps in the other profile. Specifically controls simple data sharing via intents. Management of other cross-profile communication channels, such as contact search, copy/paste, or connected work & personal apps, are configured separately. */
		crossProfileDataSharing: FormControl<CrossProfilePoliciesCrossProfileDataSharing | null | undefined>,

		/** Whether personal apps can access contacts stored in the work profile.See also exemptions_to_show_work_contacts_in_personal_profile. */
		showWorkContactsInPersonalProfile: FormControl<CrossProfilePoliciesShowWorkContactsInPersonalProfile | null | undefined>,

		/** Specifies the default behaviour for work profile widgets. If the policy does not specify work_profile_widgets for a specific application, it will behave according to the value specified here. */
		workProfileWidgetsDefault: FormControl<CrossProfilePoliciesWorkProfileWidgetsDefault | null | undefined>,
	}
	export function CreateCrossProfilePoliciesFormGroup() {
		return new FormGroup<CrossProfilePoliciesFormProperties>({
			crossProfileCopyPaste: new FormControl<CrossProfilePoliciesCrossProfileCopyPaste | null | undefined>(undefined),
			crossProfileDataSharing: new FormControl<CrossProfilePoliciesCrossProfileDataSharing | null | undefined>(undefined),
			showWorkContactsInPersonalProfile: new FormControl<CrossProfilePoliciesShowWorkContactsInPersonalProfile | null | undefined>(undefined),
			workProfileWidgetsDefault: new FormControl<CrossProfilePoliciesWorkProfileWidgetsDefault | null | undefined>(undefined),
		});

	}

	export enum CrossProfilePoliciesCrossProfileCopyPaste { CROSS_PROFILE_COPY_PASTE_UNSPECIFIED = 'CROSS_PROFILE_COPY_PASTE_UNSPECIFIED', COPY_FROM_WORK_TO_PERSONAL_DISALLOWED = 'COPY_FROM_WORK_TO_PERSONAL_DISALLOWED', CROSS_PROFILE_COPY_PASTE_ALLOWED = 'CROSS_PROFILE_COPY_PASTE_ALLOWED' }

	export enum CrossProfilePoliciesCrossProfileDataSharing { CROSS_PROFILE_DATA_SHARING_UNSPECIFIED = 'CROSS_PROFILE_DATA_SHARING_UNSPECIFIED', CROSS_PROFILE_DATA_SHARING_DISALLOWED = 'CROSS_PROFILE_DATA_SHARING_DISALLOWED', DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED = 'DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED', CROSS_PROFILE_DATA_SHARING_ALLOWED = 'CROSS_PROFILE_DATA_SHARING_ALLOWED' }


	/** A list of package names. */
	export interface PackageNameList {

		/** A list of package names. */
		packageNames?: Array<string>;
	}

	/** A list of package names. */
	export interface PackageNameListFormProperties {
	}
	export function CreatePackageNameListFormGroup() {
		return new FormGroup<PackageNameListFormProperties>({
		});

	}

	export enum CrossProfilePoliciesShowWorkContactsInPersonalProfile { SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED = 'SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED', SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED = 'SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED', SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED = 'SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED', SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED_EXCEPT_SYSTEM = 'SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED_EXCEPT_SYSTEM' }

	export enum CrossProfilePoliciesWorkProfileWidgetsDefault { WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED = 'WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED', WORK_PROFILE_WIDGETS_DEFAULT_ALLOWED = 'WORK_PROFILE_WIDGETS_DEFAULT_ALLOWED', WORK_PROFILE_WIDGETS_DEFAULT_DISALLOWED = 'WORK_PROFILE_WIDGETS_DEFAULT_DISALLOWED' }


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: A full date, with non-zero year, month, and day values. A month and day, with a zero year (for example, an anniversary). A year on its own, with a zero month and a zero day. A year and month, with a zero day (for example, a credit card expiration date).Related types: google.type.TimeOfDay google.type.DateTime google.protobuf.Timestamp */
	export interface Date {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: A full date, with non-zero year, month, and day values. A month and day, with a zero year (for example, an anniversary). A year on its own, with a zero month and a zero day. A year and month, with a zero day (for example, a credit card expiration date).Related types: google.type.TimeOfDay google.type.DateTime google.protobuf.Timestamp */
	export interface DateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
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


	/** A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch. */
	export interface Device {

		/**
		 * The API level of the Android platform version running on the device.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiLevel?: number | null;

		/** Reports for apps installed on the device. This information is only available when application_reports_enabled is true in the device's policy. */
		applicationReports?: Array<ApplicationReport>;

		/** The password requirements currently applied to the device. The applied requirements may be slightly different from those specified in passwordPolicies in some cases. fieldPath is set based on passwordPolicies. */
		appliedPasswordPolicies?: Array<PasswordRequirements>;

		/** The name of the policy currently applied to the device. */
		appliedPolicyName?: string | null;

		/** The version of the policy currently applied to the device. */
		appliedPolicyVersion?: string | null;

		/** The state currently applied to the device. */
		appliedState?: DeviceAppliedState | null;

		/** Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy. */
		commonCriteriaModeInfo?: CommonCriteriaModeInfo;

		/** Information about security related device settings on device. */
		deviceSettings?: DeviceSettings;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		disabledReason?: UserFacingMessage;

		/** Detailed information about displays on the device. This information is only available if displayInfoEnabled is true in the device's policy. */
		displays?: Array<Display>;

		/** The time of device enrollment. */
		enrollmentTime?: string | null;

		/** If the device was enrolled with an enrollment token with additional data provided, this field contains that data. */
		enrollmentTokenData?: string | null;

		/** If the device was enrolled with an enrollment token, this field contains the name of the token. */
		enrollmentTokenName?: string | null;

		/** Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy. */
		hardwareInfo?: HardwareInfo;

		/** Hardware status samples in chronological order. This information is only available if hardwareStatusEnabled is true in the device's policy. */
		hardwareStatusSamples?: Array<HardwareStatus>;

		/** Deprecated. */
		lastPolicyComplianceReportTime?: string | null;

		/** The last time the device fetched its policy. */
		lastPolicySyncTime?: string | null;

		/** The last time the device sent a status report. */
		lastStatusReportTime?: string | null;

		/** The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported. */
		managementMode?: DeviceManagementMode | null;

		/** Events related to memory and storage measurements in chronological order. This information is only available if memoryInfoEnabled is true in the device's policy. */
		memoryEvents?: Array<MemoryEvent>;

		/** Information about device memory and storage. */
		memoryInfo?: MemoryInfo;

		/** The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. */
		name?: string | null;

		/** Device network info. */
		networkInfo?: NetworkInfo;

		/** Details about policy settings that the device is not compliant with. */
		nonComplianceDetails?: Array<NonComplianceDetail>;

		/** Ownership of the managed device. */
		ownership?: DeviceOwnership | null;

		/** Whether the device is compliant with its policy. */
		policyCompliant?: boolean | null;

		/** The name of the policy applied to the device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred. */
		policyName?: string | null;

		/** Power management events on the device in chronological order. This information is only available if powerManagementEventsEnabled is true in the device's policy. */
		powerManagementEvents?: Array<PowerManagementEvent>;

		/** If the same physical device has been enrolled multiple times, this field contains its previous device names. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order. */
		previousDeviceNames?: Array<string>;

		/** The security posture of the device, as determined by the current device state and the policies applied. */
		securityPosture?: SecurityPosture;

		/** Information about device software. */
		softwareInfo?: SoftwareInfo;

		/** The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete. */
		state?: DeviceAppliedState | null;

		/** Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device's policy. */
		systemProperties?: {[id: string]: string };

		/** A user belonging to an enterprise. */
		user?: User;

		/** The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}. */
		userName?: string | null;
	}

	/** A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch. */
	export interface DeviceFormProperties {

		/**
		 * The API level of the Android platform version running on the device.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiLevel: FormControl<number | null | undefined>,

		/** The name of the policy currently applied to the device. */
		appliedPolicyName: FormControl<string | null | undefined>,

		/** The version of the policy currently applied to the device. */
		appliedPolicyVersion: FormControl<string | null | undefined>,

		/** The state currently applied to the device. */
		appliedState: FormControl<DeviceAppliedState | null | undefined>,

		/** The time of device enrollment. */
		enrollmentTime: FormControl<string | null | undefined>,

		/** If the device was enrolled with an enrollment token with additional data provided, this field contains that data. */
		enrollmentTokenData: FormControl<string | null | undefined>,

		/** If the device was enrolled with an enrollment token, this field contains the name of the token. */
		enrollmentTokenName: FormControl<string | null | undefined>,

		/** Deprecated. */
		lastPolicyComplianceReportTime: FormControl<string | null | undefined>,

		/** The last time the device fetched its policy. */
		lastPolicySyncTime: FormControl<string | null | undefined>,

		/** The last time the device sent a status report. */
		lastStatusReportTime: FormControl<string | null | undefined>,

		/** The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported. */
		managementMode: FormControl<DeviceManagementMode | null | undefined>,

		/** The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. */
		name: FormControl<string | null | undefined>,

		/** Ownership of the managed device. */
		ownership: FormControl<DeviceOwnership | null | undefined>,

		/** Whether the device is compliant with its policy. */
		policyCompliant: FormControl<boolean | null | undefined>,

		/** The name of the policy applied to the device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred. */
		policyName: FormControl<string | null | undefined>,

		/** The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete. */
		state: FormControl<DeviceAppliedState | null | undefined>,

		/** Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device's policy. */
		systemProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			apiLevel: new FormControl<number | null | undefined>(undefined),
			appliedPolicyName: new FormControl<string | null | undefined>(undefined),
			appliedPolicyVersion: new FormControl<string | null | undefined>(undefined),
			appliedState: new FormControl<DeviceAppliedState | null | undefined>(undefined),
			enrollmentTime: new FormControl<string | null | undefined>(undefined),
			enrollmentTokenData: new FormControl<string | null | undefined>(undefined),
			enrollmentTokenName: new FormControl<string | null | undefined>(undefined),
			lastPolicyComplianceReportTime: new FormControl<string | null | undefined>(undefined),
			lastPolicySyncTime: new FormControl<string | null | undefined>(undefined),
			lastStatusReportTime: new FormControl<string | null | undefined>(undefined),
			managementMode: new FormControl<DeviceManagementMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownership: new FormControl<DeviceOwnership | null | undefined>(undefined),
			policyCompliant: new FormControl<boolean | null | undefined>(undefined),
			policyName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DeviceAppliedState | null | undefined>(undefined),
			systemProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Requirements for the password used to unlock a device. */
	export interface PasswordRequirements {

		/**
		 * Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumFailedPasswordsForWipe?: number | null;

		/** Password expiration timeout. */
		passwordExpirationTimeout?: string | null;

		/**
		 * The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordHistoryLength?: number | null;

		/**
		 * The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumLength?: number | null;

		/**
		 * Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumLetters?: number | null;

		/**
		 * Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumLowerCase?: number | null;

		/**
		 * Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumNonLetter?: number | null;

		/**
		 * Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumNumeric?: number | null;

		/**
		 * Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumSymbols?: number | null;

		/**
		 * Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumUpperCase?: number | null;

		/** The required password quality. */
		passwordQuality?: PasswordRequirementsPasswordQuality | null;

		/** The scope that the password requirement applies to. */
		passwordScope?: PasswordRequirementsPasswordScope | null;

		/** The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile. */
		requirePasswordUnlock?: PasswordRequirementsRequirePasswordUnlock | null;

		/** Controls whether a unified lock is allowed for the device and the work profile, on devices running Android 9 and above with a work profile. This can be set only if password_scope is set to SCOPE_PROFILE, the policy will be rejected otherwise. If user has not set a separate work lock and this field is set to REQUIRE_SEPARATE_WORK_LOCK, a NonComplianceDetail is reported with nonComplianceReason set to USER_ACTION. */
		unifiedLockSettings?: PasswordRequirementsUnifiedLockSettings | null;
	}

	/** Requirements for the password used to unlock a device. */
	export interface PasswordRequirementsFormProperties {

		/**
		 * Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumFailedPasswordsForWipe: FormControl<number | null | undefined>,

		/** Password expiration timeout. */
		passwordExpirationTimeout: FormControl<string | null | undefined>,

		/**
		 * The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordHistoryLength: FormControl<number | null | undefined>,

		/**
		 * The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumLength: FormControl<number | null | undefined>,

		/**
		 * Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumLetters: FormControl<number | null | undefined>,

		/**
		 * Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumLowerCase: FormControl<number | null | undefined>,

		/**
		 * Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumNonLetter: FormControl<number | null | undefined>,

		/**
		 * Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumNumeric: FormControl<number | null | undefined>,

		/**
		 * Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumSymbols: FormControl<number | null | undefined>,

		/**
		 * Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordMinimumUpperCase: FormControl<number | null | undefined>,

		/** The required password quality. */
		passwordQuality: FormControl<PasswordRequirementsPasswordQuality | null | undefined>,

		/** The scope that the password requirement applies to. */
		passwordScope: FormControl<PasswordRequirementsPasswordScope | null | undefined>,

		/** The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile. */
		requirePasswordUnlock: FormControl<PasswordRequirementsRequirePasswordUnlock | null | undefined>,

		/** Controls whether a unified lock is allowed for the device and the work profile, on devices running Android 9 and above with a work profile. This can be set only if password_scope is set to SCOPE_PROFILE, the policy will be rejected otherwise. If user has not set a separate work lock and this field is set to REQUIRE_SEPARATE_WORK_LOCK, a NonComplianceDetail is reported with nonComplianceReason set to USER_ACTION. */
		unifiedLockSettings: FormControl<PasswordRequirementsUnifiedLockSettings | null | undefined>,
	}
	export function CreatePasswordRequirementsFormGroup() {
		return new FormGroup<PasswordRequirementsFormProperties>({
			maximumFailedPasswordsForWipe: new FormControl<number | null | undefined>(undefined),
			passwordExpirationTimeout: new FormControl<string | null | undefined>(undefined),
			passwordHistoryLength: new FormControl<number | null | undefined>(undefined),
			passwordMinimumLength: new FormControl<number | null | undefined>(undefined),
			passwordMinimumLetters: new FormControl<number | null | undefined>(undefined),
			passwordMinimumLowerCase: new FormControl<number | null | undefined>(undefined),
			passwordMinimumNonLetter: new FormControl<number | null | undefined>(undefined),
			passwordMinimumNumeric: new FormControl<number | null | undefined>(undefined),
			passwordMinimumSymbols: new FormControl<number | null | undefined>(undefined),
			passwordMinimumUpperCase: new FormControl<number | null | undefined>(undefined),
			passwordQuality: new FormControl<PasswordRequirementsPasswordQuality | null | undefined>(undefined),
			passwordScope: new FormControl<PasswordRequirementsPasswordScope | null | undefined>(undefined),
			requirePasswordUnlock: new FormControl<PasswordRequirementsRequirePasswordUnlock | null | undefined>(undefined),
			unifiedLockSettings: new FormControl<PasswordRequirementsUnifiedLockSettings | null | undefined>(undefined),
		});

	}

	export enum PasswordRequirementsPasswordQuality { PASSWORD_QUALITY_UNSPECIFIED = 'PASSWORD_QUALITY_UNSPECIFIED', BIOMETRIC_WEAK = 'BIOMETRIC_WEAK', SOMETHING = 'SOMETHING', NUMERIC = 'NUMERIC', NUMERIC_COMPLEX = 'NUMERIC_COMPLEX', ALPHABETIC = 'ALPHABETIC', ALPHANUMERIC = 'ALPHANUMERIC', COMPLEX = 'COMPLEX', COMPLEXITY_LOW = 'COMPLEXITY_LOW', COMPLEXITY_MEDIUM = 'COMPLEXITY_MEDIUM', COMPLEXITY_HIGH = 'COMPLEXITY_HIGH' }

	export enum PasswordRequirementsPasswordScope { SCOPE_UNSPECIFIED = 'SCOPE_UNSPECIFIED', SCOPE_DEVICE = 'SCOPE_DEVICE', SCOPE_PROFILE = 'SCOPE_PROFILE' }

	export enum PasswordRequirementsRequirePasswordUnlock { REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED = 'REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED', USE_DEFAULT_DEVICE_TIMEOUT = 'USE_DEFAULT_DEVICE_TIMEOUT', REQUIRE_EVERY_DAY = 'REQUIRE_EVERY_DAY' }

	export enum PasswordRequirementsUnifiedLockSettings { UNIFIED_LOCK_SETTINGS_UNSPECIFIED = 'UNIFIED_LOCK_SETTINGS_UNSPECIFIED', ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK = 'ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK', REQUIRE_SEPARATE_WORK_LOCK = 'REQUIRE_SEPARATE_WORK_LOCK' }

	export enum DeviceAppliedState { DEVICE_STATE_UNSPECIFIED = 'DEVICE_STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DISABLED = 'DISABLED', DELETED = 'DELETED', PROVISIONING = 'PROVISIONING', LOST = 'LOST' }


	/** Information about security related device settings on device. */
	export interface DeviceSettings {

		/** Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device. */
		adbEnabled?: boolean | null;

		/** Whether developer mode is enabled on the device. */
		developmentSettingsEnabled?: boolean | null;

		/** Encryption status from DevicePolicyManager. */
		encryptionStatus?: DeviceSettingsEncryptionStatus | null;

		/** Whether the device is secured with PIN/password. */
		isDeviceSecure?: boolean | null;

		/** Whether the storage encryption is enabled. */
		isEncrypted?: boolean | null;

		/** Whether installing apps from unknown sources is enabled. */
		unknownSourcesEnabled?: boolean | null;

		/** Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced on the device. */
		verifyAppsEnabled?: boolean | null;
	}

	/** Information about security related device settings on device. */
	export interface DeviceSettingsFormProperties {

		/** Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device. */
		adbEnabled: FormControl<boolean | null | undefined>,

		/** Whether developer mode is enabled on the device. */
		developmentSettingsEnabled: FormControl<boolean | null | undefined>,

		/** Encryption status from DevicePolicyManager. */
		encryptionStatus: FormControl<DeviceSettingsEncryptionStatus | null | undefined>,

		/** Whether the device is secured with PIN/password. */
		isDeviceSecure: FormControl<boolean | null | undefined>,

		/** Whether the storage encryption is enabled. */
		isEncrypted: FormControl<boolean | null | undefined>,

		/** Whether installing apps from unknown sources is enabled. */
		unknownSourcesEnabled: FormControl<boolean | null | undefined>,

		/** Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced on the device. */
		verifyAppsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDeviceSettingsFormGroup() {
		return new FormGroup<DeviceSettingsFormProperties>({
			adbEnabled: new FormControl<boolean | null | undefined>(undefined),
			developmentSettingsEnabled: new FormControl<boolean | null | undefined>(undefined),
			encryptionStatus: new FormControl<DeviceSettingsEncryptionStatus | null | undefined>(undefined),
			isDeviceSecure: new FormControl<boolean | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			unknownSourcesEnabled: new FormControl<boolean | null | undefined>(undefined),
			verifyAppsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DeviceSettingsEncryptionStatus { ENCRYPTION_STATUS_UNSPECIFIED = 'ENCRYPTION_STATUS_UNSPECIFIED', UNSUPPORTED = 'UNSUPPORTED', INACTIVE = 'INACTIVE', ACTIVATING = 'ACTIVATING', ACTIVE = 'ACTIVE', ACTIVE_DEFAULT_KEY = 'ACTIVE_DEFAULT_KEY', ACTIVE_PER_USER = 'ACTIVE_PER_USER' }


	/** Device display information. */
	export interface Display {

		/**
		 * Display density expressed as dots-per-inch.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		density?: number | null;

		/**
		 * Unique display id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		displayId?: number | null;

		/**
		 * Display height in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** Name of the display. */
		name?: string | null;

		/**
		 * Refresh rate of the display in frames per second.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshRate?: number | null;

		/** State of the display. */
		state?: DisplayState | null;

		/**
		 * Display width in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Device display information. */
	export interface DisplayFormProperties {

		/**
		 * Display density expressed as dots-per-inch.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		density: FormControl<number | null | undefined>,

		/**
		 * Unique display id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		displayId: FormControl<number | null | undefined>,

		/**
		 * Display height in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** Name of the display. */
		name: FormControl<string | null | undefined>,

		/**
		 * Refresh rate of the display in frames per second.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshRate: FormControl<number | null | undefined>,

		/** State of the display. */
		state: FormControl<DisplayState | null | undefined>,

		/**
		 * Display width in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateDisplayFormGroup() {
		return new FormGroup<DisplayFormProperties>({
			density: new FormControl<number | null | undefined>(undefined),
			displayId: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refreshRate: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<DisplayState | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DisplayState { DISPLAY_STATE_UNSPECIFIED = 'DISPLAY_STATE_UNSPECIFIED', OFF = 'OFF', ON = 'ON', DOZE = 'DOZE', SUSPENDED = 'SUSPENDED' }


	/** Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy. */
	export interface HardwareInfo {

		/** Battery shutdown temperature thresholds in Celsius for each battery on the device. */
		batteryShutdownTemperatures?: Array<number>;

		/** Battery throttling temperature thresholds in Celsius for each battery on the device. */
		batteryThrottlingTemperatures?: Array<number>;

		/** Brand of the device. For example, Google. */
		brand?: string | null;

		/** CPU shutdown temperature thresholds in Celsius for each CPU on the device. */
		cpuShutdownTemperatures?: Array<number>;

		/** CPU throttling temperature thresholds in Celsius for each CPU on the device. */
		cpuThrottlingTemperatures?: Array<number>;

		/** Baseband version. For example, MDM9625_104662.22.05.34p. */
		deviceBasebandVersion?: string | null;

		/** Output only. ID that uniquely identifies a personally-owned device in a particular organization. On the same physical device when enrolled with the same organization, this ID persists across setups and even factory resets. This ID is available on personally-owned devices with a work profile on devices running Android 12 and above. */
		enterpriseSpecificId?: string | null;

		/** GPU shutdown temperature thresholds in Celsius for each GPU on the device. */
		gpuShutdownTemperatures?: Array<number>;

		/** GPU throttling temperature thresholds in Celsius for each GPU on the device. */
		gpuThrottlingTemperatures?: Array<number>;

		/** Name of the hardware. For example, Angler. */
		hardware?: string | null;

		/** Manufacturer. For example, Motorola. */
		manufacturer?: string | null;

		/** The model of the device. For example, Asus Nexus 7. */
		model?: string | null;

		/** The device serial number. */
		serialNumber?: string | null;

		/** Device skin shutdown temperature thresholds in Celsius. */
		skinShutdownTemperatures?: Array<number>;

		/** Device skin throttling temperature thresholds in Celsius. */
		skinThrottlingTemperatures?: Array<number>;
	}

	/** Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy. */
	export interface HardwareInfoFormProperties {

		/** Brand of the device. For example, Google. */
		brand: FormControl<string | null | undefined>,

		/** Baseband version. For example, MDM9625_104662.22.05.34p. */
		deviceBasebandVersion: FormControl<string | null | undefined>,

		/** Output only. ID that uniquely identifies a personally-owned device in a particular organization. On the same physical device when enrolled with the same organization, this ID persists across setups and even factory resets. This ID is available on personally-owned devices with a work profile on devices running Android 12 and above. */
		enterpriseSpecificId: FormControl<string | null | undefined>,

		/** Name of the hardware. For example, Angler. */
		hardware: FormControl<string | null | undefined>,

		/** Manufacturer. For example, Motorola. */
		manufacturer: FormControl<string | null | undefined>,

		/** The model of the device. For example, Asus Nexus 7. */
		model: FormControl<string | null | undefined>,

		/** The device serial number. */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateHardwareInfoFormGroup() {
		return new FormGroup<HardwareInfoFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			deviceBasebandVersion: new FormControl<string | null | undefined>(undefined),
			enterpriseSpecificId: new FormControl<string | null | undefined>(undefined),
			hardware: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health. */
	export interface HardwareStatus {

		/** Current battery temperatures in Celsius for each battery on the device. */
		batteryTemperatures?: Array<number>;

		/** Current CPU temperatures in Celsius for each CPU on the device. */
		cpuTemperatures?: Array<number>;

		/** CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system. */
		cpuUsages?: Array<number>;

		/** The time the measurements were taken. */
		createTime?: string | null;

		/** Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system. */
		fanSpeeds?: Array<number>;

		/** Current GPU temperatures in Celsius for each GPU on the device. */
		gpuTemperatures?: Array<number>;

		/** Current device skin temperatures in Celsius. */
		skinTemperatures?: Array<number>;
	}

	/** Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health. */
	export interface HardwareStatusFormProperties {

		/** The time the measurements were taken. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateHardwareStatusFormGroup() {
		return new FormGroup<HardwareStatusFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceManagementMode { MANAGEMENT_MODE_UNSPECIFIED = 'MANAGEMENT_MODE_UNSPECIFIED', DEVICE_OWNER = 'DEVICE_OWNER', PROFILE_OWNER = 'PROFILE_OWNER' }


	/** An event related to memory and storage measurements. */
	export interface MemoryEvent {

		/** The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium. */
		byteCount?: string | null;

		/** The creation time of the event. */
		createTime?: string | null;

		/** Event type. */
		eventType?: MemoryEventEventType | null;
	}

	/** An event related to memory and storage measurements. */
	export interface MemoryEventFormProperties {

		/** The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium. */
		byteCount: FormControl<string | null | undefined>,

		/** The creation time of the event. */
		createTime: FormControl<string | null | undefined>,

		/** Event type. */
		eventType: FormControl<MemoryEventEventType | null | undefined>,
	}
	export function CreateMemoryEventFormGroup() {
		return new FormGroup<MemoryEventFormProperties>({
			byteCount: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<MemoryEventEventType | null | undefined>(undefined),
		});

	}

	export enum MemoryEventEventType { MEMORY_EVENT_TYPE_UNSPECIFIED = 'MEMORY_EVENT_TYPE_UNSPECIFIED', RAM_MEASURED = 'RAM_MEASURED', INTERNAL_STORAGE_MEASURED = 'INTERNAL_STORAGE_MEASURED', EXTERNAL_STORAGE_DETECTED = 'EXTERNAL_STORAGE_DETECTED', EXTERNAL_STORAGE_REMOVED = 'EXTERNAL_STORAGE_REMOVED', EXTERNAL_STORAGE_MEASURED = 'EXTERNAL_STORAGE_MEASURED' }


	/** Information about device memory and storage. */
	export interface MemoryInfo {

		/** Total internal storage on device in bytes. */
		totalInternalStorage?: string | null;

		/** Total RAM on device in bytes. */
		totalRam?: string | null;
	}

	/** Information about device memory and storage. */
	export interface MemoryInfoFormProperties {

		/** Total internal storage on device in bytes. */
		totalInternalStorage: FormControl<string | null | undefined>,

		/** Total RAM on device in bytes. */
		totalRam: FormControl<string | null | undefined>,
	}
	export function CreateMemoryInfoFormGroup() {
		return new FormGroup<MemoryInfoFormProperties>({
			totalInternalStorage: new FormControl<string | null | undefined>(undefined),
			totalRam: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Device network info. */
	export interface NetworkInfo {

		/** IMEI number of the GSM device. For example, A1000031212. */
		imei?: string | null;

		/** MEID number of the CDMA device. For example, A00000292788E1. */
		meid?: string | null;

		/** Alphabetic name of current registered operator. For example, Vodafone. */
		networkOperatorName?: string | null;

		/** Provides telephony information associated with each SIM card on the device. Only supported on fully managed devices starting from Android API level 23. */
		telephonyInfos?: Array<TelephonyInfo>;

		/** Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11. */
		wifiMacAddress?: string | null;
	}

	/** Device network info. */
	export interface NetworkInfoFormProperties {

		/** IMEI number of the GSM device. For example, A1000031212. */
		imei: FormControl<string | null | undefined>,

		/** MEID number of the CDMA device. For example, A00000292788E1. */
		meid: FormControl<string | null | undefined>,

		/** Alphabetic name of current registered operator. For example, Vodafone. */
		networkOperatorName: FormControl<string | null | undefined>,

		/** Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11. */
		wifiMacAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInfoFormGroup() {
		return new FormGroup<NetworkInfoFormProperties>({
			imei: new FormControl<string | null | undefined>(undefined),
			meid: new FormControl<string | null | undefined>(undefined),
			networkOperatorName: new FormControl<string | null | undefined>(undefined),
			wifiMacAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23. */
	export interface TelephonyInfo {

		/** The carrier name associated with this SIM card. */
		carrierName?: string | null;

		/** The phone number associated with this SIM card. */
		phoneNumber?: string | null;
	}

	/** Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23. */
	export interface TelephonyInfoFormProperties {

		/** The carrier name associated with this SIM card. */
		carrierName: FormControl<string | null | undefined>,

		/** The phone number associated with this SIM card. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateTelephonyInfoFormGroup() {
		return new FormGroup<TelephonyInfoFormProperties>({
			carrierName: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides detail about non-compliance with a policy setting. */
	export interface NonComplianceDetail {

		/** If the policy setting could not be applied, the current value of the setting on the device. */
		currentValue?: any;

		/** For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a subfield name. 2) For array-typed fields, the field name is followed by the array index enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url */
		fieldPath?: string | null;

		/** If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated. */
		installationFailureReason?: NonComplianceDetailInstallationFailureReason | null;

		/** The reason the device is not in compliance with the setting. */
		nonComplianceReason?: NonComplianceDetailConditionNonComplianceReason | null;

		/** The package name indicating which app is out of compliance, if applicable. */
		packageName?: string | null;

		/** The name of the policy setting. This is the JSON field name of a top-level Policy field. */
		settingName?: string | null;

		/** Additional context for SpecificNonComplianceReason. */
		specificNonComplianceContext?: SpecificNonComplianceContext;

		/** The policy-specific reason the device is not in compliance with the setting. */
		specificNonComplianceReason?: NonComplianceDetailSpecificNonComplianceReason | null;
	}

	/** Provides detail about non-compliance with a policy setting. */
	export interface NonComplianceDetailFormProperties {

		/** If the policy setting could not be applied, the current value of the setting on the device. */
		currentValue: FormControl<any | null | undefined>,

		/** For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a subfield name. 2) For array-typed fields, the field name is followed by the array index enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url */
		fieldPath: FormControl<string | null | undefined>,

		/** If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated. */
		installationFailureReason: FormControl<NonComplianceDetailInstallationFailureReason | null | undefined>,

		/** The reason the device is not in compliance with the setting. */
		nonComplianceReason: FormControl<NonComplianceDetailConditionNonComplianceReason | null | undefined>,

		/** The package name indicating which app is out of compliance, if applicable. */
		packageName: FormControl<string | null | undefined>,

		/** The name of the policy setting. This is the JSON field name of a top-level Policy field. */
		settingName: FormControl<string | null | undefined>,

		/** The policy-specific reason the device is not in compliance with the setting. */
		specificNonComplianceReason: FormControl<NonComplianceDetailSpecificNonComplianceReason | null | undefined>,
	}
	export function CreateNonComplianceDetailFormGroup() {
		return new FormGroup<NonComplianceDetailFormProperties>({
			currentValue: new FormControl<any | null | undefined>(undefined),
			fieldPath: new FormControl<string | null | undefined>(undefined),
			installationFailureReason: new FormControl<NonComplianceDetailInstallationFailureReason | null | undefined>(undefined),
			nonComplianceReason: new FormControl<NonComplianceDetailConditionNonComplianceReason | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			settingName: new FormControl<string | null | undefined>(undefined),
			specificNonComplianceReason: new FormControl<NonComplianceDetailSpecificNonComplianceReason | null | undefined>(undefined),
		});

	}

	export enum NonComplianceDetailInstallationFailureReason { INSTALLATION_FAILURE_REASON_UNSPECIFIED = 'INSTALLATION_FAILURE_REASON_UNSPECIFIED', INSTALLATION_FAILURE_REASON_UNKNOWN = 'INSTALLATION_FAILURE_REASON_UNKNOWN', IN_PROGRESS = 'IN_PROGRESS', NOT_FOUND = 'NOT_FOUND', NOT_COMPATIBLE_WITH_DEVICE = 'NOT_COMPATIBLE_WITH_DEVICE', NOT_APPROVED = 'NOT_APPROVED', PERMISSIONS_NOT_ACCEPTED = 'PERMISSIONS_NOT_ACCEPTED', NOT_AVAILABLE_IN_COUNTRY = 'NOT_AVAILABLE_IN_COUNTRY', NO_LICENSES_REMAINING = 'NO_LICENSES_REMAINING', NOT_ENROLLED = 'NOT_ENROLLED', USER_INVALID = 'USER_INVALID', NETWORK_ERROR_UNRELIABLE_CONNECTION = 'NETWORK_ERROR_UNRELIABLE_CONNECTION', INSUFFICIENT_STORAGE = 'INSUFFICIENT_STORAGE' }


	/** Additional context for SpecificNonComplianceReason. */
	export interface SpecificNonComplianceContext {

		/** Additional context for non-compliance related to Wi-Fi configuration. */
		oncWifiContext?: OncWifiContext;

		/** Additional context for non-compliance related to password policies. */
		passwordPoliciesContext?: PasswordPoliciesContext;
	}

	/** Additional context for SpecificNonComplianceReason. */
	export interface SpecificNonComplianceContextFormProperties {
	}
	export function CreateSpecificNonComplianceContextFormGroup() {
		return new FormGroup<SpecificNonComplianceContextFormProperties>({
		});

	}


	/** Additional context for non-compliance related to Wi-Fi configuration. */
	export interface OncWifiContext {

		/** The GUID of non-compliant Wi-Fi configuration. */
		wifiGuid?: string | null;
	}

	/** Additional context for non-compliance related to Wi-Fi configuration. */
	export interface OncWifiContextFormProperties {

		/** The GUID of non-compliant Wi-Fi configuration. */
		wifiGuid: FormControl<string | null | undefined>,
	}
	export function CreateOncWifiContextFormGroup() {
		return new FormGroup<OncWifiContextFormProperties>({
			wifiGuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional context for non-compliance related to password policies. */
	export interface PasswordPoliciesContext {

		/** The scope of non-compliant password. */
		passwordPolicyScope?: PasswordRequirementsPasswordScope | null;
	}

	/** Additional context for non-compliance related to password policies. */
	export interface PasswordPoliciesContextFormProperties {

		/** The scope of non-compliant password. */
		passwordPolicyScope: FormControl<PasswordRequirementsPasswordScope | null | undefined>,
	}
	export function CreatePasswordPoliciesContextFormGroup() {
		return new FormGroup<PasswordPoliciesContextFormProperties>({
			passwordPolicyScope: new FormControl<PasswordRequirementsPasswordScope | null | undefined>(undefined),
		});

	}

	export enum NonComplianceDetailSpecificNonComplianceReason { SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED = 'SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED', PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED = 'PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED', PASSWORD_POLICIES_PASSWORD_EXPIRED = 'PASSWORD_POLICIES_PASSWORD_EXPIRED', PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT = 'PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT', ONC_WIFI_INVALID_VALUE = 'ONC_WIFI_INVALID_VALUE', ONC_WIFI_API_LEVEL = 'ONC_WIFI_API_LEVEL', ONC_WIFI_INVALID_ENTERPRISE_CONFIG = 'ONC_WIFI_INVALID_ENTERPRISE_CONFIG' }

	export enum DeviceOwnership { OWNERSHIP_UNSPECIFIED = 'OWNERSHIP_UNSPECIFIED', COMPANY_OWNED = 'COMPANY_OWNED', PERSONALLY_OWNED = 'PERSONALLY_OWNED' }


	/** A power management event. */
	export interface PowerManagementEvent {

		/**
		 * For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage.
		 * Type: float
		 */
		batteryLevel?: number | null;

		/** The creation time of the event. */
		createTime?: string | null;

		/** Event type. */
		eventType?: PowerManagementEventEventType | null;
	}

	/** A power management event. */
	export interface PowerManagementEventFormProperties {

		/**
		 * For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage.
		 * Type: float
		 */
		batteryLevel: FormControl<number | null | undefined>,

		/** The creation time of the event. */
		createTime: FormControl<string | null | undefined>,

		/** Event type. */
		eventType: FormControl<PowerManagementEventEventType | null | undefined>,
	}
	export function CreatePowerManagementEventFormGroup() {
		return new FormGroup<PowerManagementEventFormProperties>({
			batteryLevel: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<PowerManagementEventEventType | null | undefined>(undefined),
		});

	}

	export enum PowerManagementEventEventType { POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED = 'POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED', BATTERY_LEVEL_COLLECTED = 'BATTERY_LEVEL_COLLECTED', POWER_CONNECTED = 'POWER_CONNECTED', POWER_DISCONNECTED = 'POWER_DISCONNECTED', BATTERY_LOW = 'BATTERY_LOW', BATTERY_OKAY = 'BATTERY_OKAY', BOOT_COMPLETED = 'BOOT_COMPLETED', SHUTDOWN = 'SHUTDOWN' }


	/** The security posture of the device, as determined by the current device state and the policies applied. */
	export interface SecurityPosture {

		/** Device's security posture value. */
		devicePosture?: SecurityPostureDevicePosture | null;

		/** Additional details regarding the security posture of the device. */
		postureDetails?: Array<PostureDetail>;
	}

	/** The security posture of the device, as determined by the current device state and the policies applied. */
	export interface SecurityPostureFormProperties {

		/** Device's security posture value. */
		devicePosture: FormControl<SecurityPostureDevicePosture | null | undefined>,
	}
	export function CreateSecurityPostureFormGroup() {
		return new FormGroup<SecurityPostureFormProperties>({
			devicePosture: new FormControl<SecurityPostureDevicePosture | null | undefined>(undefined),
		});

	}

	export enum SecurityPostureDevicePosture { POSTURE_UNSPECIFIED = 'POSTURE_UNSPECIFIED', SECURE = 'SECURE', AT_RISK = 'AT_RISK', POTENTIALLY_COMPROMISED = 'POTENTIALLY_COMPROMISED' }


	/** Additional details regarding the security posture of the device. */
	export interface PostureDetail {

		/** Corresponding admin-facing advice to mitigate this security risk and improve the security posture of the device. */
		advice?: Array<UserFacingMessage>;

		/** A specific security risk that negatively affects the security posture of the device. */
		securityRisk?: PostureDetailSecurityRisk | null;
	}

	/** Additional details regarding the security posture of the device. */
	export interface PostureDetailFormProperties {

		/** A specific security risk that negatively affects the security posture of the device. */
		securityRisk: FormControl<PostureDetailSecurityRisk | null | undefined>,
	}
	export function CreatePostureDetailFormGroup() {
		return new FormGroup<PostureDetailFormProperties>({
			securityRisk: new FormControl<PostureDetailSecurityRisk | null | undefined>(undefined),
		});

	}

	export enum PostureDetailSecurityRisk { SECURITY_RISK_UNSPECIFIED = 'SECURITY_RISK_UNSPECIFIED', UNKNOWN_OS = 'UNKNOWN_OS', COMPROMISED_OS = 'COMPROMISED_OS', HARDWARE_BACKED_EVALUATION_FAILED = 'HARDWARE_BACKED_EVALUATION_FAILED' }


	/** Information about device software. */
	export interface SoftwareInfo {

		/** Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys. */
		androidBuildNumber?: string | null;

		/** Build time. */
		androidBuildTime?: string | null;

		/**
		 * The Android Device Policy app version code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		androidDevicePolicyVersionCode?: number | null;

		/** The Android Device Policy app version as displayed to the user. */
		androidDevicePolicyVersionName?: string | null;

		/** The user-visible Android version string. For example, 6.0.1. */
		androidVersion?: string | null;

		/** The system bootloader version number, e.g. 0.6.7. */
		bootloaderVersion?: string | null;

		/** SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified. */
		deviceBuildSignature?: string | null;

		/** Kernel version, for example, 2.6.32.9-g103d848. */
		deviceKernelVersion?: string | null;

		/** An IETF BCP 47 language code for the primary locale on the device. */
		primaryLanguageCode?: string | null;

		/** Security patch level, e.g. 2016-05-01. */
		securityPatchLevel?: string | null;

		/** Information about a potential pending system update. */
		systemUpdateInfo?: SystemUpdateInfo;
	}

	/** Information about device software. */
	export interface SoftwareInfoFormProperties {

		/** Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys. */
		androidBuildNumber: FormControl<string | null | undefined>,

		/** Build time. */
		androidBuildTime: FormControl<string | null | undefined>,

		/**
		 * The Android Device Policy app version code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		androidDevicePolicyVersionCode: FormControl<number | null | undefined>,

		/** The Android Device Policy app version as displayed to the user. */
		androidDevicePolicyVersionName: FormControl<string | null | undefined>,

		/** The user-visible Android version string. For example, 6.0.1. */
		androidVersion: FormControl<string | null | undefined>,

		/** The system bootloader version number, e.g. 0.6.7. */
		bootloaderVersion: FormControl<string | null | undefined>,

		/** SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified. */
		deviceBuildSignature: FormControl<string | null | undefined>,

		/** Kernel version, for example, 2.6.32.9-g103d848. */
		deviceKernelVersion: FormControl<string | null | undefined>,

		/** An IETF BCP 47 language code for the primary locale on the device. */
		primaryLanguageCode: FormControl<string | null | undefined>,

		/** Security patch level, e.g. 2016-05-01. */
		securityPatchLevel: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareInfoFormGroup() {
		return new FormGroup<SoftwareInfoFormProperties>({
			androidBuildNumber: new FormControl<string | null | undefined>(undefined),
			androidBuildTime: new FormControl<string | null | undefined>(undefined),
			androidDevicePolicyVersionCode: new FormControl<number | null | undefined>(undefined),
			androidDevicePolicyVersionName: new FormControl<string | null | undefined>(undefined),
			androidVersion: new FormControl<string | null | undefined>(undefined),
			bootloaderVersion: new FormControl<string | null | undefined>(undefined),
			deviceBuildSignature: new FormControl<string | null | undefined>(undefined),
			deviceKernelVersion: new FormControl<string | null | undefined>(undefined),
			primaryLanguageCode: new FormControl<string | null | undefined>(undefined),
			securityPatchLevel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a potential pending system update. */
	export interface SystemUpdateInfo {

		/** The time when the update was first available. A zero value indicates that this field is not set. This field is set only if an update is available (that is, updateStatus is neither UPDATE_STATUS_UNKNOWN nor UP_TO_DATE). */
		updateReceivedTime?: string | null;

		/** The status of an update: whether an update exists and what type it is. */
		updateStatus?: SystemUpdateInfoUpdateStatus | null;
	}

	/** Information about a potential pending system update. */
	export interface SystemUpdateInfoFormProperties {

		/** The time when the update was first available. A zero value indicates that this field is not set. This field is set only if an update is available (that is, updateStatus is neither UPDATE_STATUS_UNKNOWN nor UP_TO_DATE). */
		updateReceivedTime: FormControl<string | null | undefined>,

		/** The status of an update: whether an update exists and what type it is. */
		updateStatus: FormControl<SystemUpdateInfoUpdateStatus | null | undefined>,
	}
	export function CreateSystemUpdateInfoFormGroup() {
		return new FormGroup<SystemUpdateInfoFormProperties>({
			updateReceivedTime: new FormControl<string | null | undefined>(undefined),
			updateStatus: new FormControl<SystemUpdateInfoUpdateStatus | null | undefined>(undefined),
		});

	}

	export enum SystemUpdateInfoUpdateStatus { UPDATE_STATUS_UNKNOWN = 'UPDATE_STATUS_UNKNOWN', UP_TO_DATE = 'UP_TO_DATE', UNKNOWN_UPDATE_AVAILABLE = 'UNKNOWN_UPDATE_AVAILABLE', SECURITY_UPDATE_AVAILABLE = 'SECURITY_UPDATE_AVAILABLE', OS_UPDATE_AVAILABLE = 'OS_UPDATE_AVAILABLE' }


	/** A user belonging to an enterprise. */
	export interface User {

		/** A unique identifier you create for this user, such as user342 or asset#44418. This field must be set when the user is created and can't be updated. This field must not contain personally identifiable information (PII). This identifier must be 1024 characters or less; otherwise, the update policy request will fail. */
		accountIdentifier?: string | null;
	}

	/** A user belonging to an enterprise. */
	export interface UserFormProperties {

		/** A unique identifier you create for this user, such as user342 or asset#44418. This field must be set when the user is created and can't be updated. This field must not contain personally identifiable information (PII). This identifier must be 1024 characters or less; otherwise, the update policy request will fail. */
		accountIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			accountIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Covers controls for device connectivity such as Wi-Fi, USB data access, keyboard/mouse connections, and more. */
	export interface DeviceConnectivityManagement {

		/** Controls Wi-Fi configuring privileges. Based on the option set, user will have either full or limited or no control in configuring Wi-Fi networks. */
		configureWifi?: DeviceConnectivityManagementConfigureWifi | null;

		/** Controls tethering settings. Based on the value set, the user is partially or fully disallowed from using different forms of tethering. */
		tetheringSettings?: DeviceConnectivityManagementTetheringSettings | null;

		/** Controls what files and/or data can be transferred via USB. Supported only on company-owned devices. */
		usbDataAccess?: DeviceConnectivityManagementUsbDataAccess | null;

		/** Controls configuring and using Wi-Fi direct settings. Supported on company-owned devices running Android 13 and above. */
		wifiDirectSettings?: DeviceConnectivityManagementWifiDirectSettings | null;
	}

	/** Covers controls for device connectivity such as Wi-Fi, USB data access, keyboard/mouse connections, and more. */
	export interface DeviceConnectivityManagementFormProperties {

		/** Controls Wi-Fi configuring privileges. Based on the option set, user will have either full or limited or no control in configuring Wi-Fi networks. */
		configureWifi: FormControl<DeviceConnectivityManagementConfigureWifi | null | undefined>,

		/** Controls tethering settings. Based on the value set, the user is partially or fully disallowed from using different forms of tethering. */
		tetheringSettings: FormControl<DeviceConnectivityManagementTetheringSettings | null | undefined>,

		/** Controls what files and/or data can be transferred via USB. Supported only on company-owned devices. */
		usbDataAccess: FormControl<DeviceConnectivityManagementUsbDataAccess | null | undefined>,

		/** Controls configuring and using Wi-Fi direct settings. Supported on company-owned devices running Android 13 and above. */
		wifiDirectSettings: FormControl<DeviceConnectivityManagementWifiDirectSettings | null | undefined>,
	}
	export function CreateDeviceConnectivityManagementFormGroup() {
		return new FormGroup<DeviceConnectivityManagementFormProperties>({
			configureWifi: new FormControl<DeviceConnectivityManagementConfigureWifi | null | undefined>(undefined),
			tetheringSettings: new FormControl<DeviceConnectivityManagementTetheringSettings | null | undefined>(undefined),
			usbDataAccess: new FormControl<DeviceConnectivityManagementUsbDataAccess | null | undefined>(undefined),
			wifiDirectSettings: new FormControl<DeviceConnectivityManagementWifiDirectSettings | null | undefined>(undefined),
		});

	}

	export enum DeviceConnectivityManagementConfigureWifi { CONFIGURE_WIFI_UNSPECIFIED = 'CONFIGURE_WIFI_UNSPECIFIED', ALLOW_CONFIGURING_WIFI = 'ALLOW_CONFIGURING_WIFI', DISALLOW_ADD_WIFI_CONFIG = 'DISALLOW_ADD_WIFI_CONFIG', DISALLOW_CONFIGURING_WIFI = 'DISALLOW_CONFIGURING_WIFI' }

	export enum DeviceConnectivityManagementTetheringSettings { TETHERING_SETTINGS_UNSPECIFIED = 'TETHERING_SETTINGS_UNSPECIFIED', ALLOW_ALL_TETHERING = 'ALLOW_ALL_TETHERING', DISALLOW_WIFI_TETHERING = 'DISALLOW_WIFI_TETHERING', DISALLOW_ALL_TETHERING = 'DISALLOW_ALL_TETHERING' }

	export enum DeviceConnectivityManagementUsbDataAccess { USB_DATA_ACCESS_UNSPECIFIED = 'USB_DATA_ACCESS_UNSPECIFIED', ALLOW_USB_DATA_TRANSFER = 'ALLOW_USB_DATA_TRANSFER', DISALLOW_USB_FILE_TRANSFER = 'DISALLOW_USB_FILE_TRANSFER', DISALLOW_USB_DATA_TRANSFER = 'DISALLOW_USB_DATA_TRANSFER' }

	export enum DeviceConnectivityManagementWifiDirectSettings { WIFI_DIRECT_SETTINGS_UNSPECIFIED = 'WIFI_DIRECT_SETTINGS_UNSPECIFIED', ALLOW_WIFI_DIRECT = 'ALLOW_WIFI_DIRECT', DISALLOW_WIFI_DIRECT = 'DISALLOW_WIFI_DIRECT' }


	/** Controls for device radio settings. */
	export interface DeviceRadioState {

		/** Controls whether airplane mode can be toggled by the user or not. */
		airplaneModeState?: DeviceRadioStateAirplaneModeState | null;

		/** Controls whether cellular 2G setting can be toggled by the user or not. */
		cellularTwoGState?: DeviceRadioStateCellularTwoGState | null;

		/** The minimum required security level of Wi-Fi networks that the device can connect to. */
		minimumWifiSecurityLevel?: DeviceRadioStateMinimumWifiSecurityLevel | null;

		/** Controls the state of the ultra wideband setting and whether the user can toggle it on or off. */
		ultraWidebandState?: DeviceRadioStateUltraWidebandState | null;

		/** Controls current state of Wi-Fi and if user can change its state. */
		wifiState?: DeviceRadioStateWifiState | null;
	}

	/** Controls for device radio settings. */
	export interface DeviceRadioStateFormProperties {

		/** Controls whether airplane mode can be toggled by the user or not. */
		airplaneModeState: FormControl<DeviceRadioStateAirplaneModeState | null | undefined>,

		/** Controls whether cellular 2G setting can be toggled by the user or not. */
		cellularTwoGState: FormControl<DeviceRadioStateCellularTwoGState | null | undefined>,

		/** The minimum required security level of Wi-Fi networks that the device can connect to. */
		minimumWifiSecurityLevel: FormControl<DeviceRadioStateMinimumWifiSecurityLevel | null | undefined>,

		/** Controls the state of the ultra wideband setting and whether the user can toggle it on or off. */
		ultraWidebandState: FormControl<DeviceRadioStateUltraWidebandState | null | undefined>,

		/** Controls current state of Wi-Fi and if user can change its state. */
		wifiState: FormControl<DeviceRadioStateWifiState | null | undefined>,
	}
	export function CreateDeviceRadioStateFormGroup() {
		return new FormGroup<DeviceRadioStateFormProperties>({
			airplaneModeState: new FormControl<DeviceRadioStateAirplaneModeState | null | undefined>(undefined),
			cellularTwoGState: new FormControl<DeviceRadioStateCellularTwoGState | null | undefined>(undefined),
			minimumWifiSecurityLevel: new FormControl<DeviceRadioStateMinimumWifiSecurityLevel | null | undefined>(undefined),
			ultraWidebandState: new FormControl<DeviceRadioStateUltraWidebandState | null | undefined>(undefined),
			wifiState: new FormControl<DeviceRadioStateWifiState | null | undefined>(undefined),
		});

	}

	export enum DeviceRadioStateAirplaneModeState { AIRPLANE_MODE_STATE_UNSPECIFIED = 'AIRPLANE_MODE_STATE_UNSPECIFIED', AIRPLANE_MODE_USER_CHOICE = 'AIRPLANE_MODE_USER_CHOICE', AIRPLANE_MODE_DISABLED = 'AIRPLANE_MODE_DISABLED' }

	export enum DeviceRadioStateCellularTwoGState { CELLULAR_TWO_G_STATE_UNSPECIFIED = 'CELLULAR_TWO_G_STATE_UNSPECIFIED', CELLULAR_TWO_G_USER_CHOICE = 'CELLULAR_TWO_G_USER_CHOICE', CELLULAR_TWO_G_DISABLED = 'CELLULAR_TWO_G_DISABLED' }

	export enum DeviceRadioStateMinimumWifiSecurityLevel { MINIMUM_WIFI_SECURITY_LEVEL_UNSPECIFIED = 'MINIMUM_WIFI_SECURITY_LEVEL_UNSPECIFIED', OPEN_NETWORK_SECURITY = 'OPEN_NETWORK_SECURITY', PERSONAL_NETWORK_SECURITY = 'PERSONAL_NETWORK_SECURITY', ENTERPRISE_NETWORK_SECURITY = 'ENTERPRISE_NETWORK_SECURITY' }

	export enum DeviceRadioStateUltraWidebandState { ULTRA_WIDEBAND_STATE_UNSPECIFIED = 'ULTRA_WIDEBAND_STATE_UNSPECIFIED', ULTRA_WIDEBAND_USER_CHOICE = 'ULTRA_WIDEBAND_USER_CHOICE', ULTRA_WIDEBAND_DISABLED = 'ULTRA_WIDEBAND_DISABLED' }

	export enum DeviceRadioStateWifiState { WIFI_STATE_UNSPECIFIED = 'WIFI_STATE_UNSPECIFIED', WIFI_STATE_USER_CHOICE = 'WIFI_STATE_USER_CHOICE', WIFI_ENABLED = 'WIFI_ENABLED', WIFI_DISABLED = 'WIFI_DISABLED' }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** An enrollment token. */
	export interface EnrollmentToken {

		/** Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail. */
		additionalData?: string | null;

		/** Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device. */
		allowPersonalUsage?: EnrollmentTokenAllowPersonalUsage | null;

		/** The length of time the enrollment token is valid, ranging from 1 minute to Durations.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Durations.html#MAX_VALUE), approximately 10,000 years. If not specified, the default duration is 1 hour. Please note that if requested duration causes the resulting expiration_timestamp to exceed Timestamps.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Timestamps.html#MAX_VALUE), then expiration_timestamp is coerced to Timestamps.MAX_VALUE. */
		duration?: string | null;

		/** The expiration time of the token. This is a read-only field generated by the server. */
		expirationTimestamp?: string | null;

		/** The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}. */
		name?: string | null;

		/** Whether the enrollment token is for one time use only. If the flag is set to true, only one device can use it for registration. */
		oneTimeOnly?: boolean | null;

		/** The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred. */
		policyName?: string | null;

		/** A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. */
		qrCode?: string | null;

		/** A user belonging to an enterprise. */
		user?: User;

		/** The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server. */
		value?: string | null;
	}

	/** An enrollment token. */
	export interface EnrollmentTokenFormProperties {

		/** Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail. */
		additionalData: FormControl<string | null | undefined>,

		/** Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device. */
		allowPersonalUsage: FormControl<EnrollmentTokenAllowPersonalUsage | null | undefined>,

		/** The length of time the enrollment token is valid, ranging from 1 minute to Durations.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Durations.html#MAX_VALUE), approximately 10,000 years. If not specified, the default duration is 1 hour. Please note that if requested duration causes the resulting expiration_timestamp to exceed Timestamps.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Timestamps.html#MAX_VALUE), then expiration_timestamp is coerced to Timestamps.MAX_VALUE. */
		duration: FormControl<string | null | undefined>,

		/** The expiration time of the token. This is a read-only field generated by the server. */
		expirationTimestamp: FormControl<string | null | undefined>,

		/** The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}. */
		name: FormControl<string | null | undefined>,

		/** Whether the enrollment token is for one time use only. If the flag is set to true, only one device can use it for registration. */
		oneTimeOnly: FormControl<boolean | null | undefined>,

		/** The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred. */
		policyName: FormControl<string | null | undefined>,

		/** A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. */
		qrCode: FormControl<string | null | undefined>,

		/** The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnrollmentTokenFormGroup() {
		return new FormGroup<EnrollmentTokenFormProperties>({
			additionalData: new FormControl<string | null | undefined>(undefined),
			allowPersonalUsage: new FormControl<EnrollmentTokenAllowPersonalUsage | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			expirationTimestamp: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			oneTimeOnly: new FormControl<boolean | null | undefined>(undefined),
			policyName: new FormControl<string | null | undefined>(undefined),
			qrCode: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnrollmentTokenAllowPersonalUsage { ALLOW_PERSONAL_USAGE_UNSPECIFIED = 'ALLOW_PERSONAL_USAGE_UNSPECIFIED', PERSONAL_USAGE_ALLOWED = 'PERSONAL_USAGE_ALLOWED', PERSONAL_USAGE_DISALLOWED = 'PERSONAL_USAGE_DISALLOWED' }


	/** The configuration applied to an enterprise. */
	export interface Enterprise {

		/** Deprecated and unused. */
		appAutoApprovalEnabled?: boolean | null;

		/** Contact details for managed Google Play enterprises. */
		contactInfo?: ContactInfo;

		/** The types of Google Pub/Sub notifications enabled for the enterprise. */
		enabledNotificationTypes?: Array<string>;

		/** The name of the enterprise displayed to users. This field has a maximum length of 100 characters. */
		enterpriseDisplayName?: string | null;

		/** Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash. */
		logo?: ExternalData;

		/** The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}. */
		name?: string | null;

		/**
		 * A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) | (green << 8) | blue, where the value of each component is between 0 and 255, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		primaryColor?: number | null;

		/** The topic which Pub/Sub notifications are published to, in the form projects/{project}/topics/{topic}. This field is only required if Pub/Sub notifications are enabled. */
		pubsubTopic?: string | null;

		/** Sign-in details of the enterprise. */
		signinDetails?: Array<SigninDetail>;

		/** Terms and conditions that must be accepted when provisioning a device for this enterprise. A page of terms is generated for each value in this list. */
		termsAndConditions?: Array<TermsAndConditions>;
	}

	/** The configuration applied to an enterprise. */
	export interface EnterpriseFormProperties {

		/** Deprecated and unused. */
		appAutoApprovalEnabled: FormControl<boolean | null | undefined>,

		/** The name of the enterprise displayed to users. This field has a maximum length of 100 characters. */
		enterpriseDisplayName: FormControl<string | null | undefined>,

		/** The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}. */
		name: FormControl<string | null | undefined>,

		/**
		 * A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) | (green << 8) | blue, where the value of each component is between 0 and 255, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		primaryColor: FormControl<number | null | undefined>,

		/** The topic which Pub/Sub notifications are published to, in the form projects/{project}/topics/{topic}. This field is only required if Pub/Sub notifications are enabled. */
		pubsubTopic: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseFormGroup() {
		return new FormGroup<EnterpriseFormProperties>({
			appAutoApprovalEnabled: new FormControl<boolean | null | undefined>(undefined),
			enterpriseDisplayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryColor: new FormControl<number | null | undefined>(undefined),
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash. */
	export interface ExternalData {

		/** The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn't match this hash, Android Device Policy won't use the data. */
		sha256Hash?: string | null;

		/** The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn't provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL. */
		url?: string | null;
	}

	/** Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash. */
	export interface ExternalDataFormProperties {

		/** The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn't match this hash, Android Device Policy won't use the data. */
		sha256Hash: FormControl<string | null | undefined>,

		/** The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn't provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateExternalDataFormGroup() {
		return new FormGroup<ExternalDataFormProperties>({
			sha256Hash: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource containing sign in details for an enterprise. Use enterprises to manage SigninDetails for a given enterprise.For an enterprise, we can have any number of SigninDetails that is uniquely identified by combination of the following three fields (signin_url, allow_personal_usage, token_tag). One cannot create two SigninDetails with the same (signin_url, allow_personal_usage, token_tag). (token_tag is an optional field).Patch: The operation updates the current list of SigninDetails with the new list of SigninDetails. If the stored SigninDetail configuration is passed, it returns the same signin_enrollment_token and qr_code. If we pass multiple identical SigninDetail configurations that are not stored, it will store the first one amongst those SigninDetail configurations. if the configuration already exists we cannot request it more than once in a particular patch API call, otherwise it will give a duplicate key error and the whole operation will fail. If we remove certain SigninDetail configuration from the request then it will get removed from the storage. We can then request another signin_enrollment_token and qr_code for the same SigninDetail configuration. */
	export interface SigninDetail {

		/** Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device. */
		allowPersonalUsage?: EnrollmentTokenAllowPersonalUsage | null;

		/** A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. This is a read-only field generated by the server. */
		qrCode?: string | null;

		/** An enterprise wide enrollment token used to trigger custom sign-in flow. This is a read-only field generated by the server. */
		signinEnrollmentToken?: string | null;

		/** Sign-in URL for authentication when device is provisioned with a sign-in enrollment token. The sign-in endpoint should finish authentication flow with a URL in the form of https://enterprise.google.com/android/enroll?et= for a successful login, or https://enterprise.google.com/android/enroll/invalid for a failed login. */
		signinUrl?: string | null;

		/** An EMM-specified metadata to distinguish between instances of SigninDetail. */
		tokenTag?: string | null;
	}

	/** A resource containing sign in details for an enterprise. Use enterprises to manage SigninDetails for a given enterprise.For an enterprise, we can have any number of SigninDetails that is uniquely identified by combination of the following three fields (signin_url, allow_personal_usage, token_tag). One cannot create two SigninDetails with the same (signin_url, allow_personal_usage, token_tag). (token_tag is an optional field).Patch: The operation updates the current list of SigninDetails with the new list of SigninDetails. If the stored SigninDetail configuration is passed, it returns the same signin_enrollment_token and qr_code. If we pass multiple identical SigninDetail configurations that are not stored, it will store the first one amongst those SigninDetail configurations. if the configuration already exists we cannot request it more than once in a particular patch API call, otherwise it will give a duplicate key error and the whole operation will fail. If we remove certain SigninDetail configuration from the request then it will get removed from the storage. We can then request another signin_enrollment_token and qr_code for the same SigninDetail configuration. */
	export interface SigninDetailFormProperties {

		/** Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device. */
		allowPersonalUsage: FormControl<EnrollmentTokenAllowPersonalUsage | null | undefined>,

		/** A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. This is a read-only field generated by the server. */
		qrCode: FormControl<string | null | undefined>,

		/** An enterprise wide enrollment token used to trigger custom sign-in flow. This is a read-only field generated by the server. */
		signinEnrollmentToken: FormControl<string | null | undefined>,

		/** Sign-in URL for authentication when device is provisioned with a sign-in enrollment token. The sign-in endpoint should finish authentication flow with a URL in the form of https://enterprise.google.com/android/enroll?et= for a successful login, or https://enterprise.google.com/android/enroll/invalid for a failed login. */
		signinUrl: FormControl<string | null | undefined>,

		/** An EMM-specified metadata to distinguish between instances of SigninDetail. */
		tokenTag: FormControl<string | null | undefined>,
	}
	export function CreateSigninDetailFormGroup() {
		return new FormGroup<SigninDetailFormProperties>({
			allowPersonalUsage: new FormControl<EnrollmentTokenAllowPersonalUsage | null | undefined>(undefined),
			qrCode: new FormControl<string | null | undefined>(undefined),
			signinEnrollmentToken: new FormControl<string | null | undefined>(undefined),
			signinUrl: new FormControl<string | null | undefined>(undefined),
			tokenTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A terms and conditions page to be accepted during provisioning. */
	export interface TermsAndConditions {

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		content?: UserFacingMessage;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		header?: UserFacingMessage;
	}

	/** A terms and conditions page to be accepted during provisioning. */
	export interface TermsAndConditionsFormProperties {
	}
	export function CreateTermsAndConditionsFormGroup() {
		return new FormGroup<TermsAndConditionsFormProperties>({
		});

	}


	/** A system freeze period. When a device’s clock is within the freeze period, all incoming system updates (including security patches) are blocked and won’t be installed.When the device is outside any set freeze periods, the normal policy behavior (automatic, windowed, or postponed) applies.Leap years are ignored in freeze period calculations, in particular: If Feb. 29th is set as the start or end date of a freeze period, the freeze period will start or end on Feb. 28th instead. When a device’s system clock reads Feb. 29th, it’s treated as Feb. 28th. When calculating the number of days in a freeze period or the time between two freeze periods, Feb. 29th is ignored and not counted as a day.Note: For Freeze Periods to take effect, SystemUpdateType cannot be specified as SYSTEM_UPDATE_TYPE_UNSPECIFIED, because freeze periods require a defined policy to be specified. */
	export interface FreezePeriod {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: A full date, with non-zero year, month, and day values. A month and day, with a zero year (for example, an anniversary). A year on its own, with a zero month and a zero day. A year and month, with a zero day (for example, a credit card expiration date).Related types: google.type.TimeOfDay google.type.DateTime google.protobuf.Timestamp */
		endDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: A full date, with non-zero year, month, and day values. A month and day, with a zero year (for example, an anniversary). A year on its own, with a zero month and a zero day. A year and month, with a zero day (for example, a credit card expiration date).Related types: google.type.TimeOfDay google.type.DateTime google.protobuf.Timestamp */
		startDate?: Date;
	}

	/** A system freeze period. When a device’s clock is within the freeze period, all incoming system updates (including security patches) are blocked and won’t be installed.When the device is outside any set freeze periods, the normal policy behavior (automatic, windowed, or postponed) applies.Leap years are ignored in freeze period calculations, in particular: If Feb. 29th is set as the start or end date of a freeze period, the freeze period will start or end on Feb. 28th instead. When a device’s system clock reads Feb. 29th, it’s treated as Feb. 28th. When calculating the number of days in a freeze period or the time between two freeze periods, Feb. 29th is ignored and not counted as a day.Note: For Freeze Periods to take effect, SystemUpdateType cannot be specified as SYSTEM_UPDATE_TYPE_UNSPECIFIED, because freeze periods require a defined policy to be specified. */
	export interface FreezePeriodFormProperties {
	}
	export function CreateFreezePeriodFormGroup() {
		return new FormGroup<FreezePeriodFormProperties>({
		});

	}


	/** Response on issuing a command. This is currently empty as a placeholder. */
	export interface IssueCommandResponse {
	}

	/** Response on issuing a command. This is currently empty as a placeholder. */
	export interface IssueCommandResponseFormProperties {
	}
	export function CreateIssueCommandResponseFormGroup() {
		return new FormGroup<IssueCommandResponseFormProperties>({
		});

	}


	/** Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK. */
	export interface KioskCustomization {

		/** Specifies whether the Settings app is allowed in kiosk mode. */
		deviceSettings?: KioskCustomizationDeviceSettings | null;

		/** Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button. */
		powerButtonActions?: KioskCustomizationPowerButtonActions | null;

		/** Specifies whether system info and notifications are disabled in kiosk mode. */
		statusBar?: KioskCustomizationStatusBar | null;

		/** Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI. */
		systemErrorWarnings?: KioskCustomizationSystemErrorWarnings | null;

		/** Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode. */
		systemNavigation?: KioskCustomizationSystemNavigation | null;
	}

	/** Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK. */
	export interface KioskCustomizationFormProperties {

		/** Specifies whether the Settings app is allowed in kiosk mode. */
		deviceSettings: FormControl<KioskCustomizationDeviceSettings | null | undefined>,

		/** Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button. */
		powerButtonActions: FormControl<KioskCustomizationPowerButtonActions | null | undefined>,

		/** Specifies whether system info and notifications are disabled in kiosk mode. */
		statusBar: FormControl<KioskCustomizationStatusBar | null | undefined>,

		/** Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI. */
		systemErrorWarnings: FormControl<KioskCustomizationSystemErrorWarnings | null | undefined>,

		/** Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode. */
		systemNavigation: FormControl<KioskCustomizationSystemNavigation | null | undefined>,
	}
	export function CreateKioskCustomizationFormGroup() {
		return new FormGroup<KioskCustomizationFormProperties>({
			deviceSettings: new FormControl<KioskCustomizationDeviceSettings | null | undefined>(undefined),
			powerButtonActions: new FormControl<KioskCustomizationPowerButtonActions | null | undefined>(undefined),
			statusBar: new FormControl<KioskCustomizationStatusBar | null | undefined>(undefined),
			systemErrorWarnings: new FormControl<KioskCustomizationSystemErrorWarnings | null | undefined>(undefined),
			systemNavigation: new FormControl<KioskCustomizationSystemNavigation | null | undefined>(undefined),
		});

	}

	export enum KioskCustomizationDeviceSettings { DEVICE_SETTINGS_UNSPECIFIED = 'DEVICE_SETTINGS_UNSPECIFIED', SETTINGS_ACCESS_ALLOWED = 'SETTINGS_ACCESS_ALLOWED', SETTINGS_ACCESS_BLOCKED = 'SETTINGS_ACCESS_BLOCKED' }

	export enum KioskCustomizationPowerButtonActions { POWER_BUTTON_ACTIONS_UNSPECIFIED = 'POWER_BUTTON_ACTIONS_UNSPECIFIED', POWER_BUTTON_AVAILABLE = 'POWER_BUTTON_AVAILABLE', POWER_BUTTON_BLOCKED = 'POWER_BUTTON_BLOCKED' }

	export enum KioskCustomizationStatusBar { STATUS_BAR_UNSPECIFIED = 'STATUS_BAR_UNSPECIFIED', NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED = 'NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED', NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED = 'NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED', SYSTEM_INFO_ONLY = 'SYSTEM_INFO_ONLY' }

	export enum KioskCustomizationSystemErrorWarnings { SYSTEM_ERROR_WARNINGS_UNSPECIFIED = 'SYSTEM_ERROR_WARNINGS_UNSPECIFIED', ERROR_AND_WARNINGS_ENABLED = 'ERROR_AND_WARNINGS_ENABLED', ERROR_AND_WARNINGS_MUTED = 'ERROR_AND_WARNINGS_MUTED' }

	export enum KioskCustomizationSystemNavigation { SYSTEM_NAVIGATION_UNSPECIFIED = 'SYSTEM_NAVIGATION_UNSPECIFIED', NAVIGATION_ENABLED = 'NAVIGATION_ENABLED', NAVIGATION_DISABLED = 'NAVIGATION_DISABLED', HOME_BUTTON_ONLY = 'HOME_BUTTON_ONLY' }


	/** An action to launch an app. */
	export interface LaunchAppAction {

		/** Package name of app to be launched */
		packageName?: string | null;
	}

	/** An action to launch an app. */
	export interface LaunchAppActionFormProperties {

		/** Package name of app to be launched */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateLaunchAppActionFormGroup() {
		return new FormGroup<LaunchAppActionFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a request to list devices for a given enterprise. */
	export interface ListDevicesResponse {

		/** The list of devices. */
		devices?: Array<Device>;

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Response to a request to list devices for a given enterprise. */
	export interface ListDevicesResponseFormProperties {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesResponseFormGroup() {
		return new FormGroup<ListDevicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a request to list enrollment tokens for a given enterprise. */
	export interface ListEnrollmentTokensResponse {

		/** The list of enrollment tokens. */
		enrollmentTokens?: Array<EnrollmentToken>;

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Response to a request to list enrollment tokens for a given enterprise. */
	export interface ListEnrollmentTokensResponseFormProperties {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnrollmentTokensResponseFormGroup() {
		return new FormGroup<ListEnrollmentTokensResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a request to list enterprises. */
	export interface ListEnterprisesResponse {

		/** The list of enterprises. */
		enterprises?: Array<Enterprise>;

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Response to a request to list enterprises. */
	export interface ListEnterprisesResponseFormProperties {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnterprisesResponseFormGroup() {
		return new FormGroup<ListEnterprisesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done?: boolean | null;

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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


	/** Response to a request to list policies for a given enterprise. */
	export interface ListPoliciesResponse {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken?: string | null;

		/** The list of policies. */
		policies?: Array<Policy>;
	}

	/** Response to a request to list policies for a given enterprise. */
	export interface ListPoliciesResponseFormProperties {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesResponseFormGroup() {
		return new FormGroup<ListPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it. */
	export interface Policy {

		/** Account types that can't be managed by the user. */
		accountTypesWithManagementDisabled?: Array<string>;

		/** Whether adding new users and profiles is disabled. */
		addUserDisabled?: boolean | null;

		/** Whether adjusting the master volume is disabled. Also mutes the device. */
		adjustVolumeDisabled?: boolean | null;

		/** Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values. */
		advancedSecurityOverrides?: AdvancedSecurityOverrides;

		/** Configuration for an always-on VPN connection. */
		alwaysOnVpnPackage?: AlwaysOnVpnPackage;

		/** The app tracks for Android Device Policy the device can access. The device receives the latest version among all accessible tracks. If no tracks are specified, then the device only uses the production track. */
		androidDevicePolicyTracks?: Array<string>;

		/** Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency.When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect.The app auto update policy, which controls when automatic app updates can be applied. */
		appAutoUpdatePolicy?: PolicyAppAutoUpdatePolicy | null;

		/** Policy applied to apps. This can have at most 3,000 elements. */
		applications?: Array<ApplicationPolicy>;

		/** Whether auto date, time, and time zone are enabled on a company-owned device. If this is set, then autoTimeRequired is ignored. */
		autoDateAndTimeZone?: PolicyAutoDateAndTimeZone | null;

		/** Whether auto time is required, which prevents the user from manually setting the date and time. If autoDateAndTimeZone is set, this field is ignored. */
		autoTimeRequired?: boolean | null;

		/** Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled. */
		blockApplicationsEnabled?: boolean | null;

		/** Whether configuring bluetooth is disabled. */
		bluetoothConfigDisabled?: boolean | null;

		/** Whether bluetooth contact sharing is disabled. */
		bluetoothContactSharingDisabled?: boolean | null;

		/** Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user. */
		bluetoothDisabled?: boolean | null;

		/** Controls the use of the camera and whether the user has access to the camera access toggle. */
		cameraAccess?: PolicyCameraAccess | null;

		/** If camera_access is set to any value other than CAMERA_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether cameras are disabled: If true, all cameras are disabled, otherwise they are available. For fully managed devices this field applies for all apps on the device. For work profiles, this field applies only to apps in the work profile, and the camera access of apps outside the work profile is unaffected. */
		cameraDisabled?: boolean | null;

		/** Whether configuring cell broadcast is disabled. */
		cellBroadcastsConfigDisabled?: boolean | null;

		/** Rules for determining apps' access to private keys. See ChoosePrivateKeyRule for details. This must be empty if any application has CERT_SELECTION delegation scope. */
		choosePrivateKeyRules?: Array<ChoosePrivateKeyRule>;

		/** Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules. Use policy enforcement rules instead. */
		complianceRules?: Array<ComplianceRule>;

		/** Whether creating windows besides app windows is disabled. */
		createWindowsDisabled?: boolean | null;

		/** Whether configuring user credentials is disabled. */
		credentialsConfigDisabled?: boolean | null;

		/** Controls the data from the work profile that can be accessed from the personal profile and vice versa. A nonComplianceDetail with MANAGEMENT_MODE is reported if the device does not have a work profile. */
		crossProfilePolicies?: CrossProfilePolicies;

		/** Whether roaming data services are disabled. */
		dataRoamingDisabled?: boolean | null;

		/** Whether the user is allowed to enable debugging features. */
		debuggingFeaturesAllowed?: boolean | null;

		/** The default permission policy for runtime permission requests. */
		defaultPermissionPolicy?: ApplicationPolicyDefaultPermissionPolicy | null;

		/** Covers controls for device connectivity such as Wi-Fi, USB data access, keyboard/mouse connections, and more. */
		deviceConnectivityManagement?: DeviceConnectivityManagement;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		deviceOwnerLockScreenInfo?: UserFacingMessage;

		/** Controls for device radio settings. */
		deviceRadioState?: DeviceRadioState;

		/** Whether encryption is enabled */
		encryptionPolicy?: PolicyEncryptionPolicy | null;

		/** Whether app verification is force-enabled. */
		ensureVerifyAppsEnabled?: boolean | null;

		/** Whether factory resetting from settings is disabled. */
		factoryResetDisabled?: boolean | null;

		/** Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device won't provide factory reset protection. */
		frpAdminEmails?: Array<string>;

		/** Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled. */
		funDisabled?: boolean | null;

		/** Whether user installation of apps is disabled. */
		installAppsDisabled?: boolean | null;

		/** This field has no effect. */
		installUnknownSourcesAllowed?: boolean | null;

		/** If true, this disables the Lock Screen (https://source.android.com/docs/core/display/multi_display/lock-screen) for primary and/or secondary displays. */
		keyguardDisabled?: boolean | null;

		/** Disabled keyguard customizations, such as widgets. */
		keyguardDisabledFeatures?: Array<string>;

		/** Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior. */
		kioskCustomLauncherEnabled?: boolean | null;

		/** Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK. */
		kioskCustomization?: KioskCustomization;

		/** The degree of location detection enabled. */
		locationMode?: PolicyLocationMode | null;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		longSupportMessage?: UserFacingMessage;

		/** Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction. */
		maximumTimeToLock?: string | null;

		/** Controls the use of the microphone and whether the user has access to the microphone access toggle. This applies only on fully managed devices. */
		microphoneAccess?: PolicyMicrophoneAccess | null;

		/**
		 * The minimum allowed Android API level.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumApiLevel?: number | null;

		/** Whether configuring mobile networks is disabled. */
		mobileNetworksConfigDisabled?: boolean | null;

		/** Whether adding or removing accounts is disabled. */
		modifyAccountsDisabled?: boolean | null;

		/** Whether the user mounting physical external media is disabled. */
		mountPhysicalMediaDisabled?: boolean | null;

		/** The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. */
		name?: string | null;

		/** Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.Note: Setting wifiConfigDisabled to true will override this setting under specific circumstances. Please see wifiConfigDisabled for further details. Setting configureWifi to DISALLOW_CONFIGURING_WIFI will override this setting under specific circumstances. Please see DISALLOW_CONFIGURING_WIFI for further details. */
		networkEscapeHatchEnabled?: boolean | null;

		/** Whether resetting network settings is disabled. */
		networkResetDisabled?: boolean | null;

		/** This feature is not generally available. */
		oncCertificateProviders?: Array<OncCertificateProvider>;

		/** Network configuration for the device. See configure networks for more information. */
		openNetworkConfiguration?: {[id: string]: any };

		/** Whether using NFC to beam data from apps is disabled. */
		outgoingBeamDisabled?: boolean | null;

		/** Whether outgoing calls are disabled. */
		outgoingCallsDisabled?: boolean | null;

		/** Password requirement policies. Different policies can be set for work profile or fully managed devices by setting the password_scope field in the policy. */
		passwordPolicies?: Array<PasswordRequirements>;

		/** Requirements for the password used to unlock a device. */
		passwordRequirements?: PasswordRequirements;

		/** Explicit permission or group grants or denials for all apps. These values override the default_permission_policy. */
		permissionGrants?: Array<PermissionGrant>;

		/** A list of package names. */
		permittedAccessibilityServices?: PackageNameList;

		/** A list of package names. */
		permittedInputMethods?: PackageNameList;

		/** Default intent handler activities. */
		persistentPreferredActivities?: Array<PersistentPreferredActivity>;

		/** Policies controlling personal usage on a company-owned device with a work profile. */
		personalUsagePolicies?: PersonalUsagePolicies;

		/** This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy. */
		playStoreMode?: PolicyPlayStoreMode | null;

		/** Rules that define the behavior when a particular policy can not be applied on device */
		policyEnforcementRules?: Array<PolicyEnforcementRule>;

		/** Controls whether preferential network service is enabled on the work profile. For example, an organization may have an agreement with a carrier that all of the work data from its employees' devices will be sent via a network service dedicated for enterprise use. An example of a supported preferential network service is the enterprise slice on 5G networks. This has no effect on fully managed devices. */
		preferentialNetworkService?: PolicyPreferentialNetworkService | null;

		/** Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable. This value will have no effect if any application has CERT_SELECTION delegation scope. */
		privateKeySelectionEnabled?: boolean | null;

		/** Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field. */
		recommendedGlobalProxy?: ProxyInfo;

		/** Whether removing other users is disabled. */
		removeUserDisabled?: boolean | null;

		/** Whether rebooting the device into safe boot is disabled. */
		safeBootDisabled?: boolean | null;

		/** Whether screen capture is disabled. */
		screenCaptureDisabled?: boolean | null;

		/** Whether changing the user icon is disabled. */
		setUserIconDisabled?: boolean | null;

		/** Whether changing the wallpaper is disabled. */
		setWallpaperDisabled?: boolean | null;

		/** Action to take during the setup process. At most one action may be specified. */
		setupActions?: Array<SetupAction>;

		/** Whether location sharing is disabled. share_location_disabled is supported for both fully managed devices and personally owned work profiles. */
		shareLocationDisabled?: boolean | null;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		shortSupportMessage?: UserFacingMessage;

		/** Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up. */
		skipFirstUseHintsEnabled?: boolean | null;

		/** Whether sending and receiving SMS messages is disabled. */
		smsDisabled?: boolean | null;

		/** Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled. */
		statusBarDisabled?: boolean | null;

		/** Settings controlling the behavior of status reports. */
		statusReportingSettings?: StatusReportingSettings;

		/** The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn't lock itself while it stays on. */
		stayOnPluggedModes?: Array<string>;

		/** Configuration for managing system updates */
		systemUpdate?: SystemUpdate;

		/** Whether configuring tethering and portable hotspots is disabled. If tetheringSettings is set to anything other than TETHERING_SETTINGS_UNSPECIFIED, this setting is ignored. */
		tetheringConfigDisabled?: boolean | null;

		/** Whether user uninstallation of applications is disabled. This prevents apps from being uninstalled, even those removed using applications */
		uninstallAppsDisabled?: boolean | null;

		/** If microphone_access is set to any value other than MICROPHONE_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether microphones are disabled: If true, all microphones are disabled, otherwise they are available. This is available only on fully managed devices. */
		unmuteMicrophoneDisabled?: boolean | null;

		/** Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications). */
		usageLog?: UsageLog;

		/** Whether transferring files over USB is disabled. This is supported only on company-owned devices. */
		usbFileTransferDisabled?: boolean | null;

		/** Whether USB storage is enabled. Deprecated. */
		usbMassStorageEnabled?: boolean | null;

		/** The version of the policy. This is a read-only field. The version is incremented each time the policy is updated. */
		version?: string | null;

		/** Whether configuring VPN is disabled. */
		vpnConfigDisabled?: boolean | null;

		/** Whether configuring Wi-Fi networks is disabled. Supported on fully managed devices and work profiles on company-owned devices. For fully managed devices, setting this to true removes all configured networks and retains only the networks configured using openNetworkConfiguration. For work profiles on company-owned devices, existing configured networks are not affected and the user is not allowed to add, remove, or modify Wi-Fi networks. If configureWifi is set to anything other than CONFIGURE_WIFI_UNSPECIFIED, this setting is ignored. Note: If a network connection can't be made at boot time and configuring Wi-Fi is disabled then network escape hatch will be shown in order to refresh the device policy (see networkEscapeHatchEnabled). */
		wifiConfigDisabled?: boolean | null;

		/** DEPRECATED - Use wifi_config_disabled. */
		wifiConfigsLockdownEnabled?: boolean | null;
	}

	/** A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it. */
	export interface PolicyFormProperties {

		/** Whether adding new users and profiles is disabled. */
		addUserDisabled: FormControl<boolean | null | undefined>,

		/** Whether adjusting the master volume is disabled. Also mutes the device. */
		adjustVolumeDisabled: FormControl<boolean | null | undefined>,

		/** Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency.When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect.The app auto update policy, which controls when automatic app updates can be applied. */
		appAutoUpdatePolicy: FormControl<PolicyAppAutoUpdatePolicy | null | undefined>,

		/** Whether auto date, time, and time zone are enabled on a company-owned device. If this is set, then autoTimeRequired is ignored. */
		autoDateAndTimeZone: FormControl<PolicyAutoDateAndTimeZone | null | undefined>,

		/** Whether auto time is required, which prevents the user from manually setting the date and time. If autoDateAndTimeZone is set, this field is ignored. */
		autoTimeRequired: FormControl<boolean | null | undefined>,

		/** Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled. */
		blockApplicationsEnabled: FormControl<boolean | null | undefined>,

		/** Whether configuring bluetooth is disabled. */
		bluetoothConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether bluetooth contact sharing is disabled. */
		bluetoothContactSharingDisabled: FormControl<boolean | null | undefined>,

		/** Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user. */
		bluetoothDisabled: FormControl<boolean | null | undefined>,

		/** Controls the use of the camera and whether the user has access to the camera access toggle. */
		cameraAccess: FormControl<PolicyCameraAccess | null | undefined>,

		/** If camera_access is set to any value other than CAMERA_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether cameras are disabled: If true, all cameras are disabled, otherwise they are available. For fully managed devices this field applies for all apps on the device. For work profiles, this field applies only to apps in the work profile, and the camera access of apps outside the work profile is unaffected. */
		cameraDisabled: FormControl<boolean | null | undefined>,

		/** Whether configuring cell broadcast is disabled. */
		cellBroadcastsConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether creating windows besides app windows is disabled. */
		createWindowsDisabled: FormControl<boolean | null | undefined>,

		/** Whether configuring user credentials is disabled. */
		credentialsConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether roaming data services are disabled. */
		dataRoamingDisabled: FormControl<boolean | null | undefined>,

		/** Whether the user is allowed to enable debugging features. */
		debuggingFeaturesAllowed: FormControl<boolean | null | undefined>,

		/** The default permission policy for runtime permission requests. */
		defaultPermissionPolicy: FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>,

		/** Whether encryption is enabled */
		encryptionPolicy: FormControl<PolicyEncryptionPolicy | null | undefined>,

		/** Whether app verification is force-enabled. */
		ensureVerifyAppsEnabled: FormControl<boolean | null | undefined>,

		/** Whether factory resetting from settings is disabled. */
		factoryResetDisabled: FormControl<boolean | null | undefined>,

		/** Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled. */
		funDisabled: FormControl<boolean | null | undefined>,

		/** Whether user installation of apps is disabled. */
		installAppsDisabled: FormControl<boolean | null | undefined>,

		/** This field has no effect. */
		installUnknownSourcesAllowed: FormControl<boolean | null | undefined>,

		/** If true, this disables the Lock Screen (https://source.android.com/docs/core/display/multi_display/lock-screen) for primary and/or secondary displays. */
		keyguardDisabled: FormControl<boolean | null | undefined>,

		/** Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior. */
		kioskCustomLauncherEnabled: FormControl<boolean | null | undefined>,

		/** The degree of location detection enabled. */
		locationMode: FormControl<PolicyLocationMode | null | undefined>,

		/** Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction. */
		maximumTimeToLock: FormControl<string | null | undefined>,

		/** Controls the use of the microphone and whether the user has access to the microphone access toggle. This applies only on fully managed devices. */
		microphoneAccess: FormControl<PolicyMicrophoneAccess | null | undefined>,

		/**
		 * The minimum allowed Android API level.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumApiLevel: FormControl<number | null | undefined>,

		/** Whether configuring mobile networks is disabled. */
		mobileNetworksConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether adding or removing accounts is disabled. */
		modifyAccountsDisabled: FormControl<boolean | null | undefined>,

		/** Whether the user mounting physical external media is disabled. */
		mountPhysicalMediaDisabled: FormControl<boolean | null | undefined>,

		/** The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. */
		name: FormControl<string | null | undefined>,

		/** Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.Note: Setting wifiConfigDisabled to true will override this setting under specific circumstances. Please see wifiConfigDisabled for further details. Setting configureWifi to DISALLOW_CONFIGURING_WIFI will override this setting under specific circumstances. Please see DISALLOW_CONFIGURING_WIFI for further details. */
		networkEscapeHatchEnabled: FormControl<boolean | null | undefined>,

		/** Whether resetting network settings is disabled. */
		networkResetDisabled: FormControl<boolean | null | undefined>,

		/** Network configuration for the device. See configure networks for more information. */
		openNetworkConfiguration: FormControl<{[id: string]: any } | null | undefined>,

		/** Whether using NFC to beam data from apps is disabled. */
		outgoingBeamDisabled: FormControl<boolean | null | undefined>,

		/** Whether outgoing calls are disabled. */
		outgoingCallsDisabled: FormControl<boolean | null | undefined>,

		/** This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy. */
		playStoreMode: FormControl<PolicyPlayStoreMode | null | undefined>,

		/** Controls whether preferential network service is enabled on the work profile. For example, an organization may have an agreement with a carrier that all of the work data from its employees' devices will be sent via a network service dedicated for enterprise use. An example of a supported preferential network service is the enterprise slice on 5G networks. This has no effect on fully managed devices. */
		preferentialNetworkService: FormControl<PolicyPreferentialNetworkService | null | undefined>,

		/** Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable. This value will have no effect if any application has CERT_SELECTION delegation scope. */
		privateKeySelectionEnabled: FormControl<boolean | null | undefined>,

		/** Whether removing other users is disabled. */
		removeUserDisabled: FormControl<boolean | null | undefined>,

		/** Whether rebooting the device into safe boot is disabled. */
		safeBootDisabled: FormControl<boolean | null | undefined>,

		/** Whether screen capture is disabled. */
		screenCaptureDisabled: FormControl<boolean | null | undefined>,

		/** Whether changing the user icon is disabled. */
		setUserIconDisabled: FormControl<boolean | null | undefined>,

		/** Whether changing the wallpaper is disabled. */
		setWallpaperDisabled: FormControl<boolean | null | undefined>,

		/** Whether location sharing is disabled. share_location_disabled is supported for both fully managed devices and personally owned work profiles. */
		shareLocationDisabled: FormControl<boolean | null | undefined>,

		/** Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up. */
		skipFirstUseHintsEnabled: FormControl<boolean | null | undefined>,

		/** Whether sending and receiving SMS messages is disabled. */
		smsDisabled: FormControl<boolean | null | undefined>,

		/** Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled. */
		statusBarDisabled: FormControl<boolean | null | undefined>,

		/** Whether configuring tethering and portable hotspots is disabled. If tetheringSettings is set to anything other than TETHERING_SETTINGS_UNSPECIFIED, this setting is ignored. */
		tetheringConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether user uninstallation of applications is disabled. This prevents apps from being uninstalled, even those removed using applications */
		uninstallAppsDisabled: FormControl<boolean | null | undefined>,

		/** If microphone_access is set to any value other than MICROPHONE_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether microphones are disabled: If true, all microphones are disabled, otherwise they are available. This is available only on fully managed devices. */
		unmuteMicrophoneDisabled: FormControl<boolean | null | undefined>,

		/** Whether transferring files over USB is disabled. This is supported only on company-owned devices. */
		usbFileTransferDisabled: FormControl<boolean | null | undefined>,

		/** Whether USB storage is enabled. Deprecated. */
		usbMassStorageEnabled: FormControl<boolean | null | undefined>,

		/** The version of the policy. This is a read-only field. The version is incremented each time the policy is updated. */
		version: FormControl<string | null | undefined>,

		/** Whether configuring VPN is disabled. */
		vpnConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether configuring Wi-Fi networks is disabled. Supported on fully managed devices and work profiles on company-owned devices. For fully managed devices, setting this to true removes all configured networks and retains only the networks configured using openNetworkConfiguration. For work profiles on company-owned devices, existing configured networks are not affected and the user is not allowed to add, remove, or modify Wi-Fi networks. If configureWifi is set to anything other than CONFIGURE_WIFI_UNSPECIFIED, this setting is ignored. Note: If a network connection can't be made at boot time and configuring Wi-Fi is disabled then network escape hatch will be shown in order to refresh the device policy (see networkEscapeHatchEnabled). */
		wifiConfigDisabled: FormControl<boolean | null | undefined>,

		/** DEPRECATED - Use wifi_config_disabled. */
		wifiConfigsLockdownEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			addUserDisabled: new FormControl<boolean | null | undefined>(undefined),
			adjustVolumeDisabled: new FormControl<boolean | null | undefined>(undefined),
			appAutoUpdatePolicy: new FormControl<PolicyAppAutoUpdatePolicy | null | undefined>(undefined),
			autoDateAndTimeZone: new FormControl<PolicyAutoDateAndTimeZone | null | undefined>(undefined),
			autoTimeRequired: new FormControl<boolean | null | undefined>(undefined),
			blockApplicationsEnabled: new FormControl<boolean | null | undefined>(undefined),
			bluetoothConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			bluetoothContactSharingDisabled: new FormControl<boolean | null | undefined>(undefined),
			bluetoothDisabled: new FormControl<boolean | null | undefined>(undefined),
			cameraAccess: new FormControl<PolicyCameraAccess | null | undefined>(undefined),
			cameraDisabled: new FormControl<boolean | null | undefined>(undefined),
			cellBroadcastsConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			createWindowsDisabled: new FormControl<boolean | null | undefined>(undefined),
			credentialsConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			dataRoamingDisabled: new FormControl<boolean | null | undefined>(undefined),
			debuggingFeaturesAllowed: new FormControl<boolean | null | undefined>(undefined),
			defaultPermissionPolicy: new FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>(undefined),
			encryptionPolicy: new FormControl<PolicyEncryptionPolicy | null | undefined>(undefined),
			ensureVerifyAppsEnabled: new FormControl<boolean | null | undefined>(undefined),
			factoryResetDisabled: new FormControl<boolean | null | undefined>(undefined),
			funDisabled: new FormControl<boolean | null | undefined>(undefined),
			installAppsDisabled: new FormControl<boolean | null | undefined>(undefined),
			installUnknownSourcesAllowed: new FormControl<boolean | null | undefined>(undefined),
			keyguardDisabled: new FormControl<boolean | null | undefined>(undefined),
			kioskCustomLauncherEnabled: new FormControl<boolean | null | undefined>(undefined),
			locationMode: new FormControl<PolicyLocationMode | null | undefined>(undefined),
			maximumTimeToLock: new FormControl<string | null | undefined>(undefined),
			microphoneAccess: new FormControl<PolicyMicrophoneAccess | null | undefined>(undefined),
			minimumApiLevel: new FormControl<number | null | undefined>(undefined),
			mobileNetworksConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			modifyAccountsDisabled: new FormControl<boolean | null | undefined>(undefined),
			mountPhysicalMediaDisabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			networkEscapeHatchEnabled: new FormControl<boolean | null | undefined>(undefined),
			networkResetDisabled: new FormControl<boolean | null | undefined>(undefined),
			openNetworkConfiguration: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			outgoingBeamDisabled: new FormControl<boolean | null | undefined>(undefined),
			outgoingCallsDisabled: new FormControl<boolean | null | undefined>(undefined),
			playStoreMode: new FormControl<PolicyPlayStoreMode | null | undefined>(undefined),
			preferentialNetworkService: new FormControl<PolicyPreferentialNetworkService | null | undefined>(undefined),
			privateKeySelectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			removeUserDisabled: new FormControl<boolean | null | undefined>(undefined),
			safeBootDisabled: new FormControl<boolean | null | undefined>(undefined),
			screenCaptureDisabled: new FormControl<boolean | null | undefined>(undefined),
			setUserIconDisabled: new FormControl<boolean | null | undefined>(undefined),
			setWallpaperDisabled: new FormControl<boolean | null | undefined>(undefined),
			shareLocationDisabled: new FormControl<boolean | null | undefined>(undefined),
			skipFirstUseHintsEnabled: new FormControl<boolean | null | undefined>(undefined),
			smsDisabled: new FormControl<boolean | null | undefined>(undefined),
			statusBarDisabled: new FormControl<boolean | null | undefined>(undefined),
			tetheringConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			uninstallAppsDisabled: new FormControl<boolean | null | undefined>(undefined),
			unmuteMicrophoneDisabled: new FormControl<boolean | null | undefined>(undefined),
			usbFileTransferDisabled: new FormControl<boolean | null | undefined>(undefined),
			usbMassStorageEnabled: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			vpnConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			wifiConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			wifiConfigsLockdownEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PolicyAppAutoUpdatePolicy { APP_AUTO_UPDATE_POLICY_UNSPECIFIED = 'APP_AUTO_UPDATE_POLICY_UNSPECIFIED', CHOICE_TO_THE_USER = 'CHOICE_TO_THE_USER', NEVER = 'NEVER', WIFI_ONLY = 'WIFI_ONLY', ALWAYS = 'ALWAYS' }

	export enum PolicyAutoDateAndTimeZone { AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED = 'AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED', AUTO_DATE_AND_TIME_ZONE_USER_CHOICE = 'AUTO_DATE_AND_TIME_ZONE_USER_CHOICE', AUTO_DATE_AND_TIME_ZONE_ENFORCED = 'AUTO_DATE_AND_TIME_ZONE_ENFORCED' }

	export enum PolicyCameraAccess { CAMERA_ACCESS_UNSPECIFIED = 'CAMERA_ACCESS_UNSPECIFIED', CAMERA_ACCESS_USER_CHOICE = 'CAMERA_ACCESS_USER_CHOICE', CAMERA_ACCESS_DISABLED = 'CAMERA_ACCESS_DISABLED', CAMERA_ACCESS_ENFORCED = 'CAMERA_ACCESS_ENFORCED' }

	export enum PolicyEncryptionPolicy { ENCRYPTION_POLICY_UNSPECIFIED = 'ENCRYPTION_POLICY_UNSPECIFIED', ENABLED_WITHOUT_PASSWORD = 'ENABLED_WITHOUT_PASSWORD', ENABLED_WITH_PASSWORD = 'ENABLED_WITH_PASSWORD' }

	export enum PolicyLocationMode { LOCATION_MODE_UNSPECIFIED = 'LOCATION_MODE_UNSPECIFIED', HIGH_ACCURACY = 'HIGH_ACCURACY', SENSORS_ONLY = 'SENSORS_ONLY', BATTERY_SAVING = 'BATTERY_SAVING', OFF = 'OFF', LOCATION_USER_CHOICE = 'LOCATION_USER_CHOICE', LOCATION_ENFORCED = 'LOCATION_ENFORCED', LOCATION_DISABLED = 'LOCATION_DISABLED' }

	export enum PolicyMicrophoneAccess { MICROPHONE_ACCESS_UNSPECIFIED = 'MICROPHONE_ACCESS_UNSPECIFIED', MICROPHONE_ACCESS_USER_CHOICE = 'MICROPHONE_ACCESS_USER_CHOICE', MICROPHONE_ACCESS_DISABLED = 'MICROPHONE_ACCESS_DISABLED', MICROPHONE_ACCESS_ENFORCED = 'MICROPHONE_ACCESS_ENFORCED' }


	/** This feature is not generally available. */
	export interface OncCertificateProvider {

		/** This feature is not generally available. */
		certificateReferences?: Array<string>;

		/** This feature is not generally available. */
		contentProviderEndpoint?: ContentProviderEndpoint;
	}

	/** This feature is not generally available. */
	export interface OncCertificateProviderFormProperties {
	}
	export function CreateOncCertificateProviderFormGroup() {
		return new FormGroup<OncCertificateProviderFormProperties>({
		});

	}


	/** A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities. */
	export interface PersistentPreferredActivity {

		/** The intent actions to match in the filter. If any actions are included in the filter, then an intent's action must be one of those values for it to match. If no actions are included, the intent action is ignored. */
		actions?: Array<string>;

		/** The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent. */
		categories?: Array<string>;

		/** The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent. */
		receiverActivity?: string | null;
	}

	/** A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities. */
	export interface PersistentPreferredActivityFormProperties {

		/** The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent. */
		receiverActivity: FormControl<string | null | undefined>,
	}
	export function CreatePersistentPreferredActivityFormGroup() {
		return new FormGroup<PersistentPreferredActivityFormProperties>({
			receiverActivity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Policies controlling personal usage on a company-owned device with a work profile. */
	export interface PersonalUsagePolicies {

		/** Account types that can't be managed by the user. */
		accountTypesWithManagementDisabled?: Array<string>;

		/** If true, the camera is disabled on the personal profile. */
		cameraDisabled?: boolean | null;

		/**
		 * Controls how long the work profile can stay off. The minimum duration must be at least 3 days. Other details are as follows: - If the duration is set to 0, the feature is turned off. - If the duration is set to a value smaller than the minimum duration, the feature returns an error. *Note:* If you want to avoid personal profiles being suspended during long periods of off-time, you can temporarily set a large value for this parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDaysWithWorkOff?: number | null;

		/** Policy applied to applications in the personal profile. */
		personalApplications?: Array<PersonalApplicationPolicy>;

		/** Used together with personalApplications to control how apps in the personal profile are allowed or blocked. */
		personalPlayStoreMode?: PersonalUsagePoliciesPersonalPlayStoreMode | null;

		/** If true, screen capture is disabled for all users. */
		screenCaptureDisabled?: boolean | null;
	}

	/** Policies controlling personal usage on a company-owned device with a work profile. */
	export interface PersonalUsagePoliciesFormProperties {

		/** If true, the camera is disabled on the personal profile. */
		cameraDisabled: FormControl<boolean | null | undefined>,

		/**
		 * Controls how long the work profile can stay off. The minimum duration must be at least 3 days. Other details are as follows: - If the duration is set to 0, the feature is turned off. - If the duration is set to a value smaller than the minimum duration, the feature returns an error. *Note:* If you want to avoid personal profiles being suspended during long periods of off-time, you can temporarily set a large value for this parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDaysWithWorkOff: FormControl<number | null | undefined>,

		/** Used together with personalApplications to control how apps in the personal profile are allowed or blocked. */
		personalPlayStoreMode: FormControl<PersonalUsagePoliciesPersonalPlayStoreMode | null | undefined>,

		/** If true, screen capture is disabled for all users. */
		screenCaptureDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePersonalUsagePoliciesFormGroup() {
		return new FormGroup<PersonalUsagePoliciesFormProperties>({
			cameraDisabled: new FormControl<boolean | null | undefined>(undefined),
			maxDaysWithWorkOff: new FormControl<number | null | undefined>(undefined),
			personalPlayStoreMode: new FormControl<PersonalUsagePoliciesPersonalPlayStoreMode | null | undefined>(undefined),
			screenCaptureDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Policies for apps in the personal profile of a company-owned device with a work profile. */
	export interface PersonalApplicationPolicy {

		/** The type of installation to perform. */
		installType?: PersonalApplicationPolicyInstallType | null;

		/** The package name of the application. */
		packageName?: string | null;
	}

	/** Policies for apps in the personal profile of a company-owned device with a work profile. */
	export interface PersonalApplicationPolicyFormProperties {

		/** The type of installation to perform. */
		installType: FormControl<PersonalApplicationPolicyInstallType | null | undefined>,

		/** The package name of the application. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreatePersonalApplicationPolicyFormGroup() {
		return new FormGroup<PersonalApplicationPolicyFormProperties>({
			installType: new FormControl<PersonalApplicationPolicyInstallType | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PersonalApplicationPolicyInstallType { INSTALL_TYPE_UNSPECIFIED = 'INSTALL_TYPE_UNSPECIFIED', BLOCKED = 'BLOCKED', AVAILABLE = 'AVAILABLE' }

	export enum PersonalUsagePoliciesPersonalPlayStoreMode { PLAY_STORE_MODE_UNSPECIFIED = 'PLAY_STORE_MODE_UNSPECIFIED', BLACKLIST = 'BLACKLIST', BLOCKLIST = 'BLOCKLIST', ALLOWLIST = 'ALLOWLIST' }

	export enum PolicyPlayStoreMode { PLAY_STORE_MODE_UNSPECIFIED = 'PLAY_STORE_MODE_UNSPECIFIED', WHITELIST = 'WHITELIST', BLACKLIST = 'BLACKLIST' }


	/** A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName. In the case of multiple matching or multiple triggered enforcement rules, a merge will occur with the most severe action being taken. However, all triggered rules are still kept track of: this includes initial trigger time and all associated non-compliance details. In the situation where the most severe enforcement rule is satisfied, the next most appropriate action is applied. */
	export interface PolicyEnforcementRule {

		/** An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified. */
		blockAction?: BlockAction;

		/** The top-level policy to enforce. For example, applications or passwordPolicies. */
		settingName?: string | null;

		/** An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified. */
		wipeAction?: WipeAction;
	}

	/** A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName. In the case of multiple matching or multiple triggered enforcement rules, a merge will occur with the most severe action being taken. However, all triggered rules are still kept track of: this includes initial trigger time and all associated non-compliance details. In the situation where the most severe enforcement rule is satisfied, the next most appropriate action is applied. */
	export interface PolicyEnforcementRuleFormProperties {

		/** The top-level policy to enforce. For example, applications or passwordPolicies. */
		settingName: FormControl<string | null | undefined>,
	}
	export function CreatePolicyEnforcementRuleFormGroup() {
		return new FormGroup<PolicyEnforcementRuleFormProperties>({
			settingName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified. */
	export interface WipeAction {

		/** Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles. */
		preserveFrp?: boolean | null;

		/**
		 * Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wipeAfterDays?: number | null;
	}

	/** An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified. */
	export interface WipeActionFormProperties {

		/** Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles. */
		preserveFrp: FormControl<boolean | null | undefined>,

		/**
		 * Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wipeAfterDays: FormControl<number | null | undefined>,
	}
	export function CreateWipeActionFormGroup() {
		return new FormGroup<WipeActionFormProperties>({
			preserveFrp: new FormControl<boolean | null | undefined>(undefined),
			wipeAfterDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PolicyPreferentialNetworkService { PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED = 'PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED', PREFERENTIAL_NETWORK_SERVICE_DISABLED = 'PREFERENTIAL_NETWORK_SERVICE_DISABLED', PREFERENTIAL_NETWORK_SERVICE_ENABLED = 'PREFERENTIAL_NETWORK_SERVICE_ENABLED' }


	/** Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field. */
	export interface ProxyInfo {

		/** For a direct proxy, the hosts for which the proxy is bypassed. The host names may contain wildcards such as *.example.com. */
		excludedHosts?: Array<string>;

		/** The host of the direct proxy. */
		host?: string | null;

		/** The URI of the PAC script used to configure the proxy. */
		pacUri?: string | null;

		/**
		 * The port of the direct proxy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;
	}

	/** Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field. */
	export interface ProxyInfoFormProperties {

		/** The host of the direct proxy. */
		host: FormControl<string | null | undefined>,

		/** The URI of the PAC script used to configure the proxy. */
		pacUri: FormControl<string | null | undefined>,

		/**
		 * The port of the direct proxy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,
	}
	export function CreateProxyInfoFormGroup() {
		return new FormGroup<ProxyInfoFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			pacUri: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An action executed during setup. */
	export interface SetupAction {

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		description?: UserFacingMessage;

		/** An action to launch an app. */
		launchApp?: LaunchAppAction;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		title?: UserFacingMessage;
	}

	/** An action executed during setup. */
	export interface SetupActionFormProperties {
	}
	export function CreateSetupActionFormGroup() {
		return new FormGroup<SetupActionFormProperties>({
		});

	}


	/** Settings controlling the behavior of status reports. */
	export interface StatusReportingSettings {

		/** Settings controlling the behavior of application reports. */
		applicationReportingSettings?: ApplicationReportingSettings;

		/** Whether app reports are enabled. */
		applicationReportsEnabled?: boolean | null;

		/** Whether Common Criteria Mode reporting is enabled. */
		commonCriteriaModeEnabled?: boolean | null;

		/** Whether device settings reporting is enabled. */
		deviceSettingsEnabled?: boolean | null;

		/** Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		displayInfoEnabled?: boolean | null;

		/** Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		hardwareStatusEnabled?: boolean | null;

		/** Whether memory event reporting is enabled. */
		memoryInfoEnabled?: boolean | null;

		/** Whether network info reporting is enabled. */
		networkInfoEnabled?: boolean | null;

		/** Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		powerManagementEventsEnabled?: boolean | null;

		/** Whether software info reporting is enabled. */
		softwareInfoEnabled?: boolean | null;

		/** Whether system properties reporting is enabled. */
		systemPropertiesEnabled?: boolean | null;
	}

	/** Settings controlling the behavior of status reports. */
	export interface StatusReportingSettingsFormProperties {

		/** Whether app reports are enabled. */
		applicationReportsEnabled: FormControl<boolean | null | undefined>,

		/** Whether Common Criteria Mode reporting is enabled. */
		commonCriteriaModeEnabled: FormControl<boolean | null | undefined>,

		/** Whether device settings reporting is enabled. */
		deviceSettingsEnabled: FormControl<boolean | null | undefined>,

		/** Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		displayInfoEnabled: FormControl<boolean | null | undefined>,

		/** Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		hardwareStatusEnabled: FormControl<boolean | null | undefined>,

		/** Whether memory event reporting is enabled. */
		memoryInfoEnabled: FormControl<boolean | null | undefined>,

		/** Whether network info reporting is enabled. */
		networkInfoEnabled: FormControl<boolean | null | undefined>,

		/** Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		powerManagementEventsEnabled: FormControl<boolean | null | undefined>,

		/** Whether software info reporting is enabled. */
		softwareInfoEnabled: FormControl<boolean | null | undefined>,

		/** Whether system properties reporting is enabled. */
		systemPropertiesEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStatusReportingSettingsFormGroup() {
		return new FormGroup<StatusReportingSettingsFormProperties>({
			applicationReportsEnabled: new FormControl<boolean | null | undefined>(undefined),
			commonCriteriaModeEnabled: new FormControl<boolean | null | undefined>(undefined),
			deviceSettingsEnabled: new FormControl<boolean | null | undefined>(undefined),
			displayInfoEnabled: new FormControl<boolean | null | undefined>(undefined),
			hardwareStatusEnabled: new FormControl<boolean | null | undefined>(undefined),
			memoryInfoEnabled: new FormControl<boolean | null | undefined>(undefined),
			networkInfoEnabled: new FormControl<boolean | null | undefined>(undefined),
			powerManagementEventsEnabled: new FormControl<boolean | null | undefined>(undefined),
			softwareInfoEnabled: new FormControl<boolean | null | undefined>(undefined),
			systemPropertiesEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for managing system updates */
	export interface SystemUpdate {

		/**
		 * If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endMinutes?: number | null;

		/** An annually repeating time period in which over-the-air (OTA) system updates are postponed to freeze the OS version running on a device. To prevent freezing the device indefinitely, each freeze period must be separated by at least 60 days. */
		freezePeriods?: Array<FreezePeriod>;

		/**
		 * If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startMinutes?: number | null;

		/** The type of system update to configure. */
		type?: SystemUpdateType | null;
	}

	/** Configuration for managing system updates */
	export interface SystemUpdateFormProperties {

		/**
		 * If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endMinutes: FormControl<number | null | undefined>,

		/**
		 * If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startMinutes: FormControl<number | null | undefined>,

		/** The type of system update to configure. */
		type: FormControl<SystemUpdateType | null | undefined>,
	}
	export function CreateSystemUpdateFormGroup() {
		return new FormGroup<SystemUpdateFormProperties>({
			endMinutes: new FormControl<number | null | undefined>(undefined),
			startMinutes: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<SystemUpdateType | null | undefined>(undefined),
		});

	}

	export enum SystemUpdateType { SYSTEM_UPDATE_TYPE_UNSPECIFIED = 'SYSTEM_UPDATE_TYPE_UNSPECIFIED', AUTOMATIC = 'AUTOMATIC', WINDOWED = 'WINDOWED', POSTPONE = 'POSTPONE' }


	/** Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications). */
	export interface UsageLog {

		/** Specifies which log types are enabled. Note that users will receive on-device messaging when usage logging is enabled. */
		enabledLogTypes?: Array<string>;

		/** Specifies which of the enabled log types can be uploaded over mobile data. By default logs are queued for upload when the device connects to WiFi. */
		uploadOnCellularAllowed?: Array<string>;
	}

	/** Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications). */
	export interface UsageLogFormProperties {
	}
	export function CreateUsageLogFormGroup() {
		return new FormGroup<UsageLogFormProperties>({
		});

	}


	/** Response to a request to list web apps for a given enterprise. */
	export interface ListWebAppsResponse {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken?: string | null;

		/** The list of web apps. */
		webApps?: Array<WebApp>;
	}

	/** Response to a request to list web apps for a given enterprise. */
	export interface ListWebAppsResponseFormProperties {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWebAppsResponseFormGroup() {
		return new FormGroup<ListWebAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A web app. */
	export interface WebApp {

		/** The display mode of the web app. */
		displayMode?: WebAppDisplayMode | null;

		/** A list of icons for the web app. Must have at least one element. */
		icons?: Array<WebAppIcon>;

		/** The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId}/webApps/{packageName}. */
		name?: string | null;

		/** The start URL, i.e. the URL that should load when the user opens the application. */
		startUrl?: string | null;

		/** The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon). */
		title?: string | null;

		/** The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date. */
		versionCode?: string | null;
	}

	/** A web app. */
	export interface WebAppFormProperties {

		/** The display mode of the web app. */
		displayMode: FormControl<WebAppDisplayMode | null | undefined>,

		/** The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId}/webApps/{packageName}. */
		name: FormControl<string | null | undefined>,

		/** The start URL, i.e. the URL that should load when the user opens the application. */
		startUrl: FormControl<string | null | undefined>,

		/** The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon). */
		title: FormControl<string | null | undefined>,

		/** The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date. */
		versionCode: FormControl<string | null | undefined>,
	}
	export function CreateWebAppFormGroup() {
		return new FormGroup<WebAppFormProperties>({
			displayMode: new FormControl<WebAppDisplayMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WebAppDisplayMode { DISPLAY_MODE_UNSPECIFIED = 'DISPLAY_MODE_UNSPECIFIED', MINIMAL_UI = 'MINIMAL_UI', STANDALONE = 'STANDALONE', FULL_SCREEN = 'FULL_SCREEN' }


	/** An icon for a web app. Supported formats are: png, jpg and webp. */
	export interface WebAppIcon {

		/** The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512. */
		imageData?: string | null;
	}

	/** An icon for a web app. Supported formats are: png, jpg and webp. */
	export interface WebAppIconFormProperties {

		/** The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512. */
		imageData: FormControl<string | null | undefined>,
	}
	export function CreateWebAppIconFormGroup() {
		return new FormGroup<WebAppIconFormProperties>({
			imageData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a device that is available during setup. */
	export interface ProvisioningInfo {

		/**
		 * The API level of the Android platform version running on the device.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiLevel?: number | null;

		/** The brand of the device. For example, Google. */
		brand?: string | null;

		/** The name of the enterprise in the form enterprises/{enterprise}. */
		enterprise?: string | null;

		/** The management mode of the device or profile. */
		managementMode?: DeviceManagementMode | null;

		/** The model of the device. For example, Asus Nexus 7. */
		model?: string | null;

		/** The name of this resource in the form provisioningInfo/{provisioning_info}. */
		name?: string | null;

		/** Ownership of the managed device. */
		ownership?: DeviceOwnership | null;
	}

	/** Information about a device that is available during setup. */
	export interface ProvisioningInfoFormProperties {

		/**
		 * The API level of the Android platform version running on the device.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiLevel: FormControl<number | null | undefined>,

		/** The brand of the device. For example, Google. */
		brand: FormControl<string | null | undefined>,

		/** The name of the enterprise in the form enterprises/{enterprise}. */
		enterprise: FormControl<string | null | undefined>,

		/** The management mode of the device or profile. */
		managementMode: FormControl<DeviceManagementMode | null | undefined>,

		/** The model of the device. For example, Asus Nexus 7. */
		model: FormControl<string | null | undefined>,

		/** The name of this resource in the form provisioningInfo/{provisioning_info}. */
		name: FormControl<string | null | undefined>,

		/** Ownership of the managed device. */
		ownership: FormControl<DeviceOwnership | null | undefined>,
	}
	export function CreateProvisioningInfoFormGroup() {
		return new FormGroup<ProvisioningInfoFormProperties>({
			apiLevel: new FormControl<number | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			enterprise: new FormControl<string | null | undefined>(undefined),
			managementMode: new FormControl<DeviceManagementMode | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownership: new FormControl<DeviceOwnership | null | undefined>(undefined),
		});

	}


	/** An enterprise signup URL. */
	export interface SignupUrl {

		/** The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow. */
		name?: string | null;

		/** A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe. */
		url?: string | null;
	}

	/** An enterprise signup URL. */
	export interface SignupUrlFormProperties {

		/** The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow. */
		name: FormControl<string | null | undefined>,

		/** A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSignupUrlFormGroup() {
		return new FormGroup<SignupUrlFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A web token used to access the managed Google Play iframe. */
	export interface WebToken {

		/** The features to enable. Use this if you want to control exactly which feature(s) will be activated; leave empty to allow all features.Restrictions / things to note: - If no features are listed here, all features are enabled — this is the default behavior where you give access to all features to your admins. - This must not contain any FEATURE_UNSPECIFIED values. - Repeated values are ignored */
		enabledFeatures?: Array<string>;

		/** The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId}/webTokens/{webTokenId}. */
		name?: string | null;

		/** The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme. */
		parentFrameUrl?: string | null;

		/** Permissions available to an admin in the embedded UI. An admin must have all of these permissions in order to view the UI. This field is deprecated. */
		permissions?: Array<string>;

		/** The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server. */
		value?: string | null;
	}

	/** A web token used to access the managed Google Play iframe. */
	export interface WebTokenFormProperties {

		/** The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId}/webTokens/{webTokenId}. */
		name: FormControl<string | null | undefined>,

		/** The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme. */
		parentFrameUrl: FormControl<string | null | undefined>,

		/** The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWebTokenFormGroup() {
		return new FormGroup<WebTokenFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parentFrameUrl: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists EMM-managed enterprises. Only BASIC fields are returned.
		 * Get v1/enterprises
		 * @param {number} pageSize The requested page size. The actual page size may be fixed to a min or max value.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @param {string} projectId Required. The Cloud project ID of the EMM managing the enterprises.
		 * @param {Androidmanagement_enterprises_listView} view Specifies which Enterprise fields to return. This method only supports BASIC.
		 * @return {ListEnterprisesResponse} Successful response
		 */
		Androidmanagement_enterprises_list(pageSize: number | null | undefined, pageToken: string | null | undefined, projectId: string | null | undefined, view: Androidmanagement_enterprises_listView | null | undefined): Observable<ListEnterprisesResponse> {
			return this.http.get<ListEnterprisesResponse>(this.baseUri + 'v1/enterprises?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&view=' + view, {});
		}

		/**
		 * Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
		 * Post v1/enterprises
		 * @param {boolean} agreementAccepted Whether the enterprise admin has seen and agreed to the managed Google Play Agreement (https://www.android.com/enterprise/terms/). Do not set this field for any customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises). Set this to field to true for all EMM-managed enterprises (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
		 * @param {string} enterpriseToken The enterprise token appended to the callback URL. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
		 * @param {string} projectId The ID of the Google Cloud Platform project which will own the enterprise.
		 * @param {string} signupUrlName The name of the SignupUrl used to sign up for the enterprise. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
		 * @return {Enterprise} Successful response
		 */
		Androidmanagement_enterprises_create(agreementAccepted: boolean | null | undefined, enterpriseToken: string | null | undefined, projectId: string | null | undefined, signupUrlName: string | null | undefined, requestBody: Enterprise): Observable<Enterprise> {
			return this.http.post<Enterprise>(this.baseUri + 'v1/enterprises?agreementAccepted=' + agreementAccepted + '&enterpriseToken=' + (enterpriseToken == null ? '' : encodeURIComponent(enterpriseToken)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&signupUrlName=' + (signupUrlName == null ? '' : encodeURIComponent(signupUrlName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an enterprise signup URL.
		 * Post v1/signupUrls
		 * @param {string} callbackUrl The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
		 * @param {string} projectId The ID of the Google Cloud Platform project which will own the enterprise.
		 * @return {SignupUrl} Successful response
		 */
		Androidmanagement_signupUrls_create(callbackUrl: string | null | undefined, projectId: string | null | undefined): Observable<SignupUrl> {
			return this.http.post<SignupUrl>(this.baseUri + 'v1/signupUrls?callbackUrl=' + (callbackUrl == null ? '' : encodeURIComponent(callbackUrl)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), null, {});
		}

		/**
		 * Deletes a web app.
		 * Delete v1/{name}
		 * @param {string} name The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.
		 * @param {Array<string>} wipeDataFlags Optional flags that control the device wiping behavior.
		 * @param {string} wipeReasonMessage Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.
		 * @return {Empty} Successful response
		 */
		Androidmanagement_enterprises_webApps_delete(name: string, wipeDataFlags: Array<string> | null | undefined, wipeReasonMessage: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&' + wipeDataFlags?.map(z => `wipeDataFlags=${encodeURIComponent(z)}`).join('&') + '&wipeReasonMessage=' + (wipeReasonMessage == null ? '' : encodeURIComponent(wipeReasonMessage)), {});
		}

		/**
		 * Get the device provisioning information by the identifier provided in the sign-in url.
		 * Get v1/{name}
		 * @param {string} name Required. The identifier that Android Device Policy passes to the 3P sign-in page in the form of provisioningInfo/{provisioning_info}.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ProvisioningInfo} Successful response
		 */
		Androidmanagement_provisioningInfo_get(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ProvisioningInfo> {
			return this.http.get<ProvisioningInfo>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates a web app.
		 * Patch v1/{name}
		 * @param {string} name The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.
		 * @param {string} updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
		 * @return {WebApp} Successful response
		 */
		Androidmanagement_enterprises_webApps_patch(name: string, updateMask: string | null | undefined, requestBody: WebApp): Observable<WebApp> {
			return this.http.patch<WebApp>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Androidmanagement_enterprises_devices_operations_cancel(name: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
		 * Post v1/{name}:issueCommand
		 * @param {string} name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
		 * @return {Operation} Successful response
		 */
		Androidmanagement_enterprises_devices_issueCommand(name: string, requestBody: Command): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':issueCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists devices for a given enterprise. Deleted devices are not returned in the response.
		 * Get v1/{parent}/devices
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @param {number} pageSize The requested page size. The actual page size may be fixed to a min or max value.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {ListDevicesResponse} Successful response
		 */
		Androidmanagement_enterprises_devices_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDevicesResponse> {
			return this.http.get<ListDevicesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
		 * Get v1/{parent}/enrollmentTokens
		 * @param {string} parent Required. The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @param {number} pageSize The requested page size. The service may return fewer than this value. If unspecified, at most 10 items will be returned. The maximum value is 100; values above 100 will be coerced to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {ListEnrollmentTokensResponse} Successful response
		 */
		Androidmanagement_enterprises_enrollmentTokens_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEnrollmentTokensResponse> {
			return this.http.get<ListEnrollmentTokensResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/enrollmentTokens&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
		 * Post v1/{parent}/enrollmentTokens
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @return {EnrollmentToken} Successful response
		 */
		Androidmanagement_enterprises_enrollmentTokens_create(parent: string, requestBody: EnrollmentToken): Observable<EnrollmentToken> {
			return this.http.post<EnrollmentToken>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/enrollmentTokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists policies for a given enterprise.
		 * Get v1/{parent}/policies
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @param {number} pageSize The requested page size. The actual page size may be fixed to a min or max value.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {ListPoliciesResponse} Successful response
		 */
		Androidmanagement_enterprises_policies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPoliciesResponse> {
			return this.http.get<ListPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists web apps for a given enterprise.
		 * Get v1/{parent}/webApps
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @param {number} pageSize The requested page size. This is a hint and the actual page size in the response may be different.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {ListWebAppsResponse} Successful response
		 */
		Androidmanagement_enterprises_webApps_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWebAppsResponse> {
			return this.http.get<ListWebAppsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/webApps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a web app.
		 * Post v1/{parent}/webApps
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @return {WebApp} Successful response
		 */
		Androidmanagement_enterprises_webApps_create(parent: string, requestBody: WebApp): Observable<WebApp> {
			return this.http.post<WebApp>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/webApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
		 * Post v1/{parent}/webTokens
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @return {WebToken} Successful response
		 */
		Androidmanagement_enterprises_webTokens_create(parent: string, requestBody: WebToken): Observable<WebToken> {
			return this.http.post<WebToken>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/webTokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Androidmanagement_enterprises_listView { ENTERPRISE_VIEW_UNSPECIFIED = 'ENTERPRISE_VIEW_UNSPECIFIED', BASIC = 'BASIC' }

}

