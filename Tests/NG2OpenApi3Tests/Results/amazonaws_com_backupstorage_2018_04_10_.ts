import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface ServiceInternalException {
	}
	export interface ServiceInternalExceptionFormProperties {
	}
	export function CreateServiceInternalExceptionFormGroup() {
		return new FormGroup<ServiceInternalExceptionFormProperties>({
		});

	}

	export interface RetryableException {
	}
	export interface RetryableExceptionFormProperties {
	}
	export function CreateRetryableExceptionFormGroup() {
		return new FormGroup<RetryableExceptionFormProperties>({
		});

	}

	export interface IllegalArgumentException {
	}
	export interface IllegalArgumentExceptionFormProperties {
	}
	export function CreateIllegalArgumentExceptionFormGroup() {
		return new FormGroup<IllegalArgumentExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface GetChunkOutput {

		/** Required */
		Data: string;
	}
	export interface GetChunkOutputFormProperties {

		/** Required */
		Data: FormControl<string | null | undefined>,
	}
	export function CreateGetChunkOutputFormGroup() {
		return new FormGroup<GetChunkOutputFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KMSInvalidKeyUsageException {
	}
	export interface KMSInvalidKeyUsageExceptionFormProperties {
	}
	export function CreateKMSInvalidKeyUsageExceptionFormGroup() {
		return new FormGroup<KMSInvalidKeyUsageExceptionFormProperties>({
		});

	}

	export interface GetObjectMetadataOutput {
		MetadataBlob?: string;
	}
	export interface GetObjectMetadataOutputFormProperties {
		MetadataBlob: FormControl<string | null | undefined>,
	}
	export function CreateGetObjectMetadataOutputFormGroup() {
		return new FormGroup<GetObjectMetadataOutputFormProperties>({
			MetadataBlob: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChunksOutput {

		/** Required */
		ChunkList: Array<Chunk>;
		NextToken?: string;
	}
	export interface ListChunksOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChunksOutputFormGroup() {
		return new FormGroup<ListChunksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Chunk */
	export interface Chunk {

		/** Required */
		Index: number;

		/** Required */
		Length: number;

		/** Required */
		Checksum: string;

		/** Required */
		ChecksumAlgorithm: DataChecksumAlgorithm;

		/** Required */
		ChunkToken: string;
	}

	/** Chunk */
	export interface ChunkFormProperties {

		/** Required */
		Index: FormControl<number | null | undefined>,

		/** Required */
		Length: FormControl<number | null | undefined>,

		/** Required */
		Checksum: FormControl<string | null | undefined>,

		/** Required */
		ChecksumAlgorithm: FormControl<DataChecksumAlgorithm | null | undefined>,

		/** Required */
		ChunkToken: FormControl<string | null | undefined>,
	}
	export function CreateChunkFormGroup() {
		return new FormGroup<ChunkFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Checksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChecksumAlgorithm: new FormControl<DataChecksumAlgorithm | null | undefined>(undefined, [Validators.required]),
			ChunkToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataChecksumAlgorithm { SHA256 = 'SHA256' }

	export interface ListObjectsOutput {

		/** Required */
		ObjectList: Array<BackupObject>;
		NextToken?: string;
	}
	export interface ListObjectsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListObjectsOutputFormGroup() {
		return new FormGroup<ListObjectsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object */
	export interface BackupObject {

		/** Required */
		Name: string;
		ChunksCount?: number | null;
		MetadataString?: string;

		/** Required */
		ObjectChecksum: string;

		/** Required */
		ObjectChecksumAlgorithm: SummaryChecksumAlgorithm;

		/** Required */
		ObjectToken: string;
	}

	/** Object */
	export interface BackupObjectFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ChunksCount: FormControl<number | null | undefined>,
		MetadataString: FormControl<string | null | undefined>,

		/** Required */
		ObjectChecksum: FormControl<string | null | undefined>,

		/** Required */
		ObjectChecksumAlgorithm: FormControl<SummaryChecksumAlgorithm | null | undefined>,

		/** Required */
		ObjectToken: FormControl<string | null | undefined>,
	}
	export function CreateBackupObjectFormGroup() {
		return new FormGroup<BackupObjectFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChunksCount: new FormControl<number | null | undefined>(undefined),
			MetadataString: new FormControl<string | null | undefined>(undefined),
			ObjectChecksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectChecksumAlgorithm: new FormControl<SummaryChecksumAlgorithm | null | undefined>(undefined, [Validators.required]),
			ObjectToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SummaryChecksumAlgorithm { SUMMARY = 'SUMMARY' }

	export interface NotifyObjectCompleteOutput {

		/** Required */
		ObjectChecksum: string;

		/** Required */
		ObjectChecksumAlgorithm: SummaryChecksumAlgorithm;
	}
	export interface NotifyObjectCompleteOutputFormProperties {

		/** Required */
		ObjectChecksum: FormControl<string | null | undefined>,

		/** Required */
		ObjectChecksumAlgorithm: FormControl<SummaryChecksumAlgorithm | null | undefined>,
	}
	export function CreateNotifyObjectCompleteOutputFormGroup() {
		return new FormGroup<NotifyObjectCompleteOutputFormProperties>({
			ObjectChecksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectChecksumAlgorithm: new FormControl<SummaryChecksumAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotReadableInputStreamException {
	}
	export interface NotReadableInputStreamExceptionFormProperties {
	}
	export function CreateNotReadableInputStreamExceptionFormGroup() {
		return new FormGroup<NotReadableInputStreamExceptionFormProperties>({
		});

	}

	export interface PutChunkOutput {

		/** Required */
		ChunkChecksum: string;

		/** Required */
		ChunkChecksumAlgorithm: DataChecksumAlgorithm;
	}
	export interface PutChunkOutputFormProperties {

		/** Required */
		ChunkChecksum: FormControl<string | null | undefined>,

		/** Required */
		ChunkChecksumAlgorithm: FormControl<DataChecksumAlgorithm | null | undefined>,
	}
	export function CreatePutChunkOutputFormGroup() {
		return new FormGroup<PutChunkOutputFormProperties>({
			ChunkChecksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChunkChecksumAlgorithm: new FormControl<DataChecksumAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutObjectOutput {

		/** Required */
		InlineChunkChecksum: string;

		/** Required */
		InlineChunkChecksumAlgorithm: DataChecksumAlgorithm;

		/** Required */
		ObjectChecksum: string;

		/** Required */
		ObjectChecksumAlgorithm: SummaryChecksumAlgorithm;
	}
	export interface PutObjectOutputFormProperties {

		/** Required */
		InlineChunkChecksum: FormControl<string | null | undefined>,

		/** Required */
		InlineChunkChecksumAlgorithm: FormControl<DataChecksumAlgorithm | null | undefined>,

		/** Required */
		ObjectChecksum: FormControl<string | null | undefined>,

		/** Required */
		ObjectChecksumAlgorithm: FormControl<SummaryChecksumAlgorithm | null | undefined>,
	}
	export function CreatePutObjectOutputFormGroup() {
		return new FormGroup<PutObjectOutputFormProperties>({
			InlineChunkChecksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InlineChunkChecksumAlgorithm: new FormControl<DataChecksumAlgorithm | null | undefined>(undefined, [Validators.required]),
			ObjectChecksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectChecksumAlgorithm: new FormControl<SummaryChecksumAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartObjectOutput {

		/** Required */
		UploadId: string;
	}
	export interface StartObjectOutputFormProperties {

		/** Required */
		UploadId: FormControl<string | null | undefined>,
	}
	export function CreateStartObjectOutputFormGroup() {
		return new FormGroup<StartObjectOutputFormProperties>({
			UploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DataAlreadyExistsException {
	}
	export interface DataAlreadyExistsExceptionFormProperties {
	}
	export function CreateDataAlreadyExistsExceptionFormGroup() {
		return new FormGroup<DataAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface DeleteObjectInput {
	}
	export interface DeleteObjectInputFormProperties {
	}
	export function CreateDeleteObjectInputFormGroup() {
		return new FormGroup<DeleteObjectInputFormProperties>({
		});

	}

	export interface GetChunkInput {
	}
	export interface GetChunkInputFormProperties {
	}
	export function CreateGetChunkInputFormGroup() {
		return new FormGroup<GetChunkInputFormProperties>({
		});

	}

	export interface GetObjectMetadataInput {
	}
	export interface GetObjectMetadataInputFormProperties {
	}
	export function CreateGetObjectMetadataInputFormGroup() {
		return new FormGroup<GetObjectMetadataInputFormProperties>({
		});

	}

	export interface ListChunksInput {
	}
	export interface ListChunksInputFormProperties {
	}
	export function CreateListChunksInputFormGroup() {
		return new FormGroup<ListChunksInputFormProperties>({
		});

	}

	export interface ListObjectsInput {
	}
	export interface ListObjectsInputFormProperties {
	}
	export function CreateListObjectsInputFormGroup() {
		return new FormGroup<ListObjectsInputFormProperties>({
		});

	}

	export interface NotifyObjectCompleteInput {
		MetadataBlob?: string;
	}
	export interface NotifyObjectCompleteInputFormProperties {
		MetadataBlob: FormControl<string | null | undefined>,
	}
	export function CreateNotifyObjectCompleteInputFormGroup() {
		return new FormGroup<NotifyObjectCompleteInputFormProperties>({
			MetadataBlob: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutChunkInput {

		/** Required */
		Data: string;
	}
	export interface PutChunkInputFormProperties {

		/** Required */
		Data: FormControl<string | null | undefined>,
	}
	export function CreatePutChunkInputFormGroup() {
		return new FormGroup<PutChunkInputFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutObjectInput {
		InlineChunk?: string;
	}
	export interface PutObjectInputFormProperties {
		InlineChunk: FormControl<string | null | undefined>,
	}
	export function CreatePutObjectInputFormGroup() {
		return new FormGroup<PutObjectInputFormProperties>({
			InlineChunk: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartObjectInput {
		ThrowOnDuplicate?: boolean | null;
	}
	export interface StartObjectInputFormProperties {
		ThrowOnDuplicate: FormControl<boolean | null | undefined>,
	}
	export function CreateStartObjectInputFormGroup() {
		return new FormGroup<StartObjectInputFormProperties>({
			ThrowOnDuplicate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete Object from the incremental base Backup.
		 * Delete backup-jobs/{jobId}/object/{objectName}
		 * @param {string} jobId Backup job Id for the in-progress backup.
		 * @param {string} objectName The name of the Object.
		 * @return {void} Success
		 */
		DeleteObject(jobId: string, objectName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/object/' + (objectName == null ? '' : encodeURIComponent(objectName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start upload containing one or many chunks.
		 * Put backup-jobs/{jobId}/object/{objectName}
		 * @param {string} jobId Backup job Id for the in-progress backup
		 * @param {string} objectName Name for the object.
		 * @return {StartObjectOutput} Success
		 */
		StartObject(jobId: string, objectName: string, requestBody: StartObjectPutBody): Observable<StartObjectOutput> {
			return this.http.put<StartObjectOutput>(this.baseUri + 'backup-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/object/' + (objectName == null ? '' : encodeURIComponent(objectName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the specified object's chunk.
		 * Get restore-jobs/{jobId}/chunk/{chunkToken}
		 * @param {string} jobId Storage job id
		 * @param {string} chunkToken Chunk token
		 * @return {GetChunkOutput} Success
		 */
		GetChunk(jobId: string, chunkToken: string): Observable<GetChunkOutput> {
			return this.http.get<GetChunkOutput>(this.baseUri + 'restore-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/chunk/' + (chunkToken == null ? '' : encodeURIComponent(chunkToken)), {});
		}

		/**
		 * Get metadata associated with an Object.
		 * Get restore-jobs/{jobId}/object/{objectToken}/metadata
		 * @param {string} jobId Backup job id for the in-progress backup.
		 * @param {string} objectToken Object token.
		 * @return {GetObjectMetadataOutput} Success
		 */
		GetObjectMetadata(jobId: string, objectToken: string): Observable<GetObjectMetadataOutput> {
			return this.http.get<GetObjectMetadataOutput>(this.baseUri + 'restore-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/object/' + (objectToken == null ? '' : encodeURIComponent(objectToken)) + '/metadata', {});
		}

		/**
		 * List chunks in a given Object
		 * Get restore-jobs/{jobId}/chunks/{objectToken}/list
		 * @param {string} jobId Storage job id
		 * @param {string} objectToken Object token
		 * @param {number} max_results Maximum number of chunks
		 * @param {string} next_token Pagination token
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChunksOutput} Success
		 */
		ListChunks(jobId: string, objectToken: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChunksOutput> {
			return this.http.get<ListChunksOutput>(this.baseUri + 'restore-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/chunks/' + (objectToken == null ? '' : encodeURIComponent(objectToken)) + '/list&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List all Objects in a given Backup.
		 * Get restore-jobs/{jobId}/objects/list
		 * @param {string} jobId Storage job id
		 * @param {string} starting_object_name Optional, specifies the starting Object name to list from. Ignored if NextToken is not NULL
		 * @param {string} starting_object_prefix Optional, specifies the starting Object prefix to list from. Ignored if NextToken is not NULL
		 * @param {number} max_results Maximum objects count
		 * @param {string} next_token Pagination token
		 * @param {Date} created_before (Optional) Created before filter
		 * @param {Date} created_after (Optional) Created after filter
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectsOutput} Success
		 */
		ListObjects(jobId: string, starting_object_name: string | null | undefined, starting_object_prefix: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, created_before: Date | null | undefined, created_after: Date | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListObjectsOutput> {
			return this.http.get<ListObjectsOutput>(this.baseUri + 'restore-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/objects/list&starting_object_name=' + (starting_object_name == null ? '' : encodeURIComponent(starting_object_name)) + '&starting_object_prefix=' + (starting_object_prefix == null ? '' : encodeURIComponent(starting_object_prefix)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&created_before=' + created_before?.toISOString() + '&created_after=' + created_after?.toISOString() + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Complete upload
		 * Put backup-jobs/{jobId}/object/{uploadId}/complete#checksum&checksum-algorithm
		 * @param {string} jobId Backup job Id for the in-progress backup
		 * @param {string} uploadId Upload Id for the in-progress upload
		 * @param {string} checksum Object checksum
		 * @param {SummaryChecksumAlgorithm} checksum_algorithm Checksum algorithm
		 * @param {string} metadata_string Optional metadata associated with an Object. Maximum string length is 256 bytes.
		 * @param {number} metadata_blob_length The size of MetadataBlob.
		 * @param {string} metadata_checksum Checksum of MetadataBlob.
		 * @param {DataChecksumAlgorithm} metadata_checksum_algorithm Checksum algorithm.
		 * @return {NotifyObjectCompleteOutput} Success
		 */
		NotifyObjectComplete(jobId: string, uploadId: string, checksum: string, checksum_algorithm: SummaryChecksumAlgorithm, metadata_string: string | null | undefined, metadata_blob_length: number | null | undefined, metadata_checksum: string | null | undefined, metadata_checksum_algorithm: DataChecksumAlgorithm | null | undefined, requestBody: NotifyObjectCompletePutBody): Observable<NotifyObjectCompleteOutput> {
			return this.http.put<NotifyObjectCompleteOutput>(this.baseUri + 'backup-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/object/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '/complete#checksum&checksum-algorithm&checksum=' + (checksum == null ? '' : encodeURIComponent(checksum)) + '&checksum_algorithm=' + checksum_algorithm + '&metadata_string=' + (metadata_string == null ? '' : encodeURIComponent(metadata_string)) + '&metadata_blob_length=' + metadata_blob_length + '&metadata_checksum=' + (metadata_checksum == null ? '' : encodeURIComponent(metadata_checksum)) + '&metadata_checksum_algorithm=' + metadata_checksum_algorithm, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upload chunk.
		 * Put backup-jobs/{jobId}/chunk/{uploadId}/{chunkIndex}#length&checksum&checksum-algorithm
		 * @param {string} jobId Backup job Id for the in-progress backup.
		 * @param {string} uploadId Upload Id for the in-progress upload.
		 * @param {number} chunkIndex Describes this chunk's position relative to the other chunks
		 * @param {number} length Data length
		 * @param {string} checksum Data checksum
		 * @param {DataChecksumAlgorithm} checksum_algorithm Checksum algorithm
		 * @return {PutChunkOutput} Success
		 */
		PutChunk(jobId: string, uploadId: string, chunkIndex: number, length: number, checksum: string, checksum_algorithm: DataChecksumAlgorithm, requestBody: PutChunkPutBody): Observable<PutChunkOutput> {
			return this.http.put<PutChunkOutput>(this.baseUri + 'backup-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/chunk/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '/' + chunkIndex + '#length&checksum&checksum-algorithm&length=' + length + '&checksum=' + (checksum == null ? '' : encodeURIComponent(checksum)) + '&checksum_algorithm=' + checksum_algorithm, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upload object that can store object metadata String and data blob in single API call using inline chunk field.
		 * Put backup-jobs/{jobId}/object/{objectName}/put-object
		 * @param {string} jobId Backup job Id for the in-progress backup.
		 * @param {string} objectName The name of the Object to be uploaded.
		 * @param {string} metadata_string Store user defined metadata like backup checksum, disk ids, restore metadata etc.
		 * @param {number} length Length of the inline chunk data.
		 * @param {string} checksum Inline chunk checksum
		 * @param {string} checksum_algorithm Inline chunk checksum algorithm
		 * @param {string} object_checksum object checksum
		 * @param {SummaryChecksumAlgorithm} object_checksum_algorithm object checksum algorithm
		 * @param {boolean} throwOnDuplicate Throw an exception if Object name is already exist.
		 * @return {PutObjectOutput} Success
		 */
		PutObject(jobId: string, objectName: string, metadata_string: string | null | undefined, length: number | null | undefined, checksum: string | null | undefined, checksum_algorithm: string | null | undefined, object_checksum: string | null | undefined, object_checksum_algorithm: SummaryChecksumAlgorithm | null | undefined, throwOnDuplicate: boolean | null | undefined, requestBody: PutObjectPutBody): Observable<PutObjectOutput> {
			return this.http.put<PutObjectOutput>(this.baseUri + 'backup-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/object/' + (objectName == null ? '' : encodeURIComponent(objectName)) + '/put-object&metadata_string=' + (metadata_string == null ? '' : encodeURIComponent(metadata_string)) + '&length=' + length + '&checksum=' + (checksum == null ? '' : encodeURIComponent(checksum)) + '&checksum_algorithm=' + (checksum_algorithm == null ? '' : encodeURIComponent(checksum_algorithm)) + '&object_checksum=' + (object_checksum == null ? '' : encodeURIComponent(object_checksum)) + '&object_checksum_algorithm=' + object_checksum_algorithm + '&throwOnDuplicate=' + throwOnDuplicate, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface StartObjectPutBody {

		/** Throw an exception if Object name is already exist. */
		ThrowOnDuplicate?: boolean | null;
	}
	export interface StartObjectPutBodyFormProperties {

		/** Throw an exception if Object name is already exist. */
		ThrowOnDuplicate: FormControl<boolean | null | undefined>,
	}
	export function CreateStartObjectPutBodyFormGroup() {
		return new FormGroup<StartObjectPutBodyFormProperties>({
			ThrowOnDuplicate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NotifyObjectCompletePutBody {

		/** Optional metadata associated with an Object. Maximum length is 4MB. */
		MetadataBlob?: string | null;
	}
	export interface NotifyObjectCompletePutBodyFormProperties {

		/** Optional metadata associated with an Object. Maximum length is 4MB. */
		MetadataBlob: FormControl<string | null | undefined>,
	}
	export function CreateNotifyObjectCompletePutBodyFormGroup() {
		return new FormGroup<NotifyObjectCompletePutBodyFormProperties>({
			MetadataBlob: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutChunkPutBody {

		/**
		 * Data to be uploaded
		 * Required
		 */
		Data: string;
	}
	export interface PutChunkPutBodyFormProperties {

		/**
		 * Data to be uploaded
		 * Required
		 */
		Data: FormControl<string | null | undefined>,
	}
	export function CreatePutChunkPutBodyFormGroup() {
		return new FormGroup<PutChunkPutBodyFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutObjectPutBody {

		/** Inline chunk data to be uploaded. */
		InlineChunk?: string | null;
	}
	export interface PutObjectPutBodyFormProperties {

		/** Inline chunk data to be uploaded. */
		InlineChunk: FormControl<string | null | undefined>,
	}
	export function CreatePutObjectPutBodyFormGroup() {
		return new FormGroup<PutObjectPutBodyFormProperties>({
			InlineChunk: new FormControl<string | null | undefined>(undefined),
		});

	}

}

