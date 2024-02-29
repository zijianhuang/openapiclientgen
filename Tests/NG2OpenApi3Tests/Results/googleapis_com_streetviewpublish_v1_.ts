import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request to delete multiple Photos. */
	export interface BatchDeletePhotosRequest {

		/** Required. IDs of the Photos. HTTP GET requests require the following syntax for the URL query parameter: `photoIds=&photoIds=&...`. */
		photoIds?: Array<string>;
	}

	/** Request to delete multiple Photos. */
	export interface BatchDeletePhotosRequestFormProperties {
	}
	export function CreateBatchDeletePhotosRequestFormGroup() {
		return new FormGroup<BatchDeletePhotosRequestFormProperties>({
		});

	}


	/** Response to batch delete of one or more Photos. */
	export interface BatchDeletePhotosResponse {

		/** The status for the operation to delete a single Photo in the batch request. */
		status?: Array<Status>;
	}

	/** Response to batch delete of one or more Photos. */
	export interface BatchDeletePhotosResponseFormProperties {
	}
	export function CreateBatchDeletePhotosResponseFormGroup() {
		return new FormGroup<BatchDeletePhotosResponseFormProperties>({
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


	/** Response to batch get of Photos. */
	export interface BatchGetPhotosResponse {

		/** List of results for each individual Photo requested, in the same order as the requests in BatchGetPhotos. */
		results?: Array<PhotoResponse>;
	}

	/** Response to batch get of Photos. */
	export interface BatchGetPhotosResponseFormProperties {
	}
	export function CreateBatchGetPhotosResponseFormGroup() {
		return new FormGroup<BatchGetPhotosResponseFormProperties>({
		});

	}


	/** Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos. */
	export interface PhotoResponse {

		/** Photo is used to store 360 photos along with photo metadata. */
		photo?: Photo;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos. */
	export interface PhotoResponseFormProperties {
	}
	export function CreatePhotoResponseFormGroup() {
		return new FormGroup<PhotoResponseFormProperties>({
		});

	}


	/** Photo is used to store 360 photos along with photo metadata. */
	export interface Photo {

		/** Optional. Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata. */
		captureTime?: string | null;

		/** Optional. Connections to other photos. A connection represents the link from this photo to another photo. */
		connections?: Array<Connection>;

		/** Output only. The download URL for the photo bytes. This field is set only when GetPhotoRequest.view is set to PhotoView.INCLUDE_DOWNLOAD_URL. */
		downloadUrl?: string | null;

		/** Output only. Status in Google Maps, whether this photo was published or rejected. */
		mapsPublishStatus?: PhotoMapsPublishStatus | null;

		/** Identifier for a Photo. */
		photoId?: PhotoId;

		/** Optional. Places where this photo belongs. */
		places?: Array<Place>;

		/** Raw pose measurement for an entity. */
		pose?: Pose;

		/** Output only. The share link for the photo. */
		shareLink?: string | null;

		/** Output only. The thumbnail URL for showing a preview of the given photo. */
		thumbnailUrl?: string | null;

		/** Output only. Status of rights transfer on this photo. */
		transferStatus?: PhotoTransferStatus | null;

		/** Upload reference for media files. */
		uploadReference?: UploadRef;

		/** Output only. Time when the image was uploaded. */
		uploadTime?: string | null;

		/** Output only. View count of the photo. */
		viewCount?: string | null;
	}

	/** Photo is used to store 360 photos along with photo metadata. */
	export interface PhotoFormProperties {

		/** Optional. Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata. */
		captureTime: FormControl<string | null | undefined>,

		/** Output only. The download URL for the photo bytes. This field is set only when GetPhotoRequest.view is set to PhotoView.INCLUDE_DOWNLOAD_URL. */
		downloadUrl: FormControl<string | null | undefined>,

		/** Output only. Status in Google Maps, whether this photo was published or rejected. */
		mapsPublishStatus: FormControl<PhotoMapsPublishStatus | null | undefined>,

		/** Output only. The share link for the photo. */
		shareLink: FormControl<string | null | undefined>,

		/** Output only. The thumbnail URL for showing a preview of the given photo. */
		thumbnailUrl: FormControl<string | null | undefined>,

		/** Output only. Status of rights transfer on this photo. */
		transferStatus: FormControl<PhotoTransferStatus | null | undefined>,

		/** Output only. Time when the image was uploaded. */
		uploadTime: FormControl<string | null | undefined>,

		/** Output only. View count of the photo. */
		viewCount: FormControl<string | null | undefined>,
	}
	export function CreatePhotoFormGroup() {
		return new FormGroup<PhotoFormProperties>({
			captureTime: new FormControl<string | null | undefined>(undefined),
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			mapsPublishStatus: new FormControl<PhotoMapsPublishStatus | null | undefined>(undefined),
			shareLink: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
			transferStatus: new FormControl<PhotoTransferStatus | null | undefined>(undefined),
			uploadTime: new FormControl<string | null | undefined>(undefined),
			viewCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A connection is the link from a source photo to a destination photo. */
	export interface Connection {

		/** Identifier for a Photo. */
		target?: PhotoId;
	}

	/** A connection is the link from a source photo to a destination photo. */
	export interface ConnectionFormProperties {
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
		});

	}


	/** Identifier for a Photo. */
	export interface PhotoId {

		/** A unique identifier for a photo. */
		id?: string | null;
	}

	/** Identifier for a Photo. */
	export interface PhotoIdFormProperties {

		/** A unique identifier for a photo. */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePhotoIdFormGroup() {
		return new FormGroup<PhotoIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhotoMapsPublishStatus { UNSPECIFIED_MAPS_PUBLISH_STATUS = 'UNSPECIFIED_MAPS_PUBLISH_STATUS', PUBLISHED = 'PUBLISHED', REJECTED_UNKNOWN = 'REJECTED_UNKNOWN' }


	/** Place metadata for an entity. */
	export interface Place {

		/** Output only. The language_code that the name is localized with. This should be the language_code specified in the request, but may be a fallback. */
		languageCode?: string | null;

		/** Output only. The name of the place, localized to the language_code. */
		name?: string | null;

		/** Place identifier, as described in https://developers.google.com/places/place-id. */
		placeId?: string | null;
	}

	/** Place metadata for an entity. */
	export interface PlaceFormProperties {

		/** Output only. The language_code that the name is localized with. This should be the language_code specified in the request, but may be a fallback. */
		languageCode: FormControl<string | null | undefined>,

		/** Output only. The name of the place, localized to the language_code. */
		name: FormControl<string | null | undefined>,

		/** Place identifier, as described in https://developers.google.com/places/place-id. */
		placeId: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFormGroup() {
		return new FormGroup<PlaceFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Raw pose measurement for an entity. */
	export interface Pose {

		/**
		 * The estimated horizontal accuracy of this pose in meters with 68% confidence (one standard deviation). For example, on Android, this value is available from this method: https://developer.android.com/reference/android/location/Location#getAccuracy(). Other platforms have different methods of obtaining similar accuracy estimations.
		 * Type: float
		 */
		accuracyMeters?: number | null;

		/**
		 * Altitude of the pose in meters above WGS84 ellipsoid. NaN indicates an unmeasured quantity.
		 * Type: double
		 */
		altitude?: number | null;

		/** Time of the GPS record since UTC epoch. */
		gpsRecordTimestampUnixEpoch?: string | null;

		/**
		 * The following pose parameters pertain to the center of the photo. They match https://developers.google.com/streetview/spherical-metadata. Compass heading, measured at the center of the photo in degrees clockwise from North. Value must be >=0 and <360. NaN indicates an unmeasured quantity.
		 * Type: double
		 */
		heading?: number | null;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		latLngPair?: LatLng;

		/** Level information containing level number and its corresponding name. */
		level?: Level;

		/**
		 * Pitch, measured at the center of the photo in degrees. Value must be >=-90 and <= 90. A value of -90 means looking directly down, and a value of 90 means looking directly up. NaN indicates an unmeasured quantity.
		 * Type: double
		 */
		pitch?: number | null;

		/**
		 * Roll, measured in degrees. Value must be >= 0 and <360. A value of 0 means level with the horizon. NaN indicates an unmeasured quantity.
		 * Type: double
		 */
		roll?: number | null;
	}

	/** Raw pose measurement for an entity. */
	export interface PoseFormProperties {

		/**
		 * The estimated horizontal accuracy of this pose in meters with 68% confidence (one standard deviation). For example, on Android, this value is available from this method: https://developer.android.com/reference/android/location/Location#getAccuracy(). Other platforms have different methods of obtaining similar accuracy estimations.
		 * Type: float
		 */
		accuracyMeters: FormControl<number | null | undefined>,

		/**
		 * Altitude of the pose in meters above WGS84 ellipsoid. NaN indicates an unmeasured quantity.
		 * Type: double
		 */
		altitude: FormControl<number | null | undefined>,

		/** Time of the GPS record since UTC epoch. */
		gpsRecordTimestampUnixEpoch: FormControl<string | null | undefined>,

		/**
		 * The following pose parameters pertain to the center of the photo. They match https://developers.google.com/streetview/spherical-metadata. Compass heading, measured at the center of the photo in degrees clockwise from North. Value must be >=0 and <360. NaN indicates an unmeasured quantity.
		 * Type: double
		 */
		heading: FormControl<number | null | undefined>,

		/**
		 * Pitch, measured at the center of the photo in degrees. Value must be >=-90 and <= 90. A value of -90 means looking directly down, and a value of 90 means looking directly up. NaN indicates an unmeasured quantity.
		 * Type: double
		 */
		pitch: FormControl<number | null | undefined>,

		/**
		 * Roll, measured in degrees. Value must be >= 0 and <360. A value of 0 means level with the horizon. NaN indicates an unmeasured quantity.
		 * Type: double
		 */
		roll: FormControl<number | null | undefined>,
	}
	export function CreatePoseFormGroup() {
		return new FormGroup<PoseFormProperties>({
			accuracyMeters: new FormControl<number | null | undefined>(undefined),
			altitude: new FormControl<number | null | undefined>(undefined),
			gpsRecordTimestampUnixEpoch: new FormControl<string | null | undefined>(undefined),
			heading: new FormControl<number | null | undefined>(undefined),
			pitch: new FormControl<number | null | undefined>(undefined),
			roll: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLng {

		/**
		 * The latitude in degrees. It must be in the range [-90.0, +90.0].
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * The longitude in degrees. It must be in the range [-180.0, +180.0].
		 * Type: double
		 */
		longitude?: number | null;
	}

	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLngFormProperties {

		/**
		 * The latitude in degrees. It must be in the range [-90.0, +90.0].
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The longitude in degrees. It must be in the range [-180.0, +180.0].
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLatLngFormGroup() {
		return new FormGroup<LatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Level information containing level number and its corresponding name. */
	export interface Level {

		/** Required. A name assigned to this Level, restricted to 3 characters. Consider how the elevator buttons would be labeled for this level if there was an elevator. */
		name?: string | null;

		/**
		 * Optional. Floor number, used for ordering. 0 indicates the ground level, 1 indicates the first level above ground level, -1 indicates the first level under ground level. Non-integer values are OK.
		 * Type: double
		 */
		number?: number | null;
	}

	/** Level information containing level number and its corresponding name. */
	export interface LevelFormProperties {

		/** Required. A name assigned to this Level, restricted to 3 characters. Consider how the elevator buttons would be labeled for this level if there was an elevator. */
		name: FormControl<string | null | undefined>,

		/**
		 * Optional. Floor number, used for ordering. 0 indicates the ground level, 1 indicates the first level above ground level, -1 indicates the first level under ground level. Non-integer values are OK.
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateLevelFormGroup() {
		return new FormGroup<LevelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PhotoTransferStatus { TRANSFER_STATUS_UNKNOWN = 'TRANSFER_STATUS_UNKNOWN', NEVER_TRANSFERRED = 'NEVER_TRANSFERRED', PENDING = 'PENDING', COMPLETED = 'COMPLETED', REJECTED = 'REJECTED', EXPIRED = 'EXPIRED', CANCELLED = 'CANCELLED', RECEIVED_VIA_TRANSFER = 'RECEIVED_VIA_TRANSFER' }


	/** Upload reference for media files. */
	export interface UploadRef {

		/** An upload reference should be unique for each user. It follows the form: "https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}" */
		uploadUrl?: string | null;
	}

	/** Upload reference for media files. */
	export interface UploadRefFormProperties {

		/** An upload reference should be unique for each user. It follows the form: "https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}" */
		uploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateUploadRefFormGroup() {
		return new FormGroup<UploadRefFormProperties>({
			uploadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to update the metadata of photos. Updating the pixels of photos is not supported. */
	export interface BatchUpdatePhotosRequest {

		/** Required. List of UpdatePhotoRequests. */
		updatePhotoRequests?: Array<UpdatePhotoRequest>;
	}

	/** Request to update the metadata of photos. Updating the pixels of photos is not supported. */
	export interface BatchUpdatePhotosRequestFormProperties {
	}
	export function CreateBatchUpdatePhotosRequestFormGroup() {
		return new FormGroup<BatchUpdatePhotosRequestFormProperties>({
		});

	}


	/** Request to update the metadata of a Photo. Updating the pixels of a photo is not supported. */
	export interface UpdatePhotoRequest {

		/** Photo is used to store 360 photos along with photo metadata. */
		photo?: Photo;

		/** Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` > Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed. */
		updateMask?: string | null;
	}

	/** Request to update the metadata of a Photo. Updating the pixels of a photo is not supported. */
	export interface UpdatePhotoRequestFormProperties {

		/** Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` > Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhotoRequestFormGroup() {
		return new FormGroup<UpdatePhotoRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to batch update of metadata of one or more Photos. */
	export interface BatchUpdatePhotosResponse {

		/** List of results for each individual Photo updated, in the same order as the request. */
		results?: Array<PhotoResponse>;
	}

	/** Response to batch update of metadata of one or more Photos. */
	export interface BatchUpdatePhotosResponseFormProperties {
	}
	export function CreateBatchUpdatePhotosResponseFormGroup() {
		return new FormGroup<BatchUpdatePhotosResponseFormProperties>({
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


	/** Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here. */
	export interface GpsDataGapFailureDetails {

		/** The duration of the gap in GPS data that was found. */
		gapDuration?: string | null;

		/** Relative time (from the start of the video stream) when the gap started. */
		gapStartTime?: string | null;
	}

	/** Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here. */
	export interface GpsDataGapFailureDetailsFormProperties {

		/** The duration of the gap in GPS data that was found. */
		gapDuration: FormControl<string | null | undefined>,

		/** Relative time (from the start of the video stream) when the gap started. */
		gapStartTime: FormControl<string | null | undefined>,
	}
	export function CreateGpsDataGapFailureDetailsFormGroup() {
		return new FormGroup<GpsDataGapFailureDetailsFormProperties>({
			gapDuration: new FormControl<string | null | undefined>(undefined),
			gapStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IMU data from the device sensors. */
	export interface Imu {

		/** The accelerometer measurements in meters/sec^2 with increasing timestamps from devices. */
		accelMpsps?: Array<Measurement3d>;

		/** The gyroscope measurements in radians/sec with increasing timestamps from devices. */
		gyroRps?: Array<Measurement3d>;

		/** The magnetometer measurements of the magnetic field in microtesla (uT) with increasing timestamps from devices. */
		magUt?: Array<Measurement3d>;
	}

	/** IMU data from the device sensors. */
	export interface ImuFormProperties {
	}
	export function CreateImuFormGroup() {
		return new FormGroup<ImuFormProperties>({
		});

	}


	/** A Generic 3d measurement sample. */
	export interface Measurement3d {

		/** The timestamp of the IMU measurement. */
		captureTime?: string | null;

		/**
		 * The sensor measurement in the x axis.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * The sensor measurement in the y axis.
		 * Type: float
		 */
		y?: number | null;

		/**
		 * The sensor measurement in the z axis.
		 * Type: float
		 */
		z?: number | null;
	}

	/** A Generic 3d measurement sample. */
	export interface Measurement3dFormProperties {

		/** The timestamp of the IMU measurement. */
		captureTime: FormControl<string | null | undefined>,

		/**
		 * The sensor measurement in the x axis.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * The sensor measurement in the y axis.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * The sensor measurement in the z axis.
		 * Type: float
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreateMeasurement3dFormGroup() {
		return new FormGroup<Measurement3dFormProperties>({
			captureTime: new FormControl<string | null | undefined>(undefined),
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
			z: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here. */
	export interface ImuDataGapFailureDetails {

		/** The duration of the gap in IMU data that was found. */
		gapDuration?: string | null;

		/** Relative time (from the start of the video stream) when the gap started. */
		gapStartTime?: string | null;
	}

	/** Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here. */
	export interface ImuDataGapFailureDetailsFormProperties {

		/** The duration of the gap in IMU data that was found. */
		gapDuration: FormControl<string | null | undefined>,

		/** Relative time (from the start of the video stream) when the gap started. */
		gapStartTime: FormControl<string | null | undefined>,
	}
	export function CreateImuDataGapFailureDetailsFormGroup() {
		return new FormGroup<ImuDataGapFailureDetailsFormProperties>({
			gapDuration: new FormControl<string | null | undefined>(undefined),
			gapStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details related to ProcessingFailureReason#INSUFFICIENT_GPS. */
	export interface InsufficientGpsFailureDetails {

		/**
		 * The number of GPS points that were found in the video.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gpsPointsFound?: number | null;
	}

	/** Details related to ProcessingFailureReason#INSUFFICIENT_GPS. */
	export interface InsufficientGpsFailureDetailsFormProperties {

		/**
		 * The number of GPS points that were found in the video.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gpsPointsFound: FormControl<number | null | undefined>,
	}
	export function CreateInsufficientGpsFailureDetailsFormGroup() {
		return new FormGroup<InsufficientGpsFailureDetailsFormProperties>({
			gpsPointsFound: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A rectangle in geographical coordinates. */
	export interface LatLngBounds {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		northeast?: LatLng;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		southwest?: LatLng;
	}

	/** A rectangle in geographical coordinates. */
	export interface LatLngBoundsFormProperties {
	}
	export function CreateLatLngBoundsFormGroup() {
		return new FormGroup<LatLngBoundsFormProperties>({
		});

	}


	/** Response to list all photo sequences that belong to a user. */
	export interface ListPhotoSequencesResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** List of photo sequences via Operation interface. The maximum number of items returned is based on the pageSize field in the request. Each item in the list can have three possible states, * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` contains a PhotoSequence message, In each sequence, only Id is populated. */
		photoSequences?: Array<Operation>;
	}

	/** Response to list all photo sequences that belong to a user. */
	export interface ListPhotoSequencesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhotoSequencesResponseFormGroup() {
		return new FormGroup<ListPhotoSequencesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** Response to list all photos that belong to a user. */
	export interface ListPhotosResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** List of photos. The pageSize field in the request determines the number of items returned. */
		photos?: Array<Photo>;
	}

	/** Response to list all photos that belong to a user. */
	export interface ListPhotosResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhotosResponseFormGroup() {
		return new FormGroup<ListPhotosResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details related to PhotoSequenceProcessingFailureReason#NO_OVERLAP_GPS. */
	export interface NoOverlapGpsFailureDetails {

		/** Time of last recorded GPS point. */
		gpsEndTime?: string | null;

		/** Time of first recorded GPS point. */
		gpsStartTime?: string | null;

		/** End time of video. */
		videoEndTime?: string | null;

		/** Start time of video. */
		videoStartTime?: string | null;
	}

	/** Details related to PhotoSequenceProcessingFailureReason#NO_OVERLAP_GPS. */
	export interface NoOverlapGpsFailureDetailsFormProperties {

		/** Time of last recorded GPS point. */
		gpsEndTime: FormControl<string | null | undefined>,

		/** Time of first recorded GPS point. */
		gpsStartTime: FormControl<string | null | undefined>,

		/** End time of video. */
		videoEndTime: FormControl<string | null | undefined>,

		/** Start time of video. */
		videoStartTime: FormControl<string | null | undefined>,
	}
	export function CreateNoOverlapGpsFailureDetailsFormGroup() {
		return new FormGroup<NoOverlapGpsFailureDetailsFormProperties>({
			gpsEndTime: new FormControl<string | null | undefined>(undefined),
			gpsStartTime: new FormControl<string | null | undefined>(undefined),
			videoEndTime: new FormControl<string | null | undefined>(undefined),
			videoStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here. */
	export interface NotOutdoorsFailureDetails {

		/** Relative time (from the start of the video stream) when an indoor frame was found. */
		startTime?: string | null;
	}

	/** Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here. */
	export interface NotOutdoorsFailureDetailsFormProperties {

		/** Relative time (from the start of the video stream) when an indoor frame was found. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateNotOutdoorsFailureDetailsFormGroup() {
		return new FormGroup<NotOutdoorsFailureDetailsFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A sequence of 360 photos along with metadata. */
	export interface PhotoSequence {

		/** Optional. Absolute time when the photo sequence starts to be captured. If the photo sequence is a video, this is the start time of the video. If this field is populated in input, it overrides the capture time in the video or XDM file. */
		captureTimeOverride?: string | null;

		/**
		 * Output only. The computed distance of the photo sequence in meters.
		 * Type: double
		 */
		distanceMeters?: number | null;

		/** Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason. */
		failureDetails?: ProcessingFailureDetails;

		/** Output only. If this sequence has processing_state = FAILED, this will contain the reason why it failed. If the processing_state is any other value, this field will be unset. */
		failureReason?: PhotoSequenceFailureReason | null;

		/** Output only. The filename of the upload. Does not include the directory path. Only available if the sequence was uploaded on a platform that provides the filename. */
		filename?: string | null;

		/** Input only. If both raw_gps_timeline and the Camera Motion Metadata Track (CAMM) contain GPS measurements, indicate which takes precedence. */
		gpsSource?: PhotoSequenceGpsSource | null;

		/** Output only. Unique identifier for the photo sequence. This also acts as a long running operation ID if uploading is performed asynchronously. */
		id?: string | null;

		/** IMU data from the device sensors. */
		imu?: Imu;

		/** Output only. Photos with increasing timestamps. */
		photos?: Array<Photo>;

		/** Output only. The processing state of this sequence. */
		processingState?: PhotoSequenceProcessingState | null;

		/** Input only. Raw GPS measurements with increasing timestamps from the device that aren't time synced with each photo. These raw measurements will be used to infer the pose of each frame. Required in input when InputType is VIDEO and raw GPS measurements are not in Camera Motion Metadata Track (CAMM). User can indicate which takes precedence using gps_source if raw GPS measurements are provided in both raw_gps_timeline and Camera Motion Metadata Track (CAMM). */
		rawGpsTimeline?: Array<Pose>;

		/** A rectangle in geographical coordinates. */
		sequenceBounds?: LatLngBounds;

		/** Upload reference for media files. */
		uploadReference?: UploadRef;

		/** Output only. The time this photo sequence was created in uSV Store service. */
		uploadTime?: string | null;

		/** Output only. The total number of views that all the published images in this PhotoSequence have received. */
		viewCount?: string | null;
	}

	/** A sequence of 360 photos along with metadata. */
	export interface PhotoSequenceFormProperties {

		/** Optional. Absolute time when the photo sequence starts to be captured. If the photo sequence is a video, this is the start time of the video. If this field is populated in input, it overrides the capture time in the video or XDM file. */
		captureTimeOverride: FormControl<string | null | undefined>,

		/**
		 * Output only. The computed distance of the photo sequence in meters.
		 * Type: double
		 */
		distanceMeters: FormControl<number | null | undefined>,

		/** Output only. If this sequence has processing_state = FAILED, this will contain the reason why it failed. If the processing_state is any other value, this field will be unset. */
		failureReason: FormControl<PhotoSequenceFailureReason | null | undefined>,

		/** Output only. The filename of the upload. Does not include the directory path. Only available if the sequence was uploaded on a platform that provides the filename. */
		filename: FormControl<string | null | undefined>,

		/** Input only. If both raw_gps_timeline and the Camera Motion Metadata Track (CAMM) contain GPS measurements, indicate which takes precedence. */
		gpsSource: FormControl<PhotoSequenceGpsSource | null | undefined>,

		/** Output only. Unique identifier for the photo sequence. This also acts as a long running operation ID if uploading is performed asynchronously. */
		id: FormControl<string | null | undefined>,

		/** Output only. The processing state of this sequence. */
		processingState: FormControl<PhotoSequenceProcessingState | null | undefined>,

		/** Output only. The time this photo sequence was created in uSV Store service. */
		uploadTime: FormControl<string | null | undefined>,

		/** Output only. The total number of views that all the published images in this PhotoSequence have received. */
		viewCount: FormControl<string | null | undefined>,
	}
	export function CreatePhotoSequenceFormGroup() {
		return new FormGroup<PhotoSequenceFormProperties>({
			captureTimeOverride: new FormControl<string | null | undefined>(undefined),
			distanceMeters: new FormControl<number | null | undefined>(undefined),
			failureReason: new FormControl<PhotoSequenceFailureReason | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			gpsSource: new FormControl<PhotoSequenceGpsSource | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			processingState: new FormControl<PhotoSequenceProcessingState | null | undefined>(undefined),
			uploadTime: new FormControl<string | null | undefined>(undefined),
			viewCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason. */
	export interface ProcessingFailureDetails {

		/** Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here. */
		gpsDataGapDetails?: GpsDataGapFailureDetails;

		/** Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here. */
		imuDataGapDetails?: ImuDataGapFailureDetails;

		/** Details related to ProcessingFailureReason#INSUFFICIENT_GPS. */
		insufficientGpsDetails?: InsufficientGpsFailureDetails;

		/** Details related to PhotoSequenceProcessingFailureReason#NO_OVERLAP_GPS. */
		noOverlapGpsDetails?: NoOverlapGpsFailureDetails;

		/** Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here. */
		notOutdoorsDetails?: NotOutdoorsFailureDetails;
	}

	/** Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason. */
	export interface ProcessingFailureDetailsFormProperties {
	}
	export function CreateProcessingFailureDetailsFormGroup() {
		return new FormGroup<ProcessingFailureDetailsFormProperties>({
		});

	}

	export enum PhotoSequenceFailureReason { PROCESSING_FAILURE_REASON_UNSPECIFIED = 'PROCESSING_FAILURE_REASON_UNSPECIFIED', LOW_RESOLUTION = 'LOW_RESOLUTION', DUPLICATE = 'DUPLICATE', INSUFFICIENT_GPS = 'INSUFFICIENT_GPS', NO_OVERLAP_GPS = 'NO_OVERLAP_GPS', INVALID_GPS = 'INVALID_GPS', FAILED_TO_REFINE_POSITIONS = 'FAILED_TO_REFINE_POSITIONS', TAKEDOWN = 'TAKEDOWN', CORRUPT_VIDEO = 'CORRUPT_VIDEO', INTERNAL = 'INTERNAL', INVALID_VIDEO_FORMAT = 'INVALID_VIDEO_FORMAT', INVALID_VIDEO_DIMENSIONS = 'INVALID_VIDEO_DIMENSIONS', INVALID_CAPTURE_TIME = 'INVALID_CAPTURE_TIME', GPS_DATA_GAP = 'GPS_DATA_GAP', JUMPY_GPS = 'JUMPY_GPS', INVALID_IMU = 'INVALID_IMU', INSUFFICIENT_IMU = 'INSUFFICIENT_IMU', INSUFFICIENT_OVERLAP_TIME_SERIES = 'INSUFFICIENT_OVERLAP_TIME_SERIES', IMU_DATA_GAP = 'IMU_DATA_GAP', UNSUPPORTED_CAMERA = 'UNSUPPORTED_CAMERA', NOT_OUTDOORS = 'NOT_OUTDOORS', INSUFFICIENT_VIDEO_FRAMES = 'INSUFFICIENT_VIDEO_FRAMES', INSUFFICIENT_MOVEMENT = 'INSUFFICIENT_MOVEMENT', MAST_DOWN = 'MAST_DOWN' }

	export enum PhotoSequenceGpsSource { PHOTO_SEQUENCE = 'PHOTO_SEQUENCE', CAMERA_MOTION_METADATA_TRACK = 'CAMERA_MOTION_METADATA_TRACK' }

	export enum PhotoSequenceProcessingState { PROCESSING_STATE_UNSPECIFIED = 'PROCESSING_STATE_UNSPECIFIED', PENDING = 'PENDING', PROCESSING = 'PROCESSING', PROCESSED = 'PROCESSED', FAILED = 'FAILED' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps. Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores the `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.
		 * Post v1/photo
		 * @return {Photo} Successful response
		 */
		Streetviewpublish_photo_create(requestBody: Photo): Observable<Photo> {
			return this.http.post<Photo>(this.baseUri + 'v1/photo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported. Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
		 * Put v1/photo/{id}
		 * @param {string} id A unique identifier for a photo.
		 * @param {string} updateMask Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` > Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.
		 * @return {Photo} Successful response
		 */
		Streetviewpublish_photo_update(id: string, updateMask: string | null | undefined, requestBody: Photo): Observable<Photo> {
			return this.http.put<Photo>(this.baseUri + 'v1/photo/' + (id == null ? '' : encodeURIComponent(id)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Photo and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
		 * Delete v1/photo/{photoId}
		 * @param {string} photoId Required. ID of the Photo.
		 * @return {Empty} Successful response
		 */
		Streetviewpublish_photo_delete(photoId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/photo/' + (photoId == null ? '' : encodeURIComponent(photoId)), {});
		}

		/**
		 * Gets the metadata of the specified Photo. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
		 * Get v1/photo/{photoId}
		 * @param {string} photoId Required. ID of the Photo.
		 * @param {string} languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
		 * @param {Streetviewpublish_photo_getView} view Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.
		 * @return {Photo} Successful response
		 */
		Streetviewpublish_photo_get(photoId: string, languageCode: string | null | undefined, view: Streetviewpublish_photo_getView | null | undefined): Observable<Photo> {
			return this.http.get<Photo>(this.baseUri + 'v1/photo/' + (photoId == null ? '' : encodeURIComponent(photoId)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&view=' + view, {});
		}

		/**
		 * Creates an upload session to start uploading photo bytes. The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo. In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?ref_topic=6275604, the photo must meet the following requirements: * Photo Sphere XMP metadata must be included in the photo metadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?ref_topic=6275604, and the photo must be a full 360 horizontally. After the upload completes, the method uses UploadRef with CreatePhoto to create the Photo object entry.
		 * Post v1/photo:startUpload
		 * @return {UploadRef} Successful response
		 */
		Streetviewpublish_photo_startUpload(requestBody: Empty): Observable<UploadRef> {
			return this.http.post<UploadRef>(this.baseUri + 'v1/photo:startUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * After the client finishes uploading the PhotoSequence with the returned UploadRef, CreatePhotoSequence extracts a sequence of 360 photos from a video or Extensible Device Metadata (XDM, http://www.xdm.org/) to be published to Street View on Google Maps. `CreatePhotoSequence` returns an Operation, with the PhotoSequence Id set in the `Operation.name` field. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the upload reference does not exist.
		 * Post v1/photoSequence
		 * @param {Streetviewpublish_photoSequence_createInputType} inputType Required. The input form of PhotoSequence.
		 * @return {Operation} Successful response
		 */
		Streetviewpublish_photoSequence_create(inputType: Streetviewpublish_photoSequence_createInputType | null | undefined, requestBody: PhotoSequence): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/photoSequence?inputType=' + inputType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a PhotoSequence and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo sequence. * google.rpc.Code.NOT_FOUND if the photo sequence ID does not exist. * google.rpc.Code.FAILED_PRECONDITION if the photo sequence ID is not yet finished processing.
		 * Delete v1/photoSequence/{sequenceId}
		 * @param {string} sequenceId Required. ID of the PhotoSequence.
		 * @return {Empty} Successful response
		 */
		Streetviewpublish_photoSequence_delete(sequenceId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/photoSequence/' + (sequenceId == null ? '' : encodeURIComponent(sequenceId)), {});
		}

		/**
		 * Gets the metadata of the specified PhotoSequence via the Operation interface. This method returns the following three types of responses: * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` is poulated, which contains a PhotoSequence message. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested PhotoSequence. * google.rpc.Code.NOT_FOUND if the requested PhotoSequence does not exist.
		 * Get v1/photoSequence/{sequenceId}
		 * @param {string} sequenceId Required. ID of the photo sequence.
		 * @param {string} filter Optional. The filter expression. For example: `published_status=PUBLISHED`. The filters supported are: `published_status`. See https://google.aip.dev/160 for more information.
		 * @param {Streetviewpublish_photo_getView} view Specifies if a download URL for the photo sequence should be returned in `download_url` of individual photos in the PhotoSequence response. > Note: Currently not implemented.
		 * @return {Operation} Successful response
		 */
		Streetviewpublish_photoSequence_get(sequenceId: string, filter: string | null | undefined, view: Streetviewpublish_photo_getView | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/photoSequence/' + (sequenceId == null ? '' : encodeURIComponent(sequenceId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&view=' + view, {});
		}

		/**
		 * Creates an upload session to start uploading photo sequence data. The upload URL of the returned UploadRef is used to upload the data for the `photoSequence`. After the upload is complete, the UploadRef is used with CreatePhotoSequence to create the PhotoSequence object entry.
		 * Post v1/photoSequence:startUpload
		 * @return {UploadRef} Successful response
		 */
		Streetviewpublish_photoSequence_startUpload(requestBody: Empty): Observable<UploadRef> {
			return this.http.post<UploadRef>(this.baseUri + 'v1/photoSequence:startUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the PhotoSequences that belong to the user, in descending CreatePhotoSequence timestamp order.
		 * Get v1/photoSequences
		 * @param {string} filter Optional. The filter expression. For example: `imagery_type=SPHERICAL`. The filters supported are: `imagery_type`, `processing_state`, `min_latitude`, `max_latitude`, `min_longitude`, `max_longitude`, `filename_query`, `min_capture_time_seconds`, `max_capture_time_seconds. See https://google.aip.dev/160 for more information. Filename queries should sent as a Phrase in order to support multiple words and special characters by adding escaped quotes. Ex: filename_query="example of a phrase.mp4"
		 * @param {number} pageSize Optional. The maximum number of photo sequences to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photo sequences returned in the response may be less than `pageSize` if the number of matches is less than `pageSize`. This is currently unimplemented but is in process.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The nextPageToken value returned from a previous ListPhotoSequences request, if any.
		 * @return {ListPhotoSequencesResponse} Successful response
		 */
		Streetviewpublish_photoSequences_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPhotoSequencesResponse> {
			return this.http.get<ListPhotoSequencesResponse>(this.baseUri + 'v1/photoSequences?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all the Photos that belong to the user. > Note: Recently created photos that are still being indexed are not returned in the response.
		 * Get v1/photos
		 * @param {string} filter Optional. The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`. The filters supported are: `placeId`, `min_latitude`, `max_latitude`, `min_longitude`, `max_longitude`. See https://google.aip.dev/160 for more information.
		 * @param {string} languageCode Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
		 * @param {number} pageSize Optional. The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The nextPageToken value returned from a previous ListPhotos request, if any.
		 * @param {Streetviewpublish_photo_getView} view Required. Specifies if a download URL for the photos bytes should be returned in the Photos response.
		 * @return {ListPhotosResponse} Successful response
		 */
		Streetviewpublish_photos_list(filter: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Streetviewpublish_photo_getView | null | undefined): Observable<ListPhotosResponse> {
			return this.http.get<ListPhotosResponse>(this.baseUri + 'v1/photos?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Deletes a list of Photos and their metadata. Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.
		 * Post v1/photos:batchDelete
		 * @return {BatchDeletePhotosResponse} Successful response
		 */
		Streetviewpublish_photos_batchDelete(requestBody: BatchDeletePhotosRequest): Observable<BatchDeletePhotosResponse> {
			return this.http.post<BatchDeletePhotosResponse>(this.baseUri + 'v1/photos:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the metadata of the specified Photo batch. Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.
		 * Get v1/photos:batchGet
		 * @param {string} languageCode Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
		 * @param {Array<string>} photoIds Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=&photoIds=&...`.
		 * @param {Streetviewpublish_photo_getView} view Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.
		 * @return {BatchGetPhotosResponse} Successful response
		 */
		Streetviewpublish_photos_batchGet(languageCode: string | null | undefined, photoIds: Array<string> | null | undefined, view: Streetviewpublish_photo_getView | null | undefined): Observable<BatchGetPhotosResponse> {
			return this.http.get<BatchGetPhotosResponse>(this.baseUri + 'v1/photos:batchGet?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&' + photoIds?.map(z => `photoIds=${encodeURIComponent(z)}`).join('&') + '&view=' + view, {});
		}

		/**
		 * Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported. Note that if BatchUpdatePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo. Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields. The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20. > Note: To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.
		 * Post v1/photos:batchUpdate
		 * @return {BatchUpdatePhotosResponse} Successful response
		 */
		Streetviewpublish_photos_batchUpdate(requestBody: BatchUpdatePhotosRequest): Observable<BatchUpdatePhotosResponse> {
			return this.http.post<BatchUpdatePhotosResponse>(this.baseUri + 'v1/photos:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Streetviewpublish_photo_getView { BASIC = 'BASIC', INCLUDE_DOWNLOAD_URL = 'INCLUDE_DOWNLOAD_URL' }

	export enum Streetviewpublish_photoSequence_createInputType { INPUT_TYPE_UNSPECIFIED = 'INPUT_TYPE_UNSPECIFIED', VIDEO = 'VIDEO', XDM = 'XDM' }

}

