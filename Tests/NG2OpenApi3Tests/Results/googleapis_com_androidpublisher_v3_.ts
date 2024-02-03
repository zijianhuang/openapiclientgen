import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an Abi. */
	export interface Abi {

		/** Alias for an abi. */
		alias?: AbiAlias | null;
	}

	/** Represents an Abi. */
	export interface AbiFormProperties {

		/** Alias for an abi. */
		alias: FormControl<AbiAlias | null | undefined>,
	}
	export function CreateAbiFormGroup() {
		return new FormGroup<AbiFormProperties>({
			alias: new FormControl<AbiAlias | null | undefined>(undefined),
		});

	}

	export enum AbiAlias { UNSPECIFIED_CPU_ARCHITECTURE = 'UNSPECIFIED_CPU_ARCHITECTURE', ARMEABI = 'ARMEABI', ARMEABI_V7A = 'ARMEABI_V7A', ARM64_V8A = 'ARM64_V8A', X86 = 'X86', X86_64 = 'X86_64', RISCV64 = 'RISCV64' }


	/** Targeting based on Abi. */
	export interface AbiTargeting {

		/** Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. */
		alternatives?: Array<Abi>;

		/** Value of an abi. */
		value?: Array<Abi>;
	}

	/** Targeting based on Abi. */
	export interface AbiTargetingFormProperties {
	}
	export function CreateAbiTargetingFormGroup() {
		return new FormGroup<AbiTargetingFormProperties>({
		});

	}


	/** Represents a targeting rule of the form: User never had {scope} before. */
	export interface AcquisitionTargetingRule {

		/** Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement. */
		scope?: TargetingRuleScope;
	}

	/** Represents a targeting rule of the form: User never had {scope} before. */
	export interface AcquisitionTargetingRuleFormProperties {
	}
	export function CreateAcquisitionTargetingRuleFormGroup() {
		return new FormGroup<AcquisitionTargetingRuleFormProperties>({
		});

	}


	/** Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement. */
	export interface TargetingRuleScope {

		/** The scope of the current targeting rule is the subscription with the specified subscription ID. Must be a subscription within the same parent app. */
		specificSubscriptionInApp?: string | null;
	}

	/** Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement. */
	export interface TargetingRuleScopeFormProperties {

		/** The scope of the current targeting rule is the subscription with the specified subscription ID. Must be a subscription within the same parent app. */
		specificSubscriptionInApp: FormControl<string | null | undefined>,
	}
	export function CreateTargetingRuleScopeFormGroup() {
		return new FormGroup<TargetingRuleScopeFormProperties>({
			specificSubscriptionInApp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ActivateBasePlan. */
	export interface ActivateBasePlanRequest {

		/** Required. The unique base plan ID of the base plan to activate. */
		basePlanId?: string | null;

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance?: ActivateBasePlanRequestLatencyTolerance | null;

		/** Required. The parent app (package name) of the base plan to activate. */
		packageName?: string | null;

		/** Required. The parent subscription (ID) of the base plan to activate. */
		productId?: string | null;
	}

	/** Request message for ActivateBasePlan. */
	export interface ActivateBasePlanRequestFormProperties {

		/** Required. The unique base plan ID of the base plan to activate. */
		basePlanId: FormControl<string | null | undefined>,

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance: FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>,

		/** Required. The parent app (package name) of the base plan to activate. */
		packageName: FormControl<string | null | undefined>,

		/** Required. The parent subscription (ID) of the base plan to activate. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateActivateBasePlanRequestFormGroup() {
		return new FormGroup<ActivateBasePlanRequestFormProperties>({
			basePlanId: new FormControl<string | null | undefined>(undefined),
			latencyTolerance: new FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivateBasePlanRequestLatencyTolerance { PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED = 'PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED', PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE = 'PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE', PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT = 'PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT' }


	/** Request message for ActivateSubscriptionOffer. */
	export interface ActivateSubscriptionOfferRequest {

		/** Required. The parent base plan (ID) of the offer to activate. */
		basePlanId?: string | null;

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance?: ActivateBasePlanRequestLatencyTolerance | null;

		/** Required. The unique offer ID of the offer to activate. */
		offerId?: string | null;

		/** Required. The parent app (package name) of the offer to activate. */
		packageName?: string | null;

		/** Required. The parent subscription (ID) of the offer to activate. */
		productId?: string | null;
	}

	/** Request message for ActivateSubscriptionOffer. */
	export interface ActivateSubscriptionOfferRequestFormProperties {

		/** Required. The parent base plan (ID) of the offer to activate. */
		basePlanId: FormControl<string | null | undefined>,

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance: FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>,

		/** Required. The unique offer ID of the offer to activate. */
		offerId: FormControl<string | null | undefined>,

		/** Required. The parent app (package name) of the offer to activate. */
		packageName: FormControl<string | null | undefined>,

		/** Required. The parent subscription (ID) of the offer to activate. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateActivateSubscriptionOfferRequestFormGroup() {
		return new FormGroup<ActivateSubscriptionOfferRequestFormProperties>({
			basePlanId: new FormControl<string | null | undefined>(undefined),
			latencyTolerance: new FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for AddTargeting. */
	export interface AddTargetingRequest {

		/** Update type for targeting. Note it is always a subset Targeting. */
		targetingUpdate?: TargetingUpdate;
	}

	/** Request message for AddTargeting. */
	export interface AddTargetingRequestFormProperties {
	}
	export function CreateAddTargetingRequestFormGroup() {
		return new FormGroup<AddTargetingRequestFormProperties>({
		});

	}


	/** Update type for targeting. Note it is always a subset Targeting. */
	export interface TargetingUpdate {

		/** Object representation to describe all set of users. */
		allUsers?: AllUsers;

		/** Android api level targeting data for app recovery action targeting. */
		androidSdks?: AndroidSdks;

		/** Region targeting data for app recovery action targeting. */
		regions?: Regions;
	}

	/** Update type for targeting. Note it is always a subset Targeting. */
	export interface TargetingUpdateFormProperties {
	}
	export function CreateTargetingUpdateFormGroup() {
		return new FormGroup<TargetingUpdateFormProperties>({
		});

	}


	/** Object representation to describe all set of users. */
	export interface AllUsers {

		/** Required. Set to true if all set of users are needed. */
		isAllUsersRequested?: boolean | null;
	}

	/** Object representation to describe all set of users. */
	export interface AllUsersFormProperties {

		/** Required. Set to true if all set of users are needed. */
		isAllUsersRequested: FormControl<boolean | null | undefined>,
	}
	export function CreateAllUsersFormGroup() {
		return new FormGroup<AllUsersFormProperties>({
			isAllUsersRequested: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Android api level targeting data for app recovery action targeting. */
	export interface AndroidSdks {

		/** Android api levels of devices targeted by recovery action. See https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels for different api levels in android. */
		sdkLevels?: Array<string>;
	}

	/** Android api level targeting data for app recovery action targeting. */
	export interface AndroidSdksFormProperties {
	}
	export function CreateAndroidSdksFormGroup() {
		return new FormGroup<AndroidSdksFormProperties>({
		});

	}


	/** Region targeting data for app recovery action targeting. */
	export interface Regions {

		/** Regions targeted by the recovery action. Region codes are ISO 3166 Alpha-2 country codes. For example, US stands for United States of America. See https://www.iso.org/iso-3166-country-codes.html for the complete list of country codes. */
		regionCode?: Array<string>;
	}

	/** Region targeting data for app recovery action targeting. */
	export interface RegionsFormProperties {
	}
	export function CreateRegionsFormGroup() {
		return new FormGroup<RegionsFormProperties>({
		});

	}


	/** Response message for AddTargeting. */
	export interface AddTargetingResponse {
	}

	/** Response message for AddTargeting. */
	export interface AddTargetingResponseFormProperties {
	}
	export function CreateAddTargetingResponseFormGroup() {
		return new FormGroup<AddTargetingResponseFormProperties>({
		});

	}


	/** Information about an APK. The resource for ApksService. */
	export interface Apk {

		/** Represents the binary payload of an APK. */
		binary?: ApkBinary;

		/** The version code of the APK, as specified in the manifest file. */
		versionCode?: number | null;
	}

	/** Information about an APK. The resource for ApksService. */
	export interface ApkFormProperties {

		/** The version code of the APK, as specified in the manifest file. */
		versionCode: FormControl<number | null | undefined>,
	}
	export function CreateApkFormGroup() {
		return new FormGroup<ApkFormProperties>({
			versionCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the binary payload of an APK. */
	export interface ApkBinary {

		/** A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command. */
		sha1?: string | null;

		/** A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command. */
		sha256?: string | null;
	}

	/** Represents the binary payload of an APK. */
	export interface ApkBinaryFormProperties {

		/** A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command. */
		sha1: FormControl<string | null | undefined>,

		/** A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command. */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateApkBinaryFormGroup() {
		return new FormGroup<ApkBinaryFormProperties>({
			sha1: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of the created apks. */
	export interface ApkDescription {

		/** Holds data specific to Split APKs. */
		assetSliceMetadata?: SplitApkMetadata;

		/** Holds data specific to Split APKs. */
		instantApkMetadata?: SplitApkMetadata;

		/** Path of the Apk, will be in the following format: .apk where DownloadId is the ID used to download the apk using GeneratedApks.Download API. */
		path?: string | null;

		/** Holds data specific to Split APKs. */
		splitApkMetadata?: SplitApkMetadata;

		/** Holds data specific to Standalone APKs. */
		standaloneApkMetadata?: StandaloneApkMetadata;

		/** Represents a set of apk-level targetings. */
		targeting?: ApkTargeting;
	}

	/** Description of the created apks. */
	export interface ApkDescriptionFormProperties {

		/** Path of the Apk, will be in the following format: .apk where DownloadId is the ID used to download the apk using GeneratedApks.Download API. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateApkDescriptionFormGroup() {
		return new FormGroup<ApkDescriptionFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds data specific to Split APKs. */
	export interface SplitApkMetadata {

		/** Indicates whether this APK is the main split of the module. */
		isMasterSplit?: boolean | null;

		/** Id of the split. */
		splitId?: string | null;
	}

	/** Holds data specific to Split APKs. */
	export interface SplitApkMetadataFormProperties {

		/** Indicates whether this APK is the main split of the module. */
		isMasterSplit: FormControl<boolean | null | undefined>,

		/** Id of the split. */
		splitId: FormControl<string | null | undefined>,
	}
	export function CreateSplitApkMetadataFormGroup() {
		return new FormGroup<SplitApkMetadataFormProperties>({
			isMasterSplit: new FormControl<boolean | null | undefined>(undefined),
			splitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds data specific to Standalone APKs. */
	export interface StandaloneApkMetadata {

		/** Names of the modules fused in this standalone APK. */
		fusedModuleName?: Array<string>;
	}

	/** Holds data specific to Standalone APKs. */
	export interface StandaloneApkMetadataFormProperties {
	}
	export function CreateStandaloneApkMetadataFormGroup() {
		return new FormGroup<StandaloneApkMetadataFormProperties>({
		});

	}


	/** Represents a set of apk-level targetings. */
	export interface ApkTargeting {

		/** Targeting based on Abi. */
		abiTargeting?: AbiTargeting;

		/** Targeting based on language. */
		languageTargeting?: LanguageTargeting;

		/** Targeting based on multiple abis. */
		multiAbiTargeting?: MultiAbiTargeting;

		/** Targeting based on screen density. */
		screenDensityTargeting?: ScreenDensityTargeting;

		/** Targeting based on sdk version. */
		sdkVersionTargeting?: SdkVersionTargeting;

		/** Targeting by a texture compression format. */
		textureCompressionFormatTargeting?: TextureCompressionFormatTargeting;
	}

	/** Represents a set of apk-level targetings. */
	export interface ApkTargetingFormProperties {
	}
	export function CreateApkTargetingFormGroup() {
		return new FormGroup<ApkTargetingFormProperties>({
		});

	}


	/** Targeting based on language. */
	export interface LanguageTargeting {

		/** Alternative languages. */
		alternatives?: Array<string>;

		/** ISO-639: 2 or 3 letter language code. */
		value?: Array<string>;
	}

	/** Targeting based on language. */
	export interface LanguageTargetingFormProperties {
	}
	export function CreateLanguageTargetingFormGroup() {
		return new FormGroup<LanguageTargetingFormProperties>({
		});

	}


	/** Targeting based on multiple abis. */
	export interface MultiAbiTargeting {

		/** Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. */
		alternatives?: Array<MultiAbi>;

		/** Value of a multi abi. */
		value?: Array<MultiAbi>;
	}

	/** Targeting based on multiple abis. */
	export interface MultiAbiTargetingFormProperties {
	}
	export function CreateMultiAbiTargetingFormGroup() {
		return new FormGroup<MultiAbiTargetingFormProperties>({
		});

	}


	/** Represents a list of apis. */
	export interface MultiAbi {

		/** A list of targeted ABIs, as represented by the Android Platform */
		abi?: Array<Abi>;
	}

	/** Represents a list of apis. */
	export interface MultiAbiFormProperties {
	}
	export function CreateMultiAbiFormGroup() {
		return new FormGroup<MultiAbiFormProperties>({
		});

	}


	/** Targeting based on screen density. */
	export interface ScreenDensityTargeting {

		/** Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. */
		alternatives?: Array<ScreenDensity>;

		/** Value of a screen density. */
		value?: Array<ScreenDensity>;
	}

	/** Targeting based on screen density. */
	export interface ScreenDensityTargetingFormProperties {
	}
	export function CreateScreenDensityTargetingFormGroup() {
		return new FormGroup<ScreenDensityTargetingFormProperties>({
		});

	}


	/** Represents a screen density. */
	export interface ScreenDensity {

		/** Alias for a screen density. */
		densityAlias?: ScreenDensityDensityAlias | null;

		/** Value for density dpi. */
		densityDpi?: number | null;
	}

	/** Represents a screen density. */
	export interface ScreenDensityFormProperties {

		/** Alias for a screen density. */
		densityAlias: FormControl<ScreenDensityDensityAlias | null | undefined>,

		/** Value for density dpi. */
		densityDpi: FormControl<number | null | undefined>,
	}
	export function CreateScreenDensityFormGroup() {
		return new FormGroup<ScreenDensityFormProperties>({
			densityAlias: new FormControl<ScreenDensityDensityAlias | null | undefined>(undefined),
			densityDpi: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ScreenDensityDensityAlias { DENSITY_UNSPECIFIED = 'DENSITY_UNSPECIFIED', NODPI = 'NODPI', LDPI = 'LDPI', MDPI = 'MDPI', TVDPI = 'TVDPI', HDPI = 'HDPI', XHDPI = 'XHDPI', XXHDPI = 'XXHDPI', XXXHDPI = 'XXXHDPI' }


	/** Targeting based on sdk version. */
	export interface SdkVersionTargeting {

		/** Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. */
		alternatives?: Array<SdkVersion>;

		/** Value of an sdk version. */
		value?: Array<SdkVersion>;
	}

	/** Targeting based on sdk version. */
	export interface SdkVersionTargetingFormProperties {
	}
	export function CreateSdkVersionTargetingFormGroup() {
		return new FormGroup<SdkVersionTargetingFormProperties>({
		});

	}


	/** Represents an sdk version. */
	export interface SdkVersion {

		/** Inclusive minimum value of an sdk version. */
		min?: number | null;
	}

	/** Represents an sdk version. */
	export interface SdkVersionFormProperties {

		/** Inclusive minimum value of an sdk version. */
		min: FormControl<number | null | undefined>,
	}
	export function CreateSdkVersionFormGroup() {
		return new FormGroup<SdkVersionFormProperties>({
			min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Targeting by a texture compression format. */
	export interface TextureCompressionFormatTargeting {

		/** List of alternative TCFs (TCFs targeted by the sibling splits). */
		alternatives?: Array<TextureCompressionFormat>;

		/** The list of targeted TCFs. Should not be empty. */
		value?: Array<TextureCompressionFormat>;
	}

	/** Targeting by a texture compression format. */
	export interface TextureCompressionFormatTargetingFormProperties {
	}
	export function CreateTextureCompressionFormatTargetingFormGroup() {
		return new FormGroup<TextureCompressionFormatTargetingFormProperties>({
		});

	}


	/** Represents texture compression format. */
	export interface TextureCompressionFormat {

		/** Alias for texture compression format. */
		alias?: TextureCompressionFormatAlias | null;
	}

	/** Represents texture compression format. */
	export interface TextureCompressionFormatFormProperties {

		/** Alias for texture compression format. */
		alias: FormControl<TextureCompressionFormatAlias | null | undefined>,
	}
	export function CreateTextureCompressionFormatFormGroup() {
		return new FormGroup<TextureCompressionFormatFormProperties>({
			alias: new FormControl<TextureCompressionFormatAlias | null | undefined>(undefined),
		});

	}

	export enum TextureCompressionFormatAlias { UNSPECIFIED_TEXTURE_COMPRESSION_FORMAT = 'UNSPECIFIED_TEXTURE_COMPRESSION_FORMAT', ETC1_RGB8 = 'ETC1_RGB8', PALETTED = 'PALETTED', THREE_DC = 'THREE_DC', ATC = 'ATC', LATC = 'LATC', DXT1 = 'DXT1', S3TC = 'S3TC', PVRTC = 'PVRTC', ASTC = 'ASTC', ETC2 = 'ETC2' }


	/** A set of apks representing a module. */
	export interface ApkSet {

		/** Description of the generated apks. */
		apkDescription?: Array<ApkDescription>;

		/** Metadata of a module. */
		moduleMetadata?: ModuleMetadata;
	}

	/** A set of apks representing a module. */
	export interface ApkSetFormProperties {
	}
	export function CreateApkSetFormGroup() {
		return new FormGroup<ApkSetFormProperties>({
		});

	}


	/** Metadata of a module. */
	export interface ModuleMetadata {

		/** Indicates the delivery type (e.g. on-demand) of the module. */
		deliveryType?: ModuleMetadataDeliveryType | null;

		/** Names of the modules that this module directly depends on. Each module implicitly depends on the base module. */
		dependencies?: Array<string>;

		/** Indicates the type of this feature module. */
		moduleType?: ModuleMetadataModuleType | null;

		/** Module name. */
		name?: string | null;

		/** Targeting on the module level. */
		targeting?: ModuleTargeting;
	}

	/** Metadata of a module. */
	export interface ModuleMetadataFormProperties {

		/** Indicates the delivery type (e.g. on-demand) of the module. */
		deliveryType: FormControl<ModuleMetadataDeliveryType | null | undefined>,

		/** Indicates the type of this feature module. */
		moduleType: FormControl<ModuleMetadataModuleType | null | undefined>,

		/** Module name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateModuleMetadataFormGroup() {
		return new FormGroup<ModuleMetadataFormProperties>({
			deliveryType: new FormControl<ModuleMetadataDeliveryType | null | undefined>(undefined),
			moduleType: new FormControl<ModuleMetadataModuleType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModuleMetadataDeliveryType { UNKNOWN_DELIVERY_TYPE = 'UNKNOWN_DELIVERY_TYPE', INSTALL_TIME = 'INSTALL_TIME', ON_DEMAND = 'ON_DEMAND', FAST_FOLLOW = 'FAST_FOLLOW' }

	export enum ModuleMetadataModuleType { UNKNOWN_MODULE_TYPE = 'UNKNOWN_MODULE_TYPE', FEATURE_MODULE = 'FEATURE_MODULE' }


	/** Targeting on the module level. */
	export interface ModuleTargeting {

		/** Targeting for device features. */
		deviceFeatureTargeting?: Array<DeviceFeatureTargeting>;

		/** Targeting based on sdk version. */
		sdkVersionTargeting?: SdkVersionTargeting;

		/** Describes an inclusive/exclusive list of country codes that module targets. */
		userCountriesTargeting?: UserCountriesTargeting;
	}

	/** Targeting on the module level. */
	export interface ModuleTargetingFormProperties {
	}
	export function CreateModuleTargetingFormGroup() {
		return new FormGroup<ModuleTargetingFormProperties>({
		});

	}


	/** Targeting for a device feature. */
	export interface DeviceFeatureTargeting {

		/** Represents a device feature. */
		requiredFeature?: DeviceFeature;
	}

	/** Targeting for a device feature. */
	export interface DeviceFeatureTargetingFormProperties {
	}
	export function CreateDeviceFeatureTargetingFormGroup() {
		return new FormGroup<DeviceFeatureTargetingFormProperties>({
		});

	}


	/** Represents a device feature. */
	export interface DeviceFeature {

		/** Name of the feature. */
		featureName?: string | null;

		/** The feature version specified by android:glEsVersion or android:version in in the AndroidManifest. */
		featureVersion?: number | null;
	}

	/** Represents a device feature. */
	export interface DeviceFeatureFormProperties {

		/** Name of the feature. */
		featureName: FormControl<string | null | undefined>,

		/** The feature version specified by android:glEsVersion or android:version in in the AndroidManifest. */
		featureVersion: FormControl<number | null | undefined>,
	}
	export function CreateDeviceFeatureFormGroup() {
		return new FormGroup<DeviceFeatureFormProperties>({
			featureName: new FormControl<string | null | undefined>(undefined),
			featureVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes an inclusive/exclusive list of country codes that module targets. */
	export interface UserCountriesTargeting {

		/** List of country codes in the two-letter CLDR territory format. */
		countryCodes?: Array<string>;

		/** Indicates if the list above is exclusive. */
		exclude?: boolean | null;
	}

	/** Describes an inclusive/exclusive list of country codes that module targets. */
	export interface UserCountriesTargetingFormProperties {

		/** Indicates if the list above is exclusive. */
		exclude: FormControl<boolean | null | undefined>,
	}
	export function CreateUserCountriesTargetingFormGroup() {
		return new FormGroup<UserCountriesTargetingFormProperties>({
			exclude: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to create a new externally hosted APK. */
	export interface ApksAddExternallyHostedRequest {

		/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations. */
		externallyHostedApk?: ExternallyHostedApk;
	}

	/** Request to create a new externally hosted APK. */
	export interface ApksAddExternallyHostedRequestFormProperties {
	}
	export function CreateApksAddExternallyHostedRequestFormGroup() {
		return new FormGroup<ApksAddExternallyHostedRequestFormProperties>({
		});

	}


	/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations. */
	export interface ExternallyHostedApk {

		/** The application label. */
		applicationLabel?: string | null;

		/** A certificate (or array of certificates if a certificate-chain is used) used to sign this APK, represented as a base64 encoded byte array. */
		certificateBase64s?: Array<string>;

		/** The URL at which the APK is hosted. This must be an https URL. */
		externallyHostedUrl?: string | null;

		/** The sha1 checksum of this APK, represented as a base64 encoded byte array. */
		fileSha1Base64?: string | null;

		/** The sha256 checksum of this APK, represented as a base64 encoded byte array. */
		fileSha256Base64?: string | null;

		/** The file size in bytes of this APK. */
		fileSize?: string | null;

		/** The icon image from the APK, as a base64 encoded byte array. */
		iconBase64?: string | null;

		/** The maximum SDK supported by this APK (optional). */
		maximumSdk?: number | null;

		/** The minimum SDK targeted by this APK. */
		minimumSdk?: number | null;

		/** The native code environments supported by this APK (optional). */
		nativeCodes?: Array<string>;

		/** The package name. */
		packageName?: string | null;

		/** The features required by this APK (optional). */
		usesFeatures?: Array<string>;

		/** The permissions requested by this APK. */
		usesPermissions?: Array<UsesPermission>;

		/** The version code of this APK. */
		versionCode?: number | null;

		/** The version name of this APK. */
		versionName?: string | null;
	}

	/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations. */
	export interface ExternallyHostedApkFormProperties {

		/** The application label. */
		applicationLabel: FormControl<string | null | undefined>,

		/** The URL at which the APK is hosted. This must be an https URL. */
		externallyHostedUrl: FormControl<string | null | undefined>,

		/** The sha1 checksum of this APK, represented as a base64 encoded byte array. */
		fileSha1Base64: FormControl<string | null | undefined>,

		/** The sha256 checksum of this APK, represented as a base64 encoded byte array. */
		fileSha256Base64: FormControl<string | null | undefined>,

		/** The file size in bytes of this APK. */
		fileSize: FormControl<string | null | undefined>,

		/** The icon image from the APK, as a base64 encoded byte array. */
		iconBase64: FormControl<string | null | undefined>,

		/** The maximum SDK supported by this APK (optional). */
		maximumSdk: FormControl<number | null | undefined>,

		/** The minimum SDK targeted by this APK. */
		minimumSdk: FormControl<number | null | undefined>,

		/** The package name. */
		packageName: FormControl<string | null | undefined>,

		/** The version code of this APK. */
		versionCode: FormControl<number | null | undefined>,

		/** The version name of this APK. */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateExternallyHostedApkFormGroup() {
		return new FormGroup<ExternallyHostedApkFormProperties>({
			applicationLabel: new FormControl<string | null | undefined>(undefined),
			externallyHostedUrl: new FormControl<string | null | undefined>(undefined),
			fileSha1Base64: new FormControl<string | null | undefined>(undefined),
			fileSha256Base64: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<string | null | undefined>(undefined),
			iconBase64: new FormControl<string | null | undefined>(undefined),
			maximumSdk: new FormControl<number | null | undefined>(undefined),
			minimumSdk: new FormControl<number | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<number | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A permission used by this APK. */
	export interface UsesPermission {

		/** Optionally, the maximum SDK version for which the permission is required. */
		maxSdkVersion?: number | null;

		/** The name of the permission requested. */
		name?: string | null;
	}

	/** A permission used by this APK. */
	export interface UsesPermissionFormProperties {

		/** Optionally, the maximum SDK version for which the permission is required. */
		maxSdkVersion: FormControl<number | null | undefined>,

		/** The name of the permission requested. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUsesPermissionFormGroup() {
		return new FormGroup<UsesPermissionFormProperties>({
			maxSdkVersion: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for creating a new externally hosted APK. */
	export interface ApksAddExternallyHostedResponse {

		/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations. */
		externallyHostedApk?: ExternallyHostedApk;
	}

	/** Response for creating a new externally hosted APK. */
	export interface ApksAddExternallyHostedResponseFormProperties {
	}
	export function CreateApksAddExternallyHostedResponseFormGroup() {
		return new FormGroup<ApksAddExternallyHostedResponseFormProperties>({
		});

	}


	/** Response listing all APKs. */
	export interface ApksListResponse {

		/** All APKs. */
		apks?: Array<Apk>;

		/** The kind of this response ("androidpublisher#apksListResponse"). */
		kind?: string | null;
	}

	/** Response listing all APKs. */
	export interface ApksListResponseFormProperties {

		/** The kind of this response ("androidpublisher#apksListResponse"). */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateApksListResponseFormGroup() {
		return new FormGroup<ApksListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The app details. The resource for DetailsService. */
	export interface AppDetails {

		/** The user-visible support email for this app. */
		contactEmail?: string | null;

		/** The user-visible support telephone number for this app. */
		contactPhone?: string | null;

		/** The user-visible website for this app. */
		contactWebsite?: string | null;

		/** Default language code, in BCP 47 format (eg "en-US"). */
		defaultLanguage?: string | null;
	}

	/** The app details. The resource for DetailsService. */
	export interface AppDetailsFormProperties {

		/** The user-visible support email for this app. */
		contactEmail: FormControl<string | null | undefined>,

		/** The user-visible support telephone number for this app. */
		contactPhone: FormControl<string | null | undefined>,

		/** The user-visible website for this app. */
		contactWebsite: FormControl<string | null | undefined>,

		/** Default language code, in BCP 47 format (eg "en-US"). */
		defaultLanguage: FormControl<string | null | undefined>,
	}
	export function CreateAppDetailsFormGroup() {
		return new FormGroup<AppDetailsFormProperties>({
			contactEmail: new FormControl<string | null | undefined>(undefined),
			contactPhone: new FormControl<string | null | undefined>(undefined),
			contactWebsite: new FormControl<string | null | undefined>(undefined),
			defaultLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An app edit. The resource for EditsService. */
	export interface AppEdit {

		/** Output only. The time (as seconds since Epoch) at which the edit will expire and will be no longer valid for use. */
		expiryTimeSeconds?: string | null;

		/** Output only. Identifier of the edit. Can be used in subsequent API calls. */
		id?: string | null;
	}

	/** An app edit. The resource for EditsService. */
	export interface AppEditFormProperties {

		/** Output only. The time (as seconds since Epoch) at which the edit will expire and will be no longer valid for use. */
		expiryTimeSeconds: FormControl<string | null | undefined>,

		/** Output only. Identifier of the edit. Can be used in subsequent API calls. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAppEditFormGroup() {
		return new FormGroup<AppEditFormProperties>({
			expiryTimeSeconds: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an app recovery action. */
	export interface AppRecoveryAction {

		/** ID corresponding to the app recovery action. */
		appRecoveryId?: string | null;

		/** Timestamp of when the app recovery action is canceled by the developer. Only set if the recovery action has been canceled. */
		cancelTime?: string | null;

		/** Timestamp of when the app recovery action is created by the developer. It is always set after creation of the recovery action. */
		createTime?: string | null;

		/** Timestamp of when the app recovery action is deployed to the users. Only set if the recovery action has been deployed. */
		deployTime?: string | null;

		/** Timestamp of when the developer last updated recovery action. In case the action is cancelled, it corresponds to cancellation time. It is always set after creation of the recovery action. */
		lastUpdateTime?: string | null;

		/** Data related to Remote In-App Update action such as recovered user count, affected user count etc. */
		remoteInAppUpdateData?: RemoteInAppUpdateData;

		/** The status of the recovery action. */
		status?: AppRecoveryActionStatus | null;

		/** Targeting details for a recovery action such as regions, android sdk levels, app versions etc. */
		targeting?: Targeting;
	}

	/** Information about an app recovery action. */
	export interface AppRecoveryActionFormProperties {

		/** ID corresponding to the app recovery action. */
		appRecoveryId: FormControl<string | null | undefined>,

		/** Timestamp of when the app recovery action is canceled by the developer. Only set if the recovery action has been canceled. */
		cancelTime: FormControl<string | null | undefined>,

		/** Timestamp of when the app recovery action is created by the developer. It is always set after creation of the recovery action. */
		createTime: FormControl<string | null | undefined>,

		/** Timestamp of when the app recovery action is deployed to the users. Only set if the recovery action has been deployed. */
		deployTime: FormControl<string | null | undefined>,

		/** Timestamp of when the developer last updated recovery action. In case the action is cancelled, it corresponds to cancellation time. It is always set after creation of the recovery action. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** The status of the recovery action. */
		status: FormControl<AppRecoveryActionStatus | null | undefined>,
	}
	export function CreateAppRecoveryActionFormGroup() {
		return new FormGroup<AppRecoveryActionFormProperties>({
			appRecoveryId: new FormControl<string | null | undefined>(undefined),
			cancelTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deployTime: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AppRecoveryActionStatus | null | undefined>(undefined),
		});

	}


	/** Data related to Remote In-App Update action such as recovered user count, affected user count etc. */
	export interface RemoteInAppUpdateData {

		/** Data related to the recovery action at bundle level. */
		remoteAppUpdateDataPerBundle?: Array<RemoteInAppUpdateDataPerBundle>;
	}

	/** Data related to Remote In-App Update action such as recovered user count, affected user count etc. */
	export interface RemoteInAppUpdateDataFormProperties {
	}
	export function CreateRemoteInAppUpdateDataFormGroup() {
		return new FormGroup<RemoteInAppUpdateDataFormProperties>({
		});

	}


	/** Data related to the recovery action at bundle level. */
	export interface RemoteInAppUpdateDataPerBundle {

		/** Total number of devices which have been rescued. */
		recoveredDeviceCount?: string | null;

		/** Total number of devices affected by this recovery action associated with bundle of the app. */
		totalDeviceCount?: string | null;

		/** Version Code corresponding to the target bundle. */
		versionCode?: string | null;
	}

	/** Data related to the recovery action at bundle level. */
	export interface RemoteInAppUpdateDataPerBundleFormProperties {

		/** Total number of devices which have been rescued. */
		recoveredDeviceCount: FormControl<string | null | undefined>,

		/** Total number of devices affected by this recovery action associated with bundle of the app. */
		totalDeviceCount: FormControl<string | null | undefined>,

		/** Version Code corresponding to the target bundle. */
		versionCode: FormControl<string | null | undefined>,
	}
	export function CreateRemoteInAppUpdateDataPerBundleFormGroup() {
		return new FormGroup<RemoteInAppUpdateDataPerBundleFormProperties>({
			recoveredDeviceCount: new FormControl<string | null | undefined>(undefined),
			totalDeviceCount: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppRecoveryActionStatus { RECOVERY_STATUS_UNSPECIFIED = 'RECOVERY_STATUS_UNSPECIFIED', RECOVERY_STATUS_ACTIVE = 'RECOVERY_STATUS_ACTIVE', RECOVERY_STATUS_CANCELED = 'RECOVERY_STATUS_CANCELED', RECOVERY_STATUS_DRAFT = 'RECOVERY_STATUS_DRAFT' }


	/** Targeting details for a recovery action such as regions, android sdk levels, app versions etc. */
	export interface Targeting {

		/** Object representation to describe all set of users. */
		allUsers?: AllUsers;

		/** Android api level targeting data for app recovery action targeting. */
		androidSdks?: AndroidSdks;

		/** Region targeting data for app recovery action targeting. */
		regions?: Regions;

		/** Data format for a list of app versions. Only one app version is supported for now. */
		versionList?: AppVersionList;

		/** Data format for a continuous range of app versions. */
		versionRange?: AppVersionRange;
	}

	/** Targeting details for a recovery action such as regions, android sdk levels, app versions etc. */
	export interface TargetingFormProperties {
	}
	export function CreateTargetingFormGroup() {
		return new FormGroup<TargetingFormProperties>({
		});

	}


	/** Data format for a list of app versions. Only one app version is supported for now. */
	export interface AppVersionList {

		/** List of app version codes. */
		versionCodes?: Array<string>;
	}

	/** Data format for a list of app versions. Only one app version is supported for now. */
	export interface AppVersionListFormProperties {
	}
	export function CreateAppVersionListFormGroup() {
		return new FormGroup<AppVersionListFormProperties>({
		});

	}


	/** Data format for a continuous range of app versions. */
	export interface AppVersionRange {

		/** Highest app version in the range, inclusive. */
		versionCodeEnd?: string | null;

		/** Lowest app version in the range, inclusive. */
		versionCodeStart?: string | null;
	}

	/** Data format for a continuous range of app versions. */
	export interface AppVersionRangeFormProperties {

		/** Highest app version in the range, inclusive. */
		versionCodeEnd: FormControl<string | null | undefined>,

		/** Lowest app version in the range, inclusive. */
		versionCodeStart: FormControl<string | null | undefined>,
	}
	export function CreateAppVersionRangeFormGroup() {
		return new FormGroup<AppVersionRangeFormProperties>({
			versionCodeEnd: new FormControl<string | null | undefined>(undefined),
			versionCodeStart: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ArchiveSubscription. */
	export interface ArchiveSubscriptionRequest {
	}

	/** Request message for ArchiveSubscription. */
	export interface ArchiveSubscriptionRequestFormProperties {
	}
	export function CreateArchiveSubscriptionRequestFormGroup() {
		return new FormGroup<ArchiveSubscriptionRequestFormProperties>({
		});

	}


	/** Metadata of an asset module. */
	export interface AssetModuleMetadata {

		/** Indicates the delivery type for persistent install. */
		deliveryType?: ModuleMetadataDeliveryType | null;

		/** Module name. */
		name?: string | null;
	}

	/** Metadata of an asset module. */
	export interface AssetModuleMetadataFormProperties {

		/** Indicates the delivery type for persistent install. */
		deliveryType: FormControl<ModuleMetadataDeliveryType | null | undefined>,

		/** Module name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAssetModuleMetadataFormGroup() {
		return new FormGroup<AssetModuleMetadataFormProperties>({
			deliveryType: new FormControl<ModuleMetadataDeliveryType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of asset slices belonging to a single asset module. */
	export interface AssetSliceSet {

		/** Asset slices. */
		apkDescription?: Array<ApkDescription>;

		/** Metadata of an asset module. */
		assetModuleMetadata?: AssetModuleMetadata;
	}

	/** Set of asset slices belonging to a single asset module. */
	export interface AssetSliceSetFormProperties {
	}
	export function CreateAssetSliceSetFormGroup() {
		return new FormGroup<AssetSliceSetFormProperties>({
		});

	}


	/** Represents a base plan that automatically renews at the end of its subscription period. */
	export interface AutoRenewingBasePlanType {

		/** Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center. */
		billingPeriodDuration?: string | null;

		/** Grace period of the subscription, specified in ISO 8601 format. Acceptable values are P0D (zero days), P3D (3 days), P7D (7 days), P14D (14 days), and P30D (30 days). If not specified, a default value will be used based on the recurring period duration. */
		gracePeriodDuration?: string | null;

		/** Whether the renewing base plan is backward compatible. The backward compatible base plan is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one renewing base plan can be marked as legacy compatible for a given subscription. */
		legacyCompatible?: boolean | null;

		/** Subscription offer id which is legacy compatible. The backward compatible subscription offer is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one subscription offer can be marked as legacy compatible for a given renewing base plan. To have no Subscription offer as legacy compatible set this field as empty string. */
		legacyCompatibleSubscriptionOfferId?: string | null;

		/** The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE. */
		prorationMode?: AutoRenewingBasePlanTypeProrationMode | null;

		/** Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified. */
		resubscribeState?: AutoRenewingBasePlanTypeResubscribeState | null;
	}

	/** Represents a base plan that automatically renews at the end of its subscription period. */
	export interface AutoRenewingBasePlanTypeFormProperties {

		/** Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center. */
		billingPeriodDuration: FormControl<string | null | undefined>,

		/** Grace period of the subscription, specified in ISO 8601 format. Acceptable values are P0D (zero days), P3D (3 days), P7D (7 days), P14D (14 days), and P30D (30 days). If not specified, a default value will be used based on the recurring period duration. */
		gracePeriodDuration: FormControl<string | null | undefined>,

		/** Whether the renewing base plan is backward compatible. The backward compatible base plan is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one renewing base plan can be marked as legacy compatible for a given subscription. */
		legacyCompatible: FormControl<boolean | null | undefined>,

		/** Subscription offer id which is legacy compatible. The backward compatible subscription offer is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one subscription offer can be marked as legacy compatible for a given renewing base plan. To have no Subscription offer as legacy compatible set this field as empty string. */
		legacyCompatibleSubscriptionOfferId: FormControl<string | null | undefined>,

		/** The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE. */
		prorationMode: FormControl<AutoRenewingBasePlanTypeProrationMode | null | undefined>,

		/** Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified. */
		resubscribeState: FormControl<AutoRenewingBasePlanTypeResubscribeState | null | undefined>,
	}
	export function CreateAutoRenewingBasePlanTypeFormGroup() {
		return new FormGroup<AutoRenewingBasePlanTypeFormProperties>({
			billingPeriodDuration: new FormControl<string | null | undefined>(undefined),
			gracePeriodDuration: new FormControl<string | null | undefined>(undefined),
			legacyCompatible: new FormControl<boolean | null | undefined>(undefined),
			legacyCompatibleSubscriptionOfferId: new FormControl<string | null | undefined>(undefined),
			prorationMode: new FormControl<AutoRenewingBasePlanTypeProrationMode | null | undefined>(undefined),
			resubscribeState: new FormControl<AutoRenewingBasePlanTypeResubscribeState | null | undefined>(undefined),
		});

	}

	export enum AutoRenewingBasePlanTypeProrationMode { SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED = 'SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED', SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE = 'SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE', SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY = 'SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY' }

	export enum AutoRenewingBasePlanTypeResubscribeState { RESUBSCRIBE_STATE_UNSPECIFIED = 'RESUBSCRIBE_STATE_UNSPECIFIED', RESUBSCRIBE_STATE_ACTIVE = 'RESUBSCRIBE_STATE_ACTIVE', RESUBSCRIBE_STATE_INACTIVE = 'RESUBSCRIBE_STATE_INACTIVE' }


	/** Information related to an auto renewing plan. */
	export interface AutoRenewingPlan {

		/** If the subscription is currently set to auto-renew, e.g. the user has not canceled the subscription */
		autoRenewEnabled?: boolean | null;

		/** Price change related information of a subscription item. */
		priceChangeDetails?: SubscriptionItemPriceChangeDetails;
	}

	/** Information related to an auto renewing plan. */
	export interface AutoRenewingPlanFormProperties {

		/** If the subscription is currently set to auto-renew, e.g. the user has not canceled the subscription */
		autoRenewEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoRenewingPlanFormGroup() {
		return new FormGroup<AutoRenewingPlanFormProperties>({
			autoRenewEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Price change related information of a subscription item. */
	export interface SubscriptionItemPriceChangeDetails {

		/** The renewal time at which the price change will become effective for the user. This is subject to change(to a future time) due to cases where the renewal time shifts like pause. This field is only populated if the price change has not taken effect. */
		expectedNewPriceChargeTime?: string | null;

		/** Represents an amount of money with its currency type. */
		newPrice?: Money;

		/** Price change mode specifies how the subscription item price is changing. */
		priceChangeMode?: SubscriptionItemPriceChangeDetailsPriceChangeMode | null;

		/** State the price change is currently in. */
		priceChangeState?: SubscriptionItemPriceChangeDetailsPriceChangeState | null;
	}

	/** Price change related information of a subscription item. */
	export interface SubscriptionItemPriceChangeDetailsFormProperties {

		/** The renewal time at which the price change will become effective for the user. This is subject to change(to a future time) due to cases where the renewal time shifts like pause. This field is only populated if the price change has not taken effect. */
		expectedNewPriceChargeTime: FormControl<string | null | undefined>,

		/** Price change mode specifies how the subscription item price is changing. */
		priceChangeMode: FormControl<SubscriptionItemPriceChangeDetailsPriceChangeMode | null | undefined>,

		/** State the price change is currently in. */
		priceChangeState: FormControl<SubscriptionItemPriceChangeDetailsPriceChangeState | null | undefined>,
	}
	export function CreateSubscriptionItemPriceChangeDetailsFormGroup() {
		return new FormGroup<SubscriptionItemPriceChangeDetailsFormProperties>({
			expectedNewPriceChargeTime: new FormControl<string | null | undefined>(undefined),
			priceChangeMode: new FormControl<SubscriptionItemPriceChangeDetailsPriceChangeMode | null | undefined>(undefined),
			priceChangeState: new FormControl<SubscriptionItemPriceChangeDetailsPriceChangeState | null | undefined>(undefined),
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface Money {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface MoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubscriptionItemPriceChangeDetailsPriceChangeMode { PRICE_CHANGE_MODE_UNSPECIFIED = 'PRICE_CHANGE_MODE_UNSPECIFIED', PRICE_DECREASE = 'PRICE_DECREASE', PRICE_INCREASE = 'PRICE_INCREASE', OPT_OUT_PRICE_INCREASE = 'OPT_OUT_PRICE_INCREASE' }

	export enum SubscriptionItemPriceChangeDetailsPriceChangeState { PRICE_CHANGE_STATE_UNSPECIFIED = 'PRICE_CHANGE_STATE_UNSPECIFIED', OUTSTANDING = 'OUTSTANDING', CONFIRMED = 'CONFIRMED', APPLIED = 'APPLIED' }


	/** A single base plan for a subscription. */
	export interface BasePlan {

		/** Represents a base plan that automatically renews at the end of its subscription period. */
		autoRenewingBasePlanType?: AutoRenewingBasePlanType;

		/** Required. Immutable. The unique identifier of this base plan. Must be unique within the subscription, and conform with RFC-1034. That is, this ID can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 63 characters. */
		basePlanId?: string | null;

		/** List of up to 20 custom tags specified for this base plan, and returned to the app through the billing library. Subscription offers for this base plan will also receive these offer tags in the billing library. */
		offerTags?: Array<OfferTag>;

		/** Pricing information for any new locations Play may launch in. */
		otherRegionsConfig?: OtherRegionsBasePlanConfig;

		/** Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user. */
		prepaidBasePlanType?: PrepaidBasePlanType;

		/** Region-specific information for this base plan. */
		regionalConfigs?: Array<RegionalBasePlanConfig>;

		/** Output only. The state of the base plan, i.e. whether it's active. Draft and inactive base plans can be activated or deleted. Active base plans can be made inactive. Inactive base plans can be canceled. This field cannot be changed by updating the resource. Use the dedicated endpoints instead. */
		state?: BasePlanState | null;
	}

	/** A single base plan for a subscription. */
	export interface BasePlanFormProperties {

		/** Required. Immutable. The unique identifier of this base plan. Must be unique within the subscription, and conform with RFC-1034. That is, this ID can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 63 characters. */
		basePlanId: FormControl<string | null | undefined>,

		/** Output only. The state of the base plan, i.e. whether it's active. Draft and inactive base plans can be activated or deleted. Active base plans can be made inactive. Inactive base plans can be canceled. This field cannot be changed by updating the resource. Use the dedicated endpoints instead. */
		state: FormControl<BasePlanState | null | undefined>,
	}
	export function CreateBasePlanFormGroup() {
		return new FormGroup<BasePlanFormProperties>({
			basePlanId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BasePlanState | null | undefined>(undefined),
		});

	}


	/** Represents a custom tag specified for base plans and subscription offers. */
	export interface OfferTag {

		/** Must conform with RFC-1034. That is, this string can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 20 characters. */
		tag?: string | null;
	}

	/** Represents a custom tag specified for base plans and subscription offers. */
	export interface OfferTagFormProperties {

		/** Must conform with RFC-1034. That is, this string can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 20 characters. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateOfferTagFormGroup() {
		return new FormGroup<OfferTagFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pricing information for any new locations Play may launch in. */
	export interface OtherRegionsBasePlanConfig {

		/** Represents an amount of money with its currency type. */
		eurPrice?: Money;

		/** Whether the base plan is available for new subscribers in any new locations Play may launch in. If not specified, this will default to false. */
		newSubscriberAvailability?: boolean | null;

		/** Represents an amount of money with its currency type. */
		usdPrice?: Money;
	}

	/** Pricing information for any new locations Play may launch in. */
	export interface OtherRegionsBasePlanConfigFormProperties {

		/** Whether the base plan is available for new subscribers in any new locations Play may launch in. If not specified, this will default to false. */
		newSubscriberAvailability: FormControl<boolean | null | undefined>,
	}
	export function CreateOtherRegionsBasePlanConfigFormGroup() {
		return new FormGroup<OtherRegionsBasePlanConfigFormProperties>({
			newSubscriberAvailability: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user. */
	export interface PrepaidBasePlanType {

		/** Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center. */
		billingPeriodDuration?: string | null;

		/** Whether users should be able to extend this prepaid base plan in Google Play surfaces. Defaults to TIME_EXTENSION_ACTIVE if not specified. */
		timeExtension?: PrepaidBasePlanTypeTimeExtension | null;
	}

	/** Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user. */
	export interface PrepaidBasePlanTypeFormProperties {

		/** Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center. */
		billingPeriodDuration: FormControl<string | null | undefined>,

		/** Whether users should be able to extend this prepaid base plan in Google Play surfaces. Defaults to TIME_EXTENSION_ACTIVE if not specified. */
		timeExtension: FormControl<PrepaidBasePlanTypeTimeExtension | null | undefined>,
	}
	export function CreatePrepaidBasePlanTypeFormGroup() {
		return new FormGroup<PrepaidBasePlanTypeFormProperties>({
			billingPeriodDuration: new FormControl<string | null | undefined>(undefined),
			timeExtension: new FormControl<PrepaidBasePlanTypeTimeExtension | null | undefined>(undefined),
		});

	}

	export enum PrepaidBasePlanTypeTimeExtension { TIME_EXTENSION_UNSPECIFIED = 'TIME_EXTENSION_UNSPECIFIED', TIME_EXTENSION_ACTIVE = 'TIME_EXTENSION_ACTIVE', TIME_EXTENSION_INACTIVE = 'TIME_EXTENSION_INACTIVE' }


	/** Configuration for a base plan specific to a region. */
	export interface RegionalBasePlanConfig {

		/** Whether the base plan in the specified region is available for new subscribers. Existing subscribers will not have their subscription canceled if this value is set to false. If not specified, this will default to false. */
		newSubscriberAvailability?: boolean | null;

		/** Represents an amount of money with its currency type. */
		price?: Money;

		/** Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
		regionCode?: string | null;
	}

	/** Configuration for a base plan specific to a region. */
	export interface RegionalBasePlanConfigFormProperties {

		/** Whether the base plan in the specified region is available for new subscribers. Existing subscribers will not have their subscription canceled if this value is set to false. If not specified, this will default to false. */
		newSubscriberAvailability: FormControl<boolean | null | undefined>,

		/** Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateRegionalBasePlanConfigFormGroup() {
		return new FormGroup<RegionalBasePlanConfigFormProperties>({
			newSubscriberAvailability: new FormControl<boolean | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BasePlanState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', DRAFT = 'DRAFT', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }


	/** Request message for BatchGetSubscriptionOffers endpoint. */
	export interface BatchGetSubscriptionOffersRequest {

		/** Required. A list of update requests of up to 100 elements. All requests must update different subscriptions. */
		requests?: Array<GetSubscriptionOfferRequest>;
	}

	/** Request message for BatchGetSubscriptionOffers endpoint. */
	export interface BatchGetSubscriptionOffersRequestFormProperties {
	}
	export function CreateBatchGetSubscriptionOffersRequestFormGroup() {
		return new FormGroup<BatchGetSubscriptionOffersRequestFormProperties>({
		});

	}


	/** Request message for GetSubscriptionOffer. */
	export interface GetSubscriptionOfferRequest {

		/** Required. The parent base plan (ID) of the offer to get. */
		basePlanId?: string | null;

		/** Required. The unique offer ID of the offer to get. */
		offerId?: string | null;

		/** Required. The parent app (package name) of the offer to get. */
		packageName?: string | null;

		/** Required. The parent subscription (ID) of the offer to get. */
		productId?: string | null;
	}

	/** Request message for GetSubscriptionOffer. */
	export interface GetSubscriptionOfferRequestFormProperties {

		/** Required. The parent base plan (ID) of the offer to get. */
		basePlanId: FormControl<string | null | undefined>,

		/** Required. The unique offer ID of the offer to get. */
		offerId: FormControl<string | null | undefined>,

		/** Required. The parent app (package name) of the offer to get. */
		packageName: FormControl<string | null | undefined>,

		/** Required. The parent subscription (ID) of the offer to get. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateGetSubscriptionOfferRequestFormGroup() {
		return new FormGroup<GetSubscriptionOfferRequestFormProperties>({
			basePlanId: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchGetSubscriptionOffers endpoint. */
	export interface BatchGetSubscriptionOffersResponse {
		subscriptionOffers?: Array<SubscriptionOffer>;
	}

	/** Response message for BatchGetSubscriptionOffers endpoint. */
	export interface BatchGetSubscriptionOffersResponseFormProperties {
	}
	export function CreateBatchGetSubscriptionOffersResponseFormGroup() {
		return new FormGroup<BatchGetSubscriptionOffersResponseFormProperties>({
		});

	}


	/** A single, temporary offer */
	export interface SubscriptionOffer {

		/** Required. Immutable. The ID of the base plan to which this offer is an extension. */
		basePlanId?: string | null;

		/** Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan. */
		offerId?: string | null;

		/** List of up to 20 custom tags specified for this offer, and returned to the app through the billing library. */
		offerTags?: Array<OfferTag>;

		/** Configuration for any new locations Play may launch in specified on a subscription offer. */
		otherRegionsConfig?: OtherRegionsSubscriptionOfferConfig;

		/** Required. Immutable. The package name of the app the parent subscription belongs to. */
		packageName?: string | null;

		/** Required. The phases of this subscription offer. Must contain at least one entry, and may contain at most five. Users will always receive all these phases in the specified order. Phases may not be added, removed, or reordered after initial creation. */
		phases?: Array<SubscriptionOfferPhase>;

		/** Required. Immutable. The ID of the parent subscription this offer belongs to. */
		productId?: string | null;

		/** Required. The region-specific configuration of this offer. Must contain at least one entry. */
		regionalConfigs?: Array<RegionalSubscriptionOfferConfig>;

		/** Output only. The current state of this offer. Can be changed using Activate and Deactivate actions. NB: the base plan state supersedes this state, so an active offer may not be available if the base plan is not active. */
		state?: BasePlanState | null;

		/** Defines the rule a user needs to satisfy to receive this offer. */
		targeting?: SubscriptionOfferTargeting;
	}

	/** A single, temporary offer */
	export interface SubscriptionOfferFormProperties {

		/** Required. Immutable. The ID of the base plan to which this offer is an extension. */
		basePlanId: FormControl<string | null | undefined>,

		/** Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan. */
		offerId: FormControl<string | null | undefined>,

		/** Required. Immutable. The package name of the app the parent subscription belongs to. */
		packageName: FormControl<string | null | undefined>,

		/** Required. Immutable. The ID of the parent subscription this offer belongs to. */
		productId: FormControl<string | null | undefined>,

		/** Output only. The current state of this offer. Can be changed using Activate and Deactivate actions. NB: the base plan state supersedes this state, so an active offer may not be available if the base plan is not active. */
		state: FormControl<BasePlanState | null | undefined>,
	}
	export function CreateSubscriptionOfferFormGroup() {
		return new FormGroup<SubscriptionOfferFormProperties>({
			basePlanId: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BasePlanState | null | undefined>(undefined),
		});

	}


	/** Configuration for any new locations Play may launch in specified on a subscription offer. */
	export interface OtherRegionsSubscriptionOfferConfig {

		/** Whether the subscription offer in any new locations Play may launch in the future. If not specified, this will default to false. */
		otherRegionsNewSubscriberAvailability?: boolean | null;
	}

	/** Configuration for any new locations Play may launch in specified on a subscription offer. */
	export interface OtherRegionsSubscriptionOfferConfigFormProperties {

		/** Whether the subscription offer in any new locations Play may launch in the future. If not specified, this will default to false. */
		otherRegionsNewSubscriberAvailability: FormControl<boolean | null | undefined>,
	}
	export function CreateOtherRegionsSubscriptionOfferConfigFormGroup() {
		return new FormGroup<OtherRegionsSubscriptionOfferConfigFormProperties>({
			otherRegionsNewSubscriberAvailability: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A single phase of a subscription offer. */
	export interface SubscriptionOfferPhase {

		/** Required. The duration of a single recurrence of this phase. Specified in ISO 8601 format. */
		duration?: string | null;

		/** Configuration for any new locations Play may launch in for a single offer phase. */
		otherRegionsConfig?: OtherRegionsSubscriptionOfferPhaseConfig;

		/** Required. The number of times this phase repeats. If this offer phase is not free, each recurrence charges the user the price of this offer phase. */
		recurrenceCount?: number | null;

		/** Required. The region-specific configuration of this offer phase. This list must contain exactly one entry for each region for which the subscription offer has a regional config. */
		regionalConfigs?: Array<RegionalSubscriptionOfferPhaseConfig>;
	}

	/** A single phase of a subscription offer. */
	export interface SubscriptionOfferPhaseFormProperties {

		/** Required. The duration of a single recurrence of this phase. Specified in ISO 8601 format. */
		duration: FormControl<string | null | undefined>,

		/** Required. The number of times this phase repeats. If this offer phase is not free, each recurrence charges the user the price of this offer phase. */
		recurrenceCount: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionOfferPhaseFormGroup() {
		return new FormGroup<SubscriptionOfferPhaseFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			recurrenceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for any new locations Play may launch in for a single offer phase. */
	export interface OtherRegionsSubscriptionOfferPhaseConfig {

		/** Pricing information for any new locations Play may launch in. */
		absoluteDiscounts?: OtherRegionsSubscriptionOfferPhasePrices;

		/** Pricing information for any new locations Play may launch in. */
		otherRegionsPrices?: OtherRegionsSubscriptionOfferPhasePrices;

		/** The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in any new locations Play may launch in. */
		relativeDiscount?: number | null;
	}

	/** Configuration for any new locations Play may launch in for a single offer phase. */
	export interface OtherRegionsSubscriptionOfferPhaseConfigFormProperties {

		/** The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in any new locations Play may launch in. */
		relativeDiscount: FormControl<number | null | undefined>,
	}
	export function CreateOtherRegionsSubscriptionOfferPhaseConfigFormGroup() {
		return new FormGroup<OtherRegionsSubscriptionOfferPhaseConfigFormProperties>({
			relativeDiscount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Pricing information for any new locations Play may launch in. */
	export interface OtherRegionsSubscriptionOfferPhasePrices {

		/** Represents an amount of money with its currency type. */
		eurPrice?: Money;

		/** Represents an amount of money with its currency type. */
		usdPrice?: Money;
	}

	/** Pricing information for any new locations Play may launch in. */
	export interface OtherRegionsSubscriptionOfferPhasePricesFormProperties {
	}
	export function CreateOtherRegionsSubscriptionOfferPhasePricesFormGroup() {
		return new FormGroup<OtherRegionsSubscriptionOfferPhasePricesFormProperties>({
		});

	}


	/** Configuration for a single phase of a subscription offer in a single region. */
	export interface RegionalSubscriptionOfferPhaseConfig {

		/** Represents an amount of money with its currency type. */
		absoluteDiscount?: Money;

		/** Represents an amount of money with its currency type. */
		price?: Money;

		/** Required. Immutable. The region to which this config applies. */
		regionCode?: string | null;

		/** The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in this region. */
		relativeDiscount?: number | null;
	}

	/** Configuration for a single phase of a subscription offer in a single region. */
	export interface RegionalSubscriptionOfferPhaseConfigFormProperties {

		/** Required. Immutable. The region to which this config applies. */
		regionCode: FormControl<string | null | undefined>,

		/** The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in this region. */
		relativeDiscount: FormControl<number | null | undefined>,
	}
	export function CreateRegionalSubscriptionOfferPhaseConfigFormGroup() {
		return new FormGroup<RegionalSubscriptionOfferPhaseConfigFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
			relativeDiscount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for a subscription offer in a single region. */
	export interface RegionalSubscriptionOfferConfig {

		/** Whether the subscription offer in the specified region is available for new subscribers. Existing subscribers will not have their subscription cancelled if this value is set to false. If not specified, this will default to false. */
		newSubscriberAvailability?: boolean | null;

		/** Required. Immutable. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
		regionCode?: string | null;
	}

	/** Configuration for a subscription offer in a single region. */
	export interface RegionalSubscriptionOfferConfigFormProperties {

		/** Whether the subscription offer in the specified region is available for new subscribers. Existing subscribers will not have their subscription cancelled if this value is set to false. If not specified, this will default to false. */
		newSubscriberAvailability: FormControl<boolean | null | undefined>,

		/** Required. Immutable. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateRegionalSubscriptionOfferConfigFormGroup() {
		return new FormGroup<RegionalSubscriptionOfferConfigFormProperties>({
			newSubscriberAvailability: new FormControl<boolean | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the rule a user needs to satisfy to receive this offer. */
	export interface SubscriptionOfferTargeting {

		/** Represents a targeting rule of the form: User never had {scope} before. */
		acquisitionRule?: AcquisitionTargetingRule;

		/** Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}]. */
		upgradeRule?: UpgradeTargetingRule;
	}

	/** Defines the rule a user needs to satisfy to receive this offer. */
	export interface SubscriptionOfferTargetingFormProperties {
	}
	export function CreateSubscriptionOfferTargetingFormGroup() {
		return new FormGroup<SubscriptionOfferTargetingFormProperties>({
		});

	}


	/** Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}]. */
	export interface UpgradeTargetingRule {

		/** The specific billing period duration, specified in ISO 8601 format, that a user must be currently subscribed to to be eligible for this rule. If not specified, users subscribed to any billing period are matched. */
		billingPeriodDuration?: string | null;

		/** Limit this offer to only once per user. If set to true, a user can never be eligible for this offer again if they ever subscribed to this offer. */
		oncePerUser?: boolean | null;

		/** Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement. */
		scope?: TargetingRuleScope;
	}

	/** Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}]. */
	export interface UpgradeTargetingRuleFormProperties {

		/** The specific billing period duration, specified in ISO 8601 format, that a user must be currently subscribed to to be eligible for this rule. If not specified, users subscribed to any billing period are matched. */
		billingPeriodDuration: FormControl<string | null | undefined>,

		/** Limit this offer to only once per user. If set to true, a user can never be eligible for this offer again if they ever subscribed to this offer. */
		oncePerUser: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradeTargetingRuleFormGroup() {
		return new FormGroup<UpgradeTargetingRuleFormProperties>({
			billingPeriodDuration: new FormControl<string | null | undefined>(undefined),
			oncePerUser: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for BatchGetSubscriptions endpoint. */
	export interface BatchGetSubscriptionsResponse {

		/** The list of requested subscriptions, in the same order as the request. */
		subscriptions?: Array<Subscription>;
	}

	/** Response message for BatchGetSubscriptions endpoint. */
	export interface BatchGetSubscriptionsResponseFormProperties {
	}
	export function CreateBatchGetSubscriptionsResponseFormGroup() {
		return new FormGroup<BatchGetSubscriptionsResponseFormProperties>({
		});

	}


	/** A single subscription for an app. */
	export interface Subscription {

		/** Output only. Whether this subscription is archived. Archived subscriptions are not available to any subscriber any longer, cannot be updated, and are not returned in list requests unless the show archived flag is passed in. */
		archived?: boolean | null;

		/** The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply. */
		basePlans?: Array<BasePlan>;

		/** Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app. */
		listings?: Array<SubscriptionListing>;

		/** Immutable. Package name of the parent app. */
		packageName?: string | null;

		/** Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length. */
		productId?: string | null;

		/** Details about taxation, Google Play policy and legal compliance for subscription products. */
		taxAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
	}

	/** A single subscription for an app. */
	export interface SubscriptionFormProperties {

		/** Output only. Whether this subscription is archived. Archived subscriptions are not available to any subscriber any longer, cannot be updated, and are not returned in list requests unless the show archived flag is passed in. */
		archived: FormControl<boolean | null | undefined>,

		/** Immutable. Package name of the parent app. */
		packageName: FormControl<string | null | undefined>,

		/** Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The consumer-visible metadata of a subscription. */
	export interface SubscriptionListing {

		/** A list of benefits shown to the user on platforms such as the Play Store and in restoration flows in the language of this listing. Plain text. Ordered list of at most four benefits. */
		benefits?: Array<string>;

		/** The description of this subscription in the language of this listing. Maximum length - 80 characters. Plain text. */
		description?: string | null;

		/** Required. The language of this listing, as defined by BCP-47, e.g. "en-US". */
		languageCode?: string | null;

		/** Required. The title of this subscription in the language of this listing. Plain text. */
		title?: string | null;
	}

	/** The consumer-visible metadata of a subscription. */
	export interface SubscriptionListingFormProperties {

		/** The description of this subscription in the language of this listing. Maximum length - 80 characters. Plain text. */
		description: FormControl<string | null | undefined>,

		/** Required. The language of this listing, as defined by BCP-47, e.g. "en-US". */
		languageCode: FormControl<string | null | undefined>,

		/** Required. The title of this subscription in the language of this listing. Plain text. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionListingFormGroup() {
		return new FormGroup<SubscriptionListingFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about taxation, Google Play policy and legal compliance for subscription products. */
	export interface SubscriptionTaxAndComplianceSettings {

		/** Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information. */
		eeaWithdrawalRightType?: SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightType | null;

		/** Whether this subscription is declared as a product representing a tokenized digital asset. */
		isTokenizedDigitalAsset?: boolean | null;

		/** A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR". */
		taxRateInfoByRegionCode?: {[id: string]: RegionalTaxRateInfo };
	}

	/** Details about taxation, Google Play policy and legal compliance for subscription products. */
	export interface SubscriptionTaxAndComplianceSettingsFormProperties {

		/** Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information. */
		eeaWithdrawalRightType: FormControl<SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightType | null | undefined>,

		/** Whether this subscription is declared as a product representing a tokenized digital asset. */
		isTokenizedDigitalAsset: FormControl<boolean | null | undefined>,

		/** A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR". */
		taxRateInfoByRegionCode: FormControl<{[id: string]: RegionalTaxRateInfo } | null | undefined>,
	}
	export function CreateSubscriptionTaxAndComplianceSettingsFormGroup() {
		return new FormGroup<SubscriptionTaxAndComplianceSettingsFormProperties>({
			eeaWithdrawalRightType: new FormControl<SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightType | null | undefined>(undefined),
			isTokenizedDigitalAsset: new FormControl<boolean | null | undefined>(undefined),
			taxRateInfoByRegionCode: new FormControl<{[id: string]: RegionalTaxRateInfo } | null | undefined>(undefined),
		});

	}

	export enum SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightType { WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED = 'WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED', WITHDRAWAL_RIGHT_DIGITAL_CONTENT = 'WITHDRAWAL_RIGHT_DIGITAL_CONTENT', WITHDRAWAL_RIGHT_SERVICE = 'WITHDRAWAL_RIGHT_SERVICE' }


	/** Specified details about taxation in a given geographical region. */
	export interface RegionalTaxRateInfo {

		/** You must tell us if your app contains streaming products to correctly charge US state and local sales tax. Field only supported in United States. */
		eligibleForStreamingServiceTaxRate?: boolean | null;

		/** To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax). */
		streamingTaxType?: RegionalTaxRateInfoStreamingTaxType | null;

		/** Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498). */
		taxTier?: RegionalTaxRateInfoTaxTier | null;
	}

	/** Specified details about taxation in a given geographical region. */
	export interface RegionalTaxRateInfoFormProperties {

		/** You must tell us if your app contains streaming products to correctly charge US state and local sales tax. Field only supported in United States. */
		eligibleForStreamingServiceTaxRate: FormControl<boolean | null | undefined>,

		/** To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax). */
		streamingTaxType: FormControl<RegionalTaxRateInfoStreamingTaxType | null | undefined>,

		/** Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498). */
		taxTier: FormControl<RegionalTaxRateInfoTaxTier | null | undefined>,
	}
	export function CreateRegionalTaxRateInfoFormGroup() {
		return new FormGroup<RegionalTaxRateInfoFormProperties>({
			eligibleForStreamingServiceTaxRate: new FormControl<boolean | null | undefined>(undefined),
			streamingTaxType: new FormControl<RegionalTaxRateInfoStreamingTaxType | null | undefined>(undefined),
			taxTier: new FormControl<RegionalTaxRateInfoTaxTier | null | undefined>(undefined),
		});

	}

	export enum RegionalTaxRateInfoStreamingTaxType { STREAMING_TAX_TYPE_UNSPECIFIED = 'STREAMING_TAX_TYPE_UNSPECIFIED', STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL = 'STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL', STREAMING_TAX_TYPE_TELCO_VIDEO_SALES = 'STREAMING_TAX_TYPE_TELCO_VIDEO_SALES', STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL = 'STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL', STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL = 'STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL', STREAMING_TAX_TYPE_TELCO_AUDIO_SALES = 'STREAMING_TAX_TYPE_TELCO_AUDIO_SALES', STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL = 'STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL' }

	export enum RegionalTaxRateInfoTaxTier { TAX_TIER_UNSPECIFIED = 'TAX_TIER_UNSPECIFIED', TAX_TIER_BOOKS_1 = 'TAX_TIER_BOOKS_1', TAX_TIER_NEWS_1 = 'TAX_TIER_NEWS_1', TAX_TIER_NEWS_2 = 'TAX_TIER_NEWS_2', TAX_TIER_MUSIC_OR_AUDIO_1 = 'TAX_TIER_MUSIC_OR_AUDIO_1', TAX_TIER_LIVE_OR_BROADCAST_1 = 'TAX_TIER_LIVE_OR_BROADCAST_1' }


	/** Request message for BatchMigrateBasePlanPrices. */
	export interface BatchMigrateBasePlanPricesRequest {

		/** Required. Up to 100 price migration requests. All requests must update different base plans. */
		requests?: Array<MigrateBasePlanPricesRequest>;
	}

	/** Request message for BatchMigrateBasePlanPrices. */
	export interface BatchMigrateBasePlanPricesRequestFormProperties {
	}
	export function CreateBatchMigrateBasePlanPricesRequestFormGroup() {
		return new FormGroup<BatchMigrateBasePlanPricesRequestFormProperties>({
		});

	}


	/** Request message for MigrateBasePlanPrices. */
	export interface MigrateBasePlanPricesRequest {

		/** Required. The unique base plan ID of the base plan to update prices on. */
		basePlanId?: string | null;

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance?: ActivateBasePlanRequestLatencyTolerance | null;

		/** Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource. */
		packageName?: string | null;

		/** Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource. */
		productId?: string | null;

		/** Required. The regional prices to update. */
		regionalPriceMigrations?: Array<RegionalPriceMigrationConfig>;

		/** The version of the available regions being used for the specified resource. */
		regionsVersion?: RegionsVersion;
	}

	/** Request message for MigrateBasePlanPrices. */
	export interface MigrateBasePlanPricesRequestFormProperties {

		/** Required. The unique base plan ID of the base plan to update prices on. */
		basePlanId: FormControl<string | null | undefined>,

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance: FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>,

		/** Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource. */
		packageName: FormControl<string | null | undefined>,

		/** Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateMigrateBasePlanPricesRequestFormGroup() {
		return new FormGroup<MigrateBasePlanPricesRequestFormProperties>({
			basePlanId: new FormControl<string | null | undefined>(undefined),
			latencyTolerance: new FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a price migration. */
	export interface RegionalPriceMigrationConfig {

		/** Required. The cutoff time for historical prices that subscribers can remain paying. Subscribers on prices which were available at this cutoff time or later will stay on their existing price. Subscribers on older prices will be migrated to the currently-offered price. The migrated subscribers will receive a notification that they will be paying a different price. Subscribers who do not agree to the new price will have their subscription ended at the next renewal. */
		oldestAllowedPriceVersionTime?: string | null;

		/** Optional. The behavior the caller wants users to see when there is a price increase during migration. If left unset, the behavior defaults to PRICE_INCREASE_TYPE_OPT_IN. Note that the first opt-out price increase migration for each app must be initiated in Play Console. */
		priceIncreaseType?: RegionalPriceMigrationConfigPriceIncreaseType | null;

		/** Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
		regionCode?: string | null;
	}

	/** Configuration for a price migration. */
	export interface RegionalPriceMigrationConfigFormProperties {

		/** Required. The cutoff time for historical prices that subscribers can remain paying. Subscribers on prices which were available at this cutoff time or later will stay on their existing price. Subscribers on older prices will be migrated to the currently-offered price. The migrated subscribers will receive a notification that they will be paying a different price. Subscribers who do not agree to the new price will have their subscription ended at the next renewal. */
		oldestAllowedPriceVersionTime: FormControl<string | null | undefined>,

		/** Optional. The behavior the caller wants users to see when there is a price increase during migration. If left unset, the behavior defaults to PRICE_INCREASE_TYPE_OPT_IN. Note that the first opt-out price increase migration for each app must be initiated in Play Console. */
		priceIncreaseType: FormControl<RegionalPriceMigrationConfigPriceIncreaseType | null | undefined>,

		/** Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US". */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateRegionalPriceMigrationConfigFormGroup() {
		return new FormGroup<RegionalPriceMigrationConfigFormProperties>({
			oldestAllowedPriceVersionTime: new FormControl<string | null | undefined>(undefined),
			priceIncreaseType: new FormControl<RegionalPriceMigrationConfigPriceIncreaseType | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RegionalPriceMigrationConfigPriceIncreaseType { PRICE_INCREASE_TYPE_UNSPECIFIED = 'PRICE_INCREASE_TYPE_UNSPECIFIED', PRICE_INCREASE_TYPE_OPT_IN = 'PRICE_INCREASE_TYPE_OPT_IN', PRICE_INCREASE_TYPE_OPT_OUT = 'PRICE_INCREASE_TYPE_OPT_OUT' }


	/** The version of the available regions being used for the specified resource. */
	export interface RegionsVersion {

		/** Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02. */
		version?: string | null;
	}

	/** The version of the available regions being used for the specified resource. */
	export interface RegionsVersionFormProperties {

		/** Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateRegionsVersionFormGroup() {
		return new FormGroup<RegionsVersionFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchMigrateBasePlanPrices. */
	export interface BatchMigrateBasePlanPricesResponse {

		/** Contains one response per requested price migration, in the same order as the request. */
		responses?: Array<MigrateBasePlanPricesResponse>;
	}

	/** Response message for BatchMigrateBasePlanPrices. */
	export interface BatchMigrateBasePlanPricesResponseFormProperties {
	}
	export function CreateBatchMigrateBasePlanPricesResponseFormGroup() {
		return new FormGroup<BatchMigrateBasePlanPricesResponseFormProperties>({
		});

	}


	/** Response message for MigrateBasePlanPrices. */
	export interface MigrateBasePlanPricesResponse {
	}

	/** Response message for MigrateBasePlanPrices. */
	export interface MigrateBasePlanPricesResponseFormProperties {
	}
	export function CreateMigrateBasePlanPricesResponseFormGroup() {
		return new FormGroup<MigrateBasePlanPricesResponseFormProperties>({
		});

	}


	/** Request message for BatchUpdateBasePlanStates. */
	export interface BatchUpdateBasePlanStatesRequest {

		/** Required. The update request list of up to 100 elements. All requests must update different base plans. */
		requests?: Array<UpdateBasePlanStateRequest>;
	}

	/** Request message for BatchUpdateBasePlanStates. */
	export interface BatchUpdateBasePlanStatesRequestFormProperties {
	}
	export function CreateBatchUpdateBasePlanStatesRequestFormGroup() {
		return new FormGroup<BatchUpdateBasePlanStatesRequestFormProperties>({
		});

	}


	/** Request message to update the state of a subscription base plan. */
	export interface UpdateBasePlanStateRequest {

		/** Request message for ActivateBasePlan. */
		activateBasePlanRequest?: ActivateBasePlanRequest;

		/** Request message for DeactivateBasePlan. */
		deactivateBasePlanRequest?: DeactivateBasePlanRequest;
	}

	/** Request message to update the state of a subscription base plan. */
	export interface UpdateBasePlanStateRequestFormProperties {
	}
	export function CreateUpdateBasePlanStateRequestFormGroup() {
		return new FormGroup<UpdateBasePlanStateRequestFormProperties>({
		});

	}


	/** Request message for DeactivateBasePlan. */
	export interface DeactivateBasePlanRequest {

		/** Required. The unique base plan ID of the base plan to deactivate. */
		basePlanId?: string | null;

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance?: ActivateBasePlanRequestLatencyTolerance | null;

		/** Required. The parent app (package name) of the base plan to deactivate. */
		packageName?: string | null;

		/** Required. The parent subscription (ID) of the base plan to deactivate. */
		productId?: string | null;
	}

	/** Request message for DeactivateBasePlan. */
	export interface DeactivateBasePlanRequestFormProperties {

		/** Required. The unique base plan ID of the base plan to deactivate. */
		basePlanId: FormControl<string | null | undefined>,

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance: FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>,

		/** Required. The parent app (package name) of the base plan to deactivate. */
		packageName: FormControl<string | null | undefined>,

		/** Required. The parent subscription (ID) of the base plan to deactivate. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateBasePlanRequestFormGroup() {
		return new FormGroup<DeactivateBasePlanRequestFormProperties>({
			basePlanId: new FormControl<string | null | undefined>(undefined),
			latencyTolerance: new FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchUpdateBasePlanStates. */
	export interface BatchUpdateBasePlanStatesResponse {

		/** The list of updated subscriptions. This list will match the requests one to one, in the same order. */
		subscriptions?: Array<Subscription>;
	}

	/** Response message for BatchUpdateBasePlanStates. */
	export interface BatchUpdateBasePlanStatesResponseFormProperties {
	}
	export function CreateBatchUpdateBasePlanStatesResponseFormGroup() {
		return new FormGroup<BatchUpdateBasePlanStatesResponseFormProperties>({
		});

	}


	/** Request message for BatchUpdateSubscriptionOfferStates. */
	export interface BatchUpdateSubscriptionOfferStatesRequest {

		/** Required. The update request list of up to 100 elements. All requests must update different offers. */
		requests?: Array<UpdateSubscriptionOfferStateRequest>;
	}

	/** Request message for BatchUpdateSubscriptionOfferStates. */
	export interface BatchUpdateSubscriptionOfferStatesRequestFormProperties {
	}
	export function CreateBatchUpdateSubscriptionOfferStatesRequestFormGroup() {
		return new FormGroup<BatchUpdateSubscriptionOfferStatesRequestFormProperties>({
		});

	}


	/** Request message to update the state of a subscription offer. */
	export interface UpdateSubscriptionOfferStateRequest {

		/** Request message for ActivateSubscriptionOffer. */
		activateSubscriptionOfferRequest?: ActivateSubscriptionOfferRequest;

		/** Request message for DeactivateSubscriptionOffer. */
		deactivateSubscriptionOfferRequest?: DeactivateSubscriptionOfferRequest;
	}

	/** Request message to update the state of a subscription offer. */
	export interface UpdateSubscriptionOfferStateRequestFormProperties {
	}
	export function CreateUpdateSubscriptionOfferStateRequestFormGroup() {
		return new FormGroup<UpdateSubscriptionOfferStateRequestFormProperties>({
		});

	}


	/** Request message for DeactivateSubscriptionOffer. */
	export interface DeactivateSubscriptionOfferRequest {

		/** Required. The parent base plan (ID) of the offer to deactivate. */
		basePlanId?: string | null;

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance?: ActivateBasePlanRequestLatencyTolerance | null;

		/** Required. The unique offer ID of the offer to deactivate. */
		offerId?: string | null;

		/** Required. The parent app (package name) of the offer to deactivate. */
		packageName?: string | null;

		/** Required. The parent subscription (ID) of the offer to deactivate. */
		productId?: string | null;
	}

	/** Request message for DeactivateSubscriptionOffer. */
	export interface DeactivateSubscriptionOfferRequestFormProperties {

		/** Required. The parent base plan (ID) of the offer to deactivate. */
		basePlanId: FormControl<string | null | undefined>,

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance: FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>,

		/** Required. The unique offer ID of the offer to deactivate. */
		offerId: FormControl<string | null | undefined>,

		/** Required. The parent app (package name) of the offer to deactivate. */
		packageName: FormControl<string | null | undefined>,

		/** Required. The parent subscription (ID) of the offer to deactivate. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateSubscriptionOfferRequestFormGroup() {
		return new FormGroup<DeactivateSubscriptionOfferRequestFormProperties>({
			basePlanId: new FormControl<string | null | undefined>(undefined),
			latencyTolerance: new FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchUpdateSubscriptionOfferStates. */
	export interface BatchUpdateSubscriptionOfferStatesResponse {

		/** The updated subscription offers list. */
		subscriptionOffers?: Array<SubscriptionOffer>;
	}

	/** Response message for BatchUpdateSubscriptionOfferStates. */
	export interface BatchUpdateSubscriptionOfferStatesResponseFormProperties {
	}
	export function CreateBatchUpdateSubscriptionOfferStatesResponseFormGroup() {
		return new FormGroup<BatchUpdateSubscriptionOfferStatesResponseFormProperties>({
		});

	}


	/** Request message for BatchUpdateSubscriptionOffers. */
	export interface BatchUpdateSubscriptionOffersRequest {

		/** Required. A list of update requests of up to 100 elements. All requests must update different subscription offers. */
		requests?: Array<UpdateSubscriptionOfferRequest>;
	}

	/** Request message for BatchUpdateSubscriptionOffers. */
	export interface BatchUpdateSubscriptionOffersRequestFormProperties {
	}
	export function CreateBatchUpdateSubscriptionOffersRequestFormGroup() {
		return new FormGroup<BatchUpdateSubscriptionOffersRequestFormProperties>({
		});

	}


	/** Request message for UpdateSubscriptionOffer. */
	export interface UpdateSubscriptionOfferRequest {

		/** Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn't exist, an offer will be created. If a new offer is created, update_mask is ignored. */
		allowMissing?: boolean | null;

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance?: ActivateBasePlanRequestLatencyTolerance | null;

		/** The version of the available regions being used for the specified resource. */
		regionsVersion?: RegionsVersion;

		/** A single, temporary offer */
		subscriptionOffer?: SubscriptionOffer;

		/** Required. The list of fields to be updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateSubscriptionOffer. */
	export interface UpdateSubscriptionOfferRequestFormProperties {

		/** Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn't exist, an offer will be created. If a new offer is created, update_mask is ignored. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance: FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>,

		/** Required. The list of fields to be updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriptionOfferRequestFormGroup() {
		return new FormGroup<UpdateSubscriptionOfferRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			latencyTolerance: new FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchUpdateSubscriptionOffers. */
	export interface BatchUpdateSubscriptionOffersResponse {

		/** The updated subscription offers list. */
		subscriptionOffers?: Array<SubscriptionOffer>;
	}

	/** Response message for BatchUpdateSubscriptionOffers. */
	export interface BatchUpdateSubscriptionOffersResponseFormProperties {
	}
	export function CreateBatchUpdateSubscriptionOffersResponseFormGroup() {
		return new FormGroup<BatchUpdateSubscriptionOffersResponseFormProperties>({
		});

	}


	/** Request message for BatchUpdateSubscription. */
	export interface BatchUpdateSubscriptionsRequest {

		/** Required. A list of update requests of up to 100 elements. All requests must update different subscriptions. */
		requests?: Array<UpdateSubscriptionRequest>;
	}

	/** Request message for BatchUpdateSubscription. */
	export interface BatchUpdateSubscriptionsRequestFormProperties {
	}
	export function CreateBatchUpdateSubscriptionsRequestFormGroup() {
		return new FormGroup<BatchUpdateSubscriptionsRequestFormProperties>({
		});

	}


	/** Request message for UpdateSubscription. */
	export interface UpdateSubscriptionRequest {

		/** Optional. If set to true, and the subscription with the given package_name and product_id doesn't exist, the subscription will be created. If a new subscription is created, update_mask is ignored. */
		allowMissing?: boolean | null;

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance?: ActivateBasePlanRequestLatencyTolerance | null;

		/** The version of the available regions being used for the specified resource. */
		regionsVersion?: RegionsVersion;

		/** A single subscription for an app. */
		subscription?: Subscription;

		/** Required. The list of fields to be updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateSubscription. */
	export interface UpdateSubscriptionRequestFormProperties {

		/** Optional. If set to true, and the subscription with the given package_name and product_id doesn't exist, the subscription will be created. If a new subscription is created, update_mask is ignored. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance: FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>,

		/** Required. The list of fields to be updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriptionRequestFormGroup() {
		return new FormGroup<UpdateSubscriptionRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			latencyTolerance: new FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchUpdateSubscription. */
	export interface BatchUpdateSubscriptionsResponse {

		/** The updated subscriptions list. */
		subscriptions?: Array<Subscription>;
	}

	/** Response message for BatchUpdateSubscription. */
	export interface BatchUpdateSubscriptionsResponseFormProperties {
	}
	export function CreateBatchUpdateSubscriptionsResponseFormGroup() {
		return new FormGroup<BatchUpdateSubscriptionsResponseFormProperties>({
		});

	}


	/** Information about an app bundle. The resource for BundlesService. */
	export interface Bundle {

		/** A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command. */
		sha1?: string | null;

		/** A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command. */
		sha256?: string | null;

		/** The version code of the Android App Bundle, as specified in the Android App Bundle's base module APK manifest file. */
		versionCode?: number | null;
	}

	/** Information about an app bundle. The resource for BundlesService. */
	export interface BundleFormProperties {

		/** A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command. */
		sha1: FormControl<string | null | undefined>,

		/** A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command. */
		sha256: FormControl<string | null | undefined>,

		/** The version code of the Android App Bundle, as specified in the Android App Bundle's base module APK manifest file. */
		versionCode: FormControl<number | null | undefined>,
	}
	export function CreateBundleFormGroup() {
		return new FormGroup<BundleFormProperties>({
			sha1: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response listing all app bundles. */
	export interface BundlesListResponse {

		/** All app bundles. */
		bundles?: Array<Bundle>;

		/** The kind of this response ("androidpublisher#bundlesListResponse"). */
		kind?: string | null;
	}

	/** Response listing all app bundles. */
	export interface BundlesListResponseFormProperties {

		/** The kind of this response ("androidpublisher#bundlesListResponse"). */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBundlesListResponseFormGroup() {
		return new FormGroup<BundlesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CancelAppRecovery. */
	export interface CancelAppRecoveryRequest {
	}

	/** Request message for CancelAppRecovery. */
	export interface CancelAppRecoveryRequestFormProperties {
	}
	export function CreateCancelAppRecoveryRequestFormGroup() {
		return new FormGroup<CancelAppRecoveryRequestFormProperties>({
		});

	}


	/** Response message for CancelAppRecovery. */
	export interface CancelAppRecoveryResponse {
	}

	/** Response message for CancelAppRecovery. */
	export interface CancelAppRecoveryResponseFormProperties {
	}
	export function CreateCancelAppRecoveryResponseFormGroup() {
		return new FormGroup<CancelAppRecoveryResponseFormProperties>({
		});

	}


	/** Result of the cancel survey when the subscription was canceled by the user. */
	export interface CancelSurveyResult {

		/** The reason the user selected in the cancel survey. */
		reason?: CancelSurveyResultReason | null;

		/** Only set for CANCEL_SURVEY_REASON_OTHERS. This is the user's freeform response to the survey. */
		reasonUserInput?: string | null;
	}

	/** Result of the cancel survey when the subscription was canceled by the user. */
	export interface CancelSurveyResultFormProperties {

		/** The reason the user selected in the cancel survey. */
		reason: FormControl<CancelSurveyResultReason | null | undefined>,

		/** Only set for CANCEL_SURVEY_REASON_OTHERS. This is the user's freeform response to the survey. */
		reasonUserInput: FormControl<string | null | undefined>,
	}
	export function CreateCancelSurveyResultFormGroup() {
		return new FormGroup<CancelSurveyResultFormProperties>({
			reason: new FormControl<CancelSurveyResultReason | null | undefined>(undefined),
			reasonUserInput: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CancelSurveyResultReason { CANCEL_SURVEY_REASON_UNSPECIFIED = 'CANCEL_SURVEY_REASON_UNSPECIFIED', CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE = 'CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE', CANCEL_SURVEY_REASON_TECHNICAL_ISSUES = 'CANCEL_SURVEY_REASON_TECHNICAL_ISSUES', CANCEL_SURVEY_REASON_COST_RELATED = 'CANCEL_SURVEY_REASON_COST_RELATED', CANCEL_SURVEY_REASON_FOUND_BETTER_APP = 'CANCEL_SURVEY_REASON_FOUND_BETTER_APP', CANCEL_SURVEY_REASON_OTHERS = 'CANCEL_SURVEY_REASON_OTHERS' }


	/** Information specific to a subscription in canceled state. */
	export interface CanceledStateContext {

		/** Information specific to cancellations initiated by developers. */
		developerInitiatedCancellation?: DeveloperInitiatedCancellation;

		/** Information specific to cancellations caused by subscription replacement. */
		replacementCancellation?: ReplacementCancellation;

		/** Information specific to cancellations initiated by Google system. */
		systemInitiatedCancellation?: SystemInitiatedCancellation;

		/** Information specific to cancellations initiated by users. */
		userInitiatedCancellation?: UserInitiatedCancellation;
	}

	/** Information specific to a subscription in canceled state. */
	export interface CanceledStateContextFormProperties {
	}
	export function CreateCanceledStateContextFormGroup() {
		return new FormGroup<CanceledStateContextFormProperties>({
		});

	}


	/** Information specific to cancellations initiated by developers. */
	export interface DeveloperInitiatedCancellation {
	}

	/** Information specific to cancellations initiated by developers. */
	export interface DeveloperInitiatedCancellationFormProperties {
	}
	export function CreateDeveloperInitiatedCancellationFormGroup() {
		return new FormGroup<DeveloperInitiatedCancellationFormProperties>({
		});

	}


	/** Information specific to cancellations caused by subscription replacement. */
	export interface ReplacementCancellation {
	}

	/** Information specific to cancellations caused by subscription replacement. */
	export interface ReplacementCancellationFormProperties {
	}
	export function CreateReplacementCancellationFormGroup() {
		return new FormGroup<ReplacementCancellationFormProperties>({
		});

	}


	/** Information specific to cancellations initiated by Google system. */
	export interface SystemInitiatedCancellation {
	}

	/** Information specific to cancellations initiated by Google system. */
	export interface SystemInitiatedCancellationFormProperties {
	}
	export function CreateSystemInitiatedCancellationFormGroup() {
		return new FormGroup<SystemInitiatedCancellationFormProperties>({
		});

	}


	/** Information specific to cancellations initiated by users. */
	export interface UserInitiatedCancellation {

		/** Result of the cancel survey when the subscription was canceled by the user. */
		cancelSurveyResult?: CancelSurveyResult;

		/** The time at which the subscription was canceled by the user. The user might still have access to the subscription after this time. Use line_items.expiry_time to determine if a user still has access. */
		cancelTime?: string | null;
	}

	/** Information specific to cancellations initiated by users. */
	export interface UserInitiatedCancellationFormProperties {

		/** The time at which the subscription was canceled by the user. The user might still have access to the subscription after this time. Use line_items.expiry_time to determine if a user still has access. */
		cancelTime: FormControl<string | null | undefined>,
	}
	export function CreateUserInitiatedCancellationFormGroup() {
		return new FormGroup<UserInitiatedCancellationFormProperties>({
			cancelTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entry of conversation between user and developer. */
	export interface Comment {

		/** Developer entry from conversation between user and developer. */
		developerComment?: DeveloperComment;

		/** User entry from conversation between user and developer. */
		userComment?: UserComment;
	}

	/** An entry of conversation between user and developer. */
	export interface CommentFormProperties {
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
		});

	}


	/** Developer entry from conversation between user and developer. */
	export interface DeveloperComment {

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970. */
		lastModified?: Timestamp;

		/** The content of the comment, i.e. reply body. */
		text?: string | null;
	}

	/** Developer entry from conversation between user and developer. */
	export interface DeveloperCommentFormProperties {

		/** The content of the comment, i.e. reply body. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateDeveloperCommentFormGroup() {
		return new FormGroup<DeveloperCommentFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970. */
	export interface Timestamp {

		/** Non-negative fractions of a second at nanosecond resolution. Must be from 0 to 999,999,999 inclusive. */
		nanos?: number | null;

		/** Represents seconds of UTC time since Unix epoch. */
		seconds?: string | null;
	}

	/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970. */
	export interface TimestampFormProperties {

		/** Non-negative fractions of a second at nanosecond resolution. Must be from 0 to 999,999,999 inclusive. */
		nanos: FormControl<number | null | undefined>,

		/** Represents seconds of UTC time since Unix epoch. */
		seconds: FormControl<string | null | undefined>,
	}
	export function CreateTimestampFormGroup() {
		return new FormGroup<TimestampFormProperties>({
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User entry from conversation between user and developer. */
	export interface UserComment {

		/** Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent. */
		androidOsVersion?: number | null;

		/** Integer version code of the app as installed at the time the review was written. May be absent. */
		appVersionCode?: number | null;

		/** String version name of the app as installed at the time the review was written. May be absent. */
		appVersionName?: string | null;

		/** Codename for the reviewer's device, e.g. klte, flounder. May be absent. */
		device?: string | null;

		/** Characteristics of the user's device. */
		deviceMetadata?: DeviceMetadata;

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970. */
		lastModified?: Timestamp;

		/** Untranslated text of the review, where the review was translated. If the review was not translated this is left blank. */
		originalText?: string | null;

		/** Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent. */
		reviewerLanguage?: string | null;

		/** The star rating associated with the review, from 1 to 5. */
		starRating?: number | null;

		/** The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character. */
		text?: string | null;

		/** Number of users who have given this review a thumbs down. */
		thumbsDownCount?: number | null;

		/** Number of users who have given this review a thumbs up. */
		thumbsUpCount?: number | null;
	}

	/** User entry from conversation between user and developer. */
	export interface UserCommentFormProperties {

		/** Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent. */
		androidOsVersion: FormControl<number | null | undefined>,

		/** Integer version code of the app as installed at the time the review was written. May be absent. */
		appVersionCode: FormControl<number | null | undefined>,

		/** String version name of the app as installed at the time the review was written. May be absent. */
		appVersionName: FormControl<string | null | undefined>,

		/** Codename for the reviewer's device, e.g. klte, flounder. May be absent. */
		device: FormControl<string | null | undefined>,

		/** Untranslated text of the review, where the review was translated. If the review was not translated this is left blank. */
		originalText: FormControl<string | null | undefined>,

		/** Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent. */
		reviewerLanguage: FormControl<string | null | undefined>,

		/** The star rating associated with the review, from 1 to 5. */
		starRating: FormControl<number | null | undefined>,

		/** The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character. */
		text: FormControl<string | null | undefined>,

		/** Number of users who have given this review a thumbs down. */
		thumbsDownCount: FormControl<number | null | undefined>,

		/** Number of users who have given this review a thumbs up. */
		thumbsUpCount: FormControl<number | null | undefined>,
	}
	export function CreateUserCommentFormGroup() {
		return new FormGroup<UserCommentFormProperties>({
			androidOsVersion: new FormControl<number | null | undefined>(undefined),
			appVersionCode: new FormControl<number | null | undefined>(undefined),
			appVersionName: new FormControl<string | null | undefined>(undefined),
			device: new FormControl<string | null | undefined>(undefined),
			originalText: new FormControl<string | null | undefined>(undefined),
			reviewerLanguage: new FormControl<string | null | undefined>(undefined),
			starRating: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			thumbsDownCount: new FormControl<number | null | undefined>(undefined),
			thumbsUpCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Characteristics of the user's device. */
	export interface DeviceMetadata {

		/** Device CPU make, e.g. "Qualcomm" */
		cpuMake?: string | null;

		/** Device CPU model, e.g. "MSM8974" */
		cpuModel?: string | null;

		/** Device class (e.g. tablet) */
		deviceClass?: string | null;

		/** OpenGL version */
		glEsVersion?: number | null;

		/** Device manufacturer (e.g. Motorola) */
		manufacturer?: string | null;

		/** Comma separated list of native platforms (e.g. "arm", "arm7") */
		nativePlatform?: string | null;

		/** Device model name (e.g. Droid) */
		productName?: string | null;

		/** Device RAM in Megabytes, e.g. "2048" */
		ramMb?: number | null;

		/** Screen density in DPI */
		screenDensityDpi?: number | null;

		/** Screen height in pixels */
		screenHeightPx?: number | null;

		/** Screen width in pixels */
		screenWidthPx?: number | null;
	}

	/** Characteristics of the user's device. */
	export interface DeviceMetadataFormProperties {

		/** Device CPU make, e.g. "Qualcomm" */
		cpuMake: FormControl<string | null | undefined>,

		/** Device CPU model, e.g. "MSM8974" */
		cpuModel: FormControl<string | null | undefined>,

		/** Device class (e.g. tablet) */
		deviceClass: FormControl<string | null | undefined>,

		/** OpenGL version */
		glEsVersion: FormControl<number | null | undefined>,

		/** Device manufacturer (e.g. Motorola) */
		manufacturer: FormControl<string | null | undefined>,

		/** Comma separated list of native platforms (e.g. "arm", "arm7") */
		nativePlatform: FormControl<string | null | undefined>,

		/** Device model name (e.g. Droid) */
		productName: FormControl<string | null | undefined>,

		/** Device RAM in Megabytes, e.g. "2048" */
		ramMb: FormControl<number | null | undefined>,

		/** Screen density in DPI */
		screenDensityDpi: FormControl<number | null | undefined>,

		/** Screen height in pixels */
		screenHeightPx: FormControl<number | null | undefined>,

		/** Screen width in pixels */
		screenWidthPx: FormControl<number | null | undefined>,
	}
	export function CreateDeviceMetadataFormGroup() {
		return new FormGroup<DeviceMetadataFormProperties>({
			cpuMake: new FormControl<string | null | undefined>(undefined),
			cpuModel: new FormControl<string | null | undefined>(undefined),
			deviceClass: new FormControl<string | null | undefined>(undefined),
			glEsVersion: new FormControl<number | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			nativePlatform: new FormControl<string | null | undefined>(undefined),
			productName: new FormControl<string | null | undefined>(undefined),
			ramMb: new FormControl<number | null | undefined>(undefined),
			screenDensityDpi: new FormControl<number | null | undefined>(undefined),
			screenHeightPx: new FormControl<number | null | undefined>(undefined),
			screenWidthPx: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for ConvertRegionPrices. */
	export interface ConvertRegionPricesRequest {

		/** Represents an amount of money with its currency type. */
		price?: Money;
	}

	/** Request message for ConvertRegionPrices. */
	export interface ConvertRegionPricesRequestFormProperties {
	}
	export function CreateConvertRegionPricesRequestFormGroup() {
		return new FormGroup<ConvertRegionPricesRequestFormProperties>({
		});

	}


	/** Response message for ConvertRegionPrices. */
	export interface ConvertRegionPricesResponse {

		/** Converted other regions prices. */
		convertedOtherRegionsPrice?: ConvertedOtherRegionsPrice;

		/** Map from region code to converted region price. */
		convertedRegionPrices?: {[id: string]: ConvertedRegionPrice };
	}

	/** Response message for ConvertRegionPrices. */
	export interface ConvertRegionPricesResponseFormProperties {

		/** Map from region code to converted region price. */
		convertedRegionPrices: FormControl<{[id: string]: ConvertedRegionPrice } | null | undefined>,
	}
	export function CreateConvertRegionPricesResponseFormGroup() {
		return new FormGroup<ConvertRegionPricesResponseFormProperties>({
			convertedRegionPrices: new FormControl<{[id: string]: ConvertedRegionPrice } | null | undefined>(undefined),
		});

	}


	/** Converted other regions prices. */
	export interface ConvertedOtherRegionsPrice {

		/** Represents an amount of money with its currency type. */
		eurPrice?: Money;

		/** Represents an amount of money with its currency type. */
		usdPrice?: Money;
	}

	/** Converted other regions prices. */
	export interface ConvertedOtherRegionsPriceFormProperties {
	}
	export function CreateConvertedOtherRegionsPriceFormGroup() {
		return new FormGroup<ConvertedOtherRegionsPriceFormProperties>({
		});

	}


	/** A converted region price. */
	export interface ConvertedRegionPrice {

		/** Represents an amount of money with its currency type. */
		price?: Money;

		/** The region code of the region. */
		regionCode?: string | null;

		/** Represents an amount of money with its currency type. */
		taxAmount?: Money;
	}

	/** A converted region price. */
	export interface ConvertedRegionPriceFormProperties {

		/** The region code of the region. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateConvertedRegionPriceFormGroup() {
		return new FormGroup<ConvertedRegionPriceFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Country targeting specification. */
	export interface CountryTargeting {

		/** Countries to target, specified as two letter [CLDR codes](https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html). */
		countries?: Array<string>;

		/** Include "rest of world" as well as explicitly targeted countries. */
		includeRestOfWorld?: boolean | null;
	}

	/** Country targeting specification. */
	export interface CountryTargetingFormProperties {

		/** Include "rest of world" as well as explicitly targeted countries. */
		includeRestOfWorld: FormControl<boolean | null | undefined>,
	}
	export function CreateCountryTargetingFormGroup() {
		return new FormGroup<CountryTargetingFormProperties>({
			includeRestOfWorld: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for CreateDraftAppRecovery. */
	export interface CreateDraftAppRecoveryRequest {

		/** Object representation for Remote in-app update action type. */
		remoteInAppUpdate?: RemoteInAppUpdate;

		/** Targeting details for a recovery action such as regions, android sdk levels, app versions etc. */
		targeting?: Targeting;
	}

	/** Request message for CreateDraftAppRecovery. */
	export interface CreateDraftAppRecoveryRequestFormProperties {
	}
	export function CreateCreateDraftAppRecoveryRequestFormGroup() {
		return new FormGroup<CreateDraftAppRecoveryRequestFormProperties>({
		});

	}


	/** Object representation for Remote in-app update action type. */
	export interface RemoteInAppUpdate {

		/** Required. Set to true if Remote In-App Update action type is needed. */
		isRemoteInAppUpdateRequested?: boolean | null;
	}

	/** Object representation for Remote in-app update action type. */
	export interface RemoteInAppUpdateFormProperties {

		/** Required. Set to true if Remote In-App Update action type is needed. */
		isRemoteInAppUpdateRequested: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoteInAppUpdateFormGroup() {
		return new FormGroup<RemoteInAppUpdateFormProperties>({
			isRemoteInAppUpdateRequested: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information related to deferred item replacement. */
	export interface DeferredItemReplacement {

		/** The product_id going to replace the existing product_id. */
		productId?: string | null;
	}

	/** Information related to deferred item replacement. */
	export interface DeferredItemReplacementFormProperties {

		/** The product_id going to replace the existing product_id. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateDeferredItemReplacementFormGroup() {
		return new FormGroup<DeferredItemReplacementFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a deobfuscation file. */
	export interface DeobfuscationFile {

		/** The type of the deobfuscation file. */
		symbolType?: DeobfuscationFileSymbolType | null;
	}

	/** Represents a deobfuscation file. */
	export interface DeobfuscationFileFormProperties {

		/** The type of the deobfuscation file. */
		symbolType: FormControl<DeobfuscationFileSymbolType | null | undefined>,
	}
	export function CreateDeobfuscationFileFormGroup() {
		return new FormGroup<DeobfuscationFileFormProperties>({
			symbolType: new FormControl<DeobfuscationFileSymbolType | null | undefined>(undefined),
		});

	}

	export enum DeobfuscationFileSymbolType { deobfuscationFileTypeUnspecified = 'deobfuscationFileTypeUnspecified', proguard = 'proguard', nativeCode = 'nativeCode' }


	/** Responses for the upload. */
	export interface DeobfuscationFilesUploadResponse {

		/** Represents a deobfuscation file. */
		deobfuscationFile?: DeobfuscationFile;
	}

	/** Responses for the upload. */
	export interface DeobfuscationFilesUploadResponseFormProperties {
	}
	export function CreateDeobfuscationFilesUploadResponseFormGroup() {
		return new FormGroup<DeobfuscationFilesUploadResponseFormProperties>({
		});

	}


	/** Request message for DeployAppRecovery. */
	export interface DeployAppRecoveryRequest {
	}

	/** Request message for DeployAppRecovery. */
	export interface DeployAppRecoveryRequestFormProperties {
	}
	export function CreateDeployAppRecoveryRequestFormGroup() {
		return new FormGroup<DeployAppRecoveryRequestFormProperties>({
		});

	}


	/** Response message for DeployAppRecovery. */
	export interface DeployAppRecoveryResponse {
	}

	/** Response message for DeployAppRecovery. */
	export interface DeployAppRecoveryResponseFormProperties {
	}
	export function CreateDeployAppRecoveryResponseFormGroup() {
		return new FormGroup<DeployAppRecoveryResponseFormProperties>({
		});

	}


	/** A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR). */
	export interface DeviceGroup {

		/** Device selectors for this group. A device matching any of the selectors is included in this group. */
		deviceSelectors?: Array<DeviceSelector>;

		/** The name of the group. */
		name?: string | null;
	}

	/** A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR). */
	export interface DeviceGroupFormProperties {

		/** The name of the group. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeviceGroupFormGroup() {
		return new FormGroup<DeviceGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models */
	export interface DeviceSelector {

		/** Conditions about a device's RAM capabilities. */
		deviceRam?: DeviceRam;

		/** Device models excluded by this selector, even if they match all other conditions. */
		excludedDeviceIds?: Array<DeviceId>;

		/** A device that has any of these system features is excluded by this selector, even if it matches all other conditions. */
		forbiddenSystemFeatures?: Array<SystemFeature>;

		/** Device models included by this selector. */
		includedDeviceIds?: Array<DeviceId>;

		/** A device needs to have all these system features to be included by the selector. */
		requiredSystemFeatures?: Array<SystemFeature>;
	}

	/** Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models */
	export interface DeviceSelectorFormProperties {
	}
	export function CreateDeviceSelectorFormGroup() {
		return new FormGroup<DeviceSelectorFormProperties>({
		});

	}


	/** Conditions about a device's RAM capabilities. */
	export interface DeviceRam {

		/** Maximum RAM in bytes (bound excluded). */
		maxBytes?: string | null;

		/** Minimum RAM in bytes (bound included). */
		minBytes?: string | null;
	}

	/** Conditions about a device's RAM capabilities. */
	export interface DeviceRamFormProperties {

		/** Maximum RAM in bytes (bound excluded). */
		maxBytes: FormControl<string | null | undefined>,

		/** Minimum RAM in bytes (bound included). */
		minBytes: FormControl<string | null | undefined>,
	}
	export function CreateDeviceRamFormGroup() {
		return new FormGroup<DeviceRamFormProperties>({
			maxBytes: new FormControl<string | null | undefined>(undefined),
			minBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifier of a device. */
	export interface DeviceId {

		/** Value of Build.BRAND. */
		buildBrand?: string | null;

		/** Value of Build.DEVICE. */
		buildDevice?: string | null;
	}

	/** Identifier of a device. */
	export interface DeviceIdFormProperties {

		/** Value of Build.BRAND. */
		buildBrand: FormControl<string | null | undefined>,

		/** Value of Build.DEVICE. */
		buildDevice: FormControl<string | null | undefined>,
	}
	export function CreateDeviceIdFormGroup() {
		return new FormGroup<DeviceIdFormProperties>({
			buildBrand: new FormControl<string | null | undefined>(undefined),
			buildDevice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a system feature. */
	export interface SystemFeature {

		/** The name of the feature. */
		name?: string | null;
	}

	/** Representation of a system feature. */
	export interface SystemFeatureFormProperties {

		/** The name of the feature. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSystemFeatureFormGroup() {
		return new FormGroup<SystemFeatureFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The device spec used to generate a system APK. */
	export interface DeviceSpec {

		/** Screen dpi. */
		screenDensity?: number | null;

		/** Supported ABI architectures in the order of preference. The values should be the string as reported by the platform, e.g. "armeabi-v7a", "x86_64". */
		supportedAbis?: Array<string>;

		/** All installed locales represented as BCP-47 strings, e.g. "en-US". */
		supportedLocales?: Array<string>;
	}

	/** The device spec used to generate a system APK. */
	export interface DeviceSpecFormProperties {

		/** Screen dpi. */
		screenDensity: FormControl<number | null | undefined>,
	}
	export function CreateDeviceSpecFormGroup() {
		return new FormGroup<DeviceSpecFormProperties>({
			screenDensity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier. */
	export interface DeviceTier {

		/** Groups of devices included in this tier. These groups must be defined explicitly under device_groups in this configuration. */
		deviceGroupNames?: Array<string>;

		/** The priority level of the tier. Tiers are evaluated in descending order of level: the highest level tier has the highest priority. The highest tier matching a given device is selected for that device. You should use a contiguous range of levels for your tiers in a tier set; tier levels in a tier set must be unique. For instance, if your tier set has 4 tiers (including the global fallback), you should define tiers 1, 2 and 3 in this configuration. Note: tier 0 is implicitly defined as a global fallback and selected for devices that don't match any of the tiers explicitly defined here. You mustn't define level 0 explicitly in this configuration. */
		level?: number | null;
	}

	/** A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier. */
	export interface DeviceTierFormProperties {

		/** The priority level of the tier. Tiers are evaluated in descending order of level: the highest level tier has the highest priority. The highest tier matching a given device is selected for that device. You should use a contiguous range of levels for your tiers in a tier set; tier levels in a tier set must be unique. For instance, if your tier set has 4 tiers (including the global fallback), you should define tiers 1, 2 and 3 in this configuration. Note: tier 0 is implicitly defined as a global fallback and selected for devices that don't match any of the tiers explicitly defined here. You mustn't define level 0 explicitly in this configuration. */
		level: FormControl<number | null | undefined>,
	}
	export function CreateDeviceTierFormGroup() {
		return new FormGroup<DeviceTierFormProperties>({
			level: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration describing device targeting criteria for the content of an app. */
	export interface DeviceTierConfig {

		/** Definition of device groups for the app. */
		deviceGroups?: Array<DeviceGroup>;

		/** Output only. The device tier config ID. */
		deviceTierConfigId?: string | null;

		/** A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details. */
		deviceTierSet?: DeviceTierSet;

		/** Definition of user country sets for the app. */
		userCountrySets?: Array<UserCountrySet>;
	}

	/** Configuration describing device targeting criteria for the content of an app. */
	export interface DeviceTierConfigFormProperties {

		/** Output only. The device tier config ID. */
		deviceTierConfigId: FormControl<string | null | undefined>,
	}
	export function CreateDeviceTierConfigFormGroup() {
		return new FormGroup<DeviceTierConfigFormProperties>({
			deviceTierConfigId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details. */
	export interface DeviceTierSet {

		/** Device tiers belonging to the set. */
		deviceTiers?: Array<DeviceTier>;
	}

	/** A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details. */
	export interface DeviceTierSetFormProperties {
	}
	export function CreateDeviceTierSetFormGroup() {
		return new FormGroup<DeviceTierSetFormProperties>({
		});

	}


	/** A set of user countries. A country set determines what variation of app content gets served to a specific location. */
	export interface UserCountrySet {

		/** List of country codes representing countries. A Country code is represented in ISO 3166 alpha-2 format. For Example:- "IT" for Italy, "GE" for Georgia. */
		countryCodes?: Array<string>;

		/** Country set name. */
		name?: string | null;
	}

	/** A set of user countries. A country set determines what variation of app content gets served to a specific location. */
	export interface UserCountrySetFormProperties {

		/** Country set name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserCountrySetFormGroup() {
		return new FormGroup<UserCountrySetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An expansion file. The resource for ExpansionFilesService. */
	export interface ExpansionFile {

		/** If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes. */
		fileSize?: string | null;

		/** If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set. */
		referencesVersion?: number | null;
	}

	/** An expansion file. The resource for ExpansionFilesService. */
	export interface ExpansionFileFormProperties {

		/** If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes. */
		fileSize: FormControl<string | null | undefined>,

		/** If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set. */
		referencesVersion: FormControl<number | null | undefined>,
	}
	export function CreateExpansionFileFormGroup() {
		return new FormGroup<ExpansionFileFormProperties>({
			fileSize: new FormControl<string | null | undefined>(undefined),
			referencesVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for uploading an expansion file. */
	export interface ExpansionFilesUploadResponse {

		/** An expansion file. The resource for ExpansionFilesService. */
		expansionFile?: ExpansionFile;
	}

	/** Response for uploading an expansion file. */
	export interface ExpansionFilesUploadResponseFormProperties {
	}
	export function CreateExpansionFilesUploadResponseFormGroup() {
		return new FormGroup<ExpansionFilesUploadResponseFormProperties>({
		});

	}


	/** User account identifier in the third-party service. */
	export interface ExternalAccountIdentifiers {

		/** User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow. */
		externalAccountId?: string | null;

		/** An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. */
		obfuscatedExternalAccountId?: string | null;

		/** An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. */
		obfuscatedExternalProfileId?: string | null;
	}

	/** User account identifier in the third-party service. */
	export interface ExternalAccountIdentifiersFormProperties {

		/** User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow. */
		externalAccountId: FormControl<string | null | undefined>,

		/** An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. */
		obfuscatedExternalAccountId: FormControl<string | null | undefined>,

		/** An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. */
		obfuscatedExternalProfileId: FormControl<string | null | undefined>,
	}
	export function CreateExternalAccountIdentifiersFormGroup() {
		return new FormGroup<ExternalAccountIdentifiersFormProperties>({
			externalAccountId: new FormControl<string | null | undefined>(undefined),
			obfuscatedExternalAccountId: new FormControl<string | null | undefined>(undefined),
			obfuscatedExternalProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of an external subscription. */
	export interface ExternalSubscription {

		/** Required. The type of the external subscription. */
		subscriptionType?: ExternalSubscriptionSubscriptionType | null;
	}

	/** Details of an external subscription. */
	export interface ExternalSubscriptionFormProperties {

		/** Required. The type of the external subscription. */
		subscriptionType: FormControl<ExternalSubscriptionSubscriptionType | null | undefined>,
	}
	export function CreateExternalSubscriptionFormGroup() {
		return new FormGroup<ExternalSubscriptionFormProperties>({
			subscriptionType: new FormControl<ExternalSubscriptionSubscriptionType | null | undefined>(undefined),
		});

	}

	export enum ExternalSubscriptionSubscriptionType { SUBSCRIPTION_TYPE_UNSPECIFIED = 'SUBSCRIPTION_TYPE_UNSPECIFIED', RECURRING = 'RECURRING', PREPAID = 'PREPAID' }


	/** The details of an external transaction. */
	export interface ExternalTransaction {

		/** Output only. The time when this transaction was created. This is the time when Google was notified of the transaction. */
		createTime?: string | null;

		/** Definition of a price, i.e. currency and units. */
		currentPreTaxAmount?: Price;

		/** Definition of a price, i.e. currency and units. */
		currentTaxAmount?: Price;

		/** Output only. The id of this transaction. All transaction ids under the same package name must be unique. Set when creating the external transaction. */
		externalTransactionId?: string | null;

		/** Represents a one-time transaction. */
		oneTimeTransaction?: OneTimeExternalTransaction;

		/** Definition of a price, i.e. currency and units. */
		originalPreTaxAmount?: Price;

		/** Definition of a price, i.e. currency and units. */
		originalTaxAmount?: Price;

		/** Output only. The resource name of the external transaction. The package name of the application the inapp products were sold (for example, 'com.some.app'). */
		packageName?: string | null;

		/** Represents a transaction that is part of a recurring series of payments. This can be a subscription or a one-time product with multiple payments (such as preorder). */
		recurringTransaction?: RecurringExternalTransaction;

		/** Represents a transaction performed using a test account. These transactions will not be charged by Google. */
		testPurchase?: ExternalTransactionTestPurchase;

		/** Output only. The current state of the transaction. */
		transactionState?: ExternalTransactionTransactionState | null;

		/** Required. The time when the transaction was completed. */
		transactionTime?: string | null;

		/** User's address for the external transaction. */
		userTaxAddress?: ExternalTransactionAddress;
	}

	/** The details of an external transaction. */
	export interface ExternalTransactionFormProperties {

		/** Output only. The time when this transaction was created. This is the time when Google was notified of the transaction. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The id of this transaction. All transaction ids under the same package name must be unique. Set when creating the external transaction. */
		externalTransactionId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the external transaction. The package name of the application the inapp products were sold (for example, 'com.some.app'). */
		packageName: FormControl<string | null | undefined>,

		/** Output only. The current state of the transaction. */
		transactionState: FormControl<ExternalTransactionTransactionState | null | undefined>,

		/** Required. The time when the transaction was completed. */
		transactionTime: FormControl<string | null | undefined>,
	}
	export function CreateExternalTransactionFormGroup() {
		return new FormGroup<ExternalTransactionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			externalTransactionId: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			transactionState: new FormControl<ExternalTransactionTransactionState | null | undefined>(undefined),
			transactionTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a price, i.e. currency and units. */
	export interface Price {

		/** 3 letter Currency code, as defined by ISO 4217. See java/com/google/common/money/CurrencyCode.java */
		currency?: string | null;

		/** Price in 1/million of the currency base unit, represented as a string. */
		priceMicros?: string | null;
	}

	/** Definition of a price, i.e. currency and units. */
	export interface PriceFormProperties {

		/** 3 letter Currency code, as defined by ISO 4217. See java/com/google/common/money/CurrencyCode.java */
		currency: FormControl<string | null | undefined>,

		/** Price in 1/million of the currency base unit, represented as a string. */
		priceMicros: FormControl<string | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			priceMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a one-time transaction. */
	export interface OneTimeExternalTransaction {

		/** Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. */
		externalTransactionToken?: string | null;
	}

	/** Represents a one-time transaction. */
	export interface OneTimeExternalTransactionFormProperties {

		/** Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. */
		externalTransactionToken: FormControl<string | null | undefined>,
	}
	export function CreateOneTimeExternalTransactionFormGroup() {
		return new FormGroup<OneTimeExternalTransactionFormProperties>({
			externalTransactionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a transaction that is part of a recurring series of payments. This can be a subscription or a one-time product with multiple payments (such as preorder). */
	export interface RecurringExternalTransaction {

		/** Details of an external subscription. */
		externalSubscription?: ExternalSubscription;

		/** Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. Required only for the initial purchase. */
		externalTransactionToken?: string | null;

		/** The external transaction id of the first transaction of this recurring series of transactions. For example, for a subscription this would be the transaction id of the first payment. Required when creating recurring external transactions. */
		initialExternalTransactionId?: string | null;

		/** Input only. Provided during the call to Create. Must only be used when migrating a subscription from manual monthly reporting to automated reporting. */
		migratedTransactionProgram?: RecurringExternalTransactionMigratedTransactionProgram | null;
	}

	/** Represents a transaction that is part of a recurring series of payments. This can be a subscription or a one-time product with multiple payments (such as preorder). */
	export interface RecurringExternalTransactionFormProperties {

		/** Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. Required only for the initial purchase. */
		externalTransactionToken: FormControl<string | null | undefined>,

		/** The external transaction id of the first transaction of this recurring series of transactions. For example, for a subscription this would be the transaction id of the first payment. Required when creating recurring external transactions. */
		initialExternalTransactionId: FormControl<string | null | undefined>,

		/** Input only. Provided during the call to Create. Must only be used when migrating a subscription from manual monthly reporting to automated reporting. */
		migratedTransactionProgram: FormControl<RecurringExternalTransactionMigratedTransactionProgram | null | undefined>,
	}
	export function CreateRecurringExternalTransactionFormGroup() {
		return new FormGroup<RecurringExternalTransactionFormProperties>({
			externalTransactionToken: new FormControl<string | null | undefined>(undefined),
			initialExternalTransactionId: new FormControl<string | null | undefined>(undefined),
			migratedTransactionProgram: new FormControl<RecurringExternalTransactionMigratedTransactionProgram | null | undefined>(undefined),
		});

	}

	export enum RecurringExternalTransactionMigratedTransactionProgram { EXTERNAL_TRANSACTION_PROGRAM_UNSPECIFIED = 'EXTERNAL_TRANSACTION_PROGRAM_UNSPECIFIED', USER_CHOICE_BILLING = 'USER_CHOICE_BILLING', ALTERTNATIVE_BILLING_ONLY = 'ALTERTNATIVE_BILLING_ONLY' }


	/** Represents a transaction performed using a test account. These transactions will not be charged by Google. */
	export interface ExternalTransactionTestPurchase {
	}

	/** Represents a transaction performed using a test account. These transactions will not be charged by Google. */
	export interface ExternalTransactionTestPurchaseFormProperties {
	}
	export function CreateExternalTransactionTestPurchaseFormGroup() {
		return new FormGroup<ExternalTransactionTestPurchaseFormProperties>({
		});

	}

	export enum ExternalTransactionTransactionState { TRANSACTION_STATE_UNSPECIFIED = 'TRANSACTION_STATE_UNSPECIFIED', TRANSACTION_REPORTED = 'TRANSACTION_REPORTED', TRANSACTION_CANCELED = 'TRANSACTION_CANCELED' }


	/** User's address for the external transaction. */
	export interface ExternalTransactionAddress {

		/** Optional. Top-level administrative subdivision of the country/region. Only required for transactions in India. Valid values are "ANDAMAN AND NICOBAR ISLANDS", "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR", "CHANDIGARH", "CHHATTISGARH", "DADRA AND NAGAR HAVELI", "DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "DAMAN AND DIU", "DELHI", "GOA", "GUJARAT", "HARYANA", "HIMACHAL PRADESH", "JAMMU AND KASHMIR", "JHARKHAND", "KARNATAKA", "KERALA", "LADAKH", "LAKSHADWEEP", "MADHYA PRADESH", "MAHARASHTRA", "MANIPUR", "MEGHALAYA", "MIZORAM", "NAGALAND", "ODISHA", "PUDUCHERRY", "PUNJAB", "RAJASTHAN", "SIKKIM", "TAMIL NADU", "TELANGANA", "TRIPURA", "UTTAR PRADESH", "UTTARAKHAND", and "WEST BENGAL". */
		administrativeArea?: string | null;

		/** Required. Two letter region code based on ISO-3166-1 Alpha-2 (UN region codes). */
		regionCode?: string | null;
	}

	/** User's address for the external transaction. */
	export interface ExternalTransactionAddressFormProperties {

		/** Optional. Top-level administrative subdivision of the country/region. Only required for transactions in India. Valid values are "ANDAMAN AND NICOBAR ISLANDS", "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR", "CHANDIGARH", "CHHATTISGARH", "DADRA AND NAGAR HAVELI", "DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "DAMAN AND DIU", "DELHI", "GOA", "GUJARAT", "HARYANA", "HIMACHAL PRADESH", "JAMMU AND KASHMIR", "JHARKHAND", "KARNATAKA", "KERALA", "LADAKH", "LAKSHADWEEP", "MADHYA PRADESH", "MAHARASHTRA", "MANIPUR", "MEGHALAYA", "MIZORAM", "NAGALAND", "ODISHA", "PUDUCHERRY", "PUNJAB", "RAJASTHAN", "SIKKIM", "TAMIL NADU", "TELANGANA", "TRIPURA", "UTTAR PRADESH", "UTTARAKHAND", and "WEST BENGAL". */
		administrativeArea: FormControl<string | null | undefined>,

		/** Required. Two letter region code based on ISO-3166-1 Alpha-2 (UN region codes). */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateExternalTransactionAddressFormGroup() {
		return new FormGroup<ExternalTransactionAddressFormProperties>({
			administrativeArea: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A full refund of the remaining amount of a transaction. */
	export interface FullRefund {
	}

	/** A full refund of the remaining amount of a transaction. */
	export interface FullRefundFormProperties {
	}
	export function CreateFullRefundFormGroup() {
		return new FormGroup<FullRefundFormProperties>({
		});

	}


	/** Response to list generated APKs. */
	export interface GeneratedApksListResponse {

		/** All generated APKs, grouped by the APK signing key. */
		generatedApks?: Array<GeneratedApksPerSigningKey>;
	}

	/** Response to list generated APKs. */
	export interface GeneratedApksListResponseFormProperties {
	}
	export function CreateGeneratedApksListResponseFormGroup() {
		return new FormGroup<GeneratedApksListResponseFormProperties>({
		});

	}


	/** Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key. */
	export interface GeneratedApksPerSigningKey {

		/** SHA256 hash of the APK signing public key certificate. */
		certificateSha256Hash?: string | null;

		/** List of asset pack slices which will be served for this app bundle, signed with a key corresponding to certificate_sha256_hash. */
		generatedAssetPackSlices?: Array<GeneratedAssetPackSlice>;

		/** Generated recovery apks for recovery actions signed with a key corresponding to certificate_sha256_hash. This includes all generated recovery APKs, also those in draft or cancelled state. This field is not set if no recovery actions were created for this signing key. */
		generatedRecoveryModules?: Array<GeneratedRecoveryApk>;

		/** List of generated split APKs, signed with a key corresponding to certificate_sha256_hash. */
		generatedSplitApks?: Array<GeneratedSplitApk>;

		/** List of generated standalone APKs, signed with a key corresponding to certificate_sha256_hash. */
		generatedStandaloneApks?: Array<GeneratedStandaloneApk>;

		/** Download metadata for a universal APK. */
		generatedUniversalApk?: GeneratedUniversalApk;

		/** Targeting information about the generated apks. */
		targetingInfo?: TargetingInfo;
	}

	/** Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key. */
	export interface GeneratedApksPerSigningKeyFormProperties {

		/** SHA256 hash of the APK signing public key certificate. */
		certificateSha256Hash: FormControl<string | null | undefined>,
	}
	export function CreateGeneratedApksPerSigningKeyFormGroup() {
		return new FormGroup<GeneratedApksPerSigningKeyFormProperties>({
			certificateSha256Hash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Download metadata for an asset pack slice. */
	export interface GeneratedAssetPackSlice {

		/** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
		downloadId?: string | null;

		/** Name of the module that this asset slice belongs to. */
		moduleName?: string | null;

		/** Asset slice ID. */
		sliceId?: string | null;

		/** Asset module version. */
		version?: string | null;
	}

	/** Download metadata for an asset pack slice. */
	export interface GeneratedAssetPackSliceFormProperties {

		/** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
		downloadId: FormControl<string | null | undefined>,

		/** Name of the module that this asset slice belongs to. */
		moduleName: FormControl<string | null | undefined>,

		/** Asset slice ID. */
		sliceId: FormControl<string | null | undefined>,

		/** Asset module version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGeneratedAssetPackSliceFormGroup() {
		return new FormGroup<GeneratedAssetPackSliceFormProperties>({
			downloadId: new FormControl<string | null | undefined>(undefined),
			moduleName: new FormControl<string | null | undefined>(undefined),
			sliceId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Download metadata for an app recovery module. */
	export interface GeneratedRecoveryApk {

		/** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
		downloadId?: string | null;

		/** Name of the module which recovery apk belongs to. */
		moduleName?: string | null;

		/** ID of the recovery action. */
		recoveryId?: string | null;

		/** The status of the recovery action corresponding to the recovery apk. */
		recoveryStatus?: AppRecoveryActionStatus | null;
	}

	/** Download metadata for an app recovery module. */
	export interface GeneratedRecoveryApkFormProperties {

		/** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
		downloadId: FormControl<string | null | undefined>,

		/** Name of the module which recovery apk belongs to. */
		moduleName: FormControl<string | null | undefined>,

		/** ID of the recovery action. */
		recoveryId: FormControl<string | null | undefined>,

		/** The status of the recovery action corresponding to the recovery apk. */
		recoveryStatus: FormControl<AppRecoveryActionStatus | null | undefined>,
	}
	export function CreateGeneratedRecoveryApkFormGroup() {
		return new FormGroup<GeneratedRecoveryApkFormProperties>({
			downloadId: new FormControl<string | null | undefined>(undefined),
			moduleName: new FormControl<string | null | undefined>(undefined),
			recoveryId: new FormControl<string | null | undefined>(undefined),
			recoveryStatus: new FormControl<AppRecoveryActionStatus | null | undefined>(undefined),
		});

	}


	/** Download metadata for a split APK. */
	export interface GeneratedSplitApk {

		/** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
		downloadId?: string | null;

		/** Name of the module that this APK belongs to. */
		moduleName?: string | null;

		/** Split ID. Empty for the main split of the base module. */
		splitId?: string | null;

		/** ID of the generated variant. */
		variantId?: number | null;
	}

	/** Download metadata for a split APK. */
	export interface GeneratedSplitApkFormProperties {

		/** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
		downloadId: FormControl<string | null | undefined>,

		/** Name of the module that this APK belongs to. */
		moduleName: FormControl<string | null | undefined>,

		/** Split ID. Empty for the main split of the base module. */
		splitId: FormControl<string | null | undefined>,

		/** ID of the generated variant. */
		variantId: FormControl<number | null | undefined>,
	}
	export function CreateGeneratedSplitApkFormGroup() {
		return new FormGroup<GeneratedSplitApkFormProperties>({
			downloadId: new FormControl<string | null | undefined>(undefined),
			moduleName: new FormControl<string | null | undefined>(undefined),
			splitId: new FormControl<string | null | undefined>(undefined),
			variantId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Download metadata for a standalone APK. */
	export interface GeneratedStandaloneApk {

		/** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
		downloadId?: string | null;

		/** ID of the generated variant. */
		variantId?: number | null;
	}

	/** Download metadata for a standalone APK. */
	export interface GeneratedStandaloneApkFormProperties {

		/** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
		downloadId: FormControl<string | null | undefined>,

		/** ID of the generated variant. */
		variantId: FormControl<number | null | undefined>,
	}
	export function CreateGeneratedStandaloneApkFormGroup() {
		return new FormGroup<GeneratedStandaloneApkFormProperties>({
			downloadId: new FormControl<string | null | undefined>(undefined),
			variantId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Download metadata for a universal APK. */
	export interface GeneratedUniversalApk {

		/** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
		downloadId?: string | null;
	}

	/** Download metadata for a universal APK. */
	export interface GeneratedUniversalApkFormProperties {

		/** Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method. */
		downloadId: FormControl<string | null | undefined>,
	}
	export function CreateGeneratedUniversalApkFormGroup() {
		return new FormGroup<GeneratedUniversalApkFormProperties>({
			downloadId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Targeting information about the generated apks. */
	export interface TargetingInfo {

		/** List of created asset slices. */
		assetSliceSet?: Array<AssetSliceSet>;

		/** The package name of this app. */
		packageName?: string | null;

		/** List of the created variants. */
		variant?: Array<SplitApkVariant>;
	}

	/** Targeting information about the generated apks. */
	export interface TargetingInfoFormProperties {

		/** The package name of this app. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateTargetingInfoFormGroup() {
		return new FormGroup<TargetingInfoFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Variant is a group of APKs that covers a part of the device configuration space. APKs from multiple variants are never combined on one device. */
	export interface SplitApkVariant {

		/** Set of APKs, one set per module. */
		apkSet?: Array<ApkSet>;

		/** Targeting on the level of variants. */
		targeting?: VariantTargeting;

		/** Number of the variant, starting at 0 (unless overridden). A device will receive APKs from the first variant that matches the device configuration, with higher variant numbers having priority over lower variant numbers. */
		variantNumber?: number | null;
	}

	/** Variant is a group of APKs that covers a part of the device configuration space. APKs from multiple variants are never combined on one device. */
	export interface SplitApkVariantFormProperties {

		/** Number of the variant, starting at 0 (unless overridden). A device will receive APKs from the first variant that matches the device configuration, with higher variant numbers having priority over lower variant numbers. */
		variantNumber: FormControl<number | null | undefined>,
	}
	export function CreateSplitApkVariantFormGroup() {
		return new FormGroup<SplitApkVariantFormProperties>({
			variantNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Targeting on the level of variants. */
	export interface VariantTargeting {

		/** Targeting based on Abi. */
		abiTargeting?: AbiTargeting;

		/** Targeting based on multiple abis. */
		multiAbiTargeting?: MultiAbiTargeting;

		/** Targeting based on screen density. */
		screenDensityTargeting?: ScreenDensityTargeting;

		/** Targeting based on sdk version. */
		sdkVersionTargeting?: SdkVersionTargeting;

		/** Targeting by a texture compression format. */
		textureCompressionFormatTargeting?: TextureCompressionFormatTargeting;
	}

	/** Targeting on the level of variants. */
	export interface VariantTargetingFormProperties {
	}
	export function CreateVariantTargetingFormGroup() {
		return new FormGroup<VariantTargetingFormProperties>({
		});

	}


	/** An access grant resource. */
	export interface Grant {

		/** The permissions granted to the user for this app. */
		appLevelPermissions?: Array<string>;

		/** Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name. */
		name?: string | null;

		/** Immutable. The package name of the app. This will be empty for draft apps. */
		packageName?: string | null;
	}

	/** An access grant resource. */
	export interface GrantFormProperties {

		/** Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The package name of the app. This will be empty for draft apps. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateGrantFormGroup() {
		return new FormGroup<GrantFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An uploaded image. The resource for ImagesService. */
	export interface Image {

		/** A unique id representing this image. */
		id?: string | null;

		/** A sha1 hash of the image. */
		sha1?: string | null;

		/** A sha256 hash of the image. */
		sha256?: string | null;

		/** A URL that will serve a preview of the image. */
		url?: string | null;
	}

	/** An uploaded image. The resource for ImagesService. */
	export interface ImageFormProperties {

		/** A unique id representing this image. */
		id: FormControl<string | null | undefined>,

		/** A sha1 hash of the image. */
		sha1: FormControl<string | null | undefined>,

		/** A sha256 hash of the image. */
		sha256: FormControl<string | null | undefined>,

		/** A URL that will serve a preview of the image. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			sha1: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for deleting all images. */
	export interface ImagesDeleteAllResponse {

		/** The deleted images. */
		deleted?: Array<Image>;
	}

	/** Response for deleting all images. */
	export interface ImagesDeleteAllResponseFormProperties {
	}
	export function CreateImagesDeleteAllResponseFormGroup() {
		return new FormGroup<ImagesDeleteAllResponseFormProperties>({
		});

	}


	/** Response listing all images. */
	export interface ImagesListResponse {

		/** All listed Images. */
		images?: Array<Image>;
	}

	/** Response listing all images. */
	export interface ImagesListResponseFormProperties {
	}
	export function CreateImagesListResponseFormGroup() {
		return new FormGroup<ImagesListResponseFormProperties>({
		});

	}


	/** Response for uploading an image. */
	export interface ImagesUploadResponse {

		/** An uploaded image. The resource for ImagesService. */
		image?: Image;
	}

	/** Response for uploading an image. */
	export interface ImagesUploadResponseFormProperties {
	}
	export function CreateImagesUploadResponseFormGroup() {
		return new FormGroup<ImagesUploadResponseFormProperties>({
		});

	}


	/** An in-app product. The resource for InappproductsService. */
	export interface InAppProduct {

		/** Default language of the localized data, as defined by BCP-47. e.g. "en-US". */
		defaultLanguage?: string | null;

		/** Definition of a price, i.e. currency and units. */
		defaultPrice?: Price;

		/** Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days). */
		gracePeriod?: string | null;

		/** List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US". */
		listings?: {[id: string]: InAppProductListing };

		/** Details about taxation and legal compliance for managed products. */
		managedProductTaxesAndComplianceSettings?: ManagedProductTaxAndComplianceSettings;

		/** Package name of the parent app. */
		packageName?: string | null;

		/** Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2. */
		prices?: {[id: string]: Price };

		/** The type of the product, e.g. a recurring subscription. */
		purchaseType?: InAppProductPurchaseType | null;

		/** Stock-keeping-unit (SKU) of the product, unique within an app. */
		sku?: string | null;

		/** The status of the product, e.g. whether it's active. */
		status?: InAppProductStatus | null;

		/** Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year). */
		subscriptionPeriod?: string | null;

		/** Details about taxation, Google Play policy and legal compliance for subscription products. */
		subscriptionTaxesAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;

		/** Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days). */
		trialPeriod?: string | null;
	}

	/** An in-app product. The resource for InappproductsService. */
	export interface InAppProductFormProperties {

		/** Default language of the localized data, as defined by BCP-47. e.g. "en-US". */
		defaultLanguage: FormControl<string | null | undefined>,

		/** Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days). */
		gracePeriod: FormControl<string | null | undefined>,

		/** List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US". */
		listings: FormControl<{[id: string]: InAppProductListing } | null | undefined>,

		/** Package name of the parent app. */
		packageName: FormControl<string | null | undefined>,

		/** Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2. */
		prices: FormControl<{[id: string]: Price } | null | undefined>,

		/** The type of the product, e.g. a recurring subscription. */
		purchaseType: FormControl<InAppProductPurchaseType | null | undefined>,

		/** Stock-keeping-unit (SKU) of the product, unique within an app. */
		sku: FormControl<string | null | undefined>,

		/** The status of the product, e.g. whether it's active. */
		status: FormControl<InAppProductStatus | null | undefined>,

		/** Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year). */
		subscriptionPeriod: FormControl<string | null | undefined>,

		/** Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days). */
		trialPeriod: FormControl<string | null | undefined>,
	}
	export function CreateInAppProductFormGroup() {
		return new FormGroup<InAppProductFormProperties>({
			defaultLanguage: new FormControl<string | null | undefined>(undefined),
			gracePeriod: new FormControl<string | null | undefined>(undefined),
			listings: new FormControl<{[id: string]: InAppProductListing } | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			prices: new FormControl<{[id: string]: Price } | null | undefined>(undefined),
			purchaseType: new FormControl<InAppProductPurchaseType | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<InAppProductStatus | null | undefined>(undefined),
			subscriptionPeriod: new FormControl<string | null | undefined>(undefined),
			trialPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Store listing of a single in-app product. */
	export interface InAppProductListing {

		/** Localized entitlement benefits for a subscription. */
		benefits?: Array<string>;

		/** Description for the store listing. */
		description?: string | null;

		/** Title for the store listing. */
		title?: string | null;
	}

	/** Store listing of a single in-app product. */
	export interface InAppProductListingFormProperties {

		/** Description for the store listing. */
		description: FormControl<string | null | undefined>,

		/** Title for the store listing. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateInAppProductListingFormGroup() {
		return new FormGroup<InAppProductListingFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about taxation and legal compliance for managed products. */
	export interface ManagedProductTaxAndComplianceSettings {

		/** Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information. */
		eeaWithdrawalRightType?: SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightType | null;

		/** Whether this in-app product is declared as a product representing a tokenized digital asset. */
		isTokenizedDigitalAsset?: boolean | null;

		/** A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR". */
		taxRateInfoByRegionCode?: {[id: string]: RegionalTaxRateInfo };
	}

	/** Details about taxation and legal compliance for managed products. */
	export interface ManagedProductTaxAndComplianceSettingsFormProperties {

		/** Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information. */
		eeaWithdrawalRightType: FormControl<SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightType | null | undefined>,

		/** Whether this in-app product is declared as a product representing a tokenized digital asset. */
		isTokenizedDigitalAsset: FormControl<boolean | null | undefined>,

		/** A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR". */
		taxRateInfoByRegionCode: FormControl<{[id: string]: RegionalTaxRateInfo } | null | undefined>,
	}
	export function CreateManagedProductTaxAndComplianceSettingsFormGroup() {
		return new FormGroup<ManagedProductTaxAndComplianceSettingsFormProperties>({
			eeaWithdrawalRightType: new FormControl<SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightType | null | undefined>(undefined),
			isTokenizedDigitalAsset: new FormControl<boolean | null | undefined>(undefined),
			taxRateInfoByRegionCode: new FormControl<{[id: string]: RegionalTaxRateInfo } | null | undefined>(undefined),
		});

	}

	export enum InAppProductPurchaseType { purchaseTypeUnspecified = 'purchaseTypeUnspecified', managedUser = 'managedUser', subscription = 'subscription' }

	export enum InAppProductStatus { statusUnspecified = 'statusUnspecified', active = 'active', inactive = 'inactive' }


	/** Request to delete multiple in-app products. */
	export interface InappproductsBatchDeleteRequest {

		/** Individual delete requests. At least one request is required. Can contain up to 100 requests. All requests must correspond to different in-app products. */
		requests?: Array<InappproductsDeleteRequest>;
	}

	/** Request to delete multiple in-app products. */
	export interface InappproductsBatchDeleteRequestFormProperties {
	}
	export function CreateInappproductsBatchDeleteRequestFormGroup() {
		return new FormGroup<InappproductsBatchDeleteRequestFormProperties>({
		});

	}


	/** Request to delete an in-app product. */
	export interface InappproductsDeleteRequest {

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance?: ActivateBasePlanRequestLatencyTolerance | null;

		/** Package name of the app. */
		packageName?: string | null;

		/** Unique identifier for the in-app product. */
		sku?: string | null;
	}

	/** Request to delete an in-app product. */
	export interface InappproductsDeleteRequestFormProperties {

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance: FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>,

		/** Package name of the app. */
		packageName: FormControl<string | null | undefined>,

		/** Unique identifier for the in-app product. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateInappproductsDeleteRequestFormGroup() {
		return new FormGroup<InappproductsDeleteRequestFormProperties>({
			latencyTolerance: new FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchGetSubscriptions endpoint. */
	export interface InappproductsBatchGetResponse {

		/** The list of requested in-app products, in the same order as the request. */
		inappproduct?: Array<InAppProduct>;
	}

	/** Response message for BatchGetSubscriptions endpoint. */
	export interface InappproductsBatchGetResponseFormProperties {
	}
	export function CreateInappproductsBatchGetResponseFormGroup() {
		return new FormGroup<InappproductsBatchGetResponseFormProperties>({
		});

	}


	/** Request to update or insert one or more in-app products. */
	export interface InappproductsBatchUpdateRequest {

		/** Required. Individual update requests. At least one request is required. Can contain up to 100 requests. All requests must correspond to different in-app products. */
		requests?: Array<InappproductsUpdateRequest>;
	}

	/** Request to update or insert one or more in-app products. */
	export interface InappproductsBatchUpdateRequestFormProperties {
	}
	export function CreateInappproductsBatchUpdateRequestFormGroup() {
		return new FormGroup<InappproductsBatchUpdateRequestFormProperties>({
		});

	}


	/** Request to update an in-app product. */
	export interface InappproductsUpdateRequest {

		/** If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created. */
		allowMissing?: boolean | null;

		/** If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. */
		autoConvertMissingPrices?: boolean | null;

		/** An in-app product. The resource for InappproductsService. */
		inappproduct?: InAppProduct;

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance?: ActivateBasePlanRequestLatencyTolerance | null;

		/** Package name of the app. */
		packageName?: string | null;

		/** Unique identifier for the in-app product. */
		sku?: string | null;
	}

	/** Request to update an in-app product. */
	export interface InappproductsUpdateRequestFormProperties {

		/** If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. */
		autoConvertMissingPrices: FormControl<boolean | null | undefined>,

		/** Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. */
		latencyTolerance: FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>,

		/** Package name of the app. */
		packageName: FormControl<string | null | undefined>,

		/** Unique identifier for the in-app product. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateInappproductsUpdateRequestFormGroup() {
		return new FormGroup<InappproductsUpdateRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			autoConvertMissingPrices: new FormControl<boolean | null | undefined>(undefined),
			latencyTolerance: new FormControl<ActivateBasePlanRequestLatencyTolerance | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for a batch in-app product update. */
	export interface InappproductsBatchUpdateResponse {

		/** The updated or inserted in-app products. */
		inappproducts?: Array<InAppProduct>;
	}

	/** Response for a batch in-app product update. */
	export interface InappproductsBatchUpdateResponseFormProperties {
	}
	export function CreateInappproductsBatchUpdateResponseFormGroup() {
		return new FormGroup<InappproductsBatchUpdateResponseFormProperties>({
		});

	}


	/** Response listing all in-app products. */
	export interface InappproductsListResponse {

		/** All in-app products. */
		inappproduct?: Array<InAppProduct>;

		/** The kind of this response ("androidpublisher#inappproductsListResponse"). */
		kind?: string | null;

		/** Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. */
		pageInfo?: PageInfo;

		/** Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page. */
		tokenPagination?: TokenPagination;
	}

	/** Response listing all in-app products. */
	export interface InappproductsListResponseFormProperties {

		/** The kind of this response ("androidpublisher#inappproductsListResponse"). */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateInappproductsListResponseFormGroup() {
		return new FormGroup<InappproductsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. */
	export interface PageInfo {

		/** Maximum number of results returned in one page. ! The number of results included in the API response. */
		resultPerPage?: number | null;

		/** Index of the first result returned in the current page. */
		startIndex?: number | null;

		/** Total number of results available on the backend ! The total number of results in the result set. */
		totalResults?: number | null;
	}

	/** Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. */
	export interface PageInfoFormProperties {

		/** Maximum number of results returned in one page. ! The number of results included in the API response. */
		resultPerPage: FormControl<number | null | undefined>,

		/** Index of the first result returned in the current page. */
		startIndex: FormControl<number | null | undefined>,

		/** Total number of results available on the backend ! The total number of results in the result set. */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreatePageInfoFormGroup() {
		return new FormGroup<PageInfoFormProperties>({
			resultPerPage: new FormControl<number | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page. */
	export interface TokenPagination {

		/** Tokens to pass to the standard list field 'page_token'. Whenever available, tokens are preferred over manipulating start_index. */
		nextPageToken?: string | null;
		previousPageToken?: string | null;
	}

	/** Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page. */
	export interface TokenPaginationFormProperties {

		/** Tokens to pass to the standard list field 'page_token'. Whenever available, tokens are preferred over manipulating start_index. */
		nextPageToken: FormControl<string | null | undefined>,
		previousPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTokenPaginationFormGroup() {
		return new FormGroup<TokenPaginationFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			previousPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing. */
	export interface InternalAppSharingArtifact {

		/** The sha256 fingerprint of the certificate used to sign the generated artifact. */
		certificateFingerprint?: string | null;

		/** The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it. */
		downloadUrl?: string | null;

		/** The sha256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command. */
		sha256?: string | null;
	}

	/** An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing. */
	export interface InternalAppSharingArtifactFormProperties {

		/** The sha256 fingerprint of the certificate used to sign the generated artifact. */
		certificateFingerprint: FormControl<string | null | undefined>,

		/** The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it. */
		downloadUrl: FormControl<string | null | undefined>,

		/** The sha256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command. */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateInternalAppSharingArtifactFormGroup() {
		return new FormGroup<InternalAppSharingArtifactFormProperties>({
			certificateFingerprint: new FormControl<string | null | undefined>(undefined),
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the introductory price information for a subscription. */
	export interface IntroductoryPriceInfo {

		/** Introductory price of the subscription, not including tax. The currency is the same as price_currency_code. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. */
		introductoryPriceAmountMicros?: string | null;

		/** ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP". */
		introductoryPriceCurrencyCode?: string | null;

		/** The number of billing period to offer introductory pricing. */
		introductoryPriceCycles?: number | null;

		/** Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year). */
		introductoryPricePeriod?: string | null;
	}

	/** Contains the introductory price information for a subscription. */
	export interface IntroductoryPriceInfoFormProperties {

		/** Introductory price of the subscription, not including tax. The currency is the same as price_currency_code. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. */
		introductoryPriceAmountMicros: FormControl<string | null | undefined>,

		/** ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP". */
		introductoryPriceCurrencyCode: FormControl<string | null | undefined>,

		/** The number of billing period to offer introductory pricing. */
		introductoryPriceCycles: FormControl<number | null | undefined>,

		/** Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year). */
		introductoryPricePeriod: FormControl<string | null | undefined>,
	}
	export function CreateIntroductoryPriceInfoFormGroup() {
		return new FormGroup<IntroductoryPriceInfoFormProperties>({
			introductoryPriceAmountMicros: new FormControl<string | null | undefined>(undefined),
			introductoryPriceCurrencyCode: new FormControl<string | null | undefined>(undefined),
			introductoryPriceCycles: new FormControl<number | null | undefined>(undefined),
			introductoryPricePeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListAppRecoveries. -- api-linter: core::0158::response-next-page-token-field=disabled */
	export interface ListAppRecoveriesResponse {

		/** List of recovery actions associated with the requested package name. */
		recoveryActions?: Array<AppRecoveryAction>;
	}

	/** Response message for ListAppRecoveries. -- api-linter: core::0158::response-next-page-token-field=disabled */
	export interface ListAppRecoveriesResponseFormProperties {
	}
	export function CreateListAppRecoveriesResponseFormGroup() {
		return new FormGroup<ListAppRecoveriesResponseFormProperties>({
		});

	}


	/** Response listing existing device tier configs. */
	export interface ListDeviceTierConfigsResponse {

		/** Device tier configs created by the developer. */
		deviceTierConfigs?: Array<DeviceTierConfig>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response listing existing device tier configs. */
	export interface ListDeviceTierConfigsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceTierConfigsResponseFormGroup() {
		return new FormGroup<ListDeviceTierConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListSubscriptionOffers. */
	export interface ListSubscriptionOffersResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The subscription offers from the specified subscription. */
		subscriptionOffers?: Array<SubscriptionOffer>;
	}

	/** Response message for ListSubscriptionOffers. */
	export interface ListSubscriptionOffersResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionOffersResponseFormGroup() {
		return new FormGroup<ListSubscriptionOffersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListSubscriptions. */
	export interface ListSubscriptionsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The subscriptions from the specified app. */
		subscriptions?: Array<Subscription>;
	}

	/** Response message for ListSubscriptions. */
	export interface ListSubscriptionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionsResponseFormGroup() {
		return new FormGroup<ListSubscriptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing one or more users with access to an account. */
	export interface ListUsersResponse {

		/** A token to pass to subsequent calls in order to retrieve subsequent results. This will not be set if there are no more results to return. */
		nextPageToken?: string | null;

		/** The resulting users. */
		users?: Array<User>;
	}

	/** A response containing one or more users with access to an account. */
	export interface ListUsersResponseFormProperties {

		/** A token to pass to subsequent calls in order to retrieve subsequent results. This will not be set if there are no more results to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A user resource. */
	export interface User {

		/** Output only. The state of the user's access to the Play Console. */
		accessState?: UserAccessState | null;

		/** Permissions for the user which apply across the developer account. */
		developerAccountPermissions?: Array<string>;

		/** Immutable. The user's email address. */
		email?: string | null;

		/** The time at which the user's access expires, if set. When setting this value, it must always be in the future. */
		expirationTime?: string | null;

		/** Output only. Per-app permissions for the user. */
		grants?: Array<Grant>;

		/** Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}". */
		name?: string | null;

		/** Output only. Whether there are more permissions for the user that are not represented here. This can happen if the caller does not have permission to manage all apps in the account. This is also `true` if this user is the account owner. If this field is `true`, it should be taken as a signal that this user cannot be fully managed via the API. That is, the API caller is not be able to manage all of the permissions this user holds, either because it doesn't know about them or because the user is the account owner. */
		partial?: boolean | null;
	}

	/** A user resource. */
	export interface UserFormProperties {

		/** Output only. The state of the user's access to the Play Console. */
		accessState: FormControl<UserAccessState | null | undefined>,

		/** Immutable. The user's email address. */
		email: FormControl<string | null | undefined>,

		/** The time at which the user's access expires, if set. When setting this value, it must always be in the future. */
		expirationTime: FormControl<string | null | undefined>,

		/** Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}". */
		name: FormControl<string | null | undefined>,

		/** Output only. Whether there are more permissions for the user that are not represented here. This can happen if the caller does not have permission to manage all apps in the account. This is also `true` if this user is the account owner. If this field is `true`, it should be taken as a signal that this user cannot be fully managed via the API. That is, the API caller is not be able to manage all of the permissions this user holds, either because it doesn't know about them or because the user is the account owner. */
		partial: FormControl<boolean | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			accessState: new FormControl<UserAccessState | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			partial: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum UserAccessState { ACCESS_STATE_UNSPECIFIED = 'ACCESS_STATE_UNSPECIFIED', INVITED = 'INVITED', INVITATION_EXPIRED = 'INVITATION_EXPIRED', ACCESS_GRANTED = 'ACCESS_GRANTED', ACCESS_EXPIRED = 'ACCESS_EXPIRED' }


	/** A localized store listing. The resource for ListingsService. */
	export interface Listing {

		/** Full description of the app. */
		fullDescription?: string | null;

		/** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
		language?: string | null;

		/** Short description of the app. */
		shortDescription?: string | null;

		/** Localized title of the app. */
		title?: string | null;

		/** URL of a promotional YouTube video for the app. */
		video?: string | null;
	}

	/** A localized store listing. The resource for ListingsService. */
	export interface ListingFormProperties {

		/** Full description of the app. */
		fullDescription: FormControl<string | null | undefined>,

		/** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
		language: FormControl<string | null | undefined>,

		/** Short description of the app. */
		shortDescription: FormControl<string | null | undefined>,

		/** Localized title of the app. */
		title: FormControl<string | null | undefined>,

		/** URL of a promotional YouTube video for the app. */
		video: FormControl<string | null | undefined>,
	}
	export function CreateListingFormGroup() {
		return new FormGroup<ListingFormProperties>({
			fullDescription: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			video: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response listing all localized listings. */
	export interface ListingsListResponse {

		/** The kind of this response ("androidpublisher#listingsListResponse"). */
		kind?: string | null;

		/** All localized listings. */
		listings?: Array<Listing>;
	}

	/** Response listing all localized listings. */
	export interface ListingsListResponseFormProperties {

		/** The kind of this response ("androidpublisher#listingsListResponse"). */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateListingsListResponseFormGroup() {
		return new FormGroup<ListingsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Localized text in given language. */
	export interface LocalizedText {

		/** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
		language?: string | null;

		/** The text in the given language. */
		text?: string | null;
	}

	/** Localized text in given language. */
	export interface LocalizedTextFormProperties {

		/** Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). */
		language: FormControl<string | null | undefined>,

		/** The text in the given language. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedTextFormGroup() {
		return new FormGroup<LocalizedTextFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Offer details information related to a purchase line item. */
	export interface OfferDetails {

		/** The base plan ID. Present for all base plan and offers. */
		basePlanId?: string | null;

		/** The offer ID. Only present for discounted offers. */
		offerId?: string | null;

		/** The latest offer tags associated with the offer. It includes tags inherited from the base plan. */
		offerTags?: Array<string>;
	}

	/** Offer details information related to a purchase line item. */
	export interface OfferDetailsFormProperties {

		/** The base plan ID. Present for all base plan and offers. */
		basePlanId: FormControl<string | null | undefined>,

		/** The offer ID. Only present for discounted offers. */
		offerId: FormControl<string | null | undefined>,
	}
	export function CreateOfferDetailsFormGroup() {
		return new FormGroup<OfferDetailsFormProperties>({
			basePlanId: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A partial refund of a transaction. */
	export interface PartialRefund {

		/** Required. A unique id distinguishing this partial refund. If the refund is successful, subsequent refunds with the same id will fail. Must be unique across refunds for one individual transaction. */
		refundId?: string | null;

		/** Definition of a price, i.e. currency and units. */
		refundPreTaxAmount?: Price;
	}

	/** A partial refund of a transaction. */
	export interface PartialRefundFormProperties {

		/** Required. A unique id distinguishing this partial refund. If the refund is successful, subsequent refunds with the same id will fail. Must be unique across refunds for one individual transaction. */
		refundId: FormControl<string | null | undefined>,
	}
	export function CreatePartialRefundFormGroup() {
		return new FormGroup<PartialRefundFormProperties>({
			refundId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information specific to a subscription in paused state. */
	export interface PausedStateContext {

		/** Time at which the subscription will be automatically resumed. */
		autoResumeTime?: string | null;
	}

	/** Information specific to a subscription in paused state. */
	export interface PausedStateContextFormProperties {

		/** Time at which the subscription will be automatically resumed. */
		autoResumeTime: FormControl<string | null | undefined>,
	}
	export function CreatePausedStateContextFormGroup() {
		return new FormGroup<PausedStateContextFormProperties>({
			autoResumeTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information related to a prepaid plan. */
	export interface PrepaidPlan {

		/** If present, this is the time after which top up purchases are allowed for the prepaid plan. Will not be present for expired prepaid plans. */
		allowExtendAfterTime?: string | null;
	}

	/** Information related to a prepaid plan. */
	export interface PrepaidPlanFormProperties {

		/** If present, this is the time after which top up purchases are allowed for the prepaid plan. Will not be present for expired prepaid plans. */
		allowExtendAfterTime: FormControl<string | null | undefined>,
	}
	export function CreatePrepaidPlanFormGroup() {
		return new FormGroup<PrepaidPlanFormProperties>({
			allowExtendAfterTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ProductPurchase resource indicates the status of a user's inapp product purchase. */
	export interface ProductPurchase {

		/** The acknowledgement state of the inapp product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged */
		acknowledgementState?: number | null;

		/** The consumption state of the inapp product. Possible values are: 0. Yet to be consumed 1. Consumed */
		consumptionState?: number | null;

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload?: string | null;

		/** This kind represents an inappPurchase object in the androidpublisher service. */
		kind?: string | null;

		/** An obfuscated version of the id that is uniquely associated with the user's account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. */
		obfuscatedExternalAccountId?: string | null;

		/** An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. */
		obfuscatedExternalProfileId?: string | null;

		/** The order id associated with the purchase of the inapp product. */
		orderId?: string | null;

		/** The inapp product SKU. May not be present. */
		productId?: string | null;

		/** The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending */
		purchaseState?: number | null;

		/** The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTimeMillis?: string | null;

		/** The purchase token generated to identify this purchase. May not be present. */
		purchaseToken?: string | null;

		/** The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) 2. Rewarded (i.e. from watching a video ad instead of paying) */
		purchaseType?: number | null;

		/** The quantity associated with the purchase of the inapp product. If not present, the quantity is 1. */
		quantity?: number | null;

		/** ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted. */
		regionCode?: string | null;
	}

	/** A ProductPurchase resource indicates the status of a user's inapp product purchase. */
	export interface ProductPurchaseFormProperties {

		/** The acknowledgement state of the inapp product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged */
		acknowledgementState: FormControl<number | null | undefined>,

		/** The consumption state of the inapp product. Possible values are: 0. Yet to be consumed 1. Consumed */
		consumptionState: FormControl<number | null | undefined>,

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload: FormControl<string | null | undefined>,

		/** This kind represents an inappPurchase object in the androidpublisher service. */
		kind: FormControl<string | null | undefined>,

		/** An obfuscated version of the id that is uniquely associated with the user's account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. */
		obfuscatedExternalAccountId: FormControl<string | null | undefined>,

		/** An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. */
		obfuscatedExternalProfileId: FormControl<string | null | undefined>,

		/** The order id associated with the purchase of the inapp product. */
		orderId: FormControl<string | null | undefined>,

		/** The inapp product SKU. May not be present. */
		productId: FormControl<string | null | undefined>,

		/** The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending */
		purchaseState: FormControl<number | null | undefined>,

		/** The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTimeMillis: FormControl<string | null | undefined>,

		/** The purchase token generated to identify this purchase. May not be present. */
		purchaseToken: FormControl<string | null | undefined>,

		/** The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) 2. Rewarded (i.e. from watching a video ad instead of paying) */
		purchaseType: FormControl<number | null | undefined>,

		/** The quantity associated with the purchase of the inapp product. If not present, the quantity is 1. */
		quantity: FormControl<number | null | undefined>,

		/** ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateProductPurchaseFormGroup() {
		return new FormGroup<ProductPurchaseFormProperties>({
			acknowledgementState: new FormControl<number | null | undefined>(undefined),
			consumptionState: new FormControl<number | null | undefined>(undefined),
			developerPayload: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			obfuscatedExternalAccountId: new FormControl<string | null | undefined>(undefined),
			obfuscatedExternalProfileId: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			purchaseState: new FormControl<number | null | undefined>(undefined),
			purchaseTimeMillis: new FormControl<string | null | undefined>(undefined),
			purchaseToken: new FormControl<string | null | undefined>(undefined),
			purchaseType: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the product.purchases.acknowledge API. */
	export interface ProductPurchasesAcknowledgeRequest {

		/** Payload to attach to the purchase. */
		developerPayload?: string | null;
	}

	/** Request for the product.purchases.acknowledge API. */
	export interface ProductPurchasesAcknowledgeRequestFormProperties {

		/** Payload to attach to the purchase. */
		developerPayload: FormControl<string | null | undefined>,
	}
	export function CreateProductPurchasesAcknowledgeRequestFormGroup() {
		return new FormGroup<ProductPurchasesAcknowledgeRequestFormProperties>({
			developerPayload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to refund an existing external transaction. */
	export interface RefundExternalTransactionRequest {

		/** A full refund of the remaining amount of a transaction. */
		fullRefund?: FullRefund;

		/** A partial refund of a transaction. */
		partialRefund?: PartialRefund;

		/** Required. The time that the transaction was refunded. */
		refundTime?: string | null;
	}

	/** A request to refund an existing external transaction. */
	export interface RefundExternalTransactionRequestFormProperties {

		/** Required. The time that the transaction was refunded. */
		refundTime: FormControl<string | null | undefined>,
	}
	export function CreateRefundExternalTransactionRequestFormGroup() {
		return new FormGroup<RefundExternalTransactionRequestFormProperties>({
			refundTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Android app review. */
	export interface Review {

		/** The name of the user who wrote the review. */
		authorName?: string | null;

		/** A repeated field containing comments for the review. */
		comments?: Array<Comment>;

		/** Unique identifier for this review. */
		reviewId?: string | null;
	}

	/** An Android app review. */
	export interface ReviewFormProperties {

		/** The name of the user who wrote the review. */
		authorName: FormControl<string | null | undefined>,

		/** Unique identifier for this review. */
		reviewId: FormControl<string | null | undefined>,
	}
	export function CreateReviewFormGroup() {
		return new FormGroup<ReviewFormProperties>({
			authorName: new FormControl<string | null | undefined>(undefined),
			reviewId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of replying/updating a reply to review. */
	export interface ReviewReplyResult {

		/** A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970. */
		lastEdited?: Timestamp;

		/** The reply text that was applied. */
		replyText?: string | null;
	}

	/** The result of replying/updating a reply to review. */
	export interface ReviewReplyResultFormProperties {

		/** The reply text that was applied. */
		replyText: FormControl<string | null | undefined>,
	}
	export function CreateReviewReplyResultFormGroup() {
		return new FormGroup<ReviewReplyResultFormProperties>({
			replyText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response listing reviews. */
	export interface ReviewsListResponse {

		/** Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. */
		pageInfo?: PageInfo;

		/** List of reviews. */
		reviews?: Array<Review>;

		/** Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page. */
		tokenPagination?: TokenPagination;
	}

	/** Response listing reviews. */
	export interface ReviewsListResponseFormProperties {
	}
	export function CreateReviewsListResponseFormGroup() {
		return new FormGroup<ReviewsListResponseFormProperties>({
		});

	}


	/** Request to reply to review or update existing reply. */
	export interface ReviewsReplyRequest {

		/** The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped. */
		replyText?: string | null;
	}

	/** Request to reply to review or update existing reply. */
	export interface ReviewsReplyRequestFormProperties {

		/** The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped. */
		replyText: FormControl<string | null | undefined>,
	}
	export function CreateReviewsReplyRequestFormGroup() {
		return new FormGroup<ReviewsReplyRequestFormProperties>({
			replyText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response on status of replying to a review. */
	export interface ReviewsReplyResponse {

		/** The result of replying/updating a reply to review. */
		result?: ReviewReplyResult;
	}

	/** Response on status of replying to a review. */
	export interface ReviewsReplyResponseFormProperties {
	}
	export function CreateReviewsReplyResponseFormGroup() {
		return new FormGroup<ReviewsReplyResponseFormProperties>({
		});

	}


	/** Revocation context of the purchases.subscriptionsv2.revoke API. */
	export interface RevocationContext {

		/** Used to determine if the refund type in the RevocationContext is a prorated refund. */
		proratedRefund?: UNDEFINED_packageNameRevocationContextProratedRefund;
	}

	/** Revocation context of the purchases.subscriptionsv2.revoke API. */
	export interface RevocationContextFormProperties {
	}
	export function CreateRevocationContextFormGroup() {
		return new FormGroup<RevocationContextFormProperties>({
		});

	}


	/** Used to determine if the refund type in the RevocationContext is a prorated refund. */
	export interface UNDEFINED_packageNameRevocationContextProratedRefund {
	}

	/** Used to determine if the refund type in the RevocationContext is a prorated refund. */
	export interface UNDEFINED_packageNameRevocationContextProratedRefundFormProperties {
	}
	export function CreateUNDEFINED_packageNameRevocationContextProratedRefundFormGroup() {
		return new FormGroup<UNDEFINED_packageNameRevocationContextProratedRefundFormProperties>({
		});

	}


	/** Request for the purchases.subscriptionsv2.revoke API. */
	export interface RevokeSubscriptionPurchaseRequest {

		/** Revocation context of the purchases.subscriptionsv2.revoke API. */
		revocationContext?: RevocationContext;
	}

	/** Request for the purchases.subscriptionsv2.revoke API. */
	export interface RevokeSubscriptionPurchaseRequestFormProperties {
	}
	export function CreateRevokeSubscriptionPurchaseRequestFormGroup() {
		return new FormGroup<RevokeSubscriptionPurchaseRequestFormProperties>({
		});

	}


	/** Response for the purchases.subscriptionsv2.revoke API. */
	export interface RevokeSubscriptionPurchaseResponse {
	}

	/** Response for the purchases.subscriptionsv2.revoke API. */
	export interface RevokeSubscriptionPurchaseResponseFormProperties {
	}
	export function CreateRevokeSubscriptionPurchaseResponseFormGroup() {
		return new FormGroup<RevokeSubscriptionPurchaseResponseFormProperties>({
		});

	}


	/** Information associated with purchases made with 'Subscribe with Google'. */
	export interface SubscribeWithGoogleInfo {

		/** The email address of the user when the subscription was purchased. */
		emailAddress?: string | null;

		/** The family name of the user when the subscription was purchased. */
		familyName?: string | null;

		/** The given name of the user when the subscription was purchased. */
		givenName?: string | null;

		/** The Google profile id of the user when the subscription was purchased. */
		profileId?: string | null;

		/** The profile name of the user when the subscription was purchased. */
		profileName?: string | null;
	}

	/** Information associated with purchases made with 'Subscribe with Google'. */
	export interface SubscribeWithGoogleInfoFormProperties {

		/** The email address of the user when the subscription was purchased. */
		emailAddress: FormControl<string | null | undefined>,

		/** The family name of the user when the subscription was purchased. */
		familyName: FormControl<string | null | undefined>,

		/** The given name of the user when the subscription was purchased. */
		givenName: FormControl<string | null | undefined>,

		/** The Google profile id of the user when the subscription was purchased. */
		profileId: FormControl<string | null | undefined>,

		/** The profile name of the user when the subscription was purchased. */
		profileName: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeWithGoogleInfoFormGroup() {
		return new FormGroup<SubscribeWithGoogleInfoFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			familyName: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey). */
	export interface SubscriptionCancelSurveyResult {

		/** The cancellation reason the user chose in the survey. Possible values are: 0. Other 1. I don't use this service enough 2. Technical issues 3. Cost-related reasons 4. I found a better app */
		cancelSurveyReason?: number | null;

		/** The customized input cancel reason from the user. Only present when cancelReason is 0. */
		userInputCancelReason?: string | null;
	}

	/** Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey). */
	export interface SubscriptionCancelSurveyResultFormProperties {

		/** The cancellation reason the user chose in the survey. Possible values are: 0. Other 1. I don't use this service enough 2. Technical issues 3. Cost-related reasons 4. I found a better app */
		cancelSurveyReason: FormControl<number | null | undefined>,

		/** The customized input cancel reason from the user. Only present when cancelReason is 0. */
		userInputCancelReason: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionCancelSurveyResultFormGroup() {
		return new FormGroup<SubscriptionCancelSurveyResultFormProperties>({
			cancelSurveyReason: new FormControl<number | null | undefined>(undefined),
			userInputCancelReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time. */
	export interface SubscriptionDeferralInfo {

		/** The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription. */
		desiredExpiryTimeMillis?: string | null;

		/** The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur. */
		expectedExpiryTimeMillis?: string | null;
	}

	/** A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time. */
	export interface SubscriptionDeferralInfoFormProperties {

		/** The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription. */
		desiredExpiryTimeMillis: FormControl<string | null | undefined>,

		/** The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur. */
		expectedExpiryTimeMillis: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionDeferralInfoFormGroup() {
		return new FormGroup<SubscriptionDeferralInfoFormProperties>({
			desiredExpiryTimeMillis: new FormControl<string | null | undefined>(undefined),
			expectedExpiryTimeMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion. */
	export interface SubscriptionPriceChange {

		/** Definition of a price, i.e. currency and units. */
		newPrice?: Price;

		/** The current state of the price change. Possible values are: 0. Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API. 1. Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next. */
		state?: number | null;
	}

	/** Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion. */
	export interface SubscriptionPriceChangeFormProperties {

		/** The current state of the price change. Possible values are: 0. Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API. 1. Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next. */
		state: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionPriceChangeFormGroup() {
		return new FormGroup<SubscriptionPriceChangeFormProperties>({
			state: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A SubscriptionPurchase resource indicates the status of a user's subscription purchase. */
	export interface SubscriptionPurchase {

		/** The acknowledgement state of the subscription product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged */
		acknowledgementState?: number | null;

		/** Whether the subscription will automatically be renewed when it reaches its current expiry time. */
		autoRenewing?: boolean | null;

		/** Time at which the subscription will be automatically resumed, in milliseconds since the Epoch. Only present if the user has requested to pause the subscription. */
		autoResumeTimeMillis?: string | null;

		/** The reason why a subscription was canceled or is not auto-renewing. Possible values are: 0. User canceled the subscription 1. Subscription was canceled by the system, for example because of a billing problem 2. Subscription was replaced with a new subscription 3. Subscription was canceled by the developer */
		cancelReason?: number | null;

		/** Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey). */
		cancelSurveyResult?: SubscriptionCancelSurveyResult;

		/** ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. */
		countryCode?: string | null;

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload?: string | null;

		/** The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		emailAddress?: string | null;

		/** Time at which the subscription will expire, in milliseconds since the Epoch. */
		expiryTimeMillis?: string | null;

		/** User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow. */
		externalAccountId?: string | null;

		/** The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		familyName?: string | null;

		/** The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		givenName?: string | null;

		/** Contains the introductory price information for a subscription. */
		introductoryPriceInfo?: IntroductoryPriceInfo;

		/** This kind represents a subscriptionPurchase object in the androidpublisher service. */
		kind?: string | null;

		/** The purchase token of the originating purchase if this subscription is one of the following: 0. Re-signup of a canceled but non-lapsed subscription 1. Upgrade/downgrade from a previous subscription For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set. */
		linkedPurchaseToken?: string | null;

		/** An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. */
		obfuscatedExternalAccountId?: string | null;

		/** An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. */
		obfuscatedExternalProfileId?: string | null;

		/** The order id of the latest recurring order associated with the purchase of the subscription. If the subscription was canceled because payment was declined, this will be the order id from the payment declined order. */
		orderId?: string | null;

		/** The payment state of the subscription. Possible values are: 0. Payment pending 1. Payment received 2. Free trial 3. Pending deferred upgrade/downgrade Not present for canceled, expired subscriptions. */
		paymentState?: number | null;

		/** Price of the subscription, For tax exclusive countries, the price doesn't include tax. For tax inclusive countries, the price includes tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. */
		priceAmountMicros?: string | null;

		/** Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion. */
		priceChange?: SubscriptionPriceChange;

		/** ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP". */
		priceCurrencyCode?: string | null;

		/** The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		profileId?: string | null;

		/** The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		profileName?: string | null;

		/** The promotion code applied on this purchase. This field is only set if a vanity code promotion is applied when the subscription was purchased. */
		promotionCode?: string | null;

		/** The type of promotion applied on this purchase. This field is only set if a promotion is applied when the subscription was purchased. Possible values are: 0. One time code 1. Vanity code */
		promotionType?: number | null;

		/** The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) */
		purchaseType?: number | null;

		/** Time at which the subscription was granted, in milliseconds since the Epoch. */
		startTimeMillis?: string | null;

		/** The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0. */
		userCancellationTimeMillis?: string | null;
	}

	/** A SubscriptionPurchase resource indicates the status of a user's subscription purchase. */
	export interface SubscriptionPurchaseFormProperties {

		/** The acknowledgement state of the subscription product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged */
		acknowledgementState: FormControl<number | null | undefined>,

		/** Whether the subscription will automatically be renewed when it reaches its current expiry time. */
		autoRenewing: FormControl<boolean | null | undefined>,

		/** Time at which the subscription will be automatically resumed, in milliseconds since the Epoch. Only present if the user has requested to pause the subscription. */
		autoResumeTimeMillis: FormControl<string | null | undefined>,

		/** The reason why a subscription was canceled or is not auto-renewing. Possible values are: 0. User canceled the subscription 1. Subscription was canceled by the system, for example because of a billing problem 2. Subscription was replaced with a new subscription 3. Subscription was canceled by the developer */
		cancelReason: FormControl<number | null | undefined>,

		/** ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. */
		countryCode: FormControl<string | null | undefined>,

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload: FormControl<string | null | undefined>,

		/** The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		emailAddress: FormControl<string | null | undefined>,

		/** Time at which the subscription will expire, in milliseconds since the Epoch. */
		expiryTimeMillis: FormControl<string | null | undefined>,

		/** User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow. */
		externalAccountId: FormControl<string | null | undefined>,

		/** The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		familyName: FormControl<string | null | undefined>,

		/** The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		givenName: FormControl<string | null | undefined>,

		/** This kind represents a subscriptionPurchase object in the androidpublisher service. */
		kind: FormControl<string | null | undefined>,

		/** The purchase token of the originating purchase if this subscription is one of the following: 0. Re-signup of a canceled but non-lapsed subscription 1. Upgrade/downgrade from a previous subscription For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set. */
		linkedPurchaseToken: FormControl<string | null | undefined>,

		/** An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. */
		obfuscatedExternalAccountId: FormControl<string | null | undefined>,

		/** An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. */
		obfuscatedExternalProfileId: FormControl<string | null | undefined>,

		/** The order id of the latest recurring order associated with the purchase of the subscription. If the subscription was canceled because payment was declined, this will be the order id from the payment declined order. */
		orderId: FormControl<string | null | undefined>,

		/** The payment state of the subscription. Possible values are: 0. Payment pending 1. Payment received 2. Free trial 3. Pending deferred upgrade/downgrade Not present for canceled, expired subscriptions. */
		paymentState: FormControl<number | null | undefined>,

		/** Price of the subscription, For tax exclusive countries, the price doesn't include tax. For tax inclusive countries, the price includes tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. */
		priceAmountMicros: FormControl<string | null | undefined>,

		/** ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP". */
		priceCurrencyCode: FormControl<string | null | undefined>,

		/** The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		profileId: FormControl<string | null | undefined>,

		/** The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		profileName: FormControl<string | null | undefined>,

		/** The promotion code applied on this purchase. This field is only set if a vanity code promotion is applied when the subscription was purchased. */
		promotionCode: FormControl<string | null | undefined>,

		/** The type of promotion applied on this purchase. This field is only set if a promotion is applied when the subscription was purchased. Possible values are: 0. One time code 1. Vanity code */
		promotionType: FormControl<number | null | undefined>,

		/** The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) */
		purchaseType: FormControl<number | null | undefined>,

		/** Time at which the subscription was granted, in milliseconds since the Epoch. */
		startTimeMillis: FormControl<string | null | undefined>,

		/** The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0. */
		userCancellationTimeMillis: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionPurchaseFormGroup() {
		return new FormGroup<SubscriptionPurchaseFormProperties>({
			acknowledgementState: new FormControl<number | null | undefined>(undefined),
			autoRenewing: new FormControl<boolean | null | undefined>(undefined),
			autoResumeTimeMillis: new FormControl<string | null | undefined>(undefined),
			cancelReason: new FormControl<number | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			developerPayload: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			expiryTimeMillis: new FormControl<string | null | undefined>(undefined),
			externalAccountId: new FormControl<string | null | undefined>(undefined),
			familyName: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			linkedPurchaseToken: new FormControl<string | null | undefined>(undefined),
			obfuscatedExternalAccountId: new FormControl<string | null | undefined>(undefined),
			obfuscatedExternalProfileId: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			paymentState: new FormControl<number | null | undefined>(undefined),
			priceAmountMicros: new FormControl<string | null | undefined>(undefined),
			priceCurrencyCode: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
			promotionCode: new FormControl<string | null | undefined>(undefined),
			promotionType: new FormControl<number | null | undefined>(undefined),
			purchaseType: new FormControl<number | null | undefined>(undefined),
			startTimeMillis: new FormControl<string | null | undefined>(undefined),
			userCancellationTimeMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Item-level info for a subscription purchase. */
	export interface SubscriptionPurchaseLineItem {

		/** Information related to an auto renewing plan. */
		autoRenewingPlan?: AutoRenewingPlan;

		/** Information related to deferred item replacement. */
		deferredItemReplacement?: DeferredItemReplacement;

		/** Time at which the subscription expired or will expire unless the access is extended (ex. renews). */
		expiryTime?: string | null;

		/** Offer details information related to a purchase line item. */
		offerDetails?: OfferDetails;

		/** Information related to a prepaid plan. */
		prepaidPlan?: PrepaidPlan;

		/** The purchased product ID (for example, 'monthly001'). */
		productId?: string | null;
	}

	/** Item-level info for a subscription purchase. */
	export interface SubscriptionPurchaseLineItemFormProperties {

		/** Time at which the subscription expired or will expire unless the access is extended (ex. renews). */
		expiryTime: FormControl<string | null | undefined>,

		/** The purchased product ID (for example, 'monthly001'). */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionPurchaseLineItemFormGroup() {
		return new FormGroup<SubscriptionPurchaseLineItemFormProperties>({
			expiryTime: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates the status of a user's subscription purchase. */
	export interface SubscriptionPurchaseV2 {

		/** The acknowledgement state of the subscription. */
		acknowledgementState?: SubscriptionPurchaseV2AcknowledgementState | null;

		/** Information specific to a subscription in canceled state. */
		canceledStateContext?: CanceledStateContext;

		/** User account identifier in the third-party service. */
		externalAccountIdentifiers?: ExternalAccountIdentifiers;

		/** This kind represents a SubscriptionPurchaseV2 object in the androidpublisher service. */
		kind?: string | null;

		/** The order id of the latest order associated with the purchase of the subscription. For autoRenewing subscription, this is the order id of signup order if it is not renewed yet, or the last recurring order id (success, pending, or declined order). For prepaid subscription, this is the order id associated with the queried purchase token. */
		latestOrderId?: string | null;

		/** Item-level info for a subscription purchase. The items in the same purchase should be either all with AutoRenewingPlan or all with PrepaidPlan. */
		lineItems?: Array<SubscriptionPurchaseLineItem>;

		/** The purchase token of the old subscription if this subscription is one of the following: * Re-signup of a canceled but non-lapsed subscription * Upgrade/downgrade from a previous subscription. * Convert from prepaid to auto renewing subscription. * Convert from an auto renewing subscription to prepaid. * Topup a prepaid subscription. */
		linkedPurchaseToken?: string | null;

		/** Information specific to a subscription in paused state. */
		pausedStateContext?: PausedStateContext;

		/** ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. */
		regionCode?: string | null;

		/** Time at which the subscription was granted. Not set for pending subscriptions (subscription was created but awaiting payment during signup). */
		startTime?: string | null;

		/** Information associated with purchases made with 'Subscribe with Google'. */
		subscribeWithGoogleInfo?: SubscribeWithGoogleInfo;

		/** The current state of the subscription. */
		subscriptionState?: SubscriptionPurchaseV2SubscriptionState | null;

		/** Whether this subscription purchase is a test purchase. */
		testPurchase?: TestPurchase;
	}

	/** Indicates the status of a user's subscription purchase. */
	export interface SubscriptionPurchaseV2FormProperties {

		/** The acknowledgement state of the subscription. */
		acknowledgementState: FormControl<SubscriptionPurchaseV2AcknowledgementState | null | undefined>,

		/** This kind represents a SubscriptionPurchaseV2 object in the androidpublisher service. */
		kind: FormControl<string | null | undefined>,

		/** The order id of the latest order associated with the purchase of the subscription. For autoRenewing subscription, this is the order id of signup order if it is not renewed yet, or the last recurring order id (success, pending, or declined order). For prepaid subscription, this is the order id associated with the queried purchase token. */
		latestOrderId: FormControl<string | null | undefined>,

		/** The purchase token of the old subscription if this subscription is one of the following: * Re-signup of a canceled but non-lapsed subscription * Upgrade/downgrade from a previous subscription. * Convert from prepaid to auto renewing subscription. * Convert from an auto renewing subscription to prepaid. * Topup a prepaid subscription. */
		linkedPurchaseToken: FormControl<string | null | undefined>,

		/** ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. */
		regionCode: FormControl<string | null | undefined>,

		/** Time at which the subscription was granted. Not set for pending subscriptions (subscription was created but awaiting payment during signup). */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the subscription. */
		subscriptionState: FormControl<SubscriptionPurchaseV2SubscriptionState | null | undefined>,
	}
	export function CreateSubscriptionPurchaseV2FormGroup() {
		return new FormGroup<SubscriptionPurchaseV2FormProperties>({
			acknowledgementState: new FormControl<SubscriptionPurchaseV2AcknowledgementState | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			latestOrderId: new FormControl<string | null | undefined>(undefined),
			linkedPurchaseToken: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			subscriptionState: new FormControl<SubscriptionPurchaseV2SubscriptionState | null | undefined>(undefined),
		});

	}

	export enum SubscriptionPurchaseV2AcknowledgementState { ACKNOWLEDGEMENT_STATE_UNSPECIFIED = 'ACKNOWLEDGEMENT_STATE_UNSPECIFIED', ACKNOWLEDGEMENT_STATE_PENDING = 'ACKNOWLEDGEMENT_STATE_PENDING', ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED = 'ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED' }

	export enum SubscriptionPurchaseV2SubscriptionState { SUBSCRIPTION_STATE_UNSPECIFIED = 'SUBSCRIPTION_STATE_UNSPECIFIED', SUBSCRIPTION_STATE_PENDING = 'SUBSCRIPTION_STATE_PENDING', SUBSCRIPTION_STATE_ACTIVE = 'SUBSCRIPTION_STATE_ACTIVE', SUBSCRIPTION_STATE_PAUSED = 'SUBSCRIPTION_STATE_PAUSED', SUBSCRIPTION_STATE_IN_GRACE_PERIOD = 'SUBSCRIPTION_STATE_IN_GRACE_PERIOD', SUBSCRIPTION_STATE_ON_HOLD = 'SUBSCRIPTION_STATE_ON_HOLD', SUBSCRIPTION_STATE_CANCELED = 'SUBSCRIPTION_STATE_CANCELED', SUBSCRIPTION_STATE_EXPIRED = 'SUBSCRIPTION_STATE_EXPIRED' }


	/** Whether this subscription purchase is a test purchase. */
	export interface TestPurchase {
	}

	/** Whether this subscription purchase is a test purchase. */
	export interface TestPurchaseFormProperties {
	}
	export function CreateTestPurchaseFormGroup() {
		return new FormGroup<TestPurchaseFormProperties>({
		});

	}


	/** Request for the purchases.subscriptions.acknowledge API. */
	export interface SubscriptionPurchasesAcknowledgeRequest {

		/** Payload to attach to the purchase. */
		developerPayload?: string | null;
	}

	/** Request for the purchases.subscriptions.acknowledge API. */
	export interface SubscriptionPurchasesAcknowledgeRequestFormProperties {

		/** Payload to attach to the purchase. */
		developerPayload: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionPurchasesAcknowledgeRequestFormGroup() {
		return new FormGroup<SubscriptionPurchasesAcknowledgeRequestFormProperties>({
			developerPayload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the purchases.subscriptions.defer API. */
	export interface SubscriptionPurchasesDeferRequest {

		/** A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time. */
		deferralInfo?: SubscriptionDeferralInfo;
	}

	/** Request for the purchases.subscriptions.defer API. */
	export interface SubscriptionPurchasesDeferRequestFormProperties {
	}
	export function CreateSubscriptionPurchasesDeferRequestFormGroup() {
		return new FormGroup<SubscriptionPurchasesDeferRequestFormProperties>({
		});

	}


	/** Response for the purchases.subscriptions.defer API. */
	export interface SubscriptionPurchasesDeferResponse {

		/** The new expiry time for the subscription in milliseconds since the Epoch. */
		newExpiryTimeMillis?: string | null;
	}

	/** Response for the purchases.subscriptions.defer API. */
	export interface SubscriptionPurchasesDeferResponseFormProperties {

		/** The new expiry time for the subscription in milliseconds since the Epoch. */
		newExpiryTimeMillis: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionPurchasesDeferResponseFormGroup() {
		return new FormGroup<SubscriptionPurchasesDeferResponseFormProperties>({
			newExpiryTimeMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for system APKs. */
	export interface SystemApkOptions {

		/** Whether to use the rotated key for signing the system APK. */
		rotated?: boolean | null;

		/** Whether system APK was generated with uncompressed dex files. */
		uncompressedDexFiles?: boolean | null;

		/** Whether system APK was generated with uncompressed native libraries. */
		uncompressedNativeLibraries?: boolean | null;
	}

	/** Options for system APKs. */
	export interface SystemApkOptionsFormProperties {

		/** Whether to use the rotated key for signing the system APK. */
		rotated: FormControl<boolean | null | undefined>,

		/** Whether system APK was generated with uncompressed dex files. */
		uncompressedDexFiles: FormControl<boolean | null | undefined>,

		/** Whether system APK was generated with uncompressed native libraries. */
		uncompressedNativeLibraries: FormControl<boolean | null | undefined>,
	}
	export function CreateSystemApkOptionsFormGroup() {
		return new FormGroup<SystemApkOptionsFormProperties>({
			rotated: new FormControl<boolean | null | undefined>(undefined),
			uncompressedDexFiles: new FormControl<boolean | null | undefined>(undefined),
			uncompressedNativeLibraries: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response to list previously created system APK variants. */
	export interface SystemApksListResponse {

		/** All system APK variants created. */
		variants?: Array<Variant>;
	}

	/** Response to list previously created system APK variants. */
	export interface SystemApksListResponseFormProperties {
	}
	export function CreateSystemApksListResponseFormGroup() {
		return new FormGroup<SystemApksListResponseFormProperties>({
		});

	}


	/** APK that is suitable for inclusion in a system image. The resource of SystemApksService. */
	export interface Variant {

		/** The device spec used to generate a system APK. */
		deviceSpec?: DeviceSpec;

		/** Options for system APKs. */
		options?: SystemApkOptions;

		/** Output only. The ID of a previously created system APK variant. */
		variantId?: number | null;
	}

	/** APK that is suitable for inclusion in a system image. The resource of SystemApksService. */
	export interface VariantFormProperties {

		/** Output only. The ID of a previously created system APK variant. */
		variantId: FormControl<number | null | undefined>,
	}
	export function CreateVariantFormGroup() {
		return new FormGroup<VariantFormProperties>({
			variantId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource. */
	export interface Testers {

		/** All testing Google Groups, as email addresses. */
		googleGroups?: Array<string>;
	}

	/** The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource. */
	export interface TestersFormProperties {
	}
	export function CreateTestersFormGroup() {
		return new FormGroup<TestersFormProperties>({
		});

	}


	/** A track configuration. The resource for TracksService. */
	export interface Track {

		/** In a read request, represents all active releases in the track. In an update request, represents desired changes. */
		releases?: Array<TrackRelease>;

		/** Identifier of the track. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) */
		track?: string | null;
	}

	/** A track configuration. The resource for TracksService. */
	export interface TrackFormProperties {

		/** Identifier of the track. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) */
		track: FormControl<string | null | undefined>,
	}
	export function CreateTrackFormGroup() {
		return new FormGroup<TrackFormProperties>({
			track: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A release within a track. */
	export interface TrackRelease {

		/** Country targeting specification. */
		countryTargeting?: CountryTargeting;

		/** In-app update priority of the release. All newly added APKs in the release will be considered at this priority. Can take values in the range [0, 5], with 5 the highest priority. Defaults to 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates. */
		inAppUpdatePriority?: number | null;

		/** The release name. Not required to be unique. If not set, the name is generated from the APK's version_name. If the release contains multiple APKs, the name is generated from the date. */
		name?: string | null;

		/** A description of what is new in this release. */
		releaseNotes?: Array<LocalizedText>;

		/** The status of the release. */
		status?: TrackReleaseStatus | null;

		/** Fraction of users who are eligible for a staged release. 0 < fraction < 1. Can only be set when status is "inProgress" or "halted". */
		userFraction?: number | null;

		/** Version codes of all APKs in the release. Must include version codes to retain from previous releases. */
		versionCodes?: Array<string>;
	}

	/** A release within a track. */
	export interface TrackReleaseFormProperties {

		/** In-app update priority of the release. All newly added APKs in the release will be considered at this priority. Can take values in the range [0, 5], with 5 the highest priority. Defaults to 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates. */
		inAppUpdatePriority: FormControl<number | null | undefined>,

		/** The release name. Not required to be unique. If not set, the name is generated from the APK's version_name. If the release contains multiple APKs, the name is generated from the date. */
		name: FormControl<string | null | undefined>,

		/** The status of the release. */
		status: FormControl<TrackReleaseStatus | null | undefined>,

		/** Fraction of users who are eligible for a staged release. 0 < fraction < 1. Can only be set when status is "inProgress" or "halted". */
		userFraction: FormControl<number | null | undefined>,
	}
	export function CreateTrackReleaseFormGroup() {
		return new FormGroup<TrackReleaseFormProperties>({
			inAppUpdatePriority: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TrackReleaseStatus | null | undefined>(undefined),
			userFraction: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TrackReleaseStatus { statusUnspecified = 'statusUnspecified', draft = 'draft', inProgress = 'inProgress', halted = 'halted', completed = 'completed' }


	/** Configurations of the new track. */
	export interface TrackConfig {

		/** Required. Form factor of the new track. Defaults to the default track. */
		formFactor?: TrackConfigFormFactor | null;

		/** Required. Identifier of the new track. For default tracks, this field consists of the track alias only. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. This prefix must match the value of the `form_factor` field, if it is not a default track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) */
		track?: string | null;

		/** Required. Type of the new track. Currently, the only supported value is closedTesting. */
		type?: TrackConfigType | null;
	}

	/** Configurations of the new track. */
	export interface TrackConfigFormProperties {

		/** Required. Form factor of the new track. Defaults to the default track. */
		formFactor: FormControl<TrackConfigFormFactor | null | undefined>,

		/** Required. Identifier of the new track. For default tracks, this field consists of the track alias only. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. This prefix must match the value of the `form_factor` field, if it is not a default track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) */
		track: FormControl<string | null | undefined>,

		/** Required. Type of the new track. Currently, the only supported value is closedTesting. */
		type: FormControl<TrackConfigType | null | undefined>,
	}
	export function CreateTrackConfigFormGroup() {
		return new FormGroup<TrackConfigFormProperties>({
			formFactor: new FormControl<TrackConfigFormFactor | null | undefined>(undefined),
			track: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TrackConfigType | null | undefined>(undefined),
		});

	}

	export enum TrackConfigFormFactor { FORM_FACTOR_UNSPECIFIED = 'FORM_FACTOR_UNSPECIFIED', DEFAULT = 'DEFAULT', WEAR = 'WEAR', AUTOMOTIVE = 'AUTOMOTIVE' }

	export enum TrackConfigType { TRACK_TYPE_UNSPECIFIED = 'TRACK_TYPE_UNSPECIFIED', CLOSED_TESTING = 'CLOSED_TESTING' }


	/** Resource for per-track country availability information. */
	export interface TrackCountryAvailability {

		/** A list of one or more countries where artifacts in this track are available. This list includes all countries that are targeted by the track, even if only specific carriers are targeted in that country. */
		countries?: Array<TrackTargetedCountry>;

		/** Whether artifacts in this track are available to "rest of the world" countries. */
		restOfWorld?: boolean | null;

		/** Whether this track's availability is synced with the default production track. See https://support.google.com/googleplay/android-developer/answer/7550024 for more information on syncing country availability with production. Note that if this is true, the returned "countries" and "rest_of_world" fields will reflect the values for the default production track. */
		syncWithProduction?: boolean | null;
	}

	/** Resource for per-track country availability information. */
	export interface TrackCountryAvailabilityFormProperties {

		/** Whether artifacts in this track are available to "rest of the world" countries. */
		restOfWorld: FormControl<boolean | null | undefined>,

		/** Whether this track's availability is synced with the default production track. See https://support.google.com/googleplay/android-developer/answer/7550024 for more information on syncing country availability with production. Note that if this is true, the returned "countries" and "rest_of_world" fields will reflect the values for the default production track. */
		syncWithProduction: FormControl<boolean | null | undefined>,
	}
	export function CreateTrackCountryAvailabilityFormGroup() {
		return new FormGroup<TrackCountryAvailabilityFormProperties>({
			restOfWorld: new FormControl<boolean | null | undefined>(undefined),
			syncWithProduction: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Representation of a single country where the contents of a track are available. */
	export interface TrackTargetedCountry {

		/** The country to target, as a two-letter CLDR code. */
		countryCode?: string | null;
	}

	/** Representation of a single country where the contents of a track are available. */
	export interface TrackTargetedCountryFormProperties {

		/** The country to target, as a two-letter CLDR code. */
		countryCode: FormControl<string | null | undefined>,
	}
	export function CreateTrackTargetedCountryFormGroup() {
		return new FormGroup<TrackTargetedCountryFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response listing all tracks. */
	export interface TracksListResponse {

		/** The kind of this response ("androidpublisher#tracksListResponse"). */
		kind?: string | null;

		/** All tracks (including tracks with no releases). */
		tracks?: Array<Track>;
	}

	/** Response listing all tracks. */
	export interface TracksListResponseFormProperties {

		/** The kind of this response ("androidpublisher#tracksListResponse"). */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateTracksListResponseFormGroup() {
		return new FormGroup<TracksListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back. */
	export interface VoidedPurchase {

		/** This kind represents a voided purchase object in the androidpublisher service. */
		kind?: string | null;

		/** The order id which uniquely identifies a one-time purchase, subscription purchase, or subscription renewal. */
		orderId?: string | null;

		/** The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTimeMillis?: string | null;

		/** The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API). */
		purchaseToken?: string | null;

		/** The reason why the purchase was voided, possible values are: 0. Other 1. Remorse 2. Not_received 3. Defective 4. Accidental_purchase 5. Fraud 6. Friendly_fraud 7. Chargeback */
		voidedReason?: number | null;

		/** The initiator of voided purchase, possible values are: 0. User 1. Developer 2. Google */
		voidedSource?: number | null;

		/** The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970). */
		voidedTimeMillis?: string | null;
	}

	/** A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back. */
	export interface VoidedPurchaseFormProperties {

		/** This kind represents a voided purchase object in the androidpublisher service. */
		kind: FormControl<string | null | undefined>,

		/** The order id which uniquely identifies a one-time purchase, subscription purchase, or subscription renewal. */
		orderId: FormControl<string | null | undefined>,

		/** The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTimeMillis: FormControl<string | null | undefined>,

		/** The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API). */
		purchaseToken: FormControl<string | null | undefined>,

		/** The reason why the purchase was voided, possible values are: 0. Other 1. Remorse 2. Not_received 3. Defective 4. Accidental_purchase 5. Fraud 6. Friendly_fraud 7. Chargeback */
		voidedReason: FormControl<number | null | undefined>,

		/** The initiator of voided purchase, possible values are: 0. User 1. Developer 2. Google */
		voidedSource: FormControl<number | null | undefined>,

		/** The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970). */
		voidedTimeMillis: FormControl<string | null | undefined>,
	}
	export function CreateVoidedPurchaseFormGroup() {
		return new FormGroup<VoidedPurchaseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			purchaseTimeMillis: new FormControl<string | null | undefined>(undefined),
			purchaseToken: new FormControl<string | null | undefined>(undefined),
			voidedReason: new FormControl<number | null | undefined>(undefined),
			voidedSource: new FormControl<number | null | undefined>(undefined),
			voidedTimeMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the voidedpurchases.list API. */
	export interface VoidedPurchasesListResponse {

		/** Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. */
		pageInfo?: PageInfo;

		/** Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page. */
		tokenPagination?: TokenPagination;
		voidedPurchases?: Array<VoidedPurchase>;
	}

	/** Response for the voidedpurchases.list API. */
	export interface VoidedPurchasesListResponseFormProperties {
	}
	export function CreateVoidedPurchasesListResponseFormGroup() {
		return new FormGroup<VoidedPurchasesListResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
		 * Post androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk
		 * @param {string} packageName Package name of the app.
		 * @return {InternalAppSharingArtifact} Successful response
		 */
		Androidpublisher_internalappsharingartifacts_uploadapk(packageName: string): Observable<InternalAppSharingArtifact> {
			return this.http.post<InternalAppSharingArtifact>(this.baseUri + 'androidpublisher/v3/applications/internalappsharing/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/artifacts/apk', null, {});
		}

		/**
		 * Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
		 * Post androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle
		 * @param {string} packageName Package name of the app.
		 * @return {InternalAppSharingArtifact} Successful response
		 */
		Androidpublisher_internalappsharingartifacts_uploadbundle(packageName: string): Observable<InternalAppSharingArtifact> {
			return this.http.post<InternalAppSharingArtifact>(this.baseUri + 'androidpublisher/v3/applications/internalappsharing/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/artifacts/bundle', null, {});
		}

		/**
		 * Create an app recovery action with recovery status as DRAFT. Note that this action does not execute the recovery action.
		 * Post androidpublisher/v3/applications/{packageName}/appRecoveries
		 * @param {string} packageName Required. Package name of the app on which recovery action is performed.
		 * @return {AppRecoveryAction} Successful response
		 */
		Androidpublisher_apprecovery_create(packageName: string, requestBody: CreateDraftAppRecoveryRequest): Observable<AppRecoveryAction> {
			return this.http.post<AppRecoveryAction>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/appRecoveries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Incrementally update targeting for a recovery action. Note that only the criteria selected during the creation of recovery action can be expanded.
		 * Post androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:addTargeting
		 * @param {string} packageName Required. Package name of the app for which recovery action is to be updated.
		 * @param {string} appRecoveryId Required. ID corresponding to the app recovery action.
		 * @return {AddTargetingResponse} Successful response
		 */
		Androidpublisher_apprecovery_addTargeting(packageName: string, appRecoveryId: string, requestBody: AddTargetingRequest): Observable<AddTargetingResponse> {
			return this.http.post<AddTargetingResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/appRecoveries/' + (appRecoveryId == null ? '' : encodeURIComponent(appRecoveryId)) + ':addTargeting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancel an already executing app recovery action. Note that this action changes status of the recovery action to CANCELED.
		 * Post androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:cancel
		 * @param {string} packageName Required. Package name of the app for which recovery action cancellation is requested.
		 * @param {string} appRecoveryId Required. ID corresponding to the app recovery action.
		 * @return {CancelAppRecoveryResponse} Successful response
		 */
		Androidpublisher_apprecovery_cancel(packageName: string, appRecoveryId: string, requestBody: CancelAppRecoveryRequest): Observable<CancelAppRecoveryResponse> {
			return this.http.post<CancelAppRecoveryResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/appRecoveries/' + (appRecoveryId == null ? '' : encodeURIComponent(appRecoveryId)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deploy an already created app recovery action with recovery status DRAFT. Note that this action activates the recovery action for all targeted users and changes its status to ACTIVE.
		 * Post androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:deploy
		 * @param {string} packageName Required. Package name of the app for which recovery action is deployed.
		 * @param {string} appRecoveryId Required. ID corresponding to the app recovery action to deploy.
		 * @return {DeployAppRecoveryResponse} Successful response
		 */
		Androidpublisher_apprecovery_deploy(packageName: string, appRecoveryId: string, requestBody: DeployAppRecoveryRequest): Observable<DeployAppRecoveryResponse> {
			return this.http.post<DeployAppRecoveryResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/appRecoveries/' + (appRecoveryId == null ? '' : encodeURIComponent(appRecoveryId)) + ':deploy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns created device tier configs, ordered by descending creation time.
		 * Get androidpublisher/v3/applications/{packageName}/deviceTierConfigs
		 * @param {string} packageName Package name of the app.
		 * @param {number} pageSize The maximum number of device tier configs to return. The service may return fewer than this value. If unspecified, at most 10 device tier configs will be returned. The maximum value for this field is 100; values above 100 will be coerced to 100. Device tier configs will be ordered by descending creation time.
		 * @param {string} pageToken A page token, received from a previous `ListDeviceTierConfigs` call. Provide this to retrieve the subsequent page.
		 * @return {ListDeviceTierConfigsResponse} Successful response
		 */
		Androidpublisher_applications_deviceTierConfigs_list(packageName: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDeviceTierConfigsResponse> {
			return this.http.get<ListDeviceTierConfigsResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/deviceTierConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new device tier config for an app.
		 * Post androidpublisher/v3/applications/{packageName}/deviceTierConfigs
		 * @param {string} packageName Package name of the app.
		 * @param {boolean} allowUnknownDevices Whether the service should accept device IDs that are unknown to Play's device catalog.
		 * @return {DeviceTierConfig} Successful response
		 */
		Androidpublisher_applications_deviceTierConfigs_create(packageName: string, allowUnknownDevices: boolean | null | undefined, requestBody: DeviceTierConfig): Observable<DeviceTierConfig> {
			return this.http.post<DeviceTierConfig>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/deviceTierConfigs&allowUnknownDevices=' + allowUnknownDevices, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a particular device tier config.
		 * Get androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}
		 * @param {string} packageName Package name of the app.
		 * @param {string} deviceTierConfigId Required. Id of an existing device tier config.
		 * @return {DeviceTierConfig} Successful response
		 */
		Androidpublisher_applications_deviceTierConfigs_get(packageName: string, deviceTierConfigId: string): Observable<DeviceTierConfig> {
			return this.http.get<DeviceTierConfig>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/deviceTierConfigs/' + (deviceTierConfigId == null ? '' : encodeURIComponent(deviceTierConfigId)), {});
		}

		/**
		 * Creates a new edit for an app.
		 * Post androidpublisher/v3/applications/{packageName}/edits
		 * @param {string} packageName Package name of the app.
		 * @return {AppEdit} Successful response
		 */
		Androidpublisher_edits_insert(packageName: string, requestBody: AppEdit): Observable<AppEdit> {
			return this.http.post<AppEdit>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an app edit.
		 * Delete androidpublisher/v3/applications/{packageName}/edits/{editId}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_delete(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an app edit.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {AppEdit} Successful response
		 */
		Androidpublisher_edits_get(packageName: string, editId: string): Observable<AppEdit> {
			return this.http.get<AppEdit>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)), {});
		}

		/**
		 * Lists all current APKs of the app and edit.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/apks
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {ApksListResponse} Successful response
		 */
		Androidpublisher_edits_apks_list(packageName: string, editId: string): Observable<ApksListResponse> {
			return this.http.get<ApksListResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks', {});
		}

		/**
		 * Uploads an APK and adds to the current edit.
		 * Post androidpublisher/v3/applications/{packageName}/edits/{editId}/apks
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {Apk} Successful response
		 */
		Androidpublisher_edits_apks_upload(packageName: string, editId: string): Observable<Apk> {
			return this.http.post<Apk>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks', null, {});
		}

		/**
		 * Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
		 * Post androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {ApksAddExternallyHostedResponse} Successful response
		 */
		Androidpublisher_edits_apks_addexternallyhosted(packageName: string, editId: string, requestBody: ApksAddExternallyHostedRequest): Observable<ApksAddExternallyHostedResponse> {
			return this.http.post<ApksAddExternallyHostedResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/externallyHosted', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Uploads a new deobfuscation file and attaches to the specified APK.
		 * Post androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}
		 * @param {string} packageName Unique identifier for the Android app.
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The version code of the APK whose Deobfuscation File is being uploaded.
		 * @param {DeobfuscationFileSymbolType} deobfuscationFileType The type of the deobfuscation file.
		 * @return {DeobfuscationFilesUploadResponse} Successful response
		 */
		Androidpublisher_edits_deobfuscationfiles_upload(packageName: string, editId: string, apkVersionCode: number, deobfuscationFileType: DeobfuscationFileSymbolType): Observable<DeobfuscationFilesUploadResponse> {
			return this.http.post<DeobfuscationFilesUploadResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/deobfuscationFiles/' + deobfuscationFileType, null, {});
		}

		/**
		 * Fetches the expansion file configuration for the specified APK.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {number} apkVersionCode The version code of the APK whose expansion file configuration is being read or modified.
		 * @param {Androidpublisher_edits_expansionfiles_getExpansionFileType} expansionFileType The file type of the file configuration which is being read or modified.
		 * @return {ExpansionFile} Successful response
		 */
		Androidpublisher_edits_expansionfiles_get(packageName: string, editId: string, apkVersionCode: number, expansionFileType: Androidpublisher_edits_expansionfiles_getExpansionFileType): Observable<ExpansionFile> {
			return this.http.get<ExpansionFile>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/expansionFiles/' + expansionFileType, {});
		}

		/**
		 * Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
		 * Patch androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {number} apkVersionCode The version code of the APK whose expansion file configuration is being read or modified.
		 * @param {Androidpublisher_edits_expansionfiles_getExpansionFileType} expansionFileType The file type of the expansion file configuration which is being updated.
		 * @return {ExpansionFile} Successful response
		 */
		Androidpublisher_edits_expansionfiles_patch(packageName: string, editId: string, apkVersionCode: number, expansionFileType: Androidpublisher_edits_expansionfiles_getExpansionFileType, requestBody: ExpansionFile): Observable<ExpansionFile> {
			return this.http.patch<ExpansionFile>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/expansionFiles/' + expansionFileType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Uploads a new expansion file and attaches to the specified APK.
		 * Post androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {number} apkVersionCode The version code of the APK whose expansion file configuration is being read or modified.
		 * @param {Androidpublisher_edits_expansionfiles_getExpansionFileType} expansionFileType The file type of the expansion file configuration which is being updated.
		 * @return {ExpansionFilesUploadResponse} Successful response
		 */
		Androidpublisher_edits_expansionfiles_upload(packageName: string, editId: string, apkVersionCode: number, expansionFileType: Androidpublisher_edits_expansionfiles_getExpansionFileType): Observable<ExpansionFilesUploadResponse> {
			return this.http.post<ExpansionFilesUploadResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/expansionFiles/' + expansionFileType, null, {});
		}

		/**
		 * Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
		 * Put androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {number} apkVersionCode The version code of the APK whose expansion file configuration is being read or modified.
		 * @param {Androidpublisher_edits_expansionfiles_getExpansionFileType} expansionFileType The file type of the file configuration which is being read or modified.
		 * @return {ExpansionFile} Successful response
		 */
		Androidpublisher_edits_expansionfiles_update(packageName: string, editId: string, apkVersionCode: number, expansionFileType: Androidpublisher_edits_expansionfiles_getExpansionFileType, requestBody: ExpansionFile): Observable<ExpansionFile> {
			return this.http.put<ExpansionFile>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/expansionFiles/' + expansionFileType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all current Android App Bundles of the app and edit.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {BundlesListResponse} Successful response
		 */
		Androidpublisher_edits_bundles_list(packageName: string, editId: string): Observable<BundlesListResponse> {
			return this.http.get<BundlesListResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/bundles', {});
		}

		/**
		 * Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
		 * Post androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {boolean} ackBundleInstallationWarning Must be set to true if the app bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB).
		 * @param {string} deviceTierConfigId Device tier config (DTC) to be used for generating deliverables (APKs). Contains id of the DTC or "LATEST" for last uploaded DTC.
		 * @return {Bundle} Successful response
		 */
		Androidpublisher_edits_bundles_upload(packageName: string, editId: string, ackBundleInstallationWarning: boolean | null | undefined, deviceTierConfigId: string | null | undefined): Observable<Bundle> {
			return this.http.post<Bundle>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/bundles&ackBundleInstallationWarning=' + ackBundleInstallationWarning + '&deviceTierConfigId=' + (deviceTierConfigId == null ? '' : encodeURIComponent(deviceTierConfigId)), null, {});
		}

		/**
		 * Gets country availability.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} track The track to read from.
		 * @return {TrackCountryAvailability} Successful response
		 */
		Androidpublisher_edits_countryavailability_get(packageName: string, editId: string, track: string): Observable<TrackCountryAvailability> {
			return this.http.get<TrackCountryAvailability>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/countryAvailability/' + (track == null ? '' : encodeURIComponent(track)), {});
		}

		/**
		 * Gets details of an app.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/details
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {AppDetails} Successful response
		 */
		Androidpublisher_edits_details_get(packageName: string, editId: string): Observable<AppDetails> {
			return this.http.get<AppDetails>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/details', {});
		}

		/**
		 * Patches details of an app.
		 * Patch androidpublisher/v3/applications/{packageName}/edits/{editId}/details
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {AppDetails} Successful response
		 */
		Androidpublisher_edits_details_patch(packageName: string, editId: string, requestBody: AppDetails): Observable<AppDetails> {
			return this.http.patch<AppDetails>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates details of an app.
		 * Put androidpublisher/v3/applications/{packageName}/edits/{editId}/details
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {AppDetails} Successful response
		 */
		Androidpublisher_edits_details_update(packageName: string, editId: string, requestBody: AppDetails): Observable<AppDetails> {
			return this.http.put<AppDetails>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes all store listings.
		 * Delete androidpublisher/v3/applications/{packageName}/edits/{editId}/listings
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_listings_deleteall(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all localized store listings.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/listings
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {ListingsListResponse} Successful response
		 */
		Androidpublisher_edits_listings_list(packageName: string, editId: string): Observable<ListingsListResponse> {
			return this.http.get<ListingsListResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings', {});
		}

		/**
		 * Deletes a localized store listing.
		 * Delete androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} language Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_listings_delete(packageName: string, editId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a localized store listing.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} language Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
		 * @return {Listing} Successful response
		 */
		Androidpublisher_edits_listings_get(packageName: string, editId: string, language: string): Observable<Listing> {
			return this.http.get<Listing>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * Patches a localized store listing.
		 * Patch androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} language Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
		 * @return {Listing} Successful response
		 */
		Androidpublisher_edits_listings_patch(packageName: string, editId: string, language: string, requestBody: Listing): Observable<Listing> {
			return this.http.patch<Listing>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates a localized store listing.
		 * Put androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} language Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
		 * @return {Listing} Successful response
		 */
		Androidpublisher_edits_listings_update(packageName: string, editId: string, language: string, requestBody: Listing): Observable<Listing> {
			return this.http.put<Listing>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes all images for the specified language and image type. Returns an empty response if no images are found.
		 * Delete androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} language Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
		 * @param {Androidpublisher_edits_images_deleteallImageType} imageType Type of the Image. Providing an image type that refers to no images is a no-op.
		 * @return {ImagesDeleteAllResponse} Successful response
		 */
		Androidpublisher_edits_images_deleteall(packageName: string, editId: string, language: string, imageType: Androidpublisher_edits_images_deleteallImageType): Observable<ImagesDeleteAllResponse> {
			return this.http.delete<ImagesDeleteAllResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '/' + imageType, {});
		}

		/**
		 * Lists all images. The response may be empty.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} language Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language.
		 * @param {Androidpublisher_edits_images_deleteallImageType} imageType Type of the Image. Providing an image type that refers to no images will return an empty response.
		 * @return {ImagesListResponse} Successful response
		 */
		Androidpublisher_edits_images_list(packageName: string, editId: string, language: string, imageType: Androidpublisher_edits_images_deleteallImageType): Observable<ImagesListResponse> {
			return this.http.get<ImagesListResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '/' + imageType, {});
		}

		/**
		 * Uploads an image of the specified language and image type, and adds to the edit.
		 * Post androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} language Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
		 * @param {Androidpublisher_edits_images_deleteallImageType} imageType Type of the Image.
		 * @return {ImagesUploadResponse} Successful response
		 */
		Androidpublisher_edits_images_upload(packageName: string, editId: string, language: string, imageType: Androidpublisher_edits_images_deleteallImageType): Observable<ImagesUploadResponse> {
			return this.http.post<ImagesUploadResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '/' + imageType, null, {});
		}

		/**
		 * Deletes the image (specified by id) from the edit.
		 * Delete androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} language Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
		 * @param {Androidpublisher_edits_images_deleteallImageType} imageType Type of the Image.
		 * @param {string} imageId Unique identifier an image within the set of images attached to this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_images_delete(packageName: string, editId: string, language: string, imageType: Androidpublisher_edits_images_deleteallImageType, imageId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '/' + imageType + '/' + (imageId == null ? '' : encodeURIComponent(imageId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets testers. Note: Testers resource does not support email lists.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} track The track to read from.
		 * @return {Testers} Successful response
		 */
		Androidpublisher_edits_testers_get(packageName: string, editId: string, track: string): Observable<Testers> {
			return this.http.get<Testers>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/testers/' + (track == null ? '' : encodeURIComponent(track)), {});
		}

		/**
		 * Patches testers. Note: Testers resource does not support email lists.
		 * Patch androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} track The track to update.
		 * @return {Testers} Successful response
		 */
		Androidpublisher_edits_testers_patch(packageName: string, editId: string, track: string, requestBody: Testers): Observable<Testers> {
			return this.http.patch<Testers>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/testers/' + (track == null ? '' : encodeURIComponent(track)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates testers. Note: Testers resource does not support email lists.
		 * Put androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} track The track to update.
		 * @return {Testers} Successful response
		 */
		Androidpublisher_edits_testers_update(packageName: string, editId: string, track: string, requestBody: Testers): Observable<Testers> {
			return this.http.put<Testers>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/testers/' + (track == null ? '' : encodeURIComponent(track)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tracks.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {TracksListResponse} Successful response
		 */
		Androidpublisher_edits_tracks_list(packageName: string, editId: string): Observable<TracksListResponse> {
			return this.http.get<TracksListResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/tracks', {});
		}

		/**
		 * Creates a new track.
		 * Post androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks
		 * @param {string} packageName Required. Package name of the app.
		 * @param {string} editId Required. Identifier of the edit.
		 * @return {Track} Successful response
		 */
		Androidpublisher_edits_tracks_create(packageName: string, editId: string, requestBody: TrackConfig): Observable<Track> {
			return this.http.post<Track>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/tracks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a track.
		 * Get androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} track Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
		 * @return {Track} Successful response
		 */
		Androidpublisher_edits_tracks_get(packageName: string, editId: string, track: string): Observable<Track> {
			return this.http.get<Track>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/tracks/' + (track == null ? '' : encodeURIComponent(track)), {});
		}

		/**
		 * Patches a track.
		 * Patch androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} track Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
		 * @return {Track} Successful response
		 */
		Androidpublisher_edits_tracks_patch(packageName: string, editId: string, track: string, requestBody: Track): Observable<Track> {
			return this.http.patch<Track>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/tracks/' + (track == null ? '' : encodeURIComponent(track)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a track.
		 * Put androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {string} track Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
		 * @return {Track} Successful response
		 */
		Androidpublisher_edits_tracks_update(packageName: string, editId: string, track: string, requestBody: Track): Observable<Track> {
			return this.http.put<Track>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/tracks/' + (track == null ? '' : encodeURIComponent(track)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Commits an app edit.
		 * Post androidpublisher/v3/applications/{packageName}/edits/{editId}:commit
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @param {boolean} changesNotSentForReview Indicates that the changes in this edit will not be reviewed until they are explicitly sent for review from the Google Play Console UI. These changes will be added to any other changes that are not yet sent for review.
		 * @return {AppEdit} Successful response
		 */
		Androidpublisher_edits_commit(packageName: string, editId: string, changesNotSentForReview: boolean | null | undefined): Observable<AppEdit> {
			return this.http.post<AppEdit>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + ':commit&changesNotSentForReview=' + changesNotSentForReview, null, {});
		}

		/**
		 * Validates an app edit.
		 * Post androidpublisher/v3/applications/{packageName}/edits/{editId}:validate
		 * @param {string} packageName Package name of the app.
		 * @param {string} editId Identifier of the edit.
		 * @return {AppEdit} Successful response
		 */
		Androidpublisher_edits_validate(packageName: string, editId: string): Observable<AppEdit> {
			return this.http.post<AppEdit>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + ':validate', null, {});
		}

		/**
		 * Returns download metadata for all APKs that were generated from a given app bundle.
		 * Get androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}
		 * @param {string} packageName Package name of the app.
		 * @param {number} versionCode Version code of the app bundle.
		 * @return {GeneratedApksListResponse} Successful response
		 */
		Androidpublisher_generatedapks_list(packageName: string, versionCode: number): Observable<GeneratedApksListResponse> {
			return this.http.get<GeneratedApksListResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/generatedApks/' + versionCode, {});
		}

		/**
		 * Downloads a single signed APK generated from an app bundle.
		 * Get androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download
		 * @param {string} packageName Package name of the app.
		 * @param {number} versionCode Version code of the app bundle.
		 * @param {string} downloadId Download ID, which uniquely identifies the APK to download. Can be obtained from the response of `generatedapks.list` method.
		 * @return {void} Successful response
		 */
		Androidpublisher_generatedapks_download(packageName: string, versionCode: number, downloadId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/generatedApks/' + versionCode + '/downloads/' + (downloadId == null ? '' : encodeURIComponent(downloadId)) + ':download', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
		 * Get androidpublisher/v3/applications/{packageName}/inappproducts
		 * @param {string} packageName Package name of the app.
		 * @param {number} maxResults Deprecated and ignored. The page size is determined by the server.
		 * @param {number} startIndex Deprecated and ignored. Set the `token` parameter to retrieve the next page.
		 * @param {string} token Pagination token. If empty, list starts at the first product.
		 * @return {InappproductsListResponse} Successful response
		 */
		Androidpublisher_inappproducts_list(packageName: string, maxResults: number | null | undefined, startIndex: number | null | undefined, token: string | null | undefined): Observable<InappproductsListResponse> {
			return this.http.get<InappproductsListResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts&maxResults=' + maxResults + '&startIndex=' + startIndex + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates an in-app product (a managed product or a subscription). This method should no longer be used to create subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
		 * Post androidpublisher/v3/applications/{packageName}/inappproducts
		 * @param {string} packageName Package name of the app.
		 * @param {boolean} autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
		 * @return {InAppProduct} Successful response
		 */
		Androidpublisher_inappproducts_insert(packageName: string, autoConvertMissingPrices: boolean | null | undefined, requestBody: InAppProduct): Observable<InAppProduct> {
			return this.http.post<InAppProduct>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts&autoConvertMissingPrices=' + autoConvertMissingPrices, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an in-app product (a managed product or a subscription). This method should no longer be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
		 * Delete androidpublisher/v3/applications/{packageName}/inappproducts/{sku}
		 * @param {string} packageName Package name of the app.
		 * @param {string} sku Unique identifier for the in-app product.
		 * @param {ActivateBasePlanRequestLatencyTolerance} latencyTolerance Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
		 * @return {void} Successful response
		 */
		Androidpublisher_inappproducts_delete(packageName: string, sku: string, latencyTolerance: ActivateBasePlanRequestLatencyTolerance | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts/' + (sku == null ? '' : encodeURIComponent(sku)) + '&latencyTolerance=' + latencyTolerance, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an in-app product, which can be a managed product or a subscription. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
		 * Get androidpublisher/v3/applications/{packageName}/inappproducts/{sku}
		 * @param {string} packageName Package name of the app.
		 * @param {string} sku Unique identifier for the in-app product.
		 * @return {InAppProduct} Successful response
		 */
		Androidpublisher_inappproducts_get(packageName: string, sku: string): Observable<InAppProduct> {
			return this.http.get<InAppProduct>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts/' + (sku == null ? '' : encodeURIComponent(sku)), {});
		}

		/**
		 * Patches an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
		 * Patch androidpublisher/v3/applications/{packageName}/inappproducts/{sku}
		 * @param {string} packageName Package name of the app.
		 * @param {string} sku Unique identifier for the in-app product.
		 * @param {boolean} autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
		 * @param {ActivateBasePlanRequestLatencyTolerance} latencyTolerance Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
		 * @return {InAppProduct} Successful response
		 */
		Androidpublisher_inappproducts_patch(packageName: string, sku: string, autoConvertMissingPrices: boolean | null | undefined, latencyTolerance: ActivateBasePlanRequestLatencyTolerance | null | undefined, requestBody: InAppProduct): Observable<InAppProduct> {
			return this.http.patch<InAppProduct>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts/' + (sku == null ? '' : encodeURIComponent(sku)) + '&autoConvertMissingPrices=' + autoConvertMissingPrices + '&latencyTolerance=' + latencyTolerance, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
		 * Put androidpublisher/v3/applications/{packageName}/inappproducts/{sku}
		 * @param {string} packageName Package name of the app.
		 * @param {string} sku Unique identifier for the in-app product.
		 * @param {boolean} allowMissing If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created.
		 * @param {boolean} autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
		 * @param {ActivateBasePlanRequestLatencyTolerance} latencyTolerance Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
		 * @return {InAppProduct} Successful response
		 */
		Androidpublisher_inappproducts_update(packageName: string, sku: string, allowMissing: boolean | null | undefined, autoConvertMissingPrices: boolean | null | undefined, latencyTolerance: ActivateBasePlanRequestLatencyTolerance | null | undefined, requestBody: InAppProduct): Observable<InAppProduct> {
			return this.http.put<InAppProduct>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts/' + (sku == null ? '' : encodeURIComponent(sku)) + '&allowMissing=' + allowMissing + '&autoConvertMissingPrices=' + autoConvertMissingPrices + '&latencyTolerance=' + latencyTolerance, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should not be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
		 * Post androidpublisher/v3/applications/{packageName}/inappproducts:batchDelete
		 * @param {string} packageName Package name of the app.
		 * @return {void} Successful response
		 */
		Androidpublisher_inappproducts_batchDelete(packageName: string, requestBody: InappproductsBatchDeleteRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reads multiple in-app products, which can be managed products or subscriptions. This method should not be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
		 * Get androidpublisher/v3/applications/{packageName}/inappproducts:batchGet
		 * @param {string} packageName Package name of the app.
		 * @param {Array<string>} sku Unique identifier for the in-app products.
		 * @return {InappproductsBatchGetResponse} Successful response
		 */
		Androidpublisher_inappproducts_batchGet(packageName: string, sku: Array<string> | null | undefined): Observable<InappproductsBatchGetResponse> {
			return this.http.get<InappproductsBatchGetResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts:batchGet&' + sku?.map(z => `sku=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates or inserts one or more in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
		 * Post androidpublisher/v3/applications/{packageName}/inappproducts:batchUpdate
		 * @param {string} packageName Package name of the app.
		 * @return {InappproductsBatchUpdateResponse} Successful response
		 */
		Androidpublisher_inappproducts_batchUpdate(packageName: string, requestBody: InappproductsBatchUpdateRequest): Observable<InappproductsBatchUpdateResponse> {
			return this.http.post<InappproductsBatchUpdateResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refunds a user's subscription or in-app purchase order. Orders older than 3 years cannot be refunded.
		 * Post androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund
		 * @param {string} packageName The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
		 * @param {string} orderId The order ID provided to the user when the subscription or in-app order was purchased.
		 * @param {boolean} revoke Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional).
		 * @return {void} Successful response
		 */
		Androidpublisher_orders_refund(packageName: string, orderId: string, revoke: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + ':refund&revoke=' + revoke, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
		 * Post androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices
		 * @param {string} packageName Required. The app package name.
		 * @return {ConvertRegionPricesResponse} Successful response
		 */
		Androidpublisher_monetization_convertRegionPrices(packageName: string, requestBody: ConvertRegionPricesRequest): Observable<ConvertRegionPricesResponse> {
			return this.http.post<ConvertRegionPricesResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/pricing:convertRegionPrices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks the purchase and consumption status of an inapp item.
		 * Get androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}
		 * @param {string} packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
		 * @param {string} productId The inapp product SKU (for example, 'com.some.thing.inapp1').
		 * @param {string} token The token provided to the user's device when the inapp product was purchased.
		 * @return {ProductPurchase} Successful response
		 */
		Androidpublisher_purchases_products_get(packageName: string, productId: string, token: string): Observable<ProductPurchase> {
			return this.http.get<ProductPurchase>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Acknowledges a purchase of an inapp item.
		 * Post androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge
		 * @param {string} packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
		 * @param {string} productId The inapp product SKU (for example, 'com.some.thing.inapp1').
		 * @param {string} token The token provided to the user's device when the inapp product was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_products_acknowledge(packageName: string, productId: string, token: string, requestBody: ProductPurchasesAcknowledgeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Consumes a purchase for an inapp item.
		 * Post androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume
		 * @param {string} packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
		 * @param {string} productId The inapp product SKU (for example, 'com.some.thing.inapp1').
		 * @param {string} token The token provided to the user's device when the inapp product was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_products_consume(packageName: string, productId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':consume', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a user's subscription purchase is valid and returns its expiry time.
		 * Get androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {SubscriptionPurchase} Successful response
		 */
		Androidpublisher_purchases_subscriptions_get(packageName: string, subscriptionId: string, token: string): Observable<SubscriptionPurchase> {
			return this.http.get<SubscriptionPurchase>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Acknowledges a subscription purchase.
		 * Post androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_subscriptions_acknowledge(packageName: string, subscriptionId: string, token: string, requestBody: SubscriptionPurchasesAcknowledgeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
		 * Post androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_subscriptions_cancel(packageName: string, subscriptionId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Defers a user's subscription purchase until a specified future expiration time.
		 * Post androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {SubscriptionPurchasesDeferResponse} Successful response
		 */
		Androidpublisher_purchases_subscriptions_defer(packageName: string, subscriptionId: string, token: string, requestBody: SubscriptionPurchasesDeferRequest): Observable<SubscriptionPurchasesDeferResponse> {
			return this.http.post<SubscriptionPurchasesDeferResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':defer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
		 * Post androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId "The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_subscriptions_refund(packageName: string, subscriptionId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':refund', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
		 * Post androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_subscriptions_revoke(packageName: string, subscriptionId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':revoke', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata about a subscription
		 * Get androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}
		 * @param {string} packageName The package of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} token Required. The token provided to the user's device when the subscription was purchased.
		 * @return {SubscriptionPurchaseV2} Successful response
		 */
		Androidpublisher_purchases_subscriptionsv2_get(packageName: string, token: string): Observable<SubscriptionPurchaseV2> {
			return this.http.get<SubscriptionPurchaseV2>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptionsv2/tokens/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Revoke a subscription purchase for the user.
		 * Post androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:revoke
		 * @param {string} packageName Required. The package of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} token Required. The token provided to the user's device when the subscription was purchased.
		 * @return {RevokeSubscriptionPurchaseResponse} Successful response
		 */
		Androidpublisher_purchases_subscriptionsv2_revoke(packageName: string, token: string, requestBody: RevokeSubscriptionPurchaseRequest): Observable<RevokeSubscriptionPurchaseResponse> {
			return this.http.post<RevokeSubscriptionPurchaseResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptionsv2/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':revoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the purchases that were canceled, refunded or charged-back.
		 * Get androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases
		 * @param {string} packageName The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
		 * @param {string} endTime The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
		 * @param {number} maxResults Defines how many results the list operation should return. The default number depends on the resource collection.
		 * @param {number} startIndex Defines the index of the first element to return. This can only be used if indexed paging is enabled.
		 * @param {string} startTime The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
		 * @param {string} token Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.
		 * @param {number} type The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.
		 * @return {VoidedPurchasesListResponse} Successful response
		 */
		Androidpublisher_purchases_voidedpurchases_list(packageName: string, endTime: string | null | undefined, maxResults: number | null | undefined, startIndex: number | null | undefined, startTime: string | null | undefined, token: string | null | undefined, type: number | null | undefined): Observable<VoidedPurchasesListResponse> {
			return this.http.get<VoidedPurchasesListResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/voidedpurchases&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&maxResults=' + maxResults + '&startIndex=' + startIndex + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)) + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&type=' + type, {});
		}

		/**
		 * Lists all reviews.
		 * Get androidpublisher/v3/applications/{packageName}/reviews
		 * @param {string} packageName Package name of the app.
		 * @param {number} maxResults How many results the list operation should return.
		 * @param {number} startIndex The index of the first element to return.
		 * @param {string} token Pagination token. If empty, list starts at the first review.
		 * @param {string} translationLanguage Language localization code.
		 * @return {ReviewsListResponse} Successful response
		 */
		Androidpublisher_reviews_list(packageName: string, maxResults: number | null | undefined, startIndex: number | null | undefined, token: string | null | undefined, translationLanguage: string | null | undefined): Observable<ReviewsListResponse> {
			return this.http.get<ReviewsListResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/reviews&maxResults=' + maxResults + '&startIndex=' + startIndex + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&translationLanguage=' + (translationLanguage == null ? '' : encodeURIComponent(translationLanguage)), {});
		}

		/**
		 * Gets a single review.
		 * Get androidpublisher/v3/applications/{packageName}/reviews/{reviewId}
		 * @param {string} packageName Package name of the app.
		 * @param {string} reviewId Unique identifier for a review.
		 * @param {string} translationLanguage Language localization code.
		 * @return {Review} Successful response
		 */
		Androidpublisher_reviews_get(packageName: string, reviewId: string, translationLanguage: string | null | undefined): Observable<Review> {
			return this.http.get<Review>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/reviews/' + (reviewId == null ? '' : encodeURIComponent(reviewId)) + '&translationLanguage=' + (translationLanguage == null ? '' : encodeURIComponent(translationLanguage)), {});
		}

		/**
		 * Replies to a single review, or updates an existing reply.
		 * Post androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply
		 * @param {string} packageName Package name of the app.
		 * @param {string} reviewId Unique identifier for a review.
		 * @return {ReviewsReplyResponse} Successful response
		 */
		Androidpublisher_reviews_reply(packageName: string, reviewId: string, requestBody: ReviewsReplyRequest): Observable<ReviewsReplyResponse> {
			return this.http.post<ReviewsReplyResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/reviews/' + (reviewId == null ? '' : encodeURIComponent(reviewId)) + ':reply', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all subscriptions under a given app.
		 * Get androidpublisher/v3/applications/{packageName}/subscriptions
		 * @param {string} packageName Required. The parent app (package name) for which the subscriptions should be read.
		 * @param {number} pageSize The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
		 * @param {boolean} showArchived Whether archived subscriptions should be included in the response. Defaults to false.
		 * @return {ListSubscriptionsResponse} Successful response
		 */
		Androidpublisher_monetization_subscriptions_list(packageName: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showArchived: boolean | null | undefined): Observable<ListSubscriptionsResponse> {
			return this.http.get<ListSubscriptionsResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showArchived=' + showArchived, {});
		}

		/**
		 * Creates a new subscription. Newly added base plans will remain in draft state until activated.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions
		 * @param {string} packageName Required. The parent app (package name) for which the subscription should be created. Must be equal to the package_name field on the Subscription resource.
		 * @param {string} productId Required. The ID to use for the subscription. For the requirements on this format, see the documentation of the product_id field on the Subscription resource.
		 * @param {string} regionsVersion_version Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02.
		 * @return {Subscription} Successful response
		 */
		Androidpublisher_monetization_subscriptions_create(packageName: string, productId: string | null | undefined, regionsVersion_version: string | null | undefined, requestBody: Subscription): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions&productId=' + (productId == null ? '' : encodeURIComponent(productId)) + '&regionsVersion_version=' + (regionsVersion_version == null ? '' : encodeURIComponent(regionsVersion_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
		 * Delete androidpublisher/v3/applications/{packageName}/subscriptions/{productId}
		 * @param {string} packageName Required. The parent app (package name) of the app of the subscription to delete.
		 * @param {string} productId Required. The unique product ID of the subscription to delete.
		 * @return {void} Successful response
		 */
		Androidpublisher_monetization_subscriptions_delete(packageName: string, productId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reads a single subscription.
		 * Get androidpublisher/v3/applications/{packageName}/subscriptions/{productId}
		 * @param {string} packageName Required. The parent app (package name) of the subscription to get.
		 * @param {string} productId Required. The unique product ID of the subscription to get.
		 * @return {Subscription} Successful response
		 */
		Androidpublisher_monetization_subscriptions_get(packageName: string, productId: string): Observable<Subscription> {
			return this.http.get<Subscription>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)), {});
		}

		/**
		 * Updates an existing subscription.
		 * Patch androidpublisher/v3/applications/{packageName}/subscriptions/{productId}
		 * @param {string} packageName Immutable. Package name of the parent app.
		 * @param {string} productId Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.
		 * @param {boolean} allowMissing Optional. If set to true, and the subscription with the given package_name and product_id doesn't exist, the subscription will be created. If a new subscription is created, update_mask is ignored.
		 * @param {ActivateBasePlanRequestLatencyTolerance} latencyTolerance Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
		 * @param {string} regionsVersion_version Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02.
		 * @param {string} updateMask Required. The list of fields to be updated.
		 * @return {Subscription} Successful response
		 */
		Androidpublisher_monetization_subscriptions_patch(packageName: string, productId: string, allowMissing: boolean | null | undefined, latencyTolerance: ActivateBasePlanRequestLatencyTolerance | null | undefined, regionsVersion_version: string | null | undefined, updateMask: string | null | undefined, requestBody: Subscription): Observable<Subscription> {
			return this.http.patch<Subscription>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '&allowMissing=' + allowMissing + '&latencyTolerance=' + latencyTolerance + '&regionsVersion_version=' + (regionsVersion_version == null ? '' : encodeURIComponent(regionsVersion_version)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
		 * Delete androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}
		 * @param {string} packageName Required. The parent app (package name) of the base plan to delete.
		 * @param {string} productId Required. The parent subscription (ID) of the base plan to delete.
		 * @param {string} basePlanId Required. The unique offer ID of the base plan to delete.
		 * @return {void} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_delete(packageName: string, productId: string, basePlanId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all offers under a given subscription.
		 * Get androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers
		 * @param {string} packageName Required. The parent app (package name) for which the subscriptions should be read.
		 * @param {string} productId Required. The parent subscription (ID) for which the offers should be read. May be specified as '-' to read all offers under an app.
		 * @param {string} basePlanId Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read all offers under a subscription or an app. Must be specified as '-' if product_id is specified as '-'.
		 * @param {number} pageSize The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListSubscriptionsOffers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptionOffers` must match the call that provided the page token.
		 * @return {ListSubscriptionOffersResponse} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_offers_list(packageName: string, productId: string, basePlanId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSubscriptionOffersResponse> {
			return this.http.get<ListSubscriptionOffersResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + '/offers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers
		 * @param {string} packageName Required. The parent app (package name) for which the offer should be created. Must be equal to the package_name field on the Subscription resource.
		 * @param {string} productId Required. The parent subscription (ID) for which the offer should be created. Must be equal to the product_id field on the SubscriptionOffer resource.
		 * @param {string} basePlanId Required. The parent base plan (ID) for which the offer should be created. Must be equal to the base_plan_id field on the SubscriptionOffer resource.
		 * @param {string} offerId Required. The ID to use for the offer. For the requirements on this format, see the documentation of the offer_id field on the SubscriptionOffer resource.
		 * @param {string} regionsVersion_version Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02.
		 * @return {SubscriptionOffer} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_offers_create(packageName: string, productId: string, basePlanId: string, offerId: string | null | undefined, regionsVersion_version: string | null | undefined, requestBody: SubscriptionOffer): Observable<SubscriptionOffer> {
			return this.http.post<SubscriptionOffer>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + '/offers&offerId=' + (offerId == null ? '' : encodeURIComponent(offerId)) + '&regionsVersion_version=' + (regionsVersion_version == null ? '' : encodeURIComponent(regionsVersion_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
		 * Delete androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}
		 * @param {string} packageName Required. The parent app (package name) of the offer to delete.
		 * @param {string} productId Required. The parent subscription (ID) of the offer to delete.
		 * @param {string} basePlanId Required. The parent base plan (ID) of the offer to delete.
		 * @param {string} offerId Required. The unique offer ID of the offer to delete.
		 * @return {void} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_offers_delete(packageName: string, productId: string, basePlanId: string, offerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + '/offers/' + (offerId == null ? '' : encodeURIComponent(offerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reads a single offer
		 * Get androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}
		 * @param {string} packageName Required. The parent app (package name) of the offer to get.
		 * @param {string} productId Required. The parent subscription (ID) of the offer to get.
		 * @param {string} basePlanId Required. The parent base plan (ID) of the offer to get.
		 * @param {string} offerId Required. The unique offer ID of the offer to get.
		 * @return {SubscriptionOffer} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_offers_get(packageName: string, productId: string, basePlanId: string, offerId: string): Observable<SubscriptionOffer> {
			return this.http.get<SubscriptionOffer>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + '/offers/' + (offerId == null ? '' : encodeURIComponent(offerId)), {});
		}

		/**
		 * Updates an existing subscription offer.
		 * Patch androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}
		 * @param {string} packageName Required. Immutable. The package name of the app the parent subscription belongs to.
		 * @param {string} productId Required. Immutable. The ID of the parent subscription this offer belongs to.
		 * @param {string} basePlanId Required. Immutable. The ID of the base plan to which this offer is an extension.
		 * @param {string} offerId Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.
		 * @param {boolean} allowMissing Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn't exist, an offer will be created. If a new offer is created, update_mask is ignored.
		 * @param {ActivateBasePlanRequestLatencyTolerance} latencyTolerance Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
		 * @param {string} regionsVersion_version Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02.
		 * @param {string} updateMask Required. The list of fields to be updated.
		 * @return {SubscriptionOffer} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_offers_patch(packageName: string, productId: string, basePlanId: string, offerId: string, allowMissing: boolean | null | undefined, latencyTolerance: ActivateBasePlanRequestLatencyTolerance | null | undefined, regionsVersion_version: string | null | undefined, updateMask: string | null | undefined, requestBody: SubscriptionOffer): Observable<SubscriptionOffer> {
			return this.http.patch<SubscriptionOffer>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + '/offers/' + (offerId == null ? '' : encodeURIComponent(offerId)) + '&allowMissing=' + allowMissing + '&latencyTolerance=' + latencyTolerance + '&regionsVersion_version=' + (regionsVersion_version == null ? '' : encodeURIComponent(regionsVersion_version)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate
		 * @param {string} packageName Required. The parent app (package name) of the offer to activate.
		 * @param {string} productId Required. The parent subscription (ID) of the offer to activate.
		 * @param {string} basePlanId Required. The parent base plan (ID) of the offer to activate.
		 * @param {string} offerId Required. The unique offer ID of the offer to activate.
		 * @return {SubscriptionOffer} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_offers_activate(packageName: string, productId: string, basePlanId: string, offerId: string, requestBody: ActivateSubscriptionOfferRequest): Observable<SubscriptionOffer> {
			return this.http.post<SubscriptionOffer>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + '/offers/' + (offerId == null ? '' : encodeURIComponent(offerId)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate
		 * @param {string} packageName Required. The parent app (package name) of the offer to deactivate.
		 * @param {string} productId Required. The parent subscription (ID) of the offer to deactivate.
		 * @param {string} basePlanId Required. The parent base plan (ID) of the offer to deactivate.
		 * @param {string} offerId Required. The unique offer ID of the offer to deactivate.
		 * @return {SubscriptionOffer} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_offers_deactivate(packageName: string, productId: string, basePlanId: string, offerId: string, requestBody: DeactivateSubscriptionOfferRequest): Observable<SubscriptionOffer> {
			return this.http.post<SubscriptionOffer>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + '/offers/' + (offerId == null ? '' : encodeURIComponent(offerId)) + ':deactivate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reads one or more subscription offers.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchGet
		 * @param {string} packageName Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the requests.
		 * @param {string} productId Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
		 * @param {string} basePlanId Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read offers from multiple base plans.
		 * @return {BatchGetSubscriptionOffersResponse} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_offers_batchGet(packageName: string, productId: string, basePlanId: string, requestBody: BatchGetSubscriptionOffersRequest): Observable<BatchGetSubscriptionOffersResponse> {
			return this.http.post<BatchGetSubscriptionOffersResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + '/offers:batchGet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a batch of subscription offers. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdate
		 * @param {string} packageName Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources.
		 * @param {string} productId Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
		 * @param {string} basePlanId Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans.
		 * @return {BatchUpdateSubscriptionOffersResponse} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_offers_batchUpdate(packageName: string, productId: string, basePlanId: string, requestBody: BatchUpdateSubscriptionOffersRequest): Observable<BatchUpdateSubscriptionOffersResponse> {
			return this.http.post<BatchUpdateSubscriptionOffersResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + '/offers:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a batch of subscription offer states. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdateStates
		 * @param {string} packageName Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources.
		 * @param {string} productId Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
		 * @param {string} basePlanId Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans.
		 * @return {BatchUpdateSubscriptionOfferStatesResponse} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_offers_batchUpdateStates(packageName: string, productId: string, basePlanId: string, requestBody: BatchUpdateSubscriptionOfferStatesRequest): Observable<BatchUpdateSubscriptionOfferStatesResponse> {
			return this.http.post<BatchUpdateSubscriptionOfferStatesResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + '/offers:batchUpdateStates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates a base plan. Once activated, base plans will be available to new subscribers.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate
		 * @param {string} packageName Required. The parent app (package name) of the base plan to activate.
		 * @param {string} productId Required. The parent subscription (ID) of the base plan to activate.
		 * @param {string} basePlanId Required. The unique base plan ID of the base plan to activate.
		 * @return {Subscription} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_activate(packageName: string, productId: string, basePlanId: string, requestBody: ActivateBasePlanRequest): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate
		 * @param {string} packageName Required. The parent app (package name) of the base plan to deactivate.
		 * @param {string} productId Required. The parent subscription (ID) of the base plan to deactivate.
		 * @param {string} basePlanId Required. The unique base plan ID of the base plan to deactivate.
		 * @return {Subscription} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_deactivate(packageName: string, productId: string, basePlanId: string, requestBody: DeactivateBasePlanRequest): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + ':deactivate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices
		 * @param {string} packageName Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource.
		 * @param {string} productId Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource.
		 * @param {string} basePlanId Required. The unique base plan ID of the base plan to update prices on.
		 * @return {MigrateBasePlanPricesResponse} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_migratePrices(packageName: string, productId: string, basePlanId: string, requestBody: MigrateBasePlanPricesRequest): Observable<MigrateBasePlanPricesResponse> {
			return this.http.post<MigrateBasePlanPricesResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans/' + (basePlanId == null ? '' : encodeURIComponent(basePlanId)) + ':migratePrices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch variant of the MigrateBasePlanPrices endpoint. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchMigratePrices
		 * @param {string} packageName Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the Subscription resources.
		 * @param {string} productId Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set.
		 * @return {BatchMigrateBasePlanPricesResponse} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_batchMigratePrices(packageName: string, productId: string, requestBody: BatchMigrateBasePlanPricesRequest): Observable<BatchMigrateBasePlanPricesResponse> {
			return this.http.post<BatchMigrateBasePlanPricesResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans:batchMigratePrices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates or deactivates base plans across one or multiple subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchUpdateStates
		 * @param {string} packageName Required. The parent app (package name) of the updated base plans.
		 * @param {string} productId Required. The product ID of the parent subscription, if all updated base plans belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set.
		 * @return {BatchUpdateBasePlanStatesResponse} Successful response
		 */
		Androidpublisher_monetization_subscriptions_basePlans_batchUpdateStates(packageName: string, productId: string, requestBody: BatchUpdateBasePlanStatesRequest): Observable<BatchUpdateBasePlanStatesResponse> {
			return this.http.post<BatchUpdateBasePlanStatesResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + '/basePlans:batchUpdateStates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive
		 * @param {string} packageName Required. The parent app (package name) of the app of the subscription to delete.
		 * @param {string} productId Required. The unique product ID of the subscription to delete.
		 * @return {Subscription} Successful response
		 */
		Androidpublisher_monetization_subscriptions_archive(packageName: string, productId: string, requestBody: ArchiveSubscriptionRequest): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (productId == null ? '' : encodeURIComponent(productId)) + ':archive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reads one or more subscriptions.
		 * Get androidpublisher/v3/applications/{packageName}/subscriptions:batchGet
		 * @param {string} packageName Required. The parent app (package name) for which the subscriptions should be retrieved. Must be equal to the package_name field on all the requests.
		 * @param {Array<string>} productIds Required. A list of up to 100 subscription product IDs to retrieve. All the IDs must be different.
		 * @return {BatchGetSubscriptionsResponse} Successful response
		 */
		Androidpublisher_monetization_subscriptions_batchGet(packageName: string, productIds: Array<string> | null | undefined): Observable<BatchGetSubscriptionsResponse> {
			return this.http.get<BatchGetSubscriptionsResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions:batchGet&' + productIds?.map(z => `productIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates a batch of subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
		 * Post androidpublisher/v3/applications/{packageName}/subscriptions:batchUpdate
		 * @param {string} packageName Required. The parent app (package name) for which the subscriptions should be updated. Must be equal to the package_name field on all the Subscription resources.
		 * @return {BatchUpdateSubscriptionsResponse} Successful response
		 */
		Androidpublisher_monetization_subscriptions_batchUpdate(packageName: string, requestBody: BatchUpdateSubscriptionsRequest): Observable<BatchUpdateSubscriptionsResponse> {
			return this.http.post<BatchUpdateSubscriptionsResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of previously created system APK variants.
		 * Get androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants
		 * @param {string} packageName Package name of the app.
		 * @param {string} versionCode The version code of the App Bundle.
		 * @return {SystemApksListResponse} Successful response
		 */
		Androidpublisher_systemapks_variants_list(packageName: string, versionCode: string): Observable<SystemApksListResponse> {
			return this.http.get<SystemApksListResponse>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/systemApks/' + (versionCode == null ? '' : encodeURIComponent(versionCode)) + '/variants', {});
		}

		/**
		 * Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
		 * Post androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants
		 * @param {string} packageName Package name of the app.
		 * @param {string} versionCode The version code of the App Bundle.
		 * @return {Variant} Successful response
		 */
		Androidpublisher_systemapks_variants_create(packageName: string, versionCode: string, requestBody: Variant): Observable<Variant> {
			return this.http.post<Variant>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/systemApks/' + (versionCode == null ? '' : encodeURIComponent(versionCode)) + '/variants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a previously created system APK variant.
		 * Get androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}
		 * @param {string} packageName Package name of the app.
		 * @param {string} versionCode The version code of the App Bundle.
		 * @param {number} variantId The ID of a previously created system APK variant.
		 * @return {Variant} Successful response
		 */
		Androidpublisher_systemapks_variants_get(packageName: string, versionCode: string, variantId: number): Observable<Variant> {
			return this.http.get<Variant>(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/systemApks/' + (versionCode == null ? '' : encodeURIComponent(versionCode)) + '/variants/' + variantId, {});
		}

		/**
		 * Downloads a previously created system APK which is suitable for inclusion in a system image.
		 * Get androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download
		 * @param {string} packageName Package name of the app.
		 * @param {string} versionCode The version code of the App Bundle.
		 * @param {number} variantId The ID of a previously created system APK variant.
		 * @return {void} Successful response
		 */
		Androidpublisher_systemapks_variants_download(packageName: string, versionCode: string, variantId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'androidpublisher/v3/applications/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/systemApks/' + (versionCode == null ? '' : encodeURIComponent(versionCode)) + '/variants/' + variantId + ':download', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes all access for the user to the given developer account.
		 * Delete androidpublisher/v3/{name}
		 * @param {string} name Required. The name of the user to delete. Format: developers/{developer}/users/{email}
		 * @return {void} Successful response
		 */
		Androidpublisher_users_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'androidpublisher/v3/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an existing external transaction.
		 * Get androidpublisher/v3/{name}
		 * @param {string} name Required. The name of the external transaction to retrieve. Format: applications/{package_name}/externalTransactions/{external_transaction}
		 * @return {ExternalTransaction} Successful response
		 */
		Androidpublisher_externaltransactions_getexternaltransaction(name: string): Observable<ExternalTransaction> {
			return this.http.get<ExternalTransaction>(this.baseUri + 'androidpublisher/v3/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates access for the user to the developer account.
		 * Patch androidpublisher/v3/{name}
		 * @param {string} name Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".
		 * @param {string} updateMask Optional. The list of fields to be updated.
		 * @return {User} Successful response
		 */
		Androidpublisher_users_patch(name: string, updateMask: string | null | undefined, requestBody: User): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'androidpublisher/v3/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refunds or partially refunds an existing external transaction.
		 * Post androidpublisher/v3/{name}:refund
		 * @param {string} name Required. The name of the external transaction that will be refunded. Format: applications/{package_name}/externalTransactions/{external_transaction}
		 * @return {ExternalTransaction} Successful response
		 */
		Androidpublisher_externaltransactions_refundexternaltransaction(name: string, requestBody: RefundExternalTransactionRequest): Observable<ExternalTransaction> {
			return this.http.post<ExternalTransaction>(this.baseUri + 'androidpublisher/v3/' + (name == null ? '' : encodeURIComponent(name)) + ':refund', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new external transaction.
		 * Post androidpublisher/v3/{parent}/externalTransactions
		 * @param {string} parent Required. The parent resource where this external transaction will be created. Format: applications/{package_name}
		 * @param {string} externalTransactionId Required. The id to use for the external transaction. Must be unique across all other transactions for the app. This value should be 1-63 characters and valid characters are /a-z0-9_-/. Do not use this field to store any Personally Identifiable Information (PII) such as emails. Attempting to store PII in this field may result in requests being blocked.
		 * @return {ExternalTransaction} Successful response
		 */
		Androidpublisher_externaltransactions_createexternaltransaction(parent: string, externalTransactionId: string | null | undefined, requestBody: ExternalTransaction): Observable<ExternalTransaction> {
			return this.http.post<ExternalTransaction>(this.baseUri + 'androidpublisher/v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/externalTransactions&externalTransactionId=' + (externalTransactionId == null ? '' : encodeURIComponent(externalTransactionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grant access for a user to the given package.
		 * Post androidpublisher/v3/{parent}/grants
		 * @param {string} parent Required. The user which needs permission. Format: developers/{developer}/users/{user}
		 * @return {Grant} Successful response
		 */
		Androidpublisher_grants_create(parent: string, requestBody: Grant): Observable<Grant> {
			return this.http.post<Grant>(this.baseUri + 'androidpublisher/v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/grants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all users with access to a developer account.
		 * Get androidpublisher/v3/{parent}/users
		 * @param {string} parent Required. The developer account to fetch users from. Format: developers/{developer}
		 * @param {number} pageSize The maximum number of results to return. This must be set to -1 to disable pagination.
		 * @param {string} pageToken A token received from a previous call to this method, in order to retrieve further results.
		 * @return {ListUsersResponse} Successful response
		 */
		Androidpublisher_users_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'androidpublisher/v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/users&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Grant access for a user to the given developer account.
		 * Post androidpublisher/v3/{parent}/users
		 * @param {string} parent Required. The developer account to add the user to. Format: developers/{developer}
		 * @return {User} Successful response
		 */
		Androidpublisher_users_create(parent: string, requestBody: User): Observable<User> {
			return this.http.post<User>(this.baseUri + 'androidpublisher/v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Androidpublisher_edits_expansionfiles_getExpansionFileType { expansionFileTypeUnspecified = 'expansionFileTypeUnspecified', main = 'main', patch = 'patch' }

	export enum Androidpublisher_edits_images_deleteallImageType { appImageTypeUnspecified = 'appImageTypeUnspecified', phoneScreenshots = 'phoneScreenshots', sevenInchScreenshots = 'sevenInchScreenshots', tenInchScreenshots = 'tenInchScreenshots', tvScreenshots = 'tvScreenshots', wearScreenshots = 'wearScreenshots', icon = 'icon', featureGraphic = 'featureGraphic', tvBanner = 'tvBanner' }

}

