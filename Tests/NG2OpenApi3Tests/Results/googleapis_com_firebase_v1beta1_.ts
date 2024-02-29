import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** All fields are required. */
	export interface AddFirebaseRequest {

		/** Deprecated. Instead, to set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the GCP `Project`. The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). */
		locationId?: string | null;
	}

	/** All fields are required. */
	export interface AddFirebaseRequestFormProperties {

		/** Deprecated. Instead, to set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the GCP `Project`. The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateAddFirebaseRequestFormGroup() {
		return new FormGroup<AddFirebaseRequestFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddGoogleAnalyticsRequest {

		/** The ID for the existing [Google Analytics account](http://www.google.com/analytics/) that you want to link with the `FirebaseProject`. Specifying this field will provision a new Google Analytics property in your Google Analytics account and associate the new property with the `FirebaseProject`. */
		analyticsAccountId?: string | null;

		/** The ID for the existing Google Analytics property that you want to associate with the `FirebaseProject`. */
		analyticsPropertyId?: string | null;
	}
	export interface AddGoogleAnalyticsRequestFormProperties {

		/** The ID for the existing [Google Analytics account](http://www.google.com/analytics/) that you want to link with the `FirebaseProject`. Specifying this field will provision a new Google Analytics property in your Google Analytics account and associate the new property with the `FirebaseProject`. */
		analyticsAccountId: FormControl<string | null | undefined>,

		/** The ID for the existing Google Analytics property that you want to associate with the `FirebaseProject`. */
		analyticsPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateAddGoogleAnalyticsRequestFormGroup() {
		return new FormGroup<AddGoogleAnalyticsRequestFormProperties>({
			analyticsAccountId: new FormControl<string | null | undefined>(undefined),
			analyticsPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdminSdkConfig {

		/** **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database URL. */
		databaseURL?: string | null;

		/** **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. */
		locationId?: string | null;

		/** Immutable. A user-assigned unique identifier for the `FirebaseProject`. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project. */
		projectId?: string | null;

		/** **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket name. */
		storageBucket?: string | null;
	}
	export interface AdminSdkConfigFormProperties {

		/** **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database URL. */
		databaseURL: FormControl<string | null | undefined>,

		/** **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. */
		locationId: FormControl<string | null | undefined>,

		/** Immutable. A user-assigned unique identifier for the `FirebaseProject`. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project. */
		projectId: FormControl<string | null | undefined>,

		/** **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket name. */
		storageBucket: FormControl<string | null | undefined>,
	}
	export function CreateAdminSdkConfigFormGroup() {
		return new FormGroup<AdminSdkConfigFormProperties>({
			databaseURL: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			storageBucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnalyticsDetails {

		/** Details of a Google Analytics property */
		analyticsProperty?: AnalyticsProperty;

		/** - For `AndroidApps` and `IosApps`: a map of `app` to `streamId` for each Firebase App in the specified `FirebaseProject`. Each `app` and `streamId` appears only once. - For `WebApps`: a map of `app` to `streamId` and `measurementId` for each `WebApp` in the specified `FirebaseProject`. Each `app`, `streamId`, and `measurementId` appears only once. */
		streamMappings?: Array<StreamMapping>;
	}
	export interface AnalyticsDetailsFormProperties {
	}
	export function CreateAnalyticsDetailsFormGroup() {
		return new FormGroup<AnalyticsDetailsFormProperties>({
		});

	}


	/** Details of a Google Analytics property */
	export interface AnalyticsProperty {

		/** Output only. The ID of the [Google Analytics account](https://www.google.com/analytics/) for the Google Analytics property associated with the specified FirebaseProject. */
		analyticsAccountId?: string | null;

		/** The display name of the Google Analytics property associated with the specified `FirebaseProject`. */
		displayName?: string | null;

		/** The globally unique, Google-assigned identifier of the Google Analytics property associated with the specified `FirebaseProject`. If you called [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) to link the `FirebaseProject` with a Google Analytics account, the value in this `id` field is the same as the ID of the property either specified or provisioned with that call to `AddGoogleAnalytics`. */
		id?: string | null;
	}

	/** Details of a Google Analytics property */
	export interface AnalyticsPropertyFormProperties {

		/** Output only. The ID of the [Google Analytics account](https://www.google.com/analytics/) for the Google Analytics property associated with the specified FirebaseProject. */
		analyticsAccountId: FormControl<string | null | undefined>,

		/** The display name of the Google Analytics property associated with the specified `FirebaseProject`. */
		displayName: FormControl<string | null | undefined>,

		/** The globally unique, Google-assigned identifier of the Google Analytics property associated with the specified `FirebaseProject`. If you called [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) to link the `FirebaseProject` with a Google Analytics account, the value in this `id` field is the same as the ID of the property either specified or provisioned with that call to `AddGoogleAnalytics`. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAnalyticsPropertyFormGroup() {
		return new FormGroup<AnalyticsPropertyFormProperties>({
			analyticsAccountId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A mapping of a Firebase App to a Google Analytics data stream */
	export interface StreamMapping {

		/** The resource name of the Firebase App associated with the Google Analytics data stream, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID or projects/PROJECT_IDENTIFIER/iosApps/APP_ID or projects/PROJECT_IDENTIFIER /webApps/APP_ID Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. */
		app?: string | null;

		/** Applicable for Firebase Web Apps only. The unique Google-assigned identifier of the Google Analytics web stream associated with the Firebase Web App. Firebase SDKs use this ID to interact with Google Analytics APIs. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153). */
		measurementId?: string | null;

		/** The unique Google-assigned identifier of the Google Analytics data stream associated with the Firebase App. Learn more about Google Analytics data streams in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). */
		streamId?: string | null;
	}

	/** A mapping of a Firebase App to a Google Analytics data stream */
	export interface StreamMappingFormProperties {

		/** The resource name of the Firebase App associated with the Google Analytics data stream, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID or projects/PROJECT_IDENTIFIER/iosApps/APP_ID or projects/PROJECT_IDENTIFIER /webApps/APP_ID Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. */
		app: FormControl<string | null | undefined>,

		/** Applicable for Firebase Web Apps only. The unique Google-assigned identifier of the Google Analytics web stream associated with the Firebase Web App. Firebase SDKs use this ID to interact with Google Analytics APIs. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153). */
		measurementId: FormControl<string | null | undefined>,

		/** The unique Google-assigned identifier of the Google Analytics data stream associated with the Firebase App. Learn more about Google Analytics data streams in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). */
		streamId: FormControl<string | null | undefined>,
	}
	export function CreateStreamMappingFormGroup() {
		return new FormGroup<StreamMappingFormProperties>({
			app: new FormControl<string | null | undefined>(undefined),
			measurementId: new FormControl<string | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a Firebase App for Android. */
	export interface AndroidApp {

		/** The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `AndroidApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.androidApps/getConfig). If `api_key_id` is not set in requests to [`androidApps.Create`](../../rest/v1beta1/projects.androidApps/create), then Firebase automatically associates an `api_key_id` with the `AndroidApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `AndroidApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys. */
		apiKeyId?: string | null;

		/** Output only. Immutable. The globally unique, Firebase-assigned identifier for the `AndroidApp`. This identifier should be treated as an opaque token, as the data format is not specified. */
		appId?: string | null;

		/** The user-assigned display name for the `AndroidApp`. */
		displayName?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated. */
		etag?: string | null;

		/** Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state. */
		expireTime?: string | null;

		/** The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)). */
		name?: string | null;

		/** Immutable. The canonical package name of the Android app as would appear in the Google Play Developer Console. */
		packageName?: string | null;

		/** Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `AndroidApp`. */
		projectId?: string | null;

		/** The SHA1 certificate hashes for the AndroidApp. */
		sha1Hashes?: Array<string>;

		/** The SHA256 certificate hashes for the AndroidApp. */
		sha256Hashes?: Array<string>;

		/** Output only. The lifecycle state of the App. */
		state?: AndroidAppState | null;
	}

	/** Details of a Firebase App for Android. */
	export interface AndroidAppFormProperties {

		/** The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `AndroidApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.androidApps/getConfig). If `api_key_id` is not set in requests to [`androidApps.Create`](../../rest/v1beta1/projects.androidApps/create), then Firebase automatically associates an `api_key_id` with the `AndroidApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `AndroidApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys. */
		apiKeyId: FormControl<string | null | undefined>,

		/** Output only. Immutable. The globally unique, Firebase-assigned identifier for the `AndroidApp`. This identifier should be treated as an opaque token, as the data format is not specified. */
		appId: FormControl<string | null | undefined>,

		/** The user-assigned display name for the `AndroidApp`. */
		displayName: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state. */
		expireTime: FormControl<string | null | undefined>,

		/** The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)). */
		name: FormControl<string | null | undefined>,

		/** Immutable. The canonical package name of the Android app as would appear in the Google Play Developer Console. */
		packageName: FormControl<string | null | undefined>,

		/** Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `AndroidApp`. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. The lifecycle state of the App. */
		state: FormControl<AndroidAppState | null | undefined>,
	}
	export function CreateAndroidAppFormGroup() {
		return new FormGroup<AndroidAppFormProperties>({
			apiKeyId: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AndroidAppState | null | undefined>(undefined),
		});

	}

	export enum AndroidAppState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETED = 'DELETED' }


	/** Configuration metadata of a single Firebase App for Android. */
	export interface AndroidAppConfig {

		/** The contents of the JSON configuration file. */
		configFileContents?: string | null;

		/** The filename that the configuration artifact for the `AndroidApp` is typically saved as. For example: `google-services.json` */
		configFilename?: string | null;
	}

	/** Configuration metadata of a single Firebase App for Android. */
	export interface AndroidAppConfigFormProperties {

		/** The contents of the JSON configuration file. */
		configFileContents: FormControl<string | null | undefined>,

		/** The filename that the configuration artifact for the `AndroidApp` is typically saved as. For example: `google-services.json` */
		configFilename: FormControl<string | null | undefined>,
	}
	export function CreateAndroidAppConfigFormGroup() {
		return new FormGroup<AndroidAppConfigFormProperties>({
			configFileContents: new FormControl<string | null | undefined>(undefined),
			configFilename: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** **DEPRECATED.** _Auto-provisioning of these resources is changing, so this object no longer reliably provides information about the resources within the Project. Instead, retrieve information about each resource directly from its resource-specific API._ The default auto-provisioned resources associated with the Project. */
	export interface DefaultResources {

		/** Output only. **DEPRECATED.** _Instead, find the default Firebase Hosting site name using the [ListSites](https://firebase.google.com/docs/reference/hosting/rest/v1beta1/projects.sites/list) within the Firebase Hosting REST API. Note that the default site for the Project might not yet be provisioned, so the return might not contain a default site._ The default Firebase Hosting site name, in the format: PROJECT_ID Though rare, your `projectId` might already be used as the name for an existing Hosting site in another project (learn more about creating non-default, [additional sites](https://firebase.google.com/docs/hosting/multisites)). In these cases, your `projectId` is appended with a hyphen then five alphanumeric characters to create your default Hosting site name. For example, if your `projectId` is `myproject123`, your default Hosting site name might be: `myproject123-a5c16` */
		hostingSite?: string | null;

		/** Output only. **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. */
		locationId?: string | null;

		/** Output only. **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database instance name, in the format: PROJECT_ID Though rare, your `projectId` might already be used as the name for an existing Realtime Database instance in another project (learn more about [database sharding](https://firebase.google.com/docs/database/usage/sharding)). In these cases, your `projectId` is appended with a hyphen then five alphanumeric characters to create your default Realtime Database instance name. For example, if your `projectId` is `myproject123`, your default database instance name might be: `myproject123-a5c16` */
		realtimeDatabaseInstance?: string | null;

		/** Output only. **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket, in the format: PROJECT_ID.appspot.com */
		storageBucket?: string | null;
	}

	/** **DEPRECATED.** _Auto-provisioning of these resources is changing, so this object no longer reliably provides information about the resources within the Project. Instead, retrieve information about each resource directly from its resource-specific API._ The default auto-provisioned resources associated with the Project. */
	export interface DefaultResourcesFormProperties {

		/** Output only. **DEPRECATED.** _Instead, find the default Firebase Hosting site name using the [ListSites](https://firebase.google.com/docs/reference/hosting/rest/v1beta1/projects.sites/list) within the Firebase Hosting REST API. Note that the default site for the Project might not yet be provisioned, so the return might not contain a default site._ The default Firebase Hosting site name, in the format: PROJECT_ID Though rare, your `projectId` might already be used as the name for an existing Hosting site in another project (learn more about creating non-default, [additional sites](https://firebase.google.com/docs/hosting/multisites)). In these cases, your `projectId` is appended with a hyphen then five alphanumeric characters to create your default Hosting site name. For example, if your `projectId` is `myproject123`, your default Hosting site name might be: `myproject123-a5c16` */
		hostingSite: FormControl<string | null | undefined>,

		/** Output only. **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. */
		locationId: FormControl<string | null | undefined>,

		/** Output only. **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database instance name, in the format: PROJECT_ID Though rare, your `projectId` might already be used as the name for an existing Realtime Database instance in another project (learn more about [database sharding](https://firebase.google.com/docs/database/usage/sharding)). In these cases, your `projectId` is appended with a hyphen then five alphanumeric characters to create your default Realtime Database instance name. For example, if your `projectId` is `myproject123`, your default database instance name might be: `myproject123-a5c16` */
		realtimeDatabaseInstance: FormControl<string | null | undefined>,

		/** Output only. **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket, in the format: PROJECT_ID.appspot.com */
		storageBucket: FormControl<string | null | undefined>,
	}
	export function CreateDefaultResourcesFormGroup() {
		return new FormGroup<DefaultResourcesFormProperties>({
			hostingSite: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			realtimeDatabaseInstance: new FormControl<string | null | undefined>(undefined),
			storageBucket: new FormControl<string | null | undefined>(undefined),
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

	export interface FinalizeDefaultLocationRequest {

		/** The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). */
		locationId?: string | null;
	}
	export interface FinalizeDefaultLocationRequestFormProperties {

		/** The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateFinalizeDefaultLocationRequestFormGroup() {
		return new FormGroup<FinalizeDefaultLocationRequestFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A high-level summary of an App. */
	export interface FirebaseAppInfo {

		/** The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the App. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's configuration artifact ([`AndroidApp`](../../rest/v1beta1/projects.androidApps/getConfig) | [`IosApp`](../../rest/v1beta1/projects.iosApps/getConfig) | [`WebApp`](../../rest/v1beta1/projects.webApps/getConfig)). If `api_key_id` is not set in requests to create the App ([`AndroidApp`](../../rest/v1beta1/projects.androidApps/create) | [`IosApp`](../../rest/v1beta1/projects.iosApps/create) | [`WebApp`](../../rest/v1beta1/projects.webApps/create)), then Firebase automatically associates an `api_key_id` with the App. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. */
		apiKeyId?: string | null;

		/** Output only. Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. This identifier should be treated as an opaque token, as the data format is not specified. */
		appId?: string | null;

		/** The user-assigned display name of the Firebase App. */
		displayName?: string | null;

		/** Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state. */
		expireTime?: string | null;

		/** The resource name of the Firebase App, in the format: projects/PROJECT_ID /iosApps/APP_ID or projects/PROJECT_ID/androidApps/APP_ID or projects/ PROJECT_ID/webApps/APP_ID */
		name?: string | null;

		/** Output only. Immutable. The platform-specific identifier of the App. *Note:* For most use cases, use `appId`, which is the canonical, globally unique identifier for referencing an App. This string is derived from a native identifier for each platform: `packageName` for an `AndroidApp`, `bundleId` for an `IosApp`, and `webId` for a `WebApp`. Its contents should be treated as opaque, as the native identifier format may change as platforms evolve. This string is only unique within a `FirebaseProject` and its associated Apps. */
		namespace?: string | null;

		/** The platform of the Firebase App. */
		platform?: FirebaseAppInfoPlatform | null;

		/** Output only. The lifecycle state of the App. */
		state?: AndroidAppState | null;
	}

	/** A high-level summary of an App. */
	export interface FirebaseAppInfoFormProperties {

		/** The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the App. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's configuration artifact ([`AndroidApp`](../../rest/v1beta1/projects.androidApps/getConfig) | [`IosApp`](../../rest/v1beta1/projects.iosApps/getConfig) | [`WebApp`](../../rest/v1beta1/projects.webApps/getConfig)). If `api_key_id` is not set in requests to create the App ([`AndroidApp`](../../rest/v1beta1/projects.androidApps/create) | [`IosApp`](../../rest/v1beta1/projects.iosApps/create) | [`WebApp`](../../rest/v1beta1/projects.webApps/create)), then Firebase automatically associates an `api_key_id` with the App. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. */
		apiKeyId: FormControl<string | null | undefined>,

		/** Output only. Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. This identifier should be treated as an opaque token, as the data format is not specified. */
		appId: FormControl<string | null | undefined>,

		/** The user-assigned display name of the Firebase App. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state. */
		expireTime: FormControl<string | null | undefined>,

		/** The resource name of the Firebase App, in the format: projects/PROJECT_ID /iosApps/APP_ID or projects/PROJECT_ID/androidApps/APP_ID or projects/ PROJECT_ID/webApps/APP_ID */
		name: FormControl<string | null | undefined>,

		/** Output only. Immutable. The platform-specific identifier of the App. *Note:* For most use cases, use `appId`, which is the canonical, globally unique identifier for referencing an App. This string is derived from a native identifier for each platform: `packageName` for an `AndroidApp`, `bundleId` for an `IosApp`, and `webId` for a `WebApp`. Its contents should be treated as opaque, as the native identifier format may change as platforms evolve. This string is only unique within a `FirebaseProject` and its associated Apps. */
		namespace: FormControl<string | null | undefined>,

		/** The platform of the Firebase App. */
		platform: FormControl<FirebaseAppInfoPlatform | null | undefined>,

		/** Output only. The lifecycle state of the App. */
		state: FormControl<AndroidAppState | null | undefined>,
	}
	export function CreateFirebaseAppInfoFormGroup() {
		return new FormGroup<FirebaseAppInfoFormProperties>({
			apiKeyId: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<FirebaseAppInfoPlatform | null | undefined>(undefined),
			state: new FormControl<AndroidAppState | null | undefined>(undefined),
		});

	}

	export enum FirebaseAppInfoPlatform { PLATFORM_UNSPECIFIED = 'PLATFORM_UNSPECIFIED', IOS = 'IOS', ANDROID = 'ANDROID', WEB = 'WEB' }


	/** A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. */
	export interface FirebaseProject {

		/** A set of user-defined annotations for the FirebaseProject. Learn more about annotations in Google's [AIP-128 standard](https://google.aip.dev/128#annotations). These annotations are intended solely for developers and client-side tools. Firebase services will not mutate this annotations set. */
		annotations?: {[id: string]: string };

		/** The user-assigned display name of the Project. */
		displayName?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated. */
		etag?: string | null;

		/** The resource name of the Project, in the format: projects/PROJECT_IDENTIFIER PROJECT_IDENTIFIER: the Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. */
		name?: string | null;

		/** Output only. Immutable. A user-assigned unique identifier for the Project. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project. */
		projectId?: string | null;

		/** Output only. Immutable. The globally unique, Google-assigned canonical identifier for the Project. Use this identifier when configuring integrations and/or making API calls to Firebase or third-party services. */
		projectNumber?: string | null;

		/** **DEPRECATED.** _Auto-provisioning of these resources is changing, so this object no longer reliably provides information about the resources within the Project. Instead, retrieve information about each resource directly from its resource-specific API._ The default auto-provisioned resources associated with the Project. */
		resources?: DefaultResources;

		/** Output only. The lifecycle state of the Project. */
		state?: AndroidAppState | null;
	}

	/** A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. */
	export interface FirebaseProjectFormProperties {

		/** A set of user-defined annotations for the FirebaseProject. Learn more about annotations in Google's [AIP-128 standard](https://google.aip.dev/128#annotations). These annotations are intended solely for developers and client-side tools. Firebase services will not mutate this annotations set. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** The user-assigned display name of the Project. */
		displayName: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated. */
		etag: FormControl<string | null | undefined>,

		/** The resource name of the Project, in the format: projects/PROJECT_IDENTIFIER PROJECT_IDENTIFIER: the Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Immutable. A user-assigned unique identifier for the Project. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. Immutable. The globally unique, Google-assigned canonical identifier for the Project. Use this identifier when configuring integrations and/or making API calls to Firebase or third-party services. */
		projectNumber: FormControl<string | null | undefined>,

		/** Output only. The lifecycle state of the Project. */
		state: FormControl<AndroidAppState | null | undefined>,
	}
	export function CreateFirebaseProjectFormGroup() {
		return new FormGroup<FirebaseProjectFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			projectNumber: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AndroidAppState | null | undefined>(undefined),
		});

	}


	/** Details of a Firebase App for iOS. */
	export interface IosApp {

		/** The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `IosApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.iosApps/getConfig). If `api_key_id` is not set in requests to [`iosApps.Create`](../../rest/v1beta1/projects.iosApps/create), then Firebase automatically associates an `api_key_id` with the `IosApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `IosApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys. */
		apiKeyId?: string | null;

		/** Output only. Immutable. The globally unique, Firebase-assigned identifier for the `IosApp`. This identifier should be treated as an opaque token, as the data format is not specified. */
		appId?: string | null;

		/** The automatically generated Apple ID assigned to the iOS app by Apple in the iOS App Store. */
		appStoreId?: string | null;

		/** Immutable. The canonical bundle ID of the iOS app as it would appear in the iOS AppStore. */
		bundleId?: string | null;

		/** The user-assigned display name for the `IosApp`. */
		displayName?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated. */
		etag?: string | null;

		/** Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state. */
		expireTime?: string | null;

		/** The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.iosApps#IosApp.FIELDS.app_id)). */
		name?: string | null;

		/** Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `IosApp`. */
		projectId?: string | null;

		/** Output only. The lifecycle state of the App. */
		state?: AndroidAppState | null;

		/** The Apple Developer Team ID associated with the App in the App Store. */
		teamId?: string | null;
	}

	/** Details of a Firebase App for iOS. */
	export interface IosAppFormProperties {

		/** The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `IosApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.iosApps/getConfig). If `api_key_id` is not set in requests to [`iosApps.Create`](../../rest/v1beta1/projects.iosApps/create), then Firebase automatically associates an `api_key_id` with the `IosApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `IosApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys. */
		apiKeyId: FormControl<string | null | undefined>,

		/** Output only. Immutable. The globally unique, Firebase-assigned identifier for the `IosApp`. This identifier should be treated as an opaque token, as the data format is not specified. */
		appId: FormControl<string | null | undefined>,

		/** The automatically generated Apple ID assigned to the iOS app by Apple in the iOS App Store. */
		appStoreId: FormControl<string | null | undefined>,

		/** Immutable. The canonical bundle ID of the iOS app as it would appear in the iOS AppStore. */
		bundleId: FormControl<string | null | undefined>,

		/** The user-assigned display name for the `IosApp`. */
		displayName: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state. */
		expireTime: FormControl<string | null | undefined>,

		/** The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.iosApps#IosApp.FIELDS.app_id)). */
		name: FormControl<string | null | undefined>,

		/** Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `IosApp`. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. The lifecycle state of the App. */
		state: FormControl<AndroidAppState | null | undefined>,

		/** The Apple Developer Team ID associated with the App in the App Store. */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateIosAppFormGroup() {
		return new FormGroup<IosAppFormProperties>({
			apiKeyId: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			appStoreId: new FormControl<string | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AndroidAppState | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration metadata of a single Firebase App for iOS. */
	export interface IosAppConfig {

		/** The content of the XML configuration file. */
		configFileContents?: string | null;

		/** The filename that the configuration artifact for the `IosApp` is typically saved as. For example: `GoogleService-Info.plist` */
		configFilename?: string | null;
	}

	/** Configuration metadata of a single Firebase App for iOS. */
	export interface IosAppConfigFormProperties {

		/** The content of the XML configuration file. */
		configFileContents: FormControl<string | null | undefined>,

		/** The filename that the configuration artifact for the `IosApp` is typically saved as. For example: `GoogleService-Info.plist` */
		configFilename: FormControl<string | null | undefined>,
	}
	export function CreateIosAppConfigFormGroup() {
		return new FormGroup<IosAppConfigFormProperties>({
			configFileContents: new FormControl<string | null | undefined>(undefined),
			configFilename: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAndroidAppsResponse {

		/** List of each `AndroidApp` associated with the specified `FirebaseProject`. */
		apps?: Array<AndroidApp>;

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListAndroidApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;
	}
	export interface ListAndroidAppsResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListAndroidApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAndroidAppsResponseFormGroup() {
		return new FormGroup<ListAndroidAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAvailableLocationsResponse {

		/** One page of results from a call to `ListAvailableLocations`. */
		locations?: Array<Location>;

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results and all available locations have been listed. This token can be used in a subsequent call to `ListAvailableLocations` to find more locations. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;
	}
	export interface ListAvailableLocationsResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results and all available locations have been listed. This token can be used in a subsequent call to `ListAvailableLocations` to find more locations. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableLocationsResponseFormGroup() {
		return new FormGroup<ListAvailableLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** **DEPRECATED.** _This Location is no longer used to determine Firebase resource locations. Instead, consult product documentation to determine valid locations for each resource used in your Project._ A GCP resource location that can be selected for a FirebaseProject. */
	export interface Location {

		/** Products and services that are available in the GCP resource location. */
		features?: Array<string>;

		/** The ID of the GCP resource location. It will be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations#types). */
		locationId?: string | null;

		/** Indicates whether the GCP resource location is a [regional or multi-regional location](https://firebase.google.com/docs/projects/locations#types) for data replication. */
		type?: LocationType | null;
	}

	/** **DEPRECATED.** _This Location is no longer used to determine Firebase resource locations. Instead, consult product documentation to determine valid locations for each resource used in your Project._ A GCP resource location that can be selected for a FirebaseProject. */
	export interface LocationFormProperties {

		/** The ID of the GCP resource location. It will be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations#types). */
		locationId: FormControl<string | null | undefined>,

		/** Indicates whether the GCP resource location is a [regional or multi-regional location](https://firebase.google.com/docs/projects/locations#types) for data replication. */
		type: FormControl<LocationType | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LocationType | null | undefined>(undefined),
		});

	}

	export enum LocationType { LOCATION_TYPE_UNSPECIFIED = 'LOCATION_TYPE_UNSPECIFIED', REGIONAL = 'REGIONAL', MULTI_REGIONAL = 'MULTI_REGIONAL' }

	export interface ListAvailableProjectsResponse {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to `ListAvailableProjects` to find the next group of Projects. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;

		/** The list of GCP `Projects` which can have Firebase resources added to them. */
		projectInfo?: Array<ProjectInfo>;
	}
	export interface ListAvailableProjectsResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to `ListAvailableProjects` to find the next group of Projects. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableProjectsResponseFormGroup() {
		return new FormGroup<ListAvailableProjectsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reference to a Google Cloud Platform (GCP) `Project`. */
	export interface ProjectInfo {

		/** The user-assigned display name of the GCP `Project`, for example: `My App` */
		displayName?: string | null;

		/** The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). Not all Projects will have this field populated. If it is not populated, it means that the Project does not yet have a default GCP resource location. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. */
		locationId?: string | null;

		/** The resource name of the GCP `Project` to which Firebase resources can be added, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. */
		project?: string | null;
	}

	/** A reference to a Google Cloud Platform (GCP) `Project`. */
	export interface ProjectInfoFormProperties {

		/** The user-assigned display name of the GCP `Project`, for example: `My App` */
		displayName: FormControl<string | null | undefined>,

		/** The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). Not all Projects will have this field populated. If it is not populated, it means that the Project does not yet have a default GCP resource location. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. */
		locationId: FormControl<string | null | undefined>,

		/** The resource name of the GCP `Project` to which Firebase resources can be added, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. */
		project: FormControl<string | null | undefined>,
	}
	export function CreateProjectInfoFormGroup() {
		return new FormGroup<ProjectInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirebaseProjectsResponse {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to `ListFirebaseProjects` to find the next group of Projects. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;

		/** One page of the list of Projects that are accessible to the caller. */
		results?: Array<FirebaseProject>;
	}
	export interface ListFirebaseProjectsResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to `ListFirebaseProjects` to find the next group of Projects. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirebaseProjectsResponseFormGroup() {
		return new FormGroup<ListFirebaseProjectsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIosAppsResponse {

		/** List of each `IosApp` associated with the specified `FirebaseProject`. */
		apps?: Array<IosApp>;

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListIosApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;
	}
	export interface ListIosAppsResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListIosApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListIosAppsResponseFormGroup() {
		return new FormGroup<ListIosAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListShaCertificatesResponse {

		/** The list of each `ShaCertificate` associated with the `AndroidApp`. */
		certificates?: Array<ShaCertificate>;
	}
	export interface ListShaCertificatesResponseFormProperties {
	}
	export function CreateListShaCertificatesResponseFormGroup() {
		return new FormGroup<ListShaCertificatesResponseFormProperties>({
		});

	}


	/** A SHA-1 or SHA-256 certificate associated with the AndroidApp. */
	export interface ShaCertificate {

		/** The type of SHA certificate encoded in the hash. */
		certType?: ShaCertificateCertType | null;

		/** The resource name of the ShaCertificate for the AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/sha/SHA_HASH * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)). * SHA_HASH: the certificate hash for the App (see [`shaHash`](../projects.androidApps.sha#ShaCertificate.FIELDS.sha_hash)). */
		name?: string | null;

		/** The certificate hash for the `AndroidApp`. */
		shaHash?: string | null;
	}

	/** A SHA-1 or SHA-256 certificate associated with the AndroidApp. */
	export interface ShaCertificateFormProperties {

		/** The type of SHA certificate encoded in the hash. */
		certType: FormControl<ShaCertificateCertType | null | undefined>,

		/** The resource name of the ShaCertificate for the AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/sha/SHA_HASH * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)). * SHA_HASH: the certificate hash for the App (see [`shaHash`](../projects.androidApps.sha#ShaCertificate.FIELDS.sha_hash)). */
		name: FormControl<string | null | undefined>,

		/** The certificate hash for the `AndroidApp`. */
		shaHash: FormControl<string | null | undefined>,
	}
	export function CreateShaCertificateFormGroup() {
		return new FormGroup<ShaCertificateFormProperties>({
			certType: new FormControl<ShaCertificateCertType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shaHash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShaCertificateCertType { SHA_CERTIFICATE_TYPE_UNSPECIFIED = 'SHA_CERTIFICATE_TYPE_UNSPECIFIED', SHA_1 = 'SHA_1', SHA_256 = 'SHA_256' }

	export interface ListWebAppsResponse {

		/** List of each `WebApp` associated with the specified `FirebaseProject`. */
		apps?: Array<WebApp>;

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListWebApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;
	}
	export interface ListWebAppsResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListWebApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWebAppsResponseFormGroup() {
		return new FormGroup<ListWebAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a Firebase App for the web. */
	export interface WebApp {

		/** The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `WebApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.webApps/getConfig). If `api_key_id` is not set in requests to [`webApps.Create`](../../rest/v1beta1/projects.webApps/create), then Firebase automatically associates an `api_key_id` with the `WebApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `WebApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys. */
		apiKeyId?: string | null;

		/** Output only. Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. This identifier should be treated as an opaque token, as the data format is not specified. */
		appId?: string | null;

		/** The URLs where the `WebApp` is hosted. */
		appUrls?: Array<string>;

		/** The user-assigned display name for the `WebApp`. */
		displayName?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated. */
		etag?: string | null;

		/** Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state. */
		expireTime?: string | null;

		/** The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)). */
		name?: string | null;

		/** Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `WebApp`. */
		projectId?: string | null;

		/** Output only. The lifecycle state of the App. */
		state?: AndroidAppState | null;

		/** Output only. Immutable. A unique, Firebase-assigned identifier for the `WebApp`. This identifier is only used to populate the `namespace` value for the `WebApp`. For most use cases, use `appId` to identify or reference the App. The `webId` value is only unique within a `FirebaseProject` and its associated Apps. */
		webId?: string | null;
	}

	/** Details of a Firebase App for the web. */
	export interface WebAppFormProperties {

		/** The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `WebApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.webApps/getConfig). If `api_key_id` is not set in requests to [`webApps.Create`](../../rest/v1beta1/projects.webApps/create), then Firebase automatically associates an `api_key_id` with the `WebApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `WebApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys. */
		apiKeyId: FormControl<string | null | undefined>,

		/** Output only. Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. This identifier should be treated as an opaque token, as the data format is not specified. */
		appId: FormControl<string | null | undefined>,

		/** The user-assigned display name for the `WebApp`. */
		displayName: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state. */
		expireTime: FormControl<string | null | undefined>,

		/** The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)). */
		name: FormControl<string | null | undefined>,

		/** Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `WebApp`. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. The lifecycle state of the App. */
		state: FormControl<AndroidAppState | null | undefined>,

		/** Output only. Immutable. A unique, Firebase-assigned identifier for the `WebApp`. This identifier is only used to populate the `namespace` value for the `WebApp`. For most use cases, use `appId` to identify or reference the App. The `webId` value is only unique within a `FirebaseProject` and its associated Apps. */
		webId: FormControl<string | null | undefined>,
	}
	export function CreateWebAppFormGroup() {
		return new FormGroup<WebAppFormProperties>({
			apiKeyId: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AndroidAppState | null | undefined>(undefined),
			webId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is proto2's version of MessageSet. */
	export interface MessageSet {
	}

	/** This is proto2's version of MessageSet. */
	export interface MessageSetFormProperties {
	}
	export function CreateMessageSetFormGroup() {
		return new FormGroup<MessageSetFormProperties>({
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
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

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
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


	/** Describes the progress of an LRO. It is included in the `metadata` field of the `Operation`. */
	export interface OperationMetadata {
	}

	/** Describes the progress of an LRO. It is included in the `metadata` field of the `Operation`. */
	export interface OperationMetadataFormProperties {
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
		});

	}


	/** Metadata about a long-running Product operation. */
	export interface ProductMetadata {

		/** List of warnings related to the associated operation. */
		warningMessages?: Array<string>;
	}

	/** Metadata about a long-running Product operation. */
	export interface ProductMetadataFormProperties {
	}
	export function CreateProductMetadataFormGroup() {
		return new FormGroup<ProductMetadataFormProperties>({
		});

	}

	export interface RemoveAnalyticsRequest {

		/** Optional. The ID of the Google Analytics property associated with the specified `FirebaseProject`. - If not set, then the Google Analytics property that is currently associated with the specified `FirebaseProject` is removed. - If set, and the specified `FirebaseProject` is currently associated with a *different* Google Analytics property, then the response is a `412 Precondition Failed` error. */
		analyticsPropertyId?: string | null;
	}
	export interface RemoveAnalyticsRequestFormProperties {

		/** Optional. The ID of the Google Analytics property associated with the specified `FirebaseProject`. - If not set, then the Google Analytics property that is currently associated with the specified `FirebaseProject` is removed. - If set, and the specified `FirebaseProject` is currently associated with a *different* Google Analytics property, then the response is a `412 Precondition Failed` error. */
		analyticsPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveAnalyticsRequestFormGroup() {
		return new FormGroup<RemoveAnalyticsRequestFormProperties>({
			analyticsPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveAndroidAppRequest {

		/** If set to true, and the App is not found, the request will succeed but no action will be taken on the server. */
		allowMissing?: boolean | null;

		/** Checksum provided in the AndroidApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Determines whether to _immediately_ delete the AndroidApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteAndroidApp. */
		immediate?: boolean | null;

		/** If set to true, the request is only validated. The App will _not_ be removed. */
		validateOnly?: boolean | null;
	}
	export interface RemoveAndroidAppRequestFormProperties {

		/** If set to true, and the App is not found, the request will succeed but no action will be taken on the server. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** Checksum provided in the AndroidApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Determines whether to _immediately_ delete the AndroidApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteAndroidApp. */
		immediate: FormControl<boolean | null | undefined>,

		/** If set to true, the request is only validated. The App will _not_ be removed. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoveAndroidAppRequestFormGroup() {
		return new FormGroup<RemoveAndroidAppRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			immediate: new FormControl<boolean | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RemoveIosAppRequest {

		/** If set to true, and the App is not found, the request will succeed but no action will be taken on the server. */
		allowMissing?: boolean | null;

		/** Checksum provided in the IosApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Determines whether to _immediately_ delete the IosApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteIosApp */
		immediate?: boolean | null;

		/** If set to true, the request is only validated. The App will _not_ be removed. */
		validateOnly?: boolean | null;
	}
	export interface RemoveIosAppRequestFormProperties {

		/** If set to true, and the App is not found, the request will succeed but no action will be taken on the server. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** Checksum provided in the IosApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Determines whether to _immediately_ delete the IosApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteIosApp */
		immediate: FormControl<boolean | null | undefined>,

		/** If set to true, the request is only validated. The App will _not_ be removed. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoveIosAppRequestFormGroup() {
		return new FormGroup<RemoveIosAppRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			immediate: new FormControl<boolean | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RemoveWebAppRequest {

		/** If set to true, and the App is not found, the request will succeed but no action will be taken on the server. */
		allowMissing?: boolean | null;

		/** Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Determines whether to _immediately_ delete the WebApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteWebApp */
		immediate?: boolean | null;

		/** If set to true, the request is only validated. The App will _not_ be removed. */
		validateOnly?: boolean | null;
	}
	export interface RemoveWebAppRequestFormProperties {

		/** If set to true, and the App is not found, the request will succeed but no action will be taken on the server. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Determines whether to _immediately_ delete the WebApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteWebApp */
		immediate: FormControl<boolean | null | undefined>,

		/** If set to true, the request is only validated. The App will _not_ be removed. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoveWebAppRequestFormGroup() {
		return new FormGroup<RemoveWebAppRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			immediate: new FormControl<boolean | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SearchFirebaseAppsResponse {

		/** One page of results from a call to `SearchFirebaseApps`. */
		apps?: Array<FirebaseAppInfo>;

		/** If the result list is too large to fit in a single response, then a token is returned. This token can be used in a subsequent calls to `SearchFirebaseApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;
	}
	export interface SearchFirebaseAppsResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. This token can be used in a subsequent calls to `SearchFirebaseApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchFirebaseAppsResponseFormGroup() {
		return new FormGroup<SearchFirebaseAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Wire-format for a Status object */
	export interface StatusProto {

		/**
		 * The canonical error code (see codes.proto) that most closely corresponds to this status. This may be missing, and in the common case of the generic space, it definitely will be.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		canonicalCode?: number | null;

		/**
		 * Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** Detail message */
		message?: string | null;

		/** This is proto2's version of MessageSet. */
		messageSet?: MessageSet;

		/** The following are usually only present when code != 0 Space to which this status belongs */
		space?: string | null;
	}

	/** Wire-format for a Status object */
	export interface StatusProtoFormProperties {

		/**
		 * The canonical error code (see codes.proto) that most closely corresponds to this status. This may be missing, and in the common case of the generic space, it definitely will be.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		canonicalCode: FormControl<number | null | undefined>,

		/**
		 * Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** Detail message */
		message: FormControl<string | null | undefined>,

		/** The following are usually only present when code != 0 Space to which this status belongs */
		space: FormControl<string | null | undefined>,
	}
	export function CreateStatusProtoFormGroup() {
		return new FormGroup<StatusProtoFormProperties>({
			canonicalCode: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			space: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UndeleteAndroidAppRequest {

		/** Checksum provided in the AndroidApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** If set to true, the request is only validated. The App will _not_ be undeleted. */
		validateOnly?: boolean | null;
	}
	export interface UndeleteAndroidAppRequestFormProperties {

		/** Checksum provided in the AndroidApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** If set to true, the request is only validated. The App will _not_ be undeleted. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUndeleteAndroidAppRequestFormGroup() {
		return new FormGroup<UndeleteAndroidAppRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UndeleteIosAppRequest {

		/** Checksum provided in the IosApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** If set to true, the request is only validated. The App will _not_ be undeleted. */
		validateOnly?: boolean | null;
	}
	export interface UndeleteIosAppRequestFormProperties {

		/** Checksum provided in the IosApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** If set to true, the request is only validated. The App will _not_ be undeleted. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUndeleteIosAppRequestFormGroup() {
		return new FormGroup<UndeleteIosAppRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UndeleteWebAppRequest {

		/** Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** If set to true, the request is only validated. The App will _not_ be undeleted. */
		validateOnly?: boolean | null;
	}
	export interface UndeleteWebAppRequestFormProperties {

		/** Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** If set to true, the request is only validated. The App will _not_ be undeleted. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUndeleteWebAppRequestFormGroup() {
		return new FormGroup<UndeleteWebAppRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration metadata of a single Firebase App for the web. */
	export interface WebAppConfig {

		/** The [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key associated with the `WebApp`. Note that this value is _not_ the [`apiKeyId`](../projects.webApps#WebApp.FIELDS.api_key_id) (the UID) of the API key associated with the `WebApp`. */
		apiKey?: string | null;

		/** Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. */
		appId?: string | null;

		/** The domain Firebase Auth configures for OAuth redirects, in the format: PROJECT_ID.firebaseapp.com */
		authDomain?: string | null;

		/** **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database URL. */
		databaseURL?: string | null;

		/** **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. */
		locationId?: string | null;

		/** The unique Google-assigned identifier of the Google Analytics web stream associated with the `WebApp`. Firebase SDKs use this ID to interact with Google Analytics APIs. This field is only present if the `WebApp` is linked to a web stream in a Google Analytics App + Web property. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153). To generate a `measurementId` and link the `WebApp` with a Google Analytics web stream, call [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics). For apps using the Firebase JavaScript SDK v7.20.0 and later, Firebase dynamically fetches the `measurementId` when your app initializes Analytics. Having this ID in your config object is optional, but it does serve as a fallback in the rare case that the dynamic fetch fails. */
		measurementId?: string | null;

		/** The sender ID for use with Firebase Cloud Messaging. */
		messagingSenderId?: string | null;

		/** Immutable. A user-assigned unique identifier for the `FirebaseProject`. */
		projectId?: string | null;

		/** **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket name. */
		storageBucket?: string | null;
	}

	/** Configuration metadata of a single Firebase App for the web. */
	export interface WebAppConfigFormProperties {

		/** The [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key associated with the `WebApp`. Note that this value is _not_ the [`apiKeyId`](../projects.webApps#WebApp.FIELDS.api_key_id) (the UID) of the API key associated with the `WebApp`. */
		apiKey: FormControl<string | null | undefined>,

		/** Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. */
		appId: FormControl<string | null | undefined>,

		/** The domain Firebase Auth configures for OAuth redirects, in the format: PROJECT_ID.firebaseapp.com */
		authDomain: FormControl<string | null | undefined>,

		/** **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database URL. */
		databaseURL: FormControl<string | null | undefined>,

		/** **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. */
		locationId: FormControl<string | null | undefined>,

		/** The unique Google-assigned identifier of the Google Analytics web stream associated with the `WebApp`. Firebase SDKs use this ID to interact with Google Analytics APIs. This field is only present if the `WebApp` is linked to a web stream in a Google Analytics App + Web property. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153). To generate a `measurementId` and link the `WebApp` with a Google Analytics web stream, call [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics). For apps using the Firebase JavaScript SDK v7.20.0 and later, Firebase dynamically fetches the `measurementId` when your app initializes Analytics. Having this ID in your config object is optional, but it does serve as a fallback in the rare case that the dynamic fetch fails. */
		measurementId: FormControl<string | null | undefined>,

		/** The sender ID for use with Firebase Cloud Messaging. */
		messagingSenderId: FormControl<string | null | undefined>,

		/** Immutable. A user-assigned unique identifier for the `FirebaseProject`. */
		projectId: FormControl<string | null | undefined>,

		/** **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket name. */
		storageBucket: FormControl<string | null | undefined>,
	}
	export function CreateWebAppConfigFormGroup() {
		return new FormGroup<WebAppConfigFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			authDomain: new FormControl<string | null | undefined>(undefined),
			databaseURL: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			measurementId: new FormControl<string | null | undefined>(undefined),
			messagingSenderId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			storageBucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists each [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added to it. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added.
		 * Get v1beta1/availableProjects
		 * @param {number} pageSize The maximum number of Projects to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. This value cannot be negative.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token returned from a previous call to `ListAvailableProjects` indicating where in the set of Projects to resume listing.
		 * @return {ListAvailableProjectsResponse} Successful response
		 */
		Firebase_availableProjects_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAvailableProjectsResponse> {
			return this.http.get<ListAvailableProjectsResponse>(this.baseUri + 'v1beta1/availableProjects?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.
		 * Get v1beta1/projects
		 * @param {number} pageSize The maximum number of Projects to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. This value cannot be negative.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token returned from a previous call to `ListFirebaseProjects` indicating where in the set of Projects to resume listing.
		 * @param {boolean} showDeleted Optional. Controls whether Projects in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Projects will be returned.
		 * @return {ListFirebaseProjectsResponse} Successful response
		 */
		Firebase_projects_list(pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListFirebaseProjectsResponse> {
			return this.http.get<ListFirebaseProjectsResponse>(this.baseUri + 'v1beta1/projects?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Removes a ShaCertificate from the specified AndroidApp.
		 * Delete v1beta1/{name}
		 * @param {string} name The resource name of the ShaCertificate to remove from the parent AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID /sha/SHA_HASH Refer to the `ShaCertificate` [`name`](../projects.androidApps.sha#ShaCertificate.FIELDS.name) field for details about PROJECT_IDENTIFIER, APP_ID, and SHA_HASH values. You can obtain the full resource name of the `ShaCertificate` from the response of [`ListShaCertificates`](../projects.androidApps.sha/list) or the original [`CreateShaCertificate`](../projects.androidApps.sha/create).
		 * @return {Empty} Successful response
		 */
		Firebase_projects_androidApps_sha_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the configuration artifact associated with the specified WebApp.
		 * Get v1beta1/{name}
		 * @param {string} name The resource name of the WebApp configuration to download, in the format: projects/PROJECT_IDENTIFIER/webApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the `WebApp` [`name`](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
		 * @return {WebAppConfig} Successful response
		 */
		Firebase_projects_webApps_getConfig(name: string): Observable<WebAppConfig> {
			return this.http.get<WebAppConfig>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the attributes of the specified WebApp.
		 * Patch v1beta1/{name}
		 * @param {string} name The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)).
		 * @param {string} updateMask Specifies which fields of the WebApp to update. Note that the following fields are immutable: `name`, `app_id`, and `project_id`. To update `state`, use any of the following endpoints: RemoveWebApp or UndeleteWebApp.
		 * @return {WebApp} Successful response
		 */
		Firebase_projects_webApps_patch(name: string, updateMask: string | null | undefined, requestBody: WebApp): Observable<WebApp> {
			return this.http.patch<WebApp>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified WebApp from the FirebaseProject.
		 * Post v1beta1/{name}:remove
		 * @param {string} name Required. The resource name of the WebApp, in the format: projects/ PROJECT_IDENTIFIER/webApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the WebApp [name](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
		 * @return {Operation} Successful response
		 */
		Firebase_projects_webApps_remove(name: string, requestBody: RemoveWebAppRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':remove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores the specified WebApp to the FirebaseProject.
		 * Post v1beta1/{name}:undelete
		 * @param {string} name Required. The resource name of the WebApp, in the format: projects/ PROJECT_IDENTIFIER/webApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the WebApp [name](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
		 * @return {Operation} Successful response
		 */
		Firebase_projects_webApps_undelete(name: string, requestBody: UndeleteWebAppRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
		 * Get v1beta1/{parent}/androidApps
		 * @param {string} parent The resource name of the parent FirebaseProject for which to list each associated AndroidApp, in the format: projects/PROJECT_IDENTIFIER /androidApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @param {number} pageSize The maximum number of Apps to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token returned from a previous call to `ListAndroidApps` indicating where in the set of Apps to resume listing.
		 * @param {boolean} showDeleted Controls whether Apps in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Apps will be returned.
		 * @return {ListAndroidAppsResponse} Successful response
		 */
		Firebase_projects_androidApps_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListAndroidAppsResponse> {
			return this.http.get<ListAndroidAppsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/androidApps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
		 * Post v1beta1/{parent}/androidApps
		 * @param {string} parent The resource name of the parent FirebaseProject in which to create an AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @return {Operation} Successful response
		 */
		Firebase_projects_androidApps_create(parent: string, requestBody: AndroidApp): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/androidApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * **DEPRECATED.** _Instead, use the applicable resource-specific REST API (or associated documentation, as needed) to determine valid locations for each resource used in your Project._ Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.
		 * Get v1beta1/{parent}/availableLocations
		 * @param {string} parent The FirebaseProject for which to list GCP resource locations, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. If no unique project identifier is specified (that is, `projects/-`), the returned list does not take into account org-specific or project-specific location restrictions.
		 * @param {number} pageSize The maximum number of locations to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. This value cannot be negative.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token returned from a previous call to `ListAvailableLocations` indicating where in the list of locations to resume listing.
		 * @return {ListAvailableLocationsResponse} Successful response
		 */
		Firebase_projects_availableLocations_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAvailableLocationsResponse> {
			return this.http.get<ListAvailableLocationsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/availableLocations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * **DEPRECATED.** _Instead, use the applicable resource-specific REST API to set the location for each resource used in your Project._ Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.
		 * Post v1beta1/{parent}/defaultLocation:finalize
		 * @param {string} parent The resource name of the FirebaseProject for which the default GCP resource location will be set, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @return {Operation} Successful response
		 */
		Firebase_projects_defaultLocation_finalize(parent: string, requestBody: FinalizeDefaultLocationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/defaultLocation:finalize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
		 * Get v1beta1/{parent}/iosApps
		 * @param {string} parent The resource name of the parent FirebaseProject for which to list each associated IosApp, in the format: projects/PROJECT_IDENTIFIER/iosApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @param {number} pageSize The maximum number of Apps to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token returned from a previous call to `ListIosApps` indicating where in the set of Apps to resume listing.
		 * @param {boolean} showDeleted Controls whether Apps in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Apps will be returned.
		 * @return {ListIosAppsResponse} Successful response
		 */
		Firebase_projects_iosApps_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListIosAppsResponse> {
			return this.http.get<ListIosAppsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/iosApps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
		 * Post v1beta1/{parent}/iosApps
		 * @param {string} parent The resource name of the parent FirebaseProject in which to create an IosApp, in the format: projects/PROJECT_IDENTIFIER/iosApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @return {Operation} Successful response
		 */
		Firebase_projects_iosApps_create(parent: string, requestBody: IosApp): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/iosApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.
		 * Get v1beta1/{parent}/sha
		 * @param {string} parent The resource name of the parent AndroidApp for which to list each associated ShaCertificate, in the format: projects/PROJECT_IDENTIFIER /androidApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
		 * @return {ListShaCertificatesResponse} Successful response
		 */
		Firebase_projects_androidApps_sha_list(parent: string): Observable<ListShaCertificatesResponse> {
			return this.http.get<ListShaCertificatesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sha', {});
		}

		/**
		 * Adds a ShaCertificate to the specified AndroidApp.
		 * Post v1beta1/{parent}/sha
		 * @param {string} parent The resource name of the parent AndroidApp to which to add a ShaCertificate, in the format: projects/PROJECT_IDENTIFIER/androidApps/ APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
		 * @return {ShaCertificate} Successful response
		 */
		Firebase_projects_androidApps_sha_create(parent: string, requestBody: ShaCertificate): Observable<ShaCertificate> {
			return this.http.post<ShaCertificate>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sha', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
		 * Get v1beta1/{parent}/webApps
		 * @param {string} parent The resource name of the parent FirebaseProject for which to list each associated WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @param {number} pageSize The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token returned from a previous call to `ListWebApps` indicating where in the set of Apps to resume listing.
		 * @param {boolean} showDeleted Controls whether Apps in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Apps will be returned.
		 * @return {ListWebAppsResponse} Successful response
		 */
		Firebase_projects_webApps_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListWebAppsResponse> {
			return this.http.get<ListWebAppsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/webApps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
		 * Post v1beta1/{parent}/webApps
		 * @param {string} parent The resource name of the parent FirebaseProject in which to create a WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @return {Operation} Successful response
		 */
		Firebase_projects_webApps_create(parent: string, requestBody: WebApp): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/webApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).
		 * Post v1beta1/{parent}:addGoogleAnalytics
		 * @param {string} parent The resource name of the FirebaseProject to link to an existing Google Analytics account, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @return {Operation} Successful response
		 */
		Firebase_projects_addGoogleAnalytics(parent: string, requestBody: AddGoogleAnalyticsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':addGoogleAnalytics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.
		 * Post v1beta1/{parent}:removeAnalytics
		 * @param {string} parent The resource name of the FirebaseProject to unlink from its Google Analytics account, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @return {Empty} Successful response
		 */
		Firebase_projects_removeAnalytics(parent: string, requestBody: RemoveAnalyticsRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':removeAnalytics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).
		 * Get v1beta1/{parent}:searchApps
		 * @param {string} parent The parent FirebaseProject for which to list Apps, in the format: projects/ PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @param {string} filter A query string compatible with Google's [AIP-160 standard](https://google.aip.dev/160). Use any of the following fields in a query: * [`app_id`](../projects/searchApps#FirebaseAppInfo.FIELDS.app_id) * [`namespace`](../projects/searchApps#FirebaseAppInfo.FIELDS.namespace) * [`platform`](../projects/searchApps#FirebaseAppInfo.FIELDS.platform) This query also supports the following "virtual" fields. These are fields which are not actually part of the returned resource object, but they can be queried as if they are pre-populated with specific values. * `sha1_hash` or `sha1_hashes`: This field is considered to be a _repeated_ `string` field, populated with the list of all SHA-1 certificate fingerprints registered with the AndroidApp. This list is empty if the App is not an `AndroidApp`. * `sha256_hash` or `sha256_hashes`: This field is considered to be a _repeated_ `string` field, populated with the list of all SHA-256 certificate fingerprints registered with the AndroidApp. This list is empty if the App is not an `AndroidApp`. * `app_store_id`: This field is considered to be a _singular_ `string` field, populated with the Apple App Store ID registered with the IosApp. This field is empty if the App is not an `IosApp`. * `team_id`: This field is considered to be a _singular_ `string` field, populated with the Apple team ID registered with the IosApp. This field is empty if the App is not an `IosApp`.
		 * @param {number} pageSize The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. This value cannot be negative.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token returned from a previous call to `SearchFirebaseApps` indicating where in the set of Apps to resume listing.
		 * @param {boolean} showDeleted Controls whether Apps in the DELETED state should be returned. If not specified, only `ACTIVE` Apps will be returned.
		 * @return {SearchFirebaseAppsResponse} Successful response
		 */
		Firebase_projects_searchApps(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<SearchFirebaseAppsResponse> {
			return this.http.get<SearchFirebaseAppsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':searchApps&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.
		 * Post v1beta1/{project}:addFirebase
		 * @param {string} project The resource name of the GCP `Project` to which Firebase resources will be added, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. After calling `AddFirebase`, the unique Project identifiers ( [`projectNumber`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_number) and [`projectId`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_id)) of the underlying GCP `Project` are also the identifiers of the FirebaseProject.
		 * @return {Operation} Successful response
		 */
		Firebase_projects_addFirebase(project: string, requestBody: AddFirebaseRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (project == null ? '' : encodeURIComponent(project)) + ':addFirebase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

