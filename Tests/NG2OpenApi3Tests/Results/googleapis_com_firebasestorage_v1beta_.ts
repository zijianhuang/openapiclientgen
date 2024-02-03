import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The request used to link a Google Cloud Storage bucket to a Firebase project. */
	export interface AddFirebaseRequest {
	}

	/** The request used to link a Google Cloud Storage bucket to a Firebase project. */
	export interface AddFirebaseRequestFormProperties {
	}
	export function CreateAddFirebaseRequestFormGroup() {
		return new FormGroup<AddFirebaseRequestFormProperties>({
		});

	}


	/** A storage bucket and its relation to a parent Firebase project. */
	export interface Bucket {

		/** Output only. Resource name of the bucket. */
		name?: string | null;
	}

	/** A storage bucket and its relation to a parent Firebase project. */
	export interface BucketFormProperties {

		/** Output only. Resource name of the bucket. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBucketFormGroup() {
		return new FormGroup<BucketFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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


	/** Metadata for MigrateLocationDestructively LRO. */
	export interface GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata {

		/** The time the LRO was created. */
		createTime?: string | null;

		/** The time the LRO was last updated. */
		lastUpdateTime?: string | null;

		/** The current state of the migration. */
		state?: GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataState | null;
	}

	/** Metadata for MigrateLocationDestructively LRO. */
	export interface GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataFormProperties {

		/** The time the LRO was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the LRO was last updated. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** The current state of the migration. */
		state: FormControl<GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataState | null | undefined>,
	}
	export function CreateGoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataFormGroup() {
		return new FormGroup<GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', CREATING_TEMP_BUCKET = 'CREATING_TEMP_BUCKET', TRANSFERRING_TO_TEMP = 'TRANSFERRING_TO_TEMP', DELETING_SOURCE_BUCKET = 'DELETING_SOURCE_BUCKET', CREATING_DESTINATION_BUCKET = 'CREATING_DESTINATION_BUCKET', TRANSFERRING_TO_DESTINATION = 'TRANSFERRING_TO_DESTINATION', DELETING_TEMP_BUCKET = 'DELETING_TEMP_BUCKET', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', ROLLING_BACK = 'ROLLING_BACK', ROLLED_BACK = 'ROLLED_BACK' }


	/** Metadata for MigrateLocationDestructively LRO. */
	export interface GoogleFirebaseStorageControlplaneV1betaMigrateLocationDestructivelyMetadata {

		/** The time the LRO was created. */
		createTime?: string | null;

		/** The time the LRO was last updated. */
		lastUpdateTime?: string | null;

		/** The current state of the migration. */
		state?: GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataState | null;
	}

	/** Metadata for MigrateLocationDestructively LRO. */
	export interface GoogleFirebaseStorageControlplaneV1betaMigrateLocationDestructivelyMetadataFormProperties {

		/** The time the LRO was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the LRO was last updated. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** The current state of the migration. */
		state: FormControl<GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataState | null | undefined>,
	}
	export function CreateGoogleFirebaseStorageControlplaneV1betaMigrateLocationDestructivelyMetadataFormGroup() {
		return new FormGroup<GoogleFirebaseStorageControlplaneV1betaMigrateLocationDestructivelyMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataState | null | undefined>(undefined),
		});

	}


	/** The response returned by `ListBuckets`. */
	export interface ListBucketsResponse {

		/** The list of linked buckets. */
		buckets?: Array<Bucket>;

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** The response returned by `ListBuckets`. */
	export interface ListBucketsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBucketsResponseFormGroup() {
		return new FormGroup<ListBucketsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request used to unlink a Google Cloud Storage bucket from a Firebase project. */
	export interface RemoveFirebaseRequest {
	}

	/** The request used to unlink a Google Cloud Storage bucket from a Firebase project. */
	export interface RemoveFirebaseRequestFormProperties {
	}
	export function CreateRemoveFirebaseRequestFormGroup() {
		return new FormGroup<RemoveFirebaseRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Links a Google Cloud Storage bucket to a Firebase project.
		 * Post v1beta/{bucket}:addFirebase
		 * @param {string} bucket Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`.
		 * @return {Bucket} Successful response
		 */
		Firebasestorage_projects_buckets_addFirebase(bucket: string, requestBody: AddFirebaseRequest): Observable<Bucket> {
			return this.http.post<Bucket>(this.baseUri + 'v1beta/' + (bucket == null ? '' : encodeURIComponent(bucket)) + ':addFirebase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unlinks a linked Google Cloud Storage bucket from a Firebase project.
		 * Post v1beta/{bucket}:removeFirebase
		 * @param {string} bucket Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`.
		 * @return {Empty} Successful response
		 */
		Firebasestorage_projects_buckets_removeFirebase(bucket: string, requestBody: RemoveFirebaseRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta/' + (bucket == null ? '' : encodeURIComponent(bucket)) + ':removeFirebase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a single linked storage bucket.
		 * Get v1beta/{name}
		 * @param {string} name Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`.
		 * @return {Bucket} Successful response
		 */
		Firebasestorage_projects_buckets_get(name: string): Observable<Bucket> {
			return this.http.get<Bucket>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists the linked storage buckets for a project.
		 * Get v1beta/{parent}/buckets
		 * @param {string} parent Required. Resource name of the parent Firebase project, `projects/{project_id_or_number}`.
		 * @param {number} pageSize The maximum number of buckets to return. If not set, the server will use a reasonable default.
		 * @param {string} pageToken A page token, received from a previous `ListBuckets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBuckets` must match the call that provided the page token.
		 * @return {ListBucketsResponse} Successful response
		 */
		Firebasestorage_projects_buckets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBucketsResponse> {
			return this.http.get<ListBucketsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/buckets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

