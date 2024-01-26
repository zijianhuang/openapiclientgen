import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Encapsulates impression event details. */
	export interface GoogleMapsPlayablelocationsV3Impression {

		/** An arbitrary, developer-defined type identifier for each type of game object used in your game. Since players interact with differ types of game objects in different ways, this field allows you to segregate impression data by type for analysis. You should assign a unique `game_object_type` ID to represent a distinct type of game object in your game. For example, 1=monster location, 2=powerup location. */
		gameObjectType?: number | null;

		/** Required. The type of impression event. */
		impressionType?: GoogleMapsPlayablelocationsV3ImpressionImpressionType | null;

		/** Required. The name of the playable location. */
		locationName?: string | null;
	}

	/** Encapsulates impression event details. */
	export interface GoogleMapsPlayablelocationsV3ImpressionFormProperties {

		/** An arbitrary, developer-defined type identifier for each type of game object used in your game. Since players interact with differ types of game objects in different ways, this field allows you to segregate impression data by type for analysis. You should assign a unique `game_object_type` ID to represent a distinct type of game object in your game. For example, 1=monster location, 2=powerup location. */
		gameObjectType: FormControl<number | null | undefined>,

		/** Required. The type of impression event. */
		impressionType: FormControl<GoogleMapsPlayablelocationsV3ImpressionImpressionType | null | undefined>,

		/** Required. The name of the playable location. */
		locationName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlayablelocationsV3ImpressionFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3ImpressionFormProperties>({
			gameObjectType: new FormControl<number | null | undefined>(undefined),
			impressionType: new FormControl<GoogleMapsPlayablelocationsV3ImpressionImpressionType | null | undefined>(undefined),
			locationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleMapsPlayablelocationsV3ImpressionImpressionType { IMPRESSION_TYPE_UNSPECIFIED = 0, PRESENTED = 1, INTERACTED = 2 }


	/** A request for logging impressions. */
	export interface GoogleMapsPlayablelocationsV3LogImpressionsRequest {

		/** Client information. */
		clientInfo?: GoogleMapsUnityClientInfo;

		/** Required. Impression event details. The maximum number of impression reports that you can log at once is 50. */
		impressions?: Array<GoogleMapsPlayablelocationsV3Impression>;

		/** Required. A string that uniquely identifies the log impressions request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in case of failure. In this case, the request must be identical to the one that failed. */
		requestId?: string | null;
	}

	/** A request for logging impressions. */
	export interface GoogleMapsPlayablelocationsV3LogImpressionsRequestFormProperties {

		/** Required. A string that uniquely identifies the log impressions request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in case of failure. In this case, the request must be identical to the one that failed. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlayablelocationsV3LogImpressionsRequestFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3LogImpressionsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Client information. */
	export interface GoogleMapsUnityClientInfo {

		/** API client name and version. For example, the SDK calling the API. The exact format is up to the client. */
		apiClient?: string | null;

		/** Application ID, such as the package name on Android and the bundle identifier on iOS platforms. */
		applicationId?: string | null;

		/** Application version number, such as "1.2.3". The exact format is application-dependent. */
		applicationVersion?: string | null;

		/** Device model as reported by the device. The exact format is platform-dependent. */
		deviceModel?: string | null;

		/** Language code (in BCP-47 format) indicating the UI language of the client. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent. */
		operatingSystem?: string | null;

		/** Build number/version of the operating system. e.g., the contents of android.os.Build.ID in Android, or the contents of sysctl "kern.osversion" in iOS. */
		operatingSystemBuild?: string | null;

		/** Platform where the application is running. */
		platform?: GoogleMapsUnityClientInfoPlatform | null;
	}

	/** Client information. */
	export interface GoogleMapsUnityClientInfoFormProperties {

		/** API client name and version. For example, the SDK calling the API. The exact format is up to the client. */
		apiClient: FormControl<string | null | undefined>,

		/** Application ID, such as the package name on Android and the bundle identifier on iOS platforms. */
		applicationId: FormControl<string | null | undefined>,

		/** Application version number, such as "1.2.3". The exact format is application-dependent. */
		applicationVersion: FormControl<string | null | undefined>,

		/** Device model as reported by the device. The exact format is platform-dependent. */
		deviceModel: FormControl<string | null | undefined>,

		/** Language code (in BCP-47 format) indicating the UI language of the client. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent. */
		operatingSystem: FormControl<string | null | undefined>,

		/** Build number/version of the operating system. e.g., the contents of android.os.Build.ID in Android, or the contents of sysctl "kern.osversion" in iOS. */
		operatingSystemBuild: FormControl<string | null | undefined>,

		/** Platform where the application is running. */
		platform: FormControl<GoogleMapsUnityClientInfoPlatform | null | undefined>,
	}
	export function CreateGoogleMapsUnityClientInfoFormGroup() {
		return new FormGroup<GoogleMapsUnityClientInfoFormProperties>({
			apiClient: new FormControl<string | null | undefined>(undefined),
			applicationId: new FormControl<string | null | undefined>(undefined),
			applicationVersion: new FormControl<string | null | undefined>(undefined),
			deviceModel: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			operatingSystem: new FormControl<string | null | undefined>(undefined),
			operatingSystemBuild: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<GoogleMapsUnityClientInfoPlatform | null | undefined>(undefined),
		});

	}

	export enum GoogleMapsUnityClientInfoPlatform { PLATFORM_UNSPECIFIED = 0, EDITOR = 1, MAC_OS = 2, WINDOWS = 3, LINUX = 4, ANDROID = 5, IOS = 6, WEB_GL = 7 }


	/** A response for the LogImpressions method. This method returns no data upon success. */
	export interface GoogleMapsPlayablelocationsV3LogImpressionsResponse {
	}

	/** A response for the LogImpressions method. This method returns no data upon success. */
	export interface GoogleMapsPlayablelocationsV3LogImpressionsResponseFormProperties {
	}
	export function CreateGoogleMapsPlayablelocationsV3LogImpressionsResponseFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3LogImpressionsResponseFormProperties>({
		});

	}


	/** A request for logging your player's bad location reports. */
	export interface GoogleMapsPlayablelocationsV3LogPlayerReportsRequest {

		/** Client information. */
		clientInfo?: GoogleMapsUnityClientInfo;

		/** Required. Player reports. The maximum number of player reports that you can log at once is 50. */
		playerReports?: Array<GoogleMapsPlayablelocationsV3PlayerReport>;

		/** Required. A string that uniquely identifies the log player reports request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in the case of a failure. In that case, the request must be identical to the one that failed. */
		requestId?: string | null;
	}

	/** A request for logging your player's bad location reports. */
	export interface GoogleMapsPlayablelocationsV3LogPlayerReportsRequestFormProperties {

		/** Required. A string that uniquely identifies the log player reports request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in the case of a failure. In that case, the request must be identical to the one that failed. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlayablelocationsV3LogPlayerReportsRequestFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3LogPlayerReportsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A report submitted by a player about a playable location that is considered inappropriate for use in the game. */
	export interface GoogleMapsPlayablelocationsV3PlayerReport {

		/** Language code (in BCP-47 format) indicating the language of the freeform description provided in `reason_details`. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Required. The name of the playable location. */
		locationName?: string | null;

		/** Required. A free-form description detailing why the playable location is considered bad. */
		reasonDetails?: string | null;

		/** Required. One or more reasons why this playable location is considered bad. */
		reasons?: Array<string>;
	}

	/** A report submitted by a player about a playable location that is considered inappropriate for use in the game. */
	export interface GoogleMapsPlayablelocationsV3PlayerReportFormProperties {

		/** Language code (in BCP-47 format) indicating the language of the freeform description provided in `reason_details`. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Required. The name of the playable location. */
		locationName: FormControl<string | null | undefined>,

		/** Required. A free-form description detailing why the playable location is considered bad. */
		reasonDetails: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlayablelocationsV3PlayerReportFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3PlayerReportFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			locationName: new FormControl<string | null | undefined>(undefined),
			reasonDetails: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response for the LogPlayerReports method. This method returns no data upon success. */
	export interface GoogleMapsPlayablelocationsV3LogPlayerReportsResponse {
	}

	/** A response for the LogPlayerReports method. This method returns no data upon success. */
	export interface GoogleMapsPlayablelocationsV3LogPlayerReportsResponseFormProperties {
	}
	export function CreateGoogleMapsPlayablelocationsV3LogPlayerReportsResponseFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3LogPlayerReportsResponseFormProperties>({
		});

	}


	/** Specifies the area to search for playable locations. */
	export interface GoogleMapsPlayablelocationsV3SampleAreaFilter {

		/** Required. The S2 cell ID of the area you want. This must be between cell level 11 and 14 (inclusive). S2 cells are 64-bit integers that identify areas on the Earth. They are hierarchical, and can therefore be used for spatial indexing. The S2 geometry library is available in a number of languages: * [C++](https://github.com/google/s2geometry) * [Java](https://github.com/google/s2-geometry-library-java) * [Go](https://github.com/golang/geo) * [Python](https://github.com/google/s2geometry/tree/master/src/python) */
		s2CellId?: string | null;
	}

	/** Specifies the area to search for playable locations. */
	export interface GoogleMapsPlayablelocationsV3SampleAreaFilterFormProperties {

		/** Required. The S2 cell ID of the area you want. This must be between cell level 11 and 14 (inclusive). S2 cells are 64-bit integers that identify areas on the Earth. They are hierarchical, and can therefore be used for spatial indexing. The S2 geometry library is available in a number of languages: * [C++](https://github.com/google/s2geometry) * [Java](https://github.com/google/s2-geometry-library-java) * [Go](https://github.com/golang/geo) * [Python](https://github.com/google/s2geometry/tree/master/src/python) */
		s2CellId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlayablelocationsV3SampleAreaFilterFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3SampleAreaFilterFormProperties>({
			s2CellId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a filter criterion for searching for a set of playable locations. */
	export interface GoogleMapsPlayablelocationsV3SampleCriterion {

		/** Specifies which `PlayableLocation` fields are returned. `name` (which is used for logging impressions), `center_point` and `place_id` (or `plus_code`) are always returned. The following fields are omitted unless you specify them here: * snapped_point * types Note: The more fields you include, the more expensive in terms of data and associated latency your query will be. */
		fieldsToReturn?: string | null;

		/** Specifies the filters to use when searching for playable locations. */
		filter?: GoogleMapsPlayablelocationsV3SampleFilter;

		/** Required. An arbitrary, developer-defined identifier of the type of game object that the playable location is used for. This field allows you to specify criteria per game object type when searching for playable locations. You should assign a unique `game_object_type` ID across all `request_criteria` to represent a distinct type of game object. For example, 1=monster location, 2=powerup location. The response contains a map. */
		gameObjectType?: number | null;
	}

	/** Encapsulates a filter criterion for searching for a set of playable locations. */
	export interface GoogleMapsPlayablelocationsV3SampleCriterionFormProperties {

		/** Specifies which `PlayableLocation` fields are returned. `name` (which is used for logging impressions), `center_point` and `place_id` (or `plus_code`) are always returned. The following fields are omitted unless you specify them here: * snapped_point * types Note: The more fields you include, the more expensive in terms of data and associated latency your query will be. */
		fieldsToReturn: FormControl<string | null | undefined>,

		/** Required. An arbitrary, developer-defined identifier of the type of game object that the playable location is used for. This field allows you to specify criteria per game object type when searching for playable locations. You should assign a unique `game_object_type` ID across all `request_criteria` to represent a distinct type of game object. For example, 1=monster location, 2=powerup location. The response contains a map. */
		gameObjectType: FormControl<number | null | undefined>,
	}
	export function CreateGoogleMapsPlayablelocationsV3SampleCriterionFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3SampleCriterionFormProperties>({
			fieldsToReturn: new FormControl<string | null | undefined>(undefined),
			gameObjectType: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the filters to use when searching for playable locations. */
	export interface GoogleMapsPlayablelocationsV3SampleFilter {

		/** Restricts the set of playable locations to just the [types](/maps/documentation/gaming/tt/types) that you want. */
		includedTypes?: Array<string>;

		/** Specifies the maximum number of playable locations to return. This value must not be greater than 1000. The default value is 100. Only the top-ranking playable locations are returned. */
		maxLocationCount?: number | null;

		/** A set of options that specifies the separation between playable locations. */
		spacing?: GoogleMapsPlayablelocationsV3SampleSpacingOptions;
	}

	/** Specifies the filters to use when searching for playable locations. */
	export interface GoogleMapsPlayablelocationsV3SampleFilterFormProperties {

		/** Specifies the maximum number of playable locations to return. This value must not be greater than 1000. The default value is 100. Only the top-ranking playable locations are returned. */
		maxLocationCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleMapsPlayablelocationsV3SampleFilterFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3SampleFilterFormProperties>({
			maxLocationCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A set of options that specifies the separation between playable locations. */
	export interface GoogleMapsPlayablelocationsV3SampleSpacingOptions {

		/** Required. The minimum spacing between any two playable locations, measured in meters. The minimum value is 30. The maximum value is 1000. Inputs will be rounded up to the next 10 meter interval. The default value is 200m. Set this field to remove tight clusters of playable locations. Note: The spacing is a greedy algorithm. It optimizes for selecting the highest ranking locations first, not to maximize the number of locations selected. Consider the following scenario: * Rank: A: 2, B: 1, C: 3. * Distance: A--200m--B--200m--C If spacing=250, it will pick the highest ranked location [B], not [A, C]. Note: Spacing works within the game object type itself, as well as the previous ones. Suppose three game object types, each with the following spacing: * X: 400m, Y: undefined, Z: 200m. 1. Add locations for X, within 400m of each other. 2. Add locations for Y, without any spacing. 3. Finally, add locations for Z within 200m of each other as well X and Y. The distance diagram between those locations end up as: * From->To. * X->X: 400m * Y->X, Y->Y: unspecified. * Z->X, Z->Y, Z->Z: 200m. */
		minSpacingMeters?: number | null;

		/** Specifies whether the minimum spacing constraint applies to the center-point or to the snapped point of playable locations. The default value is `CENTER_POINT`. If a snapped point is not available for a playable location, its center-point is used instead. Set this to the point type used in your game. */
		pointType?: GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointType | null;
	}

	/** A set of options that specifies the separation between playable locations. */
	export interface GoogleMapsPlayablelocationsV3SampleSpacingOptionsFormProperties {

		/** Required. The minimum spacing between any two playable locations, measured in meters. The minimum value is 30. The maximum value is 1000. Inputs will be rounded up to the next 10 meter interval. The default value is 200m. Set this field to remove tight clusters of playable locations. Note: The spacing is a greedy algorithm. It optimizes for selecting the highest ranking locations first, not to maximize the number of locations selected. Consider the following scenario: * Rank: A: 2, B: 1, C: 3. * Distance: A--200m--B--200m--C If spacing=250, it will pick the highest ranked location [B], not [A, C]. Note: Spacing works within the game object type itself, as well as the previous ones. Suppose three game object types, each with the following spacing: * X: 400m, Y: undefined, Z: 200m. 1. Add locations for X, within 400m of each other. 2. Add locations for Y, without any spacing. 3. Finally, add locations for Z within 200m of each other as well X and Y. The distance diagram between those locations end up as: * From->To. * X->X: 400m * Y->X, Y->Y: unspecified. * Z->X, Z->Y, Z->Z: 200m. */
		minSpacingMeters: FormControl<number | null | undefined>,

		/** Specifies whether the minimum spacing constraint applies to the center-point or to the snapped point of playable locations. The default value is `CENTER_POINT`. If a snapped point is not available for a playable location, its center-point is used instead. Set this to the point type used in your game. */
		pointType: FormControl<GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointType | null | undefined>,
	}
	export function CreateGoogleMapsPlayablelocationsV3SampleSpacingOptionsFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3SampleSpacingOptionsFormProperties>({
			minSpacingMeters: new FormControl<number | null | undefined>(undefined),
			pointType: new FormControl<GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointType | null | undefined>(undefined),
		});

	}

	export enum GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointType { POINT_TYPE_UNSPECIFIED = 0, CENTER_POINT = 1, SNAPPED_POINT = 2 }


	/** A geographical point suitable for placing game objects in location-based games. */
	export interface GoogleMapsPlayablelocationsV3SamplePlayableLocation {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		centerPoint?: GoogleTypeLatLng;

		/** Required. The name of this playable location. */
		name?: string | null;

		/** A [place ID] (https://developers.google.com/places/place-id) */
		placeId?: string | null;

		/** A [plus code] (http://openlocationcode.com) */
		plusCode?: string | null;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		snappedPoint?: GoogleTypeLatLng;

		/** A collection of [Playable Location Types](/maps/documentation/gaming/tt/types) for this playable location. The first type in the collection is the primary type. Type information might not be available for all playable locations. */
		types?: Array<string>;
	}

	/** A geographical point suitable for placing game objects in location-based games. */
	export interface GoogleMapsPlayablelocationsV3SamplePlayableLocationFormProperties {

		/** Required. The name of this playable location. */
		name: FormControl<string | null | undefined>,

		/** A [place ID] (https://developers.google.com/places/place-id) */
		placeId: FormControl<string | null | undefined>,

		/** A [plus code] (http://openlocationcode.com) */
		plusCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlayablelocationsV3SamplePlayableLocationFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3SamplePlayableLocationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
			plusCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface GoogleTypeLatLng {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude?: number | null;

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude?: number | null;
	}

	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface GoogleTypeLatLngFormProperties {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude: FormControl<number | null | undefined>,

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeLatLngFormGroup() {
		return new FormGroup<GoogleTypeLatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of PlayableLocation objects that satisfies a single Criterion. */
	export interface GoogleMapsPlayablelocationsV3SamplePlayableLocationList {

		/** A list of playable locations for this game object type. */
		locations?: Array<GoogleMapsPlayablelocationsV3SamplePlayableLocation>;
	}

	/** A list of PlayableLocation objects that satisfies a single Criterion. */
	export interface GoogleMapsPlayablelocationsV3SamplePlayableLocationListFormProperties {
	}
	export function CreateGoogleMapsPlayablelocationsV3SamplePlayableLocationListFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3SamplePlayableLocationListFormProperties>({
		});

	}


	/**  Life of a query: - When a game starts in a new location, your game server issues a SamplePlayableLocations request. The request specifies the S2 cell, and contains one or more "criteria" for filtering: - Criterion 0: i locations for long-lived bases, or level 0 monsters, or... - Criterion 1: j locations for short-lived bases, or level 1 monsters, ... - Criterion 2: k locations for random objects. - etc (up to 5 criterion may be specified). `PlayableLocationList` will then contain mutually exclusive lists of `PlayableLocation` objects that satisfy each of the criteria. Think of it as a collection of real-world locations that you can then associate with your game state. Note: These points are impermanent in nature. E.g, parks can close, and places can be removed. The response specifies how long you can expect the playable locations to last. Once they expire, you should query the `samplePlayableLocations` API again to get a fresh view of the real world. */
	export interface GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest {

		/** Specifies the area to search for playable locations. */
		areaFilter?: GoogleMapsPlayablelocationsV3SampleAreaFilter;

		/** Required. Specifies one or more (up to 5) criteria for filtering the returned playable locations. */
		criteria?: Array<GoogleMapsPlayablelocationsV3SampleCriterion>;
	}

	/**  Life of a query: - When a game starts in a new location, your game server issues a SamplePlayableLocations request. The request specifies the S2 cell, and contains one or more "criteria" for filtering: - Criterion 0: i locations for long-lived bases, or level 0 monsters, or... - Criterion 1: j locations for short-lived bases, or level 1 monsters, ... - Criterion 2: k locations for random objects. - etc (up to 5 criterion may be specified). `PlayableLocationList` will then contain mutually exclusive lists of `PlayableLocation` objects that satisfy each of the criteria. Think of it as a collection of real-world locations that you can then associate with your game state. Note: These points are impermanent in nature. E.g, parks can close, and places can be removed. The response specifies how long you can expect the playable locations to last. Once they expire, you should query the `samplePlayableLocations` API again to get a fresh view of the real world. */
	export interface GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequestFormProperties {
	}
	export function CreateGoogleMapsPlayablelocationsV3SamplePlayableLocationsRequestFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequestFormProperties>({
		});

	}


	/**  Response for the SamplePlayableLocations method. */
	export interface GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse {

		/** Each PlayableLocation object corresponds to a game_object_type specified in the request. */
		locationsPerGameObjectType?: {[id: string]: GoogleMapsPlayablelocationsV3SamplePlayableLocationList };

		/** Required. Specifies the "time-to-live" for the set of playable locations. You can use this value to determine how long to cache the set of playable locations. After this length of time, your back-end game server should issue a new SamplePlayableLocations request to get a fresh set of playable locations (because for example, they might have been removed, a park might have closed for the day, a business might have closed permanently). */
		ttl?: string | null;
	}

	/**  Response for the SamplePlayableLocations method. */
	export interface GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponseFormProperties {

		/** Each PlayableLocation object corresponds to a game_object_type specified in the request. */
		locationsPerGameObjectType: FormControl<{[id: string]: GoogleMapsPlayablelocationsV3SamplePlayableLocationList } | null | undefined>,

		/** Required. Specifies the "time-to-live" for the set of playable locations. You can use this value to determine how long to cache the set of playable locations. After this length of time, your back-end game server should issue a new SamplePlayableLocations request to get a fresh set of playable locations (because for example, they might have been removed, a park might have closed for the day, a business might have closed permanently). */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlayablelocationsV3SamplePlayableLocationsResponseFormGroup() {
		return new FormGroup<GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponseFormProperties>({
			locationsPerGameObjectType: new FormControl<{[id: string]: GoogleMapsPlayablelocationsV3SamplePlayableLocationList } | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
		 * Post v3:logImpressions
		 * @return {GoogleMapsPlayablelocationsV3LogImpressionsResponse} Successful response
		 */
		Playablelocations_logImpressions(requestBody: GoogleMapsPlayablelocationsV3LogImpressionsRequest): Observable<GoogleMapsPlayablelocationsV3LogImpressionsResponse> {
			return this.http.post<GoogleMapsPlayablelocationsV3LogImpressionsResponse>(this.baseUri + 'v3:logImpressions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
		 * Post v3:logPlayerReports
		 * @return {GoogleMapsPlayablelocationsV3LogPlayerReportsResponse} Successful response
		 */
		Playablelocations_logPlayerReports(requestBody: GoogleMapsPlayablelocationsV3LogPlayerReportsRequest): Observable<GoogleMapsPlayablelocationsV3LogPlayerReportsResponse> {
			return this.http.post<GoogleMapsPlayablelocationsV3LogPlayerReportsResponse>(this.baseUri + 'v3:logPlayerReports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.
		 * Post v3:samplePlayableLocations
		 * @return {GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse} Successful response
		 */
		Playablelocations_samplePlayableLocations(requestBody: GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest): Observable<GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse> {
			return this.http.post<GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse>(this.baseUri + 'v3:samplePlayableLocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

