import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This represents an enterprise admin who can manage the enterprise in the managed Google Play store. */
	export interface Administrator {

		/** The admin's email address. */
		email?: string | null;
	}

	/** This represents an enterprise admin who can manage the enterprise in the managed Google Play store. */
	export interface AdministratorFormProperties {

		/** The admin's email address. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateAdministratorFormGroup() {
		return new FormGroup<AdministratorFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A token authorizing an admin to access an iframe. */
	export interface AdministratorWebToken {
		kind?: string | null;

		/** An opaque token to be passed to the Play front-end to generate an iframe. */
		token?: string | null;
	}

	/** A token authorizing an admin to access an iframe. */
	export interface AdministratorWebTokenFormProperties {
		kind: FormControl<string | null | undefined>,

		/** An opaque token to be passed to the Play front-end to generate an iframe. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateAdministratorWebTokenFormGroup() {
		return new FormGroup<AdministratorWebTokenFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with. */
	export interface AdministratorWebTokenSpec {
		kind?: string | null;
		managedConfigurations?: AdministratorWebTokenSpecManagedConfigurations;

		/** The URI of the parent frame hosting the iframe. To prevent XSS, the iframe may not be hosted at other URIs. This URI must be https. Use whitespaces to separate multiple parent URIs. */
		parent?: string | null;

		/** Deprecated. Use PlaySearch.approveApps. */
		permission?: Array<string>;
		playSearch?: AdministratorWebTokenSpecPlaySearch;
		privateApps?: AdministratorWebTokenSpecPrivateApps;
		storeBuilder?: AdministratorWebTokenSpecStoreBuilder;
		webApps?: AdministratorWebTokenSpecWebApps;
	}

	/** Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with. */
	export interface AdministratorWebTokenSpecFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The URI of the parent frame hosting the iframe. To prevent XSS, the iframe may not be hosted at other URIs. This URI must be https. Use whitespaces to separate multiple parent URIs. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateAdministratorWebTokenSpecFormGroup() {
		return new FormGroup<AdministratorWebTokenSpecFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdministratorWebTokenSpecManagedConfigurations {

		/** Whether the Managed Configuration page is displayed. Default is true. */
		enabled?: boolean | null;
	}
	export interface AdministratorWebTokenSpecManagedConfigurationsFormProperties {

		/** Whether the Managed Configuration page is displayed. Default is true. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdministratorWebTokenSpecManagedConfigurationsFormGroup() {
		return new FormGroup<AdministratorWebTokenSpecManagedConfigurationsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AdministratorWebTokenSpecPlaySearch {

		/** Allow access to the iframe in approve mode. Default is false. */
		approveApps?: boolean | null;

		/** Whether the managed Play Search apps page is displayed. Default is true. */
		enabled?: boolean | null;
	}
	export interface AdministratorWebTokenSpecPlaySearchFormProperties {

		/** Allow access to the iframe in approve mode. Default is false. */
		approveApps: FormControl<boolean | null | undefined>,

		/** Whether the managed Play Search apps page is displayed. Default is true. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdministratorWebTokenSpecPlaySearchFormGroup() {
		return new FormGroup<AdministratorWebTokenSpecPlaySearchFormProperties>({
			approveApps: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AdministratorWebTokenSpecPrivateApps {

		/** Whether the Private Apps page is displayed. Default is true. */
		enabled?: boolean | null;
	}
	export interface AdministratorWebTokenSpecPrivateAppsFormProperties {

		/** Whether the Private Apps page is displayed. Default is true. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdministratorWebTokenSpecPrivateAppsFormGroup() {
		return new FormGroup<AdministratorWebTokenSpecPrivateAppsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AdministratorWebTokenSpecStoreBuilder {

		/** Whether the Organize apps page is displayed. Default is true. */
		enabled?: boolean | null;
	}
	export interface AdministratorWebTokenSpecStoreBuilderFormProperties {

		/** Whether the Organize apps page is displayed. Default is true. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdministratorWebTokenSpecStoreBuilderFormGroup() {
		return new FormGroup<AdministratorWebTokenSpecStoreBuilderFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AdministratorWebTokenSpecWebApps {

		/** Whether the Web Apps page is displayed. Default is true. */
		enabled?: boolean | null;
	}
	export interface AdministratorWebTokenSpecWebAppsFormProperties {

		/** Whether the Web Apps page is displayed. Default is true. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdministratorWebTokenSpecWebAppsFormGroup() {
		return new FormGroup<AdministratorWebTokenSpecWebAppsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the list of app restrictions available to be pre-configured for the product. */
	export interface AppRestrictionsSchema {

		/** Deprecated. */
		kind?: string | null;

		/** The set of restrictions that make up this schema. */
		restrictions?: Array<AppRestrictionsSchemaRestriction>;
	}

	/** Represents the list of app restrictions available to be pre-configured for the product. */
	export interface AppRestrictionsSchemaFormProperties {

		/** Deprecated. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAppRestrictionsSchemaFormGroup() {
		return new FormGroup<AppRestrictionsSchemaFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied. */
	export interface AppRestrictionsSchemaRestriction {

		/** A typed value for the restriction. */
		defaultValue?: AppRestrictionsSchemaRestrictionRestrictionValue;

		/** A longer description of the restriction, giving more detail of what it affects. */
		description?: string | null;

		/** For choice or multiselect restrictions, the list of possible entries' human-readable names. */
		entry?: Array<string>;

		/** For choice or multiselect restrictions, the list of possible entries' machine-readable values. These values should be used in the configuration, either as a single string value for a choice restriction or in a stringArray for a multiselect restriction. */
		entryValue?: Array<string>;

		/** The unique key that the product uses to identify the restriction, e.g. "com.google.android.gm.fieldname". */
		key?: string | null;

		/** For bundle or bundleArray restrictions, the list of nested restrictions. A bundle restriction is always nested within a bundleArray restriction, and a bundleArray restriction is at most two levels deep. */
		nestedRestriction?: Array<AppRestrictionsSchemaRestriction>;

		/** The type of the restriction. */
		restrictionType?: string | null;

		/** The name of the restriction. */
		title?: string | null;
	}

	/** A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied. */
	export interface AppRestrictionsSchemaRestrictionFormProperties {

		/** A longer description of the restriction, giving more detail of what it affects. */
		description: FormControl<string | null | undefined>,

		/** The unique key that the product uses to identify the restriction, e.g. "com.google.android.gm.fieldname". */
		key: FormControl<string | null | undefined>,

		/** The type of the restriction. */
		restrictionType: FormControl<string | null | undefined>,

		/** The name of the restriction. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAppRestrictionsSchemaRestrictionFormGroup() {
		return new FormGroup<AppRestrictionsSchemaRestrictionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			restrictionType: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A typed value for the restriction. */
	export interface AppRestrictionsSchemaRestrictionRestrictionValue {

		/** The type of the value being provided. */
		type?: string | null;

		/** The boolean value - this will only be present if type is bool. */
		valueBool?: boolean | null;

		/** The integer value - this will only be present if type is integer. */
		valueInteger?: number | null;

		/** The list of string values - this will only be present if type is multiselect. */
		valueMultiselect?: Array<string>;

		/** The string value - this will be present for types string, choice and hidden. */
		valueString?: string | null;
	}

	/** A typed value for the restriction. */
	export interface AppRestrictionsSchemaRestrictionRestrictionValueFormProperties {

		/** The type of the value being provided. */
		type: FormControl<string | null | undefined>,

		/** The boolean value - this will only be present if type is bool. */
		valueBool: FormControl<boolean | null | undefined>,

		/** The integer value - this will only be present if type is integer. */
		valueInteger: FormControl<number | null | undefined>,

		/** The string value - this will be present for types string, choice and hidden. */
		valueString: FormControl<string | null | undefined>,
	}
	export function CreateAppRestrictionsSchemaRestrictionRestrictionValueFormGroup() {
		return new FormGroup<AppRestrictionsSchemaRestrictionRestrictionValueFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			valueBool: new FormControl<boolean | null | undefined>(undefined),
			valueInteger: new FormControl<number | null | undefined>(undefined),
			valueString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API. */
	export interface AppRestrictionsSchemaChangeEvent {

		/** The id of the product (e.g. "app:com.google.android.gm") for which the app restriction schema changed. This field will always be present. */
		productId?: string | null;
	}

	/** An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API. */
	export interface AppRestrictionsSchemaChangeEventFormProperties {

		/** The id of the product (e.g. "app:com.google.android.gm") for which the app restriction schema changed. This field will always be present. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateAppRestrictionsSchemaChangeEventFormGroup() {
		return new FormGroup<AppRestrictionsSchemaChangeEventFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of states set by the app. */
	export interface AppState {

		/** List of keyed app states. This field will always be present. */
		keyedAppState?: Array<KeyedAppState>;

		/** The package name of the app. This field will always be present. */
		packageName?: string | null;
	}

	/** List of states set by the app. */
	export interface AppStateFormProperties {

		/** The package name of the app. This field will always be present. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateAppStateFormGroup() {
		return new FormGroup<AppStateFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data. */
	export interface KeyedAppState {

		/** Additional field intended for machine-readable data. For example, a number or JSON object. To prevent XSS, we recommend removing any HTML from the data before displaying it. */
		data?: string | null;

		/** Key indicating what the app is providing a state for. The content of the key is set by the app's developer. To prevent XSS, we recommend removing any HTML from the key before displaying it. This field will always be present. */
		key?: string | null;

		/** Free-form, human-readable message describing the app state. For example, an error message. To prevent XSS, we recommend removing any HTML from the message before displaying it. */
		message?: string | null;

		/** Severity of the app state. This field will always be present. */
		severity?: string | null;

		/** Timestamp of when the app set the state in milliseconds since epoch. This field will always be present. */
		stateTimestampMillis?: string | null;
	}

	/** Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data. */
	export interface KeyedAppStateFormProperties {

		/** Additional field intended for machine-readable data. For example, a number or JSON object. To prevent XSS, we recommend removing any HTML from the data before displaying it. */
		data: FormControl<string | null | undefined>,

		/** Key indicating what the app is providing a state for. The content of the key is set by the app's developer. To prevent XSS, we recommend removing any HTML from the key before displaying it. This field will always be present. */
		key: FormControl<string | null | undefined>,

		/** Free-form, human-readable message describing the app state. For example, an error message. To prevent XSS, we recommend removing any HTML from the message before displaying it. */
		message: FormControl<string | null | undefined>,

		/** Severity of the app state. This field will always be present. */
		severity: FormControl<string | null | undefined>,

		/** Timestamp of when the app set the state in milliseconds since epoch. This field will always be present. */
		stateTimestampMillis: FormControl<string | null | undefined>,
	}
	export function CreateKeyedAppStateFormGroup() {
		return new FormGroup<KeyedAppStateFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			stateTimestampMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API. */
	export interface AppUpdateEvent {

		/** The id of the product (e.g. "app:com.google.android.gm") that was updated. This field will always be present. */
		productId?: string | null;
	}

	/** An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API. */
	export interface AppUpdateEventFormProperties {

		/** The id of the product (e.g. "app:com.google.android.gm") that was updated. This field will always be present. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateAppUpdateEventFormGroup() {
		return new FormGroup<AppUpdateEventFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This represents a single version of the app. */
	export interface AppVersion {

		/** True if this version is a production APK. */
		isProduction?: boolean | null;

		/** Deprecated, use trackId instead. */
		track?: string | null;

		/** Track ids that the app version is published in. Replaces the track field (deprecated), but doesn't include the production track (see isProduction instead). */
		trackId?: Array<string>;

		/** Unique increasing identifier for the app version. */
		versionCode?: number | null;

		/** The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4"). */
		versionString?: string | null;
	}

	/** This represents a single version of the app. */
	export interface AppVersionFormProperties {

		/** True if this version is a production APK. */
		isProduction: FormControl<boolean | null | undefined>,

		/** Deprecated, use trackId instead. */
		track: FormControl<string | null | undefined>,

		/** Unique increasing identifier for the app version. */
		versionCode: FormControl<number | null | undefined>,

		/** The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4"). */
		versionString: FormControl<string | null | undefined>,
	}
	export function CreateAppVersionFormGroup() {
		return new FormGroup<AppVersionFormProperties>({
			isProduction: new FormControl<boolean | null | undefined>(undefined),
			track: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<number | null | undefined>(undefined),
			versionString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information on an approval URL. */
	export interface ApprovalUrlInfo {

		/** A URL that displays a product's permissions and that can also be used to approve the product with the Products.approve call. */
		approvalUrl?: string | null;
		kind?: string | null;
	}

	/** Information on an approval URL. */
	export interface ApprovalUrlInfoFormProperties {

		/** A URL that displays a product's permissions and that can also be used to approve the product with the Products.approve call. */
		approvalUrl: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateApprovalUrlInfoFormGroup() {
		return new FormGroup<ApprovalUrlInfoFormProperties>({
			approvalUrl: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device. */
	export interface AuthenticationToken {
		kind?: string | null;

		/** The authentication token to be passed to the device policy client on the device where it can be used to provision the account for which this token was generated. */
		token?: string | null;
	}

	/** An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device. */
	export interface AuthenticationTokenFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The authentication token to be passed to the device policy client on the device where it can be used to provision the account for which this token was generated. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationTokenFormGroup() {
		return new FormGroup<AuthenticationTokenFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set. */
	export interface AutoInstallConstraint {

		/** Charging state constraint. */
		chargingStateConstraint?: string | null;

		/** Device idle state constraint. */
		deviceIdleStateConstraint?: string | null;

		/** Network type constraint. */
		networkTypeConstraint?: string | null;
	}

	/** The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set. */
	export interface AutoInstallConstraintFormProperties {

		/** Charging state constraint. */
		chargingStateConstraint: FormControl<string | null | undefined>,

		/** Device idle state constraint. */
		deviceIdleStateConstraint: FormControl<string | null | undefined>,

		/** Network type constraint. */
		networkTypeConstraint: FormControl<string | null | undefined>,
	}
	export function CreateAutoInstallConstraintFormGroup() {
		return new FormGroup<AutoInstallConstraintFormProperties>({
			chargingStateConstraint: new FormControl<string | null | undefined>(undefined),
			deviceIdleStateConstraint: new FormControl<string | null | undefined>(undefined),
			networkTypeConstraint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutoInstallPolicy {

		/** The constraints for auto-installing the app. You can specify a maximum of one constraint. */
		autoInstallConstraint?: Array<AutoInstallConstraint>;

		/** The auto-install mode. If unset defaults to "doNotAutoInstall". */
		autoInstallMode?: string | null;

		/** The priority of the install, as an unsigned integer. A lower number means higher priority. */
		autoInstallPriority?: number | null;

		/** The minimum version of the app. If a lower version of the app is installed, then the app will be auto-updated according to the auto-install constraints, instead of waiting for the regular auto-update. You can set a minimum version code for at most 20 apps per device. */
		minimumVersionCode?: number | null;
	}
	export interface AutoInstallPolicyFormProperties {

		/** The auto-install mode. If unset defaults to "doNotAutoInstall". */
		autoInstallMode: FormControl<string | null | undefined>,

		/** The priority of the install, as an unsigned integer. A lower number means higher priority. */
		autoInstallPriority: FormControl<number | null | undefined>,

		/** The minimum version of the app. If a lower version of the app is installed, then the app will be auto-updated according to the auto-install constraints, instead of waiting for the regular auto-update. You can set a minimum version code for at most 20 apps per device. */
		minimumVersionCode: FormControl<number | null | undefined>,
	}
	export function CreateAutoInstallPolicyFormGroup() {
		return new FormGroup<AutoInstallPolicyFormProperties>({
			autoInstallMode: new FormControl<string | null | undefined>(undefined),
			autoInstallPriority: new FormControl<number | null | undefined>(undefined),
			minimumVersionCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings. */
	export interface ConfigurationVariables {
		kind?: string | null;

		/** The ID of the managed configurations settings. */
		mcmId?: string | null;

		/** The variable set that is attributed to the user. */
		variableSet?: Array<VariableSet>;
	}

	/** A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings. */
	export interface ConfigurationVariablesFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The ID of the managed configurations settings. */
		mcmId: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationVariablesFormGroup() {
		return new FormGroup<ConfigurationVariablesFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			mcmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A variable set is a key-value pair of EMM-provided placeholders and its corresponding value, which is attributed to a user. For example, $FIRSTNAME could be a placeholder, and its value could be Alice. Placeholders should start with a '$' sign and should be alphanumeric only. */
	export interface VariableSet {
		kind?: string | null;

		/** The placeholder string; defined by EMM. */
		placeholder?: string | null;

		/** The value of the placeholder, specific to the user. */
		userValue?: string | null;
	}

	/** A variable set is a key-value pair of EMM-provided placeholders and its corresponding value, which is attributed to a user. For example, $FIRSTNAME could be a placeholder, and its value could be Alice. Placeholders should start with a '$' sign and should be alphanumeric only. */
	export interface VariableSetFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The placeholder string; defined by EMM. */
		placeholder: FormControl<string | null | undefined>,

		/** The value of the placeholder, specific to the user. */
		userValue: FormControl<string | null | undefined>,
	}
	export function CreateVariableSetFormGroup() {
		return new FormGroup<VariableSetFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			placeholder: new FormControl<string | null | undefined>(undefined),
			userValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user. */
	export interface Device {

		/** The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, "123456789abcdef0". */
		androidId?: string | null;
		kind?: string | null;

		/**
		 * Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations.
		 * Possible values include:
		 * - "managedDevice", a device that has the EMM's device policy controller (DPC) as the device owner.
		 * - "managedProfile", a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC.
		 * - "containerApp", no longer used (deprecated).
		 * - "unmanagedProfile", a device that has been allowed (by the domain's admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC.
		 */
		managementType?: string | null;

		/** The device policy for a given managed device. */
		policy?: Policy;

		/** Device report updated with the latest app states for managed apps on the device. */
		report?: DeviceReport;
	}

	/** A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user. */
	export interface DeviceFormProperties {

		/** The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, "123456789abcdef0". */
		androidId: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/**
		 * Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations.
		 * Possible values include:
		 * - "managedDevice", a device that has the EMM's device policy controller (DPC) as the device owner.
		 * - "managedProfile", a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC.
		 * - "containerApp", no longer used (deprecated).
		 * - "unmanagedProfile", a device that has been allowed (by the domain's admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC.
		 */
		managementType: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			androidId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			managementType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The device policy for a given managed device. */
	export interface Policy {

		/** The auto-update policy for apps installed on the device. "choiceToTheUser" allows the device's user to configure the app update policy. "always" enables auto updates. "never" disables auto updates. "wifiOnly" enables auto updates only when the device is connected to wifi. */
		autoUpdatePolicy?: string | null;

		/** Whether the device reports app states to the EMM. The default value is "deviceReportDisabled". */
		deviceReportPolicy?: string | null;

		/** Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window. */
		maintenanceWindow?: MaintenanceWindow;

		/** The availability granted to the device for the specified products. "all" gives the device access to all products, regardless of approval status. "all" does not enable automatic visibility of "alpha" or "beta" tracks. "whitelist" grants the device access the products specified in productPolicy[]. Only products that are approved or products that were previously approved (products with revoked approval) by the enterprise can be whitelisted. If no value is provided, the availability set at the user level is applied by default. */
		productAvailabilityPolicy?: string | null;

		/** The list of product policies. */
		productPolicy?: Array<ProductPolicy>;
	}

	/** The device policy for a given managed device. */
	export interface PolicyFormProperties {

		/** The auto-update policy for apps installed on the device. "choiceToTheUser" allows the device's user to configure the app update policy. "always" enables auto updates. "never" disables auto updates. "wifiOnly" enables auto updates only when the device is connected to wifi. */
		autoUpdatePolicy: FormControl<string | null | undefined>,

		/** Whether the device reports app states to the EMM. The default value is "deviceReportDisabled". */
		deviceReportPolicy: FormControl<string | null | undefined>,

		/** The availability granted to the device for the specified products. "all" gives the device access to all products, regardless of approval status. "all" does not enable automatic visibility of "alpha" or "beta" tracks. "whitelist" grants the device access the products specified in productPolicy[]. Only products that are approved or products that were previously approved (products with revoked approval) by the enterprise can be whitelisted. If no value is provided, the availability set at the user level is applied by default. */
		productAvailabilityPolicy: FormControl<string | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			autoUpdatePolicy: new FormControl<string | null | undefined>(undefined),
			deviceReportPolicy: new FormControl<string | null | undefined>(undefined),
			productAvailabilityPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window. */
	export interface MaintenanceWindow {

		/** Duration of the maintenance window, in milliseconds. The duration must be between 30 minutes and 24 hours (inclusive). */
		durationMs?: string | null;

		/** Start time of the maintenance window, in milliseconds after midnight on the device. Windows can span midnight. */
		startTimeAfterMidnightMs?: string | null;
	}

	/** Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window. */
	export interface MaintenanceWindowFormProperties {

		/** Duration of the maintenance window, in milliseconds. The duration must be between 30 minutes and 24 hours (inclusive). */
		durationMs: FormControl<string | null | undefined>,

		/** Start time of the maintenance window, in milliseconds after midnight on the device. Windows can span midnight. */
		startTimeAfterMidnightMs: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
			durationMs: new FormControl<string | null | undefined>(undefined),
			startTimeAfterMidnightMs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The policy for a product. */
	export interface ProductPolicy {
		autoInstallPolicy?: AutoInstallPolicy;

		/** A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user. */
		managedConfiguration?: ManagedConfiguration;

		/** The ID of the product. For example, "app:com.google.android.gm". */
		productId?: string | null;

		/** Grants the device visibility to the specified product release track(s), identified by trackIds. The list of release tracks of a product can be obtained by calling Products.Get. */
		trackIds?: Array<string>;

		/** Deprecated. Use trackIds instead. */
		tracks?: Array<string>;
	}

	/** The policy for a product. */
	export interface ProductPolicyFormProperties {

		/** The ID of the product. For example, "app:com.google.android.gm". */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateProductPolicyFormGroup() {
		return new FormGroup<ProductPolicyFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user. */
	export interface ManagedConfiguration {

		/** A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings. */
		configurationVariables?: ConfigurationVariables;

		/** Deprecated. */
		kind?: string | null;

		/** The set of managed properties for this configuration. */
		managedProperty?: Array<ManagedProperty>;

		/** The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm". */
		productId?: string | null;
	}

	/** A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user. */
	export interface ManagedConfigurationFormProperties {

		/** Deprecated. */
		kind: FormControl<string | null | undefined>,

		/** The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm". */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateManagedConfigurationFormGroup() {
		return new FormGroup<ManagedConfigurationFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema. */
	export interface ManagedProperty {

		/** The unique key that identifies the property. */
		key?: string | null;

		/** The boolean value - this will only be present if type of the property is bool. */
		valueBool?: boolean | null;

		/** A bundle of managed properties. */
		valueBundle?: ManagedPropertyBundle;

		/** The list of bundles of properties - this will only be present if type of the property is bundle_array. */
		valueBundleArray?: Array<ManagedPropertyBundle>;

		/** The integer value - this will only be present if type of the property is integer. */
		valueInteger?: number | null;

		/** The string value - this will only be present if type of the property is string, choice or hidden. */
		valueString?: string | null;

		/** The list of string values - this will only be present if type of the property is multiselect. */
		valueStringArray?: Array<string>;
	}

	/** A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema. */
	export interface ManagedPropertyFormProperties {

		/** The unique key that identifies the property. */
		key: FormControl<string | null | undefined>,

		/** The boolean value - this will only be present if type of the property is bool. */
		valueBool: FormControl<boolean | null | undefined>,

		/** The integer value - this will only be present if type of the property is integer. */
		valueInteger: FormControl<number | null | undefined>,

		/** The string value - this will only be present if type of the property is string, choice or hidden. */
		valueString: FormControl<string | null | undefined>,
	}
	export function CreateManagedPropertyFormGroup() {
		return new FormGroup<ManagedPropertyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			valueBool: new FormControl<boolean | null | undefined>(undefined),
			valueInteger: new FormControl<number | null | undefined>(undefined),
			valueString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A bundle of managed properties. */
	export interface ManagedPropertyBundle {

		/** The list of managed properties. */
		managedProperty?: Array<ManagedProperty>;
	}

	/** A bundle of managed properties. */
	export interface ManagedPropertyBundleFormProperties {
	}
	export function CreateManagedPropertyBundleFormGroup() {
		return new FormGroup<ManagedPropertyBundleFormProperties>({
		});

	}


	/** Device report updated with the latest app states for managed apps on the device. */
	export interface DeviceReport {

		/** List of app states set by managed apps on the device. App states are defined by the app's developers. This field will always be present. */
		appState?: Array<AppState>;

		/** The timestamp of the last report update in milliseconds since epoch. This field will always be present. */
		lastUpdatedTimestampMillis?: string | null;
	}

	/** Device report updated with the latest app states for managed apps on the device. */
	export interface DeviceReportFormProperties {

		/** The timestamp of the last report update in milliseconds since epoch. This field will always be present. */
		lastUpdatedTimestampMillis: FormControl<string | null | undefined>,
	}
	export function CreateDeviceReportFormGroup() {
		return new FormGroup<DeviceReportFormProperties>({
			lastUpdatedTimestampMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when an updated device report is available. */
	export interface DeviceReportUpdateEvent {

		/** The Android ID of the device. This field will always be present. */
		deviceId?: string | null;

		/** Device report updated with the latest app states for managed apps on the device. */
		report?: DeviceReport;

		/** The ID of the user. This field will always be present. */
		userId?: string | null;
	}

	/** An event generated when an updated device report is available. */
	export interface DeviceReportUpdateEventFormProperties {

		/** The Android ID of the device. This field will always be present. */
		deviceId: FormControl<string | null | undefined>,

		/** The ID of the user. This field will always be present. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateDeviceReportUpdateEventFormGroup() {
		return new FormGroup<DeviceReportUpdateEventFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The state of a user's device, as accessed by the getState and setState methods on device resources. */
	export interface DeviceState {

		/** The state of the Google account on the device. "enabled" indicates that the Google account on the device can be used to access Google services (including Google Play), while "disabled" means that it cannot. A new device is initially in the "disabled" state. */
		accountState?: string | null;
		kind?: string | null;
	}

	/** The state of a user's device, as accessed by the getState and setState methods on device resources. */
	export interface DeviceStateFormProperties {

		/** The state of the Google account on the device. "enabled" indicates that the Google account on the device can be used to access Google services (including Google Play), while "disabled" means that it cannot. A new device is initially in the "disabled" state. */
		accountState: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDeviceStateFormGroup() {
		return new FormGroup<DeviceStateFormProperties>({
			accountState: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The device resources for the user. */
	export interface DevicesListResponse {

		/** A managed device. */
		device?: Array<Device>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#devicesListResponse". */
		kind?: string | null;
	}

	/** The device resources for the user. */
	export interface DevicesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#devicesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDevicesListResponseFormGroup() {
		return new FormGroup<DevicesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An Enterprises resource represents the binding between an EMM and a specific organization. That binding can be instantiated in one of two different ways using this API as follows: 
	 * - For Google managed domain customers, the process involves using Enterprises.enroll and Enterprises.setAccount (in conjunction with artifacts obtained from the Admin console and the Google API Console) and submitted to the EMM through a more-or-less manual process. 
	 * - For managed Google Play Accounts customers, the process involves using Enterprises.generateSignupUrl and Enterprises.completeSignup in conjunction with the managed Google Play sign-up UI (Google-provided mechanism) to create the binding without manual steps. As an EMM, you can support either or both approaches in your EMM console. See Create an Enterprise for details.
	 */
	export interface Enterprise {

		/** Admins of the enterprise. This is only supported for enterprises created via the EMM-initiated flow. */
		administrator?: Array<Administrator>;

		/** The unique ID for the enterprise. */
		id?: string | null;
		kind?: string | null;

		/** The name of the enterprise, for example, "Example, Inc". */
		name?: string | null;

		/** The enterprise's primary domain, such as "example.com". */
		primaryDomain?: string | null;
	}

	/**
	 * An Enterprises resource represents the binding between an EMM and a specific organization. That binding can be instantiated in one of two different ways using this API as follows: 
	 * - For Google managed domain customers, the process involves using Enterprises.enroll and Enterprises.setAccount (in conjunction with artifacts obtained from the Admin console and the Google API Console) and submitted to the EMM through a more-or-less manual process. 
	 * - For managed Google Play Accounts customers, the process involves using Enterprises.generateSignupUrl and Enterprises.completeSignup in conjunction with the managed Google Play sign-up UI (Google-provided mechanism) to create the binding without manual steps. As an EMM, you can support either or both approaches in your EMM console. See Create an Enterprise for details.
	 */
	export interface EnterpriseFormProperties {

		/** The unique ID for the enterprise. */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The name of the enterprise, for example, "Example, Inc". */
		name: FormControl<string | null | undefined>,

		/** The enterprise's primary domain, such as "example.com". */
		primaryDomain: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseFormGroup() {
		return new FormGroup<EnterpriseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A service account that can be used to authenticate as the enterprise to API calls that require such authentication. */
	export interface EnterpriseAccount {

		/** The email address of the service account. */
		accountEmail?: string | null;
		kind?: string | null;
	}

	/** A service account that can be used to authenticate as the enterprise to API calls that require such authentication. */
	export interface EnterpriseAccountFormProperties {

		/** The email address of the service account. */
		accountEmail: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseAccountFormGroup() {
		return new FormGroup<EnterpriseAccountFormProperties>({
			accountEmail: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The matching enterprise resources. */
	export interface EnterprisesListResponse {

		/** An enterprise. */
		enterprise?: Array<Enterprise>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterprisesListResponse". */
		kind?: string | null;
	}

	/** The matching enterprise resources. */
	export interface EnterprisesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterprisesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEnterprisesListResponseFormGroup() {
		return new FormGroup<EnterprisesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterprisesSendTestPushNotificationResponse {

		/** The message ID of the test push notification that was sent. */
		messageId?: string | null;

		/** The name of the Cloud Pub/Sub topic to which notifications for this enterprise's enrolled account will be sent. */
		topicName?: string | null;
	}
	export interface EnterprisesSendTestPushNotificationResponseFormProperties {

		/** The message ID of the test push notification that was sent. */
		messageId: FormControl<string | null | undefined>,

		/** The name of the Cloud Pub/Sub topic to which notifications for this enterprise's enrolled account will be sent. */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreateEnterprisesSendTestPushNotificationResponseFormGroup() {
		return new FormGroup<EnterprisesSendTestPushNotificationResponseFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined),
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The presence of an Entitlements resource indicates that a user has the right to use a particular app. Entitlements are user specific, not device specific. This allows a user with an entitlement to an app to install the app on all their devices. It's also possible for a user to hold an entitlement to an app without installing the app on any device.
	 * The API can be used to create an entitlement. As an option, you can also use the API to trigger the installation of an app on all a user's managed devices at the same time the entitlement is created.
	 * If the app is free, creating the entitlement also creates a group license for that app. For paid apps, creating the entitlement consumes one license, and that license remains consumed until the entitlement is removed. If the enterprise hasn't purchased enough licenses, then no entitlement is created and the installation fails. An entitlement is also not created for an app if the app requires permissions that the enterprise hasn't accepted.
	 * If an entitlement is deleted, the app may be uninstalled from a user's device. As a best practice, uninstall the app by calling  Installs.delete() before deleting the entitlement.
	 * Entitlements for apps that a user pays for on an unmanaged profile have "userPurchase" as the entitlement reason. These entitlements cannot be removed via the API.
	 */
	export interface Entitlement {
		kind?: string | null;

		/** The ID of the product that the entitlement is for. For example, "app:com.google.android.gm". */
		productId?: string | null;

		/** The reason for the entitlement. For example, "free" for free apps. This property is temporary: it will be replaced by the acquisition kind field of group licenses. */
		reason?: string | null;
	}

	/**
	 * The presence of an Entitlements resource indicates that a user has the right to use a particular app. Entitlements are user specific, not device specific. This allows a user with an entitlement to an app to install the app on all their devices. It's also possible for a user to hold an entitlement to an app without installing the app on any device.
	 * The API can be used to create an entitlement. As an option, you can also use the API to trigger the installation of an app on all a user's managed devices at the same time the entitlement is created.
	 * If the app is free, creating the entitlement also creates a group license for that app. For paid apps, creating the entitlement consumes one license, and that license remains consumed until the entitlement is removed. If the enterprise hasn't purchased enough licenses, then no entitlement is created and the installation fails. An entitlement is also not created for an app if the app requires permissions that the enterprise hasn't accepted.
	 * If an entitlement is deleted, the app may be uninstalled from a user's device. As a best practice, uninstall the app by calling  Installs.delete() before deleting the entitlement.
	 * Entitlements for apps that a user pays for on an unmanaged profile have "userPurchase" as the entitlement reason. These entitlements cannot be removed via the API.
	 */
	export interface EntitlementFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The ID of the product that the entitlement is for. For example, "app:com.google.android.gm". */
		productId: FormControl<string | null | undefined>,

		/** The reason for the entitlement. For example, "free" for free apps. This property is temporary: it will be replaced by the acquisition kind field of group licenses. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateEntitlementFormGroup() {
		return new FormGroup<EntitlementFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The entitlement resources for the user. */
	export interface EntitlementsListResponse {

		/** An entitlement of a user to a product (e.g. an app). For example, a free app that they have installed, or a paid app that they have been allocated a license to. */
		entitlement?: Array<Entitlement>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#entitlementsListResponse". */
		kind?: string | null;
	}

	/** The entitlement resources for the user. */
	export interface EntitlementsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#entitlementsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEntitlementsListResponseFormGroup() {
		return new FormGroup<EntitlementsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Group license objects allow you to keep track of licenses (called entitlements) for both free and paid apps. For a free app, a group license is created when an enterprise admin first approves the product in Google Play or when the first entitlement for the product is created for a user via the API. For a paid app, a group license object is only created when an enterprise admin purchases the product in Google Play for the first time.
	 * Use the API to query group licenses. A Grouplicenses resource includes the total number of licenses purchased (paid apps only) and the total number of licenses currently in use. In other words, the total number of Entitlements that exist for the product.
	 * Only one group license object is created per product and group license objects are never deleted. If a product is unapproved, its group license remains. This allows enterprise admins to keep track of any remaining entitlements for the product.
	 */
	export interface GroupLicense {

		/** How this group license was acquired. "bulkPurchase" means that this Grouplicenses resource was created because the enterprise purchased licenses for this product; otherwise, the value is "free" (for free products). */
		acquisitionKind?: string | null;

		/** Whether the product to which this group license relates is currently approved by the enterprise. Products are approved when a group license is first created, but this approval may be revoked by an enterprise admin via Google Play. Unapproved products will not be visible to end users in collections, and new entitlements to them should not normally be created. */
		approval?: string | null;
		kind?: string | null;

		/** The total number of provisioned licenses for this product. Returned by read operations, but ignored in write operations. */
		numProvisioned?: number | null;

		/** The number of purchased licenses (possibly in multiple purchases). If this field is omitted, then there is no limit on the number of licenses that can be provisioned (for example, if the acquisition kind is "free"). */
		numPurchased?: number | null;

		/**
		 * The permission approval status of the product. This field is only set if the product is approved. Possible states are:
		 * - "currentApproved", the current set of permissions is approved, but additional permissions will require the administrator to reapprove the product (If the product was approved without specifying the approved permissions setting, then this is the default behavior.),
		 * - "needsReapproval", the product has unapproved permissions. No additional product licenses can be assigned until the product is reapproved,
		 * - "allCurrentAndFutureApproved", the current permissions are approved and any future permission updates will be automatically approved without administrator review.
		 */
		permissions?: string | null;

		/** The ID of the product that the license is for. For example, "app:com.google.android.gm". */
		productId?: string | null;
	}

	/**
	 * Group license objects allow you to keep track of licenses (called entitlements) for both free and paid apps. For a free app, a group license is created when an enterprise admin first approves the product in Google Play or when the first entitlement for the product is created for a user via the API. For a paid app, a group license object is only created when an enterprise admin purchases the product in Google Play for the first time.
	 * Use the API to query group licenses. A Grouplicenses resource includes the total number of licenses purchased (paid apps only) and the total number of licenses currently in use. In other words, the total number of Entitlements that exist for the product.
	 * Only one group license object is created per product and group license objects are never deleted. If a product is unapproved, its group license remains. This allows enterprise admins to keep track of any remaining entitlements for the product.
	 */
	export interface GroupLicenseFormProperties {

		/** How this group license was acquired. "bulkPurchase" means that this Grouplicenses resource was created because the enterprise purchased licenses for this product; otherwise, the value is "free" (for free products). */
		acquisitionKind: FormControl<string | null | undefined>,

		/** Whether the product to which this group license relates is currently approved by the enterprise. Products are approved when a group license is first created, but this approval may be revoked by an enterprise admin via Google Play. Unapproved products will not be visible to end users in collections, and new entitlements to them should not normally be created. */
		approval: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The total number of provisioned licenses for this product. Returned by read operations, but ignored in write operations. */
		numProvisioned: FormControl<number | null | undefined>,

		/** The number of purchased licenses (possibly in multiple purchases). If this field is omitted, then there is no limit on the number of licenses that can be provisioned (for example, if the acquisition kind is "free"). */
		numPurchased: FormControl<number | null | undefined>,

		/**
		 * The permission approval status of the product. This field is only set if the product is approved. Possible states are:
		 * - "currentApproved", the current set of permissions is approved, but additional permissions will require the administrator to reapprove the product (If the product was approved without specifying the approved permissions setting, then this is the default behavior.),
		 * - "needsReapproval", the product has unapproved permissions. No additional product licenses can be assigned until the product is reapproved,
		 * - "allCurrentAndFutureApproved", the current permissions are approved and any future permission updates will be automatically approved without administrator review.
		 */
		permissions: FormControl<string | null | undefined>,

		/** The ID of the product that the license is for. For example, "app:com.google.android.gm". */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateGroupLicenseFormGroup() {
		return new FormGroup<GroupLicenseFormProperties>({
			acquisitionKind: new FormControl<string | null | undefined>(undefined),
			approval: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			numProvisioned: new FormControl<number | null | undefined>(undefined),
			numPurchased: new FormControl<number | null | undefined>(undefined),
			permissions: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The user resources for the group license. */
	export interface GroupLicenseUsersListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicenseUsersListResponse". */
		kind?: string | null;

		/** A user of an enterprise. */
		user?: Array<User>;
	}

	/** The user resources for the group license. */
	export interface GroupLicenseUsersListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicenseUsersListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateGroupLicenseUsersListResponseFormGroup() {
		return new FormGroup<GroupLicenseUsersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: 
	 * - The Google managed domain identity model requires synchronization to Google account sources (via primaryEmail). 
	 * - The managed Google Play Accounts identity model provides a dynamic means for enterprises to create user or device accounts as needed. These accounts provide access to managed Google Play.
	 */
	export interface User {

		/** A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users. */
		accountIdentifier?: string | null;

		/** The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount. */
		accountType?: string | null;

		/** The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts. */
		displayName?: string | null;

		/** The unique ID for the user. */
		id?: string | null;
		kind?: string | null;

		/** The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge. */
		managementType?: string | null;

		/** The user's primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users. */
		primaryEmail?: string | null;
	}

	/**
	 * A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: 
	 * - The Google managed domain identity model requires synchronization to Google account sources (via primaryEmail). 
	 * - The managed Google Play Accounts identity model provides a dynamic means for enterprises to create user or device accounts as needed. These accounts provide access to managed Google Play.
	 */
	export interface UserFormProperties {

		/** A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users. */
		accountIdentifier: FormControl<string | null | undefined>,

		/** The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount. */
		accountType: FormControl<string | null | undefined>,

		/** The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts. */
		displayName: FormControl<string | null | undefined>,

		/** The unique ID for the user. */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge. */
		managementType: FormControl<string | null | undefined>,

		/** The user's primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users. */
		primaryEmail: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			accountIdentifier: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			managementType: new FormControl<string | null | undefined>(undefined),
			primaryEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The grouplicense resources for the enterprise. */
	export interface GroupLicensesListResponse {

		/** A group license for a product approved for use in the enterprise. */
		groupLicense?: Array<GroupLicense>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicensesListResponse". */
		kind?: string | null;
	}

	/** The grouplicense resources for the enterprise. */
	export interface GroupLicensesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicensesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateGroupLicensesListResponseFormGroup() {
		return new FormGroup<GroupLicensesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The existence of an Installs resource indicates that an app is installed on a particular device (or that an install is pending).
	 * The API can be used to create an install resource using the update method. This triggers the actual install of the app on the device. If the user does not already have an entitlement for the app, then an attempt is made to create one. If this fails (for example, because the app is not free and there is no available license), then the creation of the install fails.
	 * The API can also be used to update an installed app. If the update method is used on an existing install, then the app will be updated to the latest available version.
	 * Note that it is not possible to force the installation of a specific version of an app: the version code is read-only.
	 * If a user installs an app themselves (as permitted by the enterprise), then again an install resource and possibly an entitlement resource are automatically created.
	 * The API can also be used to delete an install resource, which triggers the removal of the app from the device. Note that deleting an install does not automatically remove the corresponding entitlement, even if there are no remaining installs. The install resource will also be deleted if the user uninstalls the app themselves.
	 */
	export interface Install {

		/** Install state. The state "installPending" means that an install request has recently been made and download to the device is in progress. The state "installed" means that the app has been installed. This field is read-only. */
		installState?: string | null;
		kind?: string | null;

		/** The ID of the product that the install is for. For example, "app:com.google.android.gm". */
		productId?: string | null;

		/** The version of the installed product. Guaranteed to be set only if the install state is "installed". */
		versionCode?: number | null;
	}

	/**
	 * The existence of an Installs resource indicates that an app is installed on a particular device (or that an install is pending).
	 * The API can be used to create an install resource using the update method. This triggers the actual install of the app on the device. If the user does not already have an entitlement for the app, then an attempt is made to create one. If this fails (for example, because the app is not free and there is no available license), then the creation of the install fails.
	 * The API can also be used to update an installed app. If the update method is used on an existing install, then the app will be updated to the latest available version.
	 * Note that it is not possible to force the installation of a specific version of an app: the version code is read-only.
	 * If a user installs an app themselves (as permitted by the enterprise), then again an install resource and possibly an entitlement resource are automatically created.
	 * The API can also be used to delete an install resource, which triggers the removal of the app from the device. Note that deleting an install does not automatically remove the corresponding entitlement, even if there are no remaining installs. The install resource will also be deleted if the user uninstalls the app themselves.
	 */
	export interface InstallFormProperties {

		/** Install state. The state "installPending" means that an install request has recently been made and download to the device is in progress. The state "installed" means that the app has been installed. This field is read-only. */
		installState: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The ID of the product that the install is for. For example, "app:com.google.android.gm". */
		productId: FormControl<string | null | undefined>,

		/** The version of the installed product. Guaranteed to be set only if the install state is "installed". */
		versionCode: FormControl<number | null | undefined>,
	}
	export function CreateInstallFormGroup() {
		return new FormGroup<InstallFormProperties>({
			installState: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An event generated when an app installation failed on a device */
	export interface InstallFailureEvent {

		/** The Android ID of the device. This field will always be present. */
		deviceId?: string | null;

		/** Additional details on the failure if applicable. */
		failureDetails?: string | null;

		/** The reason for the installation failure. This field will always be present. */
		failureReason?: string | null;

		/** The id of the product (e.g. "app:com.google.android.gm") for which the install failure event occured. This field will always be present. */
		productId?: string | null;

		/** The ID of the user. This field will always be present. */
		userId?: string | null;
	}

	/** An event generated when an app installation failed on a device */
	export interface InstallFailureEventFormProperties {

		/** The Android ID of the device. This field will always be present. */
		deviceId: FormControl<string | null | undefined>,

		/** Additional details on the failure if applicable. */
		failureDetails: FormControl<string | null | undefined>,

		/** The reason for the installation failure. This field will always be present. */
		failureReason: FormControl<string | null | undefined>,

		/** The id of the product (e.g. "app:com.google.android.gm") for which the install failure event occured. This field will always be present. */
		productId: FormControl<string | null | undefined>,

		/** The ID of the user. This field will always be present. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateInstallFailureEventFormGroup() {
		return new FormGroup<InstallFailureEventFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			failureDetails: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The install resources for the device. */
	export interface InstallsListResponse {

		/** An installation of an app for a user on a specific device. The existence of an install implies that the user must have an entitlement to the app. */
		install?: Array<Install>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#installsListResponse". */
		kind?: string | null;
	}

	/** The install resources for the device. */
	export interface InstallsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#installsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateInstallsListResponseFormGroup() {
		return new FormGroup<InstallsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A localized string with its locale. */
	export interface LocalizedText {

		/** The BCP47 tag for a locale. (e.g. "en-US", "de"). */
		locale?: string | null;

		/** The text localized in the associated locale. */
		text?: string | null;
	}

	/** A localized string with its locale. */
	export interface LocalizedTextFormProperties {

		/** The BCP47 tag for a locale. (e.g. "en-US", "de"). */
		locale: FormControl<string | null | undefined>,

		/** The text localized in the associated locale. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedTextFormGroup() {
		return new FormGroup<LocalizedTextFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The managed configuration resources for the device. */
	export interface ManagedConfigurationsForDeviceListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfigurationsForDeviceListResponse". */
		kind?: string | null;

		/** A managed configuration for an app on a specific device. */
		managedConfigurationForDevice?: Array<ManagedConfiguration>;
	}

	/** The managed configuration resources for the device. */
	export interface ManagedConfigurationsForDeviceListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfigurationsForDeviceListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedConfigurationsForDeviceListResponseFormGroup() {
		return new FormGroup<ManagedConfigurationsForDeviceListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The managed configuration resources for the user. */
	export interface ManagedConfigurationsForUserListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfigurationsForUserListResponse". */
		kind?: string | null;

		/** A managed configuration for an app for a specific user. */
		managedConfigurationForUser?: Array<ManagedConfiguration>;
	}

	/** The managed configuration resources for the user. */
	export interface ManagedConfigurationsForUserListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfigurationsForUserListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedConfigurationsForUserListResponseFormGroup() {
		return new FormGroup<ManagedConfigurationsForUserListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A managed configurations settings resource contains the set of managed properties that have been configured for an Android app to be applied to a set of users. The app's developer would have defined configurable properties in the managed configurations schema. */
	export interface ManagedConfigurationsSettings {
		kind?: string | null;

		/** The last updated time of the managed configuration settings in milliseconds since 1970-01-01T00:00:00Z. */
		lastUpdatedTimestampMillis?: string | null;

		/** The ID of the managed configurations settings. */
		mcmId?: string | null;

		/** The name of the managed configurations settings. */
		name?: string | null;
	}

	/** A managed configurations settings resource contains the set of managed properties that have been configured for an Android app to be applied to a set of users. The app's developer would have defined configurable properties in the managed configurations schema. */
	export interface ManagedConfigurationsSettingsFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The last updated time of the managed configuration settings in milliseconds since 1970-01-01T00:00:00Z. */
		lastUpdatedTimestampMillis: FormControl<string | null | undefined>,

		/** The ID of the managed configurations settings. */
		mcmId: FormControl<string | null | undefined>,

		/** The name of the managed configurations settings. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateManagedConfigurationsSettingsFormGroup() {
		return new FormGroup<ManagedConfigurationsSettingsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTimestampMillis: new FormControl<string | null | undefined>(undefined),
			mcmId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The managed configurations settings for a product. */
	export interface ManagedConfigurationsSettingsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfigurationsSettingsListResponse". */
		kind?: string | null;

		/** A managed configurations settings for an app that may be assigned to a group of users in an enterprise. */
		managedConfigurationsSettings?: Array<ManagedConfigurationsSettings>;
	}

	/** The managed configurations settings for a product. */
	export interface ManagedConfigurationsSettingsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfigurationsSettingsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedConfigurationsSettingsListResponseFormGroup() {
		return new FormGroup<ManagedConfigurationsSettingsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when a new device is ready to be managed. */
	export interface NewDeviceEvent {

		/** The Android ID of the device. This field will always be present. */
		deviceId?: string | null;

		/** Policy app on the device. */
		dpcPackageName?: string | null;

		/**
		 * Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations.
		 * Possible values include:
		 * - "managedDevice", a device where the DPC is set as device owner,
		 * - "managedProfile", a device where the DPC is set as profile owner.
		 */
		managementType?: string | null;

		/** The ID of the user. This field will always be present. */
		userId?: string | null;
	}

	/** An event generated when a new device is ready to be managed. */
	export interface NewDeviceEventFormProperties {

		/** The Android ID of the device. This field will always be present. */
		deviceId: FormControl<string | null | undefined>,

		/** Policy app on the device. */
		dpcPackageName: FormControl<string | null | undefined>,

		/**
		 * Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations.
		 * Possible values include:
		 * - "managedDevice", a device where the DPC is set as device owner,
		 * - "managedProfile", a device where the DPC is set as profile owner.
		 */
		managementType: FormControl<string | null | undefined>,

		/** The ID of the user. This field will always be present. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateNewDeviceEventFormGroup() {
		return new FormGroup<NewDeviceEventFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			dpcPackageName: new FormControl<string | null | undefined>(undefined),
			managementType: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when new permissions are added to an app. */
	export interface NewPermissionsEvent {

		/** The set of permissions that the enterprise admin has already approved for this application. Use Permissions.Get on the EMM API to retrieve details about these permissions. */
		approvedPermissions?: Array<string>;

		/** The id of the product (e.g. "app:com.google.android.gm") for which new permissions were added. This field will always be present. */
		productId?: string | null;

		/** The set of permissions that the app is currently requesting. Use Permissions.Get on the EMM API to retrieve details about these permissions. */
		requestedPermissions?: Array<string>;
	}

	/** An event generated when new permissions are added to an app. */
	export interface NewPermissionsEventFormProperties {

		/** The id of the product (e.g. "app:com.google.android.gm") for which new permissions were added. This field will always be present. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateNewPermissionsEventFormGroup() {
		return new FormGroup<NewPermissionsEventFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A notification of one event relating to an enterprise. */
	export interface Notification {

		/** An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API. */
		appRestrictionsSchemaChangeEvent?: AppRestrictionsSchemaChangeEvent;

		/** An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API. */
		appUpdateEvent?: AppUpdateEvent;

		/** An event generated when an updated device report is available. */
		deviceReportUpdateEvent?: DeviceReportUpdateEvent;

		/** The ID of the enterprise for which the notification is sent. This will always be present. */
		enterpriseId?: string | null;

		/** An event generated when an app installation failed on a device */
		installFailureEvent?: InstallFailureEvent;

		/** An event generated when a new device is ready to be managed. */
		newDeviceEvent?: NewDeviceEvent;

		/** An event generated when new permissions are added to an app. */
		newPermissionsEvent?: NewPermissionsEvent;

		/** Type of the notification. */
		notificationType?: string | null;

		/** An event generated when a product's approval status is changed. */
		productApprovalEvent?: ProductApprovalEvent;

		/** An event generated whenever a product's availability changes. */
		productAvailabilityChangeEvent?: ProductAvailabilityChangeEvent;

		/** The time when the notification was published in milliseconds since 1970-01-01T00:00:00Z. This will always be present. */
		timestampMillis?: string | null;
	}

	/** A notification of one event relating to an enterprise. */
	export interface NotificationFormProperties {

		/** The ID of the enterprise for which the notification is sent. This will always be present. */
		enterpriseId: FormControl<string | null | undefined>,

		/** Type of the notification. */
		notificationType: FormControl<string | null | undefined>,

		/** The time when the notification was published in milliseconds since 1970-01-01T00:00:00Z. This will always be present. */
		timestampMillis: FormControl<string | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			enterpriseId: new FormControl<string | null | undefined>(undefined),
			notificationType: new FormControl<string | null | undefined>(undefined),
			timestampMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when a product's approval status is changed. */
	export interface ProductApprovalEvent {

		/** Whether the product was approved or unapproved. This field will always be present. */
		approved?: string | null;

		/** The id of the product (e.g. "app:com.google.android.gm") for which the approval status has changed. This field will always be present. */
		productId?: string | null;
	}

	/** An event generated when a product's approval status is changed. */
	export interface ProductApprovalEventFormProperties {

		/** Whether the product was approved or unapproved. This field will always be present. */
		approved: FormControl<string | null | undefined>,

		/** The id of the product (e.g. "app:com.google.android.gm") for which the approval status has changed. This field will always be present. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateProductApprovalEventFormGroup() {
		return new FormGroup<ProductApprovalEventFormProperties>({
			approved: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated whenever a product's availability changes. */
	export interface ProductAvailabilityChangeEvent {

		/** The new state of the product. This field will always be present. */
		availabilityStatus?: string | null;

		/** The id of the product (e.g. "app:com.google.android.gm") for which the product availability changed. This field will always be present. */
		productId?: string | null;
	}

	/** An event generated whenever a product's availability changes. */
	export interface ProductAvailabilityChangeEventFormProperties {

		/** The new state of the product. This field will always be present. */
		availabilityStatus: FormControl<string | null | undefined>,

		/** The id of the product (e.g. "app:com.google.android.gm") for which the product availability changed. This field will always be present. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateProductAvailabilityChangeEventFormGroup() {
		return new FormGroup<ProductAvailabilityChangeEventFormProperties>({
			availabilityStatus: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request. */
	export interface NotificationSet {
		kind?: string | null;

		/** The notifications received, or empty if no notifications are present. */
		notification?: Array<Notification>;

		/** The notification set ID, required to mark the notification as received with the Enterprises.AcknowledgeNotification API. This will be omitted if no notifications are present. */
		notificationSetId?: string | null;
	}

	/** A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request. */
	export interface NotificationSetFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The notification set ID, required to mark the notification as received with the Enterprises.AcknowledgeNotification API. This will be omitted if no notifications are present. */
		notificationSetId: FormControl<string | null | undefined>,
	}
	export function CreateNotificationSetFormGroup() {
		return new FormGroup<NotificationSetFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			notificationSetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageInfo {
		resultPerPage?: number | null;
		startIndex?: number | null;
		totalResults?: number | null;
	}
	export interface PageInfoFormProperties {
		resultPerPage: FormControl<number | null | undefined>,
		startIndex: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreatePageInfoFormGroup() {
		return new FormGroup<PageInfoFormProperties>({
			resultPerPage: new FormControl<number | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A Permissions resource represents some extra capability, to be granted to an Android app, which requires explicit consent. An enterprise admin must consent to these permissions on behalf of their users before an entitlement for the app can be created.
	 * The permissions collection is read-only. The information provided for each permission (localized name and description) is intended to be used in the MDM user interface when obtaining consent from the enterprise.
	 */
	export interface Permission {

		/** A longer description of the Permissions resource, giving more details of what it affects. */
		description?: string | null;
		kind?: string | null;

		/** The name of the permission. */
		name?: string | null;

		/** An opaque string uniquely identifying the permission. */
		permissionId?: string | null;
	}

	/**
	 * A Permissions resource represents some extra capability, to be granted to an Android app, which requires explicit consent. An enterprise admin must consent to these permissions on behalf of their users before an entitlement for the app can be created.
	 * The permissions collection is read-only. The information provided for each permission (localized name and description) is intended to be used in the MDM user interface when obtaining consent from the enterprise.
	 */
	export interface PermissionFormProperties {

		/** A longer description of the Permissions resource, giving more details of what it affects. */
		description: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The name of the permission. */
		name: FormControl<string | null | undefined>,

		/** An opaque string uniquely identifying the permission. */
		permissionId: FormControl<string | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permissionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.)
	 * The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.
	 */
	export interface Product {

		/** The tracks visible to the enterprise. */
		appTracks?: Array<TrackInfo>;

		/** App versions currently available for this product. */
		appVersion?: Array<AppVersion>;

		/** The name of the author of the product (for example, the app developer). */
		authorName?: string | null;

		/** The countries which this app is available in. */
		availableCountries?: Array<string>;

		/** Deprecated, use appTracks instead. */
		availableTracks?: Array<string>;

		/** The app category (e.g. RACING, SOCIAL, etc.) */
		category?: string | null;

		/** The content rating for this app. */
		contentRating?: string | null;

		/** The localized promotional description, if available. */
		description?: string | null;

		/** A link to the (consumer) Google Play details page for the product. */
		detailsUrl?: string | null;

		/** How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted. */
		distributionChannel?: string | null;

		/** Noteworthy features (if any) of this product. */
		features?: Array<string>;

		/** A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px. */
		iconUrl?: string | null;
		kind?: string | null;

		/** The approximate time (within 7 days) the app was last published, expressed in milliseconds since epoch. */
		lastUpdatedTimestampMillis?: string | null;

		/** The minimum Android SDK necessary to run the app. */
		minAndroidSdkVersion?: number | null;

		/** A list of permissions required by the app. */
		permissions?: Array<ProductPermission>;

		/** A string of the form app:<package name>. For example, app:com.google.android.gm represents the Gmail app. */
		productId?: string | null;

		/** Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it). */
		productPricing?: string | null;

		/** A description of the recent changes made to the app. */
		recentChanges?: string | null;

		/** Deprecated. */
		requiresContainerApp?: boolean | null;

		/** A list of screenshot links representing the app. */
		screenshotUrls?: Array<string>;
		signingCertificate?: ProductSigningCertificate;

		/** A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px. */
		smallIconUrl?: string | null;

		/** The name of the product. */
		title?: string | null;

		/** A link to the managed Google Play details page for the product, for use by an Enterprise admin. */
		workDetailsUrl?: string | null;
	}

	/**
	 * A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.)
	 * The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.
	 */
	export interface ProductFormProperties {

		/** The name of the author of the product (for example, the app developer). */
		authorName: FormControl<string | null | undefined>,

		/** The app category (e.g. RACING, SOCIAL, etc.) */
		category: FormControl<string | null | undefined>,

		/** The content rating for this app. */
		contentRating: FormControl<string | null | undefined>,

		/** The localized promotional description, if available. */
		description: FormControl<string | null | undefined>,

		/** A link to the (consumer) Google Play details page for the product. */
		detailsUrl: FormControl<string | null | undefined>,

		/** How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted. */
		distributionChannel: FormControl<string | null | undefined>,

		/** A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px. */
		iconUrl: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The approximate time (within 7 days) the app was last published, expressed in milliseconds since epoch. */
		lastUpdatedTimestampMillis: FormControl<string | null | undefined>,

		/** The minimum Android SDK necessary to run the app. */
		minAndroidSdkVersion: FormControl<number | null | undefined>,

		/** A string of the form app:<package name>. For example, app:com.google.android.gm represents the Gmail app. */
		productId: FormControl<string | null | undefined>,

		/** Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it). */
		productPricing: FormControl<string | null | undefined>,

		/** A description of the recent changes made to the app. */
		recentChanges: FormControl<string | null | undefined>,

		/** Deprecated. */
		requiresContainerApp: FormControl<boolean | null | undefined>,

		/** A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px. */
		smallIconUrl: FormControl<string | null | undefined>,

		/** The name of the product. */
		title: FormControl<string | null | undefined>,

		/** A link to the managed Google Play details page for the product, for use by an Enterprise admin. */
		workDetailsUrl: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			authorName: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			contentRating: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			detailsUrl: new FormControl<string | null | undefined>(undefined),
			distributionChannel: new FormControl<string | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTimestampMillis: new FormControl<string | null | undefined>(undefined),
			minAndroidSdkVersion: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productPricing: new FormControl<string | null | undefined>(undefined),
			recentChanges: new FormControl<string | null | undefined>(undefined),
			requiresContainerApp: new FormControl<boolean | null | undefined>(undefined),
			smallIconUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			workDetailsUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Id to name association of a track. */
	export interface TrackInfo {

		/** A modifiable name for a track. This is the visible name in the play developer console. */
		trackAlias?: string | null;

		/** Unmodifiable, unique track identifier. This identifier is the releaseTrackId in the url of the play developer console page that displays the track information. */
		trackId?: string | null;
	}

	/** Id to name association of a track. */
	export interface TrackInfoFormProperties {

		/** A modifiable name for a track. This is the visible name in the play developer console. */
		trackAlias: FormControl<string | null | undefined>,

		/** Unmodifiable, unique track identifier. This identifier is the releaseTrackId in the url of the play developer console page that displays the track information. */
		trackId: FormControl<string | null | undefined>,
	}
	export function CreateTrackInfoFormGroup() {
		return new FormGroup<TrackInfoFormProperties>({
			trackAlias: new FormControl<string | null | undefined>(undefined),
			trackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin.
	 * The API can be used to read the set of permissions, and also to update the set to indicate that permissions have been accepted.
	 */
	export interface ProductPermission {

		/** An opaque string uniquely identifying the permission. */
		permissionId?: string | null;

		/** Whether the permission has been accepted or not. */
		state?: string | null;
	}

	/**
	 * A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin.
	 * The API can be used to read the set of permissions, and also to update the set to indicate that permissions have been accepted.
	 */
	export interface ProductPermissionFormProperties {

		/** An opaque string uniquely identifying the permission. */
		permissionId: FormControl<string | null | undefined>,

		/** Whether the permission has been accepted or not. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateProductPermissionFormGroup() {
		return new FormGroup<ProductPermissionFormProperties>({
			permissionId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductSigningCertificate {

		/** The base64 urlsafe encoded SHA1 hash of the certificate. (This field is deprecated in favor of SHA2-256. It should not be used and may be removed at any time.) */
		certificateHashSha1?: string | null;

		/** The base64 urlsafe encoded SHA2-256 hash of the certificate. */
		certificateHashSha256?: string | null;
	}
	export interface ProductSigningCertificateFormProperties {

		/** The base64 urlsafe encoded SHA1 hash of the certificate. (This field is deprecated in favor of SHA2-256. It should not be used and may be removed at any time.) */
		certificateHashSha1: FormControl<string | null | undefined>,

		/** The base64 urlsafe encoded SHA2-256 hash of the certificate. */
		certificateHashSha256: FormControl<string | null | undefined>,
	}
	export function CreateProductSigningCertificateFormGroup() {
		return new FormGroup<ProductSigningCertificateFormProperties>({
			certificateHashSha1: new FormControl<string | null | undefined>(undefined),
			certificateHashSha256: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the permissions required by a specific app and whether they have been accepted by the enterprise. */
	export interface ProductPermissions {
		kind?: string | null;

		/** The permissions required by the app. */
		permission?: Array<ProductPermission>;

		/** The ID of the app that the permissions relate to, e.g. "app:com.google.android.gm". */
		productId?: string | null;
	}

	/** Information about the permissions required by a specific app and whether they have been accepted by the enterprise. */
	export interface ProductPermissionsFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The ID of the app that the permissions relate to, e.g. "app:com.google.android.gm". */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateProductPermissionsFormGroup() {
		return new FormGroup<ProductPermissionsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of products. */
	export interface ProductSet {
		kind?: string | null;

		/** The list of product IDs making up the set of products. */
		productId?: Array<string>;

		/** The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility. Further "allApproved" or "includeAll" does not enable automatic visibility of "alpha" or "beta" tracks for Android app. Use ProductVisibility to enable "alpha" or "beta" tracks per user. */
		productSetBehavior?: string | null;

		/** Additional list of product IDs making up the product set. Unlike the productID array, in this list It's possible to specify which tracks (alpha, beta, production) of a product are visible to the user. See ProductVisibility and its fields for more information. Specifying the same product ID both here and in the productId array is not allowed and it will result in an error. */
		productVisibility?: Array<ProductVisibility>;
	}

	/** A set of products. */
	export interface ProductSetFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility. Further "allApproved" or "includeAll" does not enable automatic visibility of "alpha" or "beta" tracks for Android app. Use ProductVisibility to enable "alpha" or "beta" tracks per user. */
		productSetBehavior: FormControl<string | null | undefined>,
	}
	export function CreateProductSetFormGroup() {
		return new FormGroup<ProductSetFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			productSetBehavior: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A product to be made visible to a user. */
	export interface ProductVisibility {

		/** The product ID to make visible to the user. Required for each item in the productVisibility list. */
		productId?: string | null;

		/** Grants the user visibility to the specified product track(s), identified by trackIds. */
		trackIds?: Array<string>;

		/** Deprecated. Use trackIds instead. */
		tracks?: Array<string>;
	}

	/** A product to be made visible to a user. */
	export interface ProductVisibilityFormProperties {

		/** The product ID to make visible to the user. Required for each item in the productVisibility list. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateProductVisibilityFormGroup() {
		return new FormGroup<ProductVisibilityFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductsApproveRequest {

		/** Information on an approval URL. */
		approvalUrlInfo?: ApprovalUrlInfo;

		/** Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved. */
		approvedPermissions?: string | null;
	}
	export interface ProductsApproveRequestFormProperties {

		/** Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved. */
		approvedPermissions: FormControl<string | null | undefined>,
	}
	export function CreateProductsApproveRequestFormGroup() {
		return new FormGroup<ProductsApproveRequestFormProperties>({
			approvedPermissions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductsGenerateApprovalUrlResponse {

		/** A URL that can be rendered in an iframe to display the permissions (if any) of a product. This URL can be used to approve the product only once and only within 24 hours of being generated, using the Products.approve call. If the product is currently unapproved and has no permissions, this URL will point to an empty page. If the product is currently approved, a URL will only be generated if that product has added permissions since it was last approved, and the URL will only display those new permissions that have not yet been accepted. */
		url?: string | null;
	}
	export interface ProductsGenerateApprovalUrlResponseFormProperties {

		/** A URL that can be rendered in an iframe to display the permissions (if any) of a product. This URL can be used to approve the product only once and only within 24 hours of being generated, using the Products.approve call. If the product is currently unapproved and has no permissions, this URL will point to an empty page. If the product is currently approved, a URL will only be generated if that product has added permissions since it was last approved, and the URL will only display those new permissions that have not yet been accepted. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProductsGenerateApprovalUrlResponseFormGroup() {
		return new FormGroup<ProductsGenerateApprovalUrlResponseFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The matching products. */
	export interface ProductsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#productsListResponse". */
		kind?: string | null;
		pageInfo?: PageInfo;

		/** Information about a product (e.g. an app) in the Google Play store, for display to an enterprise admin. */
		product?: Array<Product>;
		tokenPagination?: TokenPagination;
	}

	/** The matching products. */
	export interface ProductsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#productsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateProductsListResponseFormGroup() {
		return new FormGroup<ProductsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TokenPagination {
		nextPageToken?: string | null;
		previousPageToken?: string | null;
	}
	export interface TokenPaginationFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
		previousPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTokenPaginationFormGroup() {
		return new FormGroup<TokenPaginationFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			previousPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A service account identity, including the name and credentials that can be used to authenticate as the service account. */
	export interface ServiceAccount {

		/** Credentials that can be used to authenticate as a service account. */
		key?: ServiceAccountKey;
		kind?: string | null;

		/** The account name of the service account, in the form of an email address. Assigned by the server. */
		name?: string | null;
	}

	/** A service account identity, including the name and credentials that can be used to authenticate as the service account. */
	export interface ServiceAccountFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The account name of the service account, in the form of an email address. Assigned by the server. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountFormGroup() {
		return new FormGroup<ServiceAccountFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Credentials that can be used to authenticate as a service account. */
	export interface ServiceAccountKey {

		/** The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google. */
		data?: string | null;

		/** An opaque, unique identifier for this ServiceAccountKey. Assigned by the server. */
		id?: string | null;
		kind?: string | null;

		/** Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file. */
		publicData?: string | null;

		/** The file format of the generated key data. */
		type?: string | null;
	}

	/** Credentials that can be used to authenticate as a service account. */
	export interface ServiceAccountKeyFormProperties {

		/** The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google. */
		data: FormControl<string | null | undefined>,

		/** An opaque, unique identifier for this ServiceAccountKey. Assigned by the server. */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file. */
		publicData: FormControl<string | null | undefined>,

		/** The file format of the generated key data. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountKeyFormGroup() {
		return new FormGroup<ServiceAccountKeyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			publicData: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceAccountKeysListResponse {

		/** The service account credentials. */
		serviceAccountKey?: Array<ServiceAccountKey>;
	}
	export interface ServiceAccountKeysListResponseFormProperties {
	}
	export function CreateServiceAccountKeysListResponseFormGroup() {
		return new FormGroup<ServiceAccountKeysListResponseFormProperties>({
		});

	}


	/** A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token. */
	export interface SignupInfo {

		/** An opaque token that will be required, along with the Enterprise Token, for obtaining the enterprise resource from CompleteSignup. */
		completionToken?: string | null;

		/** Deprecated. */
		kind?: string | null;

		/** A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe. */
		url?: string | null;
	}

	/** A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token. */
	export interface SignupInfoFormProperties {

		/** An opaque token that will be required, along with the Enterprise Token, for obtaining the enterprise resource from CompleteSignup. */
		completionToken: FormControl<string | null | undefined>,

		/** Deprecated. */
		kind: FormControl<string | null | undefined>,

		/** A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSignupInfoFormGroup() {
		return new FormGroup<SignupInfoFormProperties>({
			completionToken: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a managed Google Play store cluster, a list of products displayed as part of a store page. */
	export interface StoreCluster {

		/** Unique ID of this cluster. Assigned by the server. Immutable once assigned. */
		id?: string | null;
		kind?: string | null;

		/** Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry. */
		name?: Array<LocalizedText>;

		/**
		 * String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined.
		 * The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters.
		 */
		orderInPage?: string | null;

		/** List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster. */
		productId?: Array<string>;
	}

	/** Definition of a managed Google Play store cluster, a list of products displayed as part of a store page. */
	export interface StoreClusterFormProperties {

		/** Unique ID of this cluster. Assigned by the server. Immutable once assigned. */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/**
		 * String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined.
		 * The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters.
		 */
		orderInPage: FormControl<string | null | undefined>,
	}
	export function CreateStoreClusterFormGroup() {
		return new FormGroup<StoreClusterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			orderInPage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened. */
	export interface StoreLayout {

		/**
		 * The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store.
		 * Not specifying a homepage is equivalent to setting the store layout type to "basic".
		 */
		homepageId?: string | null;
		kind?: string | null;

		/** The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user. */
		storeLayoutType?: string | null;
	}

	/** General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened. */
	export interface StoreLayoutFormProperties {

		/**
		 * The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store.
		 * Not specifying a homepage is equivalent to setting the store layout type to "basic".
		 */
		homepageId: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,

		/** The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user. */
		storeLayoutType: FormControl<string | null | undefined>,
	}
	export function CreateStoreLayoutFormGroup() {
		return new FormGroup<StoreLayoutFormProperties>({
			homepageId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			storeLayoutType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The store page resources for the enterprise. */
	export interface StoreLayoutClustersListResponse {

		/** A store cluster of an enterprise. */
		cluster?: Array<StoreCluster>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayoutClustersListResponse". */
		kind?: string | null;
	}

	/** The store page resources for the enterprise. */
	export interface StoreLayoutClustersListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayoutClustersListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateStoreLayoutClustersListResponseFormGroup() {
		return new FormGroup<StoreLayoutClustersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The store page resources for the enterprise. */
	export interface StoreLayoutPagesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayoutPagesListResponse". */
		kind?: string | null;

		/** A store page of an enterprise. */
		page?: Array<StorePage>;
	}

	/** The store page resources for the enterprise. */
	export interface StoreLayoutPagesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayoutPagesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateStoreLayoutPagesListResponseFormGroup() {
		return new FormGroup<StoreLayoutPagesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection. */
	export interface StorePage {

		/** Unique ID of this page. Assigned by the server. Immutable once assigned. */
		id?: string | null;
		kind?: string | null;

		/**
		 * Ordered list of pages a user should be able to reach from this page. The list can't include this page. It is recommended that the basic pages are created first, before adding the links between pages.
		 * The API doesn't verify that the pages exist or the pages are reachable.
		 */
		link?: Array<string>;

		/** Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry. */
		name?: Array<LocalizedText>;
	}

	/** Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection. */
	export interface StorePageFormProperties {

		/** Unique ID of this page. Assigned by the server. Immutable once assigned. */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateStorePageFormGroup() {
		return new FormGroup<StorePageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A UserToken is used by a user when setting up a managed device or profile with their managed Google Play account on a device. When the user enters their email address and token (activation code) the appropriate EMM app can be automatically downloaded. */
	export interface UserToken {
		kind?: string | null;

		/** The token (activation code) to be entered by the user. This consists of a sequence of decimal digits. Note that the leading digit may be 0. */
		token?: string | null;

		/** The unique ID for the user. */
		userId?: string | null;
	}

	/** A UserToken is used by a user when setting up a managed device or profile with their managed Google Play account on a device. When the user enters their email address and token (activation code) the appropriate EMM app can be automatically downloaded. */
	export interface UserTokenFormProperties {
		kind: FormControl<string | null | undefined>,

		/** The token (activation code) to be entered by the user. This consists of a sequence of decimal digits. Note that the leading digit may be 0. */
		token: FormControl<string | null | undefined>,

		/** The unique ID for the user. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserTokenFormGroup() {
		return new FormGroup<UserTokenFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The matching user resources. */
	export interface UsersListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#usersListResponse". */
		kind?: string | null;

		/** A user of an enterprise. */
		user?: Array<User>;
	}

	/** The matching user resources. */
	export interface UsersListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#usersListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateUsersListResponseFormGroup() {
		return new FormGroup<UsersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL. */
	export interface WebApp {

		/**
		 * The display mode of the web app.
		 * Possible values include:
		 * - "minimalUi", the device's status bar, navigation bar, the app's URL, and a refresh button are visible when the app is open. For HTTP URLs, you can only select this option.
		 * - "standalone", the device's status bar and navigation bar are visible when the app is open.
		 * - "fullScreen", the app opens in full screen mode, hiding the device's status and navigation bars. All browser UI elements, page URL, system status bar and back button are not visible, and the web app takes up the entirety of the available display area.
		 */
		displayMode?: string | null;

		/** A list of icons representing this website. If absent, a default icon (for create) or the current icon (for update) will be used. */
		icons?: Array<WebAppIcon>;

		/** A flag whether the app has been published to the Play store yet. */
		isPublished?: boolean | null;

		/** The start URL, i.e. the URL that should load when the user opens the application. */
		startUrl?: string | null;

		/** The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon). */
		title?: string | null;

		/**
		 * The current version of the app.
		 * Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.
		 */
		versionCode?: string | null;

		/** The ID of the application. A string of the form "app:<package name>" where the package name always starts with the prefix "com.google.enterprise.webapp." followed by a random id. */
		webAppId?: string | null;
	}

	/** A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL. */
	export interface WebAppFormProperties {

		/**
		 * The display mode of the web app.
		 * Possible values include:
		 * - "minimalUi", the device's status bar, navigation bar, the app's URL, and a refresh button are visible when the app is open. For HTTP URLs, you can only select this option.
		 * - "standalone", the device's status bar and navigation bar are visible when the app is open.
		 * - "fullScreen", the app opens in full screen mode, hiding the device's status and navigation bars. All browser UI elements, page URL, system status bar and back button are not visible, and the web app takes up the entirety of the available display area.
		 */
		displayMode: FormControl<string | null | undefined>,

		/** A flag whether the app has been published to the Play store yet. */
		isPublished: FormControl<boolean | null | undefined>,

		/** The start URL, i.e. the URL that should load when the user opens the application. */
		startUrl: FormControl<string | null | undefined>,

		/** The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon). */
		title: FormControl<string | null | undefined>,

		/**
		 * The current version of the app.
		 * Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.
		 */
		versionCode: FormControl<string | null | undefined>,

		/** The ID of the application. A string of the form "app:<package name>" where the package name always starts with the prefix "com.google.enterprise.webapp." followed by a random id. */
		webAppId: FormControl<string | null | undefined>,
	}
	export function CreateWebAppFormGroup() {
		return new FormGroup<WebAppFormProperties>({
			displayMode: new FormControl<string | null | undefined>(undefined),
			isPublished: new FormControl<boolean | null | undefined>(undefined),
			startUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<string | null | undefined>(undefined),
			webAppId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Icon for a web app. */
	export interface WebAppIcon {

		/**
		 * The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet").
		 * - The image type can be png or jpg.
		 * - The image should ideally be square.
		 * - The image should ideally have a size of 512x512.
		 */
		imageData?: string | null;
	}

	/** Icon for a web app. */
	export interface WebAppIconFormProperties {

		/**
		 * The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet").
		 * - The image type can be png or jpg.
		 * - The image should ideally be square.
		 * - The image should ideally have a size of 512x512.
		 */
		imageData: FormControl<string | null | undefined>,
	}
	export function CreateWebAppIconFormGroup() {
		return new FormGroup<WebAppIconFormProperties>({
			imageData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The web app details for an enterprise. */
	export interface WebAppsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#webAppsListResponse". */
		kind?: string | null;

		/** The manifest describing a web app. */
		webApp?: Array<WebApp>;
	}

	/** The web app details for an enterprise. */
	export interface WebAppsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidenterprise#webAppsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateWebAppsListResponseFormGroup() {
		return new FormGroup<WebAppsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
		 * Get enterprises
		 * @param {string} domain The exact primary domain name of the enterprise to look up.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_list(domain: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises?domain=' + (domain == null ? '' : encodeURIComponent(domain)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
		 * Post enterprises/acknowledgeNotificationSet
		 * @param {string} notificationSetId The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_acknowledgeNotificationSet(notificationSetId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/acknowledgeNotificationSet?notificationSetId=' + (notificationSetId == null ? '' : encodeURIComponent(notificationSetId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
		 * Post enterprises/completeSignup
		 * @param {string} completionToken The Completion token initially returned by GenerateSignupUrl.
		 * @param {string} enterpriseToken The Enterprise token appended to the Callback URL.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_completeSignup(completionToken: string | null | undefined, enterpriseToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/completeSignup?completionToken=' + (completionToken == null ? '' : encodeURIComponent(completionToken)) + '&enterpriseToken=' + (enterpriseToken == null ? '' : encodeURIComponent(enterpriseToken)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enrolls an enterprise with the calling EMM.
		 * Post enterprises/enroll
		 * @param {string} token The token provided by the enterprise to register the EMM.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_enroll(token: string, requestBody: Enterprise): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/enroll?token=' + (token == null ? '' : encodeURIComponent(token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending.
		 * A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty.
		 * Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy.
		 * Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending.
		 * If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
		 * Post enterprises/pullNotificationSet
		 * @param {Androidenterprise_enterprises_pullNotificationSetRequestMode} requestMode The request mode for pulling notifications.
		 * Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time.
		 * Speciying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present.
		 * If omitted, defaults to waitForNotifications.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_pullNotificationSet(requestMode: Androidenterprise_enterprises_pullNotificationSetRequestMode | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/pullNotificationSet?requestMode=' + requestMode, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a sign-up URL.
		 * Post enterprises/signupUrl
		 * @param {string} callbackUrl The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request.
		 * Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_generateSignupUrl(callbackUrl: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/signupUrl?callbackUrl=' + (callbackUrl == null ? '' : encodeURIComponent(callbackUrl)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the name and domain of an enterprise.
		 * Get enterprises/{enterpriseId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_get(enterpriseId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the account that will be used to authenticate to the API as the enterprise.
		 * Put enterprises/{enterpriseId}/account
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_setAccount(enterpriseId: string, requestBody: EnterpriseAccount): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/account', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
		 * Post enterprises/{enterpriseId}/createWebToken
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_createWebToken(enterpriseId: string, requestBody: AdministratorWebTokenSpec): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/createWebToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves IDs of all products for which the enterprise has a group license.
		 * Get enterprises/{enterpriseId}/groupLicenses
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_grouplicenses_list(enterpriseId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/groupLicenses', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of an enterprise's group license for a product.
		 * Get enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} groupLicenseId The ID of the product the group license is for, e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_grouplicenses_get(enterpriseId: string, groupLicenseId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/groupLicenses/' + (groupLicenseId == null ? '' : encodeURIComponent(groupLicenseId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the IDs of the users who have been granted entitlements under the license.
		 * Get enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} groupLicenseId The ID of the product the group license is for, e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_grouplicenseusers_list(enterpriseId: string, groupLicenseId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/groupLicenses/' + (groupLicenseId == null ? '' : encodeURIComponent(groupLicenseId)) + '/users', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds approved products that match a query, or all approved products if there is no query.
		 * Get enterprises/{enterpriseId}/products
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {boolean} approved Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.
		 * @param {string} language The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.
		 * @param {number} maxResults Specifies the maximum number of products that can be returned per request. If not specified, uses a default value of 100, which is also the maximum retrievable within a single response.
		 * @param {string} query The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).
		 * @param {string} token A pagination token is contained in a request's response when there are more products. The token can be used in a subsequent request to obtain more products, and so forth. This parameter cannot be used in the initial request.
		 * @return {void} Successful response
		 */
		Androidenterprise_products_list(enterpriseId: string, approved: boolean | null | undefined, language: string | null | undefined, maxResults: number | null | undefined, query: string | null | undefined, token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/products&approved=' + approved + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of a product for display to an enterprise admin.
		 * Get enterprises/{enterpriseId}/products/{productId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} productId The ID of the product, e.g. "app:com.google.android.gm".
		 * @param {string} language The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
		 * @return {void} Successful response
		 */
		Androidenterprise_products_get(enterpriseId: string, productId: string, language: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
		 * Get enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} productId The ID of the product.
		 * @param {string} language The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
		 * @return {void} Successful response
		 */
		Androidenterprise_products_getAppRestrictionsSchema(enterpriseId: string, productId: string, language: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/appRestrictionsSchema&language=' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000.
		 * To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design.
		 * Post enterprises/{enterpriseId}/products/{productId}/approve
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} productId The ID of the product.
		 * @return {void} Successful response
		 */
		Androidenterprise_products_approve(enterpriseId: string, productId: string, requestBody: ProductsApproveRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/approve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product.
		 * Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day.
		 * Post enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} productId The ID of the product.
		 * @param {string} languageCode The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".
		 * @return {void} Successful response
		 */
		Androidenterprise_products_generateApprovalUrl(enterpriseId: string, productId: string, languageCode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/generateApprovalUrl&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the managed configurations settings for the specified app.
		 * Get enterprises/{enterpriseId}/products/{productId}/managedConfigurationsSettings
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} productId The ID of the product for which the managed configurations settings applies to.
		 * @return {void} Successful response
		 */
		Androidenterprise_managedconfigurationssettings_list(enterpriseId: string, productId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/managedConfigurationsSettings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the Android app permissions required by this app.
		 * Get enterprises/{enterpriseId}/products/{productId}/permissions
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} productId The ID of the product.
		 * @return {void} Successful response
		 */
		Androidenterprise_products_getPermissions(enterpriseId: string, productId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/permissions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unapproves the specified product (and the relevant app permissions, if any)
		 * Post enterprises/{enterpriseId}/products/{productId}/unapprove
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} productId The ID of the product.
		 * @return {void} Successful response
		 */
		Androidenterprise_products_unapprove(enterpriseId: string, productId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/unapprove', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
		 * Post enterprises/{enterpriseId}/sendTestPushNotification
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_sendTestPushNotification(enterpriseId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/sendTestPushNotification', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side.
		 * This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error.
		 * Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials.
		 * Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
		 * Get enterprises/{enterpriseId}/serviceAccount
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {Androidenterprise_enterprises_getServiceAccountKeyType} keyType The type of credential to return with the service account. Required.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_getServiceAccount(enterpriseId: string, keyType: Androidenterprise_enterprises_getServiceAccountKeyType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/serviceAccount&keyType=' + keyType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
		 * Get enterprises/{enterpriseId}/serviceAccountKeys
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_serviceaccountkeys_list(enterpriseId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/serviceAccountKeys', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
		 * Only the type of the key should be populated in the resource to be inserted.
		 * Post enterprises/{enterpriseId}/serviceAccountKeys
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_serviceaccountkeys_insert(enterpriseId: string, requestBody: ServiceAccountKey): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/serviceAccountKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
		 * Delete enterprises/{enterpriseId}/serviceAccountKeys/{keyId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} keyId The ID of the key.
		 * @return {void} Successful response
		 */
		Androidenterprise_serviceaccountkeys_delete(enterpriseId: string, keyId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/serviceAccountKeys/' + (keyId == null ? '' : encodeURIComponent(keyId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
		 * Get enterprises/{enterpriseId}/storeLayout
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_getStoreLayout(enterpriseId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the  setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
		 * Put enterprises/{enterpriseId}/storeLayout
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_setStoreLayout(enterpriseId: string, requestBody: StoreLayout): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the details of all pages in the store.
		 * Get enterprises/{enterpriseId}/storeLayout/pages
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_storelayoutpages_list(enterpriseId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout/pages', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new store page.
		 * Post enterprises/{enterpriseId}/storeLayout/pages
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_storelayoutpages_insert(enterpriseId: string, requestBody: StorePage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout/pages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a store page.
		 * Delete enterprises/{enterpriseId}/storeLayout/pages/{pageId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} pageId The ID of the page.
		 * @return {void} Successful response
		 */
		Androidenterprise_storelayoutpages_delete(enterpriseId: string, pageId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of a store page.
		 * Get enterprises/{enterpriseId}/storeLayout/pages/{pageId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} pageId The ID of the page.
		 * @return {void} Successful response
		 */
		Androidenterprise_storelayoutpages_get(enterpriseId: string, pageId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the content of a store page.
		 * Put enterprises/{enterpriseId}/storeLayout/pages/{pageId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} pageId The ID of the page.
		 * @return {void} Successful response
		 */
		Androidenterprise_storelayoutpages_update(enterpriseId: string, pageId: string, requestBody: StorePage): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the details of all clusters on the specified page.
		 * Get enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} pageId The ID of the page.
		 * @return {void} Successful response
		 */
		Androidenterprise_storelayoutclusters_list(enterpriseId: string, pageId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '/clusters', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new cluster in a page.
		 * Post enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} pageId The ID of the page.
		 * @return {void} Successful response
		 */
		Androidenterprise_storelayoutclusters_insert(enterpriseId: string, pageId: string, requestBody: StoreCluster): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a cluster.
		 * Delete enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} pageId The ID of the page.
		 * @param {string} clusterId The ID of the cluster.
		 * @return {void} Successful response
		 */
		Androidenterprise_storelayoutclusters_delete(enterpriseId: string, pageId: string, clusterId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of a cluster.
		 * Get enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} pageId The ID of the page.
		 * @param {string} clusterId The ID of the cluster.
		 * @return {void} Successful response
		 */
		Androidenterprise_storelayoutclusters_get(enterpriseId: string, pageId: string, clusterId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a cluster.
		 * Put enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} pageId The ID of the page.
		 * @param {string} clusterId The ID of the cluster.
		 * @return {void} Successful response
		 */
		Androidenterprise_storelayoutclusters_update(enterpriseId: string, pageId: string, clusterId: string, requestBody: StoreCluster): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/storeLayout/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unenrolls an enterprise from the calling EMM.
		 * Post enterprises/{enterpriseId}/unenroll
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_enterprises_unenroll(enterpriseId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/unenroll', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
		 * Get enterprises/{enterpriseId}/users
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} email The exact primary email address of the user to look up.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_list(enterpriseId: string, email: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users&email=' + (email == null ? '' : encodeURIComponent(email)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new EMM-managed user.
		 * The Users resource passed in the body of the request should include an accountIdentifier and an accountType.
		 * If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
		 * Post enterprises/{enterpriseId}/users
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_insert(enterpriseId: string, requestBody: User): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deleted an EMM-managed user.
		 * Delete enterprises/{enterpriseId}/users/{userId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_delete(enterpriseId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a user's details.
		 * Get enterprises/{enterpriseId}/users/{userId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_get(enterpriseId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the details of an EMM-managed user.
		 * Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.
		 * Put enterprises/{enterpriseId}/users/{userId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_update(enterpriseId: string, userId: string, requestBody: User): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes.
		 * You can provision a maximum of 10 devices per user.
		 * This call only works with EMM-managed accounts.
		 * Post enterprises/{enterpriseId}/users/{userId}/authenticationToken
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_generateAuthenticationToken(enterpriseId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/authenticationToken', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the set of products a user is entitled to access.
		 * Get enterprises/{enterpriseId}/users/{userId}/availableProductSet
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_getAvailableProductSet(enterpriseId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/availableProductSet', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the set of products that a user is entitled to access (referred to as whitelisted products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted.
		 * Put enterprises/{enterpriseId}/users/{userId}/availableProductSet
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_setAvailableProductSet(enterpriseId: string, userId: string, requestBody: ProductSet): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/availableProductSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices.
		 * This call only works with EMM-managed accounts.
		 * Delete enterprises/{enterpriseId}/users/{userId}/deviceAccess
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_revokeDeviceAccess(enterpriseId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/deviceAccess', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the IDs of all of a user's devices.
		 * Get enterprises/{enterpriseId}/users/{userId}/devices
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_devices_list(enterpriseId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the details of a device.
		 * Get enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The ID of the device.
		 * @return {void} Successful response
		 */
		Androidenterprise_devices_get(enterpriseId: string, userId: string, deviceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the device policy
		 * Put enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The ID of the device.
		 * @param {string} updateMask Mask that identifies which fields to update. If not set, all modifiable fields will be modified.
		 * When set in a query parameter, this field should be specified as updateMask=<field1>,<field2>,...
		 * @return {void} Successful response
		 */
		Androidenterprise_devices_update(enterpriseId: string, userId: string, deviceId: string, updateMask: string | null | undefined, requestBody: Device): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device.
		 * Post enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/forceReportUpload
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The ID of the device.
		 * @return {void} Successful response
		 */
		Androidenterprise_devices_forceReportUpload(enterpriseId: string, userId: string, deviceId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/forceReportUpload', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the details of all apps installed on the specified device.
		 * Get enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The Android ID of the device.
		 * @return {void} Successful response
		 */
		Androidenterprise_installs_list(enterpriseId: string, userId: string, deviceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/installs', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
		 * Delete enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The Android ID of the device.
		 * @param {string} installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_installs_delete(enterpriseId: string, userId: string, deviceId: string, installId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/installs/' + (installId == null ? '' : encodeURIComponent(installId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of an installation of an app on a device.
		 * Get enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The Android ID of the device.
		 * @param {string} installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_installs_get(enterpriseId: string, userId: string, deviceId: string, installId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/installs/' + (installId == null ? '' : encodeURIComponent(installId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.
		 * Put enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The Android ID of the device.
		 * @param {string} installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_installs_update(enterpriseId: string, userId: string, deviceId: string, installId: string, requestBody: Install): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/installs/' + (installId == null ? '' : encodeURIComponent(installId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the per-device managed configurations for the specified device. Only the ID is set.
		 * Get enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The Android ID of the device.
		 * @return {void} Successful response
		 */
		Androidenterprise_managedconfigurationsfordevice_list(enterpriseId: string, userId: string, deviceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/managedConfigurationsForDevice', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a per-device managed configuration for an app for the specified device.
		 * Delete enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The Android ID of the device.
		 * @param {string} managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_managedconfigurationsfordevice_delete(enterpriseId: string, userId: string, deviceId: string, managedConfigurationForDeviceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/managedConfigurationsForDevice/' + (managedConfigurationForDeviceId == null ? '' : encodeURIComponent(managedConfigurationForDeviceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of a per-device managed configuration.
		 * Get enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The Android ID of the device.
		 * @param {string} managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_managedconfigurationsfordevice_get(enterpriseId: string, userId: string, deviceId: string, managedConfigurationForDeviceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/managedConfigurationsForDevice/' + (managedConfigurationForDeviceId == null ? '' : encodeURIComponent(managedConfigurationForDeviceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds or updates a per-device managed configuration for an app for the specified device.
		 * Put enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The Android ID of the device.
		 * @param {string} managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_managedconfigurationsfordevice_update(enterpriseId: string, userId: string, deviceId: string, managedConfigurationForDeviceId: string, requestBody: ManagedConfiguration): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/managedConfigurationsForDevice/' + (managedConfigurationForDeviceId == null ? '' : encodeURIComponent(managedConfigurationForDeviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
		 * Get enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The ID of the device.
		 * @return {void} Successful response
		 */
		Androidenterprise_devices_getState(enterpriseId: string, userId: string, deviceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/state', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
		 * Put enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} deviceId The ID of the device.
		 * @return {void} Successful response
		 */
		Androidenterprise_devices_setState(enterpriseId: string, userId: string, deviceId: string, requestBody: DeviceState): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all entitlements for the specified user. Only the ID is set.
		 * Get enterprises/{enterpriseId}/users/{userId}/entitlements
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_entitlements_list(enterpriseId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/entitlements', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an entitlement to an app for a user.
		 * Delete enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_entitlements_delete(enterpriseId: string, userId: string, entitlementId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/entitlements/' + (entitlementId == null ? '' : encodeURIComponent(entitlementId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of an entitlement.
		 * Get enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_entitlements_get(enterpriseId: string, userId: string, entitlementId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/entitlements/' + (entitlementId == null ? '' : encodeURIComponent(entitlementId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds or updates an entitlement to an app for a user.
		 * Put enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
		 * @param {boolean} install Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_entitlements_update(enterpriseId: string, userId: string, entitlementId: string, install: boolean | null | undefined, requestBody: Entitlement): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/entitlements/' + (entitlementId == null ? '' : encodeURIComponent(entitlementId)) + '&install=' + install, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the per-user managed configurations for the specified user. Only the ID is set.
		 * Get enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_managedconfigurationsforuser_list(enterpriseId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/managedConfigurationsForUser', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a per-user managed configuration for an app for the specified user.
		 * Delete enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_managedconfigurationsforuser_delete(enterpriseId: string, userId: string, managedConfigurationForUserId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/managedConfigurationsForUser/' + (managedConfigurationForUserId == null ? '' : encodeURIComponent(managedConfigurationForUserId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of a per-user managed configuration for an app for the specified user.
		 * Get enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_managedconfigurationsforuser_get(enterpriseId: string, userId: string, managedConfigurationForUserId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/managedConfigurationsForUser/' + (managedConfigurationForUserId == null ? '' : encodeURIComponent(managedConfigurationForUserId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.
		 * Put enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @param {string} managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
		 * @return {void} Successful response
		 */
		Androidenterprise_managedconfigurationsforuser_update(enterpriseId: string, userId: string, managedConfigurationForUserId: string, requestBody: ManagedConfiguration): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/managedConfigurationsForUser/' + (managedConfigurationForUserId == null ? '' : encodeURIComponent(managedConfigurationForUserId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revokes a previously generated token (activation code) for the user.
		 * Delete enterprises/{enterpriseId}/users/{userId}/token
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_revokeToken(enterpriseId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/token', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a token (activation code) to allow this user to configure their managed account in the Android Setup Wizard. Revokes any previously generated token.
		 * This call only works with Google managed accounts.
		 * Post enterprises/{enterpriseId}/users/{userId}/token
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} userId The ID of the user.
		 * @return {void} Successful response
		 */
		Androidenterprise_users_generateToken(enterpriseId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/token', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the details of all web apps for a given enterprise.
		 * Get enterprises/{enterpriseId}/webApps
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_webapps_list(enterpriseId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/webApps', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new web app for the enterprise.
		 * Post enterprises/{enterpriseId}/webApps
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @return {void} Successful response
		 */
		Androidenterprise_webapps_insert(enterpriseId: string, requestBody: WebApp): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/webApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing web app.
		 * Delete enterprises/{enterpriseId}/webApps/{webAppId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} webAppId The ID of the web app.
		 * @return {void} Successful response
		 */
		Androidenterprise_webapps_delete(enterpriseId: string, webAppId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/webApps/' + (webAppId == null ? '' : encodeURIComponent(webAppId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an existing web app.
		 * Get enterprises/{enterpriseId}/webApps/{webAppId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} webAppId The ID of the web app.
		 * @return {void} Successful response
		 */
		Androidenterprise_webapps_get(enterpriseId: string, webAppId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/webApps/' + (webAppId == null ? '' : encodeURIComponent(webAppId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing web app.
		 * Put enterprises/{enterpriseId}/webApps/{webAppId}
		 * @param {string} enterpriseId The ID of the enterprise.
		 * @param {string} webAppId The ID of the web app.
		 * @return {void} Successful response
		 */
		Androidenterprise_webapps_update(enterpriseId: string, webAppId: string, requestBody: WebApp): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'enterprises/' + (enterpriseId == null ? '' : encodeURIComponent(enterpriseId)) + '/webApps/' + (webAppId == null ? '' : encodeURIComponent(webAppId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of an Android app permission for display to an enterprise admin.
		 * Get permissions/{permissionId}
		 * @param {string} permissionId The ID of the permission.
		 * @param {string} language The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
		 * @return {void} Successful response
		 */
		Androidenterprise_permissions_get(permissionId: string, language: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Androidenterprise_enterprises_pullNotificationSetRequestMode { returnImmediately = 0, waitForNotifications = 1 }

	export enum Androidenterprise_enterprises_getServiceAccountKeyType { googleCredentials = 0, pkcs12 = 1 }

}

