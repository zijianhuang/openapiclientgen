import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request to delete multiple Photos. */
	export interface BatchDeletePhotosRequest {

		/**
		 * Required. IDs of the Photos. HTTP
		 * GET requests require the following syntax for the URL query parameter:
		 * `photoIds=<id1>&photoIds=<id2>&...`.
		 */
		photoIds?: Array<string>;
	}

	/** Request to delete multiple Photos. */
	export interface BatchDeletePhotosRequestFormProperties {
	}
	export function CreateBatchDeletePhotosRequestFormGroup() {
		return new FormGroup<BatchDeletePhotosRequestFormProperties>({
		});

	}


	/**
	 * Response to batch delete of one or more
	 * Photos.
	 */
	export interface BatchDeletePhotosResponse {

		/**
		 * The status for the operation to delete a single
		 * Photo in the batch request.
		 */
		status?: Array<Status>;
	}

	/**
	 * Response to batch delete of one or more
	 * Photos.
	 */
	export interface BatchDeletePhotosResponseFormProperties {
	}
	export function CreateBatchDeletePhotosResponseFormGroup() {
		return new FormGroup<BatchDeletePhotosResponseFormProperties>({
		});

	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
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

		/**
		 * List of results for each individual
		 * Photo requested, in the same order as
		 * the requests in
		 * BatchGetPhotos.
		 */
		results?: Array<PhotoResponse>;
	}

	/** Response to batch get of Photos. */
	export interface BatchGetPhotosResponseFormProperties {
	}
	export function CreateBatchGetPhotosResponseFormGroup() {
		return new FormGroup<BatchGetPhotosResponseFormProperties>({
		});

	}


	/**
	 * Response payload for a single
	 * Photo
	 * in batch operations including
	 * BatchGetPhotos
	 * and
	 * BatchUpdatePhotos.
	 */
	export interface PhotoResponse {

		/** Photo is used to store 360 photos along with photo metadata. */
		photo?: Photo;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		status?: Status;
	}

	/**
	 * Response payload for a single
	 * Photo
	 * in batch operations including
	 * BatchGetPhotos
	 * and
	 * BatchUpdatePhotos.
	 */
	export interface PhotoResponseFormProperties {
	}
	export function CreatePhotoResponseFormGroup() {
		return new FormGroup<PhotoResponseFormProperties>({
		});

	}


	/** Photo is used to store 360 photos along with photo metadata. */
	export interface Photo {

		/**
		 * Absolute time when the photo was captured.
		 * When the photo has no exif timestamp, this is used to set a timestamp in
		 * the photo metadata.
		 */
		captureTime?: string | null;

		/**
		 * Connections to other photos. A connection represents the link from this
		 * photo to another photo.
		 */
		connections?: Array<Connection>;

		/**
		 * Output only. The download URL for the photo bytes. This field is set only
		 * when
		 * GetPhotoRequest.view
		 * is set to
		 * PhotoView.INCLUDE_DOWNLOAD_URL.
		 */
		downloadUrl?: string | null;

		/**
		 * Output only. Status in Google Maps, whether this photo was published or
		 * rejected. Not currently populated.
		 */
		mapsPublishStatus?: PhotoMapsPublishStatus | null;

		/** Identifier for a Photo. */
		photoId?: PhotoId;

		/** Places where this photo belongs. */
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

		/** Output only. View count of the photo. */
		viewCount?: string | null;
	}

	/** Photo is used to store 360 photos along with photo metadata. */
	export interface PhotoFormProperties {

		/**
		 * Absolute time when the photo was captured.
		 * When the photo has no exif timestamp, this is used to set a timestamp in
		 * the photo metadata.
		 */
		captureTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The download URL for the photo bytes. This field is set only
		 * when
		 * GetPhotoRequest.view
		 * is set to
		 * PhotoView.INCLUDE_DOWNLOAD_URL.
		 */
		downloadUrl: FormControl<string | null | undefined>,

		/**
		 * Output only. Status in Google Maps, whether this photo was published or
		 * rejected. Not currently populated.
		 */
		mapsPublishStatus: FormControl<PhotoMapsPublishStatus | null | undefined>,

		/** Output only. The share link for the photo. */
		shareLink: FormControl<string | null | undefined>,

		/** Output only. The thumbnail URL for showing a preview of the given photo. */
		thumbnailUrl: FormControl<string | null | undefined>,

		/** Output only. Status of rights transfer on this photo. */
		transferStatus: FormControl<PhotoTransferStatus | null | undefined>,

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

		/** Required. A unique identifier for a photo. */
		id?: string | null;
	}

	/** Identifier for a Photo. */
	export interface PhotoIdFormProperties {

		/** Required. A unique identifier for a photo. */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePhotoIdFormGroup() {
		return new FormGroup<PhotoIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhotoMapsPublishStatus { UNSPECIFIED_MAPS_PUBLISH_STATUS = 0, PUBLISHED = 1, REJECTED_UNKNOWN = 2 }


	/** Place metadata for an entity. */
	export interface Place {

		/**
		 * Output-only. The language_code that the name is localized with. This should
		 * be the language_code specified in the request, but may be a fallback.
		 */
		languageCode?: string | null;

		/** Output-only. The name of the place, localized to the language_code. */
		name?: string | null;

		/**
		 * Place identifier, as described in
		 * https://developers.google.com/places/place-id.
		 */
		placeId?: string | null;
	}

	/** Place metadata for an entity. */
	export interface PlaceFormProperties {

		/**
		 * Output-only. The language_code that the name is localized with. This should
		 * be the language_code specified in the request, but may be a fallback.
		 */
		languageCode: FormControl<string | null | undefined>,

		/** Output-only. The name of the place, localized to the language_code. */
		name: FormControl<string | null | undefined>,

		/**
		 * Place identifier, as described in
		 * https://developers.google.com/places/place-id.
		 */
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
		 * The estimated horizontal accuracy of this pose in meters with 68%
		 * confidence (one standard deviation). For example, on Android, this value is
		 * available from this method:
		 * https://developer.android.com/reference/android/location/Location#getAccuracy().
		 * Other platforms have different methods of obtaining similar accuracy
		 * estimations.
		 */
		accuracyMeters?: number | null;

		/**
		 * Altitude of the pose in meters above WGS84 ellipsoid.
		 * NaN indicates an unmeasured quantity.
		 */
		altitude?: number | null;

		/**
		 * Compass heading, measured at the center of the photo in degrees clockwise
		 * from North. Value must be >=0 and <360.
		 * NaN indicates an unmeasured quantity.
		 */
		heading?: number | null;

		/**
		 * An object representing a latitude/longitude pair. This is expressed as a pair
		 * of doubles representing degrees latitude and degrees longitude. Unless
		 * specified otherwise, this must conform to the
		 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
		 * standard</a>. Values must be within normalized ranges.
		 */
		latLngPair?: LatLng;

		/** Level information containing level number and its corresponding name. */
		level?: Level;

		/**
		 * Pitch, measured at the center of the photo in degrees. Value must be >=-90
		 * and <= 90. A value of -90 means looking directly down, and a value of 90
		 * means looking directly up.
		 * NaN indicates an unmeasured quantity.
		 */
		pitch?: number | null;

		/**
		 * Roll, measured in degrees. Value must be >= 0 and <360. A value of 0
		 * means level with the horizon.
		 * NaN indicates an unmeasured quantity.
		 */
		roll?: number | null;
	}

	/** Raw pose measurement for an entity. */
	export interface PoseFormProperties {

		/**
		 * The estimated horizontal accuracy of this pose in meters with 68%
		 * confidence (one standard deviation). For example, on Android, this value is
		 * available from this method:
		 * https://developer.android.com/reference/android/location/Location#getAccuracy().
		 * Other platforms have different methods of obtaining similar accuracy
		 * estimations.
		 */
		accuracyMeters: FormControl<number | null | undefined>,

		/**
		 * Altitude of the pose in meters above WGS84 ellipsoid.
		 * NaN indicates an unmeasured quantity.
		 */
		altitude: FormControl<number | null | undefined>,

		/**
		 * Compass heading, measured at the center of the photo in degrees clockwise
		 * from North. Value must be >=0 and <360.
		 * NaN indicates an unmeasured quantity.
		 */
		heading: FormControl<number | null | undefined>,

		/**
		 * Pitch, measured at the center of the photo in degrees. Value must be >=-90
		 * and <= 90. A value of -90 means looking directly down, and a value of 90
		 * means looking directly up.
		 * NaN indicates an unmeasured quantity.
		 */
		pitch: FormControl<number | null | undefined>,

		/**
		 * Roll, measured in degrees. Value must be >= 0 and <360. A value of 0
		 * means level with the horizon.
		 * NaN indicates an unmeasured quantity.
		 */
		roll: FormControl<number | null | undefined>,
	}
	export function CreatePoseFormGroup() {
		return new FormGroup<PoseFormProperties>({
			accuracyMeters: new FormControl<number | null | undefined>(undefined),
			altitude: new FormControl<number | null | undefined>(undefined),
			heading: new FormControl<number | null | undefined>(undefined),
			pitch: new FormControl<number | null | undefined>(undefined),
			roll: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing a latitude/longitude pair. This is expressed as a pair
	 * of doubles representing degrees latitude and degrees longitude. Unless
	 * specified otherwise, this must conform to the
	 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
	 * standard</a>. Values must be within normalized ranges.
	 */
	export interface LatLng {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude?: number | null;

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude?: number | null;
	}

	/**
	 * An object representing a latitude/longitude pair. This is expressed as a pair
	 * of doubles representing degrees latitude and degrees longitude. Unless
	 * specified otherwise, this must conform to the
	 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
	 * standard</a>. Values must be within normalized ranges.
	 */
	export interface LatLngFormProperties {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude: FormControl<number | null | undefined>,

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
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

		/**
		 * Required. A name assigned to this Level, restricted to 3 characters.
		 * Consider how the elevator buttons would be labeled for this level if there
		 * was an elevator.
		 */
		name?: string | null;

		/**
		 * Floor number, used for ordering. 0 indicates the ground level, 1 indicates
		 * the first level above ground level, -1 indicates the first level under
		 * ground level. Non-integer values are OK.
		 */
		number?: number | null;
	}

	/** Level information containing level number and its corresponding name. */
	export interface LevelFormProperties {

		/**
		 * Required. A name assigned to this Level, restricted to 3 characters.
		 * Consider how the elevator buttons would be labeled for this level if there
		 * was an elevator.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Floor number, used for ordering. 0 indicates the ground level, 1 indicates
		 * the first level above ground level, -1 indicates the first level under
		 * ground level. Non-integer values are OK.
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateLevelFormGroup() {
		return new FormGroup<LevelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PhotoTransferStatus { TRANSFER_STATUS_UNKNOWN = 0, NEVER_TRANSFERRED = 1, PENDING = 2, COMPLETED = 3, REJECTED = 4, EXPIRED = 5, CANCELLED = 6, RECEIVED_VIA_TRANSFER = 7 }


	/** Upload reference for media files. */
	export interface UploadRef {

		/**
		 * Required. An upload reference should be unique for each user. It follows
		 * the form:
		 * "https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}"
		 */
		uploadUrl?: string | null;
	}

	/** Upload reference for media files. */
	export interface UploadRefFormProperties {

		/**
		 * Required. An upload reference should be unique for each user. It follows
		 * the form:
		 * "https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}"
		 */
		uploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateUploadRefFormGroup() {
		return new FormGroup<UploadRefFormProperties>({
			uploadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Request to update the metadata of photos.
	 * Updating the pixels of photos is not supported.
	 */
	export interface BatchUpdatePhotosRequest {

		/**
		 * Required. List of
		 * UpdatePhotoRequests.
		 */
		updatePhotoRequests?: Array<UpdatePhotoRequest>;
	}

	/**
	 * Request to update the metadata of photos.
	 * Updating the pixels of photos is not supported.
	 */
	export interface BatchUpdatePhotosRequestFormProperties {
	}
	export function CreateBatchUpdatePhotosRequestFormGroup() {
		return new FormGroup<BatchUpdatePhotosRequestFormProperties>({
		});

	}


	/**
	 * Request to update the metadata of a
	 * Photo. Updating the pixels of a photo
	 * is not supported.
	 */
	export interface UpdatePhotoRequest {

		/** Photo is used to store 360 photos along with photo metadata. */
		photo?: Photo;

		/**
		 * Required. Mask that identifies fields on the photo metadata to update.
		 * If not present, the old Photo
		 * metadata is entirely replaced with the
		 * new Photo metadata in this request.
		 * The update fails if invalid fields are specified. Multiple fields can be
		 * specified in a comma-delimited list.
		 * The following fields are valid:
		 * * `pose.heading`
		 * * `pose.latLngPair`
		 * * `pose.pitch`
		 * * `pose.roll`
		 * * `pose.level`
		 * * `pose.altitude`
		 * * `connections`
		 * * `places`
		 * <aside class="note"><b>Note:</b> When
		 * updateMask
		 * contains repeated fields, the entire set of repeated values get replaced
		 * with the new contents. For example, if
		 * updateMask
		 * contains `connections` and `UpdatePhotoRequest.photo.connections` is empty,
		 * all connections are removed.</aside>
		 */
		updateMask?: string | null;
	}

	/**
	 * Request to update the metadata of a
	 * Photo. Updating the pixels of a photo
	 * is not supported.
	 */
	export interface UpdatePhotoRequestFormProperties {

		/**
		 * Required. Mask that identifies fields on the photo metadata to update.
		 * If not present, the old Photo
		 * metadata is entirely replaced with the
		 * new Photo metadata in this request.
		 * The update fails if invalid fields are specified. Multiple fields can be
		 * specified in a comma-delimited list.
		 * The following fields are valid:
		 * * `pose.heading`
		 * * `pose.latLngPair`
		 * * `pose.pitch`
		 * * `pose.roll`
		 * * `pose.level`
		 * * `pose.altitude`
		 * * `connections`
		 * * `places`
		 * <aside class="note"><b>Note:</b> When
		 * updateMask
		 * contains repeated fields, the entire set of repeated values get replaced
		 * with the new contents. For example, if
		 * updateMask
		 * contains `connections` and `UpdatePhotoRequest.photo.connections` is empty,
		 * all connections are removed.</aside>
		 */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhotoRequestFormGroup() {
		return new FormGroup<UpdatePhotoRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Response to batch update of metadata of one or more
	 * Photos.
	 */
	export interface BatchUpdatePhotosResponse {

		/**
		 * List of results for each individual
		 * Photo updated, in the same order as
		 * the request.
		 */
		results?: Array<PhotoResponse>;
	}

	/**
	 * Response to batch update of metadata of one or more
	 * Photos.
	 */
	export interface BatchUpdatePhotosResponseFormProperties {
	}
	export function CreateBatchUpdatePhotosResponseFormGroup() {
		return new FormGroup<BatchUpdatePhotosResponseFormProperties>({
		});

	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Response to list all photos that belong to a user. */
	export interface ListPhotosResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results in the list.
		 */
		nextPageToken?: string | null;

		/**
		 * List of photos. The
		 * pageSize field
		 * in the request determines the number of items returned.
		 */
		photos?: Array<Photo>;
	}

	/** Response to list all photos that belong to a user. */
	export interface ListPhotosResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhotosResponseFormGroup() {
		return new FormGroup<ListPhotosResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string | null;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}

	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface OperationFormProperties {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done: FormControl<boolean | null | undefined>,

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * After the client finishes uploading the photo with the returned
		 * UploadRef,
		 * CreatePhoto
		 * publishes the uploaded Photo to
		 * Street View on Google Maps.
		 * Currently, the only way to set heading, pitch, and roll in CreatePhoto is
		 * through the [Photo Sphere XMP
		 * metadata](https://developers.google.com/streetview/spherical-metadata) in
		 * the photo bytes. CreatePhoto ignores the  `pose.heading`, `pose.pitch`,
		 * `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose.
		 * This method returns the following error codes:
		 * * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if
		 * the uploaded photo is not a 360 photo.
		 * * google.rpc.Code.NOT_FOUND if the upload reference does not exist.
		 * * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the
		 * storage limit.
		 * Post v1/photo
		 * @return {void} Successful response
		 */
		Streetviewpublish_photo_create(requestBody: Photo): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/photo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the metadata of a Photo, such
		 * as pose, place association, connections, etc. Changing the pixels of a
		 * photo is not supported.
		 * Only the fields specified in the
		 * updateMask
		 * field are used. If `updateMask` is not present, the update applies to all
		 * fields.
		 * This method returns the following error codes:
		 * * google.rpc.Code.PERMISSION_DENIED if the requesting user did not
		 * create the requested photo.
		 * * google.rpc.Code.INVALID_ARGUMENT if the request is malformed.
		 * * google.rpc.Code.NOT_FOUND if the requested photo does not exist.
		 * * google.rpc.Code.UNAVAILABLE if the requested
		 * Photo is still being indexed.
		 * Put v1/photo/{id}
		 * @param {string} id Required. A unique identifier for a photo.
		 * @param {string} updateMask Required. Mask that identifies fields on the photo metadata to update.
		 * If not present, the old Photo
		 * metadata is entirely replaced with the
		 * new Photo metadata in this request.
		 * The update fails if invalid fields are specified. Multiple fields can be
		 * specified in a comma-delimited list.
		 * The following fields are valid:
		 * * `pose.heading`
		 * * `pose.latLngPair`
		 * * `pose.pitch`
		 * * `pose.roll`
		 * * `pose.level`
		 * * `pose.altitude`
		 * * `connections`
		 * * `places`
		 * <aside class="note"><b>Note:</b> When
		 * updateMask
		 * contains repeated fields, the entire set of repeated values get replaced
		 * with the new contents. For example, if
		 * updateMask
		 * contains `connections` and `UpdatePhotoRequest.photo.connections` is empty,
		 * all connections are removed.</aside>
		 * @return {void} Successful response
		 */
		Streetviewpublish_photo_update(id: string, updateMask: string | null | undefined, requestBody: Photo): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/photo/' + (id == null ? '' : encodeURIComponent(id)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Photo and its metadata.
		 * This method returns the following error codes:
		 * * google.rpc.Code.PERMISSION_DENIED if the requesting user did not
		 * create the requested photo.
		 * * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
		 * Delete v1/photo/{photoId}
		 * @param {string} photoId Required. ID of the Photo.
		 * @return {void} Successful response
		 */
		Streetviewpublish_photo_delete(photoId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/photo/' + (photoId == null ? '' : encodeURIComponent(photoId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the metadata of the specified
		 * Photo.
		 * This method returns the following error codes:
		 * * google.rpc.Code.PERMISSION_DENIED if the requesting user did not
		 * create the requested Photo.
		 * * google.rpc.Code.NOT_FOUND if the requested
		 * Photo does not exist.
		 * * google.rpc.Code.UNAVAILABLE if the requested
		 * Photo is still being indexed.
		 * Get v1/photo/{photoId}
		 * @param {string} photoId Required. ID of the Photo.
		 * @param {string} languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 * If language_code is unspecified, the user's language preference for Google
		 * services is used.
		 * @param {Streetviewpublish_photo_getView} view Required. Specifies if a download URL for the photo bytes should be returned in the
		 * Photo response.
		 * @return {void} Successful response
		 */
		Streetviewpublish_photo_get(photoId: string, languageCode: string | null | undefined, view: Streetviewpublish_photo_getView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/photo/' + (photoId == null ? '' : encodeURIComponent(photoId)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an upload session to start uploading photo bytes.  The method uses
		 * the upload URL of the returned
		 * UploadRef to upload the bytes for
		 * the Photo.
		 * In addition to the photo requirements shown in
		 * https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604,
		 * the photo must meet the following requirements:
		 * * Photo Sphere XMP metadata must be included in the photo metadata. See
		 * https://developers.google.com/streetview/spherical-metadata for the
		 * required fields.
		 * * The pixel size of the photo must meet the size requirements listed in
		 * https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and
		 * the photo must be a full 360 horizontally.
		 * After the upload completes, the method uses
		 * UploadRef with
		 * CreatePhoto
		 * to create the Photo object entry.
		 * Post v1/photo:startUpload
		 * @return {void} Successful response
		 */
		Streetviewpublish_photo_startUpload(requestBody: Empty): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/photo:startUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the Photos that belong to
		 * the user.
		 * <aside class="note"><b>Note:</b> Recently created photos that are still
		 * being indexed are not returned in the response.</aside>
		 * Get v1/photos
		 * @param {string} filter Required. The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`.
		 * The only filter supported at the moment is `placeId`.
		 * @param {string} languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 * If language_code is unspecified, the user's language preference for Google
		 * services is used.
		 * @param {number} pageSize The maximum number of photos to return.
		 * `pageSize` must be non-negative. If `pageSize` is zero or is not provided,
		 * the default page size of 100 is used.
		 * The number of photos returned in the response may be less than `pageSize`
		 * if the number of photos that belong to the user is less than `pageSize`.
		 * @param {string} pageToken The
		 * nextPageToken
		 * value returned from a previous
		 * ListPhotos
		 * request, if any.
		 * @param {Streetviewpublish_photo_getView} view Required. Specifies if a download URL for the photos bytes should be returned in the
		 * Photos response.
		 * @return {void} Successful response
		 */
		Streetviewpublish_photos_list(filter: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Streetviewpublish_photo_getView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/photos?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a list of Photos and their
		 * metadata.
		 * Note that if
		 * BatchDeletePhotos
		 * fails, either critical fields are missing or there is an authentication
		 * error. Even if
		 * BatchDeletePhotos
		 * succeeds, individual photos in the batch may have failures.
		 * These failures are specified in each
		 * PhotoResponse.status
		 * in
		 * BatchDeletePhotosResponse.results.
		 * See
		 * DeletePhoto
		 * for specific failures that can occur per photo.
		 * Post v1/photos:batchDelete
		 * @return {void} Successful response
		 */
		Streetviewpublish_photos_batchDelete(requestBody: BatchDeletePhotosRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/photos:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the metadata of the specified
		 * Photo batch.
		 * Note that if
		 * BatchGetPhotos
		 * fails, either critical fields are missing or there is an authentication
		 * error. Even if
		 * BatchGetPhotos
		 * succeeds, individual photos in the batch may have failures.
		 * These failures are specified in each
		 * PhotoResponse.status
		 * in
		 * BatchGetPhotosResponse.results.
		 * See
		 * GetPhoto
		 * for specific failures that can occur per photo.
		 * Get v1/photos:batchGet
		 * @param {string} languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 * If language_code is unspecified, the user's language preference for Google
		 * services is used.
		 * @param {Array<string>} photoIds Required. IDs of the Photos. For HTTP
		 * GET requests, the URL query parameter should be
		 * `photoIds=<id1>&photoIds=<id2>&...`.
		 * @param {Streetviewpublish_photo_getView} view Required. Specifies if a download URL for the photo bytes should be returned in the
		 * Photo response.
		 * @return {void} Successful response
		 */
		Streetviewpublish_photos_batchGet(languageCode: string | null | undefined, photoIds: Array<string> | null | undefined, view: Streetviewpublish_photo_getView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/photos:batchGet?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&' + photoIds?.map(z => `photoIds=${encodeURIComponent(z)}`).join('&') + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the metadata of Photos, such
		 * as pose, place association, connections, etc. Changing the pixels of photos
		 * is not supported.
		 * Note that if
		 * BatchUpdatePhotos
		 * fails, either critical fields are missing or there is an authentication
		 * error. Even if
		 * BatchUpdatePhotos
		 * succeeds, individual photos in the batch may have failures.
		 * These failures are specified in each
		 * PhotoResponse.status
		 * in
		 * BatchUpdatePhotosResponse.results.
		 * See
		 * UpdatePhoto
		 * for specific failures that can occur per photo.
		 * Only the fields specified in
		 * updateMask
		 * field are used. If `updateMask` is not present, the update applies to all
		 * fields.
		 * The number of
		 * UpdatePhotoRequest
		 * messages in a
		 * BatchUpdatePhotosRequest
		 * must not exceed 20.
		 * <aside class="note"><b>Note:</b> To update
		 * Pose.altitude,
		 * Pose.latLngPair has to be
		 * filled as well. Otherwise, the request will fail.</aside>
		 * Post v1/photos:batchUpdate
		 * @return {void} Successful response
		 */
		Streetviewpublish_photos_batchUpdate(requestBody: BatchUpdatePhotosRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/photos:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Streetviewpublish_photo_getView { BASIC = 0, INCLUDE_DOWNLOAD_URL = 1 }

}

